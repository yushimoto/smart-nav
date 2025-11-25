import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Google Apps Script Web App URL from environment variable
    const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL;

    if (!GOOGLE_SCRIPT_URL) {
      console.error("Google Script URL not configured");
      return NextResponse.json(
        { error: "Form submission service not configured" },
        { status: 500 }
      );
    }

    // Prepare data for Google Sheets
    const timestamp = new Date().toLocaleString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      timeZoneName: "short",
    });

    const formData = {
      name: name,
      email: email,
      message: message,
      timestamp: timestamp,
    };

    // Submit to Google Sheets via Apps Script
    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Google Sheets API Error:", errorText);
        throw new Error(
          `Google Sheets API Error: ${response.status} - ${errorText}`
        );
      }

      const responseData = await response.text();
      console.log(
        "Form submitted successfully to Google Sheets:",
        responseData
      );
    } catch (googleError) {
      if (googleError instanceof Error) {
        console.error("Google Sheets API Error:", googleError);
        throw new Error(`Google Sheets API Error: ${googleError.message}`);
      } else {
        console.error("Google Sheets API Error:", googleError);
        throw new Error("Google Sheets API Error: Unknown error");
      }
    }

    return NextResponse.json(
      { message: "Message sent successfully! We'll get back to you soon." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
