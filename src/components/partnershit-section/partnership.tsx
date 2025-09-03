"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

export default function PartnershipSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [itemsPerSlide, setItemsPerSlide] = useState(5) // Default for desktop

  // Partner data with images from /images/partner/
  const partners = [
    { id: 1, name: "Partner 1", logo: "/images/partnership/1.png" },
    { id: 2, name: "Partner 2", logo: "/images/partnership/2.png" },
    { id: 3, name: "Partner 3", logo: "/images/partnership/3.png" },
    { id: 4, name: "Partner 4", logo: "/images/partnership/4.png" },
    { id: 5, name: "Partner 5", logo: "/images/partnership/5.png" },
    { id: 6, name: "Partner 6", logo: "/images/partnership/6.png" },
    { id: 7, name: "Partner 7", logo: "/images/partnership/7.png" },
    { id: 8, name: "Partner 8", logo: "/images/partnership/8.png" },
  ]

  // Responsive items per slide based on screen width
  useEffect(() => {
    const updateItemsPerSlide = () => {
      if (window.innerWidth < 640) {
        setItemsPerSlide(2) // Mobile: 2 items
      } else if (window.innerWidth < 1024) {
        setItemsPerSlide(3) // Small tablet: 3 items
      } else if (window.innerWidth < 1280) {
        setItemsPerSlide(4) // Large tablet: 4 items
      } else {
        setItemsPerSlide(5) // Desktop: 5 items
      }
    }

    updateItemsPerSlide()
    window.addEventListener('resize', updateItemsPerSlide)
    return () => window.removeEventListener('resize', updateItemsPerSlide)
  }, [])

  const totalSlides = Math.ceil(partners.length / itemsPerSlide)

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides)
    }, 4000) // Change slide every 4 seconds

    return () => clearInterval(interval)
  }, [totalSlides])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  const getCurrentPartners = () => {
    const startIndex = currentSlide * itemsPerSlide
    return partners.slice(startIndex, startIndex + itemsPerSlide)
  }

  return (
    <div className="w-full bg-transparent py-8 sm:py-12 md:py-16">
      {/* Responsive container with adjusted padding */}
      <div className="max-w-xs sm:max-w-md md:max-w-4xl lg:max-w-6xl mx-auto px-2 sm:px-4 md:px-6">
        {/* Header with responsive text sizes */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <div className="flex items-center justify-center mb-3 sm:mb-4">
            <div className="text-white px-2 sm:px-3 py-1 rounded-md text-sm sm:text-base md:text-lg font-bold mr-2" style={{backgroundColor: 'rgb(0,83,128)'}}>
              in
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold" style={{color: 'rgb(0,83,128)'}}>
              PARTNERSHIP
            </h2>
          </div>
          <p className="text-gray-600 text-xs sm:text-sm md:text-base max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto leading-relaxed">
            Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the
            industry&apos;s standard dummy text ever since the 1500s.
          </p>
        </div>

        {/* Partner Logos Slider */}
        <div className="relative">
          {/* Navigation Buttons with responsive sizing and touch-friendly hit areas */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-2 sm:-translate-x-4 z-10 bg-[#0085CC] rounded-full p-1 sm:p-2 md:p-2 shadow-lg hover:shadow-xl transition-shadow"
            aria-label="Previous partners"
          >
            <ChevronLeft className="w-4 sm:w-5 md:w-5 h-4 sm:h-5 md:h-5 text-white" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-2 sm:translate-x-4 z-10 bg-[#0085CC] rounded-full p-1 sm:p-2 md:p-2 shadow-lg hover:shadow-xl transition-shadow"
            aria-label="Next partners"
          >
            <ChevronRight className="w-4 sm:w-5 md:w-5 h-4 sm:h-5 md:h-5 text-white" />
          </button>

          {/* Partners Container with responsive spacing */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="flex justify-center items-center space-x-4 sm:space-x-6 md:space-x-8">
                    {partners.slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide).map((partner) => (
                      <div
                        key={partner.id}
                        className="flex-shrink-0 w-16 sm:w-24 md:w-28 lg:w-32 h-16 sm:h-24 md:h-28 lg:h-32 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-center border border-gray-100"
                      >
                        <Image
                          src={partner.logo || "/placeholder.svg"}
                          alt={partner.name}
                          width={64}
                          height={64}
                          sizes="(max-width: 640px) 64px, (max-width: 1024px) 96px, (max-width: 1280px) 112px, 128px"
                          className="rounded-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Slide Indicators with responsive sizing */}
          <div className="flex justify-center mt-4 sm:mt-6 md:mt-8 space-x-1 sm:space-x-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 sm:w-3 md:w-3 h-2 sm:h-3 md:h-3 rounded-full transition-colors duration-300 ${
                  index === currentSlide ? "bg-[#0085CC]" : "bg-gray-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Partner Count Info with responsive text size */}
        <div className="text-center mt-4 sm:mt-6 md:mt-8">
          <p className="text-xs sm:text-sm md:text-base text-gray-500">
            {getCurrentPartners().length} of {partners.length}
          </p>
        </div>
      </div>
    </div>
  )
}