import HeroSection from "~/components/footer_components/ui/hero-section"
import ContentSection from "~/components/footer_components/ui/content-section"
import TierCard from "~/components/footer_components/affiliate/tier-card"
import { Gift, TrendingUp, CreditCard } from "lucide-react"

export default function CommissionTiersPage() {
  const tiers = [
    {
      tier: 1,
      title: "Starter",
      commission: "5%",
      range: "$0 - $999 monthly sales",
      features: [
        "Basic tracking dashboard",
        "Standard marketing materials",
        "Email support",
        "Monthly payouts",
        "Referral code access",
      ],
    },
    {
      tier: 2,
      title: "Professional",
      commission: "7.5%",
      range: "$1,000 - $4,999 monthly sales",
      features: [
        "Advanced analytics dashboard",
        "Premium marketing materials",
        "Priority email support",
        "Bi-weekly payouts",
        "Custom landing pages",
        "Performance bonuses",
      ],
      isPopular: true,
    },
    {
      tier: 3,
      title: "Elite",
      commission: "10%",
      range: "$5,000+ monthly sales",
      features: [
        "Full analytics suite",
        "Exclusive marketing content",
        "Dedicated account manager",
        "Weekly payouts",
        "White-label options",
        "VIP event invitations",
        "Custom commission negotiations",
      ],
    },
  ]

  const bonusOpportunities = [
    {
      icon: Gift,
      title: "Seasonal Festival Bonus",
      description: "Earn up to +3% additional commission during major festivals and cultural celebrations",
    },
    {
      icon: TrendingUp,
      title: "Referral Streaks",
      description: "3 months of steady conversions = automatic loyalty raise and bonus tier benefits",
    },
    {
      icon: CreditCard,
      title: "Payment Flexibility",
      description: "Monthly payments via Stripe or direct bank transfer with full dashboard transparency",
    },
  ]

  return (
    <>
      <HeroSection
        title="Your Effort. Your Earnings."
        subtitle="Commission Structure"
        description="Our transparent tier-based system rewards your dedication with increasing commission rates and exclusive benefits. The more you promote authentic Kashmiri culture, the more you earn."
        backgroundImage="/images/kashmir.jpg"
      />

      <ContentSection background="white">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#005380] mb-6">Commission Tiers</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto italic">
            Choose your path to success with our performance-based commission structure
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {tiers.map((tier) => (
            <TierCard key={tier.tier} {...tier} />
          ))}
        </div>

        {/* <div className="bg-gradient-to-br from-[#005380]/5 to-[#0085CC]/10 rounded-3xl p-8 border border-[#0085CC]/20">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Tier Advancement</h3>
            <p className="text-gray-600">
              Tiers are calculated based on your previous month&apos;s sales performance. Advance automatically when you hit
              the next tier threshold.
            </p>
          </div>
        </div> */}
      </ContentSection>

      <ContentSection background="gradient">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#005380] mb-6">Bonus Opportunities</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto italic">
            Maximize your earnings with additional bonus programs and incentives
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {bonusOpportunities.map((bonus, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-105 text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#005380] to-[#0085CC] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <bonus.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{bonus.title}</h3>
              <p className="text-gray-600 leading-relaxed">{bonus.description}</p>
            </div>
          ))}
        </div>
      </ContentSection>

      <ContentSection background="white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-[#005380] to-[#0085CC] rounded-3xl p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Earning Today</h2>
            <p className="text-xl mb-8 opacity-90">
              Join our affiliate program and start earning commissions while promoting authentic Kashmiri heritage
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/apply-affiliate"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#005380] font-semibold rounded-xl hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Apply Now
              </a>
              <a
                href="/tracking-dashboard"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-xl hover:bg-white/30 transition-all duration-300"
              >
                View Dashboard Demo
              </a>
            </div>
          </div>
        </div>
      </ContentSection>
    </>
  )
}
