const mongoose = require('mongoose');

const configSchema = new mongoose.Schema({
    name: String,
    sensorIds: Array,
    collectRange: Number,
    cronPattern: String,
    enableCron: Boolean,
    enableTransient: Boolean,
    enableInterval: Boolean,
    fromEmailAddress: String,
    appName: String,
    alertWhenSyncFailed: Boolean,
    alertEmailAddress: String,
}, { timestamps: true });


const Config = mongoose.model('Config', configSchema);

module.exports = Config;
