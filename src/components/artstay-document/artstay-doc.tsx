"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronDown, ChevronUp } from "lucide-react"

export default function Component() {
  const [expandedItems, setExpandedItems] = useState<string[]>([])

  const toggleExpanded = (item: string) => {
    setExpandedItems((prev) => (prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]))
  }

  const keyAspects = [
    {
      id: "tourism-handicraft",
      title: "Tourism-Handicraft Convergence",
      content:
        "Creating meaningful connections between tourism and traditional handicraft sectors through innovative programs and sustainable practices.",
    },
    {
      id: "stakeholder-support",
      title: "Support for Stakeholders",
      content:
        "Providing comprehensive support to local artisans, tourism operators, and community members to ensure sustainable growth and development.",
    },
    {
      id: "synergy-creation",
      title: "Synergy Creation",
      content:
        "Building collaborative frameworks that bring together diverse stakeholders to create mutually beneficial relationships and shared value.",
    },
  ]

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 py-6 sm:py-8 md:py-12 bg-[#C8E8F9] border border-box w-full min-w-0 overflow-x-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10 w-full min-w-0">
        {/* Left Column */}
        <div className="space-y-6 sm:space-y-8">
          {/* ArtStay Title and Description */}
          <div>
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6" style={{ color: 'rgb(0,83,128)' }}>ArtStay</h1>
            <div className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
              <p>
                ArtStay is a Corporate Social Responsibility (CSR) initiative of De Koshur Crafts USA, designed to
                create a meaningful intersection between tourism and the handicraft industry. This innovative program is
                operated by the Handicraft Revival Foundation, Kashmir, which focuses on preserving and promoting the
                rich cultural heritage of Kashmir crafts.
              </p>
            </div>
          </div>

          {/* Main Image */}
          <div>
            <Image
              src="/images/kashmir.jpg"
              alt="Traditional houseboats on Dal Lake with mountains in background"
              width={600}
              height={400}
              className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Operational Framework */}
          <div>
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4" style={{ color: 'rgb(0,50,77)' }}>Operational Framework</h2>
            <div className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
              <p>
                ArtStay is managed by the Handicraft Revival Foundation, which oversees the program&apos;s activities,
                ensuring that it aligns with the broader goals of cultural preservation and economic empowerment for
                artisans.
              </p>
            </div>
          </div>

          {/* Impact Section */}
          <div>
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4"style={{ color: 'rgb(0,50,77)' }}>Impact</h2>
            <div className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
              <p>
                ArtStay aims to not only boost the local economy but also to preserve the cultural heritage of Kashmir
                by keeping traditional crafts alive and relevant in today&apos;s global marketplace. It represents a
                forward-thinking approach to CSR, where business initiatives contribute to the social and cultural
                fabric of the communities they operate in.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6 sm:space-y-8">
          {/* Objectives */}
          <div>
            <h2 className="text-base sm:text-lg md:text-xl font-bold mb-3 sm:mb-4"style={{ color: 'rgb(0,50,77)' }}>OBJECTIVE</h2>
            <div className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
              <p className="mb-3 sm:mb-4">
                The primary goal of ArtStay is to create synergy between the tourism and handicraft sectors in Kashmir,
                fostering a sustainable and mutually beneficial relationship between these two vital industries of
                Kashmir.
              </p>
              <p>
                The primary goal of ArtStay is to create synergy between the tourism and handicraft sectors in Kashmir,
                fostering a sustainable and mutually beneficial relationship between these two vital industries of
                Kashmir.
              </p>
            </div>
          </div>

          {/* Key Aspects */}
          <div>
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4" style={{ color: 'rgb(0,50,77)' }}>Key Aspects of The Project</h2>
            <div className="space-y-2 sm:space-y-3">
              {keyAspects.map((aspect) => (
                <div key={aspect.id} className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleExpanded(aspect.id)}
                    className="w-full bg-[rgb(0,133,204)] hover:bg-[rgb(0,113,184)] text-white px-3 sm:px-4 py-2 sm:py-3 flex items-center justify-between transition-colors text-left"
                  >
                    <span className="font-medium text-xs sm:text-sm md:text-base pr-2">{aspect.title}</span>
                    {expandedItems.includes(aspect.id) ? (
                      <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                    )}
                  </button>
                  {expandedItems.includes(aspect.id) && (
                    <div className="bg-white p-3 sm:p-4 text-xs sm:text-sm md:text-base text-gray-700 border-t border-gray-200">{aspect.content}</div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Second Image */}
          <div>
            <Image
              src="/images/kashmir.jpg"
              alt="Kashmir houseboats at sunset"
              width={400}
              height={300}
              className="w-full h-48 sm:h-56 md:h-64 lg:h-[300px] object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
