"use client";

import { api } from "~/trpc/react";
import { useMemo } from "react";
import Image from "next/image";
import { Badge } from "~/components/ui/badge";
import { useRouter, useSearchParams } from "next/navigation";
import { Card } from "~/components/ui/card";
import { MapPin } from "lucide-react";
import type { SafariProps, SafariTourProps } from "~/types";

export const SafariList = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  // Extract filter values from search params
  const craftVillagesFilter = useMemo(() => 
    searchParams.get("craftVillages")?.split(",") ?? [], 
    [searchParams]
  );
  const featuresFilter = useMemo(() => 
    searchParams.get("features")?.split(",") ?? [], 
    [searchParams]
  );

  // Fetch all safaris
  const [safaris] = api.safari.getAllSafaris.useSuspenseQuery();

  // Apply filters to safaris
  const filteredSafaris = useMemo(() => {
    // If no filters are applied, return all safaris
    if (craftVillagesFilter.length === 0 && featuresFilter.length === 0) {
      return safaris;
    }

    return safaris.filter((safari: SafariProps) => {
      // Check if safari has tours that match the filter criteria
      const tours = (safari as unknown as { SafariTour?: SafariTourProps[] }).SafariTour;
      if (!tours || tours.length === 0) {
        return false;
      }

      // Check craft villages filter
      if (craftVillagesFilter.length > 0) {
        const hasMatchingVillage = tours.some((tour: SafariTourProps) => {
          return craftVillagesFilter.some((village: string) => {
            // Handle combined village names like "Khanqah & Zadibal"
            if (village.includes('&')) {
              const villageParts = village.split('&').map((part: string) => part.trim().toLowerCase());
              return villageParts.some((part: string) => tour.title.toLowerCase().includes(part));
            } else if (village.includes(',')) {
              const villageParts = village.split(',').map((part: string) => part.trim().toLowerCase());
              return villageParts.some((part: string) => tour.title.toLowerCase().includes(part));
            } else {
              return tour.title.toLowerCase().includes(village.toLowerCase());
            }
          });
        });
        if (!hasMatchingVillage) return false;
      }

      // Check features filter (activity preferences)
      if (featuresFilter.length > 0) {
        const hasMatchingFeature = tours.some((tour: SafariTourProps) => {
          return featuresFilter.some((feature: string) => {
            // Check if any tour feature contains the selected activity preference
            return tour.features.some((tourFeature: string) => 
              tourFeature.toLowerCase().includes(feature.toLowerCase())
            );
          });
        });
        if (!hasMatchingFeature) return false;
      }

      return true;
    });
  }, [safaris, craftVillagesFilter, featuresFilter]);

  return (
    <div className="px-4 py-8">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredSafaris.length > 0 ? (
          filteredSafaris.map((safari: SafariProps, index: number) => (
            <Card
              key={safari.safariId ?? index}
              className="cursor-pointer overflow-hidden bg-white transition-shadow duration-300 hover:shadow-md"
              onClick={() =>
                router.push(`/safari/profile?safariId=${safari.safariId}`)
              }
            >
              <div className="relative">
                <Badge className="absolute left-4 top-4 z-10">Featured</Badge>

                <div className="relative h-72">
                  <Image
                    src={safari.dp === '' ? '/placeholder.png' : safari.dp}
                    alt={`${safari.firstName} ${safari.lastName}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                </div>
              </div>

              <div className="p-4">
                <h3 className="text-xl font-semibold text-secondary">
                  {safari.firstName} {safari.lastName}
                </h3>

                <p className="mt-2 line-clamp-2 text-sm text-gray-600">
                  {safari.description}
                </p>

                <div className="mt-4 flex items-center text-gray-500">
                  <MapPin className="mr-2 h-4 w-4" />
                  <span className="text-sm">{safari.address}</span>
                </div>
              </div>
            </Card>
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <h3 className="text-lg font-medium text-gray-900">No safaris found</h3>
            <p className="mt-2 text-sm text-gray-500">Try adjusting your filters to see more results.</p>
          </div>
        )}
      </div>
    </div>
  );
};