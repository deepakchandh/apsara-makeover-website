import { Star, Quote } from "lucide-react"

const reviews = [
  {
    name: "Priya Sharma",
    rating: 5,
    text: "Amazing bridal makeup! The team was so professional and made me feel like a princess on my wedding day. Highly recommended!",
    date: "2 months ago",
  },
  {
    name: "Lakshmi R.",
    rating: 4,
    text: "Great service and friendly staff. The facial treatment was very relaxing and my skin looked refreshed. Will visit again!",
    date: "1 month ago",
  },
  {
    name: "Anitha Kumar",
    rating: 5,
    text: "Best beauty parlour in the area! They use quality products and the results are always excellent. My go-to place for all beauty needs.",
    date: "3 weeks ago",
  },
  {
    name: "Deepa M.",
    rating: 4,
    text: "Wonderful experience! The mehendi design for my sister's wedding was beautiful. Everyone complimented it. Thank you Apsara Makeover!",
    date: "1 month ago",
  },
]

export function Reviews() {
  return (
    <section id="reviews" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mt-2 mb-4 text-balance">
            What Our Clients Say
          </h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex">
              {[1, 2, 3, 4].map((star) => (
                <Star key={star} className="w-6 h-6 text-accent fill-accent" />
              ))}
              <Star className="w-6 h-6 text-accent fill-accent/30" />
            </div>
            <span className="text-foreground font-semibold">4.1</span>
            <span className="text-muted-foreground">out of 5</span>
          </div>
          <p className="text-muted-foreground">
            Based on 44 reviews from our valued customers
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="bg-card p-6 rounded-lg border border-border relative"
            >
              <Quote className="w-8 h-8 text-primary/20 absolute top-4 right-4" />
              <div className="flex gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < review.rating
                        ? "text-accent fill-accent"
                        : "text-muted-foreground"
                    }`}
                  />
                ))}
              </div>
              <p className="text-foreground text-sm leading-relaxed mb-4">
                &quot;{review.text}&quot;
              </p>
              <div className="border-t border-border pt-4">
                <p className="font-medium text-foreground">{review.name}</p>
                <p className="text-xs text-muted-foreground">{review.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
