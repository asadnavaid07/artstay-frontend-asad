"use client";
import Image from "next/image";

export default function ProjectGlimpse() {
  return (
    <div className="w-full bg-[#C8E8F9] py-8 sm:py-12 md:py-16 lg:py-20 overflow-x-hidden">
        <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 rounded-2xl shadow-lg bg-[#F5FBFD]/80 hover:bg-[#0085CC]/5 border border-[#0085CC]/10 w-full min-w-0">
        {/* Header */}
        <div className="text-center mt-6 sm:mt-8 md:mt-10 mb-8 sm:mb-10 md:mb-12 px-2">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#0085CC] mb-2 sm:mb-3 tracking-tight">Project Glimpse</h2>
          <div className="flex justify-center mb-3 sm:mb-4">
            <span className="inline-block w-12 sm:w-16 h-0.5 sm:h-1 rounded bg-[#0085CC] opacity-70"></span>
          </div>
          <p className="text-[#005380] text-sm sm:text-base md:text-lg lg:text-xl font-semibold mb-6 sm:mb-8 leading-relaxed px-2">
            The convergence of Kashmir&apos;s Tourism and Handicrafts. <br className="hidden sm:block" />  Kashmir&apos;s Largest Shared Vision for Craft & Culture
          </p>
          {/* Description Text */}
          <div className="flex items-center justify-between gap-3 sm:gap-4 md:gap-6 lg:gap-8 flex-col md:flex-row w-full min-w-0">
            {/* Left Logo - Passionistas Project */}
            <div className="flex-shrink-0 w-28 h-18 sm:w-32 sm:h-20 md:w-36 md:h-24 lg:w-44 lg:h-28 relative bg-gradient-to-br from-[#E6F4FB] to-[#B3E0F7] rounded-xl border border-[#0085CC]/20 shadow-sm flex items-center justify-center">
              <Image
                src="/images/project_glimpse/project_glimpse_1.png"
                alt="The Passionistas Project Logo"
                fill
                className="object-contain p-2"
                priority
              />
            </div>

            {/* Center Text */}
            <div className="flex-1 text-center px-2 sm:px-4 min-w-0">
              <p className="text-[#005380] text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed font-medium break-words">
                For Kashmir&apos;s Local Artisans, Project Offers A New Lifeline
                <br />
                <span className="text-[#0085CC] font-semibold">Developing Kashmir&apos;s Art & Craft Profile At</span>
                <br />
                <span className="italic text-[#005380]">Initiative</span>{" "}
                <span className="text-[#0085CC] font-semibold">Of Dekoshur Craft USA</span>
              </p>
            </div>

            {/* Right Logo - Placeholder */}
            <div className="flex-shrink-0 w-28 h-18 sm:w-32 sm:h-20 md:w-36 md:h-24 lg:w-44 lg:h-28 relative bg-gradient-to-br from-[#E6F4FB] to-[#B3E0F7] rounded-xl border border-[#0085CC]/20 shadow-sm flex items-center justify-center">
              <Image
                src="/images/project_glimpse/project_glimpse_2.png"
                alt="The Passionistas Project Logo"
                fill
                className="object-contain p-2"
                priority
              />
            </div>
          </div>
        </div>

        {/* Logos Section */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8">

          {/* Center Section - Multiple Organizations */}
          <div className="flex-1 max-w-2xl">
            {/* <div className="bg-amber-100 rounded-lg p-8 min-h-[200px]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
                {/* Silk Route */}
                {/* <div className="flex items-center justify-center">
                  <div className="w-full h-20 bg-gray-200 rounded flex items-center justify-center border border-gray-300">
                    <div className="text-center text-gray-600">
                      <p className="text-xs font-medium">SILK ROUTE</p>
                      <p className="text-xs">(Camel & Person Logo)</p>
                    </div>
                  </div>
                </div> */}

                {/* UNESCO */}
                {/* <div className="flex flex-col items-center justify-center">
                  <div className="w-full h-16 bg-gray-200 rounded flex items-center justify-center border border-gray-300 mb-2">
                    <div className="text-center text-gray-600">
                      <p className="text-xs font-medium">UNESCO</p>
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-gray-700 font-medium">Creative Cities Network</p>
                    <p className="text-sm font-bold text-gray-800">Srinagar City</p>
                  </div>
                </div> */}

                {/* World Crafts Council */}
                {/* <div className="flex items-center justify-center">
                  <div className="w-full h-20 bg-gray-200 rounded flex items-center justify-center border border-gray-300">
                    <div className="text-center text-gray-600">
                      <p className="text-xs font-medium">World Crafts Council</p>
                      <p className="text-xs">Asia (Circular Logo)</p>
                    </div>
                  </div>
                </div> */}

                {/* World Craft City */}
                {/* <div className="flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-sm font-bold text-gray-800">World Craft City</p>
                    <p className="text-lg font-bold text-gray-900">SRINAGAR</p>
                  </div>
                </div>
              </div>
              <div className="mt-4 text-center">
                <p className="text-xs text-gray-600">
                  United Nations Educational, Scientific and Cultural Organization
                </p>
              </div> */}
            {/* </div> */}
          </div>


        </div>

        {/* Additional Info */}
        {/* <div className="text-center mt-8">
          <p className="text-sm text-[#0085CC] font-medium">Partnership logos and organizational affiliations</p>
        </div> */}
      </div>
    </div>
  );
}