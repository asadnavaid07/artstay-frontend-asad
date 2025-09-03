"use client"

import type React from "react"

import { useState } from "react"
import { Send, User, Mail, MessageSquare, AlertTriangle } from "lucide-react"

interface ContactFormProps {
  title: string
  description: string
  formType: "support" | "report" | "accessibility"
  showAnonymous?: boolean
}

export default function ContactForm({ title, description, formType, showAnonymous = false }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    category: "",
    anonymous: false,
    orderId: "",
    urgency: "medium",
  })

  const categories = {
    support: ["Order Issue", "Tour Booking", "Account Help", "Technical Problem", "Other"],
    report: [
      "Counterfeit Product",
      "Misleading Information",
      "Vendor Misconduct",
      "Privacy Violation",
      "Discrimination",
    ],
    accessibility: [
      "Navigation Issue",
      "Screen Reader Problem",
      "Keyboard Access",
      "Visual Contrast",
      "Language Support",
    ],
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission
  }

  return (
    <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-gradient-to-br from-[#005380] to-[#0085CC] rounded-2xl flex items-center justify-center mx-auto mb-4">
          {formType === "report" ? (
            <AlertTriangle className="w-8 h-8 text-white" />
          ) : (
            <MessageSquare className="w-8 h-8 text-white" />
          )}
        </div>
        <h3 className="text-2xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Anonymous Option */}
        {showAnonymous && (
          <div className="flex items-center gap-3 p-4 bg-amber-50 rounded-xl border border-amber-200">
            <input
              type="checkbox"
              id="anonymous"
              className="w-4 h-4 text-[#0085CC] border-gray-300 rounded focus:ring-[#0085CC]"
              checked={formData.anonymous}
              onChange={(e) => setFormData({ ...formData, anonymous: e.target.checked })}
            />
            <label htmlFor="anonymous" className="text-sm text-amber-800 font-medium">
              Submit anonymously (your identity will be protected)
            </label>
          </div>
        )}

        {/* Name and Email */}
        {!formData.anonymous && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  required={!formData.anonymous}
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
                  required={!formData.anonymous}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0085CC] focus:border-transparent transition-all duration-300"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>
          </div>
        )}

        {/* Category and Order ID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Category *</label>
            <select
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0085CC] focus:border-transparent transition-all duration-300"
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            >
              <option value="">Select category</option>
              {categories[formType].map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          {formType === "support" && (
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Order ID (if applicable)</label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0085CC] focus:border-transparent transition-all duration-300"
                placeholder="e.g., AS-2025-001234"
                value={formData.orderId}
                onChange={(e) => setFormData({ ...formData, orderId: e.target.value })}
              />
            </div>
          )}
        </div>

        {/* Subject */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Subject *</label>
          <input
            type="text"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0085CC] focus:border-transparent transition-all duration-300"
            placeholder="Brief description of your issue"
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          />
        </div>

        {/* Urgency for reports */}
        {formType === "report" && (
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Urgency Level</label>
            <div className="grid grid-cols-3 gap-3">
              {["low", "medium", "high"].map((level) => (
                <label
                  key={level}
                  className="flex items-center gap-2 p-3 border border-gray-300 rounded-xl cursor-pointer hover:bg-gray-50 transition-colors"
                >
                  <input
                    type="radio"
                    name="urgency"
                    value={level}
                    checked={formData.urgency === level}
                    onChange={(e) => setFormData({ ...formData, urgency: e.target.value })}
                    className="text-[#0085CC] focus:ring-[#0085CC]"
                  />
                  <span className="text-sm font-medium capitalize">{level}</span>
                </label>
              ))}
            </div>
          </div>
        )}

        <button
          type="submit"
          className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-[#005380] to-[#0085CC] text-white font-semibold rounded-xl hover:scale-105 transition-all duration-300 shadow-lg"
        >
          <Send className="w-5 h-5" />
          {formType === "report" ? "Submit Report" : "Send Message"}
        </button>
      </form>

      <div className="mt-6 p-4 bg-gradient-to-r from-[#005380]/5 to-[#0085CC]/10 rounded-xl border border-[#0085CC]/20">
        <p className="text-sm text-gray-600 text-center">
          <strong>Response Time:</strong> {formType === "report" ? "72 hours" : "24-48 hours"} •
          <strong> Confidentiality:</strong> Ensure Privacy
        </p>
      </div>
    </div>
  )
}