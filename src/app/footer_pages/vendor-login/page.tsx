import HeroSection from "~/components/footer_components/ui/hero-section"
import ContentSection from "~/components/footer_components/ui/content-section"
import LoginForm from "~/components/footer_components/vendor/login-form"
import { Package2, BarChart3, Wallet, Leaf } from "lucide-react"

export default function VendorLoginPage() {
  return (
    <>
      <HeroSection
        title="Your Portal to Growth"
        subtitle="Vendor Login"
        description="Access your personalized vendor dashboard to manage your craft business, track performance, and connect with buyers worldwide. Your journey to sustainable growth starts here."
        backgroundImage="/images/kashmir.jpg"
        ctaText="Need Help?"
        ctaLink="mailto:vendorsupport@artstayglobal.com"
      />

      <ContentSection background="white" padding="lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#005380] mb-4">Welcome Back to Your Dashboard</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed italic">
            Log in to access your comprehensive vendor portal where you can manage products, track orders, view
            analytics, and grow your craft business.
          </p>
        </div>

        <LoginForm />
      </ContentSection>

      <ContentSection background="gradient" padding="lg">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#005380] mb-8">What You Can Do in Your Dashboard</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-gradient-to-br from-[#005380] to-[#0085CC] rounded-xl mx-auto mb-4 flex items-center justify-center">
                <Package2 className="text-white w-6 h-6" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Manage Inventory</h3>
              <p className="text-sm text-gray-600">Upload products, update details, and track stock levels</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-gradient-to-br from-[#005380] to-[#0085CC] rounded-xl mx-auto mb-4 flex items-center justify-center">
                <BarChart3 className="text-white w-6 h-6" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">View Analytics</h3>
              <p className="text-sm text-gray-600">Track sales, performance metrics, and market trends</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-gradient-to-br from-[#005380] to-[#0085CC] rounded-xl mx-auto mb-4 flex items-center justify-center">
                <Wallet className="text-white w-6 h-6" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Payment Tracking</h3>
              <p className="text-sm text-gray-600">Monitor payments, disbursements, and financial reports</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-gradient-to-br from-[#005380] to-[#0085CC] rounded-xl mx-auto mb-4 flex items-center justify-center">
                <Leaf className="text-white w-6 h-6" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Sustainability Score</h3>
              <p className="text-sm text-gray-600">Monitor your environmental impact and ethical practices</p>
            </div>
          </div>
        </div>
      </ContentSection>
    </>
  )
}
