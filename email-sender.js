var nodemailer = require("nodemailer");
var dotenv = require("dotenv");
dotenv.config();

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "jasserslimani01@gmail.com",
    pass: process.env.PASS,
  },
});

var mailOptions = {
  from: "jasserslimani01@gmail.com",
  to: "jssrslmn@gmail.com",
  subject: "Sending Email using Node.js",
  text: "That was easy!",
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
