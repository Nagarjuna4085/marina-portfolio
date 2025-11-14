// Import dependencies
const { onDocumentCreated } = require("firebase-functions/v2/firestore");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");
require("dotenv").config();

admin.initializeApp();

const transporter = nodemailer.createTransport({
  host: "smtp.hostinger.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

exports.sendBookingEmail = onDocumentCreated(
  "appointments/{docId}",
  async (event) => {
    try {
      const data = event.data.data(); // get actual Firestore doc data

      // --- Email to Client ---
      const mailToClient = {
        from: `"Bookings" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_USER, // client email
        subject: `New Booking Received - ${data.name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #ddd; padding: 20px; border-radius: 8px;">
            <h2 style="color:#4B0082;">New Booking Received</h2>
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Phone:</strong> ${data.phone}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Service:</strong> ${data.service}</p>
            <p><strong>Date & Time:</strong> ${data.dateTime}</p>
            <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
            <p style="font-size: 14px; color: #555;">This is an automated email notification from your booking system.</p>
          </div>
        `,
      };

      // --- Email to User ---
      const mailToUser = {
        from: `"Bookings" <${process.env.EMAIL_USER}>`,
        to: data.email,
        subject: "Your Appointment is Confirmed ✅",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #ddd; padding: 20px; border-radius: 8px;">
            <h2 style="color:#4B0082;">Appointment Confirmed</h2>
            <p>Hi ${data.name},</p>
            <p>Thank you for booking with us! Your appointment is confirmed with the following details:</p>
            <p><strong>Service:</strong> ${data.service}</p>
            <p><strong>Date & Time:</strong> ${data.dateTime}</p>
            <p><strong>Phone for contact:</strong> ${data.phone}</p>
            <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
            <p style="font-size: 14px; color: #555;">If you have any questions, reply to this email or contact us directly.</p>
            <p style="font-size: 14px; color: #555;">We look forward to seeing you!</p>
          </div>
        `,
      };

      // Send both emails
      await transporter.sendMail(mailToClient);
      await transporter.sendMail(mailToUser);

      console.log("Emails sent successfully!");
      return true;
    } catch (error) {
      console.error("Error sending emails:", error);
      return false;
    }
  }
);
