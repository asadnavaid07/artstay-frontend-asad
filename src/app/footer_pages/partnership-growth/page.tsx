import HeroSection from "~/components/footer_components/ui/hero-section"
import ContentSection from "~/components/footer_components/ui/content-section"
import PartnershipOpportunities from "~/components/footer_components/vendor/partnership-opportunities"

export default function PartnershipGrowthPage() {
  return (
    <>
      <HeroSection
        title="Grow With ArtStay"
        subtitle="Partnership Growth"
        description="Scale your craft business through strategic partnerships, international collaborations, and exclusive growth opportunities. Join our elite network of featured vendors and expand your reach globally."
        backgroundImage="/images/kashmir.jpg"
        ctaText="Request Growth Call"
        ctaLink="#"
      />

      <ContentSection background="white" padding="lg">
        <PartnershipOpportunities />
      </ContentSection>
    </>
  )
}
