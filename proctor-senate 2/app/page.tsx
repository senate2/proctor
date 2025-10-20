import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Issues } from "@/components/issues"
import { GetInvolved } from "@/components/get-involved"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Issues />
      <GetInvolved />
      <Footer />
    </main>
  )
}
