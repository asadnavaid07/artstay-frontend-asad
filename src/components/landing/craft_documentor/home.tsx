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
      <CenterSection className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 p-4 md:p-6">
        <BookCraftDocumentationSession />
        <div className="col-span-2 grid place-content-end gap-3 md:gap-3 lg:col-span-1">
          <h2 className="font-heading text-2xl md:text-4xl font-extrabold text-secondary">
            ArtStay Craft Documenter – Capturing the Soul of Kashmir
          </h2>
          <h3 className="font-heading text-lg md:text-xl font-bold">
            Comprehensive documentation service for both Kashmir’s tourism and handicrafts industries connecting artisans, travelers, institutions, and global audiences.
          </h3>
          <p className="font-text">
            Craft Documenter by ArtStay is a specialized service dedicated to capturing, preserving, and showcasing the real stories behind Kashmir&apos;s world-renowned crafts. Through guided field documentation, our team works alongside artisans to document techniques, tools, raw materials, ancestral methods, and evolving styles.          </p>
          <p>
            We create verified digital profiles for artisans, complete with high-quality photos, videos, interviews, lineage histories, and craft certifications. These records are added to a central archival system that empowers buyers, researchers, tourism bodies, and cultural institutions worldwide.
          </p>
          <p>
            Whether you&apos;re a tourist or an artisan preserving your family legacy. <br />  Craft Documenter ensures your story lives on.
          </p>
        </div>
        <div className="col-span-2 grid gap-6 md:gap-8">
          <h2 className="text-center font-heading text-2xl md:text-4xl font-extrabold">
            Why Choose {" "}
            <strong className="text-secondary">
              Craft Documenter
            </strong>
          </h2>
          <div className="flex justify-center">
            <p className="max-w-2xl text-center font-text text-xs md:text-sm">
              We combine field-based storytelling with research-grade documentation, offering the most trusted archive of Kashmir&apos;s artisan excellence.
A Signature Documentation & Storytelling Experience by ArtStay – The World&apos;s First & Largest Handicrafts–Tourism Convergence Program, Dedicated to Kashmir Valley (India). </p>
          </div>
          <div className="grid gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {DocumentorCardData.map((benefit, index) => (
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