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
    accommodationType: z.string().min(1, "Please select accommodation type"),
    checkIn: z.string().min(1, "Check-in date is required"),
    checkOut: z.string().min(1, "Check-out date is required"),
    adults: z.number().min(1, "At least one adult is required"),
    children: z.number().min(0).optional(),
    experienceFilters: z.array(z.string()).min(1, "Please select at least one experience filter"),
    budgetTier: z.number().min(100, "Please select a budget tier"),
  })
  .refine((data) => new Date(data.checkOut) > new Date(data.checkIn), {
    message: "Check-out date must be after check-in date",
    path: ["checkOut"],
  });

type FormData = z.infer<typeof formSchema>;

export const RetreatForm = () => {
  const { toast } = useToast();
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      accommodationType: "",
      checkIn: "",
      checkOut: "",
      adults: 1,
      children: 0,
      experienceFilters: [],
      budgetTier: 100,
    },
  });

  const onSubmit = async (data: FormData) => {
    try {
      console.log("Form submitted:", data);

      const res = await axios.post<{ status: string; message: string; data?: any }>(
        `${process.env.NEXT_PUBLIC_API_URL}/artisan/find-sustainable-living-tour`,
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

  const budgetCheckpoints = [
    { value: 100, label: "Eco Basic", range: "$100 – $250" },
    { value: 251, label: "Sustainable Comfort", range: "$251 – $500" },
    { value: 501, label: "Crafted Luxury", range: "$501 – $1,000" },
    { value: 1001, label: "Bespoke Private Retreat", range: "$1,001+" },
  ];

  const experienceFilterOptions = [
    { id: "organic-meals", label: "Organic Farm-to-Table Meals" },
    { id: "nature-walks", label: "Guided Nature Walks / Birdwatching" },
    { id: "sufi-cultural", label: "Sufi Music & Cultural Evenings" },
    { id: "handicraft", label: "Handicraft Demonstration" },
    { id: "ayurvedic-wellness", label: "Ayurvedic Wellness & Spa" },
    { id: "eco-orientation", label: "Eco-Lifestyle Orientation Session" },
  ];

  return (
    <div className="z-[100] -mt-16 mx-auto w-full max-w-xl rounded-lg bg-white shadow-lg">
      <div className="rounded-t-lg bg-primary p-4 text-white border-2 border-white">
        <h2 className="text-center text-xl font-bold">
          Find Sustainable Living with Kashmiri Spirit <br /> <span className="text-sm italic"> Sustainable luxury amidst Kashmir&apos;s pristine nature</span>
        </h2>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 p-6">
          <FormField
            control={form.control}
            name="accommodationType"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-600">Accommodation Type*</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="– Select Accommodation –" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="heritage-room">Heritage Room</SelectItem>
                    <SelectItem value="boutique-cottage">Boutique Cottage</SelectItem>
                    <SelectItem value="traditional-houseboat">Traditional Houseboat</SelectItem>
                    <SelectItem value="eco-villa">Eco Villa</SelectItem>
                    <SelectItem value="custom-setup">Request Custom Setup</SelectItem>
                  </SelectContent>
                </Select>
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
                    <Input
                      type="date"
                      value={field.value}
                      onChange={(e) => field.onChange(e.target.value)}
                      className="w-full"
                    />
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
                    <Input
                      type="date"
                      value={field.value}
                      onChange={(e) => field.onChange(e.target.value)}
                      className="w-full"
                    />
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
                  <FormLabel className="text-gray-600">Adults (12+ years)</FormLabel>
                  <Select
                    onValueChange={(value) => field.onChange(parseInt(value))}
                    defaultValue={field.value.toString()}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select number of adults" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {Array.from({ length: 10 }, (_, i) => (
                        <SelectItem key={i + 1} value={String(i + 1)}>
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
                  <FormLabel className="text-gray-600">Children (2–11 years)</FormLabel>
                  <Select
                    onValueChange={(value) => field.onChange(parseInt(value))}
                    defaultValue={field.value?.toString() ?? "0"}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select number of children" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {Array.from({ length: 11 }, (_, i) => (
                        <SelectItem key={i} value={String(i)}>
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
            name="experienceFilters"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-600">Experience Filters</FormLabel>
                <Select
                    onValueChange={(value) => {
                      const currentValues = field.value ?? [];
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
                            ? `${field.value.length} filter${field.value.length > 1 ? "s" : ""} selected`
                            : "– Select Experience Filters –"
                        }
                      />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {experienceFilterOptions.map((option) => (
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
                      .map((id) => experienceFilterOptions.find((option) => option.id === id)?.label)
                      .join(", ")}
                  </div>
                )}
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="budgetTier"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-600">Budget Tier (Per Guest / Per Night)</FormLabel>
                <FormControl>
                  <div className="space-y-4">
                    <div className="relative">
                      <input
                        type="range"
                        min={0}
                        max={budgetCheckpoints.length - 1}
                        step={1}
                        value={budgetCheckpoints.findIndex((point) => point.value === field.value)}
                        onChange={(e) => {
                          const index = parseInt(e.target.value);
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
                          background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${(budgetCheckpoints.findIndex((point) => point.value === field.value) / (budgetCheckpoints.length - 1)) * 100}%, #e5e7eb ${(budgetCheckpoints.findIndex((point) => point.value === field.value) / (budgetCheckpoints.length - 1)) * 100}%, #e5e7eb 100%)`,
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

                    <div className="grid grid-cols-4 gap-1 text-xs">
                      {budgetCheckpoints.map((point) => (
                        <div
                          key={point.value}
                          className={`text-center p-2 rounded border cursor-pointer transition-colors ${
                            field.value === point.value
                              ? "bg-primary text-white border-primary"
                              : "bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100"
                          }`}
                          onClick={() => field.onChange(point.value)}
                        >
                          <div className="font-semibold">{point.label}</div>
                          <div className="text-xs opacity-75">{point.range}</div>
                        </div>
                      ))}
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