// import Image from "next/image";
import { CenterSection } from "~/components/common/center-section";
import { PlannerCardData } from "~/constants/card";
import { Banner } from "~/components/common/banner";
import { plannerBanner } from "~/constants/banner";
import { PlannerForm } from "~/components/landing/planner/form";

export const PlannerLanding = () => {
  return (
    <>
      <Banner banner={plannerBanner} />
      <CenterSection className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 p-4 md:p-6">
        <PlannerForm />
        <div className="col-span-2 grid place-content-end gap-3 md:gap-3 lg:col-span-1">
          <h2 className="font-heading text-2xl md:text-4xl font-extrabold text-secondary">
            ArtStay Travel Planner – Curated Itineraries with Kashmiri Insight
          </h2>
          <h3 className="font-heading text-lg md:text-xl font-bold">
            Your complete guide to authentic Kashmiri experiences
          </h3>
          <p className="font-text">
            Kashmir Travel Planner is your complete companion for designing immersive, ethical, and unforgettable journeys through the Kashmir Valley. Whether you&apos;re dreaming of artisan workshops, Sufi shrines, houseboat dining, mountain retreats, or heritage walks, our planner helps you craft an itinerary that blends authenticity, comfort, and conscious travel.
          </p>
          <p>Tailor your trip with bespoke add-ons like private Shikara rides on Dal Lake or cooking classes with local Wazwan chefs. Explore offbeat trails to hidden Sufi shrines or join artisan-led sessions crafting Pashmina shawls. Opt for wellness retreats with yoga amidst pine forests, photography tours capturing Kashmir’s ethereal landscapes, or stargazing nights in Gulmarg.</p>
          <p>Our planner integrates these unique elements, ensuring a journey that reflects your interests while supporting local communities. From serene houseboat stays to adventurous treks and cultural festivals, every itinerary blends authenticity, eco-conscious travel, and personal fulfillment. Customize your pace with guided nature walks or leisurely heritage tours, immersing in Kashmir’s rich tapestry. Let us craft a memorable exploration of the valley’s soul, tailored to your desires, with options for family adventures or solo retreats, making every moment a celebration of its timeless beauty and traditions.</p>
          <p>Discover eco-friendly stays, curated craft villages, and local culinary gems, all while moving through the valley via Shikaras, guided walks, bicycles, or low-impact vehicles.

This planner ensures that every leg of your journey supports local artisans, respects Kashmir&apos;s traditions, and honors the natural environment.
</p>
          <p>From slow travel to soulful exploration. <br />
Kashmir Travel Planner turns every visit into a meaningful cultural experience.</p>
        </div>
        <div className="col-span-2 grid gap-6 md:gap-8">
          <h2 className="text-center font-heading text-2xl md:text-4xl font-extrabold">
            Why Use Our <strong className="text-secondary">Travel Planner</strong>
          </h2>
          <div className="flex justify-center">
            <p className="max-w-2xl text-center font-text text-xs md:text-sm">
              We handle the logistics so you can focus on experiencing Kashmir&apos;s magic - 
              all while ensuring your visit benefits local communities. A Signature Journey Design Experience by ArtStay. The World&apos;s First & Largest Handicrafts–Tourism Convergence Program, Dedicated to Kashmir Valley (India).
            </p>
          </div>

          <div className="grid gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {PlannerCardData.map((benefit, index) => (
              <div
                className="group grid place-items-center gap-4 rounded-lg border p-6 transition-colors hover:bg-primary"
                key={index}
              >
                {/* <div className="relative h-16 w-16">
                  <Image
                    src={benefit.image}
                    alt={benefit.title}
                    fill
                    className="transition-colors [&>stroke]:fill-white group-hover:[&>stroke]:fill-white"
                    sizes="100%"
                  />
                </div> */}
                <h4 className="max-w-[13rem] text-center font-heading text-base md:text-xl font-bold text-primary transition-colors group-hover:text-white">
                  {benefit.title}
                </h4>
                <p className="text-center font-text text-xs md:text-base transition-colors group-hover:text-white">
                  {benefit.des}
                </p>
              </div>
            ))}
          </div>
        </div>
      </CenterSection>
    </>
  );
};