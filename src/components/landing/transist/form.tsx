"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";

import { Button } from "~/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { Checkbox } from "~/components/ui/checkbox";
import { useToast } from "~/hooks/use-toast";

type EcoTransitFilterOptions = {
  locations: string[];
  vehicleTypes: string[];
  priceRanges: string[];
};

const DEFAULT_VEHICLE_TYPES = [
  "CNG Car",
  "E-Rickshaw",
  "Shikara",
  "Heritage Walking Escort",
] as const;

const formSchema = z.object({
  pickupLocation: z.string().optional(),
  dropOffLocation: z.string().optional(),
  travelDate: z.string().optional(),
  vehicleType: z.array(z.string()).default([]),
  numberOfPassengers: z.number().min(1, "At least one passenger is required").optional(),
});

export const TransitForm = () => {
  const router = useRouter();
  const { toast } = useToast();

  const [options, setOptions] = useState<EcoTransitFilterOptions>({
    locations: [],
    vehicleTypes: [],
    priceRanges: [],
  });
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      pickupLocation: "",
      dropOffLocation: "",
      travelDate: "",
      vehicleType: [],
      numberOfPassengers: 1,
    },
  });

  useEffect(() => {
    const fetchFilterOptions = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/eco-transit/filters`,
        );

        if (response.data?.status === "success") {
          const payload = response.data.data ?? {};
          setOptions({
            locations: Array.isArray(payload.locations) ? payload.locations : [],
            vehicleTypes: Array.isArray(payload.vehicleTypes)
              ? payload.vehicleTypes
              : [],
            priceRanges: Array.isArray(payload.priceRanges)
              ? payload.priceRanges
              : [],
          });
        }
      } catch (error) {
        console.error("Failed to load eco transit filters", error);
        toast({
          title: "Unable to load filters",
          description: "Showing default options. Please try again later.",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    };

    void fetchFilterOptions();
  }, [toast]);

  const vehicleTypeOptions = useMemo(() => {
    if (options.vehicleTypes.length > 0) {
      return options.vehicleTypes;
    }
    return [...DEFAULT_VEHICLE_TYPES];
  }, [options.vehicleTypes]);

  const toggleArrayValue = (
    values: string[] | undefined,
    currentValue: string,
  ) => {
    if (!values || values.length === 0) {
      return [currentValue];
    }

    if (values.includes(currentValue)) {
      return values.filter((value) => value !== currentValue);
    }

    return [...values, currentValue];
  };

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    try {
      const params = new URLSearchParams();

      if (data.pickupLocation) {
        params.set("pickupLocation", data.pickupLocation);
      }

      if (data.dropOffLocation) {
        params.set("dropOffLocation", data.dropOffLocation);
      }

      if (data.travelDate) {
        params.set("travelDate", data.travelDate);
      }

      if (data.vehicleType?.length) {
        params.set("vehicleType", data.vehicleType.join(","));
      }

      if (data.numberOfPassengers) {
        params.set("numberOfPassengers", data.numberOfPassengers.toString());
      }

      const queryString = params.toString();
      const destination = queryString.length > 0 ? `/eco-transit?${queryString}` : "/eco-transit";
      router.push(destination);
    } catch (error) {
      console.error("Failed to apply filters", error);
      toast({
        title: "Filter error",
        description: "We couldn't apply your filters. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="z-[100] mx-auto w-full max-w-xl rounded-lg bg-white shadow-lg">
      <div className="rounded-t-lg border-2 border-white bg-primary p-4 text-white">
        <h2 className="text-center text-xl font-bold">
          Embark on an ArtStay Eco Transit Adventure
          <br />
          <span className="text-sm italic">
            Not Just a Trip, A Journey into Kashmir&apos;s Green Soul & Heritage
          </span>
        </h2>
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6 p-6"
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <FormField
              control={form.control}
              name="pickupLocation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm text-gray-600">
                    Pickup Location
                  </FormLabel>
                  <Select
                    value={field.value}
                    onValueChange={field.onChange}
                    disabled={isLoading}
                  >
                    <FormControl>
                      <SelectTrigger className="h-10">
                        <SelectValue placeholder="– Select Pickup –" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {options.locations.length === 0 && (
                        <SelectItem value="comingSoon" disabled>
                          Locations coming soon
                        </SelectItem>
                      )}
                      {options.locations
                        .filter((location) => Boolean(location?.trim?.()))
                        .map((location) => (
                          <SelectItem key={location} value={location}>
                            {location}
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
              name="dropOffLocation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm text-gray-600">
                    Drop-off Location
                  </FormLabel>
                  <Select
                    value={field.value}
                    onValueChange={field.onChange}
                    disabled={isLoading}
                  >
                    <FormControl>
                      <SelectTrigger className="h-10">
                        <SelectValue placeholder="– Select Destination –" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {options.locations.length === 0 && (
                        <SelectItem value="comingSoon" disabled>
                          Locations coming soon
                        </SelectItem>
                      )}
                      {options.locations
                        .filter((location) => Boolean(location?.trim?.()))
                        .map((location) => (
                          <SelectItem key={location} value={location}>
                            {location}
                          </SelectItem>
                        ))}
                    </SelectContent>
                  </Select>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <FormField
              control={form.control}
              name="travelDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm text-gray-600">
                    Travel Date
                  </FormLabel>
                  <FormControl>
                    <Input type="date" className="h-10" {...field} />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="numberOfPassengers"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm text-gray-600">
                    Number of Passengers
                  </FormLabel>
                  <Select
                    value={field.value?.toString()}
                    onValueChange={(value) => {
                      if (value === "10+") {
                        field.onChange(10);
                      } else {
                        field.onChange(Number.parseInt(value) || 1);
                      }
                    }}
                    disabled={isLoading}
                  >
                    <FormControl>
                      <SelectTrigger className="h-10">
                        <SelectValue placeholder="Select passengers" />
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
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="vehicleType"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm text-gray-600">
                  Preferred Vehicle Type
                </FormLabel>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {vehicleTypeOptions.map((vehicleType) => {
                    const checked = field.value?.includes(vehicleType);
                    return (
                      <label
                        key={vehicleType}
                        htmlFor={`vehicleType-${vehicleType}`}
                        className="flex cursor-pointer items-center gap-2 text-sm"
                      >
                        <Checkbox
                          id={`vehicleType-${vehicleType}`}
                          checked={checked}
                          onCheckedChange={() =>
                            field.onChange(
                              toggleArrayValue(field.value, vehicleType),
                            )
                          }
                        />
                        <span>{vehicleType}</span>
                      </label>
                    );
                  })}
                </div>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />

          <Button type="submit" className="mt-2 h-10 w-full">
            Find Eco Transit
          </Button>
        </form>
      </Form>
    </div>
  );
};
