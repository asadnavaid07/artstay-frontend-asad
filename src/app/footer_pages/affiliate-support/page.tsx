
import HeroSection from "~/components/footer_components/ui/hero-section"
import ContentSection from "~/components/footer_components/ui/content-section"
import FeatureGrid from "~/components/footer_components/affiliate/feature-grid"
import { Users, BookOpen, MessageCircle, Mail, Headphones } from "lucide-react"

export default function AffiliateSupportPage() {
  const supportFeatures = [
    {
      icon: "Users",
      title: "1-on-1 Onboarding Session",
      description: "Personal guidance from our affiliate success team to get you started on the right track",
    },
    {
      icon: "Video",
      title: "Monthly Affiliate Webinars",
      description: "Regular training sessions covering best practices, new features, and success strategies",
    },
    {
      icon: "BookOpen",
      title: "Resource Library",
      description: "Comprehensive collection of FAQs, graphics, pricing sheets, and marketing guides",
    },
    {
      icon: "MessageCircle",
      title: "Exclusive Community Access",
      description: "Join our affiliate-only WhatsApp and Slack communities for peer support and networking",
    },
  ]

  const supportChannels = [
    {
      title: "Email Support",
      description: "Get detailed responses to complex questions",
      contact: "affiliates@artstayglobal.com",
      responseTime: "24 hours",
      icon: Mail,
    },
    {
      title: "Live Chat",
      description: "Quick answers to urgent questions",
      contact: "Available in dashboard",
      responseTime: "2-4 hours",
      icon: MessageCircle,
    },
    {
      title: "Phone Support",
      description: "Direct conversation with our team",
      contact: "Scheduled via dashboard",
      responseTime: "Same day",
      icon: Headphones,
    },
  ]

  const resourceCategories = [
    { title: "Getting Started Guides", count: "12 resources" },
    { title: "Marketing Templates", count: "50+ assets" },
    { title: "Product Information", count: "200+ items" },
    { title: "Success Stories", count: "25 case studies" },
    { title: "Technical Documentation", count: "15 guides" },
    { title: "Video Tutorials", count: "30+ videos" },
  ]

  return (
    <>
      <HeroSection
        title="We've Got Your Back"
        subtitle="Affiliate Support"
        description="Our dedicated support team is committed to your success. From onboarding to ongoing optimization, we provide comprehensive support to help you maximize your affiliate earnings and impact."
        backgroundImage="/images/kashmir.jpg"
      />

      <ContentSection background="white">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#005380] mb-6">Support Includes</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto italic">
            Comprehensive support designed to ensure your success as an ArtStay affiliate
          </p>
        </div>

        <FeatureGrid features={supportFeatures} columns={2} />
      </ContentSection>

      <ContentSection background="gradient">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#005380] mb-6">Multiple Support Channels</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto italic">
            Choose the support method that works best for your needs and schedule
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {supportChannels.map((channel, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#005380] to-[#0085CC] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <channel.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">{channel.title}</h3>
              <p className="text-gray-600 mb-4 text-center">{channel.description}</p>
              <div className="space-y-2 text-center">
                <p className="text-sm text-gray-500">
                  <strong>Contact:</strong> {channel.contact}
                </p>
                <p className="text-sm text-gray-500">
                  <strong>Response Time:</strong> {channel.responseTime}
                </p>
              </div>
            </div>
          ))}
        </div>
      </ContentSection>

      <ContentSection background="white">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#005380] mb-6">Resource Library</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto italic">
            Access our comprehensive collection designed to support your affiliate journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {resourceCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#005380]/5 to-[#0085CC]/10 rounded-xl p-6 border border-[#0085CC]/20 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">{category.title}</h3>
                  <p className="text-sm text-gray-600">{category.count}</p>
                </div>
                <BookOpen className="w-8 h-8 text-[#0085CC]" />
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-[#005380]/5 to-[#0085CC]/10 rounded-3xl p-12 border border-[#0085CC]/20 text-center">
            <h3 className="text-2xl font-bold text-[#005380] mb-6">Community Benefits</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <MessageCircle className="w-12 h-12 text-[#0085CC] mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-gray-800 mb-3">WhatsApp Community</h4>
                <p className="text-gray-600 text-sm">Quick updates, tips sharing, and peer support</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <Users className="w-12 h-12 text-[#0085CC] mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-gray-800 mb-3">Slack Workspace</h4>
                <p className="text-gray-600 text-sm">Organized discussions, resource, and networking</p>
              </div>
            </div>
          </div>
        </div>
      </ContentSection>

      <ContentSection background="gradient">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white rounded-3xl p-12 shadow-2xl">
            <Mail className="w-16 h-16 text-[#0085CC] mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#005380] mb-6">Need Help?</h2>
            <p className="text-xl text-gray-600 mb-8 italic">
              Our affiliate support team is here to help you succeed. Don&apos;t hesitate to reach out with any questions or
              concerns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:affiliates@artstayglobal.com"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#005380] to-[#0085CC] text-white font-semibold rounded-xl hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Email Support Team
              </a>
              <a
                href="/footer_pages/apply-affiliate"
                className="inline-flex items-center justify-center px-8 py-4 bg-white border-2 border-[#0085CC] text-[#0085CC] font-semibold rounded-xl hover:bg-[#0085CC] hover:text-white transition-all duration-300"
              >
                Join Our Program
              </a>
            </div>
            <p className="text-sm text-gray-500 mt-6">
              <strong>Email:</strong> affiliates@artstayglobal.com • <strong>Response Time:</strong> Within 24 hours
            </p>
          </div>
        </div>
      </ContentSection>
    </>
  )
}
