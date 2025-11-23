"use client";

import { useForm, Controller } from "react-hook-form";
import { useState, useEffect } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "~/components/ui/tabs";
import { Input } from "~/components/ui/input";
import { Search, X } from "lucide-react";
import { Button } from "~/components/ui/button";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";

// Define the filter form values type
export type FairFilterValues = {
  eventLocation: string;
  startDate: string;
  endDate: string;
};

export const FairFilter = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState("general");

  // Set up react-hook-form
  const { control, handleSubmit, setValue, reset } = useForm<FairFilterValues>({
    defaultValues: {
      eventLocation: "",
      startDate: "",
      endDate: "",
    },
  });

  // Initialize form with URL params if any
  useEffect(() => {
    if (searchParams) {
      const eventLocation = searchParams.get("eventLocation") ?? "";
      const startDate = searchParams.get("startDate") ?? "";
      const endDate = searchParams.get("endDate") ?? "";

      setValue("eventLocation", eventLocation);
      setValue("startDate", startDate);
      setValue("endDate", endDate);
    }
  }, [searchParams, setValue]);

  const onSubmit = (data: FairFilterValues) => {
    // Create new URLSearchParams
    const params = new URLSearchParams();
    
    // Only add non-empty values to the URL
    if (data.eventLocation) params.set("eventLocation", data.eventLocation);
    if (data.startDate) params.set("startDate", data.startDate);
    if (data.endDate) params.set("endDate", data.endDate);

    // Update URL with filter params
    router.push(`${pathname}?${params.toString()}`);
  };

  const handleReset = () => {
    reset({
      eventLocation: "",
      startDate: "",
      endDate: "",
    });
    router.push(pathname);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="-mt-24 relative z-[100]">
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="flex h-auto flex-wrap gap-2 bg-transparent p-0 relative z-[100]">
          <div className="rounded-b-none rounded-t-lg bg-secondary px-4 py-2 font-text text-lg text-white p-3 relative z-[100]">
            <b>FAIR & EXHIBITIONS</b>
          </div>
          {[
            { id: "general", label: "Filter Events" },
          ].map((tab) => (
            <TabsTrigger
              key={tab.id}
              value={tab.id}
              className="rounded-b-none rounded-t-lg bg-gray-200 px-4 py-2 font-text text-lg text-gray-950 backdrop-blur hover:bg-primary hover:text-white data-[state=active]:text-primary relative z-[100]"
            >
              <span className="mr-2">+</span>
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
        <div className="rounded-lg bg-white/90 p-6 shadow-lg backdrop-blur relative z-[100]">
          <TabsContent value="general">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <div>
                <label className="mb-2 block text-sm font-medium">Event Location</label>
                <Controller
                  name="eventLocation"
                  control={control}
                  render={({ field }) => (
                    <Select 
                      value={field.value || undefined} 
                      onValueChange={(value) => field.onChange(value || "")}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select location" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="LOCAL">Local</SelectItem>
                        <SelectItem value="NATIONAL">National</SelectItem>
                        <SelectItem value="INTERNATIONAL">International</SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">Start Date</label>
                <Controller
                  name="startDate"
                  control={control}
                  render={({ field }) => (
                    <Input
                      type="date"
                      placeholder="Start date"
                      value={field.value}
                      onChange={field.onChange}
                    />
                  )}
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">End Date</label>
                <Controller
                  name="endDate"
                  control={control}
                  render={({ field }) => (
                    <Input
                      type="date"
                      placeholder="End date"
                      value={field.value}
                      onChange={field.onChange}
                    />
                  )}
                />
              </div>
            </div>
          </TabsContent>

          <div className="mt-8 flex gap-4 items-center">
            <Button type="submit">
              <Search className="h-4 w-4 mr-2" />
              Find Events
            </Button>
            <Button type="button" variant="outline" onClick={handleReset}>
              <X className="h-4 w-4 mr-2" />
              Reset
            </Button>
          </div>
        </div>
      </Tabs>
    </form>
  );
};