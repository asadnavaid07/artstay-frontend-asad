import HeroSection from "~/components/footer_components/ui/hero-section"
import ContentSection from "~/components/footer_components/ui/content-section"
import ContactForm from "~/components/footer_components/support/contact-form"
import Card from "~/components/footer_components/ui/card"
import { Eye, Keyboard, Volume2, Type, Globe, Heart } from "lucide-react"

export default function AccessibilitySupportPage() {
  const accessibilityFeatures = [
    {
      icon: Keyboard,
      title: "Keyboard Navigation",
      description: "Full website navigation using only keyboard controls with visible focus indicators",
      status: "Available",
    },
    {
      icon: Volume2,
      title: "Screen Reader Support",
      description: "Compatible with NVDA, JAWS, and VoiceOver with proper ARIA labels and descriptions",
      status: "Available",
    },
    {
      icon: Type,
      title: "Text Contrast",
      description: "WCAG 2.1 AA compliant color contrast ratios for optimal readability",
      status: "Available",
    },
    {
      icon: Eye,
      title: "Visual Adjustments",
      description: "Text size controls, high contrast mode, and reduced motion options",
      status: "Available",
    },
    {
      icon: Globe,
      title: "Language Support",
      description: "Multi-language interface with translation assistance for non-native speakers",
      status: "Available",
    },
    {
      icon: Heart,
      title: "Cognitive Support",
      description: "Clear navigation, consistent layouts, and simplified language options",
      status: "Available",
    },
  ]

  const assistiveTechnologies = [
    "Screen readers (NVDA, JAWS, VoiceOver)",
    "Voice recognition software", 
    "Switch navigation devices",
    "Eye-tracking systems",
    "Magnification software",
    "Alternative keyboards",
    "Braille displays",
    "Adaptive pointing devices",
    "Sip-and-puff systems",
    "On-screen keyboards"
  ]

  return (
    <>
      <HeroSection
        title="Inclusive for All"
        subtitle="Accessibility & Support"
        description="ArtStay is committed to creating a welcoming experience for all users. We continuously work to ensure our platform is accessible to people with disabilities."
        backgroundImage="/images/kashmir.jpg"
      />

      <ContentSection background="white">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#005380] mb-6">Accessibility Features</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto italic">
            Our platform includes comprehensive accessibility features designed for users with diverse needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {accessibilityFeatures.map((feature, index) => (
            <Card key={index} hover gradient className="h-full">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#005380] to-[#0085CC] rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <h3 className="text-lg font-semibold text-gray-800">{feature.title}</h3>
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                    {feature.status}
                  </span>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed text-center">{feature.description}</p>
            </Card>
          ))}
        </div>

        <Card className="bg-gradient-to-br from-[#005380]/5 to-[#0085CC]/10 border border-[#0085CC]/20">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-[#005380] mb-4">WCAG 2.1 AA Compliance</h3>
            <p className="text-gray-600 leading-relaxed italic">
              Our website meets Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards, ensuring
              compatibility with assistive technologies and providing user experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">Supported Assistive Technologies:</h4>
              <div className="space-y-2">
                {assistiveTechnologies.map((tech, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#0085CC] rounded-full"></div>
                    <span className="text-gray-600 text-sm">{tech}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-4">Accessibility Standards:</h4>
              <div className="space-y-3">
                <div className="p-3 bg-white rounded-lg border border-gray-200">
                  <div className="font-medium text-gray-800 text-sm">Perceivable</div>
                  <div className="text-gray-600 text-xs">Information presented in ways users can perceive</div>
                </div>
                <div className="p-3 bg-white rounded-lg border border-gray-200">
                  <div className="font-medium text-gray-800 text-sm">Operable</div>
                  <div className="text-gray-600 text-xs">Interface components users can operate</div>
                </div>
                <div className="p-3 bg-white rounded-lg border border-gray-200">
                  <div className="font-medium text-gray-800 text-sm">Understandable</div>
                  <div className="text-gray-600 text-xs">Information and UI operation is understandable</div>
                </div>
                <div className="p-3 bg-white rounded-lg border border-gray-200">
                  <div className="font-medium text-gray-800 text-sm">Robust</div>
                  <div className="text-gray-600 text-xs">Content can be interpreted by assistive technologies</div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </ContentSection>

      <ContentSection background="gradient" id="accessibility-form">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#005380] mb-6">Need Accessibility Assistance?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto italic">
            Our accessibility team is here to help you navigate our platform and resolve any accessibility barriers
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <Card hover className="p-8">
              <Eye className="w-12 h-12 text-[#0085CC] mb-6" />
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Accessibility Widget</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Use our accessibility widget located in the bottom-right corner of every page to:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Adjust text size and contrast</li>
                <li>• Enable high contrast mode</li>
                <li>• Reduce motion and animations</li>
                <li>• Access keyboard navigation guide</li>
              </ul>
            </Card>

            <Card hover className="p-8">
              <Globe className="w-12 h-12 text-[#0085CC] mb-6" />
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Language Assistance</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                We provide language support for non-native speakers including:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Multi-language interface options</li>
                <li>• Translation assistance for complex terms</li>
                <li>• Simplified language alternatives</li>
                <li>• Cultural context explanations</li>
              </ul>
            </Card>
          </div>

          <ContactForm
            title="Request Accessibility Support"
            description="Tell us about any accessibility barriers you've encountered or assistance you need"
            formType="accessibility"
          />
        </div>
      </ContentSection>

      <ContentSection background="white">
        <div className="max-w-4xl mx-auto">
          <Card gradient className="text-center p-12">
            <Heart className="w-16 h-16 text-[#0085CC] mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-[#005380] mb-6">Our Accessibility Commitment</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We believe that everyone should have equal access to Kashmir&apos;s rich cultural heritage. Our commitment to
              accessibility goes beyond compliance, it&apos;s about creating an inclusive community where every user can fully
              participate in our cultural preservation mission.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-xl p-6 text-left">
                <h4 className="font-semibold text-gray-800 mb-2">Continuous Improvement</h4>
                <p className="text-sm text-gray-600">Regular accessibility audits and user feedback integration</p>
              </div>
              <div className="bg-white rounded-xl p-6 text-left">
                <h4 className="font-semibold text-gray-800 mb-2">User-Centered Design</h4>
                <p className="text-sm text-gray-600">Accessibility considerations in every design decision</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:accessibility@artstayglobal.com"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#005380] to-[#0085CC] text-white font-semibold rounded-xl hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Email Accessibility Team
              </a>
              <a
                href="/help-support"
                className="inline-flex items-center justify-center px-8 py-4 bg-white border-2 border-[#0085CC] text-[#0085CC] font-semibold rounded-xl hover:bg-[#0085CC] hover:text-white transition-all duration-300"
              >
                General Support
              </a>
            </div>

            <div className="mt-8 p-4 bg-blue-50 rounded-xl border border-blue-200">
              <p className="text-sm text-blue-800">
                <strong>Response Time:</strong> Accessibility requests are prioritized and typically addressed within 24
                hours
              </p>
            </div>
          </Card>
        </div>
      </ContentSection>
    </>
  )
}
