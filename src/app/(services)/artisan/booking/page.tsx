import { type Metadata } from "next";
import { ArtisanBookingForm } from "~/components/artisans/artisan-booking";
import { HeadlingUnderline } from "~/components/common/heading-underline";

export const metadata: Metadata = {
  title: "Artstay | Artisan Experience Booking",
  description: "Book your artisan experience with our master craftspeople",
};

export default function BookingPage() {
  return (
    <div className="container mx-auto max-w-7xl py-4 sm:py-6 md:py-8 lg:py-10 xl:py-12 px-3 sm:px-4 md:px-6 lg:px-8">
      <HeadlingUnderline title="Booking" />
      <ArtisanBookingForm />
    </div>
  );
}
