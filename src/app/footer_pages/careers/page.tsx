
import HeroSection from "~/components/footer_components/ui/hero-section"
import ContentSection from "~/components/footer_components/ui/content-section"
import Card from "~/components/footer_components/ui/card"
import { Briefcase, MapPin, Clock, Users, Heart, Globe, ArrowRight, Star } from "lucide-react"

export default function CareersPage() {
  const openPositions = [
    {
      title: "Field Research Officers",
      location: "Kashmir (Artisan documentation)",
      type: "Full-time",
      description:
        "Document artisan practices, conduct field research, and build relationships with craft communities across Kashmir.",
      requirements: ["Cultural sensitivity", "Research experience", "Local language skills", "Travel flexibility"],
    },
    {
      title: "Tourism Content Curators",
      location: "Remote",
      type: "Contract",
      description:
        "Create compelling content for cultural tourism experiences, craft stories, and heritage narratives.",
      requirements: ["Content creation", "Cultural knowledge", "SEO expertise", "Visual storytelling"],
    },
    {
      title: "Frontend Developer",
      location: "USA-based preferred",
      type: "Full-time",
      description: "Build and maintain user-facing applications for our craft marketplace and tourism platform.",
      requirements: ["React/Next.js", "TypeScript", "UI/UX design", "API integration"],
    },
    {
      title: "Craft Story Writers",
      location: "Contract-based",
      type: "Freelance",
      description:
        "Write authentic stories about artisans, their crafts, and cultural significance for global audiences.",
      requirements: ["Creative writing", "Cultural research", "Interview skills", "Storytelling expertise"],
    },
  ]

  const benefits = [
    {
      icon: Heart,
      title: "Impact-driven Environment",
      description: "Work on projects that directly preserve cultural heritage and empower artisan communities",
    },
    {
      icon: Globe,
      title: "Intercultural Collaboration",
      description: "Collaborate with team members and partners from diverse cultural backgrounds worldwide",
    },
    {
      icon: Star,
      title: "Purpose-first Leadership",
      description: "Leadership that prioritizes mission impact alongside professional growth and development",
    },
    {
      icon: Users,
      title: "Ethical Framework Growth",
      description:
        "Develop your career within a framework that values ethics, sustainability, & responsibility",
    },
  ]

  return (
    <>
      <HeroSection
        title="Craft a Career with Purpose"
        subtitle="Join Our Mission"
        description="Turn your career into a cultural revolution. Join a team that's preserving heritage, empowering artisans, and creating meaningful connections between cultures worldwide."
        ctaText="View Open Positions"
        ctaLink="#open-positions"
        backgroundImage="/images/kashmir.jpg"
      />

      <ContentSection background="white">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#005380] mb-6">Why Work With Us?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto italic">
            Join a team where your professional growth contributes to cultural preservation and global impact
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit) => (
            <Card key={benefit.title} hover gradient className="text-center h-full">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#005380] to-[#0085CC] rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-[#005380] mb-4">{benefit.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
            </Card>
          ))}
        </div>
      </ContentSection>

      <ContentSection background="gradient" id="open-positions">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#005380] mb-6">Open Opportunities</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto italic">
            Explore current openings and find your place in our mission-driven team
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {openPositions.map((position) => (
            <Card key={position.title} hover className="h-full">
              <div className="mb-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#005380] to-[#0085CC] rounded-lg flex items-center justify-center">
                      <Briefcase className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">{position.title}</h3>
                      <div className="flex items-center gap-4 text-sm text-gray-600 mt-1">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{position.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{position.type}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed mb-6">{position.description}</p>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-800 mb-3">Key Requirements:</h4>
                <div className="grid grid-cols-2 gap-2">
                  {position.requirements.map((req, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[#0085CC] rounded-full"></div>
                      <span className="text-sm text-gray-600">{req}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button className="w-full px-6 py-3 bg-gradient-to-r from-[#005380] to-[#0085CC] text-white font-semibold rounded-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                <span>Apply Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </Card>
          ))}
        </div>
      </ContentSection>

      <ContentSection background="white">
        <div className="max-w-4xl mx-auto">
          <Card gradient className="text-center">
            <Users className="w-16 h-16 text-[#0085CC] mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-[#005380] mb-6">Ready to Join Our Team?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Don&apos;t see the perfect role? We&apos;re always looking for passionate individuals who share our mission. Send us
              your resume and tell us how you&apos;d like to contribute to cultural preservation and artisan empowerment.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="p-4 bg-white bg-opacity-50 rounded-lg">
                <Heart className="w-8 h-8 text-[#0085CC] mx-auto mb-3" />
                <h4 className="font-semibold text-gray-800 mb-2">Mission-Driven</h4>
                <p className="text-sm text-gray-600">Every role contributes to cultural preservation</p>
              </div>
              <div className="p-4 bg-white bg-opacity-50 rounded-lg">
                <Globe className="w-8 h-8 text-[#0085CC] mx-auto mb-3" />
                <h4 className="font-semibold text-gray-800 mb-2">Global Impact</h4>
                <p className="text-sm text-gray-600">Work that reaches communities worldwide</p>
              </div>
              <div className="p-4 bg-white bg-opacity-50 rounded-lg">
                <Star className="w-8 h-8 text-[#0085CC] mx-auto mb-3" />
                <h4 className="font-semibold text-gray-800 mb-2">Growth Focused</h4>
                <p className="text-sm text-gray-600">Continuous learning and development</p>
              </div>
            </div>

            <a
              href="#"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#005380] to-[#0085CC] text-white font-semibold rounded-xl hover:scale-105 transition-all duration-300 shadow-lg"
            >
              <span>Join Our Team</span>
              <ArrowRight className="w-5 h-5" />
            </a>

            <p className="text-sm text-gray-500 mt-4 italic">Turn your career into a cultural revolution</p>
          </Card>
        </div>
      </ContentSection>
    </>
  )
}
