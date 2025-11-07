"use client";

import { useForm, Controller, useWatch } from "react-hook-form";
import { useState, useEffect } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "~/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { Checkbox } from "~/components/ui/checkbox";
import { Input } from "~/components/ui/input";
import { Search } from "lucide-react";
import { Button } from "~/components/ui/button";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { api } from "~/trpc/react";
import type { CraftProps, SubCraftProps } from "~/types";

// Define the filter form values type
export type ArtisanFilterValues = {
  craft: string;
  subCraft: string;
  rating: number[];
  expertise: string[];
  education: string;
  training: string;
  certification: string;
  recognition: string;
};


export const ArtisanFilter = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState("craft");
  
  const { control, handleSubmit, watch, setValue } = useForm<ArtisanFilterValues>({
    defaultValues: {
      craft: "",
      subCraft: "",
      rating: [5, 4, 3, 2, 1], 
      expertise: ["GRANDMASTER", "MASTER", "CRAFTMAN", "APPRENTICE"],
      education: "",
      training: "",
      certification: "",
      recognition: "",
    },
  });

  const [crafts] = api.craft.getAllCrafts.useSuspenseQuery();

  const watchedCraft = useWatch({
    control: control,
    name: "craft",
    defaultValue: "",
  });

  const subCrafts = api.craft.getSubCraftsByCraftId.useQuery(
    { craftId: watchedCraft },
    { enabled: !!watchedCraft } 
  );

  useEffect(() => {
    if (searchParams) {
      const craft = searchParams.get("craft") ?? "";
      const subCraft = searchParams.get("subCraft") ?? "";
      const rating = searchParams.get("rating")?.split(",").map(Number) ?? [5, 4, 3, 2, 1];
      const expertise = searchParams.get("expertise")?.split(",") ?? 
        ["GRANDMASTER", "MASTER", "CRAFTMAN", "APPRENTICE"]; // Updated to uppercase
      const education = searchParams.get("education") ?? "";
      const training = searchParams.get("training") ?? "";
      const certification = searchParams.get("certification") ?? "";
      const recognition = searchParams.get("recognition") ?? "";

      setValue("craft", craft);
      setValue("subCraft", subCraft);
      setValue("rating", rating);
      setValue("expertise", expertise);
      setValue("education", education);
      setValue("training", training);
      setValue("certification", certification);
      setValue("recognition", recognition);
    }
  }, [searchParams, setValue]);

function handleCheckboxChange(field: "rating", value: number): void;
function handleCheckboxChange(field: "expertise", value: string): void;
function handleCheckboxChange(field: "rating" | "expertise", value: number | string): void {
  const currentValues = watch(field);
  
  if (Array.isArray(currentValues)) {
    if (field === "rating") {
      const typedValues = currentValues as number[];
      const valueExists = typedValues.includes(value as number);
      const updatedValues = valueExists
        ? typedValues.filter(v => v !== value)
        : [...typedValues, value as number];
      setValue("rating", updatedValues);
    } else {
      // Must be "expertise"
      const typedValues = currentValues as string[];
      const valueExists = typedValues.includes(value as string);
      const updatedValues = valueExists
        ? typedValues.filter(v => v !== value)
        : [...typedValues, value as string];
      setValue("expertise", updatedValues);
    }
  }
}

  const onSubmit = (data: ArtisanFilterValues) => {
    const params = new URLSearchParams();
    
    // Only add non-empty values to the URL
    if (data.craft) params.set("craft", data.craft);
    if (data.subCraft) params.set("subCraft", data.subCraft);
    if (data.rating.length) params.set("rating", data.rating.join(","));
    if (data.expertise.length) params.set("expertise", data.expertise.join(","));
    if (data.education) params.set("education", data.education);
    if (data.training) params.set("training", data.training);
    if (data.certification) params.set("certification", data.certification);
    if (data.recognition) params.set("recognition", data.recognition);

    // Update URL with filter params
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="-mt-8 sm:-mt-12 md:-mt-16 lg:-mt-20 xl:-mt-24 px-2 sm:px-3 md:px-4 lg:px-6">
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="flex h-auto flex-wrap gap-1 sm:gap-2 bg-transparent p-0 overflow-x-auto pb-1 sm:pb-0">
          <div className="rounded-b-none rounded-t-lg bg-secondary px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 font-text text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-lg text-white z-[101] whitespace-nowrap flex-shrink-0">
            <b>ARTISAN RESOURCES</b>
          </div>
          {[
            { id: "craft", label: "Craft" },
            { id: "expertise", label: "Expertise" },
            { id: "rating", label: "Rating" },
            { id: "credentials", label: "Credentials" },
          ].map((tab) => (
            <TabsTrigger
              key={tab.id}
              value={tab.id}
              className="rounded-b-none rounded-t-lg bg-gray-200 px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 font-text text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-lg text-gray-950 backdrop-blur hover:bg-primary hover:text-white data-[state=active]:text-primary whitespace-nowrap flex-shrink-0"
            >
              <span className="mr-1 sm:mr-2">+</span>
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
        <div className="rounded-lg bg-white/90 p-3 sm:p-4 md:p-5 lg:p-6 shadow-lg backdrop-blur">
          <TabsContent value="craft">
            <div className="grid grid-cols-1 gap-3 sm:gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-4">
              <div className="col-span-1">
                <label className="mb-1.5 sm:mb-2 block text-xs sm:text-sm font-medium">Selected Craft</label>
                <Controller
                  name="craft"
                  control={control}
                  render={({ field }) => (
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger className="text-xs sm:text-sm h-9 sm:h-10">
                        <SelectValue placeholder="-- Select Craft --" />
                      </SelectTrigger>
                      <SelectContent>
                        {crafts.map((craft: CraftProps) => (
                          <SelectItem key={craft.craftId} value={craft.craftId} className="text-xs sm:text-sm">
                            {craft.craftName}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                />
              </div>

              <div className="col-span-1">
                <label className="mb-1.5 sm:mb-2 block text-xs sm:text-sm font-medium">Selected Sub-Craft</label>
                <Controller
                  name="subCraft"
                  control={control}
                  render={({ field }) => (
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger className="text-xs sm:text-sm h-9 sm:h-10">
                        <SelectValue placeholder="-- Select Sub Craft --" />
                      </SelectTrigger>
                      <SelectContent>
                        {subCrafts.data?.map((subCraft: SubCraftProps) => (
                          <SelectItem key={subCraft.subCraftId} value={subCraft.subCraftId} className="text-xs sm:text-sm">
                            {subCraft.subCraftName}
                          </SelectItem>
                        ))}
                        {subCrafts.isLoading && (
                          <SelectItem value="loading" disabled className="text-xs sm:text-sm">
                            Loading...
                          </SelectItem>
                        )}
                        {!watchedCraft && (
                          <SelectItem value="loading" disabled className="text-xs sm:text-sm">
                            Select a craft first
                          </SelectItem>
                        )}
                      </SelectContent>
                    </Select>
                  )}
                />
              </div>

              {/* Experience (maps to expertise) */}
              <div>
                <label className="mb-1.5 sm:mb-2 block text-xs sm:text-sm font-medium">Experience</label>
                <Controller
                  name="expertise"
                  control={control}
                  render={({ field }) => (
                    <Select
                      value={Array.isArray(field.value) ? (field.value[0] ?? "") : ""}
                      onValueChange={(val) => setValue("expertise", val ? [val] : [])}
                    >
                      <SelectTrigger className="text-xs sm:text-sm h-9 sm:h-10">
                        <SelectValue placeholder="-- Select Experience --" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="GRANDMASTER" className="text-xs sm:text-sm">Grandmaster</SelectItem>
                        <SelectItem value="MASTER" className="text-xs sm:text-sm">Master Craftsman</SelectItem>
                        <SelectItem value="CRAFTMAN" className="text-xs sm:text-sm">Craftsman</SelectItem>
                        <SelectItem value="APPRENTICE" className="text-xs sm:text-sm">Apprentice</SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                />
              </div>

              {/* Education */}
              <div>
                <label className="mb-1.5 sm:mb-2 block text-xs sm:text-sm font-medium">Education</label>
                <Controller
                  name="education"
                  control={control}
                  render={({ field }) => (
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger className="text-xs sm:text-sm h-9 sm:h-10">
                        <SelectValue placeholder="-- Select Education --" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="FORMAL" className="text-xs sm:text-sm">Formal</SelectItem>
                        <SelectItem value="NON_FORMAL" className="text-xs sm:text-sm">Non-Formal</SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="rating" className="space-y-3 sm:space-y-4">
            <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2 sm:gap-3 md:gap-4">
              {[5, 4, 3, 2, 1].map((stars) => (
                <div key={stars} className="flex items-center gap-1.5 sm:gap-2">
                  <Controller
                    name="rating"
                    control={control}
                    render={({ field }) => (
                      <Checkbox
                        id={`${stars}stars`}
                        checked={field.value.includes(stars)}
                        onCheckedChange={() => handleCheckboxChange("rating", stars)}
                        className="h-4 w-4 sm:h-5 sm:w-5"
                      />
                    )}
                  />
                  <label htmlFor={`${stars}stars`} className="text-xs sm:text-sm cursor-pointer">{stars} Stars</label>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="expertise" className="space-y-3 sm:space-y-4">
            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
              {[
                { value: "GRANDMASTER", label: "Grandmaster" },
                { value: "MASTER", label: "Master Craftsman" },
                { value: "CRAFTMAN", label: "Craftsman" },
                { value: "APPRENTICE", label: "Apprentice" }
              ].map(
                (level) => (
                  <div key={level.value} className="flex items-center gap-1.5 sm:gap-2">
                    <Controller
                      name="expertise"
                      control={control}
                      render={({ field }) => (
                        <Checkbox
                          id={level.value}
                          checked={field.value.includes(level.value)}
                          onCheckedChange={() => handleCheckboxChange("expertise", level.value)}
                          className="h-4 w-4 sm:h-5 sm:w-5"
                        />
                      )}
                    />
                    <label htmlFor={level.value} className="text-xs sm:text-sm cursor-pointer">{level.label}</label>
                  </div>
                ),
              )}
            </div>
          </TabsContent>

          <TabsContent value="credentials">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
              {[
                {
                  name: "education",
                  label: "Education",
                  options: [
                    { value: "NON_FORMAL", label: "Non-Formal Education" },
                    { value: "FORMAL", label: "Formal Education" },
                  ],
                },
                {
                  name: "training",
                  label: "Training",
                  options: [
                    { value: "NON_FORMAL", label: "Non-Formal Training" },
                    { value: "FORMAL", label: "Formal Training" },
                  ],
                },
                {
                  name: "certification",
                  label: "Certification",
                  options: [
                    { value: "NONE", label: "No Certification" },
                    { value: "PROFESSIONAL", label: "Professional Bodies" },
                    { value: "ASSOCIATION", label: "Trade Associations" },
                    { value: "WORKSHOP", label: "Workshops" },
                  ],
                },
                {
                  name: "recognition",
                  label: "Recognition",
                  options: [
                    { value: "STATE", label: "State Level (Craftsmanship)" },
                    { value: "NATIONAL", label: "National Level (Padma Shri)" },
                    { value: "INTERNATIONAL", label: "International Level" },
                  ],
                },
              ].map((field) => (
                <div key={field.label}>
                  <label className="mb-1.5 sm:mb-2 block text-xs sm:text-sm font-medium">{field.label}</label>
                  <Controller
                    name={field.name as keyof ArtisanFilterValues}
                    control={control}
                    render={({ field: formField }) => (
                      <Select
                        value={formField.value as string}
                        onValueChange={formField.onChange}
                      >
                        <SelectTrigger className="text-xs sm:text-sm h-9 sm:h-10">
                          <SelectValue placeholder={`-- ${field.label} --`} />
                        </SelectTrigger>
                        <SelectContent>
                          {field.options.map((option) => (
                            <SelectItem key={option.value} value={option.value} className="text-xs sm:text-sm">
                              {option.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                  />
                </div>
              ))}
            </div>
          </TabsContent>

          <div className="mt-4 sm:mt-6 md:mt-8 flex justify-center sm:justify-start">
            <Button type="submit" className="w-full sm:w-auto text-xs sm:text-sm md:text-base px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3">
              <Search className="h-3 w-3 sm:h-4 sm:w-4 mr-1.5 sm:mr-2" />
              Find Now
            </Button>
          </div>
        </div>
      </Tabs>
    </form>
  );
};