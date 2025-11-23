"use client";

import { api } from "~/trpc/react";
import Image from "next/image";
import { Badge } from "~/components/ui/badge";
import { useRouter, useSearchParams } from "next/navigation";
import { Card } from "~/components/ui/card";
import { MapPin } from "lucide-react";
import type { FairEventProps, FairProps } from "~/types";

export const FairList = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  // Extract filter values from URL
  const eventLocation = searchParams.get("eventLocation") ?? undefined;
  const startDate = searchParams.get("startDate") ?? undefined;
  const endDate = searchParams.get("endDate") ?? undefined;

  // If no filters are applied, show all active fairs
  const hasFilters = eventLocation || startDate || endDate;

  const [allFairs] = api.fair.getAllFairs.useSuspenseQuery();
  const [filteredEvents] = api.fair.findFairByCriteria.useSuspenseQuery({
    eventLocation,
    eventType: undefined,
    startDate,
    endDate
  });

  let displayFairs: (FairProps | null)[] = [];

  if (hasFilters) {
    // Filter to get unique fairs from events (since findFairByCriteria returns events)
    displayFairs = Array.from(
      new Map(
        filteredEvents.map((event: FairEventProps) => [event.fairId, event.fair])
      ).values()
    ).map((fair) => fair ?? null);
  } else {
    // Show all active fairs when no filters
    displayFairs = allFairs.filter((fair: FairProps) => fair.isActive);
  }

  return (
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4">
        {displayFairs.length > 0 ? (
          displayFairs.map((fair, index: number) => {
            if (!fair) return null;
            return (
              <Card
                key={fair.fairId ?? index}
                className="cursor-pointer overflow-hidden bg-white transition-shadow duration-300 hover:shadow-md"
                onClick={() => router.push(`/fair/profile?fairId=${fair.fairId}`)}
              >
                <div className="relative">
                  <Badge className="absolute left-4 top-4 z-10">Featured</Badge>

                   <div className="relative h-72">
                     <Image
                       src={fair.dp && fair.dp !== "none" ? fair.dp : '/placeholder.png'}
                       alt={`${fair.firstName} ${fair.lastName}`}
                       fill
                       className="object-cover"
                       sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                     />
                   </div>
                </div>

                <div className="p-4">
                  <h3 className="text-xl font-semibold text-secondary">
                    {fair.firstName} {fair.lastName}
                  </h3>

                  <p className="mt-2 line-clamp-2 text-sm text-gray-600">
                    {fair.description || "Fair organizer"}
                  </p>

                  <div className="mt-4 flex items-center text-gray-500">
                    <MapPin className="mr-2 h-4 w-4" />
                    <span className="text-sm">{fair.address || "Location not specified"}</span>
                  </div>
                </div>
              </Card>
            );
          })
        ) : (
          <div className="col-span-full text-center py-12">
            <h3 className="text-lg font-medium text-gray-900">No fairs found</h3>
            <p className="mt-2 text-sm text-gray-500">Try adjusting your filters to see more results.</p>
          </div>
        )}
      </div>
  );
};