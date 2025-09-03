import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card"
import { Badge } from "~/components/ui/badge"
import { Button } from "~/components/ui/button"
import { ExternalLink } from "lucide-react"

interface ApiCardProps {
  title: string
  description: string
  icon: React.ReactNode
  features: string[]
  ctaText: string
  ctaLink: string
  badge?: string
  className?: string
}

export function ApiCard({ title, description, icon, features, ctaText, ctaLink, badge, className }: ApiCardProps) {
  return (
    <Card className={`h-full transition-all duration-300 hover:shadow-lg hover:scale-105 ${className}`}>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-br from-[#005380] to-[#0085CC] rounded-lg">{icon}</div>
            <div>
              <CardTitle className="text-lg">{title}</CardTitle>
              {badge && (
                <Badge variant="secondary" className="mt-1">
                  {badge}
                </Badge>
              )}
            </div>
          </div>
        </div>
        <p className="text-gray-600 text-sm mt-2">{description}</p>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2 text-sm">
              <div className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
              {feature}
            </li>
          ))}
        </ul>
        <Button asChild className="w-full">
          <a href={ctaLink} className="flex items-center gap-2">
            {ctaText}
            <ExternalLink className="h-4 w-4" />
          </a>
        </Button>
      </CardContent>
    </Card>
  )
}
