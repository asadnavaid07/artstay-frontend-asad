"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export default function SupportNetwork() {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Support network partners data
  const partners = [
    {
      id: 1,
      name: "De Koshur",
      description: "e-Commerce",
      logo: "/images/support_network/1.png",
    },
    {
      id: 2,
      name: "KACR Craftlore",
      description: "Craft Repository",
      logo: "/images/support_network/2_.png",
    },
    {
      id: 3,
      name: "Hamadan",
      description: "Craft Valley Think Tank",
      subtitle: "since 1947",
      logo: "/images/support_network/3.png",
    },
    {
      id: 4,
      name: "Connect Portal",
      description: "Craft Vendor Portal",
      logo: "/images/support_network/4.png",
    },
    {
      id: 5,
      name: "P Logic",
      description: "IT & Marketing",
      logo: "/images/support_network/5.png",
    },
    {
      id: 6,
      name: "De Koshur",
      description: "e-Commerce",
      logo: "/images/support_network/6.png",
    },
  ]

  // Responsive items per slide
  const getItemsPerSlide = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 640) return 1 // mobile
      if (window.innerWidth < 768) return 2 // small tablet
      if (window.innerWidth < 1024) return 3 // tablet
      return 5 // desktop
    }
    return 5
  }

  const [itemsPerSlide, setItemsPerSlide] = useState(5)
  const totalSlides = Math.ceil(partners.length / itemsPerSlide)

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setItemsPerSlide(getItemsPerSlide())
      setCurrentSlide(0) // Reset to first slide on resize
    }

    handleResize() // Set initial value
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [totalSlides])

  return (
    <div className="w-full">
      <div className="flex flex-col lg:flex-row min-h-[200px] sm:min-h-[300px] lg:min-h-[50px] border border-[#0085CC] border-dotted">
        {/* Left Section - Title */}
        <div className="bg-[rgb(0,83,128)] flex flex-col items-center justify-center px-4 sm:px-6 py-6 sm:py-8 lg:py-8 min-w-full lg:min-w-[200px] xl:min-w-[240px] relative overflow-hidden h-[120px] sm:h-[150px] lg:h-auto">
          <Image
            src="/images/support_network.png"
            alt="Support Network Background"
            fill
            className="object-contain m-auto"
          />
        </div>

        {/* Right Section - Partners Slider */}
        <div className="flex-1 flex items-stretch justify-center py-4 px-2 sm:px-4 bg-[#005380] hover:bg-[rgb(0,133,204)] transition-all duration-500 ease-in-out">
          <div className="w-full max-w-5xl transition-transform duration-300 ease-in-out hover:scale-105">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0">
                    <div className="flex justify-center sm:justify-around items-center space-x-2 sm:space-x-4 h-full px-2">
                      {partners.slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide).map((partner) => (
                        <div
                          key={`${partner.id}-${slideIndex}`}
                          className="flex-shrink-0 flex items-center justify-center h-full"
                        >
                          <div className="relative group">
                            <Image
                              src={partner.logo || "/placeholder.svg?height=80&width=120"}
                              alt={partner.name}
                              width={120}
                              height={80}
                              className="object-contain sm:w-[140px] sm:h-[90px] md:w-[160px] md:h-[100px] lg:w-[180px] lg:h-[120px] xl:w-[192px] xl:h-[128px] transition-transform duration-300 group-hover:scale-110"
                              style={{ background: "transparent" }}
                            />
                            {/* Tooltip for mobile/tablet */}
                            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap lg:hidden">
                              {partner.name}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center mt-3 sm:mt-4 space-x-1 sm:space-x-2">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors duration-300 ${
                    index === currentSlide ? "bg-white" : "bg-gray-600"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Navigation arrows for mobile */}
            <div className="flex justify-between items-center mt-4 lg:hidden">
              <button
                onClick={() => setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)}
                className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all duration-300"
                aria-label="Previous slide"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() => setCurrentSlide((prev) => (prev + 1) % totalSlides)}
                className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all duration-300"
                aria-label="Next slide"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
