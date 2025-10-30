"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { ArtisanCalendar } from "~/components/artisans/package/artisan-calendar";
import { HeadlingUnderline } from "~/components/common/heading-underline";
import { ArtisanPackage } from "~/components/artisans/package/package-list";
import Image from "next/image";
import {
  Trophy,
  MapPin,
  Star,
  GraduationCap,
  BookOpen,
  Clock,
  Medal,
  Scroll,
} from "lucide-react";
import {
  getCertificateString,
  getEducationString,
  getExperienceString,
  getRecognitionString,
  getTrainingString,
} from "~/lib/utils";
import type { ArtisanPortolioProps, ExperienceEnum, TraingEducationEnum, CertificationEnum, RecongnitionEnum } from "~/types";


interface ArtisanProfileTabsProps {
  artisan: ArtisanPortolioProps & { specialization?: string[]; craftFocusAreas?: string[] };
}

export const ArtisanProfileTabs = ({ artisan }: ArtisanProfileTabsProps) => {
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState("general");

  // Update active tab when URL parameter changes
  useEffect(() => {
    const tabParam = searchParams.get("tab");
    if (tabParam) {
      setActiveTab(tabParam);
    }
  }, [searchParams]);

  // Listen for custom tab change events
  useEffect(() => {
    const handleTabChange = (event: CustomEvent) => {
      setActiveTab(event.detail.tab);
    };

    window.addEventListener('tabChange', handleTabChange as EventListener);
    
    return () => {
      window.removeEventListener('tabChange', handleTabChange as EventListener);
    };
  }, []);

  return (
    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
      <div className="relative flex flex-col items-center pb-6">
        <div className="flex gap-2">
          <div className="relative -mt-[14rem] h-[15rem] w-[15rem] overflow-hidden rounded-lg shadow-lg">
            <Image
              src={artisan.dp == "" ? "/placeholder.png" : artisan.dp}
              alt="Profile photo"
              priority
              className="rounded-lg object-cover"
              fill
              sizes="100%"
            />
            <div className="absolute bottom-0 left-0 right-0 h-[3rem] bg-gradient-to-t from-[#0088cc] to-transparent p-4">
              <h2 className="text-center text-sm font-semibold text-white">
                {artisan.firstName} {artisan.lastName}
              </h2>
            </div>
          </div>
          <TabsList className="relative -mt-[12rem] flex h-auto flex-wrap items-end justify-end gap-2 bg-transparent p-0">
            {[
              { id: "general", label: "General Info." },
              { id: "portfolio", label: "Portfolio" },
              { id: "packages", label: "Packages" },
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
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-white/20 p-3">
                    <Trophy className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Experience</h3>
                    <p className="text-sm text-white/80">
                      {getExperienceString(artisan.experience as ExperienceEnum)}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-white/20 p-3">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Location</h3>
                    <p className="text-sm text-white/80">{artisan.address}</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-white/20 p-3">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Education</h3>
                    <p className="text-sm text-white/80">
                      {getEducationString(artisan.education as TraingEducationEnum)}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-white/20 p-3">
                    <BookOpen className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Training</h3>
                    <p className="text-sm text-white/80">
                      {getTrainingString(artisan.training as TraingEducationEnum)}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-white/20 p-3">
                    <Medal className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Certification</h3>
                    <p className="text-sm text-white/80">
                      {getCertificateString(artisan.certificate as CertificationEnum)}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-white/20 p-3">
                    <Scroll className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Recognition</h3>
                    <p className="text-sm text-white/80">
                      {getRecognitionString(artisan.recongnition as RecongnitionEnum)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Skills and Expertise */}
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" />
                Specializations
              </h3>
              <div className="flex flex-wrap gap-2">
                {artisan.specialization?.map((spec, index) => (
                  <span
                    key={index}
                    className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary"
                  >
                    {spec}
                  </span>
                )) || <span className="text-sm text-gray-500">No specializations listed</span>}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                <Star className="h-5 w-5 text-primary" />
                Craft Focus Areas
              </h3>
              <div className="flex flex-wrap gap-2">
                {artisan.craftFocusAreas?.map((area, index) => (
                  <span
                    key={index}
                    className="rounded-full bg-secondary/10 px-3 py-1 text-sm text-secondary"
                  >
                    {area}
                  </span>
                )) || <span className="text-sm text-gray-500">No craft focus areas listed</span>}
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent
          value="portfolio"
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          <HeadlingUnderline title=" My Portfolio" />
          {artisan.Portfolio?.images?.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Image Container */}
              <div className="relative h-[17rem] w-full">
                <Image
                  src={image}
                  alt={`Portfolio image ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  priority={index < 4} // Prioritize loading first 4 images
                />
              </div>

              {/* Optional: Image Number Badge */}
              <div className="absolute left-3 top-3 rounded-full bg-white/90 px-2 py-1 text-xs font-medium text-gray-800 shadow-md">
                {index + 1}/{artisan.Portfolio?.images?.length || 0}
              </div>
            </div>
          ))}

          {/* Loading State Placeholder */}
          {(!artisan.Portfolio?.images || artisan.Portfolio.images.length === 0) && (
            <div className="col-span-full flex h-[17rem] items-center justify-center rounded-xl bg-gray-100">
              <p className="text-gray-500">No portfolio images available</p>
            </div>
          )}
        </TabsContent>
        <TabsContent value="packages">
          <HeadlingUnderline title="Learning Packages" />
          <ArtisanPackage packages={artisan.ArtisanPackage || []} />
        </TabsContent>
        <TabsContent value="booking" className="grid gap-8">
          <HeadlingUnderline title="Booking" />
          <ArtisanCalendar />
        </TabsContent>
      </div>
    </Tabs>
  );
};
