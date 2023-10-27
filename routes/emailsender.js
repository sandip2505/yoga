const nodemailer = require('nodemailer');
const emailcontroller = {};
const ejs = require('ejs');
const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, './email_template.ejs');
const htmlContent = fs.readFileSync(filePath, 'utf8');

emailcontroller.sendemail = async (req, res) => {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message || !email.match(/^[A-Za-z0-9+_.-]+@(.+)$/)) {
      return res.sendStatus(500);
    }

    const emailData = {
      name: name,
      subject: subject,
      message: message,
    };
    const renderedEmail = ejs.render(htmlContent, emailData);

    try {

          const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
              user: 'codecrew0@gmail.com',
              pass: 'qiqz wsjv awfe xkid',
            },
          });

          const mailOptions = {
            from: 'codecrew0@gmail.com',
            to: email,
            subject: `${subject}: ${name}`,
            html: renderedEmail,
          };
          
          const emailSend = await transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
              console.log('Error:', error);
            } else {
              console.log('Email sent:', info.response);
            }
          });
  

      res.sendStatus(200);
    } catch (error) {
      console.error(error);
      res.sendStatus(500);
    }
  
};

module.exports = emailcontroller;