import nodemailer from "nodemailer";

const email = process.env.EMAIL_PRINCIPAL;
const pass = process.env.EMAIL_CONTRASENA;
/*
export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: email,
    pass: pass
}
});
*/

export const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: email,
    pass: pass
  }
});

transporter.verify().then(() => {
  console.log('Ready to send emails.')
})


export const mailOptions = {
    from: email,
    to: 'info@trustfund.com.ar',
  };