"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card"
import { Button } from "~/components/ui/button"
import { Input } from "~/components/ui/input"
import { Label } from "~/components/ui/label"
import { Textarea } from "~/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "~/components/ui/select"
import { Checkbox } from "~/components/ui/checkbox"
import { Badge } from "~/components/ui/badge"
import { Key, Shield, Database, Users, MapPin, CheckCircle } from "lucide-react"

export function ApiKeyForm() {
  const [formData, setFormData] = useState({
    projectName: "",
    description: "",
    website: "",
    scopes: [] as string[],
    environment: "sandbox",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const scopes = [
    {
      id: "public",
      label: "Public Access",
      description: "Craft info and tours",
      icon: MapPin,
      features: ["Product catalog", "Tour listings", "Public vendor profiles"],
    },
    {
      id: "vendors",
      label: "Vendor Access",
      description: "Vendor management and inventory",
      icon: Database,
      features: ["Inventory management", "Order processing", "Vendor analytics"],
    },
    {
      id: "affiliates",
      label: "Affiliate Access",
      description: "Affiliate tracking and payments",
      icon: Users,
      features: ["Conversion tracking", "Commission calculation", "Payment processing"],
    },
    {
      id: "admin",
      label: "Admin Access",
      description: "Partner-level applications only",
      icon: Shield,
      features: ["Full platform access", "User management", "System analytics"],
    },
  ]

  const handleScopeChange = (scopeId: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      scopes: checked ? [...prev.scopes, scopeId] : prev.scopes.filter((s) => s !== scopeId),
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <Card className="max-w-2xl mx-auto">
        <CardContent className="pt-6">
          <div className="text-center space-y-4">
            <CheckCircle className="h-16 w-16 text-green-600 mx-auto" />
            <h3 className="text-2xl font-bold text-green-900">Request Submitted!</h3>
            <p className="text-gray-600 max-w-md mx-auto">
              Your API key request has been submitted successfully. You&apos;ll receive an email with your credentials within
              24-48 hours.
            </p>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-left">
              <h4 className="font-medium text-green-900 mb-2">What&apos;s Next?</h4>
              <ul className="text-sm text-green-800 space-y-1">
                <li>• Check your email for confirmation</li>
                <li>• Sandbox access is available immediately</li>
                <li>• Production keys require additional verification</li>
                <li>• Join our developer community for support</li>
              </ul>
            </div>
            <Button onClick={() => setIsSubmitted(false)} variant="outline">
              Submit Another Request
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Key className="h-5 w-5 text-amber-600" />
          Request API Access
        </CardTitle>
        <p className="text-sm text-gray-600">
          Fill out this form to request API credentials. Approval typically takes 24-48 hours.
        </p>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="projectName">Project Name *</Label>
              <Input
                id="projectName"
                value={formData.projectName}
                onChange={(e) => setFormData((prev) => ({ ...prev, projectName: e.target.value }))}
                placeholder="My ArtStay Integration"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="website">Website URL</Label>
              <Input
                id="website"
                type="url"
                value={formData.website}
                onChange={(e) => setFormData((prev) => ({ ...prev, website: e.target.value }))}
                placeholder="https://example.com"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Project Description *</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData((prev) => ({ ...prev, description: e.target.value }))}
              placeholder="Describe how you plan to use the ArtStay API..."
              rows={4}
              required
            />
          </div>

          <div className="space-y-2">
            <Label>Environment</Label>
            <Select
              value={formData.environment}
              onValueChange={(value) => setFormData((prev) => ({ ...prev, environment: value }))}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="sandbox">Sandbox (Testing)</SelectItem>
                <SelectItem value="production">Production (Live)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-4">
            <Label>API Scopes Required *</Label>
            <div className="grid gap-4">
              {scopes.map((scope) => {
                const Icon = scope.icon
                return (
                  <Card
                    key={scope.id}
                    className={`p-4 transition-all ${formData.scopes.includes(scope.id) ? "ring-2 ring-amber-500 bg-amber-50" : ""}`}
                  >
                    <div className="flex items-start space-x-3">
                      <Checkbox
                        id={scope.id}
                        checked={formData.scopes.includes(scope.id)}
                        onCheckedChange={(checked) => handleScopeChange(scope.id, checked as boolean)}
                      />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Icon className="h-4 w-4 text-amber-600" />
                          <Label htmlFor={scope.id} className="font-medium cursor-pointer">
                            {scope.label}
                          </Label>
                          {scope.id === "admin" && (
                            <Badge variant="secondary" className="text-xs">
                              Approval Required
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-gray-600 mb-2">{scope.description}</p>
                        <div className="flex flex-wrap gap-1">
                          {scope.features.map((feature, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                )
              })}
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <h4 className="font-medium text-amber-900 mb-2">Sample API Key Preview</h4>
            <div className="bg-white border rounded p-3 font-mono text-sm">
              <div className="text-gray-600">Sandbox Key:</div>
              <div className="text-amber-700">sk_sandbox_1234567890abcdef...</div>
              <div className="text-gray-600 mt-2">Production Key:</div>
              <div className="text-green-700">sk_live_abcdef1234567890...</div>
            </div>
          </div>

          <Button type="submit" className="w-full" size="lg" disabled={formData.scopes.length === 0}>
            Submit API Key Request
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
