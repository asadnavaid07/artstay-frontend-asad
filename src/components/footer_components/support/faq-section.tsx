"use client"

import { useState } from "react"
import { ChevronDown, Search } from "lucide-react"

interface FAQ {
  question: string
  answer: string
  category: string
}

interface FAQSectionProps {
  faqs: FAQ[]
  showSearch?: boolean
  showCategories?: boolean
}

export default function FAQSection({ faqs, showSearch = true, showCategories = true }: FAQSectionProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const categories = ["All", ...Array.from(new Set(faqs.map((faq) => faq.category)))]

  const filteredFAQs = faqs.filter((faq) => {
    const matchesSearch =
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "All" || faq.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="space-y-8">
      {/* Search and Filter */}
      {(showSearch || showCategories) && (
        <div className="flex flex-col md:flex-row gap-4">
          {showSearch && (
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search FAQs..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0085CC] focus:border-transparent transition-all duration-300"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          )}

          {showCategories && (
            <select
              className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0085CC] focus:border-transparent transition-all duration-300"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          )}
        </div>
      )}

      {/* FAQ List */}
      <div className="space-y-4">
        {filteredFAQs.map((faq, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            <button
              className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-300"
              onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
            >
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-1">{faq.question}</h3>
                <span className="text-sm text-[#0085CC] font-medium">{faq.category}</span>
              </div>
              <ChevronDown
                className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                  openFAQ === index ? "rotate-180" : ""
                }`}
              />
            </button>

            {openFAQ === index && (
              <div className="px-6 pb-4 border-t border-gray-100">
                <p className="text-gray-600 leading-relaxed pt-4">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {filteredFAQs.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No FAQs found matching your search.</p>
        </div>
      )}
    </div>
  )
}
