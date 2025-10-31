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

    // Mailgun configuration with credentials from environment variables
    const MAILGUN_API_KEY = process.env.MAILGUN_API_KEY;
    const MAILGUN_DOMAIN = process.env.MAILGUN_DOMAIN;
    const TO_EMAIL = process.env.MAILGUN_TO_EMAIL || "aayush@smartnav.ai";

    if (!MAILGUN_API_KEY || !MAILGUN_DOMAIN) {
      console.error("Mailgun configuration missing");
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 500 }
      );
    }

    // Prepare email data for Mailgun API
    const formData = new URLSearchParams();
    formData.append(
      "from",
      `SmartNav Contact Form <noreply@${MAILGUN_DOMAIN}>`
    );
    formData.append("to", TO_EMAIL);
    formData.append("subject", `New Contact Form Submission from ${name}`);
    formData.append(
      "text",
      `
🚁 NEW CONTACT FORM SUBMISSION - SmartNav AI
===============================================

👤 Name: ${name}
📧 Email: ${email}

💬 Message:
${message}

===============================================
📅 Received: ${new Date().toLocaleString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        timeZoneName: "short",
      })}

This message was sent from the SmartNav contact form.
You can reply directly to this email to respond to the inquiry.

---
SmartNav AI - The AI Co-Pilot for your UAVs
    `
    );
    formData.append(
      "html",
      `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Contact Form Submission - SmartNav</title>
        <style>
          body {
            margin: 0;
            padding: 0;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            background-color: #f8fafc;
            line-height: 1.6;
          }
          .email-container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          }
          .header {
            background: linear-gradient(135deg, #F37021 0%, #ff8c42 100%);
            padding: 40px 30px;
            text-align: center;
            color: white;
          }
          .logo {
            width: 150px;
            height: 44px;
            object-fit: contain;
          }
          .header h1 {
            margin: 0;
            font-size: 28px;
            font-weight: 700;
            letter-spacing: -0.5px;
          }
          .header p {
            margin: 8px 0 0 0;
            font-size: 16px;
            opacity: 0.9;
          }
          .content {
            padding: 40px 30px;
          }
          .submission-info {
            background-color: #f8fafc;
            border-radius: 8px;
            padding: 24px;
            margin-bottom: 30px;
            border-left: 4px solid #F37021;
          }
          .field {
            margin-bottom: 20px;
          }
          .field:last-child {
            margin-bottom: 0;
          }
          .field-label {
            font-weight: 600;
            color: #374151;
            font-size: 14px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 6px;
            display: block;
          }
          .field-value {
            color: #1f2937;
            font-size: 16px;
            background-color: white;
            padding: 12px 16px;
            border-radius: 6px;
            border: 1px solid #e5e7eb;
            word-wrap: break-word;
          }
          .message-field .field-value {
            white-space: pre-wrap;
            min-height: 80px;
          }
          .footer {
            background-color: #f8fafc;
            padding: 30px;
            text-align: center;
            border-top: 1px solid #e5e7eb;
          }
          .footer p {
            margin: 0;
            color: #6b7280;
            font-size: 14px;
          }
          .timestamp {
            color: #9ca3af;
            font-size: 12px;
            margin-top: 8px;
          }
          .divider {
            height: 1px;
            background: linear-gradient(90deg, transparent, #e5e7eb, transparent);
            margin: 30px 0;
          }
        </style>
      </head>
      <body>
        <div class="email-container">
          <div class="header">
            <h1>New Contact Form Submission</h1>
            <p>SmartNav AI - Contact Form Notification</p>
          </div>
          
          <div class="content">
            <div class="submission-info">
              <div class="field">
                <span class="field-label">👤 Name</span>
                <div class="field-value">${name}</div>
              </div>
              
              <div class="field">
                <span class="field-label">📧 Email Address</span>
                <div class="field-value">${email}</div>
              </div>
              
              <div class="field message-field">
                <span class="field-label">💬 Message</span>
                <div class="field-value">${message.replace(/\n/g, "\n")}</div>
              </div>
            </div>
            
            <div class="divider"></div>
            
            <div style="text-align: center; margin: 30px 0;">
              <h3 style="color: #374151; margin: 0 0 16px 0; font-size: 18px;">Ready to Respond?</h3>
              <p style="color: #6b7280; margin: 0; font-size: 14px;">
                This message was sent from the SmartNav contact form. You can reply directly to this email to respond to the inquiry.
              </p>
            </div>
          </div>
          
          <div class="footer">
            <p><strong>SmartNav AI</strong> - The AI Co-Pilot for your UAVs</p>
            <p class="timestamp">Received on ${new Date().toLocaleString(
              "en-US",
              {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                timeZoneName: "short",
              }
            )}</p>
          </div>
        </div>
      </body>
      </html>
    `
    );

    // Send email via Mailgun API
    try {
      const response = await fetch(
        `https://api.mailgun.net/v3/${MAILGUN_DOMAIN}/messages`,
        {
          method: "POST",
          headers: {
            Authorization: `Basic ${Buffer.from(
              `api:${MAILGUN_API_KEY}`
            ).toString("base64")}`,
          },
          body: formData,
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Mailgun API Error:", errorText);
        throw new Error(`Mailgun API Error: ${response.status} - ${errorText}`);
      }

      const responseData = await response.json();
      console.log("Email sent successfully:", responseData);
    } catch (mailgunError) {
      if (mailgunError instanceof Error) {
        console.error("Mailgun API Error:", mailgunError);
        throw new Error(`Mailgun API Error: ${mailgunError.message}`);
      } else {
        console.error("Mailgun API Error:", mailgunError);
        throw new Error("Mailgun API Error: Unknown error");
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
