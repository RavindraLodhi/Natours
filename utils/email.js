const nodemailer = require('nodemailer');

const sendWEmail = async (options) => {
    //https://www.google.com/settings/security/lesssecureapps
    // 1) create a transport
    const transporter = nodemailer.createTransport({
         host : process.env.EMAIL_HOST,
         port : process.env.EMAIL_PORT,
        auth : {
            user : process.env.EMAIL_USER_NAME,
            pass : process.env.EMAIL_PASSWORD
        }

    })

    // 2) difine the email
    const mailOption ={
        from : process.env.EMAIL,
        to :  options.email,
        subject : options.subject,
        text : options.message,
        //html
    }

    // 3)  Actual send the email

    await transporter.sendMail(mailOption)

}

module.exports = sendWEmail;