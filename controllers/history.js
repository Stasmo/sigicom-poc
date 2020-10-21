const Job = require('../models/Job')

exports.getHistory = async (req, res) => {
    let jobs = await Job.find()
    res.render('history', {
        title: 'History',
        jobs
    })
}