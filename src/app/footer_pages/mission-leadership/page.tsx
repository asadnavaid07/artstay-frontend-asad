
import HeroSection from "~/components/footer_components/ui/hero-section"
import ContentSection from "~/components/footer_components/ui/content-section"
import Card from "~/components/footer_components/ui/card"
import { Target, Eye, Shield, Lightbulb, Heart } from "lucide-react"

export default function MissionLeadershipPage() {
  const leaders = [
    {
      name: "Fayaz Ahmad Khan",
      title: "Founder & Visionary Strategist", 
      description:
        "Environmental scientist, Sufi traveler, cultural entrepreneur with deep roots in Kashmir's heritage.",
      expertise: "Strategic Vision, Heritage, Environmental Science",
    },
    {
      name: "Susan McDonald Scheff",
      title: "Co-Founder, Strategy & Ethics Advisor",
      description:
        "Humanitarian leader with extensive experience in sustainable impact systems and ethical business practices.",
      expertise: "Sustainable Impact, Ethics, Strategic Advisory",
    },
    {
      name: "Jasif Ahmed Khan",
      title: "Director, India Operations",
      description:
        "Crafts ecosystem expert with deep fieldwork experience and strong connections with artisan communities.",
      expertise: "Operations, Artisan Relations, Craft Ecosystem",
    },
  ]

  const values = [
    { icon: Shield, title: "Integrity", description: "Honest and transparent in all our dealings" },
    { icon: Eye, title: "Transparency", description: "Open communication and clear accountability" },
    { icon: Lightbulb, title: "Creativity", description: "Innovative solutions for traditional challenges" },
    { icon: Heart, title: "Cultural Stewardship", description: "Protecting and nurturing cultural heritage" },
  ]

  return (
    <>
      <HeroSection
        title="Guided by Vision. Inspired by Legacy."
        subtitle="Leadership & Mission"
        description="Our mission is to revive, sustain, and globalize Kashmir's indigenous crafts and cultural heritage through responsible tourism, digital innovation, and artisan empowerment."
         backgroundImage="/images/kashmir.jpg"
      />

      <ContentSection background="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <Card gradient className="h-fit">
            <div className="flex items-center gap-4 mb-6">
              <Target className="w-8 h-8 text-[#0085CC]" />
              <h2 className="text-2xl font-bold text-[#005380]">Our Mission</h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              To revive, sustain, and globalize Kashmir&apos;s indigenous crafts and cultural heritage through responsible
              tourism, digital innovation, and artisan empowerment.
            </p>
          </Card>

          <Card gradient className="h-fit">
            <div className="flex items-center gap-4 mb-6">
              <Eye className="w-8 h-8 text-[#0085CC]" />
              <h2 className="text-2xl font-bold text-[#005380]">Our Vision</h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              A world where traditional artisans are globally respected, sustainable travel is the norm, and every
              journey becomes a bridge between cultures.
            </p>
          </Card>
        </div>
      </ContentSection>

      <ContentSection background="gradient">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#005380] mb-6">Leadership Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto italic">
            Meet the visionaries who are transforming the intersection of culture, craft, and travel.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {leaders.map((leader) => (
            <Card key={leader.name} hover className="text-center">
              <div className="mb-6">
                {/* Profile Image Placeholder */}
                <div className="w-24 h-24 bg-gradient-to-br from-[#005380] to-[#0085CC] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">
                    profile pic
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#005380] mb-2">{leader.name}</h3>
              <p className="text-[#0085CC] font-semibold mb-4">{leader.title}</p>
              <p className="text-gray-600 mb-4 leading-relaxed">{leader.description}</p>
              <div className="pt-4 border-t border-gray-200">
                <p className="text-sm text-[#0085CC] font-medium mb-2">Expertise:</p>
                <p className="text-sm text-gray-700">{leader.expertise}</p>
              </div>
            </Card>
          ))}
        </div>
      </ContentSection>

      <ContentSection background="white">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#005380] mb-6">Leadership Values</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto italic">
            The principles that guide our leadership and shape our organizational culture
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value) => (
            <Card key={value.title} gradient hover className="text-center">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#005380] to-[#0085CC] rounded-full flex items-center justify-center mx-auto">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">{value.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
            </Card>
          ))}
        </div>
      </ContentSection>
    </>
  )
}
