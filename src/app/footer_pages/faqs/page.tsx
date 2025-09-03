import HeroSection from "~/components/footer_components/ui/hero-section"
import ContentSection from "~/components/footer_components/ui/content-section"
import FAQSection from "~/components/footer_components/support/faq-section"
import Card from "~/components/footer_components/ui/card"
import { HelpCircle, MessageCircle, Mail, Phone } from "lucide-react"

export default function FAQsPage() {
  const faqs = [
    {
      question: "How do I track my craft order?",
      answer:
        "You can track your order using the tracking number sent to your email. Log into your account dashboard or use our order tracking page. Updates include order confirmation, processing, shipping, and delivery status.",
      category: "Orders",
    },
    {
      question: "Can I change my tour booking?",
      answer:
        "Yes, tour bookings can be modified up to 48 hours before the scheduled date. Changes may incur additional fees depending on availability and the new tour selected. Contact our support team for assistance.",
      category: "Tours",
    },
    {
      question: "What is a verified craft store?",
      answer:
        "Verified craft stores are artisan partners who have completed our authentication process. This includes identity verification, craft authenticity checks, and quality standards compliance. Look for the blue verification badge.",
      category: "Vendors",
    },
    {
      question: "How do I join the affiliate program?",
      answer:
        "Apply through our affiliate program page by filling out the application form. We review applications within 24-48 hours. Approved affiliates receive dashboard access and unique tracking codes.",
      category: "Affiliates",
    },
    {
      question: "How are artisans verified?",
      answer:
        "Our verification process includes identity documentation, craft skill assessment, workshop visits, and quality sample reviews. Verified artisans receive certification and can display the ArtStay verified badge.",
      category: "Vendors",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards, PayPal, bank transfers, and digital wallets. Payment is processed securely through our encrypted payment gateway. International payments are supported with automatic currency conversion.",
      category: "Orders",
    },
    {
      question: "Can I cancel a tour due to weather?",
      answer:
        "Yes, tours cancelled due to severe weather conditions are fully refundable or can be rescheduled at no extra cost. We monitor weather conditions and will notify you 24 hours in advance if cancellation is necessary.",
      category: "Tours",
    },
    {
      question: "How do I become a vendor on ArtStay?",
      answer:
        "Start by submitting a vendor application with your craft portfolio, business documentation, and workshop details. Our team conducts a review process including quality assessment and authenticity verification before approval.",
      category: "Vendor Onboarding",
    },
    {
      question: "What is the return policy for custom items?",
      answer:
        "Custom and personalized items are generally non-refundable unless they arrive damaged or significantly different from the description. We work closely with artisans to ensure custom orders meet your specifications.",
      category: "Orders",
    },
    {
      question: "How do affiliate commissions work?",
      answer:
        "Affiliates earn tiered commissions (5-10%) based on monthly sales volume. Commissions are tracked in real-time and paid monthly via Stripe or bank transfer. Minimum payout threshold is $50.",
      category: "Affiliates",
    },
    {
      question: "Are your crafts authentic?",
      answer:
        "Yes, all crafts are verified authentic through our rigorous authentication process. We work directly with artisans, conduct workshop visits, and maintain detailed documentation of each craft's origin and creation process.",
      category: "Vendors",
    },
    {
      question: "Can I request a private tour?",
      answer:
        "We offer customized private tours for individuals, families, and groups. Private tours can be tailored to your interests, schedule, and accessibility needs. Contact us for personalized itinerary planning.",
      category: "Tours",
    },
  ]

  const supportOptions = [
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Get instant answers to quick questions",
      availability: "9 AM - 6 PM IST",
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Detailed help for complex issues",
      availability: "24/7 - Response within 24hrs",
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Direct conversation with our team",
      availability: "Schedule via dashboard",
    },
  ]

  return (
    <>
      <HeroSection
        title="Answers at Your Fingertips"
        subtitle="Frequently Asked Questions"
        description="Find quick answers to the most common questions about orders, tours, affiliates, and vendor partnerships. Can't find what you're looking for? Our support team is here to help."
        backgroundImage="/images/kashmir.jpg"
      />

      <ContentSection background="white">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#005380] mb-6">Popular Questions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto italic">
            Search through our comprehensive FAQ database or browse by category
          </p>
        </div>

        <FAQSection faqs={faqs} showSearch={true} showCategories={true} />
      </ContentSection>

      <ContentSection background="gradient" id="support-options">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#005380] mb-6">Still Need Help?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto italic">
            Our support team is ready to assist you with personalized help
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {supportOptions.map((option, index) => (
            <Card key={index} hover className="text-center h-full">
              <div className="w-16 h-16 bg-gradient-to-br from-[#005380] to-[#0085CC] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <option.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{option.title}</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">{option.description}</p>
              <div className="mt-auto">
                <p className="text-sm text-gray-500 font-medium">{option.availability}</p>
              </div>
            </Card>
          ))}
        </div>
      </ContentSection>

      <ContentSection background="white">
        <div className="max-w-4xl mx-auto">
          <Card gradient className="text-center p-12">
            <HelpCircle className="w-16 h-16 text-[#0085CC] mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-[#005380] mb-6">Didn&apos;t Find Your Answer?</h2>
            <p className="text-lg text-gray-600 mb-8 italic">
              We&apos;re constantly updating our FAQ based on user questions. If you have a question that&apos;s not covered, let
              us know!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/help-support"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#005380] to-[#0085CC] text-white font-semibold rounded-xl hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Contact Support Team
              </a>
              <a
                href="mailto:support@artstayglobal.com"
                className="inline-flex items-center justify-center px-8 py-4 bg-white border-2 border-[#0085CC] text-[#0085CC] font-semibold rounded-xl hover:bg-[#0085CC] hover:text-white transition-all duration-300"
              >
                Email Your Question
              </a>
            </div>

            <div className="mt-8 p-4 bg-blue-50 rounded-xl border border-blue-200">
              <p className="text-sm text-blue-800">
                <strong>Tip:</strong> Include your order number or account email for faster assistance
              </p>
            </div>
          </Card>
        </div>
      </ContentSection>
    </>
  )
}
