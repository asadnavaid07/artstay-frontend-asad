import HeroSection from "~/components/footer_components/ui/hero-section"
import ContentSection from "~/components/footer_components/ui/content-section"
import PolicyCard from "~/components/footer_components/support/policy-card"
import Card from "~/components/footer_components/ui/card"
import { Clock, Package, Calendar, MapPin, Scissors, AlertTriangle, Mail, FileText,  Shield, Ban } from "lucide-react"

export default function RefundPolicyPage() {
  const refundRules = [
    {
      icon: Clock,
      title: "14-Day Refund Window",
      description: "Refunds only eligible within 14 calendar days of product delivery confirmation or scheduled tourism service date. Late claims will not be entertained under any circumstances.",
      type: "warning" as const,
    },
    {
      icon: Package,
      title: "Return Condition — Mandatory",
      description: "Items must be unused, undamaged, in original packaging with receipt and sent via trackable shipping. Damaged returns, opened packaging, or missing components = Non-refundable.",
      type: "info" as const,
    },
    {
      icon: Calendar,
      title: "Tour Cancellation Policy",
      description: "7+ days: 90% refundable (10% processing fee), 2-6 days: 50% refundable, <48 hours: No refund. All cancellations via email only. Refunds for group bookings require minimum 14 days notice.",
      type: "success" as const,
    },
    {
      icon: AlertTriangle,
      title: "General Policy Notes",
      description: "Refunds processed within 10 business days if approved. Return shipping is customer's responsibility unless item damaged in transit. Repeated requests may lead to account suspension.",
      type: "warning" as const,
    },
  ]

  const refundProcess = [
    {
      step: "1",
      title: "Submit a Refund Request",
      description: "Email support@kashmirartstay.com within 14-day window with Order/booking ID, clear reason, and required proof. Incomplete requests will be automatically rejected.",
    },
    {
      step: "2",
      title: "Internal Review",
      description: "Our team assesses your request against time of submission, nature of issue, supporting documentation, and prior refund history. ArtStay reserves right to deny requests.",
    },
    {
      step: "3",
      title: "Resolution Instructions",
      description: "If approved: Craft products get return shipping instructions. Tour services receive refund, credit, or rescheduling instructions based on cancellation timing.",
    },
    {
      step: "4",
      title: "Refund Disbursement",
      description: "Refunds processed within 5–7 business days after item inspection. Refunds only to original payment method. No cash or third-party refunds.",
    },
  ]

  return (
    <>
      <HeroSection
        title="Refund & Return Policy"
        subtitle="Fairness for Artisans, Partners & Platform Integrity"
        description="Refunds are available under specific conditions. We prioritize fairness for our artisans, tour partners, and platform integrity."
        backgroundImage="/images/kashmir.jpg"
      />

      <ContentSection background="white">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#005380] mb-6">Refund & Return Eligibility</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto italic">
            Understanding our strict eligibility conditions and requirements
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {refundRules.map((rule, index) => (
            <PolicyCard key={index} title={rule.title} type={rule.type}>
              <div className="flex items-start gap-4">
                <rule.icon className="w-6 h-6 mt-1 flex-shrink-0" />
                <p className="leading-relaxed">{rule.description}</p>
              </div>
            </PolicyCard>
          ))}
        </div>

        {/* Special Refund Conditions */}
        <Card gradient className="mb-16">
          <h3 className="text-2xl font-bold text-[#005380] mb-6 text-center">Special Refund Conditions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                <Scissors className="w-5 h-5" />
                Craft Products
              </h4>
              <ul className="space-y-2 text-gray-600">
                <li>• <strong>Custom/personalized items:</strong> Non-refundable</li>
                <li>• <strong>Handmade variations:</strong> Not considered defects</li>
                <li>• <strong>Damaged in transit:</strong> Must be reported within 24 hours of delivery</li>
                <li>• <strong>Misrepresented item:</strong> Refund only if different from product description</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                Tourism Services
              </h4>
              <ul className="space-y-2 text-gray-600">
                <li>• <strong>Weather:</strong> Refund only if service is fully cancelled by ArtStay</li>
                <li>• <strong>Guide change:</strong> Replacement guide or partial credit, not full refund</li>
                <li>• <strong>Force majeure:</strong> Full or partial refund based on operator discretion</li>
                <li>• <strong>No-show:</strong> Strictly non-refundable without minimum 24-hour written notice</li>
              </ul>
            </div>
          </div>
        </Card>

        {/* No-Show Policy */}
        <Card className="mb-16 border-l-4 border-red-500 bg-red-50">
          <div className="flex items-start gap-4">
            <Ban className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" />
            <div>
              <h4 className="text-lg font-semibold text-red-800 mb-2">No-Show or Last-Minute Absence</h4>
              <ul className="space-y-1 text-red-700">
                <li>• No refund unless documented emergency with proof</li>
                <li>• All rescheduling requests require 48-hour prior notice</li>
                <li>• All cancellations must be requested via email only</li>
              </ul>
            </div>
          </div>
        </Card>
      </ContentSection>

      <ContentSection background="gradient">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#005380] mb-6">Refund Process</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto italic">
            Step-by-step process for submitting and receiving refunds, if approved
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {refundProcess.map((step, index) => (
            <Card key={index} hover className="text-center h-full">
              <div className="w-16 h-16 bg-gradient-to-br from-[#005380] to-[#0085CC] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">{step.step}</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">{step.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
            </Card>
          ))}
        </div>

        {/* Important Reminders */}
        <Card className="bg-blue-50 border-l-4 border-blue-500">
          <div className="flex items-start gap-4">
            <Shield className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
            <div>
              <h4 className="text-lg font-semibold text-blue-800 mb-2">Important Reminders</h4>
              <ul className="space-y-1 text-blue-700">
                <li>• ArtStay does not process cash or third-party refunds</li>
                <li>• Repeat abuse of refund policy may result in account suspension</li>
                <li>• Return shipping cost is borne by the customer, unless item arrived damaged and was reported within 24 hours</li>
              </ul>
            </div>
          </div>
        </Card>
      </ContentSection>

      <ContentSection background="white" id="refund-form">
        <div className="max-w-4xl mx-auto">
          <Card gradient className="text-center p-12">
            <FileText className="w-16 h-16 text-[#0085CC] mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-[#005380] mb-6">Need Help?</h2>
            <p className="text-lg text-gray-600 mb-8 italic">
              For refund or return requests, contact our support team
            </p>

            <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mb-8 max-w-md mx-auto">
              <div className="bg-white rounded-xl p-6 text-center">
                <Mail className="w-8 h-8 text-[#0085CC] mb-4 mx-auto" />
                <h4 className="font-semibold text-gray-800 mb-2">Email Support</h4>
                <p className="text-sm text-gray-600 mb-3">Send your refund request with all required documentation</p>
                <p className="text-lg font-medium text-[#0085CC] mb-2">support@kashmirartstay.com</p>
                <p className="text-sm text-gray-500">Response Time: Within 2 business days</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:support@kashmirartstay.com"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#005380] to-[#0085CC] text-white font-semibold rounded-xl hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Email Support Now
              </a>
            </div>

            {/* Final Reminder */}
            <div className="mt-8 p-6 bg-gray-100 rounded-xl">
              <h4 className="font-semibold text-gray-800 mb-2">🧭 Reminder</h4>
              <p className="text-sm text-gray-600 italic">
                By submitting a refund request, you acknowledge your acceptance of the conditions outlined in our Refund & Return Eligibility Policy. 
                We prioritize platform integrity, artisan protection, and responsible tourism commitments.
              </p>
            </div>
          </Card>
        </div>
      </ContentSection>
    </>
  )
}