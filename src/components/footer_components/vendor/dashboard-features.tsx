"use client"

import { Package, BarChart3, CreditCard, Leaf, Star, MapPin, TrendingUp, Shield, Users, Calendar } from "lucide-react"

const dashboardFeatures = [
  {
    title: "Product Management",
    description: "Upload and manage your craft inventory with detailed descriptions, GI tags, and origin stories",
    icon: <Package className="w-6 h-6" />,
    features: ["Image gallery management", "GI tag verification", "Origin story documentation", "Inventory tracking"],
  },
  {
    title: "Analytics & Insights",
    description: "Real-time analytics to track your performance and understand market trends",
    icon: <BarChart3 className="w-6 h-6" />,
    features: ["Sales performance", "Buyer demographics", "Seasonal demand trends", "Revenue tracking"],
  },
  {
    title: "Payment Management",
    description: "Track order history, buyer feedback, and payment disbursements in one place",
    icon: <CreditCard className="w-6 h-6" />,
    features: ["Payment history", "Disbursement tracking", "Invoice generation", "Tax reporting"],
  },
  {
    title: "Sustainability Scoring",
    description: "Monitor your environmental impact and sustainability practices",
    icon: <Leaf className="w-6 h-6" />,
    features: ["Carbon footprint tracking", "Sustainability metrics", "Impact reporting", "Green certification"],
  },
  {
    title: "CraftLore Appraisals",
    description: "Request professional appraisals for your authentic Kashmiri crafts",
    icon: <Star className="w-6 h-6" />,
    features: ["Expert evaluations", "Authenticity verification", "Market value assessment", "Quality certification"],
  },
  {
    title: "Tour Participation",
    description: "Set preferences for studio visits and cultural tourism experiences",
    icon: <MapPin className="w-6 h-6" />,
    features: ["Studio visit scheduling", "Tour availability", "Cultural experience setup", "Visitor management"],
  },
]

const growthTools = [
  {
    title: "Market Trends",
    description: "Stay ahead with seasonal demand insights and market analysis",
    icon: <TrendingUp className="w-6 h-6" />,
  },
  {
    title: "GI Verification",
    description: "Get alerts and support for Geographical Indication certification",
    icon: <Shield className="w-6 h-6" />,
  },
  {
    title: "Buyer Network",
    description: "Connect with verified buyers and expand your customer base",
    icon: <Users className="w-6 h-6" />,
  },
  {
    title: "Event Calendar",
    description: "Track exhibitions, fairs, and promotional opportunities",
    icon: <Calendar className="w-6 h-6" />,
  },
]

export default function DashboardFeatures() {
  return (
    <div className="space-y-12">
      {/* Main Features */}
      <div>
        <h3 className="text-2xl font-bold text-[#005380] mb-8 text-center">Complete Dashboard Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dashboardFeatures.map((feature, index) => (
            <div
              key={feature.title}
              className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-gradient-to-br from-[#005380] to-[#0085CC] rounded-xl text-white">
                  {feature.icon}
                </div>
                <h4 className="text-lg font-semibold text-gray-800">{feature.title}</h4>
              </div>

              <p className="text-gray-600 mb-4 leading-relaxed">{feature.description}</p>

              <ul className="space-y-2">
                {feature.features.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                    <div className="w-1.5 h-1.5 bg-[#0085CC] rounded-full"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Growth Tools */}
      <div className="bg-gradient-to-br from-[#005380]/5 to-[#0085CC]/10 rounded-2xl p-8">
        <h3 className="text-2xl font-bold text-[#005380] mb-8 text-center">Tools for Growth</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {growthTools.map((tool, _index) => (
            <div
              key={tool.title}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-[#005380] to-[#0085CC] rounded-xl text-white mb-4">
                {tool.icon}
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">{tool.title}</h4>
              <p className="text-sm text-gray-600 leading-relaxed">{tool.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center bg-white p-8 rounded-xl shadow-lg border border-gray-200">
        <h3 className="text-xl font-bold text-[#005380] mb-4">Ready to Access Your Dashboard?</h3>
        <p className="text-gray-600 mb-6 italic">
          Log in to your vendor portal and start managing your craft business with powerful tools designed for artisans.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/footer_pages/vendor-login"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#005380] to-[#0085CC] text-white rounded-lg hover:shadow-lg transition-all duration-300"
          >
            <span>Access Dashboard</span>
            <Package className="w-5 h-5" />
          </a>
          <a
            href="/footer_pages/register-business"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-[#0085CC] text-[#0085CC] rounded-lg hover:bg-[#0085CC]/5 transition-all duration-300"
          >
            <span>Register First</span>
          </a>
        </div>
      </div>
    </div>
  )
}
