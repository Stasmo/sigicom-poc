const moment = require('moment-timezone')

// TODO: Refactor into different functions for interval data and transient data
exports.formatSearch = function(data) {
    let { searchData, transientData } = data
    let rawTransientData = transientData.map(d => d.data)

    let transientMap = {}

    rawTransientData.map(transient => {
        transientMap[transient.timestamp] = transientMap[transient.timestamp] || { serial: transient.node_serial }
        transientMap[transient.timestamp][transient.channel] = transient.data
    })

    let formattedTransientData = []
    for (let transientTimestamp of Object.keys(transientMap)) {
        let trans = transientMap[transientTimestamp]
        let combinedData = [['Timestamp', 'V', 'L', 'T']]
        for(let measurementTimestamp of Object.keys(trans['L'])) {
            let row = [measurementTimestamp].concat(['V', 'L', 'T'].map(i => trans[i][measurementTimestamp]))
            combinedData.push(row)
        }
        formattedTransientData.push({
            serial: trans.serial,
            timestamp: transientTimestamp,
            data: combinedData
        })
    }

    let { meta, meta: { devices, data_types }, intervals, transients } = searchData.data
    let extractIntervalForDevice = (device) => int => {
        let items = ((int[device.serial] && int[device.serial].intervals) || []).map(i => ({...i, datetime: int.datetime}))
        return items
    }
    let extractTransientsForDevice = (device) => trans => {
        let items = ((trans[device.serial] && trans[device.serial].transients) || []).map(i => ({...i, datetime: trans.datetime}))
        return items
    }
    let filterOutEmpty = item => item.length != 0

    let convertFromArrayToRow = data => ({
        // TODO: Don't hardcode the timezone. Get from config.
        timestamp: moment.tz(data[0].datetime, meta.timezone).tz('America/Vancouver').format(),
        V: data[0].value,
        Vf: data[0].frequency,
        L: data[1].value,
        Lf: data[1].frequency,
        T: data[2].value,
        Tf: data[2].frequency,
    })

    let formattedData = devices.map(device => {
        let data = { serial: device.serial }
        if (data_types.transient) {
            data['transients'] = transients.map(extractTransientsForDevice(device)).filter(filterOutEmpty).map(convertFromArrayToRow)
        }
        if (data_types.interval) {
            data['intervals'] = intervals.map(extractIntervalForDevice(device)).filter(filterOutEmpty).map(convertFromArrayToRow)
        }

        return data
    })

    return { formattedData, formattedTransientData, meta }
}