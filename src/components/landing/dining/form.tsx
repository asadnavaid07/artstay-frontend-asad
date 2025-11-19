"use client";

import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRouter } from "next/navigation";

import { Button } from "~/components/ui/button";
import { Checkbox } from "~/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";

const CUISINE_TYPES = [
  { value: "kashmiri", label: "Kashmiri" },
  { value: "mughlai", label: "Mughlai" },
  { value: "punjabi", label: "Punjabi" },
  { value: "indian", label: "Indian" },
  { value: "chinese", label: "Chinese" },
  { value: "continental", label: "Continental" },
  { value: "middleEastern", label: "Middle Eastern" },
  { value: "italian", label: "Italian" },
  { value: "fusion", label: "Fusion" },
  { value: "organic", label: "Organic & Health Food" },
  { value: "street", label: "Street Food" },
] as const;

const PRICE_RANGE_OPTIONS = [
  { value: "$", label: "$ (Inexpensive)" },
  { value: "$$", label: "$$ (Moderate)" },
  { value: "$$$", label: "$$$ (Expensive)" },
  { value: "$$$$", label: "$$$$ (Very Expensive)" },
] as const;

type FilterOptions = {
  cuisines: string[];
  priceRanges: string[];
  locations: string[];
};

const formSchema = z.object({
  cuisine: z.string().optional(),
  priceRange: z.string().optional(),
  location: z.string().optional(),
  isVegetarian: z.boolean(),
  isVegan: z.boolean(),
  isGlutenFree: z.boolean(),
});

export const DiningForm = () => {
  const router = useRouter();
  const [options, setOptions] = useState<FilterOptions>({
    cuisines: [],
    priceRanges: [],
    locations: [],
  });
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      cuisine: "",
      priceRange: "",
      location: "",
      isVegetarian: false,
      isVegan: false,
      isGlutenFree: false,
    },
  });

  useEffect(() => {
    const fetchOptions = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/dining/filters`
        );
        if (!res.ok) {
          throw new Error("Failed to load dining filter options");
        }
        const payload = await res.json();
        if (payload?.status === "success" && payload?.data) {
          setOptions({
            cuisines: payload.data.cuisines ?? [],
            priceRanges: payload.data.priceRanges ?? [],
            locations: payload.data.locations ?? [],
          });
        }
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    void fetchOptions();
  }, []);

  const cuisineItems = useMemo(() => {
    const map = new Map<string, string>(
      CUISINE_TYPES.map(({ value, label }) => [value, label])
    );
    const values =
      options.cuisines.length > 0
        ? options.cuisines
        : CUISINE_TYPES.map(({ value }) => value);

    return values.map((value) => ({
      value,
      label: map.get(value) ?? value,
    }));
  }, [options.cuisines]);

  const priceRangeItems =
    options.priceRanges.length > 0
      ? options.priceRanges.map((value) => ({
          value,
          label:
            PRICE_RANGE_OPTIONS.find((option) => option.value === value)
              ?.label ?? value,
        }))
      : PRICE_RANGE_OPTIONS;

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    const params = new URLSearchParams();

    if (data.cuisine) params.set("cuisine", data.cuisine);
    if (data.priceRange) params.set("priceRange", data.priceRange);
    if (data.location) params.set("location", data.location);
    if (data.isVegetarian) params.set("isVegetarian", "true");
    if (data.isVegan) params.set("isVegan", "true");
    if (data.isGlutenFree) params.set("isGlutenFree", "true");

    router.push(`/dining?${params.toString()}`);
  };

  return (
    <div className="z-[100] mx-auto w-full max-w-xl rounded-lg bg-white shadow-lg">
      <div className="rounded-t-lg bg-primary p-4 text-white border-2 border-white">
        <h2 className="text-center text-xl font-bold">
          Discover an ArtStay Traditional Dining Voyage <br />
          <span className="text-sm italic">
            Not Just a Trip, A Voyage into Kashmir&apos;s Soul &amp; Heritage
          </span>
        </h2>
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6 p-6"
        >
          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-600">Location</FormLabel>
                <Select
                  value={field.value}
                  onValueChange={field.onChange}
                  disabled={isLoading}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="– Select Location –" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {options.locations.map((location) => (
                      <SelectItem key={location} value={location}>
                        {location}
                      </SelectItem>
                    ))}
                    {options.locations.length === 0 && (
                      <SelectItem value="all" disabled>
                        Locations coming soon
                      </SelectItem>
                    )}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <FormField
              control={form.control}
              name="cuisine"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-600">Cuisine Type</FormLabel>
                  <Select
                    value={field.value}
                    onValueChange={field.onChange}
                    disabled={isLoading}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="– Select Cuisine –" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {cuisineItems.map((cuisine) => (
                        <SelectItem
                          key={cuisine.value}
                          value={cuisine.value}
                        >
                          {cuisine.label}
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
              name="priceRange"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-600">Price Range</FormLabel>
                  <Select
                    value={field.value}
                    onValueChange={field.onChange}
                    disabled={isLoading}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="– Select Price Range –" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {priceRangeItems.map((price) => (
                        <SelectItem key={price.value} value={price.value}>
                          {price.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 gap-3">
            <FormField
              control={form.control}
              name="isVegetarian"
              render={({ field }) => (
                <FormItem className="flex items-center space-x-2 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <FormLabel className="text-gray-600">
                    Vegetarian options only
                  </FormLabel>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="isVegan"
              render={({ field }) => (
                <FormItem className="flex items-center space-x-2 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <FormLabel className="text-gray-600">
                    Vegan options only
                  </FormLabel>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="isGlutenFree"
              render={({ field }) => (
                <FormItem className="flex items-center space-x-2 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <FormLabel className="text-gray-600">
                    Gluten-free options only
                  </FormLabel>
                </FormItem>
              )}
            />
          </div>

          <Button type="submit" className="w-full">
            Find Restaurants
          </Button>
        </form>
      </Form>
    </div>
  );
};