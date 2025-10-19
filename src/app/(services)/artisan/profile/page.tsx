import { api } from "~/trpc/server";
import { ArtisanProfileTabs } from "~/components/artisans/artisan-profile-tabs";

type PageProps = {
  searchParams: Promise<{ artisanId: string; tab?: string }>;
};

export default async function ArtisanPage({ searchParams }: PageProps) {
  const paramProps = await searchParams;
  const artisan = await api.artisan.getArtisanDetail({
    artisanId: paramProps.artisanId,
  });

  return <ArtisanProfileTabs artisan={artisan} />;
}