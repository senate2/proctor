import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <Image
              src="/logo.png"
              alt="Georgio Proctor for Senate"
              width={280}
              height={80}
              className="h-12 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-primary-foreground/80 leading-relaxed">Paid for by Proctor for Senate.</p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#about"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#issues"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Issues
                </Link>
              </li>
              <li>
                <Link
                  href="#get-involved"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Get Involved
                </Link>
              </li>
              <li>
                <Link
                  href="https://secure.actblue.com/donate/georgio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Donate
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="flex gap-4">
              <Link
                href="https://www.facebook.com/proctorforsenate/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Facebook className="w-6 h-6" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Twitter className="w-6 h-6" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="https://www.instagram.com/mister_amazing_/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Instagram className="w-6 h-6" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://www.facebook.com/share/v/1DAHMRpxxJ/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Youtube className="w-6 h-6" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/60">
          <p>© {new Date().getFullYear()} Proctor for Senate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
