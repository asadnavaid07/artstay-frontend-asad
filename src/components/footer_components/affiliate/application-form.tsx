"use client"

import type React from "react"

import { useState } from "react"
import { User, Mail, Globe, MessageSquare, Send } from "lucide-react"

export default function ApplicationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    category: "",
    experience: "",
    audience: "",
    motivation: "",
  })

  const categories = [
    "Content Creator",
    "Tour Operator",
    "Eco-conscious Influencer",
    "Ethical Fashion Blogger",
    "Cultural Organization",
    "Other",
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-gradient-to-br from-[#005380] to-[#0085CC] rounded-2xl flex items-center justify-center mx-auto mb-4">
          <User className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Affiliate Application</h3>
        <p className="text-gray-600">Join our community of cultural ambassadors</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                required
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0085CC] focus:border-transparent transition-all duration-300"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="email"
                required
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0085CC] focus:border-transparent transition-all duration-300"
                placeholder="your@email.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Website/Social Media URL</label>
          <div className="relative">
            <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="url"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0085CC] focus:border-transparent transition-all duration-300"
              placeholder="https://your-website.com"
              value={formData.website}
              onChange={(e) => setFormData({ ...formData, website: e.target.value })}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Category *</label>
          <select
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0085CC] focus:border-transparent transition-all duration-300"
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
          >
            <option value="">Select your category</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Tell us about your audience and experience
          </label>
          <div className="relative">
            <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <textarea
              rows={4}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0085CC] focus:border-transparent transition-all duration-300 resize-none"
              placeholder="Describe your audience, content style, and why you're interested in promoting Kashmiri culture..."
              value={formData.motivation}
              onChange={(e) => setFormData({ ...formData, motivation: e.target.value })}
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-[#005380] to-[#0085CC] text-white font-semibold rounded-xl hover:scale-105 transition-all duration-300 shadow-lg"
        >
          <Send className="w-5 h-5" />
          Submit Application
        </button>
      </form>

      <div className="mt-6 p-4 bg-gradient-to-r from-[#005380]/5 to-[#0085CC]/10 rounded-xl border border-[#0085CC]/20">
        <p className="text-sm text-gray-600 text-center">
          <strong>Review Time:</strong> 24-48 hours • <strong>Approval Rate:</strong> 95% • <strong>No Fees:</strong>{" "}
          100% Free
        </p>
      </div>
    </div>
  )
}
