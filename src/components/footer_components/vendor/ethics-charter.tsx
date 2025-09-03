"use client"

import { Shield, Users, Leaf, Heart, Award, CheckCircle } from "lucide-react"

const ethicsPoints = [
  {
    title: "No Child Labor",
    description: "We maintain strict zero-tolerance policy against child labor in all forms of craft production",
    icon: <Shield className="w-6 h-6" />,
    commitment: "100% verified adult workforce",
  },
  {
    title: "Authentic Material Sourcing",
    description: "All materials must be ethically sourced with proper documentation and origin verification",
    icon: <Award className="w-6 h-6" />,
    commitment: "Traceable supply chain",
  },
  {
    title: "Gender-Inclusive Workspaces", 
    description: "Equal opportunities and safe working environments for all genders in craft production",
    icon: <Users className="w-6 h-6" />,
    commitment: "50% women participation goal",
  },
  {
    title: "Environmental Safety",
    description: "Environmentally safe production techniques that preserve Kashmir's natural heritage",
    icon: <Leaf className="w-6 h-6" />,
    commitment: "Carbon-neutral operations",
  },
]

const supportServices = [
  {
    title: "Sustainability Training Modules",
    description: "Comprehensive training programs on sustainable craft production methods",
    features: ["Online learning platform", "Expert-led workshops", "Certification programs", "Best practices guide"],
  },
  {
    title: "Annual Impact Reporting Tools",
    description: "Tools to measure and report your environmental and social impact",
    features: [
      "Impact measurement dashboard",
      "Sustainability scorecards", 
      "Progress tracking",
      "Compliance reporting",
    ],
  },
  {
    title: "Artisan Mental Health Workshops",
    description: "Support programs focused on artisan wellbeing and mental health",
    features: [
      "Stress management sessions",
      "Work-life balance guidance",
      "Peer support groups",
      "Professional counseling",
    ],
  },
]

export default function EthicsCharter() {
  return (
    <div className="space-y-12">
      {/* Ethics Expectations */}
      <div>
        <h3 className="text-2xl font-bold text-[#005380] mb-8 text-center">Our Ethical Expectations</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ethicsPoints.map((point) => (
            <div
              key={point.title}
              className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-gradient-to-br from-[#005380] to-[#0085CC] rounded-xl text-white flex-shrink-0">
                  {point.icon}
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">{point.title}</h4>
                  <p className="text-gray-600 leading-relaxed mb-3">{point.description}</p>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm font-medium text-green-700">{point.commitment}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Artisan Ethics Charter Quote */}
      <div className="bg-gradient-to-br from-[#005380]/10 to-[#0085CC]/15 rounded-2xl p-8 text-center">
        <div className="max-w-3xl mx-auto">
          <Heart className="w-12 h-12 text-[#005380] mx-auto mb-6" />
          <blockquote className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 leading-relaxed italic">
            &quot;Our crafts are sacred. Selling them should be too.&quot;
          </blockquote>
          <cite className="text-lg text-[#0085CC] font-medium">— Artisan Ethics Charter</cite>
        </div>
      </div>

      {/* Support Services */}
      <div>
        <h3 className="text-2xl font-bold text-[#005380] mb-8 text-center">Support We Offer</h3>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {supportServices.map((service) => (
            <div
              key={service.title}
              className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
            >
              <h4 className="text-lg font-semibold text-gray-800 mb-3">{service.title}</h4>
              <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>

              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-[#0085CC] flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Compliance Commitment */}
      <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
        <div className="text-center mb-6">
          <Shield className="w-16 h-16 text-[#005380] mx-auto mb-4" />
          <h3 className="text-xl font-bold text-[#005380] mb-2">Compliance & Monitoring</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="p-4">
            <div className="text-2xl font-bold text-[#005380] mb-2">100%</div>
            <div className="text-sm text-gray-600">Vendor Verification Rate</div>
          </div>
          <div className="p-4">
            <div className="text-2xl font-bold text-[#005380] mb-2">24/7</div>
            <div className="text-sm text-gray-600">Ethics Monitoring</div>
          </div>
          <div className="p-4">
            <div className="text-2xl font-bold text-[#005380] mb-2">Zero</div>
            <div className="text-sm text-gray-600">Tolerance Policy</div>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-gray-600 mb-4 italic">
            Regular audits and compliance checks ensure all vendors meet our ethical standards
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#005380] to-[#0085CC] text-white rounded-lg hover:shadow-lg transition-all duration-300"
          >
            <span>Report Ethics Concern</span>
            <Shield className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  )
}
