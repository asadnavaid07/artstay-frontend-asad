"use client"

import { ArrowRight } from "lucide-react"

interface HeroSectionProps {
  title: string
  subtitle?: string
  description: string
  backgroundImage?: string
  ctaText?: string
  ctaLink?: string
  showAnimation?: boolean
}

export default function HeroSection({
  title,
  description,
  backgroundImage,
  ctaText,
  ctaLink,
  showAnimation = true,
}: HeroSectionProps) {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Professional Background with overlay */}
      <div className="absolute inset-0">
        {/* Primary gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#005380] via-[#0085CC] to-[#005380]"></div>

        {/* Background image with proper overlay */}
        {backgroundImage && (
          <>
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${backgroundImage})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#005380]/85 via-[#0085CC]/80 to-[#005380]/85"></div>
          </>
        )}

        {/* Professional animated elements */}
        {showAnimation && (
          <>
            <div className="absolute top-20 left-10 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-float-slow"></div>
            <div
              className="absolute bottom-20 right-20 w-80 h-80 bg-[#0085CC]/10 rounded-full blur-3xl animate-float-slow"
              style={{ animationDelay: "2s" }}
            ></div>
            <div
              className="absolute top-1/2 left-1/4 w-32 h-32 bg-white/8 rounded-full blur-2xl animate-float-slow"
              style={{ animationDelay: "4s" }}
            ></div>
            <div
              className="absolute bottom-1/3 right-1/3 w-48 h-48 bg-[#005380]/8 rounded-full blur-2xl animate-float-slow"
              style={{ animationDelay: "6s" }}
            ></div>
          </>
        )}

        {/* Subtle pattern overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, white 2px, transparent 2px)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      {/* Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-fade-in-up">
          {/* Logo Placeholder Area */}
          

          {/* Subtitle with professional styling */}
          {/* {subtitle && (
            <div className="mb-6">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-lg">
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-white fill-white" />
                  <span className="text-sm font-semibold text-white uppercase tracking-wider">{subtitle}</span>
                  <Star className="w-4 h-4 text-white fill-white" />
                </div>
              </div>
            </div>
          )} */}

          {/* Main Title with enhanced typography */}
          <h1 className="mb-8 leading-tight">
            <span className="block text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold">
              <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent drop-shadow-2xl">
                {title}
              </span>
            </span>
          </h1>

          {/* Description with better readability */}
          <div className="mb-12 max-w-5xl mx-auto">
            <p className="text-lg md:text-xl lg:text-2xl text-gray-100 leading-relaxed font-light ">
              <span className="drop-shadow-lg "><i>{description}</i></span>
            </p>
          </div>

          {/* Enhanced CTA Button */}
          {ctaText && ctaLink && (
            <div className="flex justify-center">
              <a
                href={ctaLink}
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white/15 backdrop-blur-md border border-white/30 text-white font-semibold rounded-2xl hover:bg-white/25 hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-white/20"
              >
                <span className="relative z-10">{ctaText}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />

                {/* Button glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </div>
          )}
        </div>
      </div>

      {/* Bottom fade effect */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent"></div>

      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
          }
          33% { 
            transform: translateY(-20px) rotate(1deg); 
          }
          66% { 
            transform: translateY(-10px) rotate(-1deg); 
          }
        }
        
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
        
        @keyframes fade-in-up {
          from { 
            opacity: 0; 
            transform: translateY(40px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 1.2s ease-out forwards;
        }
      `}</style>
    </section>
  )
}
