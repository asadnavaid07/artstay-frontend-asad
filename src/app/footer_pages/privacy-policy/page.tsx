import HeroSection from "~/components/footer_components/ui/hero-section"
import ContentSection from "~/components/footer_components/ui/content-section"
import PolicyCard from "~/components/footer_components/support/policy-card"
import Card from "~/components/footer_components/ui/card"
import { Shield, Eye, Download, Settings, Database, UserCheck } from "lucide-react"

export default function PrivacyPolicyPage() {
  const dataTypes = [
    {
      icon: UserCheck,
      title: "Account Information",
      description: "Name, email, phone number, and profile preferences for account management and communication",
    },
    {
      icon: Database,
      title: "Order & Booking Data",
      description: "Purchase history, tour bookings, payment information, and delivery addresses",
    },
    {
      icon: Eye,
      title: "Usage Analytics",
      description: "Website interactions, page views, and feature usage to improve our services",
    },
    {
      icon: Settings,
      title: "Preferences & Settings",
      description: "Language preferences, notification settings, and accessibility requirements",
    },
  ]

  const dataRights = [
    "Access your personal data and download a copy",
    "Correct inaccurate or incomplete information",
    "Delete your account and associated data",
    "Restrict processing of your data",
    "Object to marketing communications",
    "Data portability to another service",
  ]

  const securityMeasures = [
    "End-to-end encryption for sensitive data",
    "Regular security audits and penetration testing",
    "Multi-factor authentication for accounts",
    "Secure payment processing (PCI DSS compliant)",
    "Limited access controls for staff",
    "Regular data backups and disaster recovery",
  ]

  return (
    <>
      <HeroSection
        title="Your Data, Your Control"
        subtitle="Privacy & Data Protection"
        description="We believe privacy is a fundamental right. Our privacy policy explains how we collect, use, and protect your personal information with complete transparency."
        backgroundImage="/images/kashmir.jpg"
      />

      <ContentSection background="white">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#005380] mb-6">What Data We Collect</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto italic">
            We collect minimal, relevant information necessary to provide our services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {dataTypes.map((type, index) => (
            <Card key={index} hover gradient className="h-full">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#005380] to-[#0085CC] rounded-xl flex items-center justify-center flex-shrink-0">
                  <type.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">{type.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{type.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <PolicyCard title="Data Collection Principles" type="info">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3">We Only Collect:</h4>
              <ul className="space-y-2 text-sm">
                <li>• Information you voluntarily provide</li>
                <li>• Data necessary for service delivery</li>
                <li>• Anonymous usage statistics</li>
                <li>• Information required by law</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">We Never:</h4>
              <ul className="space-y-2 text-sm">
                <li>• Sell your data to third parties</li>
                <li>• Share data without consent</li>
                <li>• Collect unnecessary information</li>
                <li>• Use data for unrelated purposes</li>
              </ul>
            </div>
          </div>
        </PolicyCard>
      </ContentSection>

      <ContentSection background="gradient">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#005380] mb-6">Your Data Rights</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto italic">
            You have complete control over your personal information
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <Card hover className="h-full">
            <Shield className="w-12 h-12 text-[#0085CC] mb-6" />
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Your Rights Include:</h3>
            <div className="space-y-3">
              {dataRights.map((right, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#0085CC] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-600">{right}</span>
                </div>
              ))}
            </div>
          </Card>

          <Card hover className="h-full">
            <Settings className="w-12 h-12 text-[#0085CC] mb-6" />
            <h3 className="text-xl font-semibold text-gray-800 mb-4">How to Exercise Rights:</h3>
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Account Dashboard</h4>
                <p className="text-sm text-gray-600">Manage most settings directly from your account</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Email Request</h4>
                <p className="text-sm text-gray-600">Contact privacy@artstayglobal.com for assistance</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Response Time</h4>
                <p className="text-sm text-gray-600">We respond within 30 days as required by law</p>
              </div>
            </div>
          </Card>
        </div>
      </ContentSection>

      <ContentSection background="white">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#005380] mb-6">Data Security</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto italic">
            We implement industry-leading security measures to protect your information
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {securityMeasures.map((measure, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#005380]/5 to-[#0085CC]/10 rounded-xl p-6 border border-[#0085CC]/20"
            >
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-[#0085CC]" />
                <span className="text-gray-700 font-medium text-sm">{measure}</span>
              </div>
            </div>
          ))}
        </div>
      </ContentSection>

      <ContentSection background="gradient" id="download-policy">
        <div className="max-w-4xl mx-auto">
          <Card className="text-center p-12 bg-white">
            <Download className="w-16 h-16 text-[#0085CC] mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-[#005380] mb-6">Complete Privacy Policy</h2>
            <p className="text-lg text-gray-600 mb-8 italic">
              Download our complete privacy policy document for detailed information about our data practices.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="p-4 bg-gray-50 rounded-xl">
                <h4 className="font-semibold text-gray-800 mb-2">Last Updated</h4>
                <p className="text-sm text-gray-600">January 2025</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-xl">
                <h4 className="font-semibold text-gray-800 mb-2">Version</h4>
                <p className="text-sm text-gray-600">2.1</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-xl">
                <h4 className="font-semibold text-gray-800 mb-2">Format</h4>
                <p className="text-sm text-gray-600">PDF, 12 pages</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#005380] to-[#0085CC] text-white font-semibold rounded-xl hover:scale-105 transition-all duration-300 shadow-lg">
                <Download className="w-5 h-5 mr-2" />
                Download Full Policy
              </button>
              <a
                href="mailto:privacy@artstayglobal.com"
                className="inline-flex items-center justify-center px-8 py-4 bg-white border-2 border-[#0085CC] text-[#0085CC] font-semibold rounded-xl hover:bg-[#0085CC] hover:text-white transition-all duration-300"
              >
                Contact Privacy Team
              </a>
            </div>
          </Card>
        </div>
      </ContentSection>
    </>
  )
}
