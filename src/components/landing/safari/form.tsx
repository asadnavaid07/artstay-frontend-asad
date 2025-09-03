"use client";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "~/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { Button } from "~/components/ui/button";
import { Checkbox } from "~/components/ui/checkbox";
import { Input } from "~/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import axios from "axios";
import { useToast } from "~/hooks/use-toast";

const destinations = [
  {
    id: "khanqah",
    label: "Khanqah & Zadibal",
    description: "Woodwork, papier-mâché, sozni embroidery traditions",
  },
  {
    id: "safakadal",
    label: "Safakadal & Eidgah",
    description: "Chain-stitch, aari embroidery in motion",
  },
  {
    id: "raniwari",
    label: "Raniwari, Kathi Darwaza",
    description: "Pottery, Walnut Woodcarvings, Pashmina dyeing.",
  },
  {
    id: "nallah",
    label: "Nallah Mar & Amda Kadal",
    description: "Zari, namda, copperware artisan brilliance",
  },
  {
    id: "aali",
    label: "Aali Kadal",
    description: "Pashmina dyeing, zari, copperware excellence",
  },
  {
    id: "kanihama",
    label: "Kanihama",
    description: "Kani shawls woven with coded needles",
  },
  {
    id: "zainakote",
    label: "Zainakote",
    description: "Zari embroidery and silver-thread craftsmanship",
  },
  {
    id: "kakapora",
    label: "Kakapora",
    description: "Gabba felting, crewel embroidery, wool artistry",
  },
];

const formSchema = z
  .object({
    destinations: z
      .array(z.string())
      .min(1, "Please select at least one destination"),
    activityPreferences: z
      .string({
        required_error: "Please select an activity preference",
      })
      .min(1, "Please select at least one activity preference"),
    timeSlot: z
      .string({
        required_error: "Please select a time slot",
      })
      .min(1, "Please select a time slot"),
    checkIn: z.string().min(1, "Check-in date is required"),
    checkOut: z.string().min(1, "Check-out date is required"),
    adults: z.number().min(1, "At least one adult is required"),
    children: z.number().min(0).optional(),
  })
  .refine((data) => new Date(data.checkOut) > new Date(data.checkIn), {
    message: "Check-out date must be after check-in date",
    path: ["checkOut"],
  });

export const SafariForm = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      destinations: [],
      activityPreferences: "",
      timeSlot: "",
      checkIn: "",
      checkOut: "",
      adults: 1,
      children: 0,
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    console.log("Form submitted:", data);
    try {
      console.log("Form submitted:", data);

      const res = await axios.post<{ status: string; message: string; data?: any }>(
        `${process.env.NEXT_PUBLIC_API_URL}/safari/find-safari`,
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

  return (
    <div className="z-[100] mx-auto -mt-16 w-full max-w-xl rounded-lg bg-white shadow-lg">
      <div className="rounded-t-lg border-2 border-white bg-primary p-4 text-white">
        <h2 className="text-center text-xl font-bold">
          Craft Safari - Journey with Kashmiri Artisan <br />
          <i className="text-sm">Not Just a Tour, A Cultural Revival</i>
        </h2>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 p-6">
          <div>
            <FormLabel className="mb-3 block text-gray-600">
              Select Craft Villages to Visit (Choose all that apply)
            </FormLabel>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {destinations.map((destination) => (
                <div key={destination.id} className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id={destination.id}
                      onCheckedChange={(checked) => {
                        const current = form.getValues("destinations");
                        if (checked) {
                          form.setValue("destinations", [
                            ...current,
                            destination.id,
                          ]);
                        } else {
                          form.setValue(
                            "destinations",
                            current.filter((id) => id !== destination.id),
                          );
                        }
                      }}
                    />
                    <label
                      htmlFor={destination.id}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {destination.label}
                    </label>
                  </div>
                  <p className="ml-6 text-sm text-gray-500">
                    {destination.description}
                  </p>
                </div>
              ))}
            </div>
            <FormMessage />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="activityPreferences"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-600">Activity Preferences</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="– Select Activity Preferences –" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent style={{
                      zIndex: 100
                    }}>
                      <SelectItem value="liveArtisan">Live Artisan Demonstrations</SelectItem>
                      <SelectItem value="craftParticipation">Hands-on Craft Participation</SelectItem>
                      <SelectItem value="artisanInterviews">Artisan Interviews & Story Sessions</SelectItem>
                      <SelectItem value="ethicalShopping">Ethical Shopping</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="timeSlot"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-600">Preferred Time Slot</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="– Select Time Slot –" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="morning">Morning</SelectItem>
                      <SelectItem value="afternoon">Afternoon</SelectItem>
                      <SelectItem value="fullDay">Full Day</SelectItem>
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
              name="checkIn"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Check In</FormLabel>
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
                  <FormLabel>Check Out</FormLabel>
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
                  <FormLabel>Adult</FormLabel>
                  <FormControl>
                    <select
                      className="w-full rounded-md border p-2"
                      {...field}
                      onChange={(e) => field.onChange(parseInt(e.target.value))}
                    >
                      {[1, 2, 3, 4, 5].map((num) => (
                        <option key={num} value={num}>
                          {num}
                        </option>
                      ))}
                    </select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="children"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Children</FormLabel>
                  <FormControl>
                    <select
                      className="w-full rounded-md border p-2"
                      {...field}
                      onChange={(e) => field.onChange(parseInt(e.target.value))}
                    >
                      {[0, 1, 2, 3, 4, 5].map((num) => (
                        <option key={num} value={num}>
                          {num}
                        </option>
                      ))}
                    </select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button type="submit" className="w-full">FIND NOW</Button>
        </form>
      </Form>
    </div>
  );
};