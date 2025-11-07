// import Image from "next/image";
import { CenterSection } from "~/components/common/center-section";
import { SafariCardData } from "~/constants/card";
import { SafariForm } from "~/components/landing/safari/form";
import { Banner } from "~/components/common/banner";
import { safariBanner } from "~/constants/banner";

export const SafariLanding = () => {
  return (
    <>
      <Banner banner={safariBanner} />
      <CenterSection className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10 px-4 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8 md:py-12">
        <SafariForm />
        <div className="col-span-1 lg:col-span-1 grid gap-3 sm:gap-4 md:gap-5 lg:gap-6 content-start lg:content-end">
          <h2 className="font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-secondary leading-tight">
           ArtStay Craft Safari – Journey with Kashmiri Artisan
          </h2>
          <h3 className="font-heading text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-snug">
            Guided tours of artisan villages, offering firsthand look at the
            crafting process & opportunities to interact
          </h3>
          <p className="font-text text-sm sm:text-base md:text-lg leading-relaxed">
            Largest Handicrafts–Tourism Convergence Program
            Kashmir Craft Safari is a professionally curated, immersive journey into the artisan heartlands of the Kashmir Valley. Powered by ArtStay, the world&apos;s first and largest platform merging handicrafts with tourism. This experience offers travelers a rare, firsthand encounter with Kashmir&apos;s legendary crafts and the artisans who keep them alive.
          </p>
          <p className="font-text text-sm sm:text-base md:text-lg leading-relaxed">Explore iconic craft villages like Kanihama (kani weaving), Zadibal (papier-mâché), Budgam (walnut carving), and Zainakote (copperware). Witness live demonstrations, interact with artisans, learn ancestral techniques, and shop ethically, directly from the source.

            This initiative is not tourism for entertainment. It&apos;s tourism for preservation. 
          </p>
          {/* <p>Beyond thread and timber lies a truth that each artisan carries a silent library of memory. On these trails, you don&apos;t just see creation, you feel inheritance. The Craft Safari is a pilgrimage to skill, sweat, and ancestral knowing, where generations of wisdom flow through skilled hands.</p>
          <p>Every Safari educates visitors, uplifts artisan families, and ensures that Kashmir&apos;s cultural legacy is celebrated, not commercialized. Through authentic experiences and meaningful connections, we preserve these timeless traditions.

            By choosing Kashmir Craft Safari, travelers don&apos;t just visit Kashmir. They become part of its craft revival, economic dignity, and global recognition.</p>
          
          <p>Craft is not a souvenir. It is a soul. <br /> Come witness the making of both.</p> */}
          
        </div>
        <div className="col-span-1 lg:col-span-2 grid gap-6 sm:gap-8 md:gap-10 lg:gap-12 mt-4 sm:mt-6 md:mt-8">
          <h2 className="text-center font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold px-4">
            Why Choose{" "}
            <strong className="text-secondary">Kashmir Craft Safari </strong>
          </h2>
          <div className="flex justify-center px-4">
            <p className="max-w-2xl text-center font-text text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">
              Participate in responsible tourism that directly benefits local
              communities. Ensure your travel contributes to the preservation of
              cultural heritage and economic sustainability. A Signature Experience of ArtStay. The World&apos;s First & Largest Handicrafts–Tourism Convergence Program, dedicated to Kashmir valley (India).
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8 px-4 sm:px-6">
            {SafariCardData.map((benefit, index) => (
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
