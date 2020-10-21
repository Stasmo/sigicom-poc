let fs = require('fs')
let client = require('../lib/api')()
var CronJob = require('cron').CronJob;
let Config = require('../models/Config')
let Job = require('../models/Job')
let job
const formatCsv = require('../lib/csv').formatCsv

let mailer = require('../lib/mailer')

const defaultCronPattern = "0 15 * * * *"

let ftp = require('../lib/ftp')

async function init() {
    let appConfig = await Config.findOne({ name: 'appConfig' })
    let cronPattern = appConfig.cronPattern || defaultCronPattern
    let enabled = appConfig.enableCron

    if (enabled) {
        if (job) {
            console.log('Stopping old job')
            job.stop()
        }
        console.log('Creating a new job')
        job = new CronJob(cronPattern, collectData)
    
        job.start()
    } else {
        if (job) {
            console.log('Stopping job')
            job.stop()
        }
    }
}

async function collectData() {
    // Get the config so we know what we're doing here

    let appConfig = await Config.findOne({ name: 'appConfig' })
    let jobName =  'Scheduled data sync'
    let from = new Date(Date.now() - appConfig.collectRange * 1000)
    let to = new Date()
    let jobStatus = await Job.create({
        name: jobName,
        status: 'running',
        sensorIds: appConfig.sensorIds,
        collectRange: appConfig.collectRange,
    })
    
    try {
        let sensorData = await client.getSensors()
        let sensorsTrimmed = sensorData.data
        .filter(s => appConfig.sensorIds.includes(s.serial))
        .map(s => ({ type: s.type, serial: s.serial }))

        let searchSuccessful = false

        trySearch: while (!searchSuccessful) {

            // create a search
            
            let search = await client.search(sensorsTrimmed, from.toUTCString(), to.toUTCString(), 'UTC')
            let searchInfo = search.data

            // wait for search to finish
            let searchResult

            do {
                await new Promise((r) => setTimeout(r, 5000))
                searchResult = await client.getSearch(searchInfo.id)
            } while(searchResult.data.status == 'running')


            // wait some more, because sometimes you still get a 404 even after the
            // API says the search is finished
            await new Promise((r) => setTimeout(r, 10000))

            // format

            let filenames = null

            try {
                filenames = await formatCsv(searchResult.data.id)
                searchSuccessful = true
            } catch(e) {
                searchSuccessful = false
                continue trySearch
            }
            filenames.map(async filename => {
                if (!(appConfig.enableTransient == 'on') && filename.includes('transient')) {
                    fs.unlinkSync(filename)
                    return 
                }
                if (!(appConfig.enableInterval == 'on') && filename.includes('interval')) {
                    fs.unlinkSync(filename)
                    return 
                }
                await ftp.pushFileToFtp(filename)
                fs.unlinkSync(filename)
            })
    
            // log success
            jobStatus.status = 'success'
            jobStatus.save()

        }

        
    } catch(e) {
        console.error(e)
        jobStatus.status = 'error'
        jobStatus.error = e.toString()
        jobStatus.save()
        // send an email alert about the failure
        if (appConfig.alertWhenSyncFailed && appConfig.alertEmailAddress) {
            await mailer.sendMail({
                to: appConfig.alertEmailAddress,
                from: appConfig.fromEmailAddress,
                subject: appConfig.appName + ' failed to sync data',
                text: 'Failed to sync data to VDV.',
            })
        }
    }
}

exports.init = init
