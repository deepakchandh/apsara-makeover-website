import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Booking } from "@/components/booking"
import { Reviews } from "@/components/reviews"
import { FAQ } from "@/components/faq"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { SchemaMarkup } from "@/components/schema-markup"

export default function Home() {
  return (
    <>
      <SchemaMarkup />
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Booking />
        <Reviews />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
