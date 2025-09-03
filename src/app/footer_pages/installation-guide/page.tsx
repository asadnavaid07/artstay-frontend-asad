import HeroSection  from "~/components/footer_components/ui/hero-section"
import ContentSection  from "~/components/footer_components/ui/content-section"
import { InstallationSteps } from "~/components/footer_components/developer/installation-steps"
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card"
import { Button } from "~/components/ui/button"
import { Badge } from "~/components/ui/badge"
import { Download, BookOpen, Video } from "lucide-react"

const resources = [
  {
    title: "Setup Guide PDF",
    description: "Complete installation guide with troubleshooting tips",
    type: "PDF",
    size: "2.4 MB",
    icon: <BookOpen className="h-5 w-5 text-red-600" />,
  },
  {
    title: "Video Tutorial",
    description: "Step-by-step video walkthrough of the setup process",
    type: "Video",
    duration: "12 min",
    icon: <Video className="h-5 w-5 text-blue-600" />,
  },
  {
    title: "Sample Projects",
    description: "Ready-to-use project templates for quick start",
    type: "ZIP",
    size: "5.1 MB",
    icon: <Download className="h-5 w-5 text-green-600" />,
  },
]

const troubleshooting = [
  {
    issue: "Authentication Errors",
    solution: "Verify your API key is correctly set in environment variables and has the required scopes",
    code: `// Check your environment variables
console.log('API Key:', process.env.ARTSTAY_API_KEY ? 'Set' : 'Missing');
console.log('Environment:', process.env.ARTSTAY_ENVIRONMENT);`,
  },
  {
    issue: "Network Timeouts",
    solution: "Increase timeout values and implement retry logic for better reliability",
    code: `// Set custom timeout
const client = new ArtStayClient({
  apiKey: process.env.ARTSTAY_API_KEY,
  timeout: 30000, // 30 seconds
  retries: 3
});`,
  },
  {
    issue: "Rate Limit Exceeded",
    solution: "Implement exponential backoff and respect rate limit headers in responses",
    code: `// Handle rate limits
if (response.status === 429) {
  const retryAfter = response.headers.get('Retry-After');
  await new Promise(resolve => setTimeout(resolve, retryAfter * 1000));
}`,
  },
]

export default function InstallationGuidePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <HeroSection
        title="Get Set in Minutes"
        subtitle="Installation Guide"
        description="Our installation guide includes SDK download links for Node.js, Python, and PHP with step-by-step setup for both frontend and backend. Complete environment variable configuration and deployment best practices to get you up and running quickly."
       backgroundImage="/images/kashmir.jpg"
      />

      <ContentSection className="py-16">
        <div className="container mx-auto px-4">
          {/* Quick Resources */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-[#005380]  mb-8 text-center">Download Resources</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {resources.map((resource, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-gray-50 rounded-lg">{resource.icon}</div>
                      <div className="flex-1">
                        <h3 className="font-semibold mb-1">{resource.title}</h3>
                        <p className="text-sm text-gray-600 mb-3">{resource.description}</p>
                        <div className="flex items-center justify-between">
                          <Badge variant="outline">
                            {resource.type} • {resource.size ?? resource.duration}
                          </Badge>
                          <Button size="sm" variant="outline">
                            <Download className="h-4 w-4 mr-1" />
                            Download
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Installation Steps */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-[#005380]  mb-8 text-center">Step-by-Step Installation</h2>
            <InstallationSteps />
          </div>

          {/* Troubleshooting */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-[#005380]  mb-8 text-center">Common Issues & Solutions</h2>
            <div className="space-y-6">
              {troubleshooting.map((item, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg text-red-700">{item.issue}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{item.solution}</p>
                    <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                      <code>{item.code}</code>
                    </pre>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Next Steps */}
          {/* <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
            <CardContent className="pt-8 pb-8">
              <div className="text-center">
                <Play className="h-16 w-16 text-green-600 mx-auto mb-6" />
                <h2 className="text-2xl font-bold text-green-900 mb-4">Installation Complete!</h2>
                <p className="text-green-700 mb-6 max-w-2xl mx-auto">
                  Now that you have the ArtStay SDK installed and configured, you&apos;re ready to start building amazing
                  integrations. Test your setup in our sandbox environment.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700">
                    <Play className="h-5 w-5 mr-2" />
                    Test in Sandbox
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-green-300 text-green-700 hover:bg-green-50 bg-transparent"
                  >
                    <BookOpen className="h-5 w-5 mr-2" />
                    View Tutorials
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
