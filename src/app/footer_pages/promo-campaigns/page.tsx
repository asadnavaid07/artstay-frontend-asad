
import HeroSection from "~/components/footer_components/ui/hero-section"
import ContentSection from "~/components/footer_components/ui/content-section"
import FeatureGrid from "~/components/footer_components/affiliate/feature-grid"
import { ImageIcon, Mail, Share2, BookOpen, Award, Users, Palette } from "lucide-react"

export default function PromoCampaignsPage() {
  const resources = [
    {
      icon: "ImageIcon",
      title: "Curated Banners",
      description: "Professional tourism and craft banners in multiple sizes, optimized for web and social media",
    },
    {
      icon: "Mail",
      title: "Email Templates",
      description: "Festival-focused and GI product drop email templates with high conversion rates",
    },
    {
      icon: "Share2",
      title: "Social Media Packs",
      description: "Ready-to-use social media posts, stories, and carousel content for all major platforms",
    },
    {
      icon: "BookOpen",
      title: "Artisan Story Capsules",
      description: "Authentic artisan stories and craft documentation for compelling content creation",
    },
    {
      icon: "Gift",
      title: "Discount Campaigns",
      description: "Exclusive discount codes and limited-time offers to boost conversions",
    },
    {
      icon: "Lightbulb",
      title: "Launch Offers",
      description: "Special promotional materials for new product launches and seasonal campaigns",
    },
  ]

  const successTips = [
    {
      title: "Highlight GI-certified Products",
      description: "Focus on Geographical Indication certified products to emphasize authenticity and quality",
      icon: <Award className="w-8 h-8 text-[#005380]" />,
    },
    {
      title: "Share Real Artisan Stories",
      description: "Use our artisan story capsules to create emotional connections with your audience",
      icon: <Users className="w-8 h-8 text-[#005380]" />,
    },
    {
      title: "Blend Tourism & Handicrafts",
      description: "Combine travel experiences with craft shopping for comprehensive storytelling",
      icon: <Palette className="w-8 h-8 text-[#005380]" />,
    },
  ]

  return (
    <>
      <HeroSection
        title="Marketing That Converts"
        subtitle="Promotional Resources"
        description="Access our comprehensive library of marketing materials designed to help you promote Kashmiri culture effectively. From professional banners to authentic artisan stories, we provide everything you need to succeed."
        backgroundImage="/images/kashmir.jpg"
      />

      <ContentSection background="white">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#005380] mb-6">Available Resources</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto italic">
            Professional marketing materials created by our design team to maximize your conversion rates
          </p>
        </div>

        <FeatureGrid features={resources} />
      </ContentSection>

      <ContentSection background="gradient">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#005380] mb-6">Tips for Success</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto italic">
            Proven strategies to maximize your affiliate earnings and create meaningful connections
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {successTips.map((tip, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="text-center mb-6">
                <div className="text-4xl mb-4">{tip.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{tip.title}</h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-center">{tip.description}</p>
            </div>
          ))}
        </div>
      </ContentSection>

      <ContentSection background="white">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-[#005380]/5 to-[#0085CC]/10 rounded-3xl p-12 border border-[#0085CC]/20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#005380] mb-6">Resource Library Preview</h2>
              <p className="text-xl text-gray-600 italic">
                Get a glimpse of the professional marketing materials available to our affiliates
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Resource Preview Cards */}
              <div className="bg-white rounded-xl p-4 shadow-lg">
                <div className="aspect-video bg-gradient-to-br from-[#005380] to-[#0085CC] rounded-lg mb-3 flex items-center justify-center">
                  <ImageIcon className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-gray-800 text-sm">Web Banners</h4>
                <p className="text-xs text-gray-600">728x90, 300x250, 160x600</p>
              </div>

              <div className="bg-white rounded-xl p-4 shadow-lg">
                <div className="aspect-video bg-gradient-to-br from-[#005380] to-[#0085CC] rounded-lg mb-3 flex items-center justify-center">
                  <Share2 className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-gray-800 text-sm">Social Posts</h4>
                <p className="text-xs text-gray-600">Instagram, Facebook, Twitter</p>
              </div>

              <div className="bg-white rounded-xl p-4 shadow-lg">
                <div className="aspect-video bg-gradient-to-br from-[#005380] to-[#0085CC] rounded-lg mb-3 flex items-center justify-center">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-gray-800 text-sm">Email Templates</h4>
                <p className="text-xs text-gray-600">Newsletter, Promotional</p>
              </div>

              <div className="bg-white rounded-xl p-4 shadow-lg">
                <div className="aspect-video bg-gradient-to-br from-[#005380] to-[#0085CC] rounded-lg mb-3 flex items-center justify-center">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-gray-800 text-sm">Story Content</h4>
                <p className="text-xs text-gray-600">Artisan profiles, Craft guides</p>
              </div>
            </div>
          </div>
        </div>
      </ContentSection>

      <ContentSection background="gradient">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white rounded-3xl p-12 shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-[#005380] mb-6">Ready to Start Promoting?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Get instant access to our complete marketing resource library and start creating compelling campaigns
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/apply-affiliate"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#005380] to-[#0085CC] text-white font-semibold rounded-xl hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Access Resources
              </a>
              <a
                href="/referral-code"
                className="inline-flex items-center justify-center px-8 py-4 bg-white border-2 border-[#0085CC] text-[#0085CC] font-semibold rounded-xl hover:bg-[#0085CC] hover:text-white transition-all duration-300"
              >
                Learn About Referral Codes
              </a>
            </div>
          </div>
        </div>
      </ContentSection>
    </>
  )
}
