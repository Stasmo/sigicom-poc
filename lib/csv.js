const formatSearch = require('./format-search').formatSearch
const client = require('./api')()
const fs = require('fs')

// TODO: Refactor into different functions for interval data and transient data
exports.formatCsv = async function(searchDataId) {
    let filenames = []
    let searchData = await client.getSearchData(searchDataId)
    let { meta, formattedData, formattedTransientData } = formatSearch(searchData)
    
    formattedData.map(async data => {
        // intervals
        let filename = `sigicom-interval-${data.serial}-` + 
            `${(new Date(meta.timestamp_from * 1000)).toISOString()}-` +
            `${(new Date(meta.timestamp_to * 1000)).toISOString()}.csv`
        let fileData = `timestamp,V,Vf,L,Lf,T,Tf\n`

        for (let i of data.intervals) fileData += `${i.timestamp},${i.V},${i.Vf || ''},${i.L},${i.Lf || ''},${i.T},${i.Tf || ''}\n`
        fs.writeFileSync(filename, fileData)
        filenames.push(filename)
    })

    formattedTransientData.map(async transient => {
        // transients
        filename = `sigicom-transient-${transient.serial}-${(new Date(transient.timestamp * 1000)).toISOString()}.csv`
        fileData = transient.data.map(row => row.join(',')).join("\n")

        fs.writeFileSync(filename, fileData)
        filenames.push(filename)
    })

    return filenames
}

