var Client = require('ftp');
 
// TODO: Maybe get this from config.
let opts = {
    host: process.env.FTP_HOST || 'west.vdvcloud.com',
    port: process.env.FTP_PORT || 21,
    user: process.env.FTP_USER || 'instratus',
    password: process.env.FTP_PASSWORD,
}

const pushFileToFtp = function (filename) {
    return new Promise((res, rej) => {
        var c = new Client();
        c.on('ready', function() {
            c.put(filename, filename, function(err) {
                if (err) throw err;
                else console.log('Wrote file', filename)
                c.end();
            });
        });
    
        c.on('close', (e) => {if (e) rej(e)})
        c.on('error', rej)
        c.on('end', res)
    
        c.connect(opts);
    })
}

exports.pushFileToFtp = pushFileToFtp
