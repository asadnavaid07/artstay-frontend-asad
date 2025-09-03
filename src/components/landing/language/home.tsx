import { CenterSection } from "~/components/common/center-section";
import { LanguageCardData } from "~/constants/card";
import { Banner } from "~/components/common/banner";
import { languageBanner } from "~/constants/banner";
import { LanguageForm } from "~/components/landing/language/form";

export const LanguageLanding = () => {
  return (
    <>
      <Banner banner={languageBanner} />
      <CenterSection className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 p-4 md:p-6">
        <LanguageForm />
        <div className="col-span-2 grid place-content-end gap-3 md:gap-3 lg:col-span-1">
          <h2 className="font-heading text-2xl md:text-4xl font-extrabold text-secondary">
            ArtStay Language Services – Kashmiri Clarity, Global Connection
          </h2>
          <h3 className="font-heading text-lg md:text-xl font-bold">
            Bridge the language gap during your Kashmir visit
          </h3>
          <p className="font-text">
            Kashmir Language Services offers seamless, culturally sensitive communication for travelers, institutions, businesses, and artisan networks across the Kashmir Valley. Whether you&apos;re on a craft tour, attending official meetings, or navigating urgent situations, our expert interpreters and translators ensure clarity, trust, and respect in every exchange.




          </p>
          <p>We offer tour interpretation, craft demo facilitation, business/legal translation, and emergency language assistance.

Languages include: Kashmiri, Urdu, and Hindi. We also support global languages including:
English, French, Spanish, German, Arabic, Thai, Italian, Russian and Vietnamese.

Our professionals are trained in linguistic accuracy, cultural etiquette, and craft-related communication, ensuring every word reflects meaning and mutual respect.
</p>
<p>Join interactive Kashmiri language workshops to deepen cultural understanding. Learn greetings and phrases with native speakers, enhancing your valley experience.</p>
<p>Kashmir Language Services connects the world to the Valley <br /> Through understanding that goes beyond translation.</p>
        </div>
        <div className="col-span-2 grid gap-6 md:gap-8">
          <h2 className="text-center font-heading text-2xl md:text-4xl font-extrabold">
            Why Use Our <strong className="text-secondary">Language Services</strong>
          </h2>
          <div className="flex justify-center">
            <p className="max-w-2xl text-center font-text text-xs md:text-sm">
              We go beyond simple translation to ensure meaningful cultural exchange 
              and accurate communication in every situation. A Signature Interpretation & Cultural Communication Program by ArtStay. The World&apos;s First & Largest Handicrafts–Tourism Convergence Program, Dedicated to Kashmir Valley (India)
            </p>
          </div>

          <div className="grid gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {LanguageCardData.map((benefit, index) => (
              <div
                className="group grid place-items-center gap-4 rounded-lg border p-6 transition-colors hover:bg-primary"
                key={index}
              >
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