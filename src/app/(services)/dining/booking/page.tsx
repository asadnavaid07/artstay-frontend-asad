import { type Metadata } from "next";
import { HeadlingUnderline } from "~/components/common/heading-underline";
import { RestaurantBookingForm } from "~/components/dining/booking/dining-form";
import { OrderSidebar } from "~/components/dining/booking/order-sidebar";

export const metadata: Metadata = {
  title: "Artstay | Artisan Experience Booking",
  description: "Book your artisan experience with our master craftspeople",
};

export default function BookingPage() {
  return (
    <div className="container mx-auto max-w-7xl py-6 sm:py-8 md:py-10 lg:py-12 px-4 sm:px-6 md:px-8">
      <HeadlingUnderline title="Booking" />
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <RestaurantBookingForm />
        <OrderSidebar />
      </div>
    </div>
  );
}
