import { type Metadata } from "next";
import { HeadlingUnderline } from "~/components/common/heading-underline";
import { ShopCheckoutForm } from "~/components/shop/shop-form";

export const metadata: Metadata = {
  title: "Artstay | Checkout",
  description: "Complete your purchase of authentic Kashmiri handicrafts",
};

export default function ShopCheckoutPage() {
  return (
    <div className="container mx-auto max-w-7xl py-6 sm:py-8 md:py-10 lg:py-12 px-4 sm:px-6 md:px-8">
      <HeadlingUnderline title="Checkout" />
      <ShopCheckoutForm />
    </div>
  );
}
