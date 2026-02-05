"use client"

import { useState } from "react"
import { Calendar, Clock, User, Phone, Mail, MessageSquare, CheckCircle, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { submitBooking, type BookingData } from "@/app/actions/booking"

const services = [
  "Bridal Makeup",
  "Party Makeup",
  "Hair Services",
  "Facial Treatments",
  "Mehendi & Nail Art",
  "Grooming Services",
]

const timeSlots = [
  "11:30 AM",
  "12:00 PM",
  "12:30 PM",
  "01:00 PM",
  "01:30 PM",
  "02:00 PM",
  "02:30 PM",
  "03:00 PM",
  "03:30 PM",
  "04:00 PM",
  "04:30 PM",
  "05:00 PM",
  "05:30 PM",
  "06:00 PM",
  "06:30 PM",
  "07:00 PM",
]

export function BookingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [bookingId, setBookingId] = useState<string>("")
  const [error, setError] = useState<string>("")
  const [formData, setFormData] = useState<BookingData>({
    name: "",
    phone: "",
    email: "",
    service: "",
    preferredDate: "",
    preferredTime: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    const result = await submitBooking(formData)

    if (result.success) {
      setIsSuccess(true)
      setBookingId(result.bookingId || "")
    } else {
      setError(result.message)
    }

    setIsSubmitting(false)
  }

  const handleChange = (field: keyof BookingData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    setError("")
  }

  // Get tomorrow's date as minimum selectable date
  const tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)
  const minDate = tomorrow.toISOString().split("T")[0]

  if (isSuccess) {
    return (
      <div className="bg-card p-8 md:p-10 rounded-lg border border-border text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
          Booking Request Received!
        </h3>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          Thank you for choosing Apsara Makeover! Our team will contact you shortly to confirm your appointment.
        </p>
        {bookingId && (
          <p className="text-sm text-muted-foreground mb-6">
            Your booking reference: <span className="font-semibold text-foreground">{bookingId}</span>
          </p>
        )}
        <div className="bg-secondary/50 p-4 rounded-lg mb-6">
          <p className="text-sm text-foreground">
            <strong>Service:</strong> {formData.service}<br />
            <strong>Date:</strong> {new Date(formData.preferredDate).toLocaleDateString("en-IN", { 
              weekday: "long", 
              year: "numeric", 
              month: "long", 
              day: "numeric" 
            })}<br />
            <strong>Time:</strong> {formData.preferredTime}
          </p>
        </div>
        <Button
          onClick={() => {
            setIsSuccess(false)
            setFormData({
              name: "",
              phone: "",
              email: "",
              service: "",
              preferredDate: "",
              preferredTime: "",
              message: "",
            })
          }}
          variant="outline"
          className="bg-transparent"
        >
          Book Another Appointment
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-card p-6 md:p-8 rounded-lg border border-border">
      <div className="space-y-5">
        <div className="grid sm:grid-cols-2 gap-5">
          <div className="space-y-2">
            <Label htmlFor="name" className="flex items-center gap-2">
              <User className="w-4 h-4 text-primary" />
              Full Name <span className="text-destructive">*</span>
            </Label>
            <Input
              id="name"
              type="text"
              placeholder="Enter your name"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              required
              className="bg-background"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-primary" />
              Phone Number <span className="text-destructive">*</span>
            </Label>
            <Input
              id="phone"
              type="tel"
              placeholder="Enter 10-digit number"
              value={formData.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              required
              className="bg-background"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-primary" />
            Email Address <span className="text-muted-foreground text-xs">(optional)</span>
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            className="bg-background"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="service" className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-primary" />
            Select Service <span className="text-destructive">*</span>
          </Label>
          <Select
            value={formData.service}
            onValueChange={(value) => handleChange("service", value)}
            required
          >
            <SelectTrigger id="service" className="bg-background">
              <SelectValue placeholder="Choose a service" />
            </SelectTrigger>
            <SelectContent>
              {services.map((service) => (
                <SelectItem key={service} value={service}>
                  {service}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          <div className="space-y-2">
            <Label htmlFor="date" className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-primary" />
              Preferred Date <span className="text-destructive">*</span>
            </Label>
            <Input
              id="date"
              type="date"
              min={minDate}
              value={formData.preferredDate}
              onChange={(e) => handleChange("preferredDate", e.target.value)}
              required
              className="bg-background"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="time" className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary" />
              Preferred Time <span className="text-destructive">*</span>
            </Label>
            <Select
              value={formData.preferredTime}
              onValueChange={(value) => handleChange("preferredTime", value)}
              required
            >
              <SelectTrigger id="time" className="bg-background">
                <SelectValue placeholder="Select time" />
              </SelectTrigger>
              <SelectContent>
                {timeSlots.map((time) => (
                  <SelectItem key={time} value={time}>
                    {time}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="message" className="flex items-center gap-2">
            <MessageSquare className="w-4 h-4 text-primary" />
            Special Requests <span className="text-muted-foreground text-xs">(optional)</span>
          </Label>
          <Textarea
            id="message"
            placeholder="Any special requirements or notes for your appointment..."
            value={formData.message}
            onChange={(e) => handleChange("message", e.target.value)}
            rows={3}
            className="bg-background resize-none"
          />
        </div>

        {error && (
          <div className="bg-destructive/10 text-destructive text-sm p-3 rounded-lg">
            {error}
          </div>
        )}

        <Button
          type="submit"
          size="lg"
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 mr-2 animate-spin" />
              Submitting...
            </>
          ) : (
            "Book Appointment"
          )}
        </Button>

        <p className="text-xs text-muted-foreground text-center">
          Our team will contact you within 24 hours to confirm your appointment.
        </p>
      </div>
    </form>
  )
}
