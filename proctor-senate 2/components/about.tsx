import Image from "next/image"

export function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance text-primary">Meet Georgio Proctor</h2>
            <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p>
                Georgio Proctor is a dedicated public servant. Born and raised in Greenwood, MS. Georgio understands the
                challenges we face every day.
              </p>
              <p>
                As a former educator and small business owner, Georgio has spent his career building bridges and finding
                solutions that work for everyone. His commitment to transparency, accountability, and results has earned
                him the trust of thousands across our state.
              </p>
              <p>
                Brother Proctor has pursued excellence in education, earning a Master's Degree in Nuclear Chemistry from
                Jackson State University, where he also taught Chemistry, and another Master's Degree in Medical
                Sciences from Ponce Health Sciences in St. Louis.
              </p>
              <p>
                Now, Georgio is ready to take that fight to the Senate, where he'll work tirelessly to create jobs,
                improve healthcare, and ensure every child has access to quality education.
              </p>
            </div>
          </div>
          <div className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl">
            <Image src="/professional-politician-portrait.png" alt="Georgio Proctor" fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
