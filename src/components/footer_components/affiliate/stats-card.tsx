"use client"

import { TrendingUp, DollarSign, Users, Target } from "lucide-react"

interface StatsCardProps {
  title: string
  value: string
  change?: string
  icon: "trending" | "dollar" | "users" | "target"
  trend?: "up" | "down" | "neutral"
}

export default function StatsCard({ title, value, change, icon, trend = "neutral" }: StatsCardProps) {
  const icons = {
    trending: TrendingUp,
    dollar: DollarSign,
    users: Users,
    target: Target,
  }

  const IconComponent = icons[icon]

  const trendColors = {
    up: "text-green-600",
    down: "text-red-600",
    neutral: "text-gray-600",
  }

  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-105">
      <div className="flex items-center justify-between mb-4">
        <div className="w-12 h-12 bg-gradient-to-br from-[#005380] to-[#0085CC] rounded-xl flex items-center justify-center">
          <IconComponent className="w-6 h-6 text-white" />
        </div>
        {change && (
          <span className={`text-sm font-semibold ${trendColors[trend]}`}>
            {trend === "up" ? "+" : trend === "down" ? "-" : ""}
            {change}
          </span>
        )}
      </div>
      <div className="space-y-1">
        <p className="text-2xl font-bold text-gray-800">{value}</p>
        <p className="text-sm text-gray-600">{title}</p>
      </div>
    </div>
  )
}
