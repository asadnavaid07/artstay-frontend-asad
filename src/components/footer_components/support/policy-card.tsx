"use client"

import type { ReactNode } from "react"
import { CheckCircle, AlertCircle, Info } from "lucide-react"

interface PolicyCardProps {
  title: string
  children: ReactNode
  type?: "info" | "warning" | "success"
  className?: string
}

export default function PolicyCard({ title, children, type = "info", className = "" }: PolicyCardProps) {
  const typeStyles = {
    info: "bg-blue-50 border-blue-200 text-blue-800",
    warning: "bg-amber-50 border-amber-200 text-amber-800",
    success: "bg-green-50 border-green-200 text-green-800",
  }

  const icons = {
    info: Info,
    warning: AlertCircle,
    success: CheckCircle,
  }

  const Icon = icons[type]

  return (
    <div className={`rounded-2xl border-2 p-6 ${typeStyles[type]} ${className}`}>
      <div className="flex items-center gap-3 mb-4">
        <Icon className="w-6 h-6" />
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <div className="space-y-4">{children}</div>
    </div>
  )
}
