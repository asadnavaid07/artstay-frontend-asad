"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { AlertCircle } from "lucide-react"

const services = [
  "artisan",
  "dining",
  "documentary",
  "eco-transit",
  "fair",
  "hotel",
  "language",
  "safari",
  "shop",
  "traveler",
]

export default function RegistrationForm() {
  const [selectedService, setSelectedService] = useState("")
  const [error, setError] = useState("")
  const router = useRouter()

  const handleNext = () => {
    if (!selectedService) {
      setError("Please select a service")
      return
    }

    // Navigate to the selected service page
    router.push(`/join-us/${selectedService}`)
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-transparent">
        

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Choose a Service *
            </label>
            <select
              value={selectedService}
              onChange={(e) => {
                setSelectedService(e.target.value)
                setError("")
              }}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#0085CC] focus:border-transparent ${
                error ? "border-red-500" : "border-gray-300"
              }`}
            >
              <option value="">Select a service...</option>
              {services.map((service) => (
                <option key={service} value={service}>
                  {service.charAt(0).toUpperCase() + service.slice(1)}
                </option>
              ))}
            </select>
            {error && (
              <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                <AlertCircle className="w-4 h-4" />
                {error}
              </p>
            )}
          </div>

          <div className="flex justify-end mt-6">
            <button
              type="button"
              onClick={handleNext}
              className="px-8 py-3 bg-[#005380] text-white rounded-lg hover:bg-[#004060] transition-colors"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}