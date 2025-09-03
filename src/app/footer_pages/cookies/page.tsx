
import HeroSection from "~/components/footer_components/ui/hero-section"
import ContentSection from "~/components/footer_components/ui/content-section"
import PolicyCard from "~/components/footer_components/support/policy-card"
import Card from "~/components/footer_components/ui/card"
import { Cookie, Settings, BarChart3, Target, Shield } from "lucide-react"

export default function CookiesPage() {
  const cookieTypes = [
    {
      icon: Shield,
      title: "Essential Cookies",
      description: "Required for basic website functionality like login, cart, and security",
      required: true,
      examples: ["Session management", "Security tokens", "Shopping cart", "User preferences"],
    },
    {
      icon: BarChart3,
      title: "Analytics Cookies",
      description: "Help us understand how visitors use our website to improve performance",
      required: false,
      examples: ["Page views", "User journeys", "Performance metrics", "Error tracking"],
    },
    {
      icon: Target,
      title: "Marketing Cookies",
      description: "Used to deliver relevant advertisements and track campaign effectiveness",
      required: false,
      examples: ["Ad personalization", "Campaign tracking", "Social media integration", "Retargeting"],
    },
  ]

  const cookieSettings = [
    {
      category: "Essential",
      description: "Always active - required for website functionality",
      enabled: true,
      locked: true,
    },
    {
      category: "Analytics",
      description: "Help us improve our website performance",
      enabled: false,
      locked: false,
    },
    {
      category: "Marketing",
      description: "Personalized ads and content recommendations",
      enabled: false,
      locked: false,
    },
  ]

  return (
    <>
      <HeroSection
        title="Cookie Use & Choices"
        subtitle="Your Privacy Preferences"
        description="We use cookies to enhance your browsing experience, analyze website performance, and deliver personalized content. You have full control over which cookies you accept."
        backgroundImage="/images/kashmir.jpg"
      />

      <ContentSection background="white">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#005380] mb-6">Types of Cookies We Use</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto italic">
            Understanding the different cookies and how they enhance your experience
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {cookieTypes.map((type, index) => (
            <Card key={index} hover gradient className="h-full">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#005380] to-[#0085CC] rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <type.icon className="w-8 h-8 text-white" />
                </div>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <h3 className="text-xl font-semibold text-gray-800">{type.title}</h3>
                  {type.required && (
                    <span className="px-2 py-1 bg-red-100 text-red-800 text-xs font-medium rounded-full">Required</span>
                  )}
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed mb-6 text-center">{type.description}</p>

              <div className="space-y-2">
                <h4 className="font-semibold text-gray-800 text-sm">Examples:</h4>
                {type.examples.map((example, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#0085CC] rounded-full"></div>
                    <span className="text-gray-600 text-sm">{example}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <PolicyCard title="Cookie Consent & Control" type="info">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3">Your Choices:</h4>
              <ul className="space-y-2 text-sm">
                <li>• Accept all cookies for full functionality</li>
                <li>• Decline optional cookies (analytics & marketing)</li>
                <li>• Customize preferences by category</li>
                <li>• Change settings anytime via footer link</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Browser Controls:</h4>
              <ul className="space-y-2 text-sm">
                <li>• Block cookies in browser settings</li>
                <li>• Delete existing cookies</li>
                <li>• Set cookie expiration preferences</li>
                <li>• Use private/incognito browsing</li>
              </ul>
            </div>
          </div>
        </PolicyCard>
      </ContentSection>

      <ContentSection background="gradient" id="cookie-settings">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#005380] mb-6">Cookie Preferences</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto italic">
            Customize your cookie settings to match your privacy preferences
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-white p-8">
            <div className="space-y-6">
              {cookieSettings.map((setting, index) => (
                <div key={index} className="flex items-center justify-between p-6 bg-gray-50 rounded-xl">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold text-gray-800">{setting.category}</h3>
                      {setting.locked && (
                        <span className="px-2 py-1 bg-gray-200 text-gray-700 text-xs font-medium rounded-full">
                          Always Active
                        </span>
                      )}
                    </div>
                    <p className="text-gray-600 text-sm">{setting.description}</p>
                  </div>

                  <div className="ml-6">
                    {setting.locked ? (
                      <div className="w-12 h-6 bg-[#0085CC] rounded-full flex items-center justify-end px-1">
                        <div className="w-4 h-4 bg-white rounded-full"></div>
                      </div>
                    ) : (
                      <button className="w-12 h-6 bg-gray-300 rounded-full flex items-center px-1 hover:bg-gray-400 transition-colors">
                        <div className="w-4 h-4 bg-white rounded-full transition-transform"></div>
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-[#005380] to-[#0085CC] text-white font-semibold rounded-xl hover:scale-105 transition-all duration-300">
                Save Preferences
              </button>
              <button className="px-8 py-3 bg-white border-2 border-[#0085CC] text-[#0085CC] font-semibold rounded-xl hover:bg-[#0085CC] hover:text-white transition-all duration-300">
                Accept All
              </button>
              <button className="px-8 py-3 bg-gray-100 text-gray-700 font-semibold rounded-xl hover:bg-gray-200 transition-all duration-300">
                Decline Optional
              </button>
            </div>
          </Card>
        </div>
      </ContentSection>

      <ContentSection background="white">
        <div className="max-w-4xl mx-auto">
          <Card gradient className="text-center p-12">
            <Settings className="w-16 h-16 text-[#0085CC] mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-[#005380] mb-6">Need Help with Cookies?</h2>
            <p className="text-lg text-gray-600 mb-8 italic">
              If you have questions about our cookie policy or need assistance with your settings, we&apos;re here to help.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-xl p-6 text-left">
                <Cookie className="w-8 h-8 text-[#0085CC] mb-4" />
                <h4 className="font-semibold text-gray-800 mb-2">Cookie Settings</h4>
                <p className="text-sm text-gray-600 mb-3">Access cookie preferences anytime</p>
                <p className="text-sm font-medium text-[#0085CC]">Footer → Cookie Settings</p>
              </div>

              <div className="bg-white rounded-xl p-6 text-left">
                <Shield className="w-8 h-8 text-[#0085CC] mb-4" />
                <h4 className="font-semibold text-gray-800 mb-2">Privacy Support</h4>
                <p className="text-sm text-gray-600 mb-3">Get help with privacy questions</p>
                <p className="text-sm font-medium text-[#0085CC]">privacy@artstayglobal.com</p>
              </div>
            </div>

            <p className="text-sm text-gray-500">
              <strong>Note:</strong> Disabling certain cookies may affect website functionality and your user
              experience.
            </p>
          </Card>
        </div>
      </ContentSection>
    </>
  )
}
