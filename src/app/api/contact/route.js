import { connectDB } from "@/config/connectDB";
import { sendMail } from "@/lib/mailer";
import User from "@/model/user";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    await connectDB();
    const body = await request.json();

    const name = body?.name?.trim();
    const email = body?.email?.trim();
    const mobile = body?.mobile?.trim();
    const message = body?.message?.trim();

    if (!name || !email || !mobile || !message) {
      return NextResponse.json(
        { success: false, error: "All fields are required" },
        { status: 400 }
      );
    }

    const user = await User.create({
      name,
      mobile,
      email,
      message,
    });

    if (!user) {
      return NextResponse.json(
        { success: false, message: "Something went wrong" },
        { status: 400 }
      );
    }
    //Email to Admin
    await sendMail({
      to: process.env.ADMIN_EMAIL,
      subject: `📩 New Message from ${name}`,
      html: `
        <h3>New Contact Message</h3>
      <p><b>Name:</b> ${name}</p>  
      <p><b>Mobile</b> ${mobile}</p>  
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b><br/>${message}</p>
      `,
    });

    //Email to User
    await sendMail({
      to: email,
      subject: "Thanks for contacting me!",
      html: `
        <p>Hi ${name},</p>
        <p>Thanks for reaching out. I’ll get back to you soon.</p>
        <br/>
        <p>Regards,<br/>Mohit</p>
      `,
    });

    return NextResponse.json(
      { success: true, message: "Message received!", user },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Server error" },
      { status: 500 }
    );
  }
}
