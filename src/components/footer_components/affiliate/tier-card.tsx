"use client"

import { Crown, Star, Award } from "lucide-react"

interface TierCardProps {
  tier: number
  title: string
  commission: string
  range: string
  features: string[]
  isPopular?: boolean
}

export default function TierCard({ tier, title, commission, range, features, isPopular = false }: TierCardProps) {
  const tierIcons = {
    1: Star,
    2: Award,
    3: Crown,
  }

  const TierIcon = tierIcons[tier as keyof typeof tierIcons] || Star

  return (
    <div
      className={`relative bg-white rounded-2xl p-8 shadow-lg border-2 transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
        isPopular ? "border-[#0085CC] ring-4 ring-[#0085CC]/20" : "border-gray-200 hover:border-[#0085CC]/50"
      }`}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <div className="bg-gradient-to-r from-[#005380] to-[#0085CC] text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
            Most Popular
          </div>
        </div>
      )}

      <div className="text-center mb-6">
        <div className="w-16 h-16 bg-gradient-to-br from-[#005380] to-[#0085CC] rounded-2xl flex items-center justify-center mx-auto mb-4">
          <TierIcon className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-gray-800 mb-2">{title}</h3>
        <div className="text-4xl font-bold text-[#005380] mb-2">{commission}</div>
        <p className="text-gray-600">{range}</p>
      </div>

      <div className="space-y-3">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center gap-3">
            <div className="w-5 h-5 bg-[#0085CC] rounded-full flex items-center justify-center flex-shrink-0">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            <span className="text-gray-700">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
