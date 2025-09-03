import HeroSection from "~/components/footer_components/ui/hero-section"
import ContentSection from "~/components/footer_components/ui/content-section"
import FeatureGrid from "~/components/footer_components/affiliate/feature-grid"


export default function ProgramOverviewPage() {
  const features = [
    {
      icon: "Link",
      title: "Unique Tracking Links",
      description: "Get personalized tracking links with real-time attribution and conversion tracking",
    },
    {
      icon: "ImageIcon",
      title: "Curated Media Kits",
      description: "Access professional banners, images, and marketing materials for high conversion",
    },
    {
      icon: "FileText",
      title: "Verified Artisan Content",
      description: "Share authentic stories and verified product information from Kashmiri artisans",
    },
    {
      icon: "Users",
      title: "Exclusive Training Support",
      description: "Get personalized onboarding and ongoing training to maximize your earning potential",
    },
    {
      icon: "DollarSign",
      title: "No Upfront Investment",
      description: "Start earning immediately with zero startup costs or hidden fees",
    },
    {
      icon: "Zap",
      title: "Performance Incentives",
      description: "Unlock bonus commissions and special rewards based on your performance",
    },
  ]

  const targetAudience = [
    "Travel bloggers and creators",
    "Ethical shopping influencers",
    "Cultural tourism advocates",
    "Sustainable lifestyle bloggers",
    "Social media influencers",
    "Tourism industry professionals",
  ]

  return (
    <>
      <HeroSection
        title="Promote Culture. Earn Rewards."
        subtitle="Program Overview"
        description="Our affiliate ecosystem is built on transparency, performance-based incentives, and long-term relationships. Whether you're a travel blogger or an ethical shopping influencer, ArtStay gives you everything you need to succeed."
        backgroundImage="/images/kashmir.jpg"
      />

      <ContentSection background="white">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#005380] mb-6">What You Get</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto italic">
            Everything you need to promote authentic Kashmiri culture and earn substantial commissions
          </p>
        </div>

        <FeatureGrid features={features} />
      </ContentSection>

      <ContentSection background="gradient">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#005380] mb-8">Perfect for Content Creators</h2>
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                Our affiliate program is designed specifically for creators who value authenticity and cultural
                preservation. You&apos;re not just promoting products, you&apos;re sharing stories of heritage and craftsmanship.
              </p>
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Ideal for:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {targetAudience.map((audience, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#0085CC] rounded-full"></div>
                      <span className="text-gray-700">{audience}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-[#005380] to-[#0085CC] rounded-3xl flex items-center justify-center text-white text-center p-8 shadow-2xl">
              <div>
                <div className="w-24 h-24 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl font-bold">0$</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">No Upfront Investment</h3>
                <p className="text-lg opacity-90">Just your passion for impact and authentic storytelling</p>
              </div>
            </div>
          </div>
        </div>
      </ContentSection>

      <ContentSection background="white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#005380] mb-8">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8 italic">
            Join our community of creators who are earning while making a positive impact on artisan communities
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/apply-affiliate"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#005380] to-[#0085CC] text-white font-semibold rounded-xl hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Apply Now
            </a>
            <a
              href="/commission-tiers"
              className="inline-flex items-center justify-center px-8 py-4 bg-white border-2 border-[#0085CC] text-[#0085CC] font-semibold rounded-xl hover:bg-[#0085CC] hover:text-white transition-all duration-300"
            >
              View Commission Tiers
            </a>
          </div>
        </div>
      </ContentSection>
    </>
  )
}
