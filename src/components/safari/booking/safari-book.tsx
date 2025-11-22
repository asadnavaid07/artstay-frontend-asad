"use client";

import { useSafari } from "~/hooks/use-safari";
import { Button } from "~/components/ui/button";
import type { SafariTourProps } from "~/types";
import { useRouter, useSearchParams } from "next/navigation";

interface BookNowButtonProps {
  tour: SafariTourProps;
}

export const SafariBook = ({ tour }: BookNowButtonProps) => {
  const { safariPackage, setTour } = useSafari();
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleBookNow = () => {
    setTour(tour);
    const safariIdFromParam = searchParams.get("safariId") ?? tour.safariId;
    const query = new URLSearchParams();
    query.set("safariId", safariIdFromParam);
    query.set("tab", "booking");
    router.push(`/safari/profile?${query.toString()}`);
  };

  return (
    <Button
      type="button"
      variant={safariPackage.id === tour.tourId ? "default" : "outline"}
      onClick={handleBookNow}
    >
      {safariPackage.id === tour.tourId ? "Selected" : "Book Now"}
    </Button>
  );
};
