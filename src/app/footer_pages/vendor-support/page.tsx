import HeroSection from "~/components/footer_components/ui/hero-section"
import ContentSection from "~/components/footer_components/ui/content-section"
import SectionLinks from "~/components/footer_components/ui/section-links"
import { FaPalette, FaGlobeAmericas, FaHandshake } from 'react-icons/fa'
import Image from 'next/image'

const quickLinks = [
  {
    title: "Start Selling",
    description: "Begin your journey as an ArtStay vendor with our simple registration process",
    href: "/footer_pages/register-business",
  },
  {
    title: "Access Portal", 
    description: "Log in to your vendor dashboard to manage products and track performance",
    href: "/footer_pages/vendor-login",
  },
  {
    title: "Manage Operations",
    description: "Comprehensive tools for inventory, analytics, and business growth",
    href: "/footer_pages/vendor-dashboard",
  },
  {
    title: "Commit to Ethics",
    description: "Learn about our sustainability standards and ethical business practices",
    href: "/footer_pages/sustainability-ethics",
  },
  {
    title: "Expand with Us",
    description: "Explore partnership opportunities and scale your craft business globally",
    href: "/footer_pages/partnership-growth",
  },
  {
    title: "Voice Your Rights",
    description: "Access advocacy support and resources for vendor rights and protection",
    href: "/footer_pages/advocacy-support",
  },
]

export default function VendorSupportPage() {
  return (
    <>
      <HeroSection
        title="Empowering Vendors. Sustaining Craft."
        subtitle="Vendor Services"
        description="At ArtStay, vendors are not just sellers, they are cultural ambassadors. Our Vendor Services ecosystem is designed to simplify onboarding, and provide advocacy support rooted in Kashmir's legacy."
        backgroundImage="/images/kashmir.jpg"
        ctaText="Start Your Journey"
        ctaLink="/footer_pages/register-business"
      />

      <ContentSection background="white" padding="lg">
        <div className="text-center mb-12">
          <div className="w-50 h-50 flex items-center justify-center mb-2">
              <Image 
                src="/logo/logo_1.png" 
                alt="ArtStay Logo" 
                width={100}
                height={100}
                className="object-contain"
              />
            </div>
          <h2 className="text-3xl font-bold text-[#005380] mb-4">Your Gateway to Craft Commerce</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed italic">
            From registration to global partnerships, we provide comprehensive support for every stage of your vendor
            journey. Discover the tools, resources, and opportunities designed specifically for Kashmir&apos;s artisan
            community.
          </p>
        </div>

        <SectionLinks links={quickLinks} />
      </ContentSection>

      <ContentSection background="gradient" padding="lg">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#005380] mb-6">Why Choose ArtStay as Your Platform?</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#005380] to-[#0085CC] rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <FaPalette className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Cultural Authenticity</h3>
              <p className="text-gray-600 leading-relaxed">
                Promote authentic Kashmiri craftsmanship with GI certification support and origin
                verification.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#005380] to-[#0085CC] rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <FaGlobeAmericas className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Global Reach</h3>
              <p className="text-gray-600 leading-relaxed">
                Access international markets through our verified buyer network and exhibition partnerships.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#005380] to-[#0085CC] rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <FaHandshake className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Ethical Partnership</h3>
              <p className="text-gray-600 leading-relaxed">
                Join a platform committed to fair trade, sustainability, and supporting artisan communities.
              </p>
            </div>
          </div>
        </div>
      </ContentSection>

      <ContentSection background="white" padding="lg">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#005380] mb-6">Ready to Begin Your Vendor Journey?</h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed italic">
            Join thousands of artisans who have transformed their craft into sustainable businesses through ArtStay&apos;s
            comprehensive vendor ecosystem.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/footer_pages/register-business"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#005380] to-[#0085CC] text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
            >
              <span>Register Your Business</span>
              <span>→</span>
            </a>
            <a
              href="/footer_pages/vendor-login"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-[#0085CC] text-[#0085CC] rounded-lg hover:bg-[#0085CC]/5 transition-all duration-300 font-semibold"
            >
              <span>Existing Vendor Login</span>
            </a>
          </div>
        </div>
      </ContentSection>
    </>
  )
}
