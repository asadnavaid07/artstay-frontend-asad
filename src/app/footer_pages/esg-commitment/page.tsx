import HeroSection from "~/components/footer_components/ui/hero-section"
import ContentSection from "~/components/footer_components/ui/content-section"
import Card from "~/components/footer_components/ui/card"
import { Leaf, Users, Shield, Award, CheckCircle } from "lucide-react"
import Image from "next/image"

export default function ESGCommitmentPage() {
  const commitments = [
    {
      icon: Leaf,
      title: "Environmental",
      description:
        "We promote eco-tourism, green lodging, and low-carbon transportation. Every product listed on our marketplace carries a carbon footprint.",
      initiatives: [
        "Eco-tourism promotion",
        "Green lodging partnerships",
        "Low-carbon transportation",
        "Carbon footprint tracking",
        "Sustainable packaging",
      ],
    },
    {
      icon: Users,
      title: "Social",
      description:
        "ArtStay ensures fair wages, equal representation, and mental wellness support for artisans.",
      initiatives: [
        "Fair wage guarantee",
        "Equal representation",
        "Mental wellness support",
        "Language preservation",
        "Storytelling traditions",
      ],
    },
    {
      icon: Shield,
      title: "Governance",
      description:
        "A clear vendor code of ethics, digital transparency via blockchain verification, and zero tolerance for counterfeits.",
      initiatives: [
        "Vendor code of ethics",
        "Blockchain verification",
        "Zero counterfeit tolerance",
        "Digital transparency",
        "Regular audits",
      ],
    },
  ]

  const certifications = [
    "Kashmir Responsible Tourism Charter",
    "Global Artisan Fair-Trade Accord",
    "Sustainable Tourism Certification",
    "Ethical Business Standards",
  ]

  return (
    <>
      <HeroSection
        title="Our Responsibility is Sacred"
        subtitle="ESG Commitment"
        description="We believe that business success must be measured not just in profits, but in the positive impact we create for people, planet, and communities. Our ESG commitment is woven into every aspect of our operations."
        backgroundImage="/images/kashmir.jpg"
      />

      <ContentSection background="white">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#005380] mb-6">Our Three Pillars</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto italic">
            Environmental stewardship, social responsibility, and ethical governance guide every decision we make
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {commitments.map((commitment) => (
            <Card key={commitment.title} hover gradient className="h-full ">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#005380] to-[#0085CC] rounded-full flex items-center justify-center mx-auto mb-4">
                  <commitment.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#005380] text-center mb-4">{commitment.title}</h3>
              </div>

              <p className="text-gray-600 leading-relaxed mb-6">{commitment.description}</p>

              <div className="space-y-3">
                <h4 className="font-semibold text-gray-800 mb-3">Key Initiatives:</h4>
                {commitment.initiatives.map((initiative, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#0085CC] flex-shrink-0" />
                    <span className="text-gray-600 text-sm">{initiative}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </ContentSection>

      <ContentSection background="gradient">
        <div className="max-w-4xl mx-auto">
          <Card className="text-center bg-white">
            <Award className="w-16 h-16 text-[#0085CC] mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-[#005380] mb-6">Certifications & Commitments</h2>
            <p className="text-lg text-gray-600 mb-8 italic">
              ArtStay is proud to be a signatory to leading industry standards and certifications
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="p-4 bg-gradient-to-r from-[#005380]/10 to-[#0085CC]/10 rounded-lg border border-[#0085CC]/20"
                >
                  <div className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-[#005380]" />
                    <span className="font-medium text-gray-800">{cert}</span>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </ContentSection>

      <ContentSection background="white">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#005380] mb-6">Our Impact Promise</h2>
          <div className="max-w-4xl mx-auto">
            <blockquote className="text-xl md:text-2xl font-light text-gray-700 italic leading-relaxed mb-8">
              &quot;Every purchase, every experience, every partnership contributes to a more sustainable and equitable
              world. This is not just our business model—it&apos;s our moral imperative.&quot;
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
                <p className="font-semibold text-gray-800">ArtStay Leadership</p>
                <p className="text-gray-600 text-sm">ESG Committee</p>
              </div>
            </div>
          </div>
        </div>
      </ContentSection>
    </>
  )
}
