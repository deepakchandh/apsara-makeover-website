"use server"

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

  // Log the booking (in production, this would be saved to a database or sent via email)
  console.log("New Booking Request:", {
    bookingId,
    ...data,
    submittedAt: new Date().toISOString(),
  })

  // Simulate a small delay for better UX
  await new Promise((resolve) => setTimeout(resolve, 1000))

  return {
    success: true,
    message: `Thank you, ${data.name}! Your booking request has been received. Our team will contact you shortly to confirm your appointment.`,
    bookingId,
  }
}
