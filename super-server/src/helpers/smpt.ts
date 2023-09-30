import * as nodemailer from 'nodemailer';
import { addCode } from './otp-storage';

// TODO : convert to nest service

const activationCodeFn = () => Math.floor(100000 + Math.random() * 900000);

// Email configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 465,
  secure: true, // Replace with your SMTP service provider
  auth: {
    user: 'saurav.mbe1@gmail.com',
    //pass: 'ndnnd',
    pass: 'ajma skdh kefv blxr',
  },
});

// Email content
export const mailOptions = (email: string) => {
  const activationCode = activationCodeFn();
  console.log(activationCode);
  addCode(email, activationCode);
  return {
    from: 'saurav.mbe1@gmail.com',
    to: email,
    subject: 'Vidur Patrike',
    text: `Please use this activation code to download the latest edition : ${activationCode}`,
  };
};

// Send the email
export const sendEmail = (email: string) =>
  transporter.sendMail(mailOptions(email), function (error, info) {
    if (error) {
      console.log('Email could not be sent. Error:', error);
    } else {
      console.log('Email sent successfully!', info.response);
    }
  });
