import { api } from "~/trpc/server";
import { EcoTransitPageClient } from "~/components/eco-transit/eco-transit-profile-client";

type PageProps = {
  searchParams: Promise<{ transitId: string }>;
};

export default async function EcoTransitPage({ searchParams }: PageProps) {
  const paramProps = await searchParams;
  
  if (!paramProps.transitId) {
    return (
      <div className="flex h-64 items-center justify-center">
        <p className="text-lg text-gray-500">Transit ID is required</p>
      </div>
    );
  }

  try {
    const transit = await api.ecoTransit.getEcoTransitDetail({
      transitId: paramProps.transitId,
    });

    return <EcoTransitPageClient transit={transit} />;
  } catch (error) {
    console.error("Error fetching eco transit detail:", error);
    return (
      <div className="flex h-64 items-center justify-center">
        <p className="text-lg text-red-500">Failed to load transit details. Please try again later.</p>
      </div>
    );
  }
}
