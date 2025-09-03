"use client"
import { useState, useEffect, useCallback } from "react"

const Review = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "New York, USA",
      rating: 5,
      text: "An absolutely incredible experience! The artisan workshops were so authentic and the guides were knowledgeable. I learned so much about Kashmiri handicrafts and even created my own piece to take home.",
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      id: 2,
      name: "Michael Chen",
      location: "Toronto, Canada",
      rating: 5,
      text: "Kashmir ArtStay exceeded all my expectations. The craft tours were beautifully organized, and meeting the local artisans was the highlight of my trip. Highly recommend for anyone interested in authentic cultural experiences.",
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      id: 3,
      name: "Emma Thompson",
      location: "London, UK",
      rating: 5,
      text: "What a wonderful way to experience Kashmir! The combination of beautiful landscapes and rich craft traditions made this trip unforgettable. The team was professional and passionate about their work.",
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      id: 4,
      name: "David Rodriguez",
      location: "Barcelona, Spain",
      rating: 5,
      text: "I've traveled extensively, but this craft safari was unique. Learning traditional weaving techniques from master artisans while surrounded by Kashmir's natural beauty was truly special.",
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      id: 5,
      name: "Priya Sharma",
      location: "Mumbai, India",
      rating: 5,
      text: "As someone passionate about traditional crafts, this experience was perfect. The attention to detail and respect for local culture made this more than just a tour - it was an education.",
      image: "/placeholder.svg?height=60&width=60",
    },
  ]

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % reviews.length)
  }, [reviews.length])

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(nextSlide, 5000)
      return () => clearInterval(interval)
    }
  }, [isAutoPlaying, nextSlide])

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <svg
        key={i}
        className={`w-3 h-3 sm:w-4 sm:h-4 ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))
  }

  return (
    <section style={{ backgroundColor: "rgb(245,251,255)" }} className="py-8 sm:py-12 md:py-16">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-4">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2
            className="font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold mb-3 sm:mb-4"
            style={{ color: "rgb(0,83,128)" }}
          >
            Their Journey, Their Words
          </h2>
          <p className="font-text text-sm sm:text-base md:text-lg text-gray-600 max-w-xl sm:max-w-2xl mx-auto px-2 sm:px-0 leading-relaxed">
            Every traveler carries home a story, hear how they connected with Kashmir&apos;s soul through its crafts, people,
            and places.
          </p>
        </div>

        {/* Review Slider */}
        <div className="relative max-w-xs sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto">
          <div
            className="overflow-hidden"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {reviews.map((review) => (
                <div key={review.id} className="w-full flex-shrink-0 px-2 sm:px-3 md:px-4">
                  <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8 hover:bg-[#0085CC]/5 mx-auto max-w-full sm:max-w-2xl md:max-w-3xl border border-blue-800 border-dotted">
                    <div className="flex items-start sm:items-center mb-4 sm:mb-6 flex-col sm:flex-row">
                      <div className="flex-1 mb-3 sm:mb-0">
                        <h4
                          className="font-heading text-sm sm:text-base md:text-lg lg:text-xl font-bold"
                          style={{ color: "rgb(49,165,221)" }}
                        >
                          {review.name}
                        </h4>
                        <p className="font-text text-xs sm:text-sm" style={{ color: "rgb(49,165,221)" }}>
                          {review.location}
                        </p>
                      </div>
                      <div className="flex space-x-1 self-start sm:ml-auto">{renderStars(review.rating)}</div>
                    </div>
                    <blockquote className="font-text text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                      &ldquo;{review.text}&rdquo;
                    </blockquote>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 sm:-left-2 md:-left-4 top-1/2 transform -translate-y-1/2 -translate-x-2 sm:-translate-x-3 md:-translate-x-4 bg-[#0085CC] rounded-full p-1.5 sm:p-2 shadow-lg hover:bg-gray-50 transition-colors z-10"
            aria-label="Previous review"
          >
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 sm:-right-2 md:-right-4 top-1/2 transform -translate-y-1/2 translate-x-2 sm:translate-x-3 md:translate-x-4 bg-[#0085CC] rounded-full p-1.5 sm:p-2 shadow-lg hover:bg-gray-50 transition-colors z-10"
            aria-label="Next review"
          >
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-1.5 sm:space-x-2 mt-6 sm:mt-8">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors ${
                  index === currentSlide ? "bg-blue-600" : "bg-gray-300"
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Review
