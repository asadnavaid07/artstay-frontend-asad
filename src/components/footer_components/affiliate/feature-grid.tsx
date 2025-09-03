"use client"

import {
  Link,
  ImageIcon,
  FileText,
  Users,
  DollarSign,
  Zap,
  BarChart3,
  Smartphone,
  Shield,
  Eye,
  TrendingUp,
  Video,
  BookOpen,
  MessageCircle,
  Mail,
  Headphones,
  Share2,
  Gift,
  Lightbulb,
} from "lucide-react"

interface Feature {
  icon: string
  title: string
  description: string
}

interface FeatureGridProps {
  features: Feature[]
  columns?: 2 | 3 | 4
}

const iconMap = {
  Link,
  ImageIcon,
  FileText,
  Users,
  DollarSign,
  Zap,
  BarChart3,
  Smartphone,
  Shield,
  Eye,
  TrendingUp,
  Video,
  BookOpen,
  MessageCircle,
  Mail,
  Headphones,
  Share2,
  Gift,
  Lightbulb,
}

export default function FeatureGrid({ features, columns = 3 }: FeatureGridProps) {
  const gridCols = {
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
  }

  return (
    <div className={`grid ${gridCols[columns]} gap-8`}>
      {features.map((feature, index) => {
        const IconComponent = iconMap[feature.icon as keyof typeof iconMap]

        return (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-105 group"
          >
            <div className="w-14 h-14 bg-gradient-to-br from-[#005380] to-[#0085CC] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              {IconComponent && <IconComponent className="w-7 h-7 text-white" />}
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
            <p className="text-gray-600 leading-relaxed">{feature.description}</p>
          </div>
        )
      })}
    </div>
  )
}
