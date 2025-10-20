import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Heart, Briefcase, Home } from "lucide-react"

const issues = [
  {
    icon: Briefcase,
    title: "Jobs & Economy",
    description: "Creating good-paying jobs and supporting small businesses to build a thriving economy for all.",
  },
  {
    icon: Heart,
    title: "Healthcare",
    description: "Ensuring affordable, accessible healthcare for every family, with lower prescription drug costs.",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description: "Investing in our schools and teachers to give every child the opportunity to succeed.",
  },
  {
    icon: Home,
    title: "Housing",
    description: "Making housing affordable and accessible for working families and first-time homebuyers.",
  },
]

export function Issues() {
  return (
    <section id="issues" className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance text-primary">Our Priorities</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Real solutions for the issues that matter most to our community
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {issues.map((issue) => (
            <Card key={issue.title} className="border-2 hover:border-primary transition-colors">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <issue.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl text-primary">{issue.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{issue.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
