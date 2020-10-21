const axios = require('axios');
const moment = require('moment-timezone')

module.exports = function(options) {
    options = options || {}
    const client = axios.create({
        baseURL: process.env.SIGICOM_BASE_URL,
        auth: {
            username: options.API_USER || process.env.SIGICOM_API_USER,
            password: options.API_TOKEN || process.env.SIGICOM_API_TOKEN,
        }
    })

    /**
     * @param {String} id The ID of the sensor
     * 
     * @returns {Promise} A promise containing an axios response with the API data on resolution.
     */
    async function getSensor(id) {
        return client.get(`/api/v1/sensor/${id}/`)
    }

    /**
     * @returns {Promise} A promise containing an axios response with the API data on resolution.
     */
    async function getSensors() {
        return client.get(`/api/v1/sensor/`)
    }

    /**
     * @param {String} sensorId
     * @param {Date|String} from 
     * @param {Date|String} to 
     * @param {Boolean} transient
     * @param {Boolean} interval
     * @param {Boolean} monon
     * @param {Boolean} sio
     * @param {Boolean} blast
     * 
     * @returns {Promise} A promise containing an axios response with the API data on resolution.
     */
    async function searchSensor(sensorId, from, to, transient, interval, monon, sio, blast) {
        // Dates must be in YYYY-MM-DD HH:mm format
        let postData = { 
            datetime_from: moment(from).format("YYYY-MM-DD HH:mm")
        }

        // to is optional
        if (to) {
            postData["datetime_to"] = moment(to).format("YYYY-MM-DD HH:mm")
        }

        postData.data_types = {
            transient, interval, monon, sio, blast
        }

        return client.post(`/api/v1/sensor/${sensorId}/search/`, postData)
    }

    /**
     * @param {String} sensorId The ID of the sensor
     * 
     * @returns {Promise} A promise containing an axios response with the API data on resolution.
     */
    async function getSearchesForSensor(sensorId) {
        return client.get(`/api/v1/sensor/${sensorId}/search/`)
    }

    /**
     * @param {String} searchId The ID of the sigicom search object
     * 
     * @returns {Promise} A promise containing an object with the properties searchData and transientData,
     *                    each containing the response data for 
     */
    async function getSearchData(searchId) {
        let searchData = await client.get(`/api/v1/search/${searchId}/data`)
        let transientData = []
        
        // TODO: This was done for convenience during development.
        // This should be refactored, transients should not be returned as part of
        // this function call. Users should use the getSearchTransientData function.
        if (searchData.data.transients.length) {

            let promises = []
            searchData.data.transients.map(transient => {
                
                searchData.data.meta.devices.map(d => d.serial)
                .map(serial => {
                    transient[serial].transients.map(transient => {
                        console.log(transient)
                        promises.push(client.get(transient.transient_url))
                    })
                })
            })
            transientData = await Promise.all(promises)
        }
        return { searchData, transientData }
    }

    /**
     * 
     * @param {String} searchId  ID of the sigicom search
     * @param {String} transientKey  The ID of the transient event contained in the search.
     * 
     * @returns {Promise} A promise containing an axios response with the API data on resolution.
     */
    async function getSearchTransientData(searchId, transientKey) {
        return client.get(`/api/v1/search/${searchId}/transient_key/${transientKey}`)
    }

    /**
     * @returns {Promise} A promise containing an axios response with the API data on resolution.
     */
    async function getSearches() {
        return client.get(`/api/v1/search/`)
    }

    /**
     * @param {String} id 
     * 
     * @returns {Promise} A promise containing an axios response with the API data on resolution.
     */
    async function getSearch(id) {
        return client.get(`/api/v1/search/${id}`)
    }

    /**
     * This was used to create the API.md in the root of the project.
     * 
     * @param {String} api The path of the API
     * 
     * @returns Documentation for the API.
     */
    async function getDoc(api) {
        return client.get(`/apidoc/path/api/v1/${api}`, {
            Accept: 'application/octet-stream'
        })
    }

    /**
     * 
     * @param {Array.<{ type: String, serial: String|Number }>} sensors An array of objects with type and serial properties
     * @param {Date} fromDate 
     * @param {Date} toDate 
     * @param {String} timezone 
     * @param {Boolean} transient 
     * @param {Boolean} interval 
     * @param {Boolean} monon 
     * @param {Boolean} sio 
     * @param {Boolean} blast 
     * 
     * @returns {Promise} A promise containing an axios response with the API data on resolution.
     */
    async function search(sensors, fromDate, toDate, timezone, transient, interval, monon, sio, blast) {
        return client.post(`/api/v1/search`, {
            devices: sensors,
            datetime_from: moment(fromDate).tz(timezone).format('YYYY-MM-DD HH:mm'),
            datetime_to: toDate ? moment(toDate).tz(timezone).format('YYYY-MM-DD HH:mm') : undefined,
            timezone,
            transient,
            interval,
            monon,
            sio,
            blast
        })
    }

    return {
        getDoc,
        getSearch,
        getSearchData,
        getSearches,
        getSearchesForSensor,
        getSearchTransientData,
        getSensor,
        getSensors,
        searchSensor,
        search,
    }
}
