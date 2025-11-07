import { Banner } from "~/components/common/banner";
import { artisanBanner } from "~/constants/banner";

export default function ArtisanLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Banner banner={artisanBanner} />
      <section className="mx-auto max-w-7xl mb-6 sm:mb-8 md:mb-12 lg:mb-16 xl:mb-24 px-3 sm:px-4 md:px-6 lg:px-8">{children}</section>
    </>
  );
}
