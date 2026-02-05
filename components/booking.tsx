import { BookingForm } from "@/components/booking-form"
import { Phone, CheckCircle } from "lucide-react"

const benefits = [
  "Quick confirmation within 24 hours",
  "Flexible rescheduling available",
  "Expert beauty professionals",
  "Premium quality products used",
]

export function Booking() {
  return (
    <section id="booking" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Book Now
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mt-2 mb-4 text-balance">
            Book Your Appointment at Apsara Makeover
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Ready for your beauty transformation? Fill out the form below and our team will get back to you with appointment confirmation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          <div className="order-2 lg:order-1">
            <BookingForm />
          </div>

          <div className="order-1 lg:order-2 flex flex-col justify-center">
            <div className="bg-secondary/50 p-6 md:p-8 rounded-lg">
              <h3 className="font-serif text-xl font-semibold text-foreground mb-6">
                Why Book with Apsara Makeover?
              </h3>
              <ul className="space-y-4 mb-8">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>

              <div className="border-t border-border pt-6">
                <p className="text-sm text-muted-foreground mb-3">
                  Prefer to book over phone?
                </p>
                <a
                  href="tel:09865459229"
                  className="flex items-center gap-2 text-primary font-semibold text-lg hover:underline"
                >
                  <Phone className="w-5 h-5" />
                  098654 59229
                </a>
                <p className="text-xs text-muted-foreground mt-2">
                  Available daily from 11:30 AM onwards
                </p>
              </div>
            </div>

            <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
              <p className="text-sm text-foreground">
                <strong>Note:</strong> For bridal makeup packages, we recommend booking at least 2 weeks in advance for trial sessions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
