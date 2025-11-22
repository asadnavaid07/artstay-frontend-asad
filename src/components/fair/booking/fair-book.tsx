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
    setEvent(event);
    const fairIdFromParam = searchParams.get("fairId") ?? event.fairId;
    const query = new URLSearchParams();
    query.set("fairId", fairIdFromParam);
    query.set("tab", "book");
    router.push(`/fair/profile?${query.toString()}`);
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
