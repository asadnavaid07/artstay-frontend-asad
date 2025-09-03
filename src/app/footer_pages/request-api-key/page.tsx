"use client"

import type React from "react"

import { useState } from "react"
import HeroSection  from "~/components/footer_components/ui/hero-section"
import ContentSection  from "~/components/footer_components/ui/content-section"
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card"
import { Button } from "~/components/ui/button"
import { Badge } from "~/components/ui/badge"
import { Key, Shield, Clock, CheckCircle, AlertCircle, Globe } from "lucide-react"

const accessLevels = [
  {
    level: "Public Access",
    description: "Access to craft catalog and tour listings",
    features: [
      "Product catalog browsing",
      "Tour availability checking",
      "Basic vendor information",
      "Public reviews and ratings",
    ],
    rateLimit: "1,000 requests/hour",
    approval: "Instant",
    price: "Free",
    badge: "Most Popular",
  },
  {
    level: "Authenticated Access",
    description: "Full vendor and affiliate module access",
    features: [
      "Vendor registration and management",
      "Affiliate tracking and commissions",
      "Order processing and payments",
      "Advanced analytics and reporting",
    ],
    rateLimit: "10,000 requests/hour",
    approval: "24-48 hours",
    price: "$29/month",
    badge: "Recommended",
  },
  {
    level: "Admin Access",
    description: "Partner-level access with full platform control",
    features: [
      "Complete platform administration",
      "Custom webhook configurations",
      "White-label API access",
      "Priority support and SLA",
    ],
    rateLimit: "50,000 requests/hour",
    approval: "5-7 business days",
    price: "Custom pricing",
    badge: "Enterprise",
  },
]

const sampleApplications = [
  {
    name: "Kashmir Crafts Mobile App",
    company: "TechCraft Solutions",
    accessLevel: "Authenticated Access",
    useCase: "Mobile app for browsing and purchasing authentic Kashmir crafts",
    status: "Approved",
  },
  {
    name: "Tourism Dashboard",
    company: "Valley Tours Ltd",
    accessLevel: "Public Access",
    useCase: "Tour booking integration for travel website",
    status: "Approved",
  },
  {
    name: "Affiliate Network Platform",
    company: "Digital Marketing Pro",
    accessLevel: "Admin Access",
    useCase: "Multi-vendor affiliate management system",
    status: "Under Review",
  },
]

export default function RequestApiKeyPage() {
  const [selectedLevel, setSelectedLevel] = useState("Authenticated Access")
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    website: "",
    projectDescription: "",
    expectedVolume: "",
    useCase: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(false)
    }, 3000)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <HeroSection
        title="Get Your Access Token"
        subtitle="Request Api Key"
        description="Choose your access level and get approved within 48 hours. We offer Public Access for craft catalogs and tours, Authenticated Access for vendor and affiliate modules, and Admin Access for partner-level integrations with custom configurations."
        backgroundImage="/images/kashmir.jpg"
      />

      <ContentSection className="py-16">
        <div className="container mx-auto px-4">
          {/* Access Levels */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-[#005380] mb-8 text-center">Choose Your Access Level</h2>
            <div className="grid gap-6 lg:grid-cols-3">
              {accessLevels.map((access, index) => (
                <Card
                  key={index}
                  className={`relative cursor-pointer transition-all duration-300 hover:shadow-lg ${
                    selectedLevel === access.level ? "ring-2 ring-[#005380] shadow-lg" : ""
                  }`}
                  onClick={() => setSelectedLevel(access.level)}
                >
                  {access.badge && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-[#005380] text-white">{access.badge}</Badge>
                    </div>
                  )}
                  <CardHeader className="text-center">
                    <div className="flex justify-center mb-3">
                      <div className="p-3 bg-[#005380] rounded-full">
                        <Key className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <CardTitle className="text-xl">{access.level}</CardTitle>
                    <p className="text-gray-600 text-sm">{access.description}</p>
                    <div className="text-2xl font-bold text-[#005380] mt-2">{access.price}</div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {access.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Rate Limit:</span>
                        <span className="font-medium">{access.rateLimit}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Approval Time:</span>
                        <span className="font-medium">{access.approval}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Application Form */}
          <div className="mb-16">
            <div className="max-w-2xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-[#005380]" />
                    API Access Application
                  </CardTitle>
                  <p className="text-sm text-gray-600">
                    Selected: <span className="font-medium text-[#005380]">{selectedLevel}</span>
                  </p>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <div className="text-center py-8">
                      <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
                      <h3 className="text-xl font-bold text-green-900 mb-2">Application Submitted!</h3>
                      <p className="text-green-700 mb-4">
                        We&apos;ll review your application and get back to you within{" "}
                        {selectedLevel === "Public Access"
                          ? "24 hours"
                          : selectedLevel === "Authenticated Access"
                            ? "48 hours"
                            : "5-7 business days"}
                        .
                      </p>
                      <p className="text-sm text-gray-600">
                        Application ID: <code className="bg-gray-100 px-2 py-1 rounded">APP-{Date.now()}</code>
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid gap-4 md:grid-cols-2">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Company Name *</label>
                          <input
                            type="text"
                            name="companyName"
                            value={formData.companyName}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                            placeholder="Your Company Ltd."
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Contact Name *</label>
                          <input
                            type="text"
                            name="contactName"
                            value={formData.contactName}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                            placeholder="John Doe"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid gap-4 md:grid-cols-2">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                            placeholder="john@company.com"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                            placeholder="+1 (555) 123-4567"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Website URL</label>
                        <input
                          type="url"
                          name="website"
                          value={formData.website}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                          placeholder="https://yourcompany.com"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Expected API Volume</label>
                        <select
                          name="expectedVolume"
                          value={formData.expectedVolume}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                        >
                          <option value="">Select expected volume</option>
                          <option value="low">Low (&lt; 1,000 requests/day)</option>
                          <option value="medium">Medium (1,000 - 10,000 requests/day)</option>
                          <option value="high">High (10,000 - 100,000 requests/day)</option>
                          <option value="enterprise">Enterprise (&gt; 100,000 requests/day)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Use Case *</label>
                        <select
                          name="useCase"
                          value={formData.useCase}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                          required
                        >
                          <option value="">Select primary use case</option>
                          <option value="ecommerce">E-commerce Integration</option>
                          <option value="mobile">Mobile Application</option>
                          <option value="affiliate">Affiliate Marketing</option>
                          <option value="tourism">Tourism Platform</option>
                          <option value="analytics">Analytics & Reporting</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Project Description *</label>
                        <textarea
                          name="projectDescription"
                          value={formData.projectDescription}
                          onChange={handleInputChange}
                          rows={4}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                          placeholder="Describe your project and how you plan to use the ArtStay API..."
                          required
                        />
                      </div>

                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <div className="flex items-start gap-3">
                          <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                          <div>
                            <h4 className="font-medium text-blue-900">Application Review Process</h4>
                            <p className="text-sm text-blue-800 mt-1">
                              Our team will review your application and may contact you for additional information.
                              You&apos;ll receive your API credentials via email once approved.
                            </p>
                          </div>
                        </div>
                      </div>

                      <Button type="submit" className="w-full" size="lg">
                        Submit Application
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Sample Applications */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-[#005380] mb-8 text-center">Recent Applications</h2>
            <div className="max-w-4xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="h-5 w-5 text-[#005380]" />
                    Application Examples
                  </CardTitle>
                  <p className="text-sm text-gray-600">See how other developers are using ArtStay APIs</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {sampleApplications.map((app, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div className="flex-1">
                          <h4 className="font-medium">{app.name}</h4>
                          <p className="text-sm text-gray-600">{app.company}</p>
                          <p className="text-sm text-gray-500 mt-1">{app.useCase}</p>
                        </div>
                        <div className="text-right">
                          <Badge variant="outline" className="mb-2">
                            {app.accessLevel}
                          </Badge>
                          <div className="flex items-center gap-1">
                            {app.status === "Approved" ? (
                              <CheckCircle className="h-4 w-4 text-green-600" />
                            ) : (
                              <Clock className="h-4 w-4 text-yellow-600" />
                            )}
                            <span className="text-sm font-medium">{app.status}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Support Information */}
          {/* <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
            <CardContent className="pt-8 pb-8">
              <div className="text-center">
                <Shield className="h-16 w-16 text-green-600 mx-auto mb-6" />
                <h2 className="text-2xl font-bold text-green-900 mb-4">Need Help with Your Application?</h2>
                <p className="text-green-700 mb-6 max-w-2xl mx-auto">
                  Our developer support team is here to help you choose the right access level and guide you through the
                  application process.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-green-600 hover:bg-green-700">Contact Support Team</Button>
                  <Button
                    variant="outline"
                    className="border-green-300 text-green-700 hover:bg-green-50 bg-transparent"
                  >
                    View FAQ
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card> */}
        </div>
      </ContentSection>
    </div>
  )
}
