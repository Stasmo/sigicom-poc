const Config = require('../models/Config');
const client = require('../lib/api')()
const formatSearch = require('../lib/format-search').formatSearch
const formatCsv = require('../lib/csv').formatCsv
const moment = require('moment-timezone')
const fs = require('fs')
const ftp = require('../lib/ftp')

exports.getSearch = async (req, res) => {
    let [ searchData, sensorData ] = await Promise.all([client.getSearches(), client.getSensors()])
    res.render('search', {
        title: 'Search',
        searchHistory: searchData.data,
        sensors: sensorData.data,
        timezones: moment.tz.names()
    });
};
  
exports.postSearch = async (req, res) => {
    let { sensors, from, to, tz, transient, interval, monon, sio, blast } = req.body
    try {
        let sensorsTrimmed = sensors
        .map(s => JSON.parse(s))
        .map(s => ({ type: s.type, serial: s.serial }))
        let result = await client.search(sensorsTrimmed, from, to, tz, transient == 'on', interval == 'on', monon == 'on', sio == 'on', blast == 'on')
        req.flash('success', { msg: 'Created new search ' +  result.data.id});
        res.redirect('/search')
    } catch(e) {
        console.error(e)
        if (e.response) {
            console.error(e.response.data)
        }
        res.sendStatus(500)
    }
};

exports.searchResults = async (req, res) => {
    let { searchId } = req.params
    try {
        let result = await client.getSearchData(searchId)
        let { meta, formattedData, formattedTransientData } = formatSearch(result)

        res.render('search-results', {
            title: 'Search results - ' + searchId,
            meta,
            searchId,
            searchData: formattedData,
            transientData: formattedTransientData,
        });
    } catch (e) {
        console.error(e)
        res.status(500).send(e.toString())
    }
}

exports.pushSearch = async (req, res) => {
    let { searchId } = req.params
    let { pushTransient, pushInterval } = req.body
    try {
        let filenames = await formatCsv(searchId)
        filenames.map(async filename => {
            if (!(pushTransient == 'on') && filename.includes('transient')) {
                fs.unlinkSync(filename)
                return 
            }
            if (!(pushInterval == 'on') && filename.includes('interval')) {
                fs.unlinkSync(filename)
                return 
            }
            await ftp.pushFileToFtp(filename)
            fs.unlinkSync(filename)
        })

        req.flash('success', { msg: 'Sent CSV data to VDV for search ' + searchId});
        res.redirect('/search')
    } catch(e) {
        console.error(e)
        res.sendStatus(500)
    }
}