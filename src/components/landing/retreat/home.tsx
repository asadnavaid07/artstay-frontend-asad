// import Image from "next/image";
import { CenterSection } from "~/components/common/center-section";
import { Banner } from "~/components/common/banner";
import { retreatBanner } from "~/constants/banner";
import { RetreatForm } from "~/components/landing/retreat/form";
import { RetreatCardData } from "~/constants/card";

export const RetreatLanding = () => {
  return (
    <>
      <Banner banner={retreatBanner} />
      <CenterSection className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10 px-4 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8 md:py-12">
        <RetreatForm />
        <div className="col-span-1 lg:col-span-1 grid gap-3 sm:gap-4 md:gap-5 lg:gap-6 content-start lg:content-end">
          <h2 className="font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-secondary leading-tight">
            ArtStay Eco Retreat – Sustainable Stay with Kashmiri Soul
          </h2>
          <h3 className="font-heading text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-snug">
            Sustainable luxury amidst Kashmir&apos;s pristine nature
          </h3>
          <p className="font-text text-sm sm:text-base md:text-lg leading-relaxed">
            Kashmir Eco Retreat is not just a stay, it's a fully immersive experience in the living heritage of Kashmiri craftsmanship. Whether in a heritage hotel or a traditional houseboat, every inch is adorned with authentic Kashmiri art: papier-mâché ceilings, walnut-wood floors, pinjrakaari windows, embroidered curtains, and handwoven rugs.

Built with local materials and rooted in eco-friendly practices.


            
          </p>
          <p className="font-text text-sm sm:text-base md:text-lg leading-relaxed">Immerse yourself in nature with our curated eco-activities, including guided nature walks and traditional Kashmiri craft workshops. Discover the art of organic gardening and learn to create sustainable souvenirs using local materials. Each experience connects you with Kashmir's pristine environment and rich heritage. Enjoy serene meditation sessions amidst lush landscapes, fostering a deeper bond with nature and local traditions. Participate in eco-cleanups to preserve the valley's beauty, blending adventure with conservation efforts.</p>
          <p className="font-text text-sm sm:text-base md:text-lg leading-relaxed"> Engage in stargazing nights under clear skies, guided by local experts, and savor organic farm-to-table meals prepared with seasonal produce. These activities promote mindfulness, cultural immersion, and environmental care, ensuring a holistic retreat that honors Kashmir's soul while leaving a positive impact. The retreat offers organic cuisine, guided eco-tours, and deep cultural connection.

Here, sustainability meets soul, and comfort is carved, stitched, and painted by Kashmir's finest artisans.</p>
          <p className="font-text text-sm sm:text-base md:text-lg leading-relaxed">Kashmir Eco Retreat, where your room is a work of art. <br /> Your stay is a cultural embrace. </p>
        </div>
        <div className="col-span-1 lg:col-span-2 grid gap-6 sm:gap-8 md:gap-10 lg:gap-12 mt-4 sm:mt-6 md:mt-8">
          <h2 className="text-center font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold px-4">
            Why Choose Our <strong className="text-secondary">Eco Retreat</strong>
          </h2>
          <div className="flex justify-center px-4">
            <p className="max-w-2xl text-center font-text text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">
              We combine sustainable practices with authentic Kashmiri hospitality to create 
              experiences that are good for you and the planet. A Signature Sustainable Stay by ArtStay – The World's First & Largest Handicrafts–Tourism Convergence Program, Dedicated to the Kashmir Valley (India)
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8 px-4 sm:px-6">
            {RetreatCardData.map((benefit, index) => (
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