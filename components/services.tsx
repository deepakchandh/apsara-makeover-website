import { Sparkles, Heart, Scissors, Gem, Flower2, Sun } from "lucide-react"

const services = [
  {
    icon: Sparkles,
    title: "Bridal Makeup",
    description: "Complete bridal packages including makeup, hairstyling, and draping for your special day.",
  },
  {
    icon: Heart,
    title: "Party Makeup",
    description: "Glamorous looks for parties, events, and special occasions that make you stand out.",
  },
  {
    icon: Scissors,
    title: "Hair Services",
    description: "Expert haircuts, styling, treatments, and coloring to transform your look.",
  },
  {
    icon: Gem,
    title: "Facial Treatments",
    description: "Rejuvenating facials and skincare treatments for glowing, healthy skin.",
  },
  {
    icon: Flower2,
    title: "Mehendi & Nail Art",
    description: "Beautiful henna designs and creative nail art to complete your look.",
  },
  {
    icon: Sun,
    title: "Grooming Services",
    description: "Threading, waxing, and complete grooming packages for a polished appearance.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mt-2 mb-4 text-balance">
            Professional Beauty Services in Madurai
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Discover our comprehensive range of beauty and makeover services at the best beauty parlour in Madurai. From bridal makeup to grooming, we enhance your natural beauty.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className="bg-card p-6 md:p-8 rounded-lg border border-border hover:border-primary/50 transition-colors group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
