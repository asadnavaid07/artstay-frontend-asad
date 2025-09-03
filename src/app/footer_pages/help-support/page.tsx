import ContentSection from "~/components/footer_components/ui/content-section"
import Card from "~/components/footer_components/ui/card"
import { Shield, Users, Cookie, HelpCircle, Eye, AlertTriangle, Phone, Mail, MessageCircle } from "lucide-react"
import HeroSection from "~/components/footer_components/ui/hero-section"

export default function HelpSupportPage() {
  const supportChannels = [
    {
      icon: Mail,
      title: "Email Support",
      description: "Get detailed help with your questions",
      contact: "support@artstayglobal.com",
      responseTime: "24-48 hours",
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Quick answers to urgent questions",
      contact: "Available on website",
      responseTime: "2-4 hours",
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Direct conversation with our team",
      contact: "Schedule via dashboard",
      responseTime: "Same day",
    },
  ]

  const policyAreas = [
    {
      icon: Shield,
      title: "Refund Policy",
      description: "Understand your rights for returns and refunds",
      link: "/refund-policy",
      color: "text-green-600",
    },
    {
      icon: Users,
      title: "Privacy Policy",
      description: "Learn how we protect and use your data",
      link: "/privacy-policy",
      color: "text-blue-600",
    },
    {
      icon: Cookie,
      title: "Cookie Policy",
      description: "Manage your cookie preferences and choices",
      link: "/cookies",
      color: "text-purple-600",
    },
    {
      icon: HelpCircle,
      title: "FAQs",
      description: "Find quick answers to common questions",
      link: "/faqs",
      color: "text-orange-600",
    },
    {
      icon: Eye,
      title: "Accessibility Support",
      description: "Get help with accessibility features",
      link: "/accessibility-support",
      color: "text-indigo-600",
    },
    {
      icon: AlertTriangle,
      title: "Report a Concern",
      description: "Safely report issues or violations",
      link: "/report-concern",
      color: "text-red-600",
    },
  ]

  return (
    <>
      <HeroSection
        title="We're Here to Help"
        subtitle="With Care, Clarity & Responsibility"
        description="At ArtStay, your experience matters to us. Whether you're a buyer, traveler, artisan, or affiliate, our Support Center ensures transparency, fairness, and inclusive access to essential information."
        backgroundImage="/images/kashmir.jpg"
      />

      <ContentSection background="white">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#005380] mb-6">Quick Access</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto italic">
            Direct links to our most important policies and support resources
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {[
            { title: "Understand your rights", link: "/refund-policy", icon: Shield, desc: "Refund Policy" },
            { title: "Know your privacy", link: "/privacy-policy", icon: Users, desc: "Privacy Policy" },
            { title: "Manage cookies", link: "/cookies", icon: Cookie, desc: "Cookie Settings" },
            { title: "Find answers", link: "/faqs", icon: HelpCircle, desc: "FAQs" },
            { title: "Accessibility help", link: "/accessibility-support", icon: Eye, desc: "Accessibility Support" },
            { title: "Raise a concern", link: "/report-concern", icon: AlertTriangle, desc: "Report Issues" },
          ].map((item, index) => (
            <a key={index} href={item.link} className="group">
              <Card hover className="h-full text-center group-hover:shadow-2xl transition-all duration-300 p-6">
                <item.icon className="w-12 h-12 text-[#0085CC] mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-[#005380] transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </Card>
            </a>
          ))}
        </div>
      </ContentSection>

      <ContentSection background="white">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#005380] mb-6">Support Channels</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto italic">
            Multiple ways to get the help you need, when you need it
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {supportChannels.map((channel, index) => (
            <Card key={index} hover gradient className="text-center h-full">
              <div className="w-16 h-16 bg-gradient-to-br from-[#005380] to-[#0085CC] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <channel.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{channel.title}</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">{channel.description}</p>
              <div className="space-y-2 text-sm">
                <p className="text-gray-500">
                  <strong>Contact:</strong> {channel.contact}
                </p>
                <p className="text-gray-500">
                  <strong>Response:</strong> {channel.responseTime}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </ContentSection>

      <ContentSection background="gradient">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#005380] mb-6">Policies & Resources</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto italic">
            Everything you need to know about your rights, privacy, and how we operate
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {policyAreas.map((area, index) => (
            <a key={index} href={area.link} className="group">
              <Card hover className="h-full text-center group-hover:shadow-2xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-[#005380] to-[#0085CC] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <area.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4 group-hover:text-[#005380] transition-colors">
                  {area.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{area.description}</p>
              </Card>
            </a>
          ))}
        </div>
      </ContentSection>

      <ContentSection background="white">
        <div className="max-w-4xl mx-auto text-center">
          <Card gradient className="p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#005380] mb-6">Our Commitment to You</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <Shield className="w-12 h-12 text-[#0085CC] mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Transparency</h3>
                <p className="text-gray-600 text-sm">Clear policies and honest communication</p>
              </div>
              <div className="text-center">
                <Users className="w-12 h-12 text-[#0085CC] mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Fairness</h3>
                <p className="text-gray-600 text-sm">Equal treatment for all users</p>
              </div>
              <div className="text-center">
                <Eye className="w-12 h-12 text-[#0085CC] mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Accessibility</h3>
                <p className="text-gray-600 text-sm">Inclusive support for everyone</p>
              </div>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              We believe that great support isn&apos;t just about solving problems, it&apos;s about creating an environment where
              every user feels valued, heard, and empowered.
            </p>
          </Card>
        </div>
      </ContentSection>
    </>
  )
}
