import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Phone, MapPin, Star } from "lucide-react"

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 md:pt-20">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-beauty.jpg"
          alt="Best beauty parlour in Madurai - Apsara Makeover salon interior"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-foreground/40" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-4">
            <div className="flex items-center gap-1 bg-accent/90 text-accent-foreground px-3 py-1.5 rounded-full">
              <Star className="w-4 h-4 fill-current" />
              <span className="text-sm font-medium">4.1 Rating</span>
            </div>
            <span className="text-card/90 text-sm">(44 Reviews)</span>
          </div>

          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-card mb-4 text-balance">
            Best Beauty Parlour in Madurai – Apsara Makeover
          </h1>

          <p className="text-lg md:text-xl text-card/90 mb-8 leading-relaxed max-w-lg">
            Experience premium makeup, bridal services, and beauty treatments at Apsara Makeover — the best beauty parlour in Madurai near Kanpalayam.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
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
              className="border-card text-card hover:bg-card/10 bg-transparent"
            >
              <a
                href="https://www.google.com/maps/search/?api=1&query=Apsara+Makeover+Kanpalayam+Madurai"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapPin className="w-5 h-5 mr-2" />
                Get Directions to Apsara Makeover
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
