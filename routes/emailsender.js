const nodemailer = require('nodemailer');
const emailcontroller = {};

emailcontroller.sendemail = async (req, res) => {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message || !email.match(/^[A-Za-z0-9+_.-]+@(.+)$/)) {
      return res.sendStatus(500);
    }
  
    try {
      const transporter = nodemailer.createTransport({
        host: 'mail.codecrewinfotech.com',
             domain: 'codecrewinfotech.com',
            //  service: "gmail",
            port: 465,
            // secure: true,  
            auth: {
              user: 'aman.shah@codecrewinfotech.com',
              pass: 'aNLn?O]}{&ve',
            },
      });
  
      const mailOptions = {
        from: email,
        to: 'codecrew0@gmail.com', 
        subject: `${subject}: ${name}`,
        text: `You have received a new message from your website contact form.\n\nHere are the details:\n\nName: ${name}\n\nEmail: ${email}\n\nSubject: ${subject}\n\nMessage: ${message}`,
      };
  
    const emailSend=  await transporter.sendMail(mailOptions);
    console.log("emailSend",emailSend)
      res.sendStatus(200);
    } catch (error) {
      console.error(error);
      res.sendStatus(500);
    }
  
};

module.exports = emailcontroller;