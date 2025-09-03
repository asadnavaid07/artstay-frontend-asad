"use client";

import { CenterSection } from "~/components/common/center-section";
import { DiningCardData } from "~/constants/card";
import { Banner } from "~/components/common/banner";
import { diningBanner } from "~/constants/banner";
import { DiningForm } from "~/components/landing/dining/form";

export const DiningLanding = () => {
  // const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentBannerIndex((prevIndex) =>
  //       prevIndex === diningBanner.length - 1 ? 0 : prevIndex + 1
  //     );
  //   }, 5000); // Change banner every 5 seconds

  //   return () => clearInterval(interval);
  // }, []);

  return (
    <>
      <div className="relative">
        <Banner banner={diningBanner} />
        {/* <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
          {diningBanner.map((_, index) => (
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
        <DiningForm />
        <div className="col-span-2 grid place-content-end gap-3 md:gap-3 lg:col-span-1">
          <h2 className="font-heading text-2xl md:text-4xl font-extrabold text-secondary">
            ArtStay Dining Voyage – Culinary Journey with Kashmiri Flavors
          </h2>
          <h3 className="font-heading text-lg md:text-xl font-bold">
            A gastronomic journey through Kashmir&apos;s culinary heritage
          </h3>
          <p className="font-text">
            A Signature Culinary Experience by ArtStay – The World&apos;s First & Largest Handicrafts–Tourism Convergence Program, Dedicated to Kashmir Valley (India)
            Kashmir Dining Voyage is a curated exploration of Kashmir&apos;s legendary cuisine—anchored in artistry, tradition, and immersive settings. </p>
        
          <p>
            This signature culinary experience invites guests to savor Wazwan, the royal multi-course feast of Kashmir, served in majestic spaces adorned with papier-mâché ceilings, walnut-wood décor, and embroidered crewel linens.
            Dine beside lakes, in saffron gardens, or inside hand-carved houseboats, while savoring slow-cooked Rogan Josh, Kashmiri Haakh, smoked trout, Gushtaba, and saffron-infused Kehwa. Meals are crafted by traditional wazas and modern chefs alike, using organic, locally sourced ingredients.
            This is not just about food, it&apos;s about ritual, hospitality, fragrance, and folklore served together on copper platters.
          </p>
            <p> Indulge in an authentic taste of Kashmir with our handcrafted specialties. From the aromatic Rogan Josh to the delicate Phirni, each dish tells a story of tradition and craftsmanship.
          
          </p>
          <p>
            Kashmir Dining Voyage, where every meal is a cultural celebration <br /> Every flavor tells a story.
          </p>
        </div>
        <div className="col-span-2 grid gap-6 md:gap-8">
          <h2 className="text-center font-heading text-2xl md:text-4xl font-extrabold">
            Why Choose <strong className="text-secondary">Dining Voyage</strong>
          </h2>
          <div className="flex justify-center">
            <p className="max-w-2xl text-center font-text text-xs md:text-sm">
              We redefine culinary tourism by combining exceptional food with extraordinary 
              locations and cultural immersion. Kashmir Dining Voyage is a refined celebration of the Valley&apos;s most sacred art form, its cuisine. Curated by ArtStay, this signature journey elevates food into a cultural expression of Kashmir&apos;s identity, history, and soul.
            </p>
          </div>
          <div className="grid gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {DiningCardData.map((benefit, index) => (
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