"use client"

import Link from "next/link"
import { ChevronDown, ExternalLink } from "lucide-react"
import type { NavigationItem } from "~/components/footer_components/header/navigation-data"

interface DropdownMenuProps {
  item: NavigationItem
  isOpen: boolean
  onToggle: () => void
}

export default function DropdownMenu({ item, isOpen, onToggle }: DropdownMenuProps) {
  return (
    <div className="relative group">
      <button
        onClick={onToggle}
        className="flex items-center gap-2 px-4 py-2 text-white font-semibold hover:text-gray-200 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 rounded-lg"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span>{item.title}</span>
        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {/* Dropdown Content */}
      <div
        className={`absolute top-full left-0 mt-2 w-80 bg-gradient-to-br from-[#005380] to-[#0085CC] rounded-xl shadow-2xl border border-white border-opacity-20 backdrop-blur-lg transition-all duration-300 z-50 ${
          isOpen ? "opacity-100 visible transform translate-y-0" : "opacity-0 invisible transform -translate-y-2"
        }`}
      >
        <div className="p-6">
          {/* Header */}
          <div className="mb-4 pb-4 border-b border-white border-opacity-20">
            <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
            <p className="text-sm text-gray-200 leading-relaxed">{item.description}</p>
          </div>

          {/* Links */}
          <div className="space-y-2">
            {item.links.map((link, index) => (
              <Link
                key={link.name}
                href={link.href}
                className="flex items-center justify-between p-3 rounded-lg bg-white bg-opacity-10 hover:bg-opacity-20 transition-all duration-300 group/link"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="text-white font-medium group-hover/link:text-gray-100">{link.name}</span>
                <ExternalLink className="w-4 h-4 text-white opacity-0 group-hover/link:opacity-100 transition-opacity duration-300" />
              </Link>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-4 pt-4 border-t border-white border-opacity-20">
            <Link
              href={`/${item.title.toLowerCase().replace(/\s+/g, "-")}`}
              className="inline-flex items-center gap-2 text-sm text-gray-200 hover:text-white transition-colors duration-300"
            >
              <span>View all {item.title.toLowerCase()}</span>
              <ExternalLink className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
