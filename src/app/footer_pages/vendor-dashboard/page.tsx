import HeroSection from "~/components/footer_components/ui/hero-section"
import ContentSection from "~/components/footer_components/ui/content-section"
import DashboardFeatures from "~/components/footer_components/vendor/dashboard-features"

export default function VendorDashboardPage() {
  return (
    <>
      <HeroSection
        title="Where Craft Meets Control"
        subtitle="Vendor Dashboard"
        description="Your comprehensive command center for managing your craft business. From product uploads to analytics, everything you need to grow your artisan enterprise is at your fingertips."
        backgroundImage="/images/kashmir.jpg"
        ctaText="Access Dashboard"
        ctaLink="/footer_pages/vendor-login"
      />

      <ContentSection background="white" padding="lg">
        <DashboardFeatures />
      </ContentSection>
    </>
  )
}
