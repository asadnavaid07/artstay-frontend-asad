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
      <CenterSection className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 p-4 md:p-6">
        <RetreatForm />
        <div className="col-span-2 grid place-content-end gap-3 md:gap-3 lg:col-span-1">
          <h2 className="font-heading text-2xl md:text-4xl font-extrabold text-secondary">
            ArtStay Eco Retreat – Sustainable Stay with Kashmiri Soul
          </h2>
          <h3 className="font-heading text-lg md:text-xl font-bold">
            Sustainable luxury amidst Kashmir&apos;s pristine nature
          </h3>
          <p className="font-text">
            Kashmir Eco Retreat is not just a stay, it’s a fully immersive experience in the living heritage of Kashmiri craftsmanship. Whether in a heritage hotel or a traditional houseboat, every inch is adorned with authentic Kashmiri art: papier-mâché ceilings, walnut-wood floors, pinjrakaari windows, embroidered curtains, and handwoven rugs.

Built with local materials and rooted in eco-friendly practices.


            
          </p>
          <p>Immerse yourself in nature with our curated eco-activities, including guided nature walks and traditional Kashmiri craft workshops. Discover the art of organic gardening and learn to create sustainable souvenirs using local materials. Each experience connects you with Kashmir’s pristine environment and rich heritage. Enjoy serene meditation sessions amidst lush landscapes, fostering a deeper bond with nature and local traditions. Participate in eco-cleanups to preserve the valley’s beauty, blending adventure with conservation efforts.</p>
          <p> Engage in stargazing nights under clear skies, guided by local experts, and savor organic farm-to-table meals prepared with seasonal produce. These activities promote mindfulness, cultural immersion, and environmental care, ensuring a holistic retreat that honors Kashmir’s soul while leaving a positive impact. The retreat offers organic cuisine, guided eco-tours, and deep cultural connection.

Here, sustainability meets soul, and comfort is carved, stitched, and painted by Kashmir’s finest artisans.</p>
          <p>Kashmir Eco Retreat, where your room is a work of art. <br /> Your stay is a cultural embrace. </p>
        </div>
        <div className="col-span-2 grid gap-6 md:gap-8">
          <h2 className="text-center font-heading text-2xl md:text-4xl font-extrabold">
            Why Choose Our <strong className="text-secondary">Eco Retreat</strong>
          </h2>
          <div className="flex justify-center">
            <p className="max-w-2xl text-center font-text text-xs md:text-sm">
              We combine sustainable practices with authentic Kashmiri hospitality to create 
              experiences that are good for you and the planet. A Signature Sustainable Stay by ArtStay – The World’s First & Largest Handicrafts–Tourism Convergence Program, Dedicated to the Kashmir Valley (India)
            </p>
          </div>

          <div className="grid gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {RetreatCardData.map((benefit, index) => (
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