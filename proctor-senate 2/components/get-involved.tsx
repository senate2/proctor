"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { VolunteerFormDialog } from "./volunteer-form-dialog"

export function GetInvolved() {
  return (
    <section id="get-involved" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance text-primary">Get Involved</h2>
            <p className="text-xl text-muted-foreground text-pretty">
              Join our movement and help us build a better future
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Volunteer</CardTitle>
                <CardDescription className="text-base">
                  Make a difference in your community by joining our volunteer team
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Knock on doors and talk to voters</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Make phone calls to supporters</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Help at campaign events</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Spread the word on social media</span>
                  </li>
                </ul>
                <VolunteerFormDialog />
              </CardContent>
            </Card>

            <Card id="donate">
              <CardHeader>
                <CardTitle className="text-2xl">Donate</CardTitle>
                <CardDescription className="text-base">
                  Your contribution helps us reach more voters and win this race
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <Button asChild variant="outline" size="lg" className="text-lg font-semibold bg-transparent">
                    <Link
                      href="https://secure.actblue.com/donate/georgio?amount=25"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      $25
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="text-lg font-semibold bg-transparent">
                    <Link
                      href="https://secure.actblue.com/donate/georgio?amount=50"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      $50
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="text-lg font-semibold bg-transparent">
                    <Link
                      href="https://secure.actblue.com/donate/georgio?amount=100"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      $100
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="text-lg font-semibold bg-transparent">
                    <Link
                      href="https://secure.actblue.com/donate/georgio?amount=250"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      $250
                    </Link>
                  </Button>
                </div>
                <Button asChild className="w-full bg-secondary hover:bg-secondary/90" size="lg">
                  <Link href="https://secure.actblue.com/donate/georgio" target="_blank" rel="noopener noreferrer">
                    Donate Now
                  </Link>
                </Button>
                <p className="text-xs text-muted-foreground mt-4 text-center">Contributions are not tax deductible.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
