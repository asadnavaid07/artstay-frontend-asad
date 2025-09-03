import HeroSection from "~/components/footer_components/ui/hero-section"
import ContentSection from "~/components/footer_components/ui/content-section"
import DashboardPreview from "~/components/footer_components/affiliate/dashboard-preview"
import FeatureGrid from "~/components/footer_components/affiliate/feature-grid"


export default function TrackingDashboardPage() {
  const features = [
    {
      icon: "BarChart3",
      title: "Real-time Analytics",
      description: "Track clicks, conversions, and sales data as they happen with live updates every few minutes",
    },
    {
      icon: "Zap",
      title: "Custom Campaign Creation",
      description: "Create and manage multiple campaigns with unique tracking codes for different audiences",
    },
    {
      icon: "TrendingUp",
      title: "Performance Graphing",
      description: "Visualize your performance trends with interactive charts and detailed analytics",
    },
    {
      icon: "Eye",
      title: "Auto-payout Overview",
      description: "Monitor your earnings and upcoming payouts with transparent financial tracking",
    },
    {
      icon: "Smartphone",
      title: "Mobile-friendly Access",
      description: "Access your dashboard anywhere with our responsive mobile interface",
    },
    {
      icon: "Shield",
      title: "Secure Data Protection",
      description: "Your data is protected with enterprise-level security and privacy measures",
    },
  ]

  return (
    <>
      <HeroSection
        title="Transparency You Can Trust"
        subtitle="Analytics Dashboard"
        description="Get complete visibility into your affiliate performance with real-time data, comprehensive analytics, and intuitive reporting tools. Track every click, conversion, and commission with precision."
        ctaText="Access Your Dashboard"
        ctaLink="#dashboard-demo"
        backgroundImage="/images/kashmir.jpg"
      />

      <ContentSection background="white">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#005380] mb-6">Dashboard Features</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto italic">
            Everything you need to track, analyze, and optimize your affiliate performance
          </p>
        </div>

        <FeatureGrid features={features} />
      </ContentSection>

      <ContentSection id="dashboard-demo" background="gradient">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#005380] mb-6">Live Dashboard Preview</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto italic">
            See how your affiliate dashboard will look with real-time data and analytics
          </p>
        </div>

        <DashboardPreview />
      </ContentSection>

      <ContentSection background="white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-[#005380] to-[#0085CC] rounded-3xl p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Tracking?</h2>
            <p className="text-xl mb-8 opacity-90">
              Get instant access to your personalized affiliate dashboard and start monitoring your success
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/apply-affiliate"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#005380] font-semibold rounded-xl hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Get Dashboard Access
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-xl hover:bg-white/30 transition-all duration-300"
              >
                View Demo
              </a>
            </div>
          </div>
        </div>
      </ContentSection>
    </>
  )
}
