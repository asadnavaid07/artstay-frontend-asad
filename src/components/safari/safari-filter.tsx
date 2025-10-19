"use client";

import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "~/components/ui/tabs";
import { Checkbox } from "~/components/ui/checkbox";
import { Input } from "~/components/ui/input";
import { Search } from "lucide-react";
import { Button } from "~/components/ui/button";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

// Define the filter form values type
export type SafariFilterValues = {
  craftVillages: string[];
  features: string[];
};

export const SafariFilter = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState("villages");

  // Set up react-hook-form
  const { control, handleSubmit, watch, setValue } = useForm<SafariFilterValues>({
    defaultValues: {
      craftVillages: [],
      features: [],
    },
  });

  // Initialize form with URL params if any
  useEffect(() => {
    if (searchParams) {
      const craftVillages = searchParams.get("craftVillages")?.split(",") ?? [];
      const features = searchParams.get("features")?.split(",") ?? [];

      setValue("craftVillages", craftVillages);
      setValue("features", features);
    }
  }, [searchParams, setValue]);

  // Get current values
  const craftVillages = watch("craftVillages");
  const features = watch("features");

  // Type-safe checkbox change handler for craft villages
  const handleCraftVillageChange = (value: string, checked: boolean) => {
    console.log("Craft village change:", value, checked, craftVillages);
    
    if (checked) {
      setValue("craftVillages", [...craftVillages, value]);
    } else {
      setValue("craftVillages", craftVillages.filter(v => v !== value));
    }
  };

  // Type-safe checkbox change handler for features
  const handleFeatureChange = (value: string, checked: boolean) => {
    console.log("Feature change:", value, checked, features);
    
    if (checked) {
      setValue("features", [...features, value]);
    } else {
      setValue("features", features.filter(v => v !== value));
    }
  };

  const onSubmit = (data: SafariFilterValues) => {
    console.log("Form submitted with data:", data);
    
    // Create new URLSearchParams
    const params = new URLSearchParams();
    
    // Only add non-empty values to the URL
    if (data.craftVillages.length) params.set("craftVillages", data.craftVillages.join(","));
    if (data.features.length) params.set("features", data.features.join(","));

    console.log("URL params:", params.toString());
    
    // Update URL with filter params
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="-mt-24 relative z-10">
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="flex h-auto flex-wrap gap-2 bg-transparent p-0 relative z-20">
          <div className="rounded-b-none rounded-t-lg bg-secondary px-4 py-2 font-text text-lg text-white z-[101] p-3">
            <b>SAFARI EXPERIENCES</b>
          </div>
          {[
            { id: "villages", label: "Craft Villages" },
            { id: "features", label: "Features" },
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
        <div className="rounded-lg bg-white/90 p-6 shadow-lg backdrop-blur relative z-10">
          <TabsContent value="villages" className="space-y-4">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {[
                { id: "Khanqah & Zadibal", label: "Khanqah & Zadibal" },
                { id: "Safakadal & Eidgah", label: "Safakadal & Eidgah" },
                { id: "Raniwari, Kathi Darwaza", label: "Raniwari, Kathi Darwaza" },
                { id: "Nallah Mar & Amda Kadal", label: "Nallah Mar & Amda Kadal" },
                { id: "Aali Kadal", label: "Aali Kadal" },
                { id: "Kanihama", label: "Kanihama" },
                { id: "Zainakote", label: "Zainakote" },
                { id: "Kakapora", label: "Kakapora" },
              ].map((village) => (
                <div key={village.id} className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded">
                  <Checkbox
                    id={`village-${village.id}`}
                    checked={craftVillages.includes(village.id)}
                    onCheckedChange={(checked) => handleCraftVillageChange(village.id, checked as boolean)}
                  />
                  <label htmlFor={`village-${village.id}`} className="text-sm cursor-pointer flex-1">{village.label}</label>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="features" className="space-y-4">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {[
                { id: "Live Artisan Demonstrations", label: "Live Artisan Demonstrations" },
                { id: "Hands-on Craft Participation", label: "Hands-on Craft Participation" },
                { id: "Artisan Interviews & Story Sessions", label: "Artisan Interviews & Story Sessions" },
                { id: "Ethical Shopping", label: "Ethical Shopping" },
              ].map((feature) => (
                <div key={feature.id} className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded">
                  <Checkbox
                    id={`feature-${feature.id}`}
                    checked={features.includes(feature.id)}
                    onCheckedChange={(checked) => handleFeatureChange(feature.id, checked as boolean)}
                  />
                  <label htmlFor={`feature-${feature.id}`} className="text-sm cursor-pointer flex-1">{feature.label}</label>
                </div>
              ))}
            </div>
          </TabsContent>

          <div className="mt-8">
            <Button type="submit">
              <Search className="h-4 w-4 mr-2" />
              Find Safari
            </Button>
          </div>
        </div>
      </Tabs>
    </form>
  );
};