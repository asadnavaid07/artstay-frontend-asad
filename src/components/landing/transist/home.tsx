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
      <CenterSection className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 p-4 md:p-6">
        <TransitForm />
        <div className="col-span-2 grid place-content-end gap-3 md:gap-3 lg:col-span-1">
          <h2 className="font-heading text-2xl md:text-4xl font-extrabold text-secondary">
            ArtStay Eco Transit – Green Mobility through Kashmiri Landscapes
          </h2>
          <h3 className="font-heading text-lg md:text-xl font-bold">
            Sustainable transportation through Kashmir&apos;s majestic landscapes
          </h3>
          <p className="font-text">
            Kashmir Eco Transit offers an environmentally responsible way to explore the Valley’s stunning landscapes and heritage. Travel across Kashmir using eco-conscious cars, motorcycles, bicycles, handcrafted Shikaras, heritage carts, and guided walking circuits.



          </p>
          <p>Embark on eco-friendly treks through Kashmir’s alpine meadows, guided by local experts. Cycle along scenic trails near Gulmarg’s snow-capped peaks, or paddle eco-kayaks on serene lakes. Discover hidden waterfalls and organic farms, supporting local livelihoods. Enjoy sunset tours in electric carts, exploring heritage sites with minimal impact. These adventures promote sustainability, connect you with nature, and showcase Kashmir’s untouched beauty. Every journey fosters environmental awareness and preserves the valley’s cultural essence for future generations.</p>
          <p>Each route connects artisan villages, scenic sites, and cultural landmarks while minimizing environmental impact.

Whether gliding on Dal Lake or cycling through saffron fields, your journey supports sustainability and local livelihoods.</p>
          <p>Kashmir Eco Transit blends comfort, tradition, and eco-awareness <br /> Ensuring every mile you travel preserves the spirit and beauty of the land.
</p>

        </div>
        <div className="col-span-2 grid gap-6 md:gap-8">
          <h2 className="text-center font-heading text-2xl md:text-4xl font-extrabold">
            Why Choose <strong className="text-secondary">Eco Transit</strong>
          </h2>
          <div className="flex justify-center">
            <p className="max-w-2xl text-center font-text text-xs md:text-sm">
              We combine environmental responsibility with reliable transportation, 
              offering the greenest way to explore Kashmir. A Signature Green Mobility Experience by ArtStay. The World’s First & Largest Handicrafts–Tourism Convergence Program, Dedicated to Kashmir Valley (India).
            </p>
          </div>

          <div className="grid gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {TransitCardData.map((benefit, index) => (
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