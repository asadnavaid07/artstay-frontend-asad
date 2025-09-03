import HeroSection from "~/components/footer_components/ui/hero-section"
import ContentSection from "~/components/footer_components/ui/content-section"
import Card from "~/components/footer_components/ui/card"
import { Handshake, MapPin, Palette, Globe, CheckCircle, ArrowRight } from "lucide-react"

export default function PartnersPage() {
  const partnerCategories = [
    {
      icon: MapPin,
      title: "Tourism Alliances",
      description: "Boutique hotels, local guides, transport cooperatives",
      partners: [
        "Heritage Boutique Hotels",
        "Certified Local Guides",
        "Eco-Transport Cooperatives",
        "Cultural Experience Centers",
      ],
    },
    {
      icon: Palette,
      title: "Craft Collaborators",
      description: "Artisan guilds, GI bodies, and design mentors",
      partners: [
        "Kashmir Artisan Guilds",
        "GI Certification Bodies",
        "International Design Mentors",
        "Craft Preservation Societies",
      ],
    },
    {
      icon: Globe,
      title: "Global Supporters",
      description: "Ethical fashion labels, fair-trade platforms, NGOs",
      partners: [
        "Ethical Fashion Brands",
        "Fair-Trade Platforms",
        "Cultural NGOs",
        "Sustainable Tourism Organizations",
      ],
    },
  ]

  const benefits = [
    {
      title: "Access to Verified Artisan Clusters",
      description: "Connect directly with authenticated artisan communities and their traditional crafts",
    },
    {
      title: "Sustainable Branding Recognition",
      description: "Enhance your brand's commitment to sustainability and cultural preservation",
    },
    {
      title: "International Participation",
      description: "Showcase your products and services at prestigious international craft exhibitions",
    },
  ]

  return (
    <>
      <HeroSection
        title="Together, We Rise"
        subtitle="Partnership Network"
        description="Join a global network of organizations committed to preserving cultural heritage, empowering artisans, and creating sustainable tourism experiences that benefit communities worldwide."
        ctaText="Become a Partner"
        ctaLink="#partnership-form"
         backgroundImage="/images/kashmir.jpg"
      />

      <ContentSection background="white">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#005380] mb-6">Partner Categories</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto italic">
            We collaborate with diverse organizations across the tourism, craft, and cultural preservation sectors
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {partnerCategories.map((category) => (
            <Card key={category.title} hover gradient className="h-full">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#005380] to-[#0085CC] rounded-full flex items-center justify-center mx-auto mb-4">
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#005380] text-center mb-4">{category.title}</h3>
              </div>

              <p className="text-gray-600 leading-relaxed mb-6 text-center">{category.description}</p>

              <div className="space-y-3">
                {category.partners.map((partner, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 bg-white bg-opacity-50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-[#0085CC] flex-shrink-0" />
                    <span className="text-gray-700 font-medium text-sm">{partner}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </ContentSection>

      <ContentSection background="gradient">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#005380] mb-6">Why Partner with ArtStay?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto italic">
            Discover the unique advantages of joining our mission-driven partnership network
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {benefits.map((benefit) => (
            <Card key={benefit.title} hover className="text-center h-full">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#005380] to-[#0085CC] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Handshake className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-[#0085CC] mb-4">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </Card>
          ))}
        </div>
      </ContentSection>

      <ContentSection background="white" id="partnership-form">
        <div className="max-w-4xl mx-auto">
          <Card gradient className="text-center">
            <Handshake className="w-16 h-16 text-[#0085CC] mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-[#005380] mb-6">Ready to Partner with Us?</h2>
            <p className="text-lg text-gray-600 mb-8 italic">
              Showcase your alignment with tradition and transformation. Join organizations worldwide in preserving
              cultural heritage while building sustainable businesses.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="p-6 bg-white bg-opacity-50 rounded-lg text-left">
                <h4 className="font-semibold text-[#0085CC] mb-3">Partnership Benefits</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#0085CC]" />
                    Global network access
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#0085CC]" />
                    Brand recognition
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#0085CC]" />
                    Cultural impact
                  </li>
                </ul>
              </div>

              <div className="p-6 bg-white bg-opacity-50 rounded-lg text-left">
                <h4 className="font-semibold text-[#0085CC] mb-3">Partnership Types</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#0085CC]" />
                    Strategic alliances
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#0085CC]" />
                    Vendor partnerships
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#0085CC]" />
                    Cultural collaborations
                  </li>
                </ul>
              </div>
            </div>

            <a
              href="#"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#005380] to-[#0085CC] text-white font-semibold rounded-xl hover:scale-105 transition-all duration-300 shadow-lg"
            >
              <span>Become a Partner</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </Card>
        </div>
      </ContentSection>
    </>
  )
}
