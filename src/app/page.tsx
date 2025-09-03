import { ArtisanLanding } from "~/components/landing/artisans/home";
import { BusinessLanding } from "~/components/landing/business/home";
import { DiningLanding } from "~/components/landing/dining/home";
import { FairLanding } from "~/components/landing/fair/home";
import { LanguageLanding } from "~/components/landing/language/home";
import { PlannerLanding } from "~/components/landing/planner/home";
import { RetreatLanding } from "~/components/landing/retreat/home";
import { SafariLanding } from "~/components/landing/safari/home";
import { TourLanding } from "~/components/landing/tour/home";
import { TransitLanding } from "~/components/landing/transist/home";
import { DocumentorLanding } from "~/components/landing/craft_documentor/home"
// import Footer from "~/components/footer/footer";
import  Reviews from "~/components/review/review";
import { Banner } from "~/components/banner/banner";
import  ProjectGlimpse  from "~/components/project_glimpse/glimpse";
import Component from "~/components/artstay-document/artstay-doc";
import PartnershipSection from "~/components/partnershit-section/partnership";
import SupportNetwork from "~/components/support_network/support";


export default function HomePage() {
  return (
    <>
      <ArtisanLanding />
      <SafariLanding />
      <FairLanding />
      <BusinessLanding />
      <TourLanding />
      <RetreatLanding/>
      <DiningLanding/>
      <TransitLanding/>
      <PlannerLanding/>
      <DocumentorLanding/>
      <LanguageLanding/>
      <Banner />
      <Reviews />
     
      <ProjectGlimpse />
      <div className="bg-[#C8E8F9]">
      <Component />
      </div>
      <PartnershipSection />
      <SupportNetwork />
      {/* <Footer /> */}
    </>
  );
}
