import Link from "next/link"
import { Phone, MapPin, Clock } from "lucide-react"

const quickLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
]

const services = [
  "Bridal Makeup",
  "Party Makeup",
  "Hair Services",
  "Facial Treatments",
  "Mehendi & Nail Art",
  "Grooming Services",
]

export function Footer() {
  return (
    <footer className="bg-foreground text-card py-16">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div>
            <h3 className="font-serif text-2xl font-semibold mb-4">Apsara Makeover</h3>
            <p className="text-card/70 text-sm leading-relaxed mb-6">
              One of the best beauty parlours in Madurai. Located near Kanpalayam, we bring out your natural radiance with professional beauty services.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-accent font-semibold">4.1★</span>
              <span className="text-card/70 text-sm">Rated by 44+ happy customers</span>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-card/70 hover:text-card text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-card/70 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-card/70 text-sm">
                  78-A, 1st Floor, Kamrajar Salai, Kanpalayam, Madurai, Tamil Nadu – 625009
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="tel:09865459229" className="text-card/70 hover:text-card text-sm transition-colors">
                  098654 59229
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-card/70 text-sm">Opens at 11:30 AM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-card/20 mt-12 pt-8 text-center">
          <p className="text-card/60 text-sm">
            © {new Date().getFullYear()} Apsara Makeover. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
