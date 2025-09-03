"use client"

import type React from "react"

import { ArrowRight, CheckCircle, Clock } from "lucide-react"
import Link from "next/link"

interface VendorCardProps {
  title: string
  description: string
  icon: React.ReactNode
  href?: string
  features?: string[]
  status?: "active" | "pending" | "completed"
  className?: string
}

export default function VendorCard({
  title,
  description,
  icon,
  href,
  features,
  status,
  className = "",
}: VendorCardProps) {
  const statusColors = {
    active: "border-green-200 bg-green-50",
    pending: "border-yellow-200 bg-yellow-50",
    completed: "border-blue-200 bg-blue-50",
  }

  const statusIcons = {
    active: <CheckCircle className="w-4 h-4 text-green-600" />,
    pending: <Clock className="w-4 h-4 text-yellow-600" />,
    completed: <CheckCircle className="w-4 h-4 text-blue-600" />,
  }

  const CardContent = () => (
    <div
      className={`
      group relative p-6 bg-white border border-gray-200 rounded-xl shadow-lg 
      hover:shadow-2xl hover:scale-105 transition-all duration-300
      ${status ? statusColors[status] : "hover:border-[#0085CC]/30"}
      ${className}
    `}
    >
      {/* Status indicator */}
      {status && <div className="absolute top-4 right-4 flex items-center gap-2">{statusIcons[status]}</div>}

      {/* Icon */}
      <div className="mb-4 flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#005380] to-[#0085CC] rounded-2xl shadow-lg">
        <div className="text-white">{icon}</div>
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-[#005380] transition-colors">{title}</h3>

      <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>

      {/* Features list */}
      {features && (
        <ul className="space-y-2 mb-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2 text-sm text-gray-700">
              <CheckCircle className="w-4 h-4 text-[#0085CC] flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Arrow indicator for links */}
      {href && (
        <div className="flex items-center justify-between mt-4">
          <span className="text-sm font-medium text-[#005380]">Learn More</span>
          <ArrowRight className="w-5 h-5 text-[#0085CC] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
        </div>
      )}
    </div>
  )

  if (href) {
    return (
      <Link href={href} className="block">
        <CardContent />
      </Link>
    )
  }

  return <CardContent />
}
