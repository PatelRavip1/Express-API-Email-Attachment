const sgMail = require('@sendgrid/mail');
sgMail.setApiKey("sendgrid api key");

const fs = require("fs");

pathToAttachment = `${__dirname}/attachment.pdf`;// attachment path
attachment = fs.readFileSync(pathToAttachment).toString("base64");
attachments = undefined
if (!attachments) {
    attachments = [
        {
            content: attachment,
            filename: "attachment.pdf",
            type: "application/pdf",
            disposition: "attachment"
        }
    ]
}


const msg = {
    to: 'recipient email',
    from: 'sender email',
    subject: 'Sending with SendGrid is Fun',
    templateId: "sendgrid template Id",// example - - 'd-8a8cb4cc61c149098273861d3471219e',
    dynamicTemplateData: {},
    attachments: attachments
};

sgMail.send(msg).catch(err => {
    console.log(err);
});
console.log("err");
