"use client";

import { Button } from "~/components/ui/button";
import { useFairEvent } from "~/hooks/use-fair";
import dayjs from "dayjs";
import { useRouter } from "next/navigation";

export const FairSelectionSummary = () => {
  const { fairEvent } = useFairEvent();
  const router = useRouter();

  if (!fairEvent.event) {
    return (
      <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 text-amber-800">
        Please select a fair event to start your registration.
      </div>
    );
  }

  return (
    <div className="space-y-4 rounded-lg border bg-muted/50 p-4">
      <div>
        <p className="text-sm text-muted-foreground">Selected Event</p>
        <h3 className="text-lg font-semibold text-secondary">{fairEvent.event.title}</h3>
        <p className="text-sm text-muted-foreground">{fairEvent.event.description}</p>
      </div>

      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span>Organizer</span>
          <span className="font-medium">{fairEvent.event.organizer}</span>
        </div>
        <div className="flex justify-between">
          <span>Location</span>
          <span className="font-medium">{fairEvent.event.location}</span>
        </div>
        <div className="flex justify-between">
          <span>Venue</span>
          <span className="font-medium">{fairEvent.event.vanue}</span>
        </div>
        <div className="flex justify-between">
          <span>Event Period</span>
          <span className="font-medium">
            {dayjs(fairEvent.event.startDate).format("MMM D")} -{" "}
            {dayjs(fairEvent.event.endDate).format("MMM D, YYYY")}
          </span>
        </div>
      </div>

      <div className="pt-2">
        <Button
          className="w-full"
          onClick={() => router.push("/fair/booking")}
          disabled={!fairEvent.date}
        >
          {fairEvent.date ? `Continue (Date: ${dayjs(fairEvent.date).format("MMM D, YYYY")})` : "Select a visit date"}
        </Button>
      </div>
    </div>
  );
};

