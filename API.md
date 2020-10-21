## /apidoc/path/api/v1/sensor

## Response JSON

```json
{
 "self_url": "/apidoc/path/api/v1/sensor",
 "paths": [
  "/api/:api_version/sensor/:serial/",
  "/api/:api_version/sensor/"
 ],
 "name": "inapi_sensor_r",
 "module": "inapi_sensor_r",
 "markdown_extra": "\n**Show sensor**\n----\n  Returns json data about a single user.\n\n* **URL**\n\n  /sensor/\n  /sensor/:id\n\n* **Method:**\n\n  `GET`\n  \n*  **URL Params**\n \n   `id=[integer]`\n\n* **Data Params**\n\n  None\n\n* **Success Response:**\n\n  * **Code:** 200\n    \n    **Content:** `{\n                   \"serial\":7658,\n                   \"type\":\"X20WMT\"\n                  }`\n \n* **Error Response:**\n\n  * **Code:** 404 NOT FOUND <br />\n\n  OR\n\n  * **Code:** 401 UNAUTHORIZED <br />\n  \n\n* **Sample Call:**\n    \n    ```\n    curl -i -H \"Accept: application/json\" -u \"user:808:06ea4c0915573e0e9e079221c73ee820d1b48831962233a6e114b2fe83d\" \n         http://sigicom.infranet.com/api/v1/sensor/100004/\n    ```\n         \n    ```json\n    {\n      \"type\": \"C20\",\n      \"transient_time\": 1,\n      \"state\": \"regon\",\n      \"standard_info\": { \"standard_text\": \"SS 4604866 Spräng 250mm/s 5-300Hz\", \"channel_count\": 1 },\n      \"standard_id\": \"1A\",\n      \"serial\": 100004,\n      \"sensor_test\": { },\n      \"search_url\": \"/api/v1/sensor/100004/search\",\n      \"network_id\": 0,\n      \"last_master_serial\": 100004,\n      \"interval_time\": 5,\n      \"infra_timestamp_last_read\": 19388577660814,\n      \"file_url\": \"/api/v1/sensor/100004/file/\",\n      \"file_key\": \"c1-C20-100004-97rbgB4AEce7nFvT0ZaElg==\",\n      \"customer_string\": \"\",\n      \"channels\": [\n        {\n          \"presentation\": {\n            \"unit_code\": 11136,\n            \"threshold\": { \"resolution\": 1, \"digits\": 3 },\n            \"quantity_code\": 11009,\n            \"data\": { \"under_range_limit\": null, \"resolution\": null, \"over_range_limit\": null, \"digits\": null }\n          },\n          \"name\": \"V\",\n          \"max_threshold_value\": 4.820000171661377,\n          \"max_threshold_enable\": true\n        }\n      ],\n      \"calibration_date\": \"2000-01-01\"\n    }\n  ```\n  \n  ",
 "description": [
  82,
  101,
  115,
  111,
  117,
  114,
  99,
  101,
  32,
  102,
  111,
  114,
  32,
  108,
  105,
  115,
  116,
  105,
  110,
  103,
  32,
  115,
  101,
  110,
  115,
  111,
  114,
  115,
  32,
  99,
  111,
  110,
  110,
  101,
  99,
  116,
  101,
  100,
  32,
  116,
  111,
  32,
  97,
  32,
  99,
  111,
  109,
  112,
  97,
  110,
  121
 ],
 "content_types_provided": [
  "application/json",
  "application/javascript",
  "text/html",
  "application/octet-stream"
 ],
 "content_types_allowed": [
  "application/json",
  "application/javascript"
 ],
 "children": {},
 "allowed_methods": [
  "HEAD",
  "GET",
  "OPTIONS"
 ]
}
```


**Show sensor**
----
  Returns json data about a single user.

* **URL**

  /sensor/
  /sensor/:id

* **Method:**

  `GET`
  
*  **URL Params**
 
   `id=[integer]`

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200
    
    **Content:** `{
                   "serial":7658,
                   "type":"X20WMT"
                  }`
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />

  OR

  * **Code:** 401 UNAUTHORIZED <br />
  

* **Sample Call:**
    
    ```
    curl -i -H "Accept: application/json" -u "user:808:06ea4c0915573e0e9e079221c73ee820d1b48831962233a6e114b2fe83d" 
         http://sigicom.infranet.com/api/v1/sensor/100004/
    ```
         
    ```json
    {
      "type": "C20",
      "transient_time": 1,
      "state": "regon",
      "standard_info": { "standard_text": "SS 4604866 Spräng 250mm/s 5-300Hz", "channel_count": 1 },
      "standard_id": "1A",
      "serial": 100004,
      "sensor_test": { },
      "search_url": "/api/v1/sensor/100004/search",
      "network_id": 0,
      "last_master_serial": 100004,
      "interval_time": 5,
      "infra_timestamp_last_read": 19388577660814,
      "file_url": "/api/v1/sensor/100004/file/",
      "file_key": "c1-C20-100004-97rbgB4AEce7nFvT0ZaElg==",
      "customer_string": "",
      "channels": [
        {
          "presentation": {
            "unit_code": 11136,
            "threshold": { "resolution": 1, "digits": 3 },
            "quantity_code": 11009,
            "data": { "under_range_limit": null, "resolution": null, "over_range_limit": null, "digits": null }
          },
          "name": "V",
          "max_threshold_value": 4.820000171661377,
          "max_threshold_enable": true
        }
      ],
      "calibration_date": "2000-01-01"
    }
  ```
  
  

## /apidoc/path/api/v1/project

## Response JSON

```json
{
 "self_url": "/apidoc/path/api/v1/project",
 "paths": [
  "/api/:api_version/project/:project_id/",
  "/api/:api_version/project/"
 ],
 "name": "inapi_project_r",
 "module": "inapi_project_r",
 "content_types_provided": [
  "application/json",
  "application/javascript",
  "text/html",
  "application/octet-stream"
 ],
 "content_types_allowed": [
  "application/json",
  "application/javascript"
 ],
 "children": {},
 "allowed_methods": [
  "HEAD",
  "GET",
  "OPTIONS"
 ]
}
```

undefined

## /apidoc/path/api/v1/search_template

## Response JSON

```json
{
 "self_url": "/apidoc/path/api/v1/search_template",
 "schema": {
  "type": "object",
  "properties": {
   "periodicity": {
    "type": "string",
    "enum": [
     "daily",
     "weekly",
     "monthly",
     "yearly"
    ]
   },
   "datetime_to": {
    "type": "date-time"
   },
   "datetime_from": {
    "type": "date-time"
   }
  },
  "id": "http://schema.infra.io/schema/assignment.json",
  "description": "data search input template",
  "additionalProperties": true,
  "$schema": "http://json-schema.org/draft-04/schema#"
 },
 "paths": [
  "/api/:api_version/search_template/:template_id/",
  "/api/:api_version/search_template/"
 ],
 "name": "search_template",
 "module": "inapi_search_template_r",
 "description": [
  82,
  101,
  115,
  111,
  117,
  114,
  99,
  101,
  32,
  102,
  111,
  114,
  32,
  100,
  97,
  116,
  97,
  32,
  115,
  101,
  97,
  114,
  99,
  104,
  32,
  116,
  101,
  109,
  112,
  108,
  97,
  116,
  101,
  115
 ],
 "content_types_provided": [
  "application/json",
  "application/javascript",
  "text/html",
  "application/octet-stream"
 ],
 "content_types_allowed": [
  "application/json",
  "application/javascript"
 ],
 "children": {},
 "allowed_methods": [
  "HEAD",
  "GET",
  "OPTIONS",
  "POST"
 ]
}
```

undefined

## /apidoc/path/api/v1/search

## Response JSON

```json
{
 "self_url": "/apidoc/path/api/v1/search",
 "schema": {
  "type": "object",
  "required": [
   "devices",
   "datetime_from",
   "data_types"
  ],
  "properties": {
   "url": {
    "type": "string"
   },
   "timezone": {
    "type": "string"
   },
   "tags": {
    "type": "array",
    "items": {
     "type": "string"
    }
   },
   "respond_to": {
    "type": "string"
   },
   "name": {
    "type": "string"
   },
   "measure_points": {
    "type": "array",
    "items": {
     "type": "object",
     "required": [
      "id"
     ],
     "properties": {
      "id": {
       "type": "integer"
      }
     }
    }
   },
   "id": {
    "type": "string"
   },
   "devices": {
    "type": "array",
    "items": {
     "required": [
      "serial",
      "type"
     ],
     "properties": {
      "type": {
       "type": "string",
       "enum": [
        "C12",
        "V12",
        "V12R",
        "V12W",
        "V12B",
        "V10",
        "V11",
        "C10",
        "C20",
        "C22",
        "VS10",
        "VS12",
        "S50",
        "S51",
        "C55",
        "S10",
        "S11",
        "P10",
        "P11",
        "P12",
        "A10",
        "AMR1",
        "X20A",
        "X20B",
        "X20BP",
        "X20H",
        "X20R",
        "X20T",
        "X20V",
        "X20WD",
        "X20WS",
        "X20WXT",
        "X20WMT",
        "X20DM",
        "X20DM2",
        "X20SR",
        "X20CO2",
        "X20CO",
        "X20CH4",
        "X20NO2",
        "X20NO",
        "X20O3",
        "X20SO2",
        "X20VOC",
        "X20NH3",
        "XINC1"
       ]
      },
      "serial": {
       "type": "integer"
      }
     }
    }
   },
   "datetime_to": {
    "type": "string",
    "format": "date"
   },
   "datetime_from": {
    "type": "string",
    "format": "date"
   },
   "data_types": {
    "type": "object",
    "required": [
     "transient",
     "interval",
     "blast"
    ],
    "properties": {
     "transient": {
      "type": "boolean",
      "default": true
     },
     "sio": {
      "type": "boolean",
      "default": true
     },
     "monon": {
      "type": "boolean",
      "default": false
     },
     "interval": {
      "type": "boolean",
      "default": true
     },
     "blast": {
      "type": "boolean",
      "default": false
     }
    },
    "default": {
     "element": {
      "transient": true,
      "interval": true,
      "blast": false
     }
    }
   },
   "client_settings": {
    "type": "object"
   },
   "aggregator": {
    "type": "integer"
   }
  },
  "id": "http://schema.infra.io/schema/assignment.json",
  "description": "data search input",
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-04/schema#"
 },
 "paths": [
  "/api/:api_version/search_template/search/:search_id/",
  "/api/:api_version/search_template/search/",
  "/api/:api_version/search_template/:template_id/search/:search_id/",
  "/api/:api_version/search_template/:template_id/search/",
  "/api/:api_version/sensor/:serial/search/:search_id/",
  "/api/:api_version/sensor/:serial/search/",
  "/api/:api_version/search/:search_id/",
  "/api/:api_version/search/"
 ],
 "name": "search",
 "module": "inapi_device_search_r",
 "markdown_extra": "\n### /search\n\nData searches can be created under \n\n* Project\n* Measure point \n* Sensor\n* or directly in the root path\n\nexample of minimal viable data search:\n```json\n{\n\"datetime_from\": \"2019-12-01 00:00\",\n\"datetime_to\": \"2018-12-12 23:59\"\n}\n```\nthis works for Project, Measure point and Sensor searches\n\nFor v1/search you need to provide the device:\n```json\n{\n\"datetime_from\": \"2019-12-01 00:00\",\n\"datetime_to\": \"2018-12-12 23:59\"\n\"devices\": \n  [{\"type\": \"C22\",\n    \"serial\": 101033\n}]\n}\n```\n\n#### POST /search\n##### Summary:\n\nCreate a new data search\n\n##### Responses\n\n| Code | Description |\n| ---- | ----------- |\n| 303 | Data search was created |\n| 400 | Invalid input with body describing error | \n| 401 | Authorization information is missing or invalid. |\n\n* **Sample Call:**\n    \n    ```\n    curl -i  -H \"Content-Type: application/json\" -u user:1:token \\\n    http://sigicom.infranet.com/api/v1/sensor/100034/search \\\n    --data '{\"datetime_from\": \"2018-09-08 00:00\",\"datetime_to\": \"2018-09-15 23:59\"}'\n  \n    HTTP/1.1 303 See Other\n    content-length: 0\n    content-type: application/json\n    date: Mon, 01 Oct 2018 05:21:09 GMT\n    location: /sensor/100034/search/af4427fc-92ac-4be2-9b01-63f527399e79\n    server: Cowboy\n    vary: accept\n    ```\n  \n  #### GET\n  ##### Summary:\n  \n  List searches or get status of search\n  \n  ##### Responses\n  \n  | Code | Description |\n  | ---- | ----------- |\n  | 200 | OK response |\n  | 401 | Authorization information is missing or invalid. |\n    \n    ```\n    curl -u user:1:token  -H \"Accept: application/json\"\n    http://sigicom.infranet.com/api/v1/sensor/100034/search/af4427fc-92ac-4be2-9b01-63f527399e79    \n\n    {\n      \"timezone\": \"Europe/Stockholm\",\n      \"stats_url\": \"/api/v1/sensor/100004/search/af4427fc-92ac-4be2-9b01-63f527399e79/stats\",\n      \"state\": \"finished\",\n      \"id\": \"af4427fc-92ac-4be2-9b01-63f527399e79\",\n      \"finished_at\": \"2018-09-01 05:21:24\",\n      \"devices\": [{ \"type\": \"C20\", \"serial\": 100034 }],\n      \"datetime_to\": \"2018-09-15 23:59\",\n      \"datetime_from\": \"2018-09-08 00:00\",\n      \"data_url\": \"/api/v1/sensor/100004/search/af4427fc-92ac-4be2-9b01-63f527399e79/data\",\n      \"data_types\": { \"transient\": true, \"interval\": true, \"blast\": false },\n      \"created_at\": \"2018-09-01 05:21:09\",\n      \"company_id\": 1\n    }\n    ```\n  \n  When the search is finished, the data can be retrieved with:\n  \n    ```\n    curl -u user:1:token -H \"Accept: application/json\" -H \"Content-Encoding: gzip\" \\\n    http://sigicom.infranet.com/api/v1/sensor/100034/search/961be127-d098-41a9-a6d9-e47f13784199/data \\\n    | python -m json.tool > data.json\n    \n    less data.json\n \n    {\n        \"blasts\": [],\n        \"intervals\": [\n            {\n                \"100034\": {\n                    \"intervals\": [\n                        {\n                            \"frequency\": null,\n                            \"invalid\": false,\n                            \"label\": \"V\",\n                            \"max\": \"0.25\",\n                            \"meta_id\": \"28A__5__OFF\",\n                            \"overload\": false,\n                            \"regoff\": false,\n                            \"regon\": false,\n                            \"timestamp_max\": 20603262074880\n                        }]}}],\n \n    ```\n  \n  #### DELETE\n  ##### Responses\n  \n  | Code | Description |\n  | ---- | ----------- |\n  | 204 | The resource was deleted successfully |\n  | 401 | Authorization information is missing or invalid. |\n  \n  #### POST /search/id:\n  ##### Summary:\n  | Action | Description |\n  | ---- | ----------- |\n  | abort | Abort a running data search |\n  \n  ##### Responses\n  | Code | Description |\n  | ---- | ----------- |\n  | 204 | The action was applied successfully |\n  | 400 | Invalid input with body describing error |\n  | 401 | Authorization information is missing or invalid. |\n  \n  ##### Example\n  ```\n  curl -i  -H \"Accept: application/json\" -H \"Content-Type: application/json\" -u user:1:token \\\n  http://sigicom.infranet.com/api/v1/sensor/100034/search/af4427fc-92ac-4be2-9b01-63f527399e79 \\\n  --data '{\"action\":\"abort\"}'\n  ```\n  ",
 "description": "Resource for creating async data searches",
 "content_types_provided": [
  "application/json",
  "application/javascript",
  "text/html",
  "application/octet-stream"
 ],
 "content_types_allowed": [
  "application/json",
  "application/javascript"
 ],
 "children": {},
 "allowed_methods": [
  "HEAD",
  "GET",
  "OPTIONS",
  "POST",
  "PUT",
  "DELETE"
 ]
}
```


### /search

Data searches can be created under 

* Project
* Measure point 
* Sensor
* or directly in the root path

example of minimal viable data search:
```json
{
"datetime_from": "2019-12-01 00:00",
"datetime_to": "2018-12-12 23:59"
}
```
this works for Project, Measure point and Sensor searches

For v1/search you need to provide the device:
```json
{
"datetime_from": "2019-12-01 00:00",
"datetime_to": "2018-12-12 23:59"
"devices": 
  [{"type": "C22",
    "serial": 101033
}]
}
```

#### POST /search
##### Summary:

Create a new data search

##### Responses

| Code | Description |
| ---- | ----------- |
| 303 | Data search was created |
| 400 | Invalid input with body describing error | 
| 401 | Authorization information is missing or invalid. |

* **Sample Call:**
    
    ```
    curl -i  -H "Content-Type: application/json" -u user:1:token \
    http://sigicom.infranet.com/api/v1/sensor/100034/search \
    --data '{"datetime_from": "2018-09-08 00:00","datetime_to": "2018-09-15 23:59"}'
  
    HTTP/1.1 303 See Other
    content-length: 0
    content-type: application/json
    date: Mon, 01 Oct 2018 05:21:09 GMT
    location: /sensor/100034/search/af4427fc-92ac-4be2-9b01-63f527399e79
    server: Cowboy
    vary: accept
    ```
  
  #### GET
  ##### Summary:
  
  List searches or get status of search
  
  ##### Responses
  
  | Code | Description |
  | ---- | ----------- |
  | 200 | OK response |
  | 401 | Authorization information is missing or invalid. |
    
    ```
    curl -u user:1:token  -H "Accept: application/json"
    http://sigicom.infranet.com/api/v1/sensor/100034/search/af4427fc-92ac-4be2-9b01-63f527399e79    

    {
      "timezone": "Europe/Stockholm",
      "stats_url": "/api/v1/sensor/100004/search/af4427fc-92ac-4be2-9b01-63f527399e79/stats",
      "state": "finished",
      "id": "af4427fc-92ac-4be2-9b01-63f527399e79",
      "finished_at": "2018-09-01 05:21:24",
      "devices": [{ "type": "C20", "serial": 100034 }],
      "datetime_to": "2018-09-15 23:59",
      "datetime_from": "2018-09-08 00:00",
      "data_url": "/api/v1/sensor/100004/search/af4427fc-92ac-4be2-9b01-63f527399e79/data",
      "data_types": { "transient": true, "interval": true, "blast": false },
      "created_at": "2018-09-01 05:21:09",
      "company_id": 1
    }
    ```
  
  When the search is finished, the data can be retrieved with:
  
    ```
    curl -u user:1:token -H "Accept: application/json" -H "Content-Encoding: gzip" \
    http://sigicom.infranet.com/api/v1/sensor/100034/search/961be127-d098-41a9-a6d9-e47f13784199/data \
    | python -m json.tool > data.json
    
    less data.json
 
    {
        "blasts": [],
        "intervals": [
            {
                "100034": {
                    "intervals": [
                        {
                            "frequency": null,
                            "invalid": false,
                            "label": "V",
                            "max": "0.25",
                            "meta_id": "28A__5__OFF",
                            "overload": false,
                            "regoff": false,
                            "regon": false,
                            "timestamp_max": 20603262074880
                        }]}}],
 
    ```
  
  #### DELETE
  ##### Responses
  
  | Code | Description |
  | ---- | ----------- |
  | 204 | The resource was deleted successfully |
  | 401 | Authorization information is missing or invalid. |
  
  #### POST /search/id:
  ##### Summary:
  | Action | Description |
  | ---- | ----------- |
  | abort | Abort a running data search |
  
  ##### Responses
  | Code | Description |
  | ---- | ----------- |
  | 204 | The action was applied successfully |
  | 400 | Invalid input with body describing error |
  | 401 | Authorization information is missing or invalid. |
  
  ##### Example
  ```
  curl -i  -H "Accept: application/json" -H "Content-Type: application/json" -u user:1:token \
  http://sigicom.infranet.com/api/v1/sensor/100034/search/af4427fc-92ac-4be2-9b01-63f527399e79 \
  --data '{"action":"abort"}'
  ```
  

## /apidoc/path/api/v1/user

## Response JSON

```json
{
 "self_url": "/apidoc/path/api/v1/user",
 "paths": [
  "/api/:api_version/user/:user_id/",
  "/api/:api_version/user/"
 ],
 "name": "inapi_user_r",
 "module": "inapi_user_r",
 "markdown_extra": "\n**Show User**\n----\n  Returns json data about user/users.\n\n* **URL**\n    * /user/\n    * /user/:id\n\n* **Method:**\n\n  `GET`\n\n*  **URL Params**\n\n   `id=[integer]`\n\n* **Data Params**\n\n  None\n\n* **Success Response:**\n\n  * **Code:** 200 <br />\n    **Content:** \n    ```json\n    {\n      id : 88,\n      first_name : \"Lars\",\n      last_name : \"Ljung\",\n      email : \"lars.ljung@sigicom.com\" }\n    ```\n\n* **Error Response:**\n\n  * **Code:** 404 NOT FOUND <br />\n\n  OR\n\n  * **Code:** 401 UNAUTHORIZED <br />\n\n* **Sample Call:**",
 "description": [
  76,
  105,
  115,
  116,
  32,
  117,
  115,
  101,
  114,
  115,
  32,
  99,
  111,
  110,
  110,
  101,
  99,
  116,
  101,
  100,
  32,
  116,
  111,
  32,
  116,
  104,
  101,
  32,
  99,
  111,
  109,
  112,
  97,
  110,
  121
 ],
 "content_types_provided": [
  "application/json",
  "application/javascript",
  "text/html",
  "application/octet-stream"
 ],
 "content_types_allowed": [
  "application/json",
  "application/javascript"
 ],
 "children": {},
 "allowed_methods": [
  "HEAD",
  "GET",
  "OPTIONS"
 ]
}
```


**Show User**
----
  Returns json data about user/users.

* **URL**
    * /user/
    * /user/:id

* **Method:**

  `GET`

*  **URL Params**

   `id=[integer]`

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```json
    {
      id : 88,
      first_name : "Lars",
      last_name : "Ljung",
      email : "lars.ljung@sigicom.com" }
    ```

* **Error Response:**

  * **Code:** 404 NOT FOUND <br />

  OR

  * **Code:** 401 UNAUTHORIZED <br />

* **Sample Call:**

