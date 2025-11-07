"use client";

import { CenterSection } from "~/components/common/center-section";
import { BusinessCardData } from "~/constants/card";
import { Banner } from "~/components/common/banner";
import { businessBanner } from "~/constants/banner";
import { BusinessForm } from "~/components/landing/business/form";

export const BusinessLanding = () => {
  // const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentBannerIndex((prevIndex) =>
  //       prevIndex === businessBanner.length - 1 ? 0 : prevIndex + 1
  //     );
  //   }, 5000); // Change banner every 5 seconds

  //   return () => clearInterval(interval);
  // }, []);

  return (
    <>
      <div className="relative">
        <Banner banner={businessBanner} />
        {/* <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
          {businessBanner.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full transition-all ${
                index === currentBannerIndex
                  ? "bg-white w-4"
                  : "bg-white/50"
              }`}
              onClick={() => setCurrentBannerIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div> */}
      </div>
      <CenterSection className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10 px-4 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8 md:py-12">
        <BusinessForm />
        <div className="col-span-1 lg:col-span-1 grid gap-3 sm:gap-4 md:gap-5 lg:gap-6 content-start lg:content-end">
          <h2 className="font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-secondary leading-tight">
            ArtStay Affiliated Craft Store – Marketplace of Verified Crafts
          </h2>
          <h3 className="font-heading text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-snug">
            Comprehensive resource connecting artisans, businesses, & consumers
            within the Kashmiri craft industry.
          </h3>
          <p className="font-text text-sm sm:text-base md:text-lg leading-relaxed">
            The ArtStay Kashmir Craft Affiliated store listing is a trusted digital gateway connecting consumers, artisans, and businesses across the Kashmiri handicrafts sector. Backed by ArtStay and authenticated by the Hamadan Craft Revival Foundation (HCRF), it ensures every listing is verified for quality and authenticity.
          </p>
          <p className="font-text text-sm sm:text-base md:text-lg leading-relaxed">
            Search by craft, region, or artisan using advanced filters and GPS tools. Whether you&apos;re seeking pashmina, walnut wood, papier-mâché, or copperware, you&apos;ll find genuine artisans and certified craft businesses, locally or globally.
            This affiliated store listing empowers conscious shopping, transparent trade, and artisan dignity.
          </p>
          <p className="font-text text-sm sm:text-base md:text-lg leading-relaxed">
            Buy with confidence & Support with purpose. <br />
            The craft of Kashmir deserves a platform of trust.
          </p>
        </div>
        <div className="col-span-1 lg:col-span-2 grid gap-6 sm:gap-8 md:gap-10 lg:gap-12 mt-4 sm:mt-6 md:mt-8">
          <h2 className="text-center font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold px-4">
            Why Choose{" "}
            <strong className="text-secondary">
              ArtStay Kashmir Craft Affiliated Store Listing
            </strong>
          </h2>
          <div className="flex justify-center px-4">
            <p className="max-w-2xl text-center font-text text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">
              The affiliated store listing serve as a trusted source for authentic Kashmiri
              handicrafts, helping to combat the issue of counterfeit products. Powered by ArtStay & Certified by Hamadan Craft Revival Foundation. The World&apos;s First & Largest Handicrafts–Tourism Convergence Program, dedicated to Kashmir valley (India).
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8 px-4 sm:px-6">
            {BusinessCardData.map((benefit, index) => (
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