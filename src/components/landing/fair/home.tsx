// import Image from "next/image";
import { CenterSection } from "~/components/common/center-section";
import { FairCardData } from "~/constants/card";
import { Banner } from "~/components/common/banner";
import { fairBanner } from "~/constants/banner";
import { FairForm } from "~/components/landing/fair/form";

export const FairLanding = () => {
  return (
    <>
      <Banner banner={fairBanner} />
      <CenterSection className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10 px-4 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8 md:py-12">
        <FairForm />
        <div className="col-span-1 lg:col-span-1 grid gap-3 sm:gap-4 md:gap-5 lg:gap-6 content-start lg:content-end">
          <h2 className="font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-secondary leading-tight">
          ArtStay Craft Fair – Celebration of Kashmiri Artisans
          </h2>
          <h3 className="font-heading text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-snug">
          Vibrant events bringing together artisans & craft enthusiasts, platform celebrating contemporary crafts
          </h3>
          <p className="font-text text-sm sm:text-base md:text-lg leading-relaxed">
          Kashmir Craft Fair is a vibrant celebration of Kashmir's living artistic heritage, curated under ArtStay, the world's first and largest platform dedicated to handicrafts–tourism convergence. These fairs serve as dynamic meeting grounds where artisans, collectors, designers, and conscious travelers come together to witness, appreciate, and invest in Kashmir's timeless craft traditions.


</p>
<p className="font-text text-sm sm:text-base md:text-lg leading-relaxed">Each event blends the energy of a cultural festival with the depth of a heritage museum. Visitors explore handwoven textiles, intricately carved walnut wood, shimmering copperware, fine jewelry, papier-mâché, and more, each piece reflecting Kashmir's layered history and global artistic influences.

Beyond shopping, the fairs host live demonstrations, artisan talks, interactive workshops, and cultural performances, creating immersive, educational, and community centered experiences.

Whether held in Srinagar's majestic gardens, urban galleries, or international venues, Kashmir Craft Fair bridges local traditions with global appreciation, empowering artisans while preserving their craft legacies.
</p>
<p className="font-text text-sm sm:text-base md:text-lg leading-relaxed">This is not just an exhibition. <br />
It is Kashmir, unfolding through the hands that shape it.</p>
        </div>
        <div className="col-span-1 lg:col-span-2 grid gap-6 sm:gap-8 md:gap-10 lg:gap-12 mt-4 sm:mt-6 md:mt-8">
          <h2 className="text-center font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold px-4">
            Why Choose{" "}
            <strong className="text-secondary">Kashmir Craft Fair/Exhibition</strong>
          </h2>
          <div className="flex justify-center px-4">
            <p className="max-w-2xl text-center font-text text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">
            Your participation helps sustain traditional crafts, providing artisans with a platform to display their work and ensuring these age-old practices are preserved for future generations. A Cultural Showcase by ArtStay. The World's First & Largest Handicrafts–Tourism Convergence Program, dedicated to Kashmir valley (India)
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8 px-4 sm:px-6">
            {FairCardData.map((benefit, index) => (
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
