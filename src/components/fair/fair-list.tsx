"use client";

import { api } from "~/trpc/react";
import { useMemo } from "react";
import Image from "next/image";
import { Badge } from "~/components/ui/badge";
import { useRouter, useSearchParams } from "next/navigation";
import { Card } from "~/components/ui/card";
import { MapPin } from "lucide-react";


export const FairList = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  // Extract filter values from URL
  const eventLocation = searchParams.get("eventLocation") ?? undefined;
  const eventType = searchParams.get("eventType") ?? undefined;
  const startDate = searchParams.get("startDate") ?? undefined;
  const endDate = searchParams.get("endDate") ?? undefined;


  const [fairs] = api.fair.findFairByCriteria.useSuspenseQuery({
    eventLocation,
    eventType,
    startDate,
    endDate
  });

  const filteredFairs = fairs; // already filtered server-side

  return (
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4">
        {filteredFairs.length > 0 ? (
          filteredFairs.map((fairEvent, index) => (
            <Card
              key={fairEvent.eventId ?? index}
              className="cursor-pointer overflow-hidden bg-white transition-shadow duration-300 hover:shadow-md"
              onClick={() => router.push(`/fair/profile?fairId=${fairEvent.fairId}`)}
            >
              <div className="relative">
                <Badge className="absolute left-4 top-4 z-10">Featured</Badge>

                 <div className="relative h-72">
                   <Image
                     src={fairEvent.fair?.dp || '/placeholder.png'}
                     alt={`${fairEvent.fair?.firstName} ${fairEvent.fair?.lastName}`}
                     fill
                     className="object-cover"
                     sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                   />
                 </div>
              </div>

              <div className="p-4">
                <h3 className="text-xl font-semibold text-secondary">
                  {fairEvent.title}
                </h3>

                <p className="mt-2 line-clamp-2 text-sm text-gray-600">
                  {fairEvent.description}
                </p>

                <div className="mt-4 flex items-center text-gray-500">
                  <MapPin className="mr-2 h-4 w-4" />
                  <span className="text-sm">{fairEvent.vanue}</span>
                </div>
              </div>
            </Card>
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <h3 className="text-lg font-medium text-gray-900">No fairs found</h3>
            <p className="mt-2 text-sm text-gray-500">Try adjusting your filters to see more results.</p>
          </div>
        )}
      </div>
  );
};