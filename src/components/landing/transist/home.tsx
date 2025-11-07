// import Image from "next/image";
import { CenterSection } from "~/components/common/center-section";
import { TransitCardData } from "~/constants/card";
import { Banner } from "~/components/common/banner";
import { transitBanner } from "~/constants/banner";
import { TransitForm } from "~/components/landing/transist/form";

export const TransitLanding = () => {
  return (
    <>
      <Banner banner={transitBanner} />
      <CenterSection className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10 px-4 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8 md:py-12">
        <TransitForm />
        <div className="col-span-1 lg:col-span-1 grid gap-3 sm:gap-4 md:gap-5 lg:gap-6 content-start lg:content-end">
          <h2 className="font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-secondary leading-tight">
            ArtStay Eco Transit – Green Mobility through Kashmiri Landscapes
          </h2>
          <h3 className="font-heading text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-snug">
            Sustainable transportation through Kashmir&apos;s majestic landscapes
          </h3>
          <p className="font-text text-sm sm:text-base md:text-lg leading-relaxed">
            Kashmir Eco Transit offers an environmentally responsible way to explore the Valley's stunning landscapes and heritage. Travel across Kashmir using eco-conscious cars, motorcycles, bicycles, handcrafted Shikaras, heritage carts, and guided walking circuits.



          </p>
          <p className="font-text text-sm sm:text-base md:text-lg leading-relaxed">Embark on eco-friendly treks through Kashmir's alpine meadows, guided by local experts. Cycle along scenic trails near Gulmarg's snow-capped peaks, or paddle eco-kayaks on serene lakes. Discover hidden waterfalls and organic farms, supporting local livelihoods. Enjoy sunset tours in electric carts, exploring heritage sites with minimal impact. These adventures promote sustainability, connect you with nature, and showcase Kashmir's untouched beauty. Every journey fosters environmental awareness and preserves the valley's cultural essence for future generations.</p>
          <p className="font-text text-sm sm:text-base md:text-lg leading-relaxed">Each route connects artisan villages, scenic sites, and cultural landmarks while minimizing environmental impact.

Whether gliding on Dal Lake or cycling through saffron fields, your journey supports sustainability and local livelihoods.</p>
          <p className="font-text text-sm sm:text-base md:text-lg leading-relaxed">Kashmir Eco Transit blends comfort, tradition, and eco-awareness <br /> Ensuring every mile you travel preserves the spirit and beauty of the land.
</p>

        </div>
        <div className="col-span-1 lg:col-span-2 grid gap-6 sm:gap-8 md:gap-10 lg:gap-12 mt-4 sm:mt-6 md:mt-8">
          <h2 className="text-center font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold px-4">
            Why Choose <strong className="text-secondary">Eco Transit</strong>
          </h2>
          <div className="flex justify-center px-4">
            <p className="max-w-2xl text-center font-text text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">
              We combine environmental responsibility with reliable transportation, 
              offering the greenest way to explore Kashmir. A Signature Green Mobility Experience by ArtStay. The World's First & Largest Handicrafts–Tourism Convergence Program, Dedicated to Kashmir Valley (India).
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8 px-4 sm:px-6">
            {TransitCardData.map((benefit, index) => (
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