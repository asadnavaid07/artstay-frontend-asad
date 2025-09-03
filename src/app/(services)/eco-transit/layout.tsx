import { Banner } from "~/components/common/banner";
import { ecoTransitBanner } from "~/constants/banner";

export default function EcoTransitLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Banner banner={ecoTransitBanner} />
      <section className="mx-auto max-w-7xl mb-32">{children}</section>
    </>
  );
}
