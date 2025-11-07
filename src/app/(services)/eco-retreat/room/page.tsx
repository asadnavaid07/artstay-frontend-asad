import { type Metadata } from "next";
import { RoomCalendar } from "~/components/eco-retreat/booking/room-calendar";
import { RoomInput } from "~/components/eco-retreat/booking/room-input";
import { api } from "~/trpc/server";

export const metadata: Metadata = {
  title: "ARTSAY | Room booking",
};

type PageProps = {
  searchParams: Promise<{ roomId: string }>;
};

export default async function BookingPage({ searchParams }: PageProps) {
  const serachProps = await searchParams;
  const room = await api.ecoretreact.getRoomById({
    roomId: serachProps.roomId,
  });
  return (
    <div className="mt-6 sm:mt-8 md:mt-10 lg:mt-12 grid gap-4 sm:gap-6 md:gap-8 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
      <RoomInput room={room} />
       <RoomCalendar room={room} />
    </div>
  );
}
