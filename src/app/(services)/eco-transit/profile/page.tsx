'use client';

import { Tabs, TabsList, TabsTrigger, TabsContent } from "~/components/ui/tabs";
import Image from "next/image";
import { MapPin, Star, Bus } from "lucide-react";
import { HeadlingUnderline } from "~/components/common/heading-underline";
import { EcoTransitPackage } from "~/components/eco-transit/package-list";
import { EcoTransitCalendar } from "~/components/eco-transit/booking/eco-transit-calendar";
import { useSearchParams as useClientSearchParams } from "next/navigation";
import React from "react";

// Mock data (replace with tRPC query later)
const mockTransit: EcoTransitDetailProps = {
  transitId: "1",
  name: "Kashmir Valley Shuttle",
  dp: "/placeholder.png",
  address: "Srinagar Bus Station",
  description: "Reliable and eco-friendly transport services across Kashmir.",
  accountId: "acc1",
  EcoTransitOption: [
    {
      optionId: "opt1",
      title: "Airport to City Center",
      operator: "Valley Transports",
      description: "Comfortable ride with Wi-Fi and AC.",
      duration: "1 hour",
      features: ["Wi-Fi", "AC", "Luggage Space"],
      fee: 20,
      transitId: "1",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ],
};


function EcoTransitPageClient({ transit }: { transit: EcoTransitDetailProps }) {
  return (
    <Tabs defaultValue="general" className="w-full">
      <div className="relative flex flex-col items-center pb-6">
        <div className="flex gap-2">
          <div className="relative -mt-[14rem] h-[15rem] w-[15rem] overflow-hidden rounded-lg shadow-lg">
            <Image
              src={transit.dp}
              alt="Profile photo"
              priority
              className="rounded-lg object-cover"
              fill
              sizes="100%"
            />
            <div className="absolute bottom-0 left-0 right-0 h-[3rem] bg-gradient-to-t from-[#0088cc] to-transparent p-4">
              <h2 className="text-center text-sm font-semibold text-white">{transit.name}</h2>
            </div>
          </div>
          <TabsList className="relative -mt-[12rem] flex h-auto flex-wrap items-end justify-end gap-2 bg-transparent p-0">
            {[
              { id: "general", label: "General Info." },
              { id: "options", label: "Transit Options" },
              { id: "booking", label: "Booking" },
            ].map((tab) => (
              <TabsTrigger
                key={tab.id}
                value={tab.id}
                className="rounded-b-none rounded-t-lg bg-gray-200 px-4 py-2 font-text text-lg text-gray-950 backdrop-blur hover:bg-primary hover:text-white data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                <span className="mr-2">+</span>
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>
      </div>
      <div className="mt-6 rounded-lg bg-white/90 p-6 text-gray-900 shadow-lg backdrop-blur">
        <TabsContent value="general" className="grid gap-6">
          <HeadlingUnderline title="General Information" />
          <div className="rounded-lg bg-primary p-8 text-white shadow-lg transition-all duration-300 hover:shadow-xl">
            <div className="flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-8">
                  <div className="flex">
                    {Array(5)
                      .fill(0)
                      .map((_, index) => (
                        <Star
                          key={index}
                          className={`h-6 w-6 ${index < 4 ? "fill-yellow-400 text-yellow-400" : "fill-gray-300 text-gray-300"}`}
                        />
                      ))}
                  </div>
                  <div className="flex flex-col gap-1 border-l border-white/20 pl-8">
                    <span className="text-xs text-white/70">Service Type</span>
                    <div className="flex items-center gap-2">
                      <Bus className="h-5 w-5 text-blue-400" />
                      <span className="text-base font-medium">Eco-Friendly Transport</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between border-t border-white/10 pt-4">
                <div className="flex items-center gap-2 rounded p-2 transition-colors duration-200 hover:bg-white/5">
                  <MapPin className="h-5 w-5" />
                  <span className="text-base">{transit.address}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 space-y-4">
            <h2 className="border-b border-gray-200 pb-3 text-xl font-semibold text-gray-800">
              About the Transit Service
            </h2>
            <p className="text-base leading-relaxed text-gray-700">{transit.description}</p>
          </div>
        </TabsContent>
        <TabsContent value="options" className="grid gap-6">
          <HeadlingUnderline title="Available Transit Options" />
          <EcoTransitOptionsWithParams options={transit.EcoTransitOption} />
        </TabsContent>
        <TabsContent value="booking" className="grid gap-8">
          <HeadlingUnderline title="Booking" />
          <EcoTransitCalendar />
        </TabsContent>
      </div>
    </Tabs>
  );
}

export default function EcoTransitPage() {
  // Replace with api.ecoTransit.getTransitDetail({ transitId: paramProps.transitId })
  const transit = mockTransit;
  return <EcoTransitPageClient transit={transit} />;
}

function EcoTransitOptionsWithParams({ options }: { options: EcoTransitOptionProps[] }) {
  const searchParams = useClientSearchParams();
  const pickupLocation = searchParams.get("pickupLocation") ?? "";
  const dropOffLocation = searchParams.get("dropOffLocation") ?? "";
  const numberOfPassengers = Number(searchParams.get("numberOfPassengers")) ?? 1;

  return (
    <>
      {options.map((option) => (
        <EcoTransitPackage
          key={option.optionId}
          option={option}
          pickupLocation={pickupLocation}
          dropOffLocation={dropOffLocation}
          numberOfPassengers={numberOfPassengers}
        />
      ))}
    </>
  );
}