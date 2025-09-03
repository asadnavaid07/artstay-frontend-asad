import Image from "next/image"
import HeroSection from "~/components/footer_components/ui/hero-section"
import ContentSection from "~/components/footer_components/ui/content-section"
import SectionLinks from "~/components/footer_components/ui/section-links"

export default function ArtStayOverviewPage() {
  const sectionLinks = [
    {
      title: "Learn About Us",
      description: "Discover our roots in heritage",
      href: "/who-we-are",
    },
    {
      title: "Meet Our Leaders",
      description: "Get to know the visionaries behind ArtStay",
      href: "/mission-leadership",
    },
    {
      title: "Explore Our Impact",
      description: "See how we're transforming lives",
      href: "/project-glimpse",
    },
    {
      title: "Our Responsibility",
      description: "Learn about our environmental responsibility",
      href: "/esg-commitment",
    },
    {
      title: "Ethical Structure",
      description: "Learn our governance & accountability framework",
      href: "/governance",
    },
    {
      title: "Join Forces",
      description: "Partner with us to create meaningful change",
      href: "/partners",
    },
    {
      title: "Be Part of the Vision",
      description: "Explore career opportunities with purpose",
      href: "/careers",
    },
  ]

  return (
    <>
      <HeroSection
        title="The Soul Of ArtStay"
        subtitle="Heritage • Innovation • Impact"
        description="ArtStay is more than a platform, it's a movement. We bridge the timeless beauty of Kashmir's handicrafts with the immersive power of cultural tourism. Our purpose is rooted in revival, respect, and regeneration, and regenerating meaningful travel experiences for a global audience."
        ctaText="Explore Our Journey"
        ctaLink="#sections"
        backgroundImage="/images/kashmir.jpg"
      />

      <ContentSection id="sections" background="gradient">
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
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
            <span className="bg-gradient-to-r from-[#005380] to-[#0085CC] bg-clip-text text-transparent">
              Discover ArtStay
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed italic">
            Explore every facet of our mission, from our founding story to our global impact
          </p>
        </div>

        <SectionLinks links={sectionLinks} />
      </ContentSection>
    </>
  )
}
