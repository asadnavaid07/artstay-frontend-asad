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
      <CenterSection className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10 px-4 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8 md:py-12">
        <DiningForm />
        <div className="col-span-1 lg:col-span-1 grid gap-3 sm:gap-4 md:gap-5 lg:gap-6 content-start lg:content-end">
          <h2 className="font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-secondary leading-tight">
            ArtStay Dining Voyage – Culinary Journey with Kashmiri Flavors
          </h2>
          <h3 className="font-heading text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-snug">
            A gastronomic journey through Kashmir&apos;s culinary heritage
          </h3>
          <p className="font-text text-sm sm:text-base md:text-lg leading-relaxed">
            A Signature Culinary Experience by ArtStay – The World&apos;s First & Largest Handicrafts–Tourism Convergence Program, Dedicated to Kashmir Valley (India)
            Kashmir Dining Voyage is a curated exploration of Kashmir&apos;s legendary cuisine—anchored in artistry, tradition, and immersive settings. </p>
        
          <p className="font-text text-sm sm:text-base md:text-lg leading-relaxed">
            This signature culinary experience invites guests to savor Wazwan, the royal multi-course feast of Kashmir, served in majestic spaces adorned with papier-mâché ceilings, walnut-wood décor, and embroidered crewel linens.
            Dine beside lakes, in saffron gardens, or inside hand-carved houseboats, while savoring slow-cooked Rogan Josh, Kashmiri Haakh, smoked trout, Gushtaba, and saffron-infused Kehwa. Meals are crafted by traditional wazas and modern chefs alike, using organic, locally sourced ingredients.
            This is not just about food, it&apos;s about ritual, hospitality, fragrance, and folklore served together on copper platters.
          </p>
            <p className="font-text text-sm sm:text-base md:text-lg leading-relaxed"> Indulge in an authentic taste of Kashmir with our handcrafted specialties. From the aromatic Rogan Josh to the delicate Phirni, each dish tells a story of tradition and craftsmanship.
          
          </p>
          <p className="font-text text-sm sm:text-base md:text-lg leading-relaxed">
            Kashmir Dining Voyage, where every meal is a cultural celebration <br /> Every flavor tells a story.
          </p>
        </div>
        <div className="col-span-1 lg:col-span-2 grid gap-6 sm:gap-8 md:gap-10 lg:gap-12 mt-4 sm:mt-6 md:mt-8">
          <h2 className="text-center font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold px-4">
            Why Choose <strong className="text-secondary">Dining Voyage</strong>
          </h2>
          <div className="flex justify-center px-4">
            <p className="max-w-2xl text-center font-text text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">
              We redefine culinary tourism by combining exceptional food with extraordinary 
              locations and cultural immersion. Kashmir Dining Voyage is a refined celebration of the Valley&apos;s most sacred art form, its cuisine. Curated by ArtStay, this signature journey elevates food into a cultural expression of Kashmir&apos;s identity, history, and soul.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8 px-4 sm:px-6">
            {DiningCardData.map((benefit, index) => (
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