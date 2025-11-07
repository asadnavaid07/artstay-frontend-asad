import { type Metadata } from "next";
import { Suspense } from "react";
import { HeadlingUnderline } from "~/components/common/heading-underline";
import { RoomBookingForm } from "~/components/eco-retreat/booking/booking-form";

export const metadata: Metadata = {
  title: "Artstay | Room Booking",
  description:
    "Complete your room reservation with Artstay. Book authentic Kashmir accommodations with local hospitality. Secure booking process for hotels, guesthouses, and traditional stays in Kashmir valley.",
};

export default function BookingPage() {
  return (
    <div className="container mx-auto max-w-7xl py-6 sm:py-8 md:py-10 lg:py-12 px-4 sm:px-6 md:px-8">
      <HeadlingUnderline title="Booking" />
      <Suspense>
        <RoomBookingForm />
      </Suspense>
    </div>
  );
}
