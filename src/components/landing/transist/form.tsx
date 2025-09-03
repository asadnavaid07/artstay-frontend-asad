"use client";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "~/components/ui/form";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { useToast } from "~/hooks/use-toast";
import axios from "axios";

const formSchema = z
  .object({
    pickup: z.string().min(1, "Pickup location is required"),
    destination: z.string().min(1, "Destination is required"),
    travelDate: z.string().min(1, "Date is required"),
    numberOfGuests: z.number().min(1, "At least one guest is required"),
    vehicleType: z.string().min(1, "Please select vehicle type"),
    accessibilityNeeds: z.array(z.string()).min(1, "Please select at least one accessibility need"),
    sustainabilityPreferences: z.array(z.string()).min(1, "Please select at least one sustainability preference"),
    packageOption: z.number().min(100, "Please select a package"),
  })
  .refine((data) => new Date(data.travelDate) > new Date(), {
    message: "Travel date must be in the future",
    path: ["travelDate"],
  });

type FormData = z.infer<typeof formSchema>;

export const TransitForm = () => {
  const { toast } = useToast();
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      pickup: "",
      destination: "",
      travelDate: "",
      numberOfGuests: 1,
      vehicleType: "",
      accessibilityNeeds: [],
      sustainabilityPreferences: [],
      packageOption: 100,
    },
  });

  const onSubmit = async (data: FormData) => {
    try {
      console.log("Form submitted:", data);

      const res = await axios.post<{ status: string; message: string; data?: any }>(
        `${process.env.NEXT_PUBLIC_API_URL}/eco-transit/find-eco-transit-adventure`,
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

  };

  const accessibilityNeedsOptions = [
    { id: "wheelchair", label: "Wheelchair Access" },
    { id: "child-seat", label: "Child Seat" },
    { id: "service-pet", label: "Service Pet Accommodations" },
  ];

  const sustainabilityPreferencesOptions = [
    { id: "share-ride", label: "Share Ride with Other Guests" },
    { id: "plastic-free", label: "Request Plastic-Free Transit Experience" },
    { id: "cultural-stopover", label: "Include Short Cultural Stopover En Route" },
  ];

  const budgetCheckpoints = [
    { value: 100, label: "Basic", range: "$100 – $250" },
    { value: 251, label: "Standard", range: "$251 – $500" },
    { value: 501, label: "Premium", range: "$501 – $1,000" },
    { value: 1001, label: "Luxury", range: "$1,001 – $2,500" },
    { value: 2501, label: "Ultra-Luxury", range: "$2,501+" },
  ];

  const getCurrentBudgetLabel = (value: number) => {
    const checkpoint = budgetCheckpoints.find((point) => point.value === value);
    return checkpoint ? `${checkpoint.label} (${checkpoint.range})` : `$${value}`;
  };

  return (
    <div className="z-[100] -mt-16 mx-auto w-full max-w-xl rounded-lg bg-white shadow-lg">
      <div className="rounded-t-lg bg-primary p-4 text-white border-2 border-white">
        <h2 className="text-center text-xl font-bold">
          Embark on an ArtStay Eco Transit Adventure <br /> <span className="text-sm italic">Not Just a Trip, A Journey into Kashmir&apos;s Green Soul & Heritage</span>
        </h2>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 p-6">
          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="pickup"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-600">Pickup Location</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="– Select Pickup –" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="srinagar">Srinagar Airport</SelectItem>
                      <SelectItem value="downtown">Srinagar Downtown</SelectItem>
                      <SelectItem value="gulmarg">Gulmarg</SelectItem>
                      <SelectItem value="pahalgam">Pahalgam</SelectItem>
                      <SelectItem value="sonamarg">Sonamarg</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="destination"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-600">Destination</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="– Select Destination –" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="srinagar">Srinagar</SelectItem>
                      <SelectItem value="gulmarg">Gulmarg</SelectItem>
                      <SelectItem value="pahalgam">Pahalgam</SelectItem>
                      <SelectItem value="sonamarg">Sonamarg</SelectItem>
                      <SelectItem value="doodhpathri">Doodhpathri</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="travelDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-600">Travel Date</FormLabel>
                <FormControl>
                  <Input type="date" {...field} className="w-full" />
                </FormControl>
                
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="numberOfGuests"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-600">Number of Guests</FormLabel>
                  <Select
                    onValueChange={(value) => field.onChange(parseInt(value))}
                    defaultValue={field.value.toString()}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select number of guests" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {Array.from({ length: 10 }, (_, i) => (
                        <SelectItem key={i + 1} value={(i + 1).toString()}>
                          {i + 1} {i + 1 === 1 ? "person" : "people"}
                        </SelectItem>
                      ))}
                      <SelectItem value="10+">10+ people</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="vehicleType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-600">Preferred Eco-Friendly Vehicle</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="– Select Vehicle –" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="cng-car">CNG Car</SelectItem>
                      <SelectItem value="e-rickshaw">E-Rickshaw</SelectItem>
                      <SelectItem value="shikara">Shikara (for lakeside restaurants)</SelectItem>
                      <SelectItem value="heritage-walking">Heritage Walking Escort (short distance)</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="accessibilityNeeds"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-600">Special Accessibility Needs</FormLabel>
                  <Select
                    onValueChange={(value) => {
                      const currentValues = Array.isArray(field.value) ? field.value : [];
                      if (currentValues.includes(value)) {
                        field.onChange(currentValues.filter((v) => v !== value));
                      } else {
                        field.onChange([...currentValues, value]);
                      }
                    }}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue
                          placeholder={
                            field.value && field.value.length > 0
                              ? `${field.value.length} need${field.value.length > 1 ? "s" : ""} selected`
                              : "– Select Accessibility Needs –"
                          }
                        />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {accessibilityNeedsOptions.map((option) => (
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
                        .map((id) => accessibilityNeedsOptions.find((option) => option.id === id)?.label)
                        .join(", ")}
                    </div>
                  )}
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="sustainabilityPreferences"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-600">Sustainability Preferences</FormLabel>
                  <Select
                    onValueChange={(value) => {
                      const currentValues = Array.isArray(field.value) ? field.value : [];
                      if (currentValues.includes(value)) {
                        field.onChange(currentValues.filter((v) => v !== value));
                      } else {
                        field.onChange([...currentValues, value]);
                      }
                    }}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue
                          placeholder={
                            field.value && field.value.length > 0
                              ? `${field.value.length} preference${field.value.length > 1 ? "s" : ""} selected`
                              : "– Select Sustainability Preferences –"
                            }
                        />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {sustainabilityPreferencesOptions.map((option) => (
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
                        .map((id) => sustainabilityPreferencesOptions.find((option) => option.id === id)?.label)
                        .join(", ")}
                    </div>
                  )}
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="packageOption"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-600">Select Package Option</FormLabel>
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
                          const index = Number.parseInt(e.target.value);
                          const selectedCheckpoint = budgetCheckpoints[index];
                          const fallbackCheckpoint = budgetCheckpoints[0];
                          
                          if (index >= 0 && index < budgetCheckpoints.length && selectedCheckpoint) {
                            field.onChange(selectedCheckpoint.value);
                          } else if (fallbackCheckpoint) {
                            field.onChange(fallbackCheckpoint.value);
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

          <Button type="submit" className="w-full">
            CHECK AVAILABILITY
          </Button>
        </form>
      </Form>
    </div>
  );
};