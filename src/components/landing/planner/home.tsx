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
      <CenterSection className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10 px-4 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8 md:py-12">
        <PlannerForm />
        <div className="col-span-1 lg:col-span-1 grid gap-3 sm:gap-4 md:gap-5 lg:gap-6 content-start lg:content-end">
          <h2 className="font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-secondary leading-tight">
            ArtStay Travel Planner – Curated Itineraries with Kashmiri Insight
          </h2>
          <h3 className="font-heading text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-snug">
            Your complete guide to authentic Kashmiri experiences
          </h3>
          <p className="font-text text-sm sm:text-base md:text-lg leading-relaxed">
            Kashmir Travel Planner is your complete companion for designing immersive, ethical, and unforgettable journeys through the Kashmir Valley. Whether you&apos;re dreaming of artisan workshops, Sufi shrines, houseboat dining, mountain retreats, or heritage walks, our planner helps you craft an itinerary that blends authenticity, comfort, and conscious travel.
          </p>
          <p className="font-text text-sm sm:text-base md:text-lg leading-relaxed">Tailor your trip with bespoke add-ons like private Shikara rides on Dal Lake or cooking classes with local Wazwan chefs. Explore offbeat trails to hidden Sufi shrines or join artisan-led sessions crafting Pashmina shawls. Opt for wellness retreats with yoga amidst pine forests, photography tours capturing Kashmir's ethereal landscapes, or stargazing nights in Gulmarg.</p>
          <p className="font-text text-sm sm:text-base md:text-lg leading-relaxed">Our planner integrates these unique elements, ensuring a journey that reflects your interests while supporting local communities. From serene houseboat stays to adventurous treks and cultural festivals, every itinerary blends authenticity, eco-conscious travel, and personal fulfillment. Customize your pace with guided nature walks or leisurely heritage tours, immersing in Kashmir's rich tapestry. Let us craft a memorable exploration of the valley's soul, tailored to your desires, with options for family adventures or solo retreats, making every moment a celebration of its timeless beauty and traditions.</p>
          <p className="font-text text-sm sm:text-base md:text-lg leading-relaxed">Discover eco-friendly stays, curated craft villages, and local culinary gems, all while moving through the valley via Shikaras, guided walks, bicycles, or low-impact vehicles.

This planner ensures that every leg of your journey supports local artisans, respects Kashmir&apos;s traditions, and honors the natural environment.
</p>
          <p className="font-text text-sm sm:text-base md:text-lg leading-relaxed">From slow travel to soulful exploration. <br />
Kashmir Travel Planner turns every visit into a meaningful cultural experience.</p>
        </div>
        <div className="col-span-1 lg:col-span-2 grid gap-6 sm:gap-8 md:gap-10 lg:gap-12 mt-4 sm:mt-6 md:mt-8">
          <h2 className="text-center font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold px-4">
            Why Use Our <strong className="text-secondary">Travel Planner</strong>
          </h2>
          <div className="flex justify-center px-4">
            <p className="max-w-2xl text-center font-text text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">
              We handle the logistics so you can focus on experiencing Kashmir&apos;s magic - 
              all while ensuring your visit benefits local communities. A Signature Journey Design Experience by ArtStay. The World&apos;s First & Largest Handicrafts–Tourism Convergence Program, Dedicated to Kashmir Valley (India).
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8 px-4 sm:px-6">
            {PlannerCardData.map((benefit, index) => (
              <div
                className="group grid place-items-center gap-3 sm:gap-4 md:gap-5 rounded-lg border p-4 sm:p-5 md:p-6 lg:p-8 transition-all duration-300 hover:bg-primary hover:shadow-lg"
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
                <h4 className="max-w-full text-center font-heading text-sm sm:text-base md:text-lg lg:text-xl font-bold text-primary transition-colors group-hover:text-white px-2">
                  {benefit.title}
                </h4>
                <p className="text-center font-text text-xs sm:text-sm md:text-base lg:text-lg transition-colors group-hover:text-white leading-relaxed px-2">
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