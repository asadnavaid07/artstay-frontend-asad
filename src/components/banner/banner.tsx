"use client"
import { useEffect, useRef, useState, useMemo } from "react"
import { FaUserTie, FaMapMarkedAlt, FaRoute, FaSmileBeam } from "react-icons/fa"

const banner = {
  title: "Call Our Agent To Book",
  subtitle: "Your Gateway to Authentic Cultural Experiences",
  ctaText: "Explore Now",
  ctaLink: "/explore",
  imageUrl: "/images/callbanner.jpg",
}

export const Banner = () => {
  const [counts, setCounts] = useState([0, 0, 0, 0])
  const sectionRef = useRef(null)
  const hasAnimated = useRef(false)

  const items = useMemo(
    () => [
      { icon: <FaUserTie size={18} />, number: 320, label: "Pro Tour Guides" },
      { icon: <FaMapMarkedAlt size={18} />, number: 150, label: "Tours are Completed" },
      { icon: <FaRoute size={18} />, number: 152, label: "Traveling Experience" },
      { icon: <FaSmileBeam size={18} />, number: 523, label: "Happy Customers" },
    ],
    [],
  )

  useEffect(() => {
    const currentRef = sectionRef.current
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          items.forEach((item, index) => {
            let start = 0
            const end = item.number
            const duration = 1000
            const increment = end / (duration / 16)
            const animate = () => {
              start += increment
              if (start >= end) {
                start = end
              } else {
                setTimeout(animate, 16)
              }
              setCounts((prev) => {
                const newCounts = [...prev]
                newCounts[index] = Math.round(start)
                return newCounts
              })
            }
            animate()
          })
        }
      },
      { threshold: 0.5 },
    )

    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [items])

  return (
    <div className="mt-4 sm:mt-8 md:mt-12 lg:mt-16 mb-8 sm:mb-12 md:mb-16 lg:mb-20">
      {/* Increased min-h and added padding to ensure top half of image is visible */}
      <section
        ref={sectionRef}
        className="relative w-full bg-cover bg-center bg-no-repeat min-h-[300px] sm:min-h-[350px] md:min-h-[400px] lg:min-h-[450px] pb-16 sm:pb-20"
        style={{ backgroundImage: `url(${banner.imageUrl})`, objectFit: 'cover' }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: "#0085CC",
            mixBlendMode: "multiply",
            opacity: 0.9,
          }}
        />

        {/* Responsive text sizes and alignment */}
        <div className="relative z-10 flex h-full flex-col items-start md:items-center justify-center text-left md:text-center text-white px-4 sm:px-6 md:px-8">
          <h1 className="font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
            {banner.title}
          </h1>
          <p className="mt-2 sm:mt-3 md:mt-4 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl font-text text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">
            {banner.subtitle}
          </p>
        </div>

        {/* Mobile Cards - Relative positioning, smaller size, bottom-aligned */}
        <div className="block md:hidden relative w-full pt-4 sm:pt-6">
          <div className="mx-auto max-w-xs sm:max-w-md">
            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              {items.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center p-1 sm:p-2 border border-gray-200 rounded-lg shadow-sm hover:scale-105 transition-all duration-300 ease-in-out bg-white min-h-[50px] sm:min-h-[60px]"
                >
                  <span className="text-base sm:text-lg text-brown-800 mb-1">{item.icon}</span>
                  <p className="text-xs sm:text-sm font-bold mb-1" style={{ color: "rgb(0,83,128)" }}>
                    {counts[index]}
                  </p>
                  <p className="text-[8px] sm:text-xs text-center leading-tight" style={{ color: "rgb(0,83,128)" }}>
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop Cards - Unchanged, original transform */}
        <div
          className="hidden md:block absolute bottom-0 left-0 w-full p-4 md:p-6"
          style={{ transform: "translateY(50%)" }}
        >
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {items.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg shadow-sm hover:scale-105 transition-all duration-300 ease-in-out bg-white"
                >
                  <span className="text-2xl md:text-3xl text-brown-800">{item.icon}</span>
                  <p className="text-2xl md:text-3xl font-bold" style={{ color: "rgb(0,83,128)" }}>
                    {counts[index]}
                  </p>
                  <p className="text-sm md:text-base mt-1" style={{ color: "rgb(0,83,128)" }}>
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}