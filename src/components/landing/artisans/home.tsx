"use client"
// import Image from "next/image";
import { Banner } from "~/components/common/banner";
import { CenterSection } from "~/components/common/center-section";
// import { ArtsayComingSoon } from "~/components/common/coming-soon";
import { ArtisanForm } from "~/components/landing/artisans/form";
import { landingBanner } from "~/constants/banner";
import { ArtisanCardData } from "~/constants/card";


export const ArtisanLanding = () => {
  // const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentBannerIndex((prevIndex) => 
  //       prevIndex === landingBanner.length - 1 ? 0 : prevIndex + 1
  //     );
  //   }, 5000); // Change banner every 5 seconds

  //   return () => clearInterval(interval);
  // }, []);

  return (
    <>
      <div className="relative">
        <Banner banner={landingBanner} />

      </div>
      <CenterSection className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 p-4 md:p-6">
        {/* <div className="col-span-2">
          <ArtsayComingSoon />
        </div> */}
        <ArtisanForm />
        <div className="col-span-2 grid place-content-end gap-3 md:gap-3 lg:col-span-1">
          <h2 className="font-heading text-2xl md:text-4xl font-extrabold text-secondary">
            ArtStay Craft School - Vacation with Kashmiri Artisan
          </h2>
          <h3 className="font-heading text-lg md:text-xl font-bold">
            Embark on a journey of craft learning, support & connection with
            Kashmir artisans.
          </h3>
          <p className="font-text">
            Welcome to ArtStay, De Koshur Crafts&apos; signature marketplace where Kashmir&apos;s legendary craftsmanship meets immersive tourism. Home to over 350,000 artisans, this creative sanctuary celebrates heritage through handmade pashmina, walnut wood, papier-mâché, and copper art.
            Recognized as a UNESCO Creative City and a World Crafts City by WCC, ArtStay honors Kashmir&apos;s timeless legacy.
          </p>
          <p className="font-text">Located along the historic Silk Route, it revives ancient trade, offering visitors an unforgettable cultural experience.
            Stay in artisan-built lodgings, witness live craft, and explore curated exhibits.</p>
          <p className="font-text">At ArtStay, you don&apos;t just visit, you belong. <br />
            Tradition lives here. Beauty begins here. This is ArtStay.</p>
        </div>
        <div className="col-span-2 grid gap-6 md:gap-8">
          <h2 className="text-center font-heading text-2xl md:text-4xl font-extrabold">
            Why Choose{" "}
            <strong className="text-secondary">Kashmir Artisans</strong>
          </h2>
          <div className="flex justify-center">
            <p className="max-w-2xl text-center font-text text-xs md:text-sm">
              Discover centuries, old techniques passed down through generations. Watch hands speak as you witness the rhythm, patience, and soul in every stitch, and brushstroke. Meet artisans in real environments homes, studios, for an unfiltered, deeply personal experience beyond commercial tourist spaces.            </p>
          </div>

          <div className="grid gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {ArtisanCardData.map((benefit, index) => (
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
