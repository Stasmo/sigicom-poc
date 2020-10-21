const nodemailer = require('nodemailer')
const nodemailerSendgrid = require('nodemailer-sendgrid')

exports.sendMail = function(mailOptions) {
    let transportConfig = createTransportConfig();
    let transporter = nodemailer.createTransport(transportConfig);
    return transporter.sendMail(mailOptions)
}

function createTransportConfig() {
    let transportConfig
    if (process.env.SENDGRID_API_KEY) {
      transportConfig = nodemailerSendgrid({
        apiKey: process.env.SENDGRID_API_KEY
      })
    } else {
      transportConfig = {
        service: 'SendGrid',
        auth: {
          // TODO: Maybe get this from config too.
          user: process.env.SENDGRID_USER,
          pass: process.env.SENDGRID_PASSWORD
        }
      }
    }

    return transportConfig
}