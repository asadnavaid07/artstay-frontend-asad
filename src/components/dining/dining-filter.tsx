"use client";

import { useForm, Controller } from "react-hook-form";
import { useState, useEffect } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "~/components/ui/tabs";
import { Input } from "~/components/ui/input";
import { MapPin, Search, Utensils } from "lucide-react";
import { Button } from "~/components/ui/button";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "~/components/ui/select";
import { Checkbox } from "~/components/ui/checkbox";
import { api } from "~/trpc/react";
import type { DiningFilterValues } from "~/types";

const PRICE_RANGE_LABELS = {
  "$": "$ (Budget)",
  "$$": "$$ (Moderate)",
  "$$$": "$$$ (Expensive)",
  "$$$$": "$$$$ (Luxury)",
};

export const DiningFilter = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState("general");

  const [filterOptions] = api.dining.getDiningFilterOptions.useSuspenseQuery();

  // Set up react-hook-form
  const { control, handleSubmit, setValue, reset } = useForm<DiningFilterValues>({
    defaultValues: {
      search: "",
      cuisine: "",
      priceRange: "",
      location: "",
      isVegetarian: false,
      isVegan: false,
      isGlutenFree: false,
    },
  });

  // Initialize form with URL params if any
  useEffect(() => {
    if (searchParams) {
      const search = searchParams.get("search") ?? "";
      const cuisine = searchParams.get("cuisine") ?? "";
      const priceRange = searchParams.get("priceRange") ?? "";
      const location = searchParams.get("location") ?? "";
      const isVegetarian = searchParams.get("isVegetarian") === "true";
      const isVegan = searchParams.get("isVegan") === "true";
      const isGlutenFree = searchParams.get("isGlutenFree") === "true";

      setValue("search", search);
      setValue("cuisine", cuisine);
      setValue("priceRange", priceRange);
      setValue("location", location);
      setValue("isVegetarian", isVegetarian);
      setValue("isVegan", isVegan);
      setValue("isGlutenFree", isGlutenFree);
    }
  }, [searchParams, setValue]);

  const onSubmit = (data: DiningFilterValues) => {
    // Create new URLSearchParams
    const params = new URLSearchParams();
    
    // Only add non-empty values to the URL
    if (data.search) params.set("search", data.search);
    if (data.cuisine) params.set("cuisine", data.cuisine);
    if (data.priceRange) params.set("priceRange", data.priceRange);
    if (data.location) params.set("location", data.location);
    if (data.isVegetarian) params.set("isVegetarian", "true");
    if (data.isVegan) params.set("isVegan", "true");
    if (data.isGlutenFree) params.set("isGlutenFree", "true");

    // Update URL with filter params
    router.push(`${pathname}?${params.toString()}`);
  };

  const handleReset = () => {
    reset({
      search: "",
      cuisine: "",
      priceRange: "",
      location: "",
      isVegetarian: false,
      isVegan: false,
      isGlutenFree: false,
    });
    router.push(pathname);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="-mt-12 sm:-mt-16 md:-mt-20 lg:-mt-24 px-2 sm:px-4 md:px-6">
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="flex h-auto flex-wrap gap-1 sm:gap-2 bg-transparent p-0 overflow-x-auto">
          <div className="rounded-b-none rounded-t-lg bg-secondary px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 font-text text-xs sm:text-sm md:text-base lg:text-lg text-white z-[101] whitespace-nowrap">
            <b>DINING VOYAGE</b>
          </div>
          {[
            { id: "general", label: "General Search" },
            { id: "cuisine", label: "Cuisine & Price" },
            { id: "dietary", label: "Dietary Preferences" },
          ].map((tab) => (
            <TabsTrigger
              key={tab.id}
              value={tab.id}
              className="rounded-b-none rounded-t-lg bg-gray-200 px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 font-text text-xs sm:text-sm md:text-base lg:text-lg text-gray-950 backdrop-blur hover:bg-primary hover:text-white data-[state=active]:text-primary whitespace-nowrap"
            >
              <span className="mr-1 sm:mr-2">+</span>
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
        <div className="rounded-lg bg-white/90 p-3 sm:p-4 md:p-6 shadow-lg backdrop-blur">
          <TabsContent value="general">
            <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">
              <div>
                <label className="mb-1.5 sm:mb-2 flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-medium">
                  <Search className="h-3.5 w-3.5 sm:h-4 sm:w-4" /> Restaurant Search
                </label>
                <Controller
                  name="search"
                  control={control}
                  render={({ field }) => (
                    <Input
                      placeholder="Search restaurants..."
                      value={field.value}
                      onChange={field.onChange}
                      className="text-xs sm:text-sm h-9 sm:h-10"
                    />
                  )}
                />
              </div>

              <div>
                <label className="mb-1.5 sm:mb-2 flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-medium">
                  <MapPin className="h-3.5 w-3.5 sm:h-4 sm:w-4" /> Location
                </label>
                <Controller
                  name="location"
                  control={control}
                  render={({ field }) => (
                    <Select 
                      value={field.value} 
                      onValueChange={field.onChange}
                    >
                      <SelectTrigger className="text-xs sm:text-sm h-9 sm:h-10">
                        <SelectValue placeholder="Select location" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="vaue" disabled className="text-xs sm:text-sm">All Locations</SelectItem>
                        {filterOptions.locations.map((location: string) => (
                          <SelectItem key={location} value={location} className="text-xs sm:text-sm">
                            {location}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="cuisine">
            <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">
              <div>
                <label className="mb-1.5 sm:mb-2 flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-medium">
                  <Utensils className="h-3.5 w-3.5 sm:h-4 sm:w-4" /> Cuisine Type
                </label>
                <Controller
                  name="cuisine"
                  control={control}
                  render={({ field }) => (
                    <Select 
                      value={field.value} 
                      onValueChange={field.onChange}
                    >
                      <SelectTrigger className="text-xs sm:text-sm h-9 sm:h-10">
                        <SelectValue placeholder="Select cuisine" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="vaue" disabled className="text-xs sm:text-sm">All Cuisines</SelectItem>
                        {filterOptions.cuisines.map((cuisine: string) => (
                          <SelectItem key={cuisine} value={cuisine} className="text-xs sm:text-sm">
                            {cuisine}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                />
              </div>

              <div>
                <label className="mb-1.5 sm:mb-2 block text-xs sm:text-sm font-medium">Price Range</label>
                <Controller
                  name="priceRange"
                  control={control}
                  render={({ field }) => (
                    <Select 
                      value={field.value}
                      onValueChange={field.onChange}
                    >
                      <SelectTrigger className="text-xs sm:text-sm h-9 sm:h-10">
                        <SelectValue placeholder="Select price range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="vaue" disabled className="text-xs sm:text-sm">All Price Ranges</SelectItem>
                        {filterOptions.priceRanges.map((range: string) => (
                          <SelectItem key={range} value={range} className="text-xs sm:text-sm">
                            {PRICE_RANGE_LABELS[range as keyof typeof PRICE_RANGE_LABELS] || range}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="dietary">
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center space-x-2">
                <Controller
                  name="isVegetarian"
                  control={control}
                  render={({ field }) => (
                    <Checkbox
                      id="isVegetarian"
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      className="h-4 w-4 sm:h-5 sm:w-5"
                    />
                  )}
                />
                <label
                  htmlFor="isVegetarian"
                  className="text-xs sm:text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                >
                  Vegetarian Options Only
                </label>
              </div>

              <div className="flex items-center space-x-2">
                <Controller
                  name="isVegan"
                  control={control}
                  render={({ field }) => (
                    <Checkbox
                      id="isVegan"
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      className="h-4 w-4 sm:h-5 sm:w-5"
                    />
                  )}
                />
                <label
                  htmlFor="isVegan"
                  className="text-xs sm:text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                >
                  Vegan Options Only
                </label>
              </div>

              <div className="flex items-center space-x-2">
                <Controller
                  name="isGlutenFree"
                  control={control}
                  render={({ field }) => (
                    <Checkbox
                      id="isGlutenFree"
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      className="h-4 w-4 sm:h-5 sm:w-5"
                    />
                  )}
                />
                <label
                  htmlFor="isGlutenFree"
                  className="text-xs sm:text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                >
                  Gluten-Free Options Only
                </label>
              </div>
            </div>
          </TabsContent>

          <div className="mt-4 sm:mt-6 md:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Button type="submit" className="w-full sm:w-auto text-xs sm:text-sm md:text-base px-4 sm:px-6 py-2 sm:py-3">
              <Search className="h-3 w-3 sm:h-4 sm:w-4 mr-1.5 sm:mr-2" />
              Find Restaurants
            </Button>
            <Button type="button" variant="outline" onClick={handleReset} className="w-full sm:w-auto text-xs sm:text-sm md:text-base px-4 sm:px-6 py-2 sm:py-3">
              Reset Filters
            </Button>
          </div>
        </div>
      </Tabs>
    </form>
  );
};