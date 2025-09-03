
import Image from "next/image"
import HeroSection from "~/components/footer_components/ui/hero-section"
import ContentSection from "~/components/footer_components/ui/content-section"
import SectionLinks from "~/components/footer_components/ui/section-links"
import { Percent, BarChart3, Smartphone, FileText, Headphones } from "lucide-react"

export default function AffiliateProgramPage() {
  const sectionLinks = [
    {
      title: "Program Benefits",
      description: "Discover the unique advantages of joining our affiliate network",
      href: "/program-overview",
    },
    {
      title: "Commission Model", 
      description: "Understand our transparent tier-based commission structure",
      href: "/commission-tiers",
    },
    {
      title: "Real-Time Dashboard",
      description: "Access powerful analytics and tracking tools",
      href: "/tracking-dashboard",
    },
    {
      title: "Application Process",
      description: "Start your affiliate journey in just a few simple steps",
      href: "/apply-affiliate", 
    },
    {
      title: "Promo Tools & Support",
      description: "Get access to marketing resources and dedicated support",
      href: "/promo-campaigns",
    },
    {
      title: "Success Stories",
      description: "Read inspiring stories from our successful affiliates",
      href: "/success-stories",
    },
  ]

  const quickStats = [
    { icon: Percent, title: "Up to 10%", subtitle: "Commission Rate" },
    { icon: BarChart3, title: "Real-Time", subtitle: "Analytics" },
    { icon: Smartphone, title: "Mobile", subtitle: "Dashboard" },
    { icon: FileText, title: "Marketing", subtitle: "Resources" },
    { icon: Headphones, title: "24/7", subtitle: "Support" },
  ]

  return (
    <>
      <HeroSection
        title="Earn With Integrity. Share With Purpose."
        subtitle="Affiliate Program"
        description="The ArtStay Affiliate Program invites creators, influencers, bloggers, tourism leaders, & ethical marketers to promote a one-of-a-kind platform that celebrates Kashmir's handmade crafts & cultural tourism."
        ctaText="Join Our Program"
        ctaLink="#program-sections"
        backgroundImage="/images/kashmir.jpg"
      />

      {/* Quick Stats Bar */}
      <ContentSection background="white" padding="sm">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {quickStats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-[#005380] to-[#0085CC] rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-lg font-bold text-gray-800">{stat.title}</div>
              <div className="text-sm text-gray-600">{stat.subtitle}</div>
            </div>
          ))}
        </div>
      </ContentSection>

      <ContentSection id="program-sections" background="gradient">
        <div className="text-center mb-20">
          <div className="w-50 h-50 flex items-center justify-center mb-2">
              <Image 
                src="/logo/logo_1.png" 
                alt="ArtStay Logo" 
                width={100}
                height={100}
                className="object-contain"
              />
            </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8 leading-tight">
            <span className="bg-gradient-to-r from-[#005380] to-[#0085CC] bg-clip-text text-transparent">
              Explore Our Program
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed italic">
            Everything you need to start earning while promoting authentic Kashmiri culture
          </p>
        </div>

        <SectionLinks links={sectionLinks} />
      </ContentSection>

      {/* Call to Action Section */}
      <ContentSection background="white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-[#005380]/5 to-[#0085CC]/10 rounded-3xl p-12 border border-[#0085CC]/20">
            <h2 className="text-3xl md:text-4xl font-bold text-[#005380] mb-6">Ready to Start Earning?</h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Join thousands of affiliates who are already earning while promoting authentic Kashmiri heritage and
              responsible tourism.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/apply-affiliate"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#005380] to-[#0085CC] text-white font-semibold rounded-xl hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Apply Now - It&apos;s Free
              </a>
              <a
                href="/program-overview"
                className="inline-flex items-center justify-center px-8 py-4 bg-white border-2 border-[#0085CC] text-[#0085CC] font-semibold rounded-xl hover:bg-[#0085CC] hover:text-white transition-all duration-300"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </ContentSection>
    </>
  )
}
