"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendEmail = exports.mailOptions = void 0;
const nodemailer = require("nodemailer");
const otp_storage_1 = require("./otp-storage");
const activationCodeFn = () => Math.floor(100000 + Math.random() * 900000);
const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'saurav.mbe1@gmail.com',
        pass: 'ajma skdh kefv blxr',
    },
});
const mailOptions = (email) => {
    const activationCode = activationCodeFn();
    console.log(activationCode);
    (0, otp_storage_1.addCode)(email, activationCode);
    return {
        from: 'saurav.mbe1@gmail.com',
        to: email,
        subject: 'Vidur Patrike',
        text: `Please use this activation code to download the latest edition : ${activationCode}`,
    };
};
exports.mailOptions = mailOptions;
const sendEmail = (email) => transporter.sendMail((0, exports.mailOptions)(email), function (error, info) {
    if (error) {
        console.log('Email could not be sent. Error:', error);
    }
    else {
        console.log('Email sent successfully!', info.response);
    }
});
exports.sendEmail = sendEmail;
//# sourceMappingURL=smpt.js.map