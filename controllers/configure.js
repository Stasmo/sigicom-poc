const Config = require('../models/Config');
const collectDataTask = require('../scheduled/collect-data')
const client = require('../lib/api')()

exports.getConfig = (req, res) => {
    Config.findOne({ name: 'appConfig' }, null, { lean: true })
    .then(async appConfig => {
        let sensors = await client.getSensors()
        let data = Object.assign({ title: 'Configure', sensors: sensors.data }, appConfig)
        res.render('configure', data);
    })
    .catch(err => {
        console.error(err)
        res.sendStatus(500)
    })
  };
  
exports.postConfig = async (req, res) => {
    req.body.enableCron = req.body.enableCron == "true"
    req.body.alertWhenSyncFailed = req.body.alertWhenSyncFailed == "true"
    Config.findOne({ name: 'appConfig' })
    .then(async item => {
        if (!item) {
            item = await Config.create({ name: 'appConfig' })
        }
        delete req.body._csrf
        item = Object.assign(item, req.body)
        await item.save()
        req.flash('success', { msg: 'Saved config' })
        res.redirect('/config')
        collectDataTask.init()
    })
    .catch(e => {
        console.error(e)
        res.sendStatus(500)
    })
};