import { type Metadata } from "next";
import { HeadlingUnderline } from "~/components/common/heading-underline";
import { TravelBookingForm } from "~/components/travel/booking/travel-form"

export const metadata: Metadata = {
  title: "Artstay | Travel Booking",
  description:
    "Book your travel adventure with local guides. Experience personalized tours, cultural experiences, and amazing destinations with our expert travel planners.",
};

export default function TravelBookingPage() {
  return (
    <div className="container mx-auto max-w-7xl py-6 sm:py-8 md:py-10 lg:py-12 px-4 sm:px-6 md:px-8">
      <HeadlingUnderline title="Travel Booking" />
      <TravelBookingForm />
    </div>
  );
}