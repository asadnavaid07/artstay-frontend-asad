import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { Badge } from "~/components/ui/badge";
import { Card } from "~/components/ui/card";
import { api } from "~/trpc/server";
import Image from "next/image";
import {
  Star,
  Building2,
  Users,
  Bed,
  DollarSign,
  CheckCircle,
} from "lucide-react";
import { HeadlingUnderline } from "~/components/common/heading-underline";
import { RoomList } from "~/components/eco-retreat/room-list";
import type { RoomProps } from "~/types";

type PageProps = {
  searchParams: Promise<{ hotelId: string }>;
};

export default async function HotelPage({ searchParams }: PageProps) {
  const paramProps = await searchParams;
  const rooms: RoomProps[] = await api.ecoretreact.getAllRoomsByHotelId({
    hotelId: paramProps.hotelId,
  });

  return (
    <Tabs defaultValue="overview" className="w-full">
      <div className="relative flex flex-col items-center pb-4 sm:pb-6 px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center w-full max-w-7xl">
          <div className="relative -mt-[8rem] sm:-mt-[12rem] md:-mt-[14rem] h-[10rem] w-[10rem] sm:h-[12rem] sm:w-[12rem] md:h-[15rem] md:w-[15rem] overflow-hidden rounded-xl border-2 sm:border-4 border-white shadow-xl">
            <Image
              src={"/placeholder.png"}
              alt="Hotel Rooms"
              priority
              className="rounded-lg object-cover"
              fill
              sizes="(max-width: 640px) 160px, (max-width: 768px) 192px, 240px"
            />
            <div className="absolute bottom-0 left-0 right-0 flex h-[3rem] sm:h-[4rem] flex-col justify-end bg-gradient-to-t from-primary/90 to-transparent p-3 sm:p-4">
              <h2 className="text-center font-heading text-xs sm:text-sm font-bold text-white">
                Hotel Rooms
              </h2>
              <p className="text-center font-text text-[10px] sm:text-xs text-white/90">
                {rooms.length} Available
              </p>
            </div>
          </div>
          <TabsList className="relative -mt-[6rem] sm:-mt-[10rem] md:-mt-[12rem] flex h-auto flex-wrap items-end justify-center sm:justify-end gap-2 bg-transparent p-0 w-full sm:w-auto">
            {[
              { id: "overview", label: "Rooms Overview" },
              { id: "rooms", label: "All Rooms" },
            ].map((tab) => (
              <TabsTrigger
                key={tab.id}
                value={tab.id}
                className="rounded-b-none rounded-t-xl border border-border/50 bg-card/90 px-3 sm:px-4 md:px-6 py-2 sm:py-3 font-text text-xs sm:text-sm md:text-base text-foreground shadow-md backdrop-blur hover:bg-primary hover:text-white data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                <Building2 className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                <span className="hidden sm:inline">{tab.label}</span>
                <span className="sm:hidden">{tab.id === "overview" ? "Overview" : "Rooms"}</span>
              </TabsTrigger>
            ))}
          </TabsList>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <div className="mt-4 sm:mt-6 rounded-lg bg-white/90 p-4 sm:p-6 text-gray-900 shadow-lg backdrop-blur">
          <TabsContent value="overview" className="space-y-6 sm:space-y-8">
            <HeadlingUnderline title="Rooms Overview" />

            {/* Room Stats Card */}
            <Card className="border-0 bg-primary p-4 sm:p-6 md:p-8 text-white shadow-xl transition-all duration-300 hover:shadow-2xl">
              <div className="flex flex-col gap-4 sm:gap-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 md:gap-8 w-full sm:w-auto">
                    {/* Average Rating */}
                    <div className="flex">
                      {Array(5)
                        .fill(0)
                        .map((_, index) => (
                          <Star
                            key={index}
                            className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                    </div>

                    <div className="flex flex-col gap-1 sm:border-l sm:border-white/20 sm:pl-4 md:pl-8">
                      <span className="font-text text-xs text-white/70">
                        Total Rooms
                      </span>
                      <div className="flex items-center gap-2">
                        <Bed className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400" />
                        <span className="font-text text-sm sm:text-base font-medium">
                          {rooms.length} Rooms
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col gap-1 sm:border-l sm:border-white/20 sm:pl-4 md:pl-8">
                      <span className="font-text text-xs text-white/70">
                        Available Now
                      </span>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-400" />
                        <span className="font-text text-sm sm:text-base font-medium">
                          {rooms.filter((room) => room.isActive).length}{" "}
                          Available
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6 border-t border-white/10 pt-4 sm:pt-6">
                  <div className="flex flex-col gap-1">
                    <span className="font-text text-xs text-white/70">
                      Price Range
                    </span>
                    <div className="flex items-center gap-2">
                      <DollarSign className="h-4 w-4 sm:h-5 sm:w-5 text-green-400" />
                      <span className="font-text text-sm sm:text-base font-medium">
                        ${Math.min(...rooms.map((r) => r.price))} - $
                        {Math.max(...rooms.map((r) => r.price))} per night
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1 sm:border-l sm:border-white/20 sm:pl-4 md:pl-8">
                    <span className="font-text text-xs text-white/70">
                      Capacity Range
                    </span>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 sm:h-5 sm:w-5 text-purple-400" />
                      <span className="font-text text-sm sm:text-base font-medium">
                        {Math.min(...rooms.map((r) => r.capacity))} -{" "}
                        {Math.max(...rooms.map((r) => r.capacity))} Guests
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Room Types Summary */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              <Card className="border border-border/50 p-4 sm:p-6">
                <h3 className="mb-3 sm:mb-4 font-heading text-base sm:text-lg font-bold text-primary">
                  Room Types
                </h3>
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-text text-sm sm:text-base text-foreground">
                      Different Types
                    </span>
                    <Badge className="bg-primary/10 text-primary text-xs sm:text-sm">
                      {new Set(rooms.map((r) => r.name)).size}
                    </Badge>
                  </div>
                </div>
              </Card>

              <Card className="border border-border/50 p-4 sm:p-6">
                <h3 className="mb-3 sm:mb-4 font-heading text-base sm:text-lg font-bold text-primary">
                  Features
                </h3>
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-text text-sm sm:text-base text-foreground">
                      Common Features
                    </span>
                    <Badge className="bg-primary/10 text-primary text-xs sm:text-sm">
                      {rooms[0]?.features?.length ?? 0}
                    </Badge>
                  </div>
                </div>
              </Card>

              <Card className="border border-border/50 p-4 sm:p-6">
                <h3 className="mb-3 sm:mb-4 font-heading text-base sm:text-lg font-bold text-primary">
                  Availability
                </h3>
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-text text-sm sm:text-base text-foreground">
                      Total Inventory
                    </span>
                    <Badge className="bg-primary/10 text-primary text-xs sm:text-sm">
                      {rooms.reduce((sum, room) => sum + room.quantity, 0)}{" "}
                      Units
                    </Badge>
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="rooms" className="space-y-6 sm:space-y-8">
            <HeadlingUnderline title="All Available Rooms" />
            <RoomList rooms={rooms} />
            
          </TabsContent>
        </div>
      </div>
    </Tabs>
  );
}
