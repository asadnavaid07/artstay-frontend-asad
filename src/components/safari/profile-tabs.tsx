"use client";

import { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import Image from "next/image";
import {
  MapPin,
  Star,
  Clock,
  Binoculars,
  Compass,
  Languages,
} from "lucide-react";
import { HeadlingUnderline } from "~/components/common/heading-underline";
import { SafariPackage } from "~/components/safari/package-list";
import { SafariCalendar } from "~/components/safari/booking/safari-calendar";
import type { SafariDetailProps } from "~/types";
import { useSearchParams } from "next/navigation";
import { getSafeImageSrc } from "~/lib/utils";

type SafariProfileTabsProps = {
  safari: SafariDetailProps;
  initialTab?: "general" | "packages" | "booking";
};

const sanitizeTab = (tab?: string | null) => {
  if (!tab) return "general";
  if (tab === "packages" || tab === "booking" || tab === "general") {
    return tab;
  }
  return "general";
};

export const SafariProfileTabs = ({
  safari,
  initialTab = "general",
}: SafariProfileTabsProps) => {
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState<"general" | "packages" | "booking">(
    sanitizeTab(initialTab),
  );

  useEffect(() => {
    const tabFromParams = sanitizeTab(searchParams.get("tab"));
    setActiveTab(tabFromParams);
  }, [searchParams]);

  return (
    <Tabs
      value={activeTab}
      onValueChange={(val) => setActiveTab(val as typeof activeTab)}
      className="w-full"
    >
      <div className="relative flex flex-col items-center pb-3 sm:pb-4 md:pb-5 z-10">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 w-full">
          <div className="relative -mt-16 sm:-mt-20 md:-mt-24 lg:-mt-28 h-32 w-32 sm:h-36 sm:w-36 md:h-40 md:w-40 lg:h-44 lg:w-44 overflow-hidden rounded-lg shadow-xl flex-shrink-0 border-3 sm:border-4 border-white bg-white z-20">
            <Image
              src={getSafeImageSrc(safari.dp)}
              alt="Profile photo"
              priority
              className="rounded-lg object-cover"
              fill
              sizes="(max-width: 640px) 128px, (max-width: 768px) 144px, (max-width: 1024px) 160px, 176px"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0088cc]/90 to-transparent py-1.5 sm:py-2">
              <h2 className="text-center text-xs sm:text-sm font-semibold text-white px-2 truncate">
                {safari.firstName} {safari.lastName}
              </h2>
            </div>
          </div>

          <TabsList className="relative sm:-mt-8 md:-mt-10 lg:-mt-12 flex h-auto flex-wrap items-center sm:items-end justify-center sm:justify-end gap-1 sm:gap-1.5 bg-transparent p-0 w-full sm:w-auto mt-2 sm:mt-0 z-20">
            {[
              { id: "general", label: "General Info." },
              { id: "packages", label: "Safari Tours" },
              { id: "booking", label: "Booking" },
            ].map((tab) => (
              <TabsTrigger
                key={tab.id}
                value={tab.id}
                className="rounded-b-none rounded-t-lg bg-gray-200 px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs md:text-sm text-gray-950 hover:bg-primary hover:text-white data-[state=active]:bg-primary data-[state=active]:text-white whitespace-nowrap flex-shrink-0 transition-colors shadow-md"
              >
                <span className="mr-1">+</span>
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>
      </div>

      <div className="mt-3 sm:mt-4 rounded-lg bg-white/90 p-3 sm:p-4 md:p-5 lg:p-6 text-gray-900 shadow-lg backdrop-blur">
        <TabsContent value="general" className="space-y-4 sm:space-y-6">
          <HeadlingUnderline title="General Information" />

          <div className="rounded-lg bg-primary p-4 sm:p-5 md:p-6 lg:p-8 text-white shadow-lg">
            <div className="flex flex-col gap-4 sm:gap-5 md:gap-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 md:gap-8">
                <div className="flex gap-0.5 sm:gap-1">
                  {Array(5)
                    .fill(0)
                    .map((_, index) => (
                      <Star
                        key={index}
                        className={`h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 transition-colors duration-200 ${
                          index < 5
                            ? "fill-yellow-400 text-yellow-400"
                            : "fill-gray-300 text-gray-300"
                        }`}
                      />
                    ))}
                </div>

                <div className="flex flex-col gap-1 sm:border-l sm:border-white/20 sm:pl-4 md:pl-6 lg:pl-8">
                  <span className="text-[10px] sm:text-xs text-white/70">Experience</span>
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-purple-400 flex-shrink-0" />
                    <span className="text-xs sm:text-sm md:text-base font-medium">10+ Years</span>
                  </div>
                </div>

                <div className="flex flex-col gap-1 sm:border-l sm:border-white/20 sm:pl-4 md:pl-6 lg:pl-8">
                  <span className="text-[10px] sm:text-xs text-white/70">Total Tours</span>
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <Compass className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400 flex-shrink-0" />
                    <span className="text-xs sm:text-sm md:text-base font-medium">
                      {safari.SafariTour.length} Tours Available
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6 border-t border-white/10 pt-4">
                <div className="flex flex-col gap-1 flex-1 min-w-0">
                  <span className="text-[10px] sm:text-xs text-white/70">Specialization</span>
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <Binoculars className="h-4 w-4 sm:h-5 sm:w-5 text-green-400 flex-shrink-0" />
                    <span className="text-xs sm:text-sm md:text-base font-medium truncate">
                      Wildlife Photography
                    </span>
                  </div>
                </div>

                <div className="flex flex-col gap-1 flex-1 min-w-0 sm:border-l sm:border-white/20 sm:pl-4 md:pl-6 lg:pl-8">
                  <span className="text-[10px] sm:text-xs text-white/70">Languages</span>
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <Languages className="h-4 w-4 sm:h-5 sm:w-5 text-orange-400 flex-shrink-0" />
                    <span className="text-xs sm:text-sm md:text-base font-medium">
                      English, Hindi
                    </span>
                  </div>
                </div>

                <div className="flex flex-col gap-1 flex-1 min-w-0 sm:border-l sm:border-white/20 sm:pl-4 md:pl-6 lg:pl-8">
                  <span className="text-[10px] sm:text-xs text-white/70">Location</span>
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <MapPin className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm md:text-base truncate">{safari.address}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-3 sm:space-y-4">
            <h2 className="border-b border-gray-200 pb-2 sm:pb-3 text-base sm:text-lg md:text-xl font-semibold text-gray-800">
              About the Safari Guide
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-gray-700">
              {safari.description}
            </p>
          </div>
        </TabsContent>

        <TabsContent value="packages" className="space-y-4 sm:space-y-6">
          <HeadlingUnderline title="Available Safari Tours" />
          {safari.SafariTour.map((tour) => (
            <SafariPackage tour={tour} key={tour.tourId} />
          ))}
        </TabsContent>

        <TabsContent value="booking" className="space-y-4 sm:space-y-6 md:space-y-8">
          <HeadlingUnderline title="Booking" />
          <SafariCalendar />
        </TabsContent>
      </div>
    </Tabs>
  );
};

