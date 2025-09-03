import HeroSection from "~/components/footer_components/ui/hero-section"
import ContentSection from "~/components/footer_components/ui/content-section"
import Card from "~/components/footer_components/ui/card"
import { Calendar, TrendingUp, Users, Award, Quote } from "lucide-react"
import Image from "next/image"

export default function ProjectGlimpsePage() {
  const timeline = [
    {
      year: "2022",
      title: "Vision Conceptualized",
      description: "Vision conceptualized as a hybrid tourism-handicraft platform",
    },
    {
      year: "2023",
      title: "Craft Safari Pilot",
      description: "Craft Safari pilot in Srinagar; 1200+ artisans documented",
    },
    {
      year: "2024",
      title: "Global Expansion",
      description: "First affiliate stores opened in New York and Mumbai",
    },
    {
      year: "2025",
      title: "Digital Innovation",
      description: "Digital Craft Registry + Blockchain Tracking launched",
    },
  ]

  const impacts = [
    {
      icon: Users,
      number: "7,000+",
      title: "Tourists Engaged",
      description: "Tourists engaged in craft experiences",
    },
    {
      icon: TrendingUp,
      number: "85%",
      title: "Income Growth",
      description: "Artisan income growth within affiliated circuits",
    },
    {
      icon: Award,
      number: "60%+",
      title: "Women-Led Clusters",
      description: "Women-led artisan clusters onboarded",
    },
  ]

  return (
    <>
      <HeroSection
        title="Where Ideas Become Impact"
        subtitle="Our Journey"
        description="ArtStay has evolved from a dream into a living ecosystem, transforming lives and preserving culture through innovative approaches to heritage tourism."
         backgroundImage="/images/kashmir.jpg"
      />

      <ContentSection background="white">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#005380] mb-6">Our Evolution</h2>
          <p className="text-xl text-[#005380] max-w-3xl mx-auto font-bold italic">
            From concept to reality: <i className="text-[#0085CC]"> The journey of transforming Kashmir&apos;s craft heritage </i>
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#005380] to-[#0085CC] hidden lg:block"></div>

          <div className="space-y-12">
            {timeline.map((item, _index) => (
              <div
                key={item.year}
                className={`flex items-center ${_index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} flex-col lg:gap-16 gap-8`}
              >
                <div className="lg:w-1/2 w-full">
                  <Card hover gradient>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#005380] to-[#0085CC] rounded-full flex items-center justify-center">
                        <Calendar className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-2xl font-bold text-[#005380]">{item.year}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </Card>
                </div>

                {/* Timeline dot */}
                <div className="hidden lg:block w-4 h-4 bg-[#0085CC] rounded-full border-4 border-white shadow-lg"></div>

                <div className="lg:w-1/2 w-full lg:block hidden"></div>
              </div>
            ))}
          </div>
        </div>
      </ContentSection>

      <ContentSection background="gradient">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#005380] mb-6">Impact Highlights</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto italic">
            Measurable outcomes that demonstrate our commitment to positive change
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {impacts.map((impact, _index) => (
            <Card key={impact.title} hover className="text-center">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#005380] to-[#0085CC] rounded-full flex items-center justify-center mx-auto mb-4">
                  <impact.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-[#005380] mb-2">{impact.number}</div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{impact.title}</h3>
              <p className="text-gray-600 leading-relaxed">{impact.description}</p>
            </Card>
          ))}
        </div>

        {/* Testimonial */}
        <Card className="max-w-4xl mx-auto text-center bg-white">
          <Quote className="w-12 h-12 text-[#0085CC] mx-auto mb-6" />
          <blockquote className="text-xl md:text-2xl text-gray-700 italic leading-relaxed mb-6">
            &quot;ArtStay helped me sell my first papier-mâché art piece to a traveler who now calls me her teacher.&quot;
          </blockquote>
          <div className="flex items-center justify-center gap-4">
                        <div className="w-12 h-12 flex items-center justify-center">
              <Image 
                src="/logo/logo_1.png" 
                alt="ArtStay Logo" 
                width={48}
                height={48}
                className="object-contain"
              />
            </div>
            <div className="text-left">
              <p className="font-semibold text-gray-800">Ghulam Rasool</p>
              <p className="text-gray-600 text-sm">Artisan, Kashmir</p>
            </div>
          </div>
        </Card>
      </ContentSection>
    </>
  )
}
