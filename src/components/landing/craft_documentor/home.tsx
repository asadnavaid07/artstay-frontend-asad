"use client";

import { CenterSection } from "~/components/common/center-section";
import { DocumentorCardData } from "~/constants/card";
import { Banner } from "~/components/common/banner";
import { businessBanner } from "~/constants/banner";
import { BookCraftDocumentationSession } from "~/components/landing/craft_documentor/form";

export const DocumentorLanding = () => {
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
        <BookCraftDocumentationSession />
        <div className="col-span-1 lg:col-span-1 grid gap-3 sm:gap-4 md:gap-5 lg:gap-6 content-start lg:content-end">
          <h2 className="font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-secondary leading-tight">
            ArtStay Craft Documenter – Capturing the Soul of Kashmir
          </h2>
          <h3 className="font-heading text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-snug">
            Comprehensive documentation service for both Kashmir's tourism and handicrafts industries connecting artisans, travelers, institutions, and global audiences.
          </h3>
          <p className="font-text text-sm sm:text-base md:text-lg leading-relaxed">
            Craft Documenter by ArtStay is a specialized service dedicated to capturing, preserving, and showcasing the real stories behind Kashmir&apos;s world-renowned crafts. Through guided field documentation, our team works alongside artisans to document techniques, tools, raw materials, ancestral methods, and evolving styles.          </p>
          <p className="font-text text-sm sm:text-base md:text-lg leading-relaxed">
            We create verified digital profiles for artisans, complete with high-quality photos, videos, interviews, lineage histories, and craft certifications. These records are added to a central archival system that empowers buyers, researchers, tourism bodies, and cultural institutions worldwide.
          </p>
          <p className="font-text text-sm sm:text-base md:text-lg leading-relaxed">
            Whether you&apos;re a tourist or an artisan preserving your family legacy. <br />  Craft Documenter ensures your story lives on.
          </p>
        </div>
        <div className="col-span-1 lg:col-span-2 grid gap-6 sm:gap-8 md:gap-10 lg:gap-12 mt-4 sm:mt-6 md:mt-8">
          <h2 className="text-center font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold px-4">
            Why Choose {" "}
            <strong className="text-secondary">
              Craft Documenter
            </strong>
          </h2>
          <div className="flex justify-center px-4">
            <p className="max-w-2xl text-center font-text text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">
              We combine field-based storytelling with research-grade documentation, offering the most trusted archive of Kashmir&apos;s artisan excellence.
A Signature Documentation & Storytelling Experience by ArtStay – The World&apos;s First & Largest Handicrafts–Tourism Convergence Program, Dedicated to Kashmir Valley (India). </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8 px-4 sm:px-6">
            {DocumentorCardData.map((benefit, index) => (
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