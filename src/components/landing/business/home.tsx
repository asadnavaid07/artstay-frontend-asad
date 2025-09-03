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
      <CenterSection className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 p-4 md:p-6">
        <BusinessForm />
        <div className="col-span-2 grid place-content-end gap-3 md:gap-3 lg:col-span-1">
          <h2 className="font-heading text-2xl md:text-4xl font-extrabold text-secondary">
            ArtStay Affiliated Craft Store – Marketplace of Verified Crafts
          </h2>
          <h3 className="font-heading text-lg md:text-xl font-bold">
            Comprehensive resource connecting artisans, businesses, & consumers
            within the Kashmiri craft industry.
          </h3>
          <p className="font-text">
            The ArtStay Kashmir Craft Affiliated store listing is a trusted digital gateway connecting consumers, artisans, and businesses across the Kashmiri handicrafts sector. Backed by ArtStay and authenticated by the Hamadan Craft Revival Foundation (HCRF), it ensures every listing is verified for quality and authenticity.
          </p>
          <p>
            Search by craft, region, or artisan using advanced filters and GPS tools. Whether you&apos;re seeking pashmina, walnut wood, papier-mâché, or copperware, you&apos;ll find genuine artisans and certified craft businesses, locally or globally.
            This affiliated store listing empowers conscious shopping, transparent trade, and artisan dignity.
          </p>
          <p>
            Buy with confidence & Support with purpose. <br />
            The craft of Kashmir deserves a platform of trust.
          </p>
        </div>
        <div className="col-span-2 grid gap-6 md:gap-8">
          <h2 className="text-center font-heading text-2xl md:text-4xl font-extrabold">
            Why Choose{" "}
            <strong className="text-secondary">
              ArtStay Kashmir Craft Affiliated Store Listing
            </strong>
          </h2>
          <div className="flex justify-center">
            <p className="max-w-2xl text-center font-text text-xs md:text-sm">
              The affiliated store listing serve as a trusted source for authentic Kashmiri
              handicrafts, helping to combat the issue of counterfeit products. Powered by ArtStay & Certified by Hamadan Craft Revival Foundation. The World&apos;s First & Largest Handicrafts–Tourism Convergence Program, dedicated to Kashmir valley (India).
            </p>
          </div>
          <div className="grid gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {BusinessCardData.map((benefit, index) => (
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