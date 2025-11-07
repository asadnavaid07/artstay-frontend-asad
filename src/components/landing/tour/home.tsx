// import Image from "next/image";
import { CenterSection } from "~/components/common/center-section";
import { TourCardData } from "~/constants/card";
import { Banner } from "~/components/common/banner";
import { tourBanner } from "~/constants/banner";
import { TourForm } from "~/components/landing/tour/form";

export const TourLanding = () => {
  return (
    <>
      <Banner banner={tourBanner} />
      <CenterSection className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10 px-4 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8 md:py-12">
        <TourForm />
        <div className="col-span-1 lg:col-span-1 grid gap-3 sm:gap-4 md:gap-5 lg:gap-6 content-start lg:content-end">
          <h2 className="font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-secondary leading-tight">
            ArtStay Kashmir Tour – Experience the Valley's Living Culture
          </h2>
          <h3 className="font-heading text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-snug">
            Kashmir has surged to become the most Googled Travel Destination,
            dethroning the iconic Swiss Alps.
          </h3>
          <p className="font-text text-sm sm:text-base md:text-lg leading-relaxed">
            This curated experience blends adventure, nature, cuisine, and wellness, all rooted in authentic Kashmiri traditions and values.
            As Kashmir rises to global prominence now the most Googled travel destination, surpassing the Swiss Alps, the Kashmir Traditional Tour offers travelers more than just scenic beauty.




          </p>
          <p className="font-text text-sm sm:text-base md:text-lg leading-relaxed">Dive into Kashmir's heritage with hands-on workshops on Pashmina weaving and papier-mâché art. Explore ancient Shikara rides on Dal Lake, learning local folklore from skilled boatmen. Enjoy traditional music and dance performances under starlit skies, reflecting the valley's soul. Visit historic Mughal gardens with guided tours, uncovering tales of past royalty. These experiences empower local artisans, preserve traditions, and offer an authentic connection to Kashmir's living culture, making your journey a meaningful celebration of its timeless artistry and natural beauty.</p>
          <p className="font-text text-sm sm:text-base md:text-lg leading-relaxed">

            Walk through history, dine on wazwan, listen to Sufi echoes, and rest where kings once prayed. Each tour sustains local culture, empowers artisans, and preserves Kashmir's timeless soul.

            This is not just tourism. This is cultural revival through every step you take in Kashmir.</p>
          <p className="font-text text-sm sm:text-base md:text-lg leading-relaxed">See the land. Feel its soul. <br /> Travel Kashmir traditionally.</p>

        </div>
        <div className="col-span-1 lg:col-span-2 grid gap-6 sm:gap-8 md:gap-10 lg:gap-12 mt-4 sm:mt-6 md:mt-8">
          <h2 className="text-center font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold px-4">
            Why Choose{" "}
            <strong className="text-secondary">Kashmir as destination</strong>
          </h2>
          <div className="flex justify-center px-4">
            <p className="max-w-2xl text-center font-text text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">
              Kashmir is a global tourism hub, Numbers tell our story, Welcomes
              1.2 million tourists annually! Kashmir has everything queer
              travelers want. A Signature Cultural & Scenic Journey of Kashmir Valley by ArtStay. The World's First & Largest Handicrafts–Tourism Convergence Program, dedicated to Kashmir valley (India)
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8 px-4 sm:px-6">
            {TourCardData.map((benefit, index) => (
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
