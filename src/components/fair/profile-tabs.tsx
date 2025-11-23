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
import { FairEvent } from "~/components/fair/fair-event";
import type { FairDetailProps } from "~/types";
import { useSearchParams } from "next/navigation";
import { getSafeImageSrc } from "~/lib/utils";
type FairProfileTabsProps = {
  fair: FairDetailProps;
  initialTab?: "general" | "events";
};

const sanitizeTab = (tab?: string | null) => {
  if (!tab) return "general";
  if (tab === "events" || tab === "general") {
    return tab;
  }
  return "general";
};

export const FairProfileTabs = ({
  fair,
  initialTab = "general",
}: FairProfileTabsProps) => {
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState<"general" | "events">(
    sanitizeTab(initialTab)
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
      <div className="relative flex flex-col items-center pb-6 z-[100]">
        <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-center md:items-end w-full px-4 md:px-0 relative z-[100]">
          <div className="relative -mt-0 md:-mt-[14rem] h-[12rem] w-[12rem] sm:h-[15rem] sm:w-[15rem] overflow-hidden rounded-lg shadow-lg flex-shrink-0 z-[100]">
            <Image
              src={getSafeImageSrc(fair.dp)}
              alt="Profile photo"
              priority
              className="rounded-lg object-cover"
              fill
              sizes="100%"
            />
            <div className="absolute bottom-0 left-0 right-0 h-[3rem] bg-gradient-to-t from-[#0088cc] to-transparent p-4">
              <h2 className="text-center text-sm font-semibold text-white">
                {fair.firstName} {fair.lastName}
              </h2>
            </div>
          </div>
          <TabsList className="relative -mt-0 md:-mt-[12rem] flex h-auto flex-wrap items-center md:items-end justify-center md:justify-end gap-2 bg-transparent p-0 w-full md:w-auto z-[100]">
            {[
              { id: "general", label: "General Info." },
              { id: "events", label: "Fair Events" },
            ].map((tab) => (
              <TabsTrigger
                key={tab.id}
                value={tab.id}
                className="rounded-b-none rounded-t-lg bg-gray-200 px-3 sm:px-4 py-2 font-text text-sm sm:text-lg text-gray-950 backdrop-blur hover:bg-primary hover:text-white data-[state=active]:bg-primary data-[state=active]:text-white relative z-[100]"
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
              <div className="flex flex-col lg:flex-row items-start lg:items-center lg:justify-between gap-4">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 lg:gap-8 w-full lg:w-auto">
                  <div className="flex">
                    {Array(5)
                      .fill(0)
                      .map((_, index) => (
                        <Star
                          key={index}
                          className={`h-5 w-5 sm:h-6 sm:w-6 transition-colors duration-200 ${
                            index < 5
                              ? "fill-yellow-400 text-yellow-400"
                              : "fill-gray-300 text-gray-300"
                          }`}
                        />
                      ))}
                  </div>

                  <div className="flex flex-col gap-1 sm:border-l border-white/20 sm:pl-6 lg:pl-8">
                    <span className="text-xs text-white/70">Experience</span>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-purple-400" />
                      <span className="text-sm sm:text-base font-medium">10+ Years</span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1 sm:border-l border-white/20 sm:pl-6 lg:pl-8">
                    <span className="text-xs text-white/70">Total Events</span>
                    <div className="flex items-center gap-2">
                      <Compass className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400" />
                      <span className="text-sm sm:text-base font-medium">
                        {fair.FairEvent.length} Events Available
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center sm:justify-between gap-4 border-t border-white/10 pt-4">
                <div className="flex flex-col gap-1">
                  <span className="text-xs text-white/70">Specialization</span>
                  <div className="flex items-center gap-2">
                    <Binoculars className="h-4 w-4 sm:h-5 sm:w-5 text-green-400" />
                    <span className="text-sm sm:text-base font-medium">
                      Fair Management
                    </span>
                  </div>
                </div>

                <div className="flex flex-col gap-1 sm:border-l border-white/20 sm:pl-6 lg:pl-8">
                  <span className="text-xs text-white/70">Languages</span>
                  <div className="flex items-center gap-2">
                    <Languages className="h-4 w-4 sm:h-5 sm:w-5 text-orange-400" />
                    <span className="text-sm sm:text-base font-medium">
                      English, Hindi
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 rounded p-2 transition-colors duration-200 hover:bg-white/5">
                  <MapPin className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                  <span className="text-sm sm:text-base break-words">{fair.address}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 sm:mt-8 space-y-4">
            <h2 className="border-b border-gray-200 pb-3 text-lg sm:text-xl font-semibold text-gray-800">
              About the Fair Organizer
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-gray-700">
              {fair.description}
            </p>
          </div>
        </TabsContent>

        <TabsContent value="events" className="grid gap-6">
          <HeadlingUnderline title="Available Fair Events" />
          {fair.FairEvent.map((event) => (
            <FairEvent event={event} key={event.eventId} />
          ))}
        </TabsContent>
      </div>
    </Tabs>
  );
};
