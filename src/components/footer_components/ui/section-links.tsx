"use client"

import Link from "next/link"
import { ArrowRight, ExternalLink } from "lucide-react"

interface SectionLink {
  title: string
  description: string
  href: string
  external?: boolean
}

interface SectionLinksProps {
  links: SectionLink[]
  title?: string
}

export default function SectionLinks({ links, title }: SectionLinksProps) {
  return (
    <div className="space-y-6">
      {title && <h3 className="text-2xl font-bold text-gray-800 mb-8">{title}</h3>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {links.map((link, index) => (
          <Link
            key={link.title}
            href={link.href}
            className="group p-6 bg-gradient-to-br from-[#005380]/5 to-[#0085CC]/10 border border-[#0085CC]/20 rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-start justify-between mb-4">
              <h4 className="text-lg font-semibold text-[#0085CC] group-hover:text-[#005380] transition-colors">
                {link.title}
              </h4>
              {link.external ? (
                <ExternalLink className="w-5 h-5 text-[#0085CC] opacity-0 group-hover:opacity-100 transition-opacity" />
              ) : (
                <ArrowRight className="w-5 h-5 text-[#0085CC] opacity-0 group-hover:opacity-100 transition-opacity" />
              )}
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">{link.description}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
