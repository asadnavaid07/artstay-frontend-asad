// "use client";

// import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
// import { useSearchParams } from "next/navigation";
// import { useState, useEffect } from "react";
// import { ArtisanCalendar } from "~/components/artisans/package/artisan-calendar";
// import { HeadlingUnderline } from "~/components/common/heading-underline";
// import { ArtisanPackage } from "~/components/artisans/package/package-list";
// import Image from "next/image";
// import {
//   Trophy,
//   MapPin,
//   Star,
//   GraduationCap,
//   BookOpen,
//   Clock,
//   Medal,
//   Scroll,
// } from "lucide-react";
// import {
//   getCertificateString,
//   getEducationString,
//   getExperienceString,
//   getRecognitionString,
//   getTrainingString,
// } from "~/lib/utils";
// import type { ArtisanPortolioProps, ExperienceEnum, TraingEducationEnum, CertificationEnum, RecongnitionEnum } from "~/types";


// interface ArtisanProfileTabsProps {
//   artisan: ArtisanPortolioProps & { specialization?: string[]; craftFocusAreas?: string[] };
// }

// export const ArtisanProfileTabs = ({ artisan }: ArtisanProfileTabsProps) => {
//   const searchParams = useSearchParams();
//   const [activeTab, setActiveTab] = useState("general");

//   // Update active tab when URL parameter changes
//   useEffect(() => {
//     const tabParam = searchParams.get("tab");
//     if (tabParam) {
//       setActiveTab(tabParam);
//     }
//   }, [searchParams]);

//   // Listen for custom tab change events
//   useEffect(() => {
//     const handleTabChange = (event: CustomEvent) => {
//       setActiveTab(event.detail.tab);
//     };

//     window.addEventListener('tabChange', handleTabChange as EventListener);
    
//     return () => {
//       window.removeEventListener('tabChange', handleTabChange as EventListener);
//     };
//   }, []);

//   return (
//     <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
//       <div className="relative flex flex-col items-center pb-4 sm:pb-6">
//         <div className="flex flex-col sm:flex-row items-center sm:items-end gap-3 sm:gap-2 w-full">
//           <div className="relative -mt-[10rem] sm:-mt-[12rem] md:-mt-[14rem] h-[12rem] w-[12rem] sm:h-[14rem] sm:w-[14rem] md:h-[15rem] md:w-[15rem] overflow-hidden rounded-lg shadow-lg flex-shrink-0">
//             <Image
//               src={artisan.dp == "" ? "/placeholder.png" : artisan.dp}
//               alt="Profile photo"
//               priority
//               className="rounded-lg object-cover"
//               fill
//               sizes="(max-width: 640px) 192px, (max-width: 768px) 224px, 240px"
//             />
//             <div className="absolute bottom-0 left-0 right-0 h-[2.5rem] sm:h-[3rem] bg-gradient-to-t from-[#0088cc] to-transparent p-3 sm:p-4">
//               <h2 className="text-center text-xs sm:text-sm font-semibold text-white">
//                 {artisan.firstName} {artisan.lastName}
//               </h2>
//             </div>
//           </div>
//           <TabsList className="relative -mt-[9rem] sm:-mt-[11rem] md:-mt-[12rem] flex h-auto flex-wrap items-center sm:items-end justify-center sm:justify-end gap-1.5 sm:gap-2 bg-transparent p-0 w-full sm:w-auto overflow-x-auto">
//             {[
//               { id: "general", label: "General Info." },
//               { id: "portfolio", label: "Portfolio" },
//               { id: "packages", label: "Packages" },
//               { id: "booking", label: "Booking" },
//             ].map((tab) => (
//               <TabsTrigger
//                 key={tab.id}
//                 value={tab.id}
//                 className="rounded-b-none rounded-t-lg bg-gray-200 px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 font-text text-xs sm:text-sm md:text-base lg:text-lg text-gray-950 backdrop-blur hover:bg-primary hover:text-white data-[state=active]:bg-primary data-[state=active]:text-white whitespace-nowrap flex-shrink-0"
//               >
//                 <span className="mr-1 sm:mr-2">+</span>
//                 {tab.label}
//               </TabsTrigger>
//             ))}
//           </TabsList>
//         </div>
//       </div>

//       <div className="mt-4 sm:mt-6 rounded-lg bg-white/90 p-3 sm:p-4 md:p-5 lg:p-6 text-gray-900 shadow-lg backdrop-blur">
//         <TabsContent value="general" className="grid gap-4 sm:gap-6">
//           <HeadlingUnderline title="General Information" />
//           <div className="rounded-lg bg-primary p-4 sm:p-6 md:p-8 text-white shadow-lg transition-all duration-300 hover:shadow-xl">
//             <div className="flex flex-col gap-4 sm:gap-5 md:gap-6">
//               <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6">
//                 <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
//                   <div className="rounded-full bg-white/20 p-2 sm:p-3 flex-shrink-0">
//                     <Trophy className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
//                   </div>
//                   <div className="min-w-0 flex-1">
//                     <h3 className="text-base sm:text-lg font-semibold">Experience</h3>
//                     <p className="text-xs sm:text-sm text-white/80 break-words">
//                       {getExperienceString(artisan.experience as ExperienceEnum)}
//                     </p>
//                   </div>
//                 </div>
//                 <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
//                   <div className="rounded-full bg-white/20 p-2 sm:p-3 flex-shrink-0">
//                     <MapPin className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
//                   </div>
//                   <div className="min-w-0 flex-1">
//                     <h3 className="text-base sm:text-lg font-semibold">Location</h3>
//                     <p className="text-xs sm:text-sm text-white/80 break-words">{artisan.address}</p>
//                   </div>
//                 </div>
//               </div>

//               <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6">
//                 <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
//                   <div className="rounded-full bg-white/20 p-2 sm:p-3 flex-shrink-0">
//                     <GraduationCap className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
//                   </div>
//                   <div className="min-w-0 flex-1">
//                     <h3 className="text-base sm:text-lg font-semibold">Education</h3>
//                     <p className="text-xs sm:text-sm text-white/80 break-words">
//                       {getEducationString(artisan.education as TraingEducationEnum)}
//                     </p>
//                   </div>
//                 </div>
//                 <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
//                   <div className="rounded-full bg-white/20 p-2 sm:p-3 flex-shrink-0">
//                     <BookOpen className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
//                   </div>
//                   <div className="min-w-0 flex-1">
//                     <h3 className="text-base sm:text-lg font-semibold">Training</h3>
//                     <p className="text-xs sm:text-sm text-white/80 break-words">
//                       {getTrainingString(artisan.training as TraingEducationEnum)}
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6">
//                 <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
//                   <div className="rounded-full bg-white/20 p-2 sm:p-3 flex-shrink-0">
//                     <Medal className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
//                   </div>
//                   <div className="min-w-0 flex-1">
//                     <h3 className="text-base sm:text-lg font-semibold">Certification</h3>
//                     <p className="text-xs sm:text-sm text-white/80 break-words">
//                       {getCertificateString(artisan.certificate as CertificationEnum)}
//                     </p>
//                   </div>
//                 </div>
//                 <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
//                   <div className="rounded-full bg-white/20 p-2 sm:p-3 flex-shrink-0">
//                     <Scroll className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
//                   </div>
//                   <div className="min-w-0 flex-1">
//                     <h3 className="text-base sm:text-lg font-semibold">Recognition</h3>
//                     <p className="text-xs sm:text-sm text-white/80 break-words">
//                       {getRecognitionString(artisan.recongnition as RecongnitionEnum)}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Skills and Expertise */}
//           <div className="mt-4 sm:mt-6 md:mt-8 grid gap-4 sm:gap-6 md:grid-cols-2">
//             <div className="space-y-4">
//               <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
//                 <BookOpen className="h-5 w-5 text-primary" />
//                 Specializations
//               </h3>
//               <div className="flex flex-wrap gap-2">
//                 {artisan.specialization?.map((spec, index) => (
//                   <span
//                     key={index}
//                     className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary"
//                   >
//                     {spec}
//                   </span>
//                 )) || <span className="text-sm text-gray-500">No specializations listed</span>}
//               </div>
//             </div>

//             <div className="space-y-4">
//               <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
//                 <Star className="h-5 w-5 text-primary" />
//                 Craft Focus Areas
//               </h3>
//               <div className="flex flex-wrap gap-2">
//                 {artisan.craftFocusAreas?.map((area, index) => (
//                   <span
//                     key={index}
//                     className="rounded-full bg-secondary/10 px-3 py-1 text-sm text-secondary"
//                   >
//                     {area}
//                   </span>
//                 )) || <span className="text-sm text-gray-500">No craft focus areas listed</span>}
//               </div>
//             </div>
//           </div>
//         </TabsContent>

//         <TabsContent
//           value="portfolio"
//           className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3"
//         >
//           <HeadlingUnderline title=" My Portfolio" />
//           {artisan.Portfolio?.images?.map((image, index) => (
//             <div
//               key={index}
//               className="group relative overflow-hidden rounded-lg sm:rounded-xl bg-white shadow-md transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl"
//             >
//               {/* Image Container */}
//               <div className="relative h-[12rem] sm:h-[15rem] md:h-[17rem] w-full">
//                 <Image
//                   src={image}
//                   alt={`Portfolio image ${index + 1}`}
//                   fill
//                   sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 50vw, 33vw"
//                   className="object-cover transition-transform duration-300 group-hover:scale-105"
//                   priority={index < 4} // Prioritize loading first 4 images
//                 />
//               </div>

//               {/* Optional: Image Number Badge */}
//               <div className="absolute left-2 sm:left-3 top-2 sm:top-3 rounded-full bg-white/90 px-1.5 sm:px-2 py-0.5 sm:py-1 text-[10px] sm:text-xs font-medium text-gray-800 shadow-md">
//                 {index + 1}/{artisan.Portfolio?.images?.length || 0}
//               </div>
//             </div>
//           ))}

//           {/* Loading State Placeholder */}
//           {(!artisan.Portfolio?.images || artisan.Portfolio.images.length === 0) && (
//             <div className="col-span-full flex h-[12rem] sm:h-[15rem] md:h-[17rem] items-center justify-center rounded-lg sm:rounded-xl bg-gray-100">
//               <p className="text-sm sm:text-base text-gray-500 px-4">No portfolio images available</p>
//             </div>
//           )}
//         </TabsContent>
//         <TabsContent value="packages">
//           <HeadlingUnderline title="Learning Packages" />
//           <ArtisanPackage packages={artisan.ArtisanPackage || []} />
//         </TabsContent>
//         <TabsContent value="booking" className="grid gap-4 sm:gap-6 md:gap-8">
//           <HeadlingUnderline title="Booking" />
//           <ArtisanCalendar />
//         </TabsContent>
//       </div>
//     </Tabs>
//   );
// };


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
      {/* Header Section with Profile Image and Tabs */}
      <div className="relative flex flex-col items-center pb-3 sm:pb-4 md:pb-5 z-10">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 w-full">
          {/* Profile Image */}
          <div className="relative -mt-16 sm:-mt-20 md:-mt-24 lg:-mt-28 h-32 w-32 sm:h-36 sm:w-36 md:h-40 md:w-40 lg:h-44 lg:w-44 overflow-hidden rounded-lg shadow-xl flex-shrink-0 border-3 sm:border-4 border-white bg-white z-20">
            <Image
              src={!artisan?.dp || artisan?.dp === "" ? "/placeholder.png" : artisan.dp}
              alt="Profile photo"
              priority
              className="rounded-lg object-cover"
              fill
              sizes="(max-width: 640px) 128px, (max-width: 768px) 144px, (max-width: 1024px) 160px, 176px"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0088cc]/90 to-transparent py-1.5 sm:py-2">
              <h2 className="text-center text-xs sm:text-sm font-semibold text-white px-2 truncate">
                {artisan?.firstName} {artisan?.lastName}
              </h2>
            </div>
          </div>

          {/* Tabs List */}
          <TabsList className="relative sm:-mt-8 md:-mt-10 lg:-mt-12 flex h-auto flex-wrap items-center justify-center gap-1 sm:gap-1.5 bg-transparent p-0 w-full sm:w-auto mt-2 sm:mt-0 z-20">
            {[
              { id: "general", label: "General Info." },
              { id: "portfolio", label: "Portfolio" },
              { id: "packages", label: "Packages" },
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

      {/* Content Section */}
      <div className="mt-3 sm:mt-4 rounded-lg bg-white/90 p-3 sm:p-4 md:p-5 lg:p-6 text-gray-900 shadow-lg backdrop-blur">
        {/* General Information Tab */}
        <TabsContent value="general" className="space-y-4 sm:space-y-6">
          <HeadlingUnderline title="General Information" />
          
          {/* Information Grid */}
          <div className="rounded-lg bg-primary p-4 sm:p-5 md:p-6 lg:p-8 text-white shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
              {/* Experience */}
              <div className="flex items-start gap-2 sm:gap-3">
                <div className="rounded-full bg-white/20 p-2 sm:p-2.5 flex-shrink-0">
                  <Trophy className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-sm sm:text-base font-semibold mb-0.5 sm:mb-1">Experience</h3>
                  <p className="text-xs sm:text-sm text-white/90 break-words">
                    {getExperienceString(artisan?.experience as ExperienceEnum)}
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-2 sm:gap-3">
                <div className="rounded-full bg-white/20 p-2 sm:p-2.5 flex-shrink-0">
                  <MapPin className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-sm sm:text-base font-semibold mb-0.5 sm:mb-1">Location</h3>
                  <p className="text-xs sm:text-sm text-white/90 break-words">{artisan?.address}</p>
                </div>
              </div>

              {/* Education */}
              <div className="flex items-start gap-2 sm:gap-3">
                <div className="rounded-full bg-white/20 p-2 sm:p-2.5 flex-shrink-0">
                  <GraduationCap className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-sm sm:text-base font-semibold mb-0.5 sm:mb-1">Education</h3>
                  <p className="text-xs sm:text-sm text-white/90 break-words">
                    {getEducationString(artisan?.education as TraingEducationEnum)}
                  </p>
                </div>
              </div>

              {/* Training */}
              <div className="flex items-start gap-2 sm:gap-3">
                <div className="rounded-full bg-white/20 p-2 sm:p-2.5 flex-shrink-0">
                  <BookOpen className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-sm sm:text-base font-semibold mb-0.5 sm:mb-1">Training</h3>
                  <p className="text-xs sm:text-sm text-white/90 break-words">
                    {getTrainingString(artisan?.training as TraingEducationEnum)}
                  </p>
                </div>
              </div>

              {/* Certification */}
              <div className="flex items-start gap-2 sm:gap-3">
                <div className="rounded-full bg-white/20 p-2 sm:p-2.5 flex-shrink-0">
                  <Medal className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-sm sm:text-base font-semibold mb-0.5 sm:mb-1">Certification</h3>
                  <p className="text-xs sm:text-sm text-white/90 break-words">
                    {getCertificateString(artisan?.certificate as CertificationEnum)}
                  </p>
                </div>
              </div>

              {/* Recognition */}
              <div className="flex items-start gap-2 sm:gap-3">
                <div className="rounded-full bg-white/20 p-2 sm:p-2.5 flex-shrink-0">
                  <Scroll className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-sm sm:text-base font-semibold mb-0.5 sm:mb-1">Recognition</h3>
                  <p className="text-xs sm:text-sm text-white/90 break-words">
                    {getRecognitionString(artisan?.recongnition as RecongnitionEnum)}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Skills and Expertise */}
          <div className="grid gap-4 sm:gap-5 md:gap-6 md:grid-cols-2">
            <div className="space-y-3">
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 flex items-center gap-2">
                <BookOpen className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
                <span>Specializations</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {artisan?.specialization?.map((spec, index) => (
                  <span
                    key={index}
                    className="rounded-full bg-primary/10 px-2.5 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm text-primary font-medium"
                  >
                    {spec}
                  </span>
                )) || <span className="text-xs sm:text-sm text-gray-500">No specializations listed</span>}
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 flex items-center gap-2">
                <Star className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
                <span>Craft Focus Areas</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {artisan?.craftFocusAreas?.map((area, index) => (
                  <span
                    key={index}
                    className="rounded-full bg-secondary/10 px-2.5 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm text-secondary font-medium"
                  >
                    {area}
                  </span>
                )) || <span className="text-xs sm:text-sm text-gray-500">No craft focus areas listed</span>}
              </div>
            </div>
          </div>
        </TabsContent>

        {/* Portfolio Tab */}
        <TabsContent value="portfolio" className="space-y-4 sm:space-y-5">
          <HeadlingUnderline title="My Portfolio" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5">
            {artisan?.Portfolio?.images?.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-44 sm:h-48 md:h-52 lg:h-56 w-full">
                  <Image
                    src={image}
                    alt={`Portfolio image ${index + 1}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    priority={index < 4}
                  />
                </div>

                <div className="absolute left-2 top-2 rounded-full bg-white/90 px-2 py-0.5 text-[10px] sm:text-xs font-medium text-gray-800 shadow-md">
                  {index + 1}/{artisan?.Portfolio?.images?.length || 0}
                </div>
              </div>
            ))}

            {(!artisan?.Portfolio?.images || artisan?.Portfolio?.images?.length === 0) && (
              <div className="col-span-full flex h-44 sm:h-48 md:h-52 items-center justify-center rounded-lg bg-gray-100">
                <p className="text-sm text-gray-500 px-4 text-center">No portfolio images available</p>
              </div>
            )}
          </div>
        </TabsContent>

        {/* Packages Tab */}
        <TabsContent value="packages">
          <HeadlingUnderline title="Learning Packages" />
          <ArtisanPackage packages={artisan?.ArtisanPackage || []} />
        </TabsContent>

        {/* Booking Tab */}
        <TabsContent value="booking" className="space-y-4 sm:space-y-5 md:space-y-6">
          <HeadlingUnderline title="Booking" />
          <ArtisanCalendar />
        </TabsContent>
      </div>
    </Tabs>
  );
};