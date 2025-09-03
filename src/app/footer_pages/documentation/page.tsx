import  HeroSection  from "~/components/footer_components/ui/hero-section"
import  ContentSection  from "~/components/footer_components/ui/content-section"
import { CodeSnippet } from "~/components/footer_components/developer/code-snippet"
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card"
import { Badge } from "~/components/ui/badge"
import { Button } from "~/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs"
import { BookOpen, Download, ExternalLink, Shield, Zap, Database, Users, MapPin, Globe } from "lucide-react"

const apiEndpoints = {
  vendors: [
    {
      method: "GET",
      endpoint: "/api/v1/vendors",
      description: "List all registered vendors with pagination",
      auth: "API Key",
      rateLimit: "100/min",
    },
    {
      method: "POST",
      endpoint: "/api/v1/vendors",
      description: "Register a new vendor account",
      auth: "OAuth 2.0",
      rateLimit: "10/min",
    },
    {
      method: "GET",
      endpoint: "/api/v1/vendors/{id}/products",
      description: "Get vendor's product inventory",
      auth: "API Key",
      rateLimit: "200/min",
    },
    {
      method: "PUT",
      endpoint: "/api/v1/vendors/{id}/inventory",
      description: "Update product inventory levels",
      auth: "OAuth 2.0",
      rateLimit: "50/min",
    },
  ],
  affiliates: [
    {
      method: "POST",
      endpoint: "/api/v1/affiliates/track",
      description: "Track affiliate conversion event",
      auth: "API Key",
      rateLimit: "500/min",
    },
    {
      method: "GET",
      endpoint: "/api/v1/affiliates/{id}/stats",
      description: "Get affiliate performance statistics",
      auth: "OAuth 2.0",
      rateLimit: "100/min",
    },
    {
      method: "GET",
      endpoint: "/api/v1/affiliates/{id}/commissions",
      description: "Retrieve commission history",
      auth: "OAuth 2.0",
      rateLimit: "50/min",
    },
  ],
  tours: [
    {
      method: "GET",
      endpoint: "/api/v1/tours",
      description: "List available tours with filters",
      auth: "Public",
      rateLimit: "200/min",
    },
    {
      method: "GET",
      endpoint: "/api/v1/tours/{id}/availability",
      description: "Check tour availability for dates",
      auth: "API Key",
      rateLimit: "300/min",
    },
    {
      method: "POST",
      endpoint: "/api/v1/tours/{id}/bookings",
      description: "Create a new tour booking",
      auth: "OAuth 2.0",
      rateLimit: "20/min",
    },
  ],
}

const sampleRequests = {
  vendors: `// List vendors with pagination
const response = await fetch('https://api.artstay.com/v1/vendors?page=1&limit=10', {
  headers: {
    'Authorization': 'Bearer your_api_key',
    'Content-Type': 'application/json'
  }
});

const vendors = await response.json();
console.log(vendors);

// Sample Response
{
  "status": "success",
  "data": [
    {
      "id": "vendor_001",
      "name": "Kashmir Craft Co.",
      "location": "Srinagar, Kashmir",
      "products_count": 45,
      "rating": 4.8,
      "verified": true,
      "created_at": "2024-01-15T10:30:00Z"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 127,
    "pages": 13
  }
}`,
  affiliates: `// Track affiliate conversion
const conversionData = {
  affiliate_id: "aff_xyz789",
  product_id: "prod_123",
  order_value: 299.99,
  currency: "USD",
  customer_id: "cust_456"
};

const response = await fetch('https://api.artstay.com/v1/affiliates/track', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer your_api_key',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(conversionData)
});

const result = await response.json();

// Sample Response
{
  "status": "success",
  "data": {
    "conversion_id": "conv_abc123",
    "commission_rate": 0.15,
    "commission_amount": 45.00,
    "tracking_status": "confirmed",
    "recorded_at": "2024-01-15T12:15:00Z"
  }
}`,
  tours: `// Get tour availability
const tourId = "tour_dal_lake";
const checkDate = "2024-02-15";

const response = await fetch(\`https://api.artstay.com/v1/tours/\${tourId}/availability?date=\${checkDate}\`, {
  headers: {
    'Authorization': 'Bearer your_api_key',
    'Content-Type': 'application/json'
  }
});

const availability = await response.json();

// Sample Response
{
  "status": "success",
  "data": {
    "tour_id": "tour_dal_lake",
    "date": "2024-02-15",
    "available": true,
    "slots_remaining": 4,
    "max_capacity": 6,
    "price": 45.00,
    "currency": "USD",
    "time_slots": [
      "09:00", "11:00", "14:00", "16:00"
    ]
  }
}`,
}

const authenticationExample = `// API Key Authentication
const apiKey = 'your_api_key_here';

const response = await fetch('https://api.artstay.com/v1/vendors', {
  headers: {
    'Authorization': \`Bearer \${apiKey}\`,
    'Content-Type': 'application/json'
  }
});

// OAuth 2.0 Authentication Flow
const clientId = 'your_client_id';
const clientSecret = 'your_client_secret';

// Step 1: Get access token
const tokenResponse = await fetch('https://api.artstay.com/oauth/token', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  body: new URLSearchParams({
    grant_type: 'client_credentials',
    client_id: clientId,
    client_secret: clientSecret,
    scope: 'vendors:read affiliates:write'
  })
});

const { access_token } = await tokenResponse.json();

// Step 2: Use access token for API calls
const apiResponse = await fetch('https://api.artstay.com/v1/vendors', {
  headers: {
    'Authorization': \`Bearer \${access_token}\`,
    'Content-Type': 'application/json'
  }
});`

const rateLimits = [
  {
    tier: "Public Access",
    requests: "1,000/hour",
    burst: "100/minute", 
    description: "For public data like product catalogs and tour listings",
  },
  {
    tier: "Authenticated",
    requests: "10,000/hour",
    burst: "500/minute",
    description: "For vendor and affiliate operations with API key",
  },
  {
    tier: "Premium",
    requests: "50,000/hour",
    burst: "2,000/minute",
    description: "For high-volume integrations and enterprise use",
  },
  {
    tier: "Enterprise",
    requests: "200,000/hour",
    burst: "5,000/minute",
    description: "For large-scale business operations with dedicated support",
  },
]

const responseCodes = [
  { code: "200", status: "OK", description: "Request successful" },
  { code: "201", status: "Created", description: "Resource created successfully" },
  { code: "400", status: "Bad Request", description: "Invalid request parameters" },
  { code: "401", status: "Unauthorized", description: "Invalid or missing authentication" },
  { code: "403", status: "Forbidden", description: "Insufficient permissions" },
  { code: "404", status: "Not Found", description: "Resource not found" },
  { code: "500", status: "Internal Server Error", description: "Server error occurred" },
]

export default function DocumentationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <HeroSection
        title="Complete API Reference"
        subtitle="Documentation"
        description="Comprehensive documentation for ArtStay's RESTful APIs including authentication protocols, rate limits, response codes, and sample requests for vendor registration, product listing, affiliate tracking, and tour bookings. Everything you need to integrate with our platform."
        backgroundImage="/images/kashmir.jpg"
      />

      <ContentSection className="py-16">
        <div className="container mx-auto px-4">
          {/* Quick Navigation */}
          <div className="mb-12">
            <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4 mb-4">
                  <BookOpen className="h-8 w-8 text-blue-600" />
                  <div>
                    <h2 className="text-xl font-bold text-[#005380]">API Documentation</h2>
                    <p className="text-blue-700 italic">Access comprehensive guides and download resources</p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button className="flex items-center gap-2">
                    <ExternalLink className="h-4 w-4" />
                    View Online Documentation
                  </Button>
                  <Button variant="outline" className="flex items-center gap-2 bg-transparent">
                    <Download className="h-4 w-4" />
                    Download PDF Guide
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* API Endpoints */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-[#005380] mb-6">API Endpoints</h2>
            <Tabs defaultValue="vendors" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="vendors" className="flex items-center gap-2">
                  <Database className="h-4 w-4" />
                  Vendors
                </TabsTrigger>
                <TabsTrigger value="affiliates" className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  Affiliates
                </TabsTrigger>
                <TabsTrigger value="tours" className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  Tours
                </TabsTrigger>
              </TabsList>

              {Object.entries(apiEndpoints).map(([category, endpoints]) => (
                <TabsContent key={category} value={category} className="space-y-4">
                  <div className="grid gap-4">
                    {endpoints.map((endpoint, index) => (
                      <Card key={index} className="border-l-4 border-l-amber-500">
                        <CardContent className="pt-4">
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-3">
                              <Badge
                                variant="outline"
                                className={
                                  endpoint.method === "GET"
                                    ? "bg-green-50 text-green-700 border-green-300"
                                    : endpoint.method === "POST"
                                      ? "bg-blue-50 text-blue-700 border-blue-300"
                                      : "bg-orange-50 text-orange-700 border-orange-300"
                                }
                              >
                                {endpoint.method}
                              </Badge>
                              <code className="text-sm font-mono bg-gray-100 px-2 py-1 rounded">
                                {endpoint.endpoint}
                              </code>
                            </div>
                            <div className="flex items-center gap-2">
                              <Badge variant="secondary">{endpoint.auth}</Badge>
                              <Badge variant="outline">{endpoint.rateLimit}</Badge>
                            </div>
                          </div>
                          <p className="text-sm text-gray-600">{endpoint.description}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>

          {/* Sample Requests */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-[#005380] mb-6">Sample Requests & Responses</h2>
            <Tabs defaultValue="vendors" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="vendors">Vendor API</TabsTrigger>
                <TabsTrigger value="affiliates">Affiliate API</TabsTrigger>
                <TabsTrigger value="tours">Tour API</TabsTrigger>
              </TabsList>

              {Object.entries(sampleRequests).map(([category, code]) => (
                <TabsContent key={category} value={category}>
                  <CodeSnippet
                    title={`${category.charAt(0).toUpperCase() + category.slice(1)} API Example`}
                    language="javascript"
                    code={code}
                    description={`Complete example showing request and response for ${category} operations`}
                  />
                </TabsContent>
              ))}
            </Tabs>
          </div>

          {/* Authentication */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-[#005380] mb-6">Authentication Protocols</h2>
            <div className="grid gap-6 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-green-600" />
                    API Key Authentication
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">
                    Simple authentication using API keys in the Authorization header. Suitable for server-to-server
                    integrations.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full" />
                      <span className="text-sm">Easy to implement</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full" />
                      <span className="text-sm">Perfect for backend services</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full" />
                      <span className="text-sm">No token expiration</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-blue-600" />
                    OAuth 2.0 Flow
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">
                    Industry-standard OAuth 2.0 with client credentials flow. Required for sensitive operations and user
                    data access.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full" />
                      <span className="text-sm">Enhanced security</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full" />
                      <span className="text-sm">Scoped permissions</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full" />
                      <span className="text-sm">Token refresh capability</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-6">
              <CodeSnippet
                title="Authentication Examples"
                language="javascript"
                code={authenticationExample}
                description="Examples of both API key and OAuth 2.0 authentication methods"
              />
            </div>
          </div>

          {/* Rate Limits */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-[#005380] mb-6">Rate Limits & Response Codes</h2>
            <div className="grid gap-6 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-[#005380]" />
                    Rate Limits
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {rateLimits.map((limit, index) => (
                      <div key={index} className="border-l-4 border-l-amber-500 pl-4">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-medium">{limit.tier}</h4>
                          <Badge variant="outline">{limit.requests}</Badge>
                        </div>
                        <p className="text-sm text-gray-600 mb-1">{limit.description}</p>
                        <p className="text-xs text-amber-600">Burst: {limit.burst}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="h-5 w-5 text-[#005380]" />
                    HTTP Response Codes
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {responseCodes.map((response, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <Badge
                          variant="outline"
                          className={
                            response.code.startsWith("2")
                              ? "bg-green-50 text-green-700 border-green-300"
                              : response.code.startsWith("4")
                                ? "bg-red-50 text-red-700 border-red-300"
                                : "bg-orange-50 text-orange-700 border-orange-300"
                          }
                        >
                          {response.code}
                        </Badge>
                        <div className="flex-1">
                          <div className="font-medium text-sm">{response.status}</div>
                          <div className="text-xs text-gray-600">{response.description}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          
        </div>
      </ContentSection>
    </div>
  )
}
