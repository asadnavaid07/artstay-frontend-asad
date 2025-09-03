///fahad

import { Suspense } from "react";
import { EcoTransitFilter } from "~/components/eco-transit/eco-transit-filter";
import { EcoTransitList } from "~/components/eco-transit/eco-transit-list";
import { EventCardSkeleton } from "~/components/skeletons/service";
import { HydrateClient } from "~/trpc/server";

export const dynamic = 'force-dynamic';

export default function EcoTransitPage() {
  return (
    <HydrateClient>
      <EcoTransitFilter />
      <Suspense fallback={<EventCardSkeleton />}>
        <EcoTransitList />
      </Suspense>
    </HydrateClient>
  );
}