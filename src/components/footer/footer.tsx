"use client"
import Link from "next/link"
import { useState } from "react"
import {
  Globe,
  Instagram,
  Youtube,
  Facebook,
  Linkedin,
  Twitter,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Sparkles,
  Heart,
  Shield,
  Leaf,
  HelpCircle,
  Info,
  Compass,
  Monitor,
  Building,
  Users,
  DollarSign,
  Code,
} from "lucide-react"
export default function Footer() {
  // Remove unused hoveredSection state since it's not being used
  const [, setHoveredSection] = useState<string | null>(null)
  const socialLinks = [
    { name: "Website", icon: Globe, href: "https://kashmirartstay.com", color: "hover:text-primary" },
    { name: "Whatsapp", icon: Instagram, href: "#", color: "hover:text-pink-500" },
    { name: "YouTube", icon: Youtube, href: "#", color: "hover:text-red-500" },
    { name: "Facebook", icon: Facebook, href: "#", color: "hover:text-blue-600" },
    { name: "LinkedIn", icon: Linkedin, href: "#", color: "hover:text-blue-700" },
    { name: "Twitter", icon: Twitter, href: "#", color: "hover:text-blue-700" },
  ]
  return (
    <footer className="relative bg-gradient-to-b from-[#005380] to-[#0085CC] dark:from-gray-900 dark:to-gray-700 text-white overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-20 right-20 w-40 h-40 bg-[#0085CC] rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/3 w-24 h-24 bg-white rounded-full blur-2xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Paisley-inspired decorative border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0085CC] via-white to-[#0085CC]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Brand Header with Glassmorphism */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block p-8 rounded-2xl backdrop-blur-lg bg-gradient-to-br from-[#005380] from-5% via-[#0085CC] via-50% to-[#005380] to-95% bg-opacity-10 border border-white border-opacity-20 shadow-2xl hover:scale-110 hover:shadow-3xl hover:bg-opacity-20 transition-all duration-700 animate-bounce-slow">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent mb-4">
              Kashmir ArtStay
            </h2>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
              Preserving Heritage • Crafting Experiences • Connecting Cultures
            </p>
            
          </div>
        </div>

        {/* Creative Section Divider */}
        <div className="flex items-center justify-center mb-12">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#0085CC] to-transparent"></div>
          <div className="mx-4 p-2 rounded-full bg-[#0085CC]">
            <Heart className="w-4 h-4 text-white" />
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#0085CC] to-transparent"></div>
        </div>

        {/* Main Footer Content */}
        <div className="p-6 rounded-xl backdrop-blur-lg bg-white bg-opacity-10 border border-white border-opacity-20 shadow-lg hover:shadow-2xl hover:bg-opacity-10 transition-all duration-500 mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Column 1: About & Help Center */}
            <div
              className="group animate-slide-up flex flex-col"
              onMouseEnter={() => setHoveredSection("about")}
              onMouseLeave={() => setHoveredSection(null)}
            >
              <h3 className="text-xl font-bold mb-6 text-white group-hover:text-white transition-colors duration-300">
                Brand Overview
              </h3>
              <div className="flex flex-col flex-1 gap-4">
                {/* About Kashmir ArtStay Sub-card */}
                
                <div className="p-4 rounded-lg  bg-gradient-to-br from-[#005380] to-[#0085CC] bg-opacity-20 border border-white border-opacity-20 backdrop-blur-sm hover:bg-opacity-30 hover:scale-105 transition-all duration-300 flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <Info className="w-4 h-4 text-white" />
                    <Link href="/footer_pages/artstay-overview">
                    <h4 className="font-bold text-white text-sm">About Kashmir ArtStay</h4>
                    </Link>
                  </div>
                  <div className="space-y-2">
                    <Link
                      href="/footer_pages/who-we-are"
                      className="block text-sm md:text-base text-gray-100 font-medium hover:text-white font-semibold hover:translate-x-2 transition-all duration-300 focus:ring-2 focus:ring-white rounded"
                    >
                      Who We Are
                    </Link>
                    <Link
                      href="/footer_pages/mission-leadership"
                      className="block text-sm md:text-base text-gray-100 font-medium hover:text-white font-semibold hover:translate-x-2 transition-all duration-300 focus:ring-2 focus:ring-white rounded"
                    >
                      Mission & Leadership
                    </Link>
                    <Link
                      href="/footer_pages/project-glimpse"
                      className="block text-sm md:text-base text-gray-100 font-medium hover:text-white font-semibold hover:translate-x-2 transition-all duration-300 focus:ring-2 focus:ring-white rounded"
                    >
                      Project Glimpse
                    </Link>
                    <Link
                      href="/footer_pages/esg-commitment"
                      className="block text-sm md:text-base text-gray-100 font-medium hover:text-white font-semibold hover:translate-x-2 transition-all duration-300 focus:ring-2 focus:ring-white rounded"
                    >
                      ESG Commitment
                    </Link>
                    <Link
                      href="/footer_pages/governance"
                      className="block text-sm md:text-base text-gray-100 font-medium hover:text-white font-semibold hover:translate-x-2 transition-all duration-300 focus:ring-2 focus:ring-white rounded"
                    >
                      Governance
                    </Link>
                    <Link
                      href="/footer_pages/partners"
                      className="block text-sm md:text-base text-gray-100 font-medium hover:text-white font-semibold hover:translate-x-2 transition-all duration-300 focus:ring-2 focus:ring-white rounded"
                    >
                      Partners
                    </Link>
                    <Link
                      href="/footer_pages/careers"
                      className="block text-sm md:text-base text-gray-100 font-medium hover:text-white font-semibold hover:translate-x-2 transition-all duration-300 focus:ring-2 focus:ring-white rounded"
                    >
                      Careers
                    </Link>
                  </div>
                </div>

                {/* Help & Support Sub-card */}
                <div>
                  <h3 className="text-xl font-bold m-6 text-white group-hover:text-white transition-colors duration-300">
                Support Center
                </h3>
                <div className="p-4 rounded-lg bg-gradient-to-br from-[#005380] to-[#0085CC] bg-opacity-30 border border-[#0085CC] border-opacity-40 backdrop-blur-sm hover:bg-opacity-40 hover:scale-105 transition-all duration-300 flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <HelpCircle className="w-4 h-4 text-white" />
                    <Link href="/footer_pages/help-support">
                    <h4 className="font-bold text-white text-sm">Help & Support</h4>
                    </Link>
                  </div>
                  <div className="space-y-2">
                    <Link
                      href="/footer_pages/refund-policy"
                      className="block text-sm md:text-base text-gray-100 font-medium hover:text-white font-semibold hover:translate-x-2 transition-all duration-300 focus:ring-2 focus:ring-white rounded"
                    >
                      Refund Policy
                    </Link>
                    <Link
                      href="/footer_pages/privacy-policy"
                      className="block text-sm md:text-base text-gray-100 font-medium hover:text-white font-semibold hover:translate-x-2 transition-all duration-300 focus:ring-2 focus:ring-white rounded"
                    >
                      Privacy Policy
                    </Link>
                    <Link
                      href="/footer_pages/cookies"
                      className="block text-sm md:text-base text-gray-100 font-medium hover:text-white font-semibold hover:translate-x-2 transition-all duration-300 focus:ring-2 focus:ring-white rounded"
                    >
                      Cookies
                    </Link>
                    <Link
                      href="/footer_pages/faqs"
                      className="block text-sm md:text-base text-gray-100 font-medium hover:text-white font-semibold hover:translate-x-2 transition-all duration-300 focus:ring-2 focus:ring-white rounded"
                    >
                      FAQs
                    </Link>
                    <Link
                      href="/footer_pages/accessibility-support"
                      className="block text-sm md:text-base text-gray-100 font-medium hover:text-white font-semibold hover:translate-x-2 transition-all duration-300 focus:ring-2 focus:ring-white rounded"
                    >
                      Accessibility Support
                    </Link>
                    <Link
                      href="/footer_pages/report-concern"
                      className="block text-sm md:text-base text-gray-100 font-medium hover:text-white font-semibold hover:translate-x-2 transition-all duration-300 focus:ring-2 focus:ring-white rounded"
                    >
                      Report a Concern
                    </Link>
                  </div>
                </div>
              </div>
              </div>
            </div>

            {/* Column 2: Discover & Services */}
            <div
              className="group animate-slide-up flex flex-col"
              style={{ animationDelay: "0.2s" }}
              onMouseEnter={() => setHoveredSection("discover")}
              onMouseLeave={() => setHoveredSection(null)}
            >
              <h3 className="text-xl font-bold mb-6 text-white group-hover:text-white transition-colors duration-300">
                Cultural Services
              </h3>
              <div className="flex flex-col flex-1 gap-4">
                {/* Explore Experiences Sub-card */}
                <div className="p-4 rounded-lg bg-gradient-to-br from-[#005380] to-[#0085CC] bg-opacity-20 border border-white border-opacity-20 backdrop-blur-sm hover:bg-opacity-30 hover:scale-105 transition-all duration-300 flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <Compass className="w-4 h-4 text-white" />
                    <h4 className="font-bold text-white text-sm">Cultural Craft Experiences</h4>
                  </div>
                  <div className="space-y-2">
                    <Link
                      href="/craft-school"
                      className="block text-sm md:text-base text-gray-100 font-medium hover:text-white font-semibold hover:translate-x-2 transition-all duration-300 focus:ring-2 focus:ring-white rounded"
                    >
                      Craft School
                    </Link>
                    <Link
                      href="/craft-safari"
                      className="block text-sm md:text-base text-gray-100 font-medium hover:text-white font-semibold hover:translate-x-2 transition-all duration-300 focus:ring-2 focus:ring-white rounded"
                    >
                      Craft Safari
                    </Link>
                    <Link
                      href="/craft-safari"
                      className="block text-sm md:text-base text-gray-100 font-medium hover:text-white font-semibold hover:translate-x-2 transition-all duration-300 focus:ring-2 focus:ring-white rounded"
                    >
                      Craft Fair
                    </Link>
                    <Link
                      href="/craft-safari"
                      className="block text-sm md:text-base text-gray-100 font-medium hover:text-white font-semibold hover:translate-x-2 transition-all duration-300 focus:ring-2 focus:ring-white rounded"
                    >
                      Verified Craft Store 
                    </Link>
                    <Link
                      href="/craft-safari"
                      className="block text-sm md:text-base text-gray-100 font-medium hover:text-white font-semibold hover:translate-x-2 transition-all duration-300 focus:ring-2 focus:ring-white rounded"
                    >
                      Craft Documentor
                    </Link>
                    <Link
                      href="/craft-safari"
                      className="block text-sm md:text-base text-gray-100 font-medium hover:text-white font-semibold hover:translate-x-2 transition-all duration-300 focus:ring-2 focus:ring-white rounded"
                    >
                      Language Services
                    </Link>
                    <Link
                      href="/craft-safari"
                      className="block text-sm md:text-base text-gray-100 font-medium hover:text-white font-semibold hover:translate-x-2 transition-all duration-300 focus:ring-2 focus:ring-white rounded"
                    >
                      Travel Planner
                    </Link>
                    {/* <Link
                      href="/heritage-tours"
                      className="block text-sm md:text-base text-gray-100 font-medium hover:text-white font-semibold hover:translate-x-2 transition-all duration-300 focus:ring-2 focus:ring-white rounded"
                    >
                      Kashmir Tour
                    </Link>
                    <Link
                      href="/eco-retreats"
                      className="block text-sm md:text-base text-gray-100 font-medium hover:text-white font-semibold hover:translate-x-2 transition-all duration-300 focus:ring-2 focus:ring-white rounded"
                    >
                      Eco Retreat
                    </Link>
                    <Link
                      href="/dining-voyage"
                      className="block text-sm md:text-base text-gray-100 font-medium hover:text-white font-semibold hover:translate-x-2 transition-all duration-300 focus:ring-2 focus:ring-white rounded"
                    >
                      Dining Voyage
                    </Link>
                    <Link
                      href="/travel-planner"
                      className="block text-sm md:text-base text-gray-100 font-medium hover:text-white font-semibold hover:translate-x-2 transition-all duration-300 focus:ring-2 focus:ring-white rounded"
                    >
                      Travel Planner
                    </Link> */}
                  </div>
                </div>

                {/* Digital Services Sub-card */}
                <div>
                  <h3 className="text-xl font-bold m-6 text-white group-hover:text-white transition-colors duration-300">
                Craft Insights
              </h3>
               
                <div className="p-4 rounded-lg bg-gradient-to-br from-[#005380] to-[#0085CC] bg-opacity-30 border border-[#0085CC] border-opacity-40 backdrop-blur-sm hover:bg-opacity-40 hover:scale-105 transition-all duration-300 flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <Monitor className="w-4 h-4 text-white" />
                    <h4 className="font-bold text-white text-sm">Digital Craft Services</h4>
                  </div>
                  <div className="space-y-2">
                    <Link
                      href="https://craftlore.vercel.app/craft-registry/profiling"
                      className="block text-sm md:text-base text-gray-100 font-medium hover:text-white font-semibold hover:translate-x-2 transition-all duration-300 focus:ring-2 focus:ring-white rounded"
                    >
                     Kashmir Craft Profile
                    </Link>
                    <Link
                      href="https://craftlore.vercel.app/craft-registry/GI"
                      className="block text-sm md:text-base text-gray-100 font-medium hover:text-white font-semibold hover:translate-x-2 transition-all duration-300 focus:ring-2 focus:ring-white rounded"
                    >
                      Geographical Indication
                    </Link>
                    <Link
                      href="https://craftlore.vercel.app/craft-registry/carbon-footprint"
                      className="block text-sm md:text-base text-gray-100 font-medium hover:text-white font-semibold hover:translate-x-2 transition-all duration-300 focus:ring-2 focus:ring-white rounded"
                    >
                      Craft Carbon Footprint
                    </Link>
                    <Link
                      href="https://craftlore.vercel.app/craft-registry/cost-estimation"
                      className="block text-sm md:text-base text-gray-100 font-medium hover:text-white font-semibold hover:translate-x-2 transition-all duration-300 focus:ring-2 focus:ring-white rounded"
                    >
                      Craf Appraisal Tool
                    </Link>
                    <Link
                      href="https://craftlore.vercel.app/listing"
                      className="block text-sm md:text-base text-gray-100 font-medium hover:text-white font-semibold hover:translate-x-2 transition-all duration-300 focus:ring-2 focus:ring-white rounded"
                    >
                      Craft Trade Registry
                    </Link>
                    <Link
                      href="https://craftlore.vercel.app/craft-registry/blockchain"
                      className="block text-sm md:text-base text-gray-100 font-medium hover:text-white font-semibold hover:translate-x-2 transition-all duration-300 focus:ring-2 focus:ring-white rounded"
                    >
                      Block Chain Traceability
                    </Link>
                  </div>
                </div>
                 </div>
              </div>
            </div>

            {/* Column 3: Vendors & Business Tools */}
            <div
              className="group animate-slide-up flex flex-col"
              style={{ animationDelay: "0.4s" }}
              onMouseEnter={() => setHoveredSection("vendors")}
              onMouseLeave={() => setHoveredSection(null)}
            >
              <h3 className="text-xl font-bold mb-6 text-white group-hover:text-white transition-colors duration-300">
                Tourism Services
              </h3>
              <div className="flex flex-col flex-1 gap-4">
                {/* Business Listings Sub-card */}
                <div className="p-4 rounded-lg bg-gradient-to-br from-[#005380] to-[#0085CC] bg-opacity-20 border border-white border-opacity-20 backdrop-blur-sm hover:bg-opacity-30 hover:scale-105 transition-all duration-300 flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <Building className="w-4 h-4 text-white" />
                    <h4 className="font-bold text-white text-sm">Heritage & Eco Tours</h4>
                  </div>
                  <div className="space-y-2">
                    <Link
                      href="/artisans"
                      className="block text-sm md:text-base text-gray-100 font-medium hover:text-white font-semibold hover:translate-x-2 transition-all duration-300 focus:ring-2 focus:ring-white rounded"
                    >
                      Kashmir Tour
                    </Link>
                    <Link
                      href="/organizers"
                      className="block text-sm md:text-base text-gray-100 font-medium hover:text-white font-semibold hover:translate-x-2 transition-all duration-300 focus:ring-2 focus:ring-white rounded"
                    >
                      Eco Retreat
                    </Link>
                    <Link
                      href="/museums"
                      className="block text-sm md:text-base text-gray-100 font-medium hover:text-white font-semibold hover:translate-x-2 transition-all duration-300 focus:ring-2 focus:ring-white rounded"
                    >
                      Dining Voyage 
                    </Link>
                    <Link
                      href="/boutique-stores"
                      className="block text-sm md:text-base text-gray-100 font-medium hover:text-white font-semibold hover:translate-x-2 transition-all duration-300 focus:ring-2 focus:ring-white rounded"
                    >
                      Eco Transit
                    </Link>
                    <Link
                      href="/travel-operators"
                      className="block text-sm md:text-base text-gray-100 font-medium hover:text-white font-semibold hover:translate-x-2 transition-all duration-300 focus:ring-2 focus:ring-white rounded"
                    >
                      Travel Planner
                    </Link>
                    <Link
                      href="/travel-operators"
                      className="block text-sm md:text-base text-gray-100 font-medium hover:text-white font-semibold hover:translate-x-2 transition-all duration-300 focus:ring-2 focus:ring-white rounded"
                    >
                      Language Services
                    </Link>
                    <Link
                      href="/travel-operators"
                      className="block text-sm md:text-base text-gray-100 font-medium hover:text-white font-semibold hover:translate-x-2 transition-all duration-300 focus:ring-2 focus:ring-white rounded"
                    >
                      Tour Documentor
                    </Link>
                    
                  </div>
                </div>

                {/* Vendor Support Sub-card */}
                <div>
                  
                  <h3 className="text-xl font-bold m-6 text-white group-hover:text-white transition-colors duration-300">
                Vendor Services
              </h3>
                
                <div className="p-4 rounded-lg bg-gradient-to-br from-[#005380] to-[#0085CC] bg-opacity-30 border border-[#0085CC] border-opacity-40 backdrop-blur-sm hover:bg-opacity-40 hover:scale-105 transition-all duration-300 flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <Users className="w-4 h-4 text-white" />
                    <Link href="/footer_pages/vendor-support">
                    <h4 className="font-bold text-white text-sm">Vendor Support</h4>
                    </Link>
                  </div>
                  <div className="space-y-2">
                    <Link
                      href="/footer_pages/register-business"
                      className="block text-sm md:text-base text-gray-100 font-medium hover:text-white font-semibold hover:translate-x-2 transition-all duration-300 focus:ring-2 focus:ring-white rounded"
                    >
                      Register Your Business
                    </Link>
                    <Link
                      href="/footer_pages/vendor-login"
                      className="block text-sm md:text-base text-gray-100 font-medium hover:text-white font-semibold hover:translate-x-2 transition-all duration-300 focus:ring-2 focus:ring-white rounded"
                    >
                      Vendor Login
                    </Link>
                    <Link
                      href="/footer_pages/vendor-dashboard"
                      className="block text-sm md:text-base text-gray-100 font-medium hover:text-white font-semibold hover:translate-x-2 transition-all duration-300 focus:ring-2 focus:ring-white rounded"
                    >
                      Vendor Dashboard
                    </Link>
                    <Link
                      href="/footer_pages/sustainability-ethics"
                      className="block text-sm md:text-base text-gray-100 font-medium hover:text-white font-semibold hover:translate-x-2 transition-all duration-300 focus:ring-2 focus:ring-white rounded"
                    >
                      Sustainability & Ethics 
                    </Link>
                    <Link
                      href="/footer_pages/partnership-growth"
                      className="block text-sm md:text-base text-gray-100 font-medium hover:text-white font-semibold hover:translate-x-2 transition-all duration-300 focus:ring-2 focus:ring-white rounded"
                    >
                      Partnership Growth
                    </Link>
                    <Link
                      href="https://khcrf.org/"
                      className="block text-sm md:text-base text-gray-100 font-medium hover:text-white font-semibold hover:translate-x-2 transition-all duration-300 focus:ring-2 focus:ring-white rounded"
                    >
                       Advocacy Support
                    </Link>
                  </div>
                </div>
                </div>
              </div>
            </div>

            {/* Column 4: Affiliate & Developer Access */}
            <div
              className="group animate-slide-up flex flex-col"
              style={{ animationDelay: "0.6s" }}
              onMouseEnter={() => setHoveredSection("affiliate")}
              onMouseLeave={() => setHoveredSection(null)}
            >
              <h3 className="text-xl font-bold mb-6 text-white group-hover:text-white transition-colors duration-300">
                Affiliate Tools
              </h3>
              <div className="flex flex-col flex-1 gap-4">
                {/* Affiliate Program Sub-card */}
                <div className="p-4 rounded-lg bg-gradient-to-br from-[#005380] to-[#0085CC] bg-opacity-20 border border-white border-opacity-20 backdrop-blur-sm hover:bg-opacity-30 hover:scale-105 transition-all duration-300 flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <DollarSign className="w-4 h-4 text-white" />
                    <Link href="/footer_pages/affiliate-program">
                    <h4 className="font-bold text-white text-sm">Affiliate Program</h4>
                    </Link>
                  </div>
                  <div className="space-y-2">
                    <Link
                      href="/footer_pages/program-overview"
                      className="block text-sm md:text-base text-gray-100 font-medium hover:text-white font-semibold hover:translate-x-2 transition-all duration-300 focus:ring-2 focus:ring-white rounded"
                    >
                      Program Overview
                    </Link>
                    <Link
                      href="/footer_pages/commision-tiers"
                      className="block text-sm md:text-base text-gray-100 font-medium hover:text-white font-semibold hover:translate-x-2 transition-all duration-300 focus:ring-2 focus:ring-white rounded"
                    >
                      Commission Tiers
                    </Link>
                    <Link
                      href="/footer_pages/tracking-dashboard"
                      className="block text-sm md:text-base text-gray-100 font-medium hover:text-white font-semibold hover:translate-x-2 transition-all duration-300 focus:ring-2 focus:ring-white rounded"
                    >
                      Tracking & Dashboard
                    </Link>
                    <Link
                      href="/footer_pages/apply-affiliate"
                      className="block text-sm md:text-base text-gray-100 font-medium hover:text-white font-semibold hover:translate-x-2 transition-all duration-300 focus:ring-2 focus:ring-white rounded"
                    >
                      Apply as Affiliate
                    </Link>
                    
                    <Link
                      href="/footer_pages/promo-campaigns"
                      className="block text-sm md:text-base text-gray-100 font-medium hover:text-white font-semibold hover:translate-x-2 transition-all duration-300 focus:ring-2 focus:ring-white rounded"
                    >
                      Promo Campaigns
                    </Link>
                    <Link
                      href="/footer_pages/referral-code"
                      className="block text-sm md:text-base text-gray-100 font-medium hover:text-white font-semibold hover:translate-x-2 transition-all duration-300 focus:ring-2 focus:ring-white rounded"
                    >
                      Referral Code 
                    </Link>
                    <Link
                      href="/footer_pages/affiliate-support"
                      className="block text-sm md:text-base text-gray-100 font-medium hover:text-white font-semibold hover:translate-x-2 transition-all duration-300 focus:ring-2 focus:ring-white rounded"
                    >
                      Affiliate Support
                    </Link>
                  </div>
                </div>

                {/* API & Developer Tools Sub-card */}
                <div>
                  <h3 className="text-xl font-bold m-6 text-white group-hover:text-white transition-colors duration-300">
                Developer Access
              </h3>
               
                <div className="p-4 rounded-lg bg-gradient-to-br from-[#005380] to-[#0085CC] bg-opacity-30 border border-[#0085CC] border-opacity-40 backdrop-blur-sm hover:bg-opacity-40 hover:scale-105 transition-all duration-300 flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <Code className="w-4 h-4 text-white" />
                    <Link href="/footer_pages/api-developer-tools">
                    <h4 className="font-bold text-white text-sm">API & Developer Tools</h4>
                    </Link>
                  </div>
                  <div className="space-y-2">
                    <Link
                      href="/footer_pages/documentation"
                      className="block text-sm md:text-base text-gray-100 font-medium hover:text-white font-semibold hover:translate-x-2 transition-all duration-300 focus:ring-2 focus:ring-white rounded"
                    >
                      Documentation
                    </Link>
                    <Link
                      href="/api-sandbox"
                      className="block text-sm md:text-base text-gray-100 font-medium hover:text-white font-semibold hover:translate-x-2 transition-all duration-300 focus:ring-2 focus:ring-white rounded"
                    >
                      Sandbox
                    </Link>
                    <Link
                      href="/installation-guide"
                      className="block text-sm md:text-base text-gray-100 font-medium hover:text-white font-semibold hover:translate-x-2 transition-all duration-300 focus:ring-2 focus:ring-white rounded"
                    >
                      Installation Guide
                    </Link>
                    <Link
                      href="/how-to-use"
                      className="block text-sm md:text-base text-gray-100 font-medium hover:text-white font-semibold hover:translate-x-2 transition-all duration-300 focus:ring-2 focus:ring-white rounded"
                    >
                      How to Use
                    </Link>
                    <Link
                      href="/request-api-key"
                      className="block text-sm md:text-base text-gray-100 font-medium hover:text-white font-semibold hover:translate-x-2 transition-all duration-300 focus:ring-2 focus:ring-white rounded"
                    >
                      Request API Key
                    </Link>
                    <Link
                      href="/webhook-events"
                      className="block text-sm md:text-base text-gray-100 font-medium hover:text-white font-semibold hover:translate-x-2 transition-all duration-300 focus:ring-2 focus:ring-white rounded"
                    >
                      Webhook Events
                    </Link>
                  </div>
                </div>
                 </div>
              </div>
            </div>
          </div>
        </div>

        {/* Creative Section Divider */}
        <div className="flex items-center justify-center mb-12">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#0085CC] to-transparent"></div>
          <div className="mx-4 p-2 rounded-full bg-[#0085CC]">
            <Globe className="w-4 h-4 text-white" />
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#0085CC] to-transparent"></div>
        </div>

        {/* Global Contact & Social Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Contact Information */}
          <div className="p-8 rounded-2xl backdrop-blur-lg bg-white bg-opacity-10 border border-white border-opacity-20 shadow-2xl hover:scale-105 transition-all duration-500">
            <h3 className="text-2xl font-bold mb-6 text-white font-bold flex items-center gap-2">
              <MapPin className="w-6 h-6" />
              Global Contact
            </h3>
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-gradient-to-r from-[#0085CC] to-[#005380] bg-opacity-30 border border-white border-opacity-30">
                <h4 className="font-semibold text-white mb-2">HQ (India)</h4>
                <p className="text-gray-200 text-sm">Srinagar, Jammu & Kashmir, 190001</p>
              </div>
              <div className="p-4 rounded-lg bg-gradient-to-r from-[#0085CC] to-[#005380] bg-opacity-30 border border-white border-opacity-30">
                <h4 className="font-semibold text-white mb-2">HQ (USA)</h4>
                <p className="text-gray-200 text-sm">DeKoshur Crafts, Washington D.C.</p>
              </div>
              <div className="flex items-center gap-3 text-gray-200">
                <Phone className="w-5 h-5 text-white font-bold" />
                <span className="text-sm md:text-base">+91 88992 28242 | +91 94190 70707 | +91 990067 28824</span>
               
                
              </div>
              <div className="flex items-center gap-3 text-gray-200">
                <Mail className="w-5 h-5 text-white font-bold" />
                <a
                  href="mailto:info@kashmirartstay.com"
                  className="text-sm md:text-base hover:text-white transition-colors duration-300"
                >
                  info@kashmirartstay.com
                </a>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="p-8 rounded-2xl backdrop-blur-lg bg-white bg-opacity-10 border border-white border-opacity-20 shadow-2xl hover:scale-105 transition-all duration-500">
            <h3 className="text-2xl font-bold mb-6 text-white font-bold">Connect With Us</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
              {socialLinks.map((social, index) => (
                <a
                  key={social.name}
                  href={social.href}
                  className={`flex items-center gap-2 p-3 rounded-lg bg-white bg-opacity-5 border border-white border-opacity-10 hover:bg-opacity-20 hover:scale-110 transition-all duration-300 ${social.color} group`}
                  aria-label={`Follow us on ${social.name}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <social.icon className="w-5 h-5 group-hover:animate-pulse" />
                  <span className="text-sm font-medium">{social.name}</span>
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              ))}
            </div>

            {/* Newsletter Signup */}
            <div className="p-4 rounded-lg bg-gradient-to-r from-[#005380] to-[#0085CC] bg-opacity-30 border border-white border-opacity-30">
              <h4 className="font-bold text-white mb-3">Newsletter Signup</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white text-sm"
                />
                <button className="px-4 py-2 bg-gradient-to-r from-primary to-secondary rounded-lg text-white font-semibold hover:scale-105 transition-all duration-300 focus:ring-2 focus:ring-white">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Links */}
        <div className="flex flex-wrap justify-center gap-4 mb-8 p-6 rounded-xl backdrop-blur-lg bg-white bg-opacity-5 border border-white border-opacity-10">
          <div className="flex flex-wrap text-center items-center gap-2 text-xl text-white-500 mb-4">
            <span>Website Developed & Maintain By Prime Logics Solutions <span className="hidden sm:inline">•</span> USA <br /> <i>( The In-House Software Development & Digital Marketing Company of De Koshur Crafts USA )</i></span>
            
          
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center p-6 rounded-xl backdrop-blur-lg bg-white bg-opacity-5 border border-white border-opacity-10">
          <div className="flex flex-wrap justify-center items-center gap-2 text-xl text-white-500 mb-4">
            <span>© 2025 Kashmir ArtStay. All rights reserved.</span>
            <span className="hidden sm:inline">•</span>
            <span>Powered by DeKoshur Crafts USA & Hamadan Craft Revival Foundation</span>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-4 text-xl text-white-500">
            <div className="flex items-center gap-1">
              <Shield className="w-3 h-3 text-white font-bold" />
              <span>Verified by CraftLore</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-white font-bold" />
              <span>GI-Certified</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1">
              <Leaf className="w-3 h-3 text-green-400" />
              <span>Carbon Aware</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1">
              <Shield className="w-3 h-3 text-blue-400" />
              <span>Blockchain Traceable</span>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0);
          }
        }

        .animate-float {
          animation: float 4s infinite ease-in-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fade-in {
          animation: fadeIn 1s ease-in-out forwards;
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slide-up {
          animation: slideUp 0.8s ease-out forwards;
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
      `}</style>
    </footer>
  )
}