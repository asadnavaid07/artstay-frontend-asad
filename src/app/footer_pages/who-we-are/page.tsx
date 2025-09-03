import HeroSection from "~/components/footer_components/ui/hero-section"
import ContentSection from "~/components/footer_components/ui/content-section"
import Card from "~/components/footer_components/ui/card"
import { Users, Heart, Globe, Award } from "lucide-react"
import Image from "next/image"

export default function WhoWeArePage() {
  const values = [
    {
      icon: Heart,
      title: "Heritage Preservation",
      description: "We safeguard centuries-old crafting traditions for future generations",
    },
    {
      icon: Users,
      title: "Empowerment", 
      description: "Every artisan is a partner in our shared journey of cultural revival",
    },
    {
      icon: Globe,
      title: "Global Connection",
      description: "We bridge cultures through authentic experiences and meaningful exchanges",
    },
    {
      icon: Award,
      title: "Quality Excellence",
      description: "Every product and experience meets the highest standards of authenticity",
    },
  ]

  return (
  <>
      <HeroSection
        title="Rooted in Heritage. Driven by Purpose."
        subtitle="Our Identity"
        description="ArtStay is the world's first integrated craft-and-tourism platform based in the soul of Kashmir. We are storytellers, bridge-builders, and system-changers."
         backgroundImage="/images/kashmir.jpg"
      />

      <ContentSection background="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left side - Text content */}
          <div className="sticky top-24">
            <div className="w-50 h-50 flex items-center justify-center mb-2">
              <Image 
                src="/logo/logo_1.png" 
                alt="ArtStay Logo" 
                width={150}
                height={150}
                className="object-contain"
              />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#005380] mb-8 text-center">Who We Are</h2>
            <div className="space-y-6 text-lg text-gray-900 leading-relaxed">
              <p>
                Our identity is woven from the threads of local craftsmanship and the footsteps of conscious travelers.
                We empower artisans, connect cultures, and provide authentic experiences to travelers who seek more than
                just sightseeing.
              </p>
              <p>
                We are more than a platform! We are custodians of culture, champions of artisans, and creators of
                connections that transcend borders.
              </p>
              <p>
                At our core lies a belief:{" "}
                <strong className="text-[#005380] italic">When heritage is preserved and shared, humanity is healed.</strong>
              </p>
            </div>
          </div>

          {/* Right side - Image placeholder */}
          <div className="flex items-start justify-center lg:justify-start">
            <div className="aspect-square w-full max-w-md bg-gradient-to-br from-[#005380] to-[#0085CC] rounded-2xl flex items-center justify-center text-white text-center p-8 shadow-[0_10px_15px_-3px_rgba(0,0,0,0.4),0_4px_6px_-4px_rgba(0,0,0,0.4)] relative">
              <div className="absolute inset-0 rounded-2xl shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]"></div>
              <div className="relative z-10">
                <div className="w-24 h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold">AS</span>
                </div>
                <p className="text-lg opacity-90">
                  Image placeholder
                </p>
              </div>
            </div>
          </div>
        </div>
      </ContentSection>

      <ContentSection background="gradient">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#005380] mb-6">Our Core Values</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            These principles guide every decision we make and every relationship we build
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value) => (
            <Card key={value.title} gradient hover className="text-center">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#005380] to-[#0085CC] rounded-full flex items-center justify-center mx-auto">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </Card>
          ))}
        </div>
      </ContentSection>

      <ContentSection background="white">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="text-2xl md:text-3xl font-light text-gray-700 italic leading-relaxed">
            &quot;We believe that every thread tells a story, every craft carries culture, and every traveler can become a
            bridge between worlds.&quot;
          </blockquote>
          <div className="mt-8 flex items-center justify-center gap-4">
            <div className="w-24 h-24 flex items-center justify-center">
              <Image 
              src="/logo/logo_1.png" 
                alt="ArtStay Logo" 
                width={48}
                height={48}
                className="object-contain"
              />
            </div>
            <div className="text-left">
              <p className="font-semibold text-[#005380]">ArtStay Team</p>
              <p className="text-[#0085CC] text-sm">Founders & Visionaries</p>
            </div>
          </div>
        </div>
      </ContentSection>
    </>
  )
}