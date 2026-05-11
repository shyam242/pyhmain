import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, subject, message } = await request.json();

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Check environment variables
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
      console.error("EMAIL_USER or EMAIL_PASSWORD not set");
      return NextResponse.json(
        { error: "Email configuration error" },
        { status: 500 }
      );
    }

    // Configure Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Email to admin
    // This email is sent to both shyamkumar997755@gmail.com and pickyourhire@gmail.com for all contact form and mock interview submissions
    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: ["shyamkumar997755@gmail.com", "pickyourhire@gmail.com"],
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    };

    console.log("Admin email options:", adminMailOptions);

    // Email to user (confirmation)
    const userMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "We received your message - PickYourHire",
      html: `
        <h2>Thank you for contacting PickYourHire!</h2>
        <p>Hi ${name},</p>
        <p>We have received your message and will get back to you as soon as possible.</p>
        <hr>
        <p><strong>Your Submission:</strong></p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
        <hr>
        <p>Best regards,<br>PickYourHire Team</p>
      `,
    };

    // Send both emails
    console.log("Sending admin email to:", adminMailOptions.to);
    await transporter.sendMail(adminMailOptions);
    console.log("Admin email sent successfully");

    console.log("Sending user confirmation email to:", userMailOptions.to);
    await transporter.sendMail(userMailOptions);
    console.log("User email sent successfully");

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Email sending error:", error);
    console.error("Error details:", error.message);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
