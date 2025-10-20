"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Georgio Proctor for Senate"
              width={280}
              height={80}
              className="h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </Link>
            <Link href="#issues" className="text-sm font-medium hover:text-primary transition-colors">
              Issues
            </Link>
            <Link href="#get-involved" className="text-sm font-medium hover:text-primary transition-colors">
              Get Involved
            </Link>
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90">
              <Link href="https://secure.actblue.com/donate/georgio" target="_blank" rel="noopener noreferrer">
                Donate
              </Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 space-y-4">
            <Link
              href="#about"
              className="block text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="#issues"
              className="block text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Issues
            </Link>
            <Link
              href="#get-involved"
              className="block text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Involved
            </Link>
            <Button asChild size="lg" className="w-full bg-secondary hover:bg-secondary/90">
              <Link href="https://secure.actblue.com/donate/georgio" target="_blank" rel="noopener noreferrer">
                Donate
              </Link>
            </Button>
          </nav>
        )}
      </div>
    </header>
  )
}
