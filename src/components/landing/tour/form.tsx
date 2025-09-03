"use client"
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "~/components/ui/form"
import { Button } from "~/components/ui/button"
import { Input } from "~/components/ui/input"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "~/components/ui/select"
import { useToast } from "~/hooks/use-toast"
import axios from "axios"

const formSchema = z
  .object({
    destination: z.string().min(1, "Please select a destination"),
    tourPackage: z.string().min(1, "Please select a tour package"),
    budgetPerPerson: z.number().min(100, "Please select a budget"),
    checkIn: z.string().min(1, "Check-in date is required"),
    checkOut: z.string().min(1, "Check-out date is required"),
    adults: z.number().min(1, "At least one adult is required"),
    children: z.number().min(0).optional(),
    tourPreferences: z.array(z.string()).min(1, "Please select at least one tour preference"),
  })
  .refine((data) => new Date(data.checkOut) > new Date(data.checkIn), {
    message: "Check-out date must be after check-in date",
    path: ["checkOut"],
  })

type FormData = z.infer<typeof formSchema>;

export const TourForm = () => {
  const { toast } = useToast();
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      destination: "",
      tourPackage: "",
      budgetPerPerson: 100,
      checkIn: "",
      checkOut: "",
      adults: 1,
      children: 0,
      tourPreferences: [],
    },
  })

  const onSubmit = async (data: FormData) => {
    try {
      console.log("Form submitted:", data);

      const res = await axios.post<{ status: string; message: string; data?: any }>(
        `${process.env.NEXT_PUBLIC_API_URL}/artisan/find-traditional-tour`,
        data
      );

      if (res.data.status === "success") {
        toast({ title: "Success", description: res.data.message });
      } else if (res.data.status === "error") {
        toast({ title: "Failed", description: res.data.message, variant: "destructive" });
        alert(res.data.message);
      }
    } catch (error: any) {
      console.error("Request failed:", error);
      toast({ title: "Error", description: "Something went wrong", variant: "destructive" });
    }
  }

  const budgetCheckpoints = [
    { value: 100, label: "Basic", range: "$100 – $250" },
    { value: 251, label: "Standard", range: "$251 – $500" },
    { value: 501, label: "Premium", range: "$501 – $1,000" },
    { value: 1001, label: "Luxury", range: "$1,001 – $2,500" },
    { value: 2501, label: "Ultra-Luxury", range: "$2,501+" },
  ]

  const tourPreferenceOptions = [
    { id: "cultural", label: "Cultural Heritage Focus" },
    { id: "nature", label: "Nature & Wildlife" },
    { id: "adventure", label: "Adventure Activities" },
    { id: "culinary", label: "Culinary & Wellness" },
    { id: "archaeological", label: "Archaeological Sites & Ruins" },
  ]

  const getCurrentBudgetLabel = (value: number) => {
    const checkpoint = budgetCheckpoints.find((point) => point.value === value)
    return checkpoint ? `${checkpoint.label} (${checkpoint.range})` : `$${value}`
  }

  return (
    <div className="z-[100] -mt-[100] mx-auto w-full max-w-xl rounded-lg bg-white shadow-lg">
      <div className="rounded-t-lg bg-primary p-4 text-white border-white border-2">
        <h2 className="text-center text-xl font-bold">Find an ArtStay Traditional Kashmir Tour <br /> <span className='text-sm italic'>Not Just a Trip, A Journey into Kashmir&apos;s Soul & Heritage</span></h2>

      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 p-6">
          <FormField
            control={form.control}
            name="destination"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-600">Select Destination</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="– Where are you going? –" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="srinagar">Srinagar</SelectItem>
                    <SelectItem value="gulmarg">Gulmarg</SelectItem>
                    <SelectItem value="pahalgam">Pahalgam</SelectItem>
                    <SelectItem value="sonamarg">Sonamarg</SelectItem>
                    <SelectItem value="leh">Leh</SelectItem>
                    <SelectItem value="multi-city">Multi-city Itinerary</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="tourPackage"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-600">Preferred Tour Package</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="– Select Tour Package –" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="heritage">Heritage & Cultural Exploration (3–5 Days)</SelectItem>
                    <SelectItem value="sufi">Sufi Spiritual Retreat (4–6 Days)</SelectItem>
                    <SelectItem value="alpine">Alpine Adventure & Trekking (5–7 Days)</SelectItem>
                    <SelectItem value="family">Family Vacation Package (3–7 Days)</SelectItem>
                    <SelectItem value="luxury">Luxury Houseboat & Resort Stay (4–6 Days)</SelectItem>
                    <SelectItem value="photography">Photography & Scenic Tour (3–5 Days)</SelectItem>
                    <SelectItem value="custom">Custom Package (On Request)</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="budgetPerPerson"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-600">Select type of Package</FormLabel>
                <FormControl>
                  <div className="space-y-4">
                    <div className="relative">
                      <input
                        type="range"
                        min={0}
                        max={4}
                        step={1}
                        value={budgetCheckpoints.findIndex((point) => point.value === field.value)}
                        onChange={(e) => {
                          const index = Number.parseInt(e.target.value)
                          const selectedCheckpoint = budgetCheckpoints[index]
                          const fallbackCheckpoint = budgetCheckpoints[0]

                          if (index >= 0 && index < budgetCheckpoints.length && selectedCheckpoint) {
                            field.onChange(selectedCheckpoint.value)
                          } else if (fallbackCheckpoint) {
                            field.onChange(fallbackCheckpoint.value)
                          }
                        }}
                        className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                        style={{
                          background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${(budgetCheckpoints.findIndex((point) => point.value === field.value) / 4) * 100}%, #e5e7eb ${(budgetCheckpoints.findIndex((point) => point.value === field.value) / 4) * 100}%, #e5e7eb 100%)`,
                        }}
                      />
                      <div className="flex justify-between text-xs text-gray-400 mt-1">
                        {budgetCheckpoints.map((point, index) => (
                          <span
                            key={point.value}
                            className={index === 0 || index === budgetCheckpoints.length - 1 ? "" : "hidden sm:block"}
                          >
                            {point.label}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="text-center p-3 bg-blue-50 rounded-lg border border-blue-200">
                      <div className="text-sm font-semibold text-blue-800">
                        Selected Package: {getCurrentBudgetLabel(field.value)}
                      </div>
                    </div>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="checkIn"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-600">Check In</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} className="w-full" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="checkOut"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-600">Check Out</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} className="w-full" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="adults"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-600">Number of Adults (12+ years)</FormLabel>
                  <Select
                    onValueChange={(value) => field.onChange(Number.parseInt(value))}
                    defaultValue={field.value.toString()}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select number of adults" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {Array.from({ length: 10 }, (_, i) => (
                        <SelectItem key={i + 1} value={(i + 1).toString()}>
                          {i + 1}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="children"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-600">Number of Children (Under 12)</FormLabel>
                  <Select
                    onValueChange={(value) => field.onChange(Number.parseInt(value))}
                    defaultValue={field.value?.toString() ?? "0"}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select number of children" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {Array.from({ length: 11 }, (_, i) => (
                        <SelectItem key={i} value={i.toString()}>
                          {i}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="tourPreferences"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-600">Tour Preferences</FormLabel>
                <Select
                  onValueChange={(value) => {
                    const currentValues = Array.isArray(field.value) ? field.value : [];
                    if (currentValues.includes(value)) {
                      field.onChange(currentValues.filter((v) => v !== value))
                    } else {
                      field.onChange([...currentValues, value])
                    }
                  }}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue
                        placeholder={
                          field.value && field.value.length > 0
                            ? `${field.value.length} preference${field.value.length > 1 ? "s" : ""} selected`
                            : "– Select Tour Preferences –"
                        }
                      />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {tourPreferenceOptions.map((option) => (
                      <SelectItem
                        key={option.id}
                        value={option.id}
                        className={field.value?.includes(option.id) ? "bg-blue-50 text-blue-700" : ""}
                      >
                        <div className="flex items-center space-x-2">
                          <div
                            className={`w-4 h-4 border rounded ${field.value?.includes(option.id) ? "bg-blue-600 border-blue-600" : "border-gray-300"}`}
                          >
                            {field.value?.includes(option.id) && (
                              <svg className="w-3 h-3 text-white ml-0.5 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            )}
                          </div>
                          <span>{option.label}</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {field.value && field.value.length > 0 && (
                  <div className="text-sm text-blue-600 bg-blue-50 p-2 rounded border mt-2">
                    <strong>Selected:</strong>{" "}
                    {field.value
                      .map((id) => tourPreferenceOptions.find((option) => option.id === id)?.label)
                      .join(", ")}
                  </div>
                )}
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full">
            FIND NOW
          </Button>
        </form>
      </Form>
    </div>
  )
}