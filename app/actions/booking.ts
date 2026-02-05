"use server"

import { Resend } from "resend"

export interface BookingData {
  name: string
  phone: string
  email: string
  service: string
  preferredDate: string
  preferredTime: string
  message?: string
}

export interface BookingResponse {
  success: boolean
  message: string
  bookingId?: string
}

// Initialize Resend - you need to set RESEND_API_KEY in environment variables
const resend = new Resend(process.env.RESEND_API_KEY)

// Your email address where you want to receive booking notifications
const NOTIFICATION_EMAIL = process.env.NOTIFICATION_EMAIL || "apsaramakeover@gmail.com"

async function sendBookingNotificationEmail(data: BookingData, bookingId: string) {
  const formattedDate = new Date(data.preferredDate).toLocaleDateString("en-IN", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  try {
    await resend.emails.send({
      from: "Apsara Makeover Bookings <onboarding@resend.dev>",
      to: NOTIFICATION_EMAIL,
      subject: `New Booking Request - ${data.name} | ${data.service}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #d4a574 0%, #c9967a 100%); padding: 20px; border-radius: 10px 10px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 24px;">New Booking Request</h1>
            <p style="color: rgba(255,255,255,0.9); margin: 5px 0 0 0;">Apsara Makeover</p>
          </div>
          
          <div style="background: #fff; padding: 25px; border: 1px solid #e5e5e5; border-top: none; border-radius: 0 0 10px 10px;">
            <div style="background: #f8f5f2; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
              <p style="margin: 0; color: #666; font-size: 14px;">Booking Reference</p>
              <p style="margin: 5px 0 0 0; color: #333; font-size: 20px; font-weight: bold;">${bookingId}</p>
            </div>
            
            <h2 style="color: #333; font-size: 18px; margin-bottom: 15px; border-bottom: 2px solid #d4a574; padding-bottom: 10px;">Customer Details</h2>
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; color: #666; width: 140px;">Name:</td>
                <td style="padding: 10px 0; color: #333; font-weight: 500;">${data.name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #666;">Phone:</td>
                <td style="padding: 10px 0; color: #333; font-weight: 500;">
                  <a href="tel:${data.phone}" style="color: #d4a574; text-decoration: none;">${data.phone}</a>
                </td>
              </tr>
              ${data.email ? `
              <tr>
                <td style="padding: 10px 0; color: #666;">Email:</td>
                <td style="padding: 10px 0; color: #333; font-weight: 500;">
                  <a href="mailto:${data.email}" style="color: #d4a574; text-decoration: none;">${data.email}</a>
                </td>
              </tr>
              ` : ""}
            </table>
            
            <h2 style="color: #333; font-size: 18px; margin: 25px 0 15px 0; border-bottom: 2px solid #d4a574; padding-bottom: 10px;">Appointment Details</h2>
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; color: #666; width: 140px;">Service:</td>
                <td style="padding: 10px 0; color: #333; font-weight: 500;">${data.service}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #666;">Preferred Date:</td>
                <td style="padding: 10px 0; color: #333; font-weight: 500;">${formattedDate}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #666;">Preferred Time:</td>
                <td style="padding: 10px 0; color: #333; font-weight: 500;">${data.preferredTime}</td>
              </tr>
            </table>
            
            ${data.message ? `
            <h2 style="color: #333; font-size: 18px; margin: 25px 0 15px 0; border-bottom: 2px solid #d4a574; padding-bottom: 10px;">Special Requests</h2>
            <p style="color: #333; background: #f8f5f2; padding: 15px; border-radius: 8px; margin: 0;">${data.message}</p>
            ` : ""}
            
            <div style="margin-top: 30px; padding: 20px; background: #fff8f5; border-radius: 8px; border-left: 4px solid #d4a574;">
              <p style="margin: 0; color: #333; font-weight: 500;">Action Required</p>
              <p style="margin: 10px 0 0 0; color: #666; font-size: 14px;">Please contact the customer to confirm this appointment.</p>
            </div>
            
            <div style="margin-top: 25px; text-align: center;">
              <a href="tel:${data.phone}" style="display: inline-block; background: #d4a574; color: white; padding: 12px 30px; border-radius: 6px; text-decoration: none; font-weight: 500;">Call Customer</a>
            </div>
          </div>
          
          <p style="text-align: center; color: #999; font-size: 12px; margin-top: 20px;">
            This is an automated notification from your Apsara Makeover website.
          </p>
        </div>
      `,
    })
    return { success: true }
  } catch (error) {
    console.error("Failed to send email notification:", error)
    return { success: false, error }
  }
}

export async function submitBooking(data: BookingData): Promise<BookingResponse> {
  // Validate required fields
  if (!data.name || !data.phone || !data.service || !data.preferredDate || !data.preferredTime) {
    return {
      success: false,
      message: "Please fill in all required fields.",
    }
  }

  // Validate phone number (Indian format)
  const phoneRegex = /^[6-9]\d{9}$/
  const cleanPhone = data.phone.replace(/\D/g, "")
  if (!phoneRegex.test(cleanPhone)) {
    return {
      success: false,
      message: "Please enter a valid 10-digit phone number.",
    }
  }

  // Validate email if provided
  if (data.email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.email)) {
      return {
        success: false,
        message: "Please enter a valid email address.",
      }
    }
  }

  // Generate a booking reference ID
  const bookingId = `APM${Date.now().toString(36).toUpperCase()}`

  // Log the booking
  console.log("New Booking Request:", {
    bookingId,
    ...data,
    submittedAt: new Date().toISOString(),
  })

  // Send email notification
  if (process.env.RESEND_API_KEY) {
    await sendBookingNotificationEmail(data, bookingId)
  } else {
    console.warn("RESEND_API_KEY not set - email notification skipped")
  }

  return {
    success: true,
    message: `Thank you, ${data.name}! Your booking request has been received. Our team will contact you shortly to confirm your appointment.`,
    bookingId,
  }
}
