import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card"
import { Badge } from "~/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs"
import { CodeSnippet } from "./code-snippet"
import { Shield, Clock, Database, Users, MapPin } from "lucide-react"

const webhookEvents = {
  vendor: [
    {
      event: "product.created",
      description: "Triggered when a new product is added to vendor inventory",
      payload: `{
  "event": "product.created",
  "data": {
    "id": "prod_123",
    "vendor_id": "vendor_456",
    "name": "Kashmiri Pashmina Shawl",
    "price": 299.99,
    "category": "textiles",
    "created_at": "2024-01-15T10:30:00Z"
  },
  "timestamp": "2024-01-15T10:30:01Z"
}`,
    },
    {
      event: "inventory.updated",
      description: "Sent when product inventory levels change",
      payload: `{
  "event": "inventory.updated",
  "data": {
    "product_id": "prod_123",
    "vendor_id": "vendor_456",
    "old_quantity": 10,
    "new_quantity": 7,
    "updated_at": "2024-01-15T14:22:00Z"
  },
  "timestamp": "2024-01-15T14:22:01Z"
}`,
    },
    {
      event: "payment.released",
      description: "Notifies when payment is released to vendor",
      payload: `{
  "event": "payment.released",
  "data": {
    "payment_id": "pay_789",
    "vendor_id": "vendor_456",
    "amount": 850.00,
    "currency": "USD",
    "order_ids": ["order_101", "order_102"],
    "released_at": "2024-01-15T16:00:00Z"
  },
  "timestamp": "2024-01-15T16:00:01Z"
}`,
    },
  ],
  affiliate: [
    {
      event: "conversion.recorded",
      description: "Fired when an affiliate conversion is tracked",
      payload: `{
  "event": "conversion.recorded",
  "data": {
    "conversion_id": "conv_abc123",
    "affiliate_id": "aff_xyz789",
    "product_id": "prod_123",
    "order_value": 299.99,
    "commission_rate": 0.15,
    "commission_amount": 45.00,
    "currency": "USD",
    "recorded_at": "2024-01-15T12:15:00Z"
  },
  "timestamp": "2024-01-15T12:15:01Z"
}`,
    },
    {
      event: "payment.generated",
      description: "Sent when affiliate commission payment is processed",
      payload: `{
  "event": "payment.generated",
  "data": {
    "payment_id": "pay_aff_456",
    "affiliate_id": "aff_xyz789",
    "total_commission": 245.50,
    "conversions_count": 8,
    "period_start": "2024-01-01T00:00:00Z",
    "period_end": "2024-01-31T23:59:59Z",
    "processed_at": "2024-02-01T09:00:00Z"
  },
  "timestamp": "2024-02-01T09:00:01Z"
}`,
    },
  ],
  tour: [
    {
      event: "booking.confirmed",
      description: "Triggered when a tour booking is confirmed",
      payload: `{
  "event": "booking.confirmed",
  "data": {
    "booking_id": "book_789",
    "tour_id": "tour_dal_lake",
    "customer_id": "cust_456",
    "tour_date": "2024-02-15T09:00:00Z",
    "participants": 4,
    "total_amount": 180.00,
    "currency": "USD",
    "confirmed_at": "2024-01-15T11:30:00Z"
  },
  "timestamp": "2024-01-15T11:30:01Z"
}`,
    },
    {
      event: "cancellation.requested",
      description: "Sent when a tour cancellation is requested",
      payload: `{
  "event": "cancellation.requested",
  "data": {
    "booking_id": "book_789",
    "tour_id": "tour_dal_lake",
    "customer_id": "cust_456",
    "reason": "Weather conditions",
    "refund_amount": 180.00,
    "requested_at": "2024-02-14T08:00:00Z"
  },
  "timestamp": "2024-02-14T08:00:01Z"
}`,
    },
  ],
}

const securityExample = `// Webhook signature verification (Node.js)
const crypto = require('crypto');

function verifyWebhookSignature(payload, signature, secret) {
  const expectedSignature = crypto
    .createHmac('sha256', secret)
    .update(payload, 'utf8')
    .digest('hex');
  
  return crypto.timingSafeEqual(
    Buffer.from(signature, 'hex'),
    Buffer.from(expectedSignature, 'hex')
  );
}

// Express.js webhook handler
app.post('/webhooks/artstay', (req, res) => {
  const signature = req.headers['x-artstay-signature'];
  const payload = JSON.stringify(req.body);
  
  if (!verifyWebhookSignature(payload, signature, process.env.WEBHOOK_SECRET)) {
    return res.status(401).send('Invalid signature');
  }
  
  // Process webhook event
  const event = req.body;
  console.log('Received event:', event.event);
  
  res.status(200).send('OK');
});`

export function WebhookEvents() {
  return (
    <div className="space-y-8">
      {/* Overview */}
      {/* <Card className="bg-gradient-to-r from-purple-50 to-indigo-50 border-purple-200">
        <CardContent className="pt-6">
          <div className="flex items-start gap-4">
            <Webhook className="h-8 w-8 text-purple-600 mt-1" />
            <div>
              <h3 className="text-xl font-bold text-purple-900 mb-2">Real-time Event Notifications</h3>
              <p className="text-purple-800 mb-4">
                Stay synchronized with ArtStay platform events through secure webhook notifications. Get instant updates
                on vendor activities, affiliate conversions, and tour bookings.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-purple-100 text-purple-800">Secure Signatures</Badge>
                <Badge className="bg-purple-100 text-purple-800">Retry Logic</Badge>
                <Badge className="bg-purple-100 text-purple-800">Event Logs</Badge>
                <Badge className="bg-purple-100 text-purple-800">Custom Endpoints</Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card> */}

      {/* Event Categories */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Database className="h-5 w-5 text-amber-600" />
            Supported Webhook Events
          </CardTitle>
          <p className="text-sm text-gray-600">
            Choose from vendor, affiliate, and tour events to receive real-time notifications
          </p>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="vendor" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="vendor" className="flex items-center gap-2">
                <Database className="h-4 w-4" />
                Vendor Events
              </TabsTrigger>
              <TabsTrigger value="affiliate" className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                Affiliate Events
              </TabsTrigger>
              <TabsTrigger value="tour" className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Tour Events
              </TabsTrigger>
            </TabsList>

            {Object.entries(webhookEvents).map(([category, events]) => (
              <TabsContent key={category} value={category} className="space-y-6">
                <div className="grid gap-4">
                  {events.map((event, index) => (
                    <Card key={index} className="border-l-4 border-l-amber-500">
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between">
                          <div>
                            <CardTitle className="text-lg flex items-center gap-2">
                              <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">{event.event}</code>
                            </CardTitle>
                            <p className="text-sm text-gray-600 mt-1">{event.description}</p>
                          </div>
                          <Badge variant="outline" className="capitalize">
                            {category}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CodeSnippet title="Sample Payload" language="json" code={event.payload} />
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
      </Card>

      {/* Security & Implementation */}
      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-green-600" />
              Security Features
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2" />
                <div>
                  <h4 className="font-medium">HMAC Signature Verification</h4>
                  <p className="text-sm text-gray-600">Every webhook includes a cryptographic signature</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2" />
                <div>
                  <h4 className="font-medium">Timestamp Protection</h4>
                  <p className="text-sm text-gray-600">Prevents replay attacks with timestamp validation</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2" />
                <div>
                  <h4 className="font-medium">IP Allowlisting</h4>
                  <p className="text-sm text-gray-600">Restrict webhooks to trusted IP addresses</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2" />
                <div>
                  <h4 className="font-medium">SSL/TLS Required</h4>
                  <p className="text-sm text-gray-600">All webhook endpoints must use HTTPS</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-blue-600" />
              Delivery & Reliability
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2" />
                <div>
                  <h4 className="font-medium">Automatic Retries</h4>
                  <p className="text-sm text-gray-600">Failed deliveries are retried with exponential backoff</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2" />
                <div>
                  <h4 className="font-medium">Event Ordering</h4>
                  <p className="text-sm text-gray-600">Events include sequence numbers for proper ordering</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2" />
                <div>
                  <h4 className="font-medium">Delivery Logs</h4>
                  <p className="text-sm text-gray-600">Complete audit trail of all webhook attempts</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2" />
                <div>
                  <h4 className="font-medium">Debug Testing</h4>
                  <p className="text-sm text-gray-600">Test webhook endpoints with sample payloads</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Implementation Example */}
      <CodeSnippet
        title="Webhook Security Implementation"
        language="javascript"
        code={securityExample}
        description="Example implementation for secure webhook handling with signature verification"
      />

      {/* Quick Setup */}
      {/* <Card className="bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200">
        <CardContent className="pt-6">
          <div className="text-center">
            <Webhook className="h-12 w-12 text-amber-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-amber-900 mb-2">Ready to Get Started?</h3>
            <p className="text-amber-700 mb-4 max-w-2xl mx-auto">
              Set up your webhook endpoints in minutes. Configure event subscriptions, test with sample data, and start
              receiving real-time notifications from the ArtStay platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="/documentation"
                className="bg-amber-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-amber-700 transition-colors"
              >
                View Integration Guide
              </a>
              <a
                href="/sandbox"
                className="bg-white text-amber-600 border border-amber-300 px-6 py-2 rounded-lg font-semibold hover:bg-amber-50 transition-colors"
              >
                Test in Sandbox
              </a>
            </div>
          </div>
        </CardContent>
      </Card> */}
    </div>
  )
}
