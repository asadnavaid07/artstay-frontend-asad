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
      <CenterSection className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 p-4 md:p-6">
        <TourForm />
        <div className="col-span-2 grid place-content-end gap-3 md:gap-3 lg:col-span-1">
          <h2 className="font-heading text-2xl md:text-4xl font-extrabold text-secondary">
            ArtStay Kashmir Tour – Experience the Valley’s Living Culture
          </h2>
          <h3 className="font-heading text-lg md:text-xl font-bold">
            Kashmir has surged to become the most Googled Travel Destination,
            dethroning the iconic Swiss Alps.
          </h3>
          <p className="font-text">
            This curated experience blends adventure, nature, cuisine, and wellness, all rooted in authentic Kashmiri traditions and values.
            As Kashmir rises to global prominence now the most Googled travel destination, surpassing the Swiss Alps, the Kashmir Traditional Tour offers travelers more than just scenic beauty.




          </p>
          <p>Dive into Kashmir’s heritage with hands-on workshops on Pashmina weaving and papier-mâché art. Explore ancient Shikara rides on Dal Lake, learning local folklore from skilled boatmen. Enjoy traditional music and dance performances under starlit skies, reflecting the valley’s soul. Visit historic Mughal gardens with guided tours, uncovering tales of past royalty. These experiences empower local artisans, preserve traditions, and offer an authentic connection to Kashmir’s living culture, making your journey a meaningful celebration of its timeless artistry and natural beauty.</p>
          <p>

            Walk through history, dine on wazwan, listen to Sufi echoes, and rest where kings once prayed. Each tour sustains local culture, empowers artisans, and preserves Kashmir’s timeless soul.

            This is not just tourism. This is cultural revival through every step you take in Kashmir.</p>
          <p>See the land. Feel its soul. <br /> Travel Kashmir traditionally.</p>

        </div>
        <div className="col-span-2 grid gap-6 md:gap-8">
          <h2 className="text-center font-heading text-2xl md:text-4xl font-extrabold">
            Why Choose{" "}
            <strong className="text-secondary">Kashmir as destination</strong>
          </h2>
          <div className="flex justify-center">
            <p className="max-w-2xl text-center font-text text-xs md:text-sm">
              Kashmir is a global tourism hub, Numbers tell our story, Welcomes
              1.2 million tourists annually! Kashmir has everything queer
              travelers want. A Signature Cultural & Scenic Journey of Kashmir Valley by ArtStay. The World’s First & Largest Handicrafts–Tourism Convergence Program, dedicated to Kashmir valley (India)
            </p>
          </div>

          <div className="grid gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {TourCardData.map((benefit, index) => (
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
