const client = require('./lib/api')()

const fs = require('fs')

async function createDoc() {
    let apis = [
        'sensor',
        // 'master',
        // 'logger',
        'project',
        'search_template',
        'search',
        'user',
    ]
    let promises = apis.map(api => client.getDoc(api))
    let data = await Promise.all(promises)
    let document = data.map(res => res.data)
    let apiDocument = ""
    document.map(i => apiDocument += `## ${i.self_url}

## Response JSON

\`\`\`json
${JSON.stringify(i, null, 1)}
\`\`\`

${i.markdown_extra}

`)
    fs.writeFileSync('API.md', apiDocument)

}

createDoc()