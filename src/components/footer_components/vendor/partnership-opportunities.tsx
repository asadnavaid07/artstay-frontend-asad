"use client"

import { Star, Globe, Handshake, TrendingUp, Award, Users, Calendar, Phone } from "lucide-react"

const opportunities = [
  {
    title: "Featured Vendor Promotion",
    description: "Get highlighted on our homepage and featured in international exhibitions",
    icon: <Star className="w-6 h-6" />,
    benefits: ["Homepage banner placement", "Social media promotion", "Newsletter features", "Exhibition priority"],
    eligibility: "Active vendors with 4.5+ rating",
  },
  {
    title: "International Boutique Partnerships",
    description: "Joint venture models with premium international boutiques and galleries",
    icon: <Globe className="w-6 h-6" />,
    benefits: ["Global market access", "Premium pricing opportunities", "Brand collaboration", "Export support"],
    eligibility: "GI certified products required",
  },
  {
    title: "B2B Trade Fair Access",
    description: "Connect with bulk buyers and participate in major trade exhibitions",
    icon: <Handshake className="w-6 h-6" />,
    benefits: ["Bulk order opportunities", "Networking events", "Trade fair booths", "Business matchmaking"],
    eligibility: "Minimum production capacity required",
  },
]

const eligibilityRequirements = [
  {
    requirement: "Minimum 10 Completed Sales",
    description: "Proven track record of successful transactions",
    icon: <TrendingUp className="w-5 h-5" />,
  },
  {
    requirement: "GI Certification",
    description: "Valid Geographical Indication certificate or in-process validation",
    icon: <Award className="w-5 h-5" />,
  },
  {
    requirement: "Quality Standards",
    description: "Maintain 4.0+ average rating from buyers",
    icon: <Star className="w-5 h-5" />,
  },
  {
    requirement: "Ethical Compliance",
    description: "Full adherence to ArtStay's sustainability and ethics charter",
    icon: <Users className="w-5 h-5" />,
  },
]

export default function PartnershipOpportunities() {
  return (
    <div className="space-y-12">
      {/* Partnership Opportunities */}
      <div>
        <h3 className="text-2xl font-bold text-[#005380] mb-8 text-center">Growth Opportunities</h3>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {opportunities.map((opportunity) => (
            <div
              key={opportunity.title}
              className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-gradient-to-br from-[#005380] to-[#0085CC] rounded-xl text-white">
                  {opportunity.icon}
                </div>
                <h4 className="text-lg font-semibold text-gray-800">{opportunity.title}</h4>
              </div>

              <p className="text-gray-600 mb-4 leading-relaxed">{opportunity.description}</p>

              <div className="mb-4">
                <h5 className="font-medium text-gray-800 mb-2">Benefits:</h5>
                <ul className="space-y-1">
                  {opportunity.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-[#0085CC] rounded-full"></div>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <p className="text-xs text-gray-500">
                  <strong>Eligibility:</strong> {opportunity.eligibility}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Eligibility Requirements */}
      <div className="bg-gradient-to-br from-[#005380]/5 to-[#0085CC]/10 rounded-2xl p-8">
        <h3 className="text-2xl font-bold text-[#005380] mb-8 text-center">Partnership Eligibility</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {eligibilityRequirements.map((req) => (
            <div
              key={req.requirement}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-2 bg-[#005380]/10 rounded-lg flex-shrink-0">{req.icon}</div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">{req.requirement}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{req.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Success Stories */}
      <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
        <h3 className="text-2xl font-bold text-[#005380] mb-8 text-center">Partnership Success Stories</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <div className="text-3xl font-bold text-[#005380] mb-2">150+</div>
            <div className="text-sm text-gray-600 mb-2">Featured Vendors</div>
            <p className="text-xs text-gray-500">Promoted globally in 2023</p>
          </div>
          <div className="p-6">
            <div className="text-3xl font-bold text-[#005380] mb-2">25</div>
            <div className="text-sm text-gray-600 mb-2">International Partners</div>
            <p className="text-xs text-gray-500">Boutiques across 15 countries</p>
          </div>
          <div className="p-6">
            <div className="text-3xl font-bold text-[#005380] mb-2">₹2.5Cr</div>
            <div className="text-sm text-gray-600 mb-2">Partnership Revenue</div>
            <p className="text-xs text-gray-500">Generated for vendors in 2023</p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center bg-gradient-to-r from-[#005380] to-[#0085CC] p-8 rounded-xl text-white">
        <Calendar className="w-16 h-16 mx-auto mb-6 opacity-90" />
        <h3 className="text-2xl font-bold mb-4 text-white">Ready to Scale with ArtStay?</h3>
        <p className="text-lg mb-6 opacity-90 italic">
          Join our partnership program and take your craft business to the next level
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white text-[#005380] rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold"
          >
            <span>Request Growth Call</span>
            <Phone className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 border border-white text-white rounded-lg hover:bg-white/10 transition-all duration-300"
          >
            <span>View Guidelines</span>
          </a>
        </div>
      </div>
    </div>
  )
}
