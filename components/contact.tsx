import { MapPin, Phone, Clock, Navigation } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Contact Us
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mt-2 mb-4 text-balance">
            Trusted Beauty Parlour Near Kanpalayam, Madurai
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Visit the best beauty parlour in Madurai. Book your appointment at Apsara Makeover today!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="bg-card rounded-lg overflow-hidden border border-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.0!2d77.95!3d9.93!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwNTUnNDguMCJOIDc3wrA1NycwMC4wIkU!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Apsara Makeover Location"
              className="grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>

          <div className="flex flex-col justify-center">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Address</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    <strong>Apsara Makeover</strong><br />
                    78-A, 1st Floor, Kamrajar Salai,<br />
                    Opposite Alankar and Harish Restaurant,<br />
                    Near Black and White, Kanpalayam,<br />
                    Madurai, Tamil Nadu – 625009
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                  <a
                    href="tel:09865459229"
                    className="text-primary hover:underline text-lg font-medium"
                  >
                    098654 59229
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Business Hours</h3>
                  <p className="text-muted-foreground">Opens daily at 11:30 AM</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <a href="tel:09865459229">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Apsara Makeover – Madurai
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-border text-foreground hover:bg-secondary bg-transparent"
              >
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Apsara+Makeover+Kanpalayam+Madurai"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Navigation className="w-5 h-5 mr-2" />
                  Get Directions to Apsara Makeover
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
