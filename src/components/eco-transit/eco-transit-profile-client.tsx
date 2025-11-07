"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "~/components/ui/tabs";
import Image from "next/image";
import { MapPin, Star, Bus } from "lucide-react";
import { HeadlingUnderline } from "~/components/common/heading-underline";
import { EcoTransitPackage } from "~/components/eco-transit/package-list";
import { EcoTransitCalendar } from "~/components/eco-transit/booking/eco-transit-calendar";
import { useSearchParams } from "next/navigation";
import type { EcoTransitDetailProps, EcoTransitOptionProps } from "~/types";

export function EcoTransitPageClient({ transit }: { transit: EcoTransitDetailProps }) {
  return (
    <Tabs defaultValue="general" className="relative z-50 w-full">
      <div className="relative z-50 flex flex-col items-center pb-6">
        <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-center md:items-end w-full px-4 md:px-0">
          <div className="relative -mt-0 md:-mt-[14rem] h-[12rem] w-[12rem] sm:h-[15rem] sm:w-[15rem] overflow-hidden rounded-lg shadow-lg flex-shrink-0">
            <Image
              src={!transit?.dp || transit.dp === "" ? "/placeholder.png" : transit.dp}
              alt="Profile photo"
              priority
              className="rounded-lg object-cover"
              fill
              sizes="100%"
            />
            <div className="absolute bottom-0 left-0 right-0 h-[3rem] bg-gradient-to-t from-[#0088cc] to-transparent p-4">
              <h2 className="text-center text-sm font-semibold text-white">{transit?.name || "Eco Transit Service"}</h2>
            </div>
          </div>
          <TabsList className="relative sm:-mt-8 md:-mt-10 lg:-mt-12 flex h-auto flex-wrap items-center justify-center gap-1 sm:gap-1.5 bg-transparent p-0 w-full sm:w-auto mt-2 sm:mt-0 z-20">
            {[
              { id: "general", label: "General Info." },
              { id: "options", label: "Transit Options" },
              { id: "booking", label: "Booking" },
            ].map((tab) => (
              <TabsTrigger
                key={tab.id}
                value={tab.id}
                className="rounded-b-none rounded-t-lg bg-gray-200 px-3 sm:px-4 py-2 font-text text-sm sm:text-lg text-gray-950 backdrop-blur hover:bg-primary hover:text-white data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                <span className="mr-2">+</span>
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>
      </div>
      <div className="mt-6 rounded-lg bg-white/90 p-4 sm:p-6 text-gray-900 shadow-lg backdrop-blur">
        <TabsContent value="general" className="grid gap-6">
          <HeadlingUnderline title="General Information" />
          <div className="rounded-lg bg-primary p-4 sm:p-6 lg:p-8 text-white shadow-lg transition-all duration-300 hover:shadow-xl">
            <div className="flex flex-col gap-4 sm:gap-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center sm:justify-between gap-4">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 lg:gap-8 w-full sm:w-auto">
                  <div className="flex">
                    {Array(5)
                      .fill(0)
                      .map((_, index) => (
                        <Star
                          key={index}
                          className={`h-5 w-5 sm:h-6 sm:w-6 ${index < 4 ? "fill-yellow-400 text-yellow-400" : "fill-gray-300 text-gray-300"}`}
                        />
                      ))}
                  </div>
                  <div className="flex flex-col gap-1 sm:border-l border-white/20 sm:pl-6 lg:pl-8">
                    <span className="text-xs text-white/70">Service Type</span>
                    <div className="flex items-center gap-2">
                      <Bus className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400" />
                      <span className="text-sm sm:text-base font-medium">Eco-Friendly Transport</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-start sm:items-center justify-between border-t border-white/10 pt-4">
                <div className="flex items-center gap-2 rounded p-2 transition-colors duration-200 hover:bg-white/5">
                  <MapPin className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                  <span className="text-sm sm:text-base break-words">{transit?.address || "Address not available"}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 sm:mt-8 space-y-4">
            <h2 className="border-b border-gray-200 pb-3 text-lg sm:text-xl font-semibold text-gray-800">
              About the Transit Service
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-gray-700">{transit?.description || "No description available"}</p>
          </div>
        </TabsContent>
        <TabsContent value="options" className="grid gap-6">
          <HeadlingUnderline title="Available Transit Options" />
          <EcoTransitOptionsWithParams options={transit?.EcoTransitOption || []} />
        </TabsContent>
        <TabsContent value="booking" className="grid gap-6 sm:gap-8">
          <HeadlingUnderline title="Booking" />
          <EcoTransitCalendar />
        </TabsContent>
      </div>
    </Tabs>
  );
}

function EcoTransitOptionsWithParams({ options }: { options: EcoTransitOptionProps[] }) {
  const searchParams = useSearchParams();
  const pickupLocation = searchParams.get("pickupLocation") ?? "";
  const dropOffLocation = searchParams.get("dropOffLocation") ?? "";
  const numberOfPassengers = Number(searchParams.get("numberOfPassengers")) ?? 1;

  if (!options || options.length === 0) {
    return (
      <div className="flex h-32 items-center justify-center rounded-lg bg-gray-100">
        <p className="text-sm text-gray-500">No transit options available</p>
      </div>
    );
  }

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

