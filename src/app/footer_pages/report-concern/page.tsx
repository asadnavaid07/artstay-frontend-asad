import HeroSection from "~/components/footer_components/ui/hero-section"
import ContentSection from "~/components/footer_components/ui/content-section"
import ContactForm from "~/components/footer_components/support/contact-form"
import PolicyCard from "~/components/footer_components/support/policy-card"
import Card from "~/components/footer_components/ui/card"
import { AlertTriangle, Shield, Eye, Clock, Lock, UserCheck } from "lucide-react"

export default function ReportConcernPage() {
  const reportableIssues = [
    {
      icon: AlertTriangle,
      title: "Counterfeit Craft Listings",
      description: "Products falsely claiming to be authentic Kashmiri crafts or misrepresenting artisan origins",
      examples: ["Fake GI certification", "Mass-produced items sold as handmade", "Incorrect artisan attribution"],
    },
    {
      icon: Eye,
      title: "Misleading Tourism Information", 
      description: "Inaccurate tour descriptions, false cultural claims, or misrepresented experiences",
      examples: ["Exaggerated tour features", "Incorrect historical information", "Fake reviews or testimonials"],
    },
    {
      icon: UserCheck,
      title: "Vendor Misconduct",
      description: "Inappropriate behavior, policy violations, or unethical practices by platform vendors",
      examples: ["Harassment of customers", "Breach of vendor agreement", "Quality standard violations"],
    },
    {
      icon: Lock,
      title: "Privacy Violations",
      description: "Unauthorized use of personal data, privacy policy breaches, or data security concerns", 
      examples: ["Unauthorized data sharing", "Privacy policy violations", "Security breaches"],
    },
    {
      icon: Shield,
      title: "Discrimination or Inaccessibility",
      description: "Unfair treatment based on protected characteristics or accessibility barriers",
      examples: ["Discriminatory practices", "Accessibility barriers", "Unfair treatment"],
    },
    {
      icon: AlertTriangle,
      title: "Technical Issues",
      description: "Platform functionality problems, payment processing errors, or system outages",
      examples: ["Website errors", "Payment failures", "Service disruptions"],
    },
  ]

  const reportingProcess = [
    {
      step: "1",
      title: "Submit Report",
      description: "Use our secure form or email with detailed information about the concern",
    },
    {
      step: "2",
      title: "Initial Review",
      description: "Our team acknowledges receipt within 24 hours and begins preliminary assessment",
    },
    {
      step: "3",
      title: "Investigation",
      description: "Thorough investigation conducted with all relevant parties while maintaining confidentiality",
    },
    {
      step: "4",
      title: "Resolution",
      description: "Appropriate action taken and reporter notified of outcome within 72 hours",
    },
  ]

  const protections = [
    "Complete confidentiality of reporter identity",
    "Anonymous reporting options available",
    "No retaliation policy for good faith reports",
    
    "Regular updates on investigation progress",
    "Protection of whistleblowers and witnesses",
  ]

  return (
    <>
      <HeroSection
        title="Speak Up Safely"
        subtitle="Report a Concern"
        description="Your voice matters in maintaining the integrity of our platform. We provide safe, confidential channels to report any concerns about our community standards."
        backgroundImage="/images/kashmir.jpg"
      />

      <ContentSection background="white">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#005380] mb-6">What You Can Report</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto italic">
            We take all concerns seriously and investigate every report thoroughly
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {reportableIssues.map((issue, index) => (
            <Card key={index} hover gradient className="h-full">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#005380] to-[#0085CC] rounded-xl flex items-center justify-center flex-shrink-0">
                  <issue.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">{issue.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">{issue.description}</p>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-semibold text-gray-800 text-sm">Examples:</h4>
                {issue.examples.map((example, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#0085CC] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600 text-sm">{example}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <PolicyCard title="Reporting Guidelines" type="info">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3">When to Report:</h4>
              <ul className="space-y-2 text-sm">
                <li>• Suspected policy violations</li>
                <li>• Ethical concerns about vendors</li>
                <li>• Misleading product information</li>
                <li>• Discrimination or harassment</li>
                <li>• Privacy or security issues</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Information to Include:</h4>
              <ul className="space-y-2 text-sm">
                <li>• Specific details about the incident</li>
                <li>• Relevant URLs, order numbers, or IDs</li>
                <li>• Screenshots or documentation</li>
                <li>• Date and time of occurrence</li>
                <li>• Any witnesses or additional context</li>
              </ul>
            </div>
          </div>
        </PolicyCard>
      </ContentSection>

      <ContentSection background="gradient">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#005380] mb-6">Reporting Process</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto italic">
            Our structured approach ensures thorough investigation while protecting all parties
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {reportingProcess.map((step, index) => (
            <Card key={index} hover className="text-center h-full">
              <div className="w-16 h-16 bg-gradient-to-br from-[#005380] to-[#0085CC] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">{step.step}</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">{step.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
            </Card>
          ))}
        </div>

        <Card className="bg-white">
          <div className="text-center mb-8">
            <Clock className="w-12 h-12 text-[#0085CC] mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-[#005380] mb-4">Response Timeline</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-gray-50 rounded-xl">
              <div className="text-2xl font-bold text-[#0085CC] mb-2">24 Hours</div>
              <div className="text-sm text-gray-600">Initial acknowledgment and case number assignment</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-xl">
              <div className="text-2xl font-bold text-[#0085CC] mb-2">72 Hours</div>
              <div className="text-sm text-gray-600">Complete investigation and resolution</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-xl">
              <div className="text-2xl font-bold text-[#0085CC] mb-2">Ongoing</div>
              <div className="text-sm text-gray-600">Follow-up and monitoring as needed</div>
            </div>
          </div>
        </Card>
      </ContentSection>

      <ContentSection background="white" id="report-form">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <Card hover className="p-8">
              <Shield className="w-12 h-12 text-[#0085CC] mb-6" />
              <h3 className="text-xl font-semibold text-[#005380] mb-4">Reporter Protections</h3>
              <div className="space-y-3">
                {protections.map((protection, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#0085CC] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600 text-sm">{protection}</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card hover className="p-8">
              <Lock className="w-12 h-12 text-[#0085CC] mb-6" />
              <h3 className="text-xl font-semibold text-[#005380] mb-4">Data Security</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#0085CC] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-600 text-sm">End-to-end encryption of all report data</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#0085CC] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-600 text-sm">Secure handling of all submitted information</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#0085CC] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-600 text-sm">Limited access to authorized personnel only</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#0085CC] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-600 text-sm">Regular security audits and updates</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#0085CC] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-600 text-sm">Compliance with global data protection standards</span>
                </div>
              </div>
            </Card>

            <PolicyCard title="No Retaliation Policy" type="success">
              <p className="text-sm leading-relaxed">
                ArtStay strictly prohibits retaliation against anyone who reports concerns in good faith. This
                protection extends to customers, vendors, affiliates, and employees. Any retaliation will result in
                immediate action including account termination.
              </p>
            </PolicyCard>
          </div>

          <ContactForm
            title="Submit Your Report"
            description="Provide detailed information about your concern. All reports are handled confidentially."
            formType="report"
            showAnonymous={true}
          />
        </div>
      </ContentSection>

      <ContentSection background="gradient">
        <div className="max-w-4xl mx-auto">
          <Card className="text-center p-12 bg-white">
            <AlertTriangle className="w-16 h-16 text-[#0085CC] mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-[#005380] mb-6">Emergency Situations</h2>
            <p className="text-lg text-gray-600 mb-8 italic">
              For urgent safety concerns or situations requiring immediate attention, contact us directly
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-red-50 rounded-xl p-6 border border-red-200">
                <h4 className="font-semibold text-red-800 mb-2">Immediate Safety Concerns</h4>
                <p className="text-sm text-red-700 mb-3">Physical safety, threats, or dangerous situations</p>
                <p className="text-sm font-medium text-red-800">Call: +91 88992 28242</p>
              </div>

              <div className="bg-amber-50 rounded-xl p-6 border border-amber-200">
                <h4 className="font-semibold text-amber-800 mb-2">Urgent Platform Issues</h4>
                <p className="text-sm text-amber-700 mb-3">Security breaches or critical system problems</p>
                <p className="text-sm font-medium text-amber-800">Email: urgent@artstayglobal.com</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:report@artstayglobal.com"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#005380] to-[#0085CC] text-white font-semibold rounded-xl hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Email Report Team
              </a>
              <a
                href="/help-support"
                className="inline-flex items-center justify-center px-8 py-4 bg-white border-2 border-[#0085CC] text-[#0085CC] font-semibold rounded-xl hover:bg-[#0085CC] hover:text-white transition-all duration-300"
              >
                General Support
              </a>
            </div>

            <div className="mt-8 p-4 bg-green-50 rounded-xl border border-green-200">
              <p className="text-sm text-green-800">
                <strong>Thank you</strong> for helping us maintain a safe, authentic, and trustworthy platform for
                everyone.
              </p>
            </div>
          </Card>
        </div>
      </ContentSection>
    </>
  )
}
