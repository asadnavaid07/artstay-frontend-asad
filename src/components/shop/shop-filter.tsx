"use client";

import { useForm, Controller } from "react-hook-form";
import { useState, useEffect } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "~/components/ui/tabs";
import { Input } from "~/components/ui/input";
import { MapPin, Search, ShoppingBag } from "lucide-react";
import { Button } from "~/components/ui/button";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

// Define the filter form values type
export type ShopFilterValues = {
  search: string;
  category: string;
  handmade: string;
  giCertified: boolean;
  location: string;
};

export const ShopFilter = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState("general");


  // Set up react-hook-form
  const { control, handleSubmit, setValue, reset } = useForm<ShopFilterValues>({
    defaultValues: {
      search: "",
      category: "",
      handmade: "",
      giCertified: false,
      location: "",
    },
  });

  // Initialize form with URL params if any
  useEffect(() => {
    if (searchParams) {
      const search = searchParams.get("search") ?? "";
      const category = searchParams.get("category") ?? "";
      const handmade = searchParams.get("handmade") ?? "";
      const giCertified = searchParams.get("giCertified") === "true";
      const location = searchParams.get("location") ?? "";

      setValue("search", search);
      setValue("category", category);
      setValue("handmade", handmade);
      setValue("giCertified", giCertified);
      setValue("location", location);
    }
  }, [searchParams, setValue]);

  const onSubmit = (data: ShopFilterValues) => {
    // Create new URLSearchParams
    const params = new URLSearchParams();
    
    // Only add non-empty values to the URL
    if (data.search) params.set("search", data.search);
    if (data.category) params.set("category", data.category);
    if (data.handmade) params.set("handmade", data.handmade);
    if (data.giCertified) params.set("giCertified", "true");
    if (data.location) params.set("location", data.location);

    // Update URL with filter params
    router.push(`${pathname}?${params.toString()}`);
  };

  const handleReset = () => {
    reset({
      search: "",
      category: "",
      handmade: "",
      giCertified: false,
      location: "",
    });
    router.push(pathname);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="-mt-24">
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="flex h-auto flex-wrap gap-2 bg-transparent p-0">
          <div className="rounded-b-none rounded-t-lg bg-secondary px-4 py-2 font-text text-lg text-white z-[101] p-3">
            <b>SHOP DIRECTORY</b>
          </div>
          <TabsTrigger
            value="general"
            className="rounded-b-none rounded-t-lg bg-gray-200 px-4 py-2 font-text text-lg text-gray-950 backdrop-blur hover:bg-primary hover:text-white data-[state=active]:text-primary"
          >
            <span className="mr-2">+</span>
            General Search
          </TabsTrigger>
        </TabsList>
        <div className="rounded-lg bg-white/90 p-6 shadow-lg backdrop-blur">
          <TabsContent value="general">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2  flex items-center gap-2">
                  <ShoppingBag className="h-4 w-4" /> Shop or Product Search
                </label>
                <Controller
                  name="search"
                  control={control}
                  render={({ field }) => (
                    <Input
                      placeholder="Search shops or products..."
                      value={field.value}
                      onChange={field.onChange}
                    />
                  )}
                />
              </div>

              <div>
                <label className="mb-2 flex items-center gap-2">
                  <MapPin className="h-4 w-4" /> Location
                </label>
                <Controller
                  name="location"
                  control={control}
                  render={({ field }) => (
                    <Input
                      placeholder="Enter city or region..."
                      value={field.value}
                      onChange={field.onChange}
                    />
                  )}
                />
              </div>
            </div>
          </TabsContent>

          <div className="mt-8 flex gap-4">
            <Button type="submit">
              <Search className="h-4 w-4 mr-2" />
              Find Shops
            </Button>
            <Button type="button" variant="outline" onClick={handleReset}>
              Reset Filters
            </Button>
          </div>
        </div>
      </Tabs>
    </form>
  );
};