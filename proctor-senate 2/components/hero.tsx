import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative bg-primary text-primary-foreground py-20 md:py-32">
      <div className="absolute inset-0 bg-[url('/american-flag-subtle-pattern.jpg')] opacity-5 bg-cover bg-center" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">Fighting for Our Future</h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 text-pretty leading-relaxed">
            Join Georgio Proctor in building a stronger, more prosperous future for all Mississippians. Together, we can make
            a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-lg px-8 py-6">
              <Link href="https://secure.actblue.com/donate/georgio" target="_blank" rel="noopener noreferrer">
                Donate Now
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-lg px-8 py-6"
            >
              <Link href="#get-involved">Volunteer</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
