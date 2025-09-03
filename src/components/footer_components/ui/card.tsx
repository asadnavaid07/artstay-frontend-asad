"use client"

import type { ReactNode } from "react"

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  gradient?: boolean
}

export default function Card({ children, className = "", hover = true, gradient = false }: CardProps) {
  return (
    <div
      className={`
      ${
        gradient
          ? "bg-gradient-to-br from-[#005380]/10 to-[#0085CC]/10 border-[#0085CC]/20"
          : "bg-white border-gray-200"
      }
      border rounded-xl p-6 shadow-lg backdrop-blur-sm
      ${hover ? "hover:shadow-2xl hover:scale-105 transition-all duration-300" : ""}
      ${className}
    `}
    >
      {children}
    </div>
  )
}
