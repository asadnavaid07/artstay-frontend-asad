"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card"
import { Button } from "~/components/ui/button"
import { Badge } from "~/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs"
import { Play, RefreshCw, Terminal, Database, Webhook } from "lucide-react"

const sampleResponses = {
  vendors: {
    status: "success",
    data: [
      {
        id: "vendor_001",
        name: "Kashmir Craft Co.",
        location: "Srinagar, Kashmir",
        products: 45,
        rating: 4.8,
        verified: true,
      },
      {
        id: "vendor_002",
        name: "Himalayan Artisans",
        location: "Gulmarg, Kashmir",
        products: 32,
        rating: 4.6,
        verified: true,
      },
    ],
    total: 127,
    page: 1,
    limit: 10,
  },
  affiliates: {
    status: "success",
    data: {
      conversion_id: "conv_abc123",
      affiliate_id: "aff_xyz789",
      commission: 25.5,
      currency: "USD",
      product_id: "prod_456",
      timestamp: "2024-01-15T10:30:00Z",
    },
  },
  tours: {
    status: "success",
    data: {
      tour_id: "tour_dal_lake",
      name: "Dal Lake Shikara Experience",
      available_dates: ["2024-02-01", "2024-02-02", "2024-02-03"],
      price: 45.0,
      duration: "2 hours",
      max_capacity: 6,
      current_bookings: 2,
    },
  },
}

export function SandboxDemo() {
  const [isRunning, setIsRunning] = useState(false)
  const [response, setResponse] = useState<string | null>(null)

  const runDemo = async (endpoint: keyof typeof sampleResponses) => {
    setIsRunning(true)
    setResponse(null)

    // Simulate API call
    setTimeout(() => {
      setResponse(JSON.stringify(sampleResponses[endpoint], null, 2))
      setIsRunning(false)
    }, 1500)
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Terminal className="h-5 w-5 text-[#005380]" />
          Interactive API Sandbox
        </CardTitle>
        <p className="text-sm text-gray-600">
          Test our APIs with live sample data. No authentication required in sandbox mode.
        </p>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="vendors" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="vendors" className="flex items-center gap-2">
              <Database className="h-4 w-4" />
              Vendors
            </TabsTrigger>
            <TabsTrigger value="affiliates" className="flex items-center gap-2">
              <Webhook className="h-4 w-4" />
              Affiliates
            </TabsTrigger>
            <TabsTrigger value="tours" className="flex items-center gap-2">
              <Play className="h-4 w-4" />
              Tours
            </TabsTrigger>
          </TabsList>

          <TabsContent value="vendors" className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="bg-green-50 text-green-700 border-green-300">
                    GET
                  </Badge>
                  <code className="text-sm font-mono">/api/v1/vendors</code>
                </div>
                <p className="text-sm text-gray-600 mt-1">Fetch all registered vendors with pagination</p>
              </div>
              <Button onClick={() => runDemo("vendors")} disabled={isRunning} className="flex items-center gap-2">
                {isRunning ? <RefreshCw className="h-4 w-4 animate-spin" /> : <Play className="h-4 w-4" />}
                Run Test
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="affiliates" className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-300">
                    POST
                  </Badge>
                  <code className="text-sm font-mono">/api/v1/affiliates/track</code>
                </div>
                <p className="text-sm text-gray-600 mt-1">Track affiliate conversion and calculate commission</p>
              </div>
              <Button onClick={() => runDemo("affiliates")} disabled={isRunning} className="flex items-center gap-2">
                {isRunning ? <RefreshCw className="h-4 w-4 animate-spin" /> : <Play className="h-4 w-4" />}
                Run Test
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="tours" className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="bg-green-50 text-green-700 border-green-300">
                    GET
                  </Badge>
                  <code className="text-sm font-mono">/api/v1/tours/availability</code>
                </div>
                <p className="text-sm text-gray-600 mt-1">Check tour availability and pricing</p>
              </div>
              <Button onClick={() => runDemo("tours")} disabled={isRunning} className="flex items-center gap-2">
                {isRunning ? <RefreshCw className="h-4 w-4 animate-spin" /> : <Play className="h-4 w-4" />}
                Run Test
              </Button>
            </div>
          </TabsContent>
        </Tabs>

        {response && (
          <div className="mt-6">
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-sm font-medium">Sample Response:</h4>
              <Badge variant="outline" className="bg-green-50 text-green-700">
                200 OK
              </Badge>
            </div>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
              <code>{response}</code>
            </pre>
          </div>
        )}

        <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <h4 className="font-medium text-blue-900 mb-2">Sandbox Features:</h4>
          <ul className="text-sm text-blue-800 space-y-1">
            <li>• Pre-generated sample data for all endpoints</li>
            <li>• No rate limiting in sandbox environment</li>
            <li>• Test webhook payloads and responses</li>
            <li>• Simulate error conditions and edge cases</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}
