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
      <CenterSection className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10 px-4 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8 md:py-12">
        {/* <div className="col-span-2">
          <ArtsayComingSoon />
        </div> */}
        <ArtisanForm />
        <div className="col-span-1 lg:col-span-1 grid gap-3 sm:gap-4 md:gap-5 lg:gap-6 content-start lg:content-end">
          <h2 className="font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-secondary leading-tight">
            ArtStay Craft School - Vacation with Kashmiri Artisan
          </h2>
          <h3 className="font-heading text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-snug">
            Embark on a journey of craft learning, support & connection with
            Kashmir artisans.
          </h3>
          <p className="font-text text-sm sm:text-base md:text-lg leading-relaxed">
            Welcome to ArtStay, De Koshur Crafts&apos; signature marketplace where Kashmir&apos;s legendary craftsmanship meets immersive tourism. Home to over 350,000 artisans, this creative sanctuary celebrates heritage through handmade pashmina, walnut wood, papier-mâché, and copper art.
            Recognized as a UNESCO Creative City and a World Crafts City by WCC, ArtStay honors Kashmir&apos;s timeless legacy.
          </p>
          <p className="font-text text-sm sm:text-base md:text-lg leading-relaxed">Located along the historic Silk Route, it revives ancient trade, offering visitors an unforgettable cultural experience.
            Stay in artisan-built lodgings, witness live craft, and explore curated exhibits.</p>
          <p className="font-text text-sm sm:text-base md:text-lg leading-relaxed">At ArtStay, you don&apos;t just visit, you belong. <br /> 
            Tradition lives here. Beauty begins here. This is ArtStay.</p>
        </div>
        <div className="col-span-1 lg:col-span-2 grid gap-6 sm:gap-8 md:gap-10 lg:gap-12 mt-4 sm:mt-6 md:mt-8">
          <h2 className="text-center font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold px-4">
            Why Choose{" "}
            <strong className="text-secondary">Kashmir Artisans</strong>
          </h2>
          <div className="flex justify-center px-4">
            <p className="max-w-2xl text-center font-text text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">
              Discover centuries, old techniques passed down through generations. Watch hands speak as you witness the rhythm, patience, and soul in every stitch, and brushstroke. Meet artisans in real environments homes, studios, for an unfiltered, deeply personal experience beyond commercial tourist spaces.            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8 px-4 sm:px-6">
            {ArtisanCardData.map((benefit, index) => (
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
