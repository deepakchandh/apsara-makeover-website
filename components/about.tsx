import Image from "next/image"
import { CheckCircle } from "lucide-react"

const highlights = [
  "Professional & certified beauty experts",
  "Hygienic and sanitized equipment",
  "Premium quality beauty products",
  "Personalized consultations",
  "Comfortable & welcoming ambiance",
]

export function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
              <Image
                src="/apsara-makeover-website/images/about-salon.jpg"
                alt="Apsara Makeover Madurai - Professional makeup artist services"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-lg shadow-lg hidden md:block">
              <p className="font-serif text-3xl font-semibold">10+</p>
              <p className="text-sm">Years of Excellence</p>
            </div>
          </div>

          <div>
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              About Us
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mt-2 mb-6 text-balance">
              Why Apsara Makeover Is a Top Beauty Parlour
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Welcome to Apsara Makeover, one of the best beauty parlours in Madurai. Located near Kanpalayam, Madurai, Tamil Nadu, we have been transforming beauty dreams into reality for over a decade. Our salon is known for exceptional services, hygiene, and customer satisfaction.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              As a trusted ladies beauty parlour in Madurai, our team of skilled makeup artists is dedicated to providing personalized beauty solutions. Whether you need bridal makeup, party looks, or everyday grooming, Apsara Makeover ensures you leave feeling confident and beautiful.
            </p>

            <ul className="space-y-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
