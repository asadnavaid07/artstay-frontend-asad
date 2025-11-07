import { CenterSection } from "~/components/common/center-section";
import { LanguageCardData } from "~/constants/card";
import { Banner } from "~/components/common/banner";
import { languageBanner } from "~/constants/banner";
import { LanguageForm } from "~/components/landing/language/form";

export const LanguageLanding = () => {
  return (
    <>
      <Banner banner={languageBanner} />
      <CenterSection className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10 px-4 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8 md:py-12">
        <LanguageForm />
        <div className="col-span-1 lg:col-span-1 grid gap-3 sm:gap-4 md:gap-5 lg:gap-6 content-start lg:content-end">
          <h2 className="font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-secondary leading-tight">
            ArtStay Language Services – Kashmiri Clarity, Global Connection
          </h2>
          <h3 className="font-heading text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-snug">
            Bridge the language gap during your Kashmir visit
          </h3>
          <p className="font-text text-sm sm:text-base md:text-lg leading-relaxed">
            Kashmir Language Services offers seamless, culturally sensitive communication for travelers, institutions, businesses, and artisan networks across the Kashmir Valley. Whether you&apos;re on a craft tour, attending official meetings, or navigating urgent situations, our expert interpreters and translators ensure clarity, trust, and respect in every exchange.




          </p>
          <p className="font-text text-sm sm:text-base md:text-lg leading-relaxed">We offer tour interpretation, craft demo facilitation, business/legal translation, and emergency language assistance.

Languages include: Kashmiri, Urdu, and Hindi. We also support global languages including:
English, French, Spanish, German, Arabic, Thai, Italian, Russian and Vietnamese.

Our professionals are trained in linguistic accuracy, cultural etiquette, and craft-related communication, ensuring every word reflects meaning and mutual respect.
</p>
<p className="font-text text-sm sm:text-base md:text-lg leading-relaxed">Join interactive Kashmiri language workshops to deepen cultural understanding. Learn greetings and phrases with native speakers, enhancing your valley experience.</p>
<p className="font-text text-sm sm:text-base md:text-lg leading-relaxed">Kashmir Language Services connects the world to the Valley <br /> Through understanding that goes beyond translation.</p>
        </div>
        <div className="col-span-1 lg:col-span-2 grid gap-6 sm:gap-8 md:gap-10 lg:gap-12 mt-4 sm:mt-6 md:mt-8">
          <h2 className="text-center font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold px-4">
            Why Use Our <strong className="text-secondary">Language Services</strong>
          </h2>
          <div className="flex justify-center px-4">
            <p className="max-w-2xl text-center font-text text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">
              We go beyond simple translation to ensure meaningful cultural exchange 
              and accurate communication in every situation. A Signature Interpretation & Cultural Communication Program by ArtStay. The World&apos;s First & Largest Handicrafts–Tourism Convergence Program, Dedicated to Kashmir Valley (India)
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8 px-4 sm:px-6">
            {LanguageCardData.map((benefit, index) => (
              <div
                className="group grid place-items-center gap-3 sm:gap-4 md:gap-5 rounded-lg border p-4 sm:p-5 md:p-6 lg:p-8 transition-all duration-300 hover:bg-primary hover:shadow-lg"
                key={index}
              >
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