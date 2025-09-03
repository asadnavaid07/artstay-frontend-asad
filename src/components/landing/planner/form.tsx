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
import axios from "axios";
import { useToast } from "~/hooks/use-toast";

const formSchema = z
  .object({
    tripCategory: z.string().min(1, "Please select trip category"),
    adultTravelers: z.number().min(1, "At least one adult traveler is required"),
    childTravelers: z.number().min(0).optional(),
    tripStartDate: z.string().min(1, "Trip start date is required"),
    tripEndDate: z.string().min(1, "Trip end date is required"),
    craftCulturalExperiences: z.array(z.string()).min(1, "Select at least one craft/cultural experience"),
    tourismRetreats: z.array(z.string()).min(1, "Select at least one tourism/retreat option"),
    supportServices: z.array(z.string()).min(1, "Select at least one support service"),
    focusAreas: z.array(z.string()).min(1, "Select at least one focus area"),
    stayType: z.string().min(1, "Please select stay type"),
  })
  .refine((data) => new Date(data.tripStartDate) > new Date(), {
    message: "Trip start date must be in the future",
    path: ["tripStartDate"],
  })
  .refine((data) => new Date(data.tripEndDate) > new Date(data.tripStartDate), {
    message: "Trip end date must be after start date",
    path: ["tripEndDate"],
  });

export const PlannerForm = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      tripCategory: "",
      adultTravelers: 2,
      childTravelers: 0,
      tripStartDate: "",
      tripEndDate: "",
      craftCulturalExperiences: [],
      tourismRetreats: [],
      supportServices: [],
      focusAreas: [],
      stayType: "",
    },
  });


  // verification pending
  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      console.log("Form submitted:", data);

      const res = await axios.post<{ status: string; message: string; data?: any }>(
        `${process.env.NEXT_PUBLIC_API_URL}/travel/find-kashmir-odyssey`,
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

  const craftCulturalOptions = [
    { id: "craft-school", label: "Craft School" },
    { id: "craft-safari", label: "Craft Safari" },
    { id: "craft-fair", label: "Craft Fair" },
    { id: "craft-store", label: "Craft Store" },
  ];

  const tourismRetreatOptions = [
    { id: "kashmir-tour", label: "Kashmir Tour" },
    { id: "eco-retreat", label: "Eco Retreat" },
    { id: "dining-voyage", label: "Dining Voyage" },
  ];

  const supportServiceOptions = [
    { id: "language-services", label: "Language Services" },
    { id: "eco-transit", label: "Eco Transit" },
    { id: "travel-planner", label: "Travel Planner" },
    { id: "craft-documenter", label: "Craft Documenter" },
  ];

  const focusAreaOptions = [
    "Adventure",
    "Culinary",
    "Spiritual/Sufi",
    "Wildlife",
    "Photography",
    "Academic/Research",
    "Wellness/Slow Travel",
  ];

  return (
    <div className="z-[100] -mt-16 mx-auto w-full max-w-md rounded-lg bg-white shadow-lg">
      <div className="rounded-t-lg bg-primary p-4 text-white border-2 border-white">
        <h2 className="text-center text-xl font-bold">
          Find Your ArtStay Kashmir Odyssey <br /> <span className="text-sm italic">Not Just a Journey, An Exploration of Kashmir’s Heart </span>
        </h2>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 p-6">
          <FormField
            control={form.control}
            name="tripCategory"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm text-gray-600">Trip Category</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="h-10">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="solo">Solo</SelectItem>
                    <SelectItem value="couple">Couple</SelectItem>
                    <SelectItem value="family">Family</SelectItem>
                    <SelectItem value="group">Group</SelectItem>
                    <SelectItem value="corporate">Corporate</SelectItem>
                    <SelectItem value="research">Research</SelectItem>
                    <SelectItem value="pilgrimage">Pilgrimage</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="adultTravelers"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm text-gray-600">Adult Travelers</FormLabel>
                  <Select
                    onValueChange={(value) => field.onChange(parseInt(value))}
                    defaultValue={field.value.toString()}
                  >
                    <FormControl>
                      <SelectTrigger className="h-10">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {Array.from({ length: 10 }, (_, i) => (
                        <SelectItem key={i + 1} value={(i + 1).toString()}>
                          {i + 1} {i + 1 === 1 ? "person" : "people"}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="childTravelers"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm text-gray-600">Child Travelers</FormLabel>
                  <Select
                    onValueChange={(value) => field.onChange(parseInt(value))}
                    defaultValue={field.value?.toString() ?? "0"}
                  >
                    <FormControl>
                      <SelectTrigger className="h-10">
                        <SelectValue placeholder="Select" />
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
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="tripStartDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm text-gray-600">Trip Start Date</FormLabel>
                  <FormControl>
                    <Input type="date" className="h-10" {...field} />
                  </FormControl>
                  
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="tripEndDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm text-gray-600">Trip End Date</FormLabel>
                  <FormControl>
                    <Input type="date" className="h-10" {...field} />
                  </FormControl>
                  
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-3 gap-4">
            <FormField
              control={form.control}
              name="craftCulturalExperiences"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm text-gray-600">Craft & Cultural</FormLabel>
                  <Select
                    onValueChange={(value) => {
                      const currentValues = field.value || [];
                      if (currentValues.includes(value)) {
                        field.onChange(currentValues.filter((v) => v !== value));
                      } else {
                        field.onChange([...currentValues, value]);
                      }
                    }}
                  >
                    <FormControl>
                      <SelectTrigger className="h-10">
                        <SelectValue
                          placeholder={
                            field.value && field.value.length > 0
                              ? `${field.value.length} option${field.value.length > 1 ? "s" : ""} selected`
                              : "Select"
                          }
                        />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {craftCulturalOptions.map((option) => (
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
                        .map((id) => craftCulturalOptions.find((option) => option.id === id)?.label)
                        .join(", ")}
                    </div>
                  )}
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="tourismRetreats"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm text-gray-600">Tourism & Retreats</FormLabel>
                  <Select
                    onValueChange={(value) => {
                      const currentValues: string[] = field.value || [];
                      if (currentValues.includes(value)) {
                        field.onChange(currentValues.filter((v) => v !== value));
                      } else {
                        field.onChange([...currentValues, value]);
                      }
                    }}
                  >
                    <FormControl>
                      <SelectTrigger className="h-10">
                        <SelectValue
                          placeholder={
                            field.value && field.value.length > 0
                              ? `${field.value.length} option${field.value.length > 1 ? "s" : ""} selected`
                              : "Select"
                          }
                        />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {tourismRetreatOptions.map((option) => (
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
                        .map((id) => tourismRetreatOptions.find((option) => option.id === id)?.label)
                        .join(", ")}
                    </div>
                  )}
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="supportServices"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm text-gray-600">Support Services</FormLabel>
                  <Select
                    onValueChange={(value) => {
                      const currentValues: string[] = field.value || [];
                      if (currentValues.includes(value)) {
                        field.onChange(currentValues.filter((v) => v !== value));
                      } else {
                        field.onChange([...currentValues, value]);
                      }
                    }}
                  >
                    <FormControl>
                      <SelectTrigger className="h-10">
                        <SelectValue
                          placeholder={
                            field.value && field.value.length > 0
                              ? `${field.value.length} option${field.value.length > 1 ? "s" : ""} selected`
                              : "Select"
                          }
                        />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {supportServiceOptions.map((option) => (
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
                        .map((id) => supportServiceOptions.find((option) => option.id === id)?.label)
                        .join(", ")}
                    </div>
                  )}
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="focusAreas"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm text-gray-600">Add Focus Areas</FormLabel>
                <FormControl>
                  <div className="grid grid-cols-2 gap-2">
                    {focusAreaOptions.map((focusArea) => (
                      <div key={focusArea} className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id={focusArea}
                          value={focusArea}
                          checked={field.value?.includes(focusArea)}
                          onChange={(e) => {
                            const value = e.target.value;
                            field.onChange(
                              e.target.checked
                                ? [...(field.value || []), value]
                                : field.value?.filter((v) => v !== value)
                            );
                          }}
                          className="h-4 w-4"
                        />
                        <label htmlFor={focusArea} className="text-sm text-gray-600">
                          {focusArea}
                        </label>
                      </div>
                    ))}
                  </div>
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="stayType"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm text-gray-600">Stay Type</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="h-10">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="heritage">Heritage</SelectItem>
                    <SelectItem value="eco">Eco</SelectItem>
                    <SelectItem value="houseboat">Houseboat</SelectItem>
                    <SelectItem value="boutique">Boutique</SelectItem>
                    <SelectItem value="homestay">Homestay</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full mt-2 h-10">
            CHECK ITINERARY
          </Button>
        </form>
      </Form>
    </div>
  );
};