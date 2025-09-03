"use client"

import { ArrowRight, Shield, Heart, Users } from "lucide-react"

interface SupportHeroProps {
  title: string
  subtitle?: string
  description: string
  showQuickAccess?: boolean
  ctaText?: string
  ctaLink?: string
}

export default function SupportHero({
  title,
  subtitle,
  description,
  showQuickAccess = false,
  ctaText,
  ctaLink,
}: SupportHeroProps) {
  const quickAccessLinks = [
    { title: "Understand your rights", link: "/refund-policy", icon: Shield },
    { title: "Know your privacy", link: "/privacy-policy", icon: Users },
    { title: "Manage cookies", link: "/cookies", icon: Heart },
    { title: "Find answers", link: "/faqs", icon: ArrowRight },
    { title: "Accessibility help", link: "/accessibility-support", icon: Users },
    { title: "Raise a concern", link: "/report-concern", icon: Shield },
  ]

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#005380] via-[#0085CC] to-[#005380]">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-float-slow"></div>
        <div
          className="absolute bottom-20 right-20 w-80 h-80 bg-[#0085CC]/10 rounded-full blur-3xl animate-float-slow"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/4 w-32 h-32 bg-white/8 rounded-full blur-2xl animate-float-slow"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-fade-in-up">
          {/* Logo/Icon */}
          <div className="mb-8 flex justify-center">
            <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl flex items-center justify-center">
              <Heart className="w-12 h-12 text-white" />
            </div>
          </div>

          {/* Subtitle */}
          {subtitle && (
            <div className="mb-6">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-lg">
                <span className="text-sm font-semibold text-white uppercase tracking-wider">{subtitle}</span>
              </div>
            </div>
          )}

          {/* Main Title */}
          <h1 className="mb-8 text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent drop-shadow-2xl">
              {title}
            </span>
          </h1>

          {/* Description */}
          <div className="mb-12 max-w-4xl mx-auto">
            <p className="text-lg md:text-xl text-gray-100 leading-relaxed font-light drop-shadow-lg">{description}</p>
          </div>

          {/* CTA Button */}
          {ctaText && ctaLink && (
            <div className="mb-12 flex justify-center">
              <a
                href={ctaLink}
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white/15 backdrop-blur-md border border-white/30 text-white font-semibold rounded-2xl hover:bg-white/25 hover:scale-105 transition-all duration-300 shadow-2xl"
              >
                <span>{ctaText}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          )}

          {/* Quick Access Links */}
          {showQuickAccess && (
            <div className="max-w-6xl mx-auto">
              <h3 className="text-xl font-semibold text-white mb-8">Quick Access</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {quickAccessLinks.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    className="group flex items-center gap-3 p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300"
                  >
                    <item.icon className="w-5 h-5 text-white" />
                    <span className="text-white font-medium">{item.title}</span>
                    <ArrowRight className="w-4 h-4 text-white opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 ml-auto" />
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-20px) rotate(1deg); }
          66% { transform: translateY(-10px) rotate(-1deg); }
        }
        .animate-float-slow { animation: float-slow 8s ease-in-out infinite; }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up { animation: fade-in-up 1.2s ease-out forwards; }
      `}</style>
    </section>
  )
}
