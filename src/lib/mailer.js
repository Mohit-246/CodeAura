import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function sendMail({ to, subject, html }) {
  if (!to) {
    throw new Error("sendMail called without recipient");
  }

  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    throw new Error("Email credentials are missing");
  }

  const info = await transporter.sendMail({
    from: `"CODE AURA" <${process.env.EMAIL_USER}>`,
    to,
    subject,
    html,
  });

  return { success: true, info };
}
