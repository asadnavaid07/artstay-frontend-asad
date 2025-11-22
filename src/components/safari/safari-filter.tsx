"use client";

import { useForm, Controller } from "react-hook-form";
import { useState, useEffect } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "~/components/ui/tabs";
import { Search, RotateCcw } from "lucide-react";
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
export type SafariFilterValues = {
  craftVillage: string;
  feature: string;
};

export const SafariFilter = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState("filters");

  // Set up react-hook-form
  const { control, handleSubmit, setValue, watch } = useForm<SafariFilterValues>({
    defaultValues: {
      craftVillage: "",
      feature: "",
    },
  });

  // Initialize form with URL params if any
  useEffect(() => {
    if (searchParams) {
      setValue("craftVillage", searchParams.get("craftVillage") ?? "");
      setValue("feature", searchParams.get("feature") ?? "");
    }
  }, [searchParams, setValue]);

  const onSubmit = (data: SafariFilterValues) => {
    const params = new URLSearchParams();

    if (data.craftVillage) params.set("craftVillage", data.craftVillage);
    if (data.feature) params.set("feature", data.feature);

    router.push(`${pathname}?${params.toString()}`);
  };

  const handleReset = () => {
    setValue("craftVillage", "");
    setValue("feature", "");
    router.push(pathname);
  };

  const craftVillageOptions = [
    "Khanqah & Zadibal",
    "Safakadal & Eidgah",
    "Raniwari, Kathi Darwaza",
    "Nallah Mar & Amda Kadal",
    "Aali Kadal",
    "Kanihama",
    "Zainakote",
    "Kakapora",
  ];

  const featureOptions = [
    "Live Artisan Demonstrations",
    "Hands-on Craft Participation",
    "Artisan Interviews & Story Sessions",
    "Ethical Shopping",
  ];

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="-mt-12 sm:-mt-16 md:-mt-20 lg:-mt-24 relative z-10 px-2 sm:px-4 md:px-6">
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="flex h-auto flex-wrap gap-1 sm:gap-2 bg-transparent p-0 relative z-20 overflow-x-auto">
          <div className="rounded-b-none rounded-t-lg bg-secondary px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 font-text text-xs sm:text-sm md:text-base lg:text-lg text-white z-[101] whitespace-nowrap">
            <b>SAFARI EXPERIENCES</b>
          </div>
          <TabsTrigger
            value="filters"
            className="rounded-b-none rounded-t-lg bg-gray-200 px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 font-text text-xs sm:text-sm md:text-base lg:text-lg text-gray-950 backdrop-blur hover:bg-primary hover:text-white data-[state=active]:text-primary whitespace-nowrap"
          >
            <span className="mr-1 sm:mr-2">+</span>
            Filters
          </TabsTrigger>
        </TabsList>
        <div className="rounded-lg bg-white/90 p-3 sm:p-4 md:p-6 shadow-lg backdrop-blur relative z-10">
          <TabsContent value="filters" className="space-y-4 sm:space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <Controller
                control={control}
                name="craftVillage"
                render={({ field }) => (
                  <div className="space-y-1">
                    <span className="text-xs sm:text-sm font-medium text-gray-700">
                      Craft Village
                    </span>
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger className="h-10 text-sm">
                        <SelectValue placeholder="-- Select Craft Village --" />
                      </SelectTrigger>
                      <SelectContent>
                        {craftVillageOptions.map((option) => (
                          <SelectItem key={option} value={option}>
                            {option}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                )}
              />

              <Controller
                control={control}
                name="feature"
                render={({ field }) => (
                  <div className="space-y-1">
                    <span className="text-xs sm:text-sm font-medium text-gray-700">
                      Features
                    </span>
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger className="h-10 text-sm">
                        <SelectValue placeholder="-- Select Feature --" />
                      </SelectTrigger>
                      <SelectContent>
                        {featureOptions.map((option) => (
                          <SelectItem key={option} value={option}>
                            {option}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                )}
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
              <Button
                type="submit"
                className="w-full sm:w-auto text-xs sm:text-sm md:text-base px-4 sm:px-6 py-2 sm:py-3"
              >
                <Search className="h-3 w-3 sm:h-4 sm:w-4 mr-1.5 sm:mr-2" />
                Find Safari
              </Button>
              <Button
                type="button"
                variant="outline"
                className="w-full sm:w-auto text-xs sm:text-sm md:text-base px-4 sm:px-6 py-2 sm:py-3"
                onClick={handleReset}
              >
                <RotateCcw className="h-3 w-3 sm:h-4 sm:w-4 mr-1.5 sm:mr-2" />
                Reset Filters
              </Button>
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </form>
  );
};