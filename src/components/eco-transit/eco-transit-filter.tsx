//fahad

"use client";

import { useForm, Controller } from "react-hook-form";
import { useState, useEffect } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "~/components/ui/tabs";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import { Search } from "lucide-react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { Checkbox } from "~/components/ui/checkbox";

export type EcoTransitFilterValues = {
  pickupLocation: string;
  dropOffLocation: string;
  travelDate: string;
  vehicleType: string[];
  numberOfPassengers: number;
};

export const EcoTransitFilter = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState("locations");

  const { control, handleSubmit, watch, setValue } = useForm<EcoTransitFilterValues>({
    defaultValues: {
      pickupLocation: "",
      dropOffLocation: "",
      travelDate: "",
      vehicleType: [],
      numberOfPassengers: 1,
    },
  });

  useEffect(() => {
    if (searchParams) {
      const pickupLocation = searchParams.get("pickupLocation") ?? "";
      const dropOffLocation = searchParams.get("dropOffLocation") ?? "";
      const travelDate = searchParams.get("travelDate") ?? "";
      const vehicleType = searchParams.get("vehicleType")?.split(",") ?? [];
      const numberOfPassengers = Number(searchParams.get("numberOfPassengers")) || 1;

      setValue("pickupLocation", pickupLocation);
      setValue("dropOffLocation", dropOffLocation);
      setValue("travelDate", travelDate);
      setValue("vehicleType", vehicleType);
      setValue("numberOfPassengers", numberOfPassengers);
    }
  }, [searchParams, setValue]);

  const handleCheckboxChange = (value: string) => {
    const currentValues = watch("vehicleType");
    const valueExists = currentValues.includes(value);
    if (valueExists) {
      setValue("vehicleType", currentValues.filter(v => v !== value));
    } else {
      setValue("vehicleType", [...currentValues, value]);
    }
  };

  const onSubmit = (data: EcoTransitFilterValues) => {
    const params = new URLSearchParams();
    if (data.pickupLocation) params.set("pickupLocation", data.pickupLocation);
    if (data.dropOffLocation) params.set("dropOffLocation", data.dropOffLocation);
    if (data.travelDate) params.set("travelDate", data.travelDate);
    if (data.vehicleType?.length) params.set("vehicleType", data.vehicleType.join(","));
    if (data.numberOfPassengers) params.set("numberOfPassengers", String(data.numberOfPassengers));
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="-mt-24">
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="flex h-auto flex-wrap gap-2 bg-transparent p-0">
          <div className="rounded-b-none rounded-t-lg bg-secondary px-4 py-2 font-text text-lg text-white z-[101] p-3">
            <b>ECO TRANSIT OPTIONS</b>
          </div>
          {[
            { id: "locations", label: "Locations" },
            { id: "vehicleType", label: "Vehicle Type" },
          ].map((tab) => (
            <TabsTrigger
              key={tab.id}
              value={tab.id}
              className="rounded-b-none rounded-t-lg bg-gray-200 px-4 py-2 font-text text-lg text-gray-950 backdrop-blur hover:bg-primary hover:text-white data-[state=active]:text-primary"
            >
              <span className="mr-2">+</span>
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
        <div className="rounded-lg bg-white/90 p-6 shadow-lg backdrop-blur">
          <TabsContent value="locations">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 block">Pickup Location</label>
                <Controller
                  name="pickupLocation"
                  control={control}
                  render={({ field }) => (
                    <Input placeholder="Enter pickup location" {...field} />
                  )}
                />
              </div>
              <div>
                <label className="mb-2 block">Drop-off Location</label>
                <Controller
                  name="dropOffLocation"
                  control={control}
                  render={({ field }) => (
                    <Input placeholder="Enter drop-off location" {...field} />
                  )}
                />
              </div>
              <div>
                <label className="mb-2 block">Travel Date</label>
                <Controller
                  name="travelDate"
                  control={control}
                  render={({ field }) => (
                    <Input type="date" placeholder="yyyy-mm-dd" {...field} />
                  )}
                />
              </div>
              <div>
                <label className="mb-2 block">Number of Passengers</label>
                <Controller
                  name="numberOfPassengers"
                  control={control}
                  render={({ field }) => (
                    <Input type="number" min={1} max={50} {...field} />
                  )}
                />
              </div>
            </div>
          </TabsContent>
          <TabsContent value="vehicleType" className="space-y-4">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {["Bus", "Van", "Car", "Bike"].map((type) => (
                <div key={type} className="flex items-center gap-2">
                  <Controller
                    name="vehicleType"
                    control={control}
                    render={({ field }) => (
                      <Checkbox
                        id={type}
                        checked={field.value.includes(type)}
                        onCheckedChange={() => handleCheckboxChange(type)}
                      />
                    )}
                  />
                  <label htmlFor={type}>{type}</label>
                </div>
              ))}
            </div>
          </TabsContent>
          <div className="mt-8">
            <Button type="submit">
              <Search className="h-4 w-4 mr-2" />
              Find Transit
            </Button>
          </div>
        </div>
      </Tabs>
    </form>
  );
};