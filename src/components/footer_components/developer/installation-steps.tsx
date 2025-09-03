import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card"
import { Badge } from "~/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs"
import { CodeSnippet } from "./code-snippet"
import { Download, Terminal, Settings, CheckCircle } from "lucide-react"

const installationSteps = [
  {
    step: 1,
    title: "Install SDK",
    description: "Choose your preferred language and install the ArtStay SDK",
    icon: <Download className="h-5 w-5 text-blue-600" />,
  },
  {
    step: 2,
    title: "Configure Environment",
    description: "Set up your API credentials and environment variables",
    icon: <Settings className="h-5 w-5 text-amber-600" />,
  },
  {
    step: 3,
    title: "Initialize Client",
    description: "Create your API client and start making requests",
    icon: <Terminal className="h-5 w-5 text-green-600" />,
  },
  {
    step: 4,
    title: "Test Integration",
    description: "Verify your setup with a simple API call",
    icon: <CheckCircle className="h-5 w-5 text-purple-600" />,
  },
]

const codeExamples = {
  nodejs: {
    install: `npm install @artstay/sdk
# or
yarn add @artstay/sdk`,
    env: `# .env file
ARTSTAY_API_KEY=your_api_key_here
ARTSTAY_ENVIRONMENT=sandbox`,
    init: `import { ArtStayClient } from '@artstay/sdk';

const client = new ArtStayClient({
  apiKey: process.env.ARTSTAY_API_KEY,
  environment: 'sandbox'
});`,
    test: `// Test your connection
const vendors = await client.vendors.list({
  limit: 10,
  page: 1
});

console.log('Connected! Found', vendors.total, 'vendors');`,
  },
  python: {
    install: `pip install artstay-sdk`,
    env: `# .env file
ARTSTAY_API_KEY=your_api_key_here
ARTSTAY_ENVIRONMENT=sandbox`,
    init: `from artstay import ArtStayClient
import os

client = ArtStayClient(
    api_key=os.getenv('ARTSTAY_API_KEY'),
    environment='sandbox'
)`,
    test: `# Test your connection
vendors = client.vendors.list(limit=10, page=1)
print(f"Connected! Found {vendors['total']} vendors")`,
  },
  php: {
    install: `composer require artstay/sdk`,
    env: `// .env file
ARTSTAY_API_KEY=your_api_key_here
ARTSTAY_ENVIRONMENT=sandbox`,
    init: `<?php
require_once 'vendor/autoload.php';

use ArtStay\\ArtStayClient;

$client = new ArtStayClient([
    'api_key' => $_ENV['ARTSTAY_API_KEY'],
    'environment' => 'sandbox'
]);`,
    test: `// Test your connection
$vendors = $client->vendors->list([
    'limit' => 10,
    'page' => 1
]);

echo "Connected! Found " . $vendors['total'] . " vendors";`,
  },
}

export function InstallationSteps() {
  return (
    <div className="space-y-8">
      {/* Steps Overview */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {installationSteps.map((step, index) => (
          <Card key={index} className="text-center">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center space-y-3">
                <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full">{step.icon}</div>
                <div>
                  <h3 className="font-semibold text-sm">Step {step.step}</h3>
                  <h4 className="font-medium">{step.title}</h4>
                  <p className="text-xs text-gray-600 mt-1">{step.description}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Language-specific Installation */}
      <Card>
        <CardHeader>
          <CardTitle>Choose Your Language</CardTitle>
          <p className="text-sm text-gray-600">Follow the installation guide for your preferred programming language</p>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="nodejs" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="nodejs" className="flex items-center gap-2">
                <Badge variant="outline" className="bg-green-50 text-green-700">
                  Node.js
                </Badge>
              </TabsTrigger>
              <TabsTrigger value="python" className="flex items-center gap-2">
                <Badge variant="outline" className="bg-blue-50 text-blue-700">
                  Python
                </Badge>
              </TabsTrigger>
              <TabsTrigger value="php" className="flex items-center gap-2">
                <Badge variant="outline" className="bg-purple-50 text-purple-700">
                  PHP
                </Badge>
              </TabsTrigger>
            </TabsList>

            {Object.entries(codeExamples).map(([lang, examples]) => (
              <TabsContent key={lang} value={lang} className="space-y-6">
                <div className="grid gap-6 lg:grid-cols-2">
                  <CodeSnippet
                    title="1. Install SDK"
                    language={lang === "nodejs" ? "bash" : lang === "python" ? "bash" : "bash"}
                    code={examples.install}
                    description="Install the ArtStay SDK package"
                  />

                  <CodeSnippet
                    title="2. Environment Setup"
                    language="env"
                    code={examples.env}
                    description="Configure your API credentials"
                  />
                </div>

                <div className="grid gap-6 lg:grid-cols-2">
                  <CodeSnippet
                    title="3. Initialize Client"
                    language={lang}
                    code={examples.init}
                    description="Create your API client instance"
                  />

                  <CodeSnippet
                    title="4. Test Connection"
                    language={lang}
                    code={examples.test}
                    description="Verify your setup works"
                  />
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
      </Card>

      {/* Additional Resources */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
          <CardContent className="pt-6">
            <div className="flex items-start gap-3">
              <Download className="h-6 w-6 text-blue-600 mt-1" />
              <div>
                <h3 className="font-semibold text-blue-900 mb-2">Download Resources</h3>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• Complete setup guide (PDF)</li>
                  <li>• Postman collection for testing</li>
                  <li>• Sample project templates</li>
                  <li>• Environment configuration examples</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
          <CardContent className="pt-6">
            <div className="flex items-start gap-3">
              <Terminal className="h-6 w-6 text-green-600 mt-1" />
              <div>
                <h3 className="font-semibold text-green-900 mb-2">Quick Start Tips</h3>
                <ul className="text-sm text-green-800 space-y-1">
                  <li>• Start with sandbox environment</li>
                  <li>• Use environment variables for keys</li>
                  <li>• Enable debug mode during development</li>
                  <li>• Check our troubleshooting guide</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
