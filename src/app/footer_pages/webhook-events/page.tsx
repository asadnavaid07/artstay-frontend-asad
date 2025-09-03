import HeroSection  from "~/components/footer_components/ui/hero-section"
import  ContentSection  from "~/components/footer_components/ui/content-section"
import {WebhookEvents}  from "~/components/footer_components/developer/webhook-events"


// const webhookFeatures = [
//   {
//     title: "Custom Endpoint Support",
//     description: "Configure your own webhook endpoints with flexible URL patterns",
//     icon: <Webhook className="h-5 w-5 text-amber-600" />,
//   },
//   {
//     title: "Retry Logic",
//     description: "Automatic retry with exponential backoff for failed deliveries",
//     icon: <RefreshCw className="h-5 w-5 text-amber-600" />,
//   },
//   {
//     title: "Signature Verification",
//     description: "HMAC-SHA256 signatures to verify webhook authenticity",
//     icon: <Shield className="h-5 w-5 text-amber-600" />,
//   },
//   {
//     title: "Event Logs",
//     description: "Timestamped event logs with debug testing capabilities",
//     icon: <Clock className="h-5 w-5 text-amber-600" />,
//   },
// ]

// const securityBestPractices = [
//   "Always verify webhook signatures using HMAC-SHA256",
//   "Implement idempotency using unique event IDs",
//   "Use HTTPS endpoints for webhook URLs",
//   "Set appropriate timeout values (recommended: 30 seconds)",
//   "Implement proper error handling and logging",
//   "Store webhook secrets securely in environment variables",
// ]

export default function WebhookEventsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <HeroSection
        title="Stay In Sync"
        subtitle="WebHook Events"
        description="Supported webhooks include vendor events (product.created, inventory.updated, payment.released), affiliate events (conversion.recorded, payment.generated), and tour events (booking.confirmed, cancellation.requested). Features custom endpoint support, retry logic with signature verification, timestamped event logs and debug testing."
        backgroundImage="/images/kashmir.jpg"
      />

      <ContentSection className="py-16">
        <div className="container mx-auto px-4">
          <WebhookEvents />
        </div>
      </ContentSection>
    </div>
  )
}
