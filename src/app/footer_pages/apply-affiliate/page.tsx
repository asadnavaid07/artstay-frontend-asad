
import HeroSection from "~/components/footer_components/ui/hero-section"
import ContentSection from "~/components/footer_components/ui/content-section"
import ApplicationForm from "~/components/footer_components/affiliate/application-form"
import { Clock, CheckCircle, Users, Zap } from "lucide-react"

export default function ApplyAffiliatePage() {
  const steps = [
    {
      number: "01",
      title: "Fill Application Form",
      description: "Complete our simple application with your details and content focus",
      icon: Users,
    },
    {
      number: "02",
      title: "24-48 Hour Review",
      description: "Our team reviews your application and content alignment with our values",
      icon: Clock,
    },
    {
      number: "03",
      title: "Get Approval & Dashboard",
      description: "Receive your approval email with dashboard access and tracking links",
      icon: CheckCircle,
    },
    {
      number: "04",
      title: "Start Sharing & Earning",
      description: "Begin promoting with your unique referral code and start earning commissions",
      icon: Zap,
    },
  ]

  const eligibleApplicants = [
    "Content creators with authentic storytelling",
    "Tour operators focused on cultural experiences",
    "Eco-conscious influencers and sustainability advocates",
    "Ethical fashion & décor bloggers",
    "Cultural organizations and heritage preservationists",
    "Travel enthusiasts with engaged audiences",
  ]

  return (
    <>
      <HeroSection
        title="Start in Minutes"
        subtitle="Affiliate Application"
        description="Join our community of cultural ambassadors and start earning while promoting authentic Kashmiri heritage. Our streamlined application process gets you started quickly with full support."
        backgroundImage="/images/kashmir.jpg"
      />

      <ContentSection background="white">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#005380] mb-6">Simple Application Process</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto italic">
            Get started with our affiliate program in just four easy steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-[#005380] to-[#0085CC] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-white border-2 border-[#0085CC] rounded-full flex items-center justify-center text-sm font-bold text-[#0085CC]">
                  {step.number}
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">{step.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </ContentSection>

      <ContentSection background="gradient">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#005380] mb-8">Who Can Apply?</h2>
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                We welcome applications from passionate individuals and organizations who share our commitment to
                cultural preservation and ethical tourism.
              </p>
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Perfect for:</h3>
                <div className="space-y-3">
                  {eligibleApplicants.map((applicant, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-[#0085CC] flex-shrink-0" />
                      <span className="text-gray-700">{applicant}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <ApplicationForm />
        </div>
      </ContentSection>

      <ContentSection background="white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-[#005380]/5 to-[#0085CC]/10 rounded-3xl p-12 border border-[#0085CC]/20">
            <h2 className="text-3xl md:text-4xl font-bold text-[#005380] mb-6">Application Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#005380] to-[#0085CC] rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Fast Review</h3>
                <p className="text-gray-600 text-sm">24-48 hour application review process</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#005380] to-[#0085CC] rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">High Approval Rate</h3>
                <p className="text-gray-600 text-sm">95% applications get approved</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#005380] to-[#0085CC] rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Instant Access</h3>
                <p className="text-gray-600 text-sm">Immediate dashboard and tools access</p>
              </div>
            </div>
          </div>
        </div>
      </ContentSection>
    </>
  )
}
