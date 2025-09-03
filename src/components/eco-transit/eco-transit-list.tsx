"use client";

import { useMemo } from "react";
import Image from "next/image";
import { Badge } from "~/components/ui/badge";
import { useRouter, useSearchParams } from "next/navigation";
import { Card } from "~/components/ui/card";
import { MapPin } from "lucide-react";
import { api } from "~/trpc/react";

export const EcoTransitList = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Fetch all eco-transit vendors
  const { data: ecoTransits = [], isLoading, error } = api.ecoTransit.getAllEcoTransits.useQuery();

  // Debug logging
  console.log("EcoTransitList Debug:", {
    ecoTransits,
    isLoading,
    error,
    dataLength: ecoTransits?.length,
    dataType: typeof ecoTransits,
    isArray: Array.isArray(ecoTransits)
  });

  const pickupLocation = searchParams.get("pickupLocation");
  const dropOffLocation = searchParams.get("dropOffLocation");
  const travelDate = searchParams.get("travelDate");
  const vehicleType = useMemo(() => 
    searchParams.get("vehicleType")?.split(",") ?? [], 
    [searchParams]
  );

  const filteredTransits = useMemo(() => {
    if (!pickupLocation && !dropOffLocation && !travelDate && (vehicleType?.length ?? 0) === 0) {
      return ecoTransits;
    }
    return ecoTransits.filter((_transit) => {
      // Implement filtering logic (placeholder)
      return true; // Adjust based on actual filter logic
    });
  }, [ecoTransits, pickupLocation, dropOffLocation, travelDate, vehicleType]);

  if (isLoading) {
    return <div className="text-center py-12">Loading...</div>;
  }

  if (error) {
    console.error("EcoTransit API Error:", error);
    return (
      <div className="text-center py-12">
        <h3 className="text-lg font-medium text-red-600">Error loading eco-transit options</h3>
        <p className="mt-2 text-sm text-gray-500">{error.message}</p>
      </div>
    );
  }

  return (
    <div className="px-4 py-8">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {(filteredTransits?.length ?? 0) > 0 ? (
          filteredTransits?.map((transit) => (
            <Card
              key={transit.transitId}
              className="cursor-pointer overflow-hidden bg-white transition-shadow duration-300 hover:shadow-md"
              onClick={() => router.push(`/eco-transit/profile?transitId=${transit.transitId}`)}
            >
              <div className="relative">
                <Badge className="absolute left-4 top-4 z-10">Featured</Badge>
                <div className="relative h-72">
                  <Image
                    src={transit.dp}
                    alt={transit.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-secondary">{transit.name}</h3>
                <p className="mt-2 line-clamp-2 text-sm text-gray-600">{transit.description}</p>
                <div className="mt-4 flex items-center text-gray-500">
                  <MapPin className="mr-2 h-4 w-4" />
                  <span className="text-sm">{transit.address}</span>
                </div>
              </div>
            </Card>
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <h3 className="text-lg font-medium text-gray-900">No transit options found</h3>
            <p className="mt-2 text-sm text-gray-500">Try adjusting your filters to see more results.</p>
          </div>
        )}
      </div>
    </div>
  );
};