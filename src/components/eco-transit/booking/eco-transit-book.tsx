"use client";

import { useEcoTransit } from "~/hooks/use-eco-transit";
import { Button } from "~/components/ui/button";
import type { EcoTransitOptionProps } from "~/types";

interface BookNowButtonProps {
  option: EcoTransitOptionProps;
}

export const EcoTransitBook = ({ option }: BookNowButtonProps) => {
  const { ecoTransitPackage, setOption } = useEcoTransit();

  const handleBookNow = () => {
    setOption(option);
  };

  return (
    <Button
      type="button"
      variant={ecoTransitPackage.id === option.optionId ? "default" : "outline"}
      onClick={handleBookNow}
    >
      Book Now
    </Button>
  );
};