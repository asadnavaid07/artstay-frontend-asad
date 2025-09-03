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
      <CenterSection className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 p-4 md:p-6">
        <FairForm />
        <div className="col-span-2 grid place-content-end gap-3 md:gap-3 lg:col-span-1">
          <h2 className="font-heading text-2xl md:text-4xl font-extrabold text-secondary">
          ArtStay Craft Fair – Celebration of Kashmiri Artisans
          </h2>
          <h3 className="font-heading text-lg md:text-xl font-bold">
          Vibrant events bringing together artisans & craft enthusiasts, platform celebrating contemporary crafts
          </h3>
          <p className="font-text">
          Kashmir Craft Fair is a vibrant celebration of Kashmir’s living artistic heritage, curated under ArtStay, the world’s first and largest platform dedicated to handicrafts–tourism convergence. These fairs serve as dynamic meeting grounds where artisans, collectors, designers, and conscious travelers come together to witness, appreciate, and invest in Kashmir’s timeless craft traditions.


</p>
<p>Each event blends the energy of a cultural festival with the depth of a heritage museum. Visitors explore handwoven textiles, intricately carved walnut wood, shimmering copperware, fine jewelry, papier-mâché, and more, each piece reflecting Kashmir’s layered history and global artistic influences.

Beyond shopping, the fairs host live demonstrations, artisan talks, interactive workshops, and cultural performances, creating immersive, educational, and community centered experiences.

Whether held in Srinagar’s majestic gardens, urban galleries, or international venues, Kashmir Craft Fair bridges local traditions with global appreciation, empowering artisans while preserving their craft legacies.
</p>
<p>This is not just an exhibition. <br />
It is Kashmir, unfolding through the hands that shape it.</p>
        </div>
        <div className="col-span-2 grid gap-6 md:gap-8">
          <h2 className="text-center font-heading text-2xl md:text-4xl font-extrabold">
            Why Choose{" "}
            <strong className="text-secondary">Kashmir Craft Fair/Exhibition</strong>
          </h2>
          <div className="flex justify-center">
            <p className="max-w-2xl text-center font-text text-xs md:text-sm">
            Your participation helps sustain traditional crafts, providing artisans with a platform to display their work and ensuring these age-old practices are preserved for future generations. A Cultural Showcase by ArtStay. The World’s First & Largest Handicrafts–Tourism Convergence Program, dedicated to Kashmir valley (India)
            </p>
          </div>

          <div className="grid gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {FairCardData.map((benefit, index) => (
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
