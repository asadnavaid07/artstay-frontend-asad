import HeroSection  from "~/components/footer_components/ui/hero-section"
import ContentSection  from "~/components/footer_components/ui/content-section"
import { CodeSnippet } from "~/components/footer_components/developer/code-snippet"
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card"
import { Badge } from "~/components/ui/badge"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs"
import { Lightbulb, Database, Users, MapPin, Smartphone, Code, Play} from "lucide-react"

const useCases = [
  {
    title: "Auto-list Vendor Inventory",
    description: "Automatically sync vendor inventory from local ERP systems to ArtStay platform",
    icon: <Database className="h-6 w-6 text-white" />,
    difficulty: "Intermediate",
    time: "30 min",
  },
  {
    title: "Track Affiliate Campaigns",
    description: "Monitor affiliate campaign conversions across multiple platforms and channels",
    icon: <Users className="h-6 w-6 text-white" />,
    difficulty: "Beginner",
    time: "15 min",
  },
  {
    title: "Sync Tour Availability",
    description: "Integrate tour availability with hotel booking systems and external calendars",
    icon: <MapPin className="h-6 w-6 text-white" />,
    difficulty: "Advanced",
    time: "45 min",
  },
  {
    title: "Display Carbon Footprint",
    description: "Show craft carbon footprint data in mobile apps and e-commerce platforms",
    icon: <Smartphone className="h-6 w-6 text-white" />,
    difficulty: "Beginner",
    time: "20 min",
  },
]

const tutorials = {
  inventory: `// Connect Vendor Product Feed
import { ArtStayClient } from '@artstay/sdk';

const client = new ArtStayClient({
  apiKey: process.env.ARTSTAY_API_KEY,
  environment: 'production'
});

// Sync products from your ERP system
async function syncInventory(vendorId, erpProducts) {
  for (const product of erpProducts) {
    try {
      // Check if product exists
      const existing = await client.products.findByExternalId(product.erpId);
      
      if (existing) {
        // Update existing product
        await client.products.update(existing.id, {
          name: product.name,
          price: product.price,
          inventory: product.stock,
          description: product.description,
          images: product.imageUrls
        });
      } else {
        // Create new product
        await client.products.create({
          vendorId: vendorId,
          externalId: product.erpId,
          name: product.name,
          price: product.price,
          inventory: product.stock,
          category: product.category,
          description: product.description,
          images: product.imageUrls
        });
      }
      
      console.log(\`Synced product: \${product.name}\`);
    } catch (error) {
      console.error(\`Failed to sync \${product.name}:\`, error);
    }
  }
}

// Schedule regular sync (every hour)
setInterval(() => {
  const erpProducts = fetchFromERP(); // Your ERP integration
  syncInventory('vendor_123', erpProducts);
}, 3600000);`,

  affiliate: `// Embed Affiliate Sales Widget
import { ArtStayClient } from '@artstay/sdk';

const client = new ArtStayClient({
  apiKey: process.env.ARTSTAY_API_KEY
});

// Track affiliate conversion
async function trackConversion(affiliateId, orderId, orderValue) {
  try {
    const conversion = await client.affiliates.track({
      affiliateId: affiliateId,
      orderId: orderId,
      orderValue: orderValue,
      currency: 'USD',
      timestamp: new Date().toISOString()
    });
    
    console.log('Conversion tracked:', conversion);
    return conversion;
  } catch (error) {
    console.error('Tracking failed:', error);
  }
}

// Embed widget in your website
function createAffiliateWidget(containerId, affiliateId) {
  const container = document.getElementById(containerId);
  
  // Create widget HTML
  container.innerHTML = \`
    <div class="artstay-affiliate-widget">
      <h3>Kashmir Crafts Collection</h3>
      <div id="products-grid"></div>
      <div class="affiliate-badge">
        Powered by ArtStay • Earn 15% Commission
      </div>
    </div>
  \`;
  
  // Load affiliate products
  loadAffiliateProducts(affiliateId);
}

// Load products for affiliate
async function loadAffiliateProducts(affiliateId) {
  const products = await client.products.list({
    affiliateId: affiliateId,
    limit: 12,
    featured: true
  });
  
  const grid = document.getElementById('products-grid');
  grid.innerHTML = products.data.map(product => \`
    <div class="product-card" onclick="trackClick('\${product.id}')">
      <img src="\${product.images[0]}" alt="\${product.name}">
      <h4>\${product.name}</h4>
      <p class="price">$\${product.price}</p>
    </div>
  \`).join('');
}`,

  tours: `// Use Tour Planner API
import { ArtStayClient } from '@artstay/sdk';

const client = new ArtStayClient({
  apiKey: process.env.ARTSTAY_API_KEY
});

// Check tour availability for date range
async function checkTourAvailability(tourId, startDate, endDate) {
  try {
    const availability = await client.tours.availability({
      tourId: tourId,
      startDate: startDate,
      endDate: endDate,
      participants: 4
    });
    
    return availability.data.availableDates;
  } catch (error) {
    console.error('Availability check failed:', error);
    return [];
  }
}

// Create tour booking
async function bookTour(tourId, date, participants, customerInfo) {
  try {
    const booking = await client.tours.book({
      tourId: tourId,
      date: date,
      participants: participants,
      customer: {
        name: customerInfo.name,
        email: customerInfo.email,
        phone: customerInfo.phone
      },
      specialRequests: customerInfo.requests
    });
    
    // Send confirmation email
    await sendBookingConfirmation(booking);
    
    return booking;
  } catch (error) {
    console.error('Booking failed:', error);
    throw error;
  }
}

// Sync with external calendar (Google Calendar example)
async function syncWithCalendar(booking) {
  const event = {
    summary: \`Tour: \${booking.tourName}\`,
    start: {
      dateTime: booking.startTime,
      timeZone: 'Asia/Kolkata'
    },
    end: {
      dateTime: booking.endTime,
      timeZone: 'Asia/Kolkata'
    },
    description: \`Booking ID: \${booking.id}\\nParticipants: \${booking.participants}\`,
    location: booking.meetingPoint
  };
  
  // Add to Google Calendar
  await calendar.events.insert({
    calendarId: 'primary',
    resource: event
  });
}`,
}

export default function HowToUsePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <HeroSection
        title="Start Building Quickly"
        subtitle="How To Use"
        description="Learn how to auto-list vendor inventory from local ERP, track affiliate campaign conversions across platforms, sync tour availability with hotel booking systems, and display craft carbon footprint in mobile apps. Complete with mini tutorials and practical examples."
        backgroundImage="/images/kashmir.jpg"
      />

      <ContentSection className="py-16">
        <div className="container mx-auto px-4">
          {/* Use Cases Overview */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-[#005380]  mb-8 text-center">Developer Use Cases</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {useCases.map((useCase, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center text-center space-y-3">
                      <div className="p-3 bg-gradient-to-br from-[#005380] to-[#0085CC] rounded-full">{useCase.icon}</div>
                      <h3 className="font-semibold">{useCase.title}</h3>
                      <p className="text-sm text-gray-600">{useCase.description}</p>
                      <div className="flex gap-2">
                        <Badge variant="outline">{useCase.difficulty}</Badge>
                        <Badge variant="secondary">{useCase.time}</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Mini Tutorials */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-[#005380]  mb-8 text-center">Mini Tutorials</h2>
            <Tabs defaultValue="inventory" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="inventory" className="flex items-center gap-2">
                  <Database className="h-4 w-4" />
                  Vendor Feed
                </TabsTrigger>
                <TabsTrigger value="affiliate" className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  Affiliate Widget
                </TabsTrigger>
                <TabsTrigger value="tours" className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  Tour Planner
                </TabsTrigger>
              </TabsList>

              {Object.entries(tutorials).map(([key, code]) => (
                <TabsContent key={key} value={key} className="space-y-6">
                  <CodeSnippet
                    title={
                      key === "inventory"
                        ? "Connect Vendor Product Feed"
                        : key === "affiliate"
                          ? "Embed Affiliate Sales Widget"
                          : "Use Tour Planner API"
                    }
                    language="javascript"
                    code={code}
                    description={
                      key === "inventory"
                        ? "Automatically sync inventory from ERP systems"
                        : key === "affiliate"
                          ? "Create embeddable affiliate widgets with tracking"
                          : "Integrate tour booking with external calendar systems"
                    }
                  />
                </TabsContent>
              ))}
            </Tabs>
          </div>

          {/* Implementation Steps */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-[#005380] mb-8 text-center">Implementation Workflow</h2>
            <div className="grid gap-6 lg:grid-cols-3">
              <Card className="border-l-4 border-l-blue-500">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-blue-700">
                    <Code className="h-5 w-5" />
                    1. Setup & Authentication
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                      Install ArtStay SDK
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                      Configure API credentials
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                      Test connection in sandbox
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                      Implement error handling
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-green-500">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-green-700">
                    <Play className="h-5 w-5" />
                    2. Core Integration
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                      Implement data sync logic
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                      Set up webhook handlers
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                      Add real-time updates
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                      Implement caching strategy
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-purple-500">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-purple-700">
                    <Lightbulb className="h-5 w-5" />
                    3. Production Deploy
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                      Switch to production keys
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                      Configure monitoring
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                      Set up logging & alerts
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                      Performance optimization
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Best Practices */}
          <div className="mb-16">
            <Card className="bg-gradient-to-r from-[#005380] to-[#0085CC] border-[#005380]">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <Lightbulb className="h-5 w-5" />
                  Development Best Practices
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <h4 className="font-semibold text-amber-900 mb-3">Performance Tips</h4>
                    <ul className="space-y-2 text-sm text-amber-800">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-2" />
                        Use pagination for large datasets
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-2" />
                        Implement request caching where appropriate
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-2" />
                        Use webhooks instead of polling
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-2" />
                        Batch API calls when possible
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-amber-900 mb-3">Security Guidelines</h4>
                    <ul className="space-y-2 text-sm text-amber-800">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-2" />
                        Store API keys in environment variables
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-2" />
                        Validate webhook signatures
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-2" />
                        Use HTTPS for all API calls
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-2" />
                        Implement proper error handling
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Next Steps */}
          {/* <Card className="bg-gradient-to-r from-indigo-50 to-purple-50 border-indigo-200">
            <CardContent className="pt-8 pb-8">
              <div className="text-center">
                <BookOpen className="h-16 w-16 text-indigo-600 mx-auto mb-6" />
                <h2 className="text-2xl font-bold text-indigo-900 mb-4">Ready to Build Your Integration?</h2>
                <p className="text-indigo-700 mb-6 max-w-2xl mx-auto">
                  You now have the knowledge to build powerful integrations with ArtStay APIs. Start with our sandbox
                  environment and gradually move to production.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700">
                    <Play className="h-5 w-5 mr-2" />
                    Start in Sandbox
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-indigo-300 text-indigo-700 hover:bg-indigo-50 bg-transparent"
                  >
                    <Code className="h-5 w-5 mr-2" />
                    View Full Documentation
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
