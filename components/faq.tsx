"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Which is the best beauty parlour in Madurai?",
    answer: "Apsara Makeover is widely recognized as one of the best beauty parlours in Madurai. With over 10 years of experience, a 4.1★ Google rating from 44+ reviews, and a commitment to hygiene and quality, we have earned the trust of thousands of customers in Madurai and surrounding areas.",
  },
  {
    question: "Why choose Apsara Makeover?",
    answer: "Apsara Makeover stands out as the best beauty parlour in Madurai for several reasons: professional and certified beauty experts, hygienic and sanitized equipment, premium quality products, personalized consultations, and a welcoming ambiance. We ensure every client receives exceptional service tailored to their needs.",
  },
  {
    question: "Where is Apsara Makeover located in Madurai?",
    answer: "Apsara Makeover is conveniently located at 78-A, 1st Floor, Kamrajar Salai, Opposite Alankar and Harish Restaurant, Near Black and White, Kanpalayam, Madurai, Tamil Nadu – 625009. We are easily accessible and provide ample parking for our clients.",
  },
  {
    question: "What services does Apsara Makeover offer?",
    answer: "As a leading ladies beauty parlour in Madurai, we offer comprehensive services including bridal makeup, party makeup, hair services (cuts, styling, treatments, coloring), facial treatments, mehendi and nail art, and grooming services (threading, waxing). Our makeup artists in Madurai are trained in the latest trends and techniques.",
  },
  {
    question: "What are the business hours of Apsara Makeover?",
    answer: "Apsara Makeover opens daily at 11:30 AM. For appointments and inquiries, you can call us at 098654 59229. We recommend booking in advance for bridal makeup and special occasion services.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            FAQ
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mt-2 mb-4 text-balance">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Find answers to common questions about the best beauty parlour in Madurai.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
