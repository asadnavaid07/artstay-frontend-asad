import HeroSection from "~/components/footer_components/ui/hero-section"
import ContentSection from "~/components/footer_components/ui/content-section"
import RegistrationForm from "~/components/footer_components/vendor/registration-form"
import VendorCard from "~/components/footer_components/vendor/vendor-card"
import { Users, Award, Globe, TrendingUp } from "lucide-react"

const benefits = [
  {
    title: "Verified Buyer Network",
    description: "Connect with buyers who value authentic Kashmiri craftsmanship",
    icon: <Users className="w-6 h-6" />,
    features: [
      "Pre-screened international buyers",
      "Direct communication channels",
      "Secure payment processing",
      "Buyer feedback system",
    ],
  },
  {
    title: "International Exhibitions",
    description: "Optional listing in prestigious craft exhibitions and trade shows worldwide",
    icon: <Globe className="w-6 h-6" />,
    features: [
      "Global exhibition participation",
      "Marketing support provided",
      "Networking opportunities",
      "Brand visibility enhancement",
    ],
  },
  {
    title: "CraftLore Accreditation",
    description: "Inclusion in our ranking system that validates authentic craftsmanship",
    icon: <Award className="w-6 h-6" />,
    features: [
      "Expert craft evaluation",
      "Authenticity certification",
      "Quality ranking system",
      "Premium listing status",
    ],
  },
  {
    title: "Business Growth Tools",
    description: "Access analytics, market insights, and tools designed for artisan businesses",
    icon: <TrendingUp className="w-6 h-6" />,
    features: ["Sales analytics dashboard", "Market trend insights", "Inventory management", "Performance tracking"],
  },
]

const eligibleVendors = [
  {
    type: "Kashmiri Artisans or Collectives",
    description: "Individual craftspeople or artisan groups specializing in traditional Kashmiri arts",
    requirements: ["Valid identification", "Craft samples", "Origin verification"],
  },
  {
    type: "Ethical Handicraft Traders/Exporters",
    description: "Businesses dealing in authentic handicrafts with ethical sourcing practices",
    requirements: ["Business registration", "Ethical sourcing proof", "Quality samples"],
  },
  {
    type: "Artisan NGOs or Women-led Groups",
    description: "Non-profit organizations and self-help groups supporting artisan communities",
    requirements: ["NGO registration", "Group documentation", "Impact reports"],
  },
]

export default function RegisterBusinessPage() {
  return (
    <>
      <HeroSection
        title="Onboard with Ease"
        subtitle="Vendor Registration"
        description="Join ArtStay's trusted vendor network and transform your craft into a thriving business. Our streamlined registration process is designed to welcome authentic artisans and ethical traders into our global marketplace."
        backgroundImage="/images/kashmir.jpg"
        ctaText="Start Registration"
        ctaLink="#registration-form"
      />

      <ContentSection background="white" padding="lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#005380] mb-4">Simple 3-Step Registration Process</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed italic">
            We&apos;ve made vendor onboarding straightforward and efficient. Complete your registration in three easy steps
            and join our community of verified artisans and craft businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-[#005380] to-[#0085CC] rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl">
              1
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Fill Application Form</h3>
            <p className="text-gray-600 leading-relaxed">
              Complete our comprehensive vendor application with your business details and craft specialization.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-[#005380] to-[#0085CC] rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl">
              2
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Submit Documents</h3>
            <p className="text-gray-600 leading-relaxed">
              Upload required documents including ID proof, GI certificate (if applicable), and sample photos.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-[#005380] to-[#0085CC] rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl">
              3
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Get Verified</h3>
            <p className="text-gray-600 leading-relaxed">
              Our team reviews and activates your vendor portal within 3-5 working days after verification.
            </p>
          </div>
        </div>
      </ContentSection>

      <ContentSection background="gradient" padding="lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#005380] mb-4">Who Can Apply?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed italic">
            ArtStay welcomes authentic artisans, ethical traders, and organizations committed to preserving and
            promoting Kashmiri craft heritage.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {eligibleVendors.map((vendor) => (
            <div key={vendor.type} className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">{vendor.type}</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">{vendor.description}</p>

              <div>
                <h4 className="font-medium text-gray-800 mb-2">Requirements:</h4>
                <ul className="space-y-1">
                  {vendor.requirements.map((req, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-[#0085CC] rounded-full"></div>
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </ContentSection>

      <ContentSection background="white" padding="lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#005380] mb-4">Benefits of Registration</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed italic">
            Unlock exclusive opportunities and tools designed to help your craft business thrive in the global
            marketplace.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit) => (
            <VendorCard
              key={benefit.title}
              title={benefit.title}
              description={benefit.description}
              icon={benefit.icon}
              features={benefit.features}
            />
          ))}
        </div>
      </ContentSection>

      <ContentSection background="gray" padding="lg" id="registration-form">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#005380] mb-4">Start Your Registration</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed italic">
            Ready to join ArtStay&apos;s vendor community? Complete the form below to begin your journey as a verified
            vendor.
          </p>
        </div>

        <RegistrationForm />
      </ContentSection>
    </>
  )
}
