"use client"

import type React from "react"

import Header from "~/components/footer_components/header/header"
import Footer from "~/components/footer/footer"


interface PageLayoutProps {
  children: React.ReactNode
  className?: string
}

export default function PageLayout({ children, className = "" }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <Header />
      <main className={`pt-16 ${className}`}>{children}</main>
      <Footer />
    </div>
  )
}
