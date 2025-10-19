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
import { useRouter } from "next/navigation";

const destinations = [
  {
    id: "Khanqah & Zadibal",
    label: "Khanqah & Zadibal",
    description: "Woodwork, papier-mâché, sozni embroidery traditions",
  },
  {
    id: "Safakadal & Eidgah",
    label: "Safakadal & Eidgah",
    description: "Chain-stitch, aari embroidery in motion",
  },
  {
    id: "Raniwari, Kathi Darwaza",
    label: "Raniwari, Kathi Darwaza",
    description: "Pottery, Walnut Woodcarvings, Pashmina dyeing.",
  },
  {
    id: "Nallah Mar & Amda Kadal",
    label: "Nallah Mar & Amda Kadal",
    description: "Zari, namda, copperware artisan brilliance",
  },
  {
    id: "Aali Kadal",
    label: "Aali Kadal",
    description: "Pashmina dyeing, zari, copperware excellence",
  },
  {
    id: "Kanihama",
    label: "Kanihama",
    description: "Kani shawls woven with coded needles",
  },
  {
    id: "Zainakote",
    label: "Zainakote",
    description: "Zari embroidery and silver-thread craftsmanship",
  },
  {
    id: "Kakapora",
    label: "Kakapora",
    description: "Gabba felting, crewel embroidery, wool artistry",
  },
];

const formSchema = z.object({
  title: z
    .string({
      required_error: "Please select a destination",
    })
    .min(1, "Please select a destination"),
  activityPreferences: z
    .array(z.string())
    .min(1, "Please select at least one activity preference"),
  duration: z
    .string({
      required_error: "Please select a time slot",
    })
    .min(1, "Please select a time slot"),
});

export const SafariForm = () => {
  const { toast } = useToast();
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      activityPreferences: [],
      duration: ""
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    console.log("Form submitted:", data);
    console.log("Activity preferences type:", typeof data.activityPreferences);
    console.log("Activity preferences value:", data.activityPreferences);
    console.log("Is array:", Array.isArray(data.activityPreferences));
    
    // Ensure activityPreferences is always an array and title is a string
    const processedData = {
      ...data,
      title: data.title,
      activityPreferences: Array.isArray(data.activityPreferences) 
        ? data.activityPreferences 
        : data.activityPreferences ? [data.activityPreferences] : []
    };
    
    console.log("Processed data:", processedData);
    
    try {
      const res = await axios.post<{ status: string; message: string; data?: any }>(
        `http://localhost:5015/api/v1/safari/find-safari`,
        processedData
      );


      if (res.data.status === "success") {
        toast({ 
          title: "Success", 
          description: res.data.message || "Safari tours found successfully!" 
        });
        
        // Redirect to the first found safari profile
        if (res.data.data && res.data.data.length > 0) {
          const firstSafari = res.data.data[0];
          router.push(`/safari/profile?safariId=${firstSafari.safariId}`);
        }
        
        console.log("Found safaris:", res.data.data);
      } else if (res.data.status === "error") {
        toast({ 
          title: "No Tours Found", 
          description: res.data.message || "No safari tours found for the selected destinations", 
          variant: "destructive" 
        });
      }
    } catch (error: any) {
      console.error("Request failed:", error);
      const errorMessage = error.response?.data?.message || "Failed to search for safari tours. Please try again.";
      toast({ 
        title: "Error", 
        description: errorMessage, 
        variant: "destructive" 
      });
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
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-600">Select Craft Village to Visit</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a craft village" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {destinations.map((destination) => (
                      <SelectItem key={destination.id} value={destination.id}>
                        <div>
                          <div className="font-medium">{destination.label}</div>
                          <div className="text-sm text-gray-500">{destination.description}</div>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <div>
            <FormLabel className="mb-3 block text-gray-600">
              Activity Preferences (Choose all that apply)
            </FormLabel>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                { id: "Live Artisan Demonstrations", label: "Live Artisan Demonstrations" },
                { id: "Hands-on Craft Participation", label: "Hands-on Craft Participation" },
                { id: "Artisan Interviews & Story Sessions", label: "Artisan Interviews & Story Sessions" },
                { id: "Ethical Shopping", label: "Ethical Shopping" },
              ].map((preference) => (
                <div key={preference.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={preference.id}
                    checked={form.watch("activityPreferences").includes(preference.id)}
                    onCheckedChange={(checked) => {
                      const current = form.getValues("activityPreferences");
                      console.log("Checkbox changed:", preference.id, "checked:", checked);
                      console.log("Current value:", current, "type:", typeof current);
                      
                      if (checked) {
                        const newValue = [...current, preference.id];
                        console.log("Setting new value:", newValue);
                        form.setValue("activityPreferences", newValue);
                      } else {
                        const newValue = current.filter((id) => id !== preference.id);
                        console.log("Removing, new value:", newValue);
                        form.setValue("activityPreferences", newValue);
                      }
                      // Trigger validation
                      form.trigger("activityPreferences");
                    }}
                  />
                  <label
                    htmlFor={preference.id}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {preference.label}
                  </label>
                </div>
              ))}
            </div>
            {form.formState.errors.activityPreferences && (
              <p className="text-sm text-red-500 mt-1">
                {form.formState.errors.activityPreferences.message}
              </p>
            )}
          </div>

          <FormField
            control={form.control}
            name="duration"
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
                    <SelectItem value="Morning,10AM- 4PM">Morning (10AM-4PM)</SelectItem>
                    <SelectItem value="Afternoon,2PM- 6PM">Afternoon (2PM-6PM)</SelectItem>
                    <SelectItem value="Full Day,9AM- 6PM">Full Day (9AM-6PM)</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />



          <Button type="submit" className="w-full">FIND NOW</Button>
        </form>
      </Form>
    </div>
  );
};