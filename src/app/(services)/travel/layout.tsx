import { Banner } from "~/components/common/banner";
import { safariBanner } from "~/constants/banner";

export default function TravelLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    // TODO: add travlebanner
    <>
      <Banner banner={safariBanner} />
      <section className="mx-auto max-w-7xl mb-8 sm:mb-12 md:mb-16 lg:mb-24 xl:mb-32 px-4 sm:px-6 md:px-8">{children}</section>
    </>
  );
}
