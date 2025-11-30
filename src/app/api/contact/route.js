import { connectDB } from "@/config/connectDB";
import User from "@/model/user";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    await connectDB();

    const body = await request.json();
    console.log(body);

    const { name, email, mobile, message } = body;

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

    return Response.json(
      { success: true, message: "Message received!", data: user },
      { status: 200 }
    );
  } catch (error) {
    return Response.json(
      { success: false, error: "Server error" },
      { status: 500 }
    );
  }
}
