const nodemailer = require("nodemailer");

export const sendEmail = (to: string, subj: string, content: string) => {
    const from = process.env.MAIL_USER;

    let transporter = nodemailer.createTransport({
        host: process.env.MAIL_HOST,
        port: process.env.MAIL_PORT,
        secure: true,
        auth: {
            user: from,
            pass: process.env.MAIL_PASS,
        },
    });
    transporter.sendMail({
        from: from,
        to: to,
        subject: subj,
        text: content,
    })
    .then(info => console.log("Message sent: %s", info.messageId))
    .catch(error => console.error(error));
}
