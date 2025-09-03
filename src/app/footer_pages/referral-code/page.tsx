
import HeroSection from "~/components/footer_components/ui/hero-section"
import ContentSection from "~/components/footer_components/ui/content-section"
import { QrCode, Link, Globe, Users, Target, Infinity } from "lucide-react"

export default function ReferralCodePage() {
  const useCases = [
    {
      icon: Target,
      title: "Product Promotions",
      description: "Use your code to promote specific Kashmiri crafts and artisan products",
    },
    {
      icon: Globe,
      title: "Tour Packages",
      description: "Integrate your code into cultural tourism and heritage tour promotions",
    },
    {
      icon: Users,
      title: "Newsletter Collaborations",
      description: "Include your referral code in newsletter partnerships and email campaigns",
    },
    {
      icon: Link,
      title: "Partnership Integrations",
      description: "Embed your code in cross-promotional partnerships and joint ventures",
    },
  ]

  const codeBenefits = [
    {
      icon: Target,
      title: "Direct Attribution",
      description: "Every sale is directly attributed to your unique code with 100% accuracy",
    },
    {
      icon: Globe,
      title: "Personalized URL Options",
      description: "Get custom URLs that reflect your brand while maintaining tracking integrity",
    },
    {
      icon: QrCode,
      title: "QR-code Version",
      description: "Offline campaign support with QR codes for print materials and events",
    },
  ]

  return (
    <>
      <HeroSection
        title="Your Code. Your Credibility."
        subtitle="Referral System"
        description="Each affiliate receives a unique Referral Code that becomes your permanent link to the ArtStay ecosystem. Use it across all platforms and campaigns to ensure proper attribution and maximize your earnings."
        backgroundImage="/images/kashmir.jpg"
      />

      <ContentSection background="white">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#005380] mb-6 ">How to Use Your Code</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto italic">
            Your referral code works across all ArtStay platforms and promotional channels
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-105 text-center"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-[#005380] to-[#0085CC] rounded-xl flex items-center justify-center mx-auto mb-4">
                <useCase.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">{useCase.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{useCase.description}</p>
            </div>
          ))}
        </div>

        {/* Code Example */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-[#005380]/5 to-[#0085CC]/10 rounded-3xl p-8 border border-[#0085CC]/20">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-[#005380] mb-4 ">Your Unique Code Example</h3>
              <p className="text-gray-600 italic">Here&apos;s how your personalized referral code will look</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 text-center shadow-lg">
                <QrCode className="w-12 h-12 text-[#0085CC] mx-auto mb-4" />
                <h4 className="font-semibold text-gray-800 mb-2">QR Code</h4>
                <div className="w-24 h-24 bg-gray-100 rounded-lg mx-auto flex items-center justify-center">
                  <span className="text-xs text-gray-500">QR Code</span>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 text-center shadow-lg">
                <Link className="w-12 h-12 text-[#0085CC] mx-auto mb-4" />
                <h4 className="font-semibold text-gray-800 mb-2">Referral Code</h4>
                <div className="bg-gray-100 rounded-lg p-3 font-mono text-sm">YOURNAME2025</div>
              </div>

              <div className="bg-white rounded-xl p-6 text-center shadow-lg">
                <Globe className="w-12 h-12 text-[#0085CC] mx-auto mb-4" />
                <h4 className="font-semibold text-gray-800 mb-2">Custom URL</h4>
                <div className="bg-gray-100 rounded-lg p-3 text-xs break-all">artstay.com/ref/yourname</div>
              </div>
            </div>
          </div>
        </div>
      </ContentSection>

      <ContentSection background="gradient">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#005380] mb-6">Code Benefits</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto italic">
            Your referral code comes with powerful features designed to maximize your success
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {codeBenefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-105 text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#005380] to-[#0085CC] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <benefit.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </ContentSection>

      <ContentSection background="white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-[#005380] to-[#0085CC] rounded-3xl p-12 text-white text-center">
            <Infinity className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Never Expires</h2>
            <p className="text-xl mb-8 opacity-90">
              Your referral code is your permanent link to the ArtStay ecosystem. Once assigned, it never expires and
              remains exclusively yours.
            </p>
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 mb-8">
              <p className="text-lg font-semibold mb-2">Long-term Partnership Benefits:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Lifetime code ownership</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Cumulative performance tracking</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Brand recognition growth</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Exclusive partner benefits</span>
                </div>
              </div>
            </div>
            <a
              href="/footer_pages/apply-affiliate"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#005380] font-semibold rounded-xl hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Get Your Unique Code
            </a>
          </div>
        </div>
      </ContentSection>
    </>
  )
}
