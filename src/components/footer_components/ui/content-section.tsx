"use client"

import type { ReactNode } from "react"

interface ContentSectionProps {
  children: ReactNode
  className?: string
  background?: "white" | "gray" | "gradient"
  padding?: "sm" | "md" | "lg"
  id?: string
}

export default function ContentSection({
  children,
  className = "",
  background = "white",
  padding = "lg",
  id,
}: ContentSectionProps) {
  const backgroundClasses = {
    white: "bg-white shadow-sm",
    gray: "bg-gray-50",
    gradient: "bg-gradient-to-br from-[#005380]/3 via-[#0085CC]/5 to-[#005380]/3 relative overflow-hidden",
  }

  const paddingClasses = {
    sm: "py-16",
    md: "py-20",
    lg: "py-24",
  }

  return (
    <section id={id} className={`${backgroundClasses[background]} ${paddingClasses[padding]} ${className} relative`}>
      {background === "gradient" && (
        <>
          {/* Subtle pattern overlay for gradient sections */}
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `radial-gradient(circle at 50% 50%, #0085CC 1px, transparent 1px)`,
              backgroundSize: "30px 30px",
            }}
          ></div>

          {/* Subtle animated elements */}
          <div className="absolute top-10 right-10 w-32 h-32 bg-[#0085CC]/5 rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 left-10 w-24 h-24 bg-[#005380]/5 rounded-full blur-xl"></div>
        </>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">{children}</div>
    </section>
  )
}
