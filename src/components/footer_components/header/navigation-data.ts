export interface NavigationItem {
  title: string
  description: string
  links: {
    name: string
    href: string
  }[]
}

export const navigationData: NavigationItem[] = [
  {
    title: "Cultural Craft Experiences",
    description: "Immersive journeys with Kashmiri artisans",
    links: [
      { name: "Craft School", href: "/craft-school" },
      { name: "Craft Safari", href: "/craft-safari" },
      { name: "Craft Fair", href: "/craft-fair" },
    ],
  },
  {
    title: "Verified Craft Marketplace",
    description: "Shop authentic Kashmiri crafts, documented and certified",
    links: [
      { name: "Craft Store", href: "/craft-store" },
      { name: "Craft Documenter", href: "/craft-documenter" },
    ],
  },
  {
    title: "Heritage & Eco Tours",
    description: "Explore Kashmir through culture, nature, and wellness",
    links: [
      { name: "Kashmir Tour", href: "/kashmir-tour" },
      { name: "Eco Retreat", href: "/eco-retreat" },
      { name: "Dining Voyage", href: "/dining-voyage" },
      { name: "Eco Transit", href: "/eco-transit" },
    ],
  },
  {
    title: "Business Solutions",
    description: "Tools and services for artisans and businesses",
    links: [
      { name: "Vendor Portal", href: "/vendor-portal" },
      { name: "API Access", href: "/api-access" },
      { name: "Training Hub", href: "/training-hub" },
    ],
  },
]
