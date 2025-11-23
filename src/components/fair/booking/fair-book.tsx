"use client";

import { useFairEvent } from "~/hooks/use-fair";
import { Button } from "~/components/ui/button";
import type { FairEventProps } from "~/types";
import { useRouter, useSearchParams } from "next/navigation";

interface FairEventBookProps {
  event: FairEventProps;
}

export const FairEventBook = ({ event }: FairEventBookProps) => {
  const { setEvent } = useFairEvent();
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleRegisterNow = () => {
    // Set event in Zustand store with eventDate automatically set to event.startDate
    setEvent(event);
    // Redirect directly to booking form
    router.push("/fair/booking");
  };

  return (
    <Button
      className="w-full rounded-lg bg-primary px-4 py-2 text-white transition-colors hover:bg-primary/90"
      onClick={handleRegisterNow}
    >
      Register Now
    </Button>
  );
};
