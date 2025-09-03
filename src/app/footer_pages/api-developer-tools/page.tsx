import HeroSection  from "~/components/footer_components/ui/hero-section"
import  ContentSection  from "~/components/footer_components/ui/content-section"
import  {ApiCard}  from "~/components/footer_components/developer/api-card"
import { Card, CardContent } from "~/components/ui/card"

import {
  BookOpen,
  TestTube,
  Download,
  Lightbulb,
  Key,
  Webhook,
  Code,
  Shield,
  Zap,
  Globe,
  Database,
  Users,
} from "lucide-react"

const quickAccessLinks = [
  {
    title: "Documentation",
    description: "Complete API reference with authentication protocols, rate limits, and sample requests",
    icon: <BookOpen className="h-6 w-6 text-white" />,
    features: [
      "RESTful endpoint structure",
      "OAuth 2.0 / API token auth",
      "Rate limits and response codes",
      "Sample requests for all modules",
    ],
    ctaText: "Start Here",
    ctaLink: "/documentation",
    badge: "Essential",
  },
  {
    title: "Sandbox",
    description: "Test without limits in our production-mirror environment with pre-generated tokens",
    icon: <TestTube className="h-6 w-6 text-white" />,
    features: [
      "Simulate vendor registration",
      "Trigger affiliate conversions",
      "Test webhook payloads",
      "Pre-generated demo tokens",
    ],
    ctaText: "Try in Sandbox",
    ctaLink: "/sandbox",
    badge: "Interactive",
  },
  {
    title: "Installation Guide",
    description: "Get set in minutes with SDK downloads and step-by-step setup for multiple languages",
    icon: <Download className="h-6 w-6 text-white" />,
    features: [
      "Node.js, Python, PHP SDKs",
      "Frontend and backend setup",
      "Environment configuration",
      "Deployment best practices",
    ],
    ctaText: "Set Up Easily",
    ctaLink: "/installation-guide",
    badge: "Quick Start",
  },
  {
    title: "How to Use",
    description: "Start building quickly with practical tutorials and real-world use cases",
    icon: <Lightbulb className="h-6 w-6 text-white" />,
    features: [
      "Auto-list vendor inventory",
      "Track affiliate campaigns",
      "Sync tour availability",
      "Display craft carbon footprint",
    ],
    ctaText: "Learn Fast",
    ctaLink: "/how-to-use",
    badge: "Tutorials",
  },
  {
    title: "Request API Key",
    description: "Get your access token with approval within 48 hours for different scope levels",
    icon: <Key className="h-6 w-6 text-white" />,
    features: [
      "Public access (Craft + Tours)",
      "Authenticated (Vendor + Affiliate)",
      "Admin access (Partner-level)",
      "48-hour approval process",
    ],
    ctaText: "Get Credentials",
    ctaLink: "/request-api-key",
    badge: "Required",
  },
  {
    title: "Webhook Events",
    description: "Stay in sync with real-time notifications, custom endpoints, and signature verification",
    icon: <Webhook className="h-6 w-6 text-white" />,
    features: [
      "Vendor, affiliate, tour events",
      "Custom endpoint support",
      "Retry logic with signatures",
      "Event logs and debugging",
    ],
    ctaText: "Stay Updated",
    ctaLink: "/webhook-events",
    badge: "Real-time",
  },
]

const platformFeatures = [
  {
    icon: <Shield className="h-8 w-8 text-white" />,
    title: "Enterprise Security",
    description: "OAuth 2.0, API tokens, rate limiting, and signature verification",
  },
  {
    icon: <Zap className="h-8 w-8 text-white" />,
    title: "High Performance",
    description: "99.9% uptime SLA with global CDN and optimized response times",
  },
  {
    icon: <Globe className="h-8 w-8 text-white" />,
    title: "Global Scale",
    description: "Multi-region deployment with automatic failover and load balancing",
  },
  {
    icon: <Code className="h-8 w-8 text-white" />,
    title: "Developer First",
    description: "Comprehensive SDKs, interactive docs, and sandbox environment",
  },
]

const integrationModules = [
  {
    module: "E-commerce",
    description: "Product catalog, inventory management, order processing",
    icon: <Database className="h-6 w-6 text-white" />,
    endpoints: 12,
  },
  {
    module: "Tourism",
    description: "Tour listings, booking management, availability sync",
    icon: <Globe className="h-6 w-6 text-white" />,
    endpoints: 8,
  },
  {
    module: "Affiliate",
    description: "Conversion tracking, commission calculation, payment processing",
    icon: <Users className="h-6 w-6 text-white" />,
    endpoints: 6,
  },
  {
    module: "Vendor",
    description: "Registration, profile management, analytics dashboard",
    icon: <Shield className="h-6 w-6 text-white" />,
    endpoints: 10,
  },
]

export default function ApiDeveloperToolsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <HeroSection
        title="Build Seamlessly with ArtStay APIs"
        subtitle="Artstay APIs"
        description="ArtStay provides developers with robust, secure, and easy-to-integrate APIs to extend functionality across e-commerce, tourism, affiliate, and vendor modules. Whether you're building custom dashboards, integrating with affiliate tools, or syncing vendor inventory, our platform supports modern REST-based interactions with full documentation and real-time test environments."
        backgroundImage="/images/kashmir.jpg"
      />

      <ContentSection className="py-16">
        <div className="container mx-auto px-4">
          {/* Quick Access Links */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-[#005380] mb-8 text-center">Everything You Need to Build</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {quickAccessLinks.map((link, index) => (
                <ApiCard key={index} {...link} />
              ))}
            </div>
          </div>

          {/* Platform Features */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-[#005380] mb-8 text-center">Enterprise-Grade API Platform</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {platformFeatures.map((feature, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center space-y-3">
                      <div className="p-3 bg-gradient-to-br from-[#005380] to-[#0085CC] rounded-full">{feature.icon}</div>
                      <h3 className="font-semibold">{feature.title}</h3>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Integration Modules */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-[#005380] mb-8 text-center">API Integration Modules</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {integrationModules.map((module, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-gradient-to-br from-[#005380] to-[#0085CC] rounded-lg">{module.icon}</div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-semibold">{module.module}</h3>
                          {/* <Badge variant="outline">{module.endpoints} endpoints</Badge> */}
                        </div>
                        <p className="text-sm text-gray-600">{module.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          
        </div>
      </ContentSection>
    </div>
  )
}
