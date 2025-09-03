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
    experienceType: z.string().min(1, "Please select a dining experience"),
    date: z.string().min(1, "Reservation date is required"),
    time: z.string().min(1, "Reservation time is required"),
    guests: z.number().min(1, "At least one guest is required"),
    children: z.number().min(0).optional(),
    tablePreference: z.string().min(1, "Please select a table preference"),
    dietaryPreferences: z.array(z.string()).min(1, "Please select at least one dietary preference"),
    occasion: z.string().min(1, "Please select an occasion"),
    addOnServices: z.array(z.string()).min(1, "Please select at least one add-on service"),
  })
  .refine((data) => new Date(`${data.date}T${data.time}`) > new Date(), {
    message: "Reservation date and time must be in the future",
    path: ["date"],
  });

export const DiningForm = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      experienceType: "",
      date: "",
      time: "",
      guests: 2,
      children: 0,
      tablePreference: "",
      dietaryPreferences: [],
      occasion: "",
      addOnServices: [],
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      console.log("Form submitted:", data);

      const res = await axios.post<{ status: string; message: string; data?: any }>(
        `${process.env.NEXT_PUBLIC_API_URL}/dining/find-traditional-dining-voyage`,
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

  const dietaryPreferenceOptions = [
    { id: "vegan", label: "Vegan" },
    { id: "nut-allergy", label: "Nut Allergy" },
    { id: "halal", label: "Halal" },
    { id: "jain", label: "Jain" },
    { id: "gluten-free", label: "Gluten-Free" },
  ] as const;

  const addOnServiceOptions = [
    { id: "live-music", label: "Live Cultural Music" },
    { id: "artisan-decor", label: "Artisan Table Decor" },
    { id: "custom-dessert", label: "Custom Cake / Dessert" },
    { id: "dedicated-host", label: "Dedicated Host Service" },
    { id: "photography", label: "Photography/Videography" },
  ] as const;

  const formatDate = (isoDate: string) => {
    if (!isoDate) return "";
    const date = new Date(isoDate);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <div className="z-[100] -mt-16 mx-auto w-full max-w-xl rounded-lg bg-white shadow-lg">
      <div className="rounded-t-lg bg-primary p-4 text-white border-2 border-white">
        <h2 className="text-center text-xl font-bold">
          Discover an ArtStay Traditional Dining Voyage <br /> <span className="text-sm italic">Not Just a Trip, A Voyage into Kashmir&apos;s Soul &amp; Heritage</span>
        </h2>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 p-6">
          <FormField
            control={form.control}
            name="experienceType"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-600">Dining Experience*</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="– Select Experience –" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="a-la-carte">À La Carte Dining</SelectItem>
                    <SelectItem value="chefs-tasting">Chef&apos;s Tasting Menu</SelectItem>
                    <SelectItem value="wazwan">Kashmiri Wazwan Feast</SelectItem>
                    <SelectItem value="private-table">Private Table (VIP/Heritage Zone)</SelectItem>
                    <SelectItem value="outdoor-garden">Outdoor Garden Dining</SelectItem>
                    <SelectItem value="corporate-group">Corporate / Group Dining</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-600">Reservation Date</FormLabel>
                  <FormControl>
                    <Input
                      type="date"
                      value={field.value}
                      onChange={(e) => field.onChange(e.target.value)}
                      className="w-full"
                    />
                  </FormControl>
                  <div className="text-sm text-gray-600 mt-1">
                    {field.value ? formatDate(field.value) : "DD/MM/YYYY"}
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="time"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-600">Reservation Time</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="– Select Time –" />
                      </SelectTrigger>
                      <SelectContent>
                        {Array.from({ length: 24 * 4 }, (_, i) => {
                          const hours = Math.floor(i / 4);
                          const minutes = (i % 4) * 15;
                          const time = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;
                          return (
                            <SelectItem key={time} value={time}>
                              {time}
                            </SelectItem>
                          );
                        })}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="guests"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-600">Total Guests</FormLabel>
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
                      {Array.from({ length: 25 }, (_, i) => (
                        <SelectItem key={i + 1} value={(i + 1).toString()}>
                          {i + 1} {i + 1 === 1 ? "person" : "people"}
                        </SelectItem>
                      ))}
                      <SelectItem value="25+">25+ people</SelectItem>
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
                  <FormLabel className="text-gray-600">Number of Children</FormLabel>
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

          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="tablePreference"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-600">Table Preference</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="– Select Table Preference –" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="indoor">Indoor</SelectItem>
                      <SelectItem value="outdoor">Outdoor</SelectItem>
                      <SelectItem value="heritage-room">Heritage Room</SelectItem>
                      <SelectItem value="no-preference">No Preference</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="dietaryPreferences"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-600">Dietary Preferences / Restrictions</FormLabel>
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
                              ? `${field.value.length} preference${field.value.length > 1 ? "s" : ""} selected`
                              : "– Select Dietary Preferences –"
                          }
                        />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {dietaryPreferenceOptions.map((option) => (
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
                        .map((id) => dietaryPreferenceOptions.find((option) => option.id === id)?.label)
                        .join(", ")}
                    </div>
                  )}
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="occasion"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-600">Occasion</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="– Select Occasion –" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="birthday">Birthday</SelectItem>
                      <SelectItem value="anniversary">Anniversary</SelectItem>
                      <SelectItem value="business-meeting">Business Meeting</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="addOnServices"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-600">Add-On Services</FormLabel>
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
                              ? `${field.value.length} service${field.value.length > 1 ? "s" : ""} selected`
                              : "– Select Add-On Services –"
                            }
                        />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {addOnServiceOptions.map((option) => (
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
                        .map((id) => addOnServiceOptions.find((option) => option.id === id)?.label)
                        .join(", ")}
                    </div>
                  )}
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button type="submit" className="w-full">
            CHECK AVAILABILITY & CONFIRM BOOKING
          </Button>
        </form>
      </Form>
    </div>
  );
};