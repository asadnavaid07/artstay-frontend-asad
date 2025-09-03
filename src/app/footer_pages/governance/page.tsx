import Image from "next/image"
import HeroSection from "~/components/footer_components/ui/hero-section"
import ContentSection from "~/components/footer_components/ui/content-section"
import Card from "~/components/footer_components/ui/card"
import { Building, Users, Shield, CheckCircle, Eye } from "lucide-react"

export default function GovernancePage() {
  const structure = [
    {
      title: "Parent Company",
      name: "ArtStay LLC, USA",
      description: "Primary holding company overseeing global operations and strategic direction",
    },
    {
      title: "Subsidiary",
      name: "ArtStay India Pvt. Ltd.",
      description: "Local operations hub managing artisan relationships and cultural programs",
    },
    {
      title: "Primary Beneficiaries",
      name: "Global Stakeholders",
      description: "Indian artisans, North American buyers, cultural stakeholders worldwide",
    },
  ]

  const governanceTools = [
    {
      icon: Shield,
      title: "Blockchain Craft Verification",
      description: "Every product is tracked and verified using blockchain technology for authenticity",
    },
    {
      icon: Users,
      title: "Vendor Whitelisting & Ranking System",
      description: "Comprehensive vetting and continuous evaluation of all vendor partners",
    },
    {
      icon: Eye,
      title: "Audit Panel for Artisan Welfare",
      description: "Independent oversight ensuring fair treatment and welfare of artisan communities",
    },
  ]

  const ethicalMandates = [
    "No child labor in any form",
    "Transparent vendor contracts with clear terms",
    "Equal platform access for small and remote artisan units",
    "Fair pricing and timely payments",
    "Cultural sensitivity and respect",
    "Environmental compliance standards",
  ]

  return (
    <>
      <HeroSection
        title="Ethics. Structure. Accountability."
        subtitle="Governance Framework"
        description="Our governance structure ensures transparency, accountability, and ethical operations across all levels of our organization, protecting the interests of artisans, customers, and stakeholders."
         backgroundImage="/images/kashmir.jpg"
      />

      <ContentSection background="white">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#005380]  mb-6">Company Structure</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto italic">
            A transparent organizational framework designed for global impact and local empowerment
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {structure.map((item) => (
            <Card key={item.title} hover gradient className="text-center">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#005380] to-[#0085CC] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="w-8 h-8 text-white" />
                </div>
                <span className="text-sm font-semibold text-[#005380] uppercase tracking-wider">{item.title}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">{item.name}</h3>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </Card>
          ))}
        </div>
      </ContentSection>

      <ContentSection background="gradient">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#005380] mb-6">Governance Tools</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto italic">
            Advanced systems and processes that ensure ethical operations and stakeholder protection
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {governanceTools.map((tool) => (
            <Card key={tool.title} hover className="h-full">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#005380] to-[#0085CC] rounded-full flex items-center justify-center mx-auto mb-4">
                  <tool.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-[#005380]  mb-4">{tool.title}</h3>
              <p className="text-gray-600 leading-relaxed">{tool.description}</p>
            </Card>
          ))}
        </div>
      </ContentSection>

      <ContentSection background="white">
        <div className="max-w-4xl mx-auto">
          <Card gradient className="text-center">
            <Shield className="w-16 h-16 text-[#0085CC] mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-[#005380]  mb-6">Ethical Mandates</h2>
            <p className="text-lg text-gray-600 mb-8 italic">
              Non-negotiable principles that guide every aspect of our operations
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              {ethicalMandates.map((mandate, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-white bg-opacity-50 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-[#0085CC] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-medium">{mandate}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </ContentSection>

      <ContentSection background="gradient">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#005380]  mb-6">Accountability Promise</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="bg-white">
              <blockquote className="text-xl md:text-2xl font-light text-gray-700 italic leading-relaxed mb-8">
                &quot;Governance is not about control, it&apos;s about creating a framework where trust, transparency, and ethical
                behavior naturally flourish.&quot;
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
                  <p className="font-semibold text-[#005380]">ArtStay Board of Directors</p>
                  <p className="text-[#0085CC] text-sm">Governance & Ethics Committee</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </ContentSection>
    </>
  )
}
