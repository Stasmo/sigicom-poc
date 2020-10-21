const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    name: String,
    status: String,
    sensorIds: Array,
    collectRange: Number,
}, { timestamps: true })

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;