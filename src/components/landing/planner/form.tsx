"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "~/components/ui/button";
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

const PRICE_LABELS: Record<string, string> = {
  "$": "$ (Budget)",
  "$$": "$$ (Moderate)",
  "$$$": "$$$ (Premium)",
  "$$$$": "$$$$ (Luxury)",
  budget: "Budget ($)",
  moderate: "Moderate ($$)",
  premium: "Premium ($$$)",
  luxury: "Luxury ($$$$)",
};

const LANGUAGE_OPTIONS = [
  { value: "english", label: "English" },
  { value: "spanish", label: "Spanish" },
  { value: "french", label: "French" },
  { value: "german", label: "German" },
  { value: "arabic", label: "Arabic" },
  { value: "mandarin", label: "Mandarin" },
  { value: "russian", label: "Russian" },
  { value: "japanese", label: "Japanese" },
  { value: "hindi", label: "Hindi" },
] as const;

const SPECIALITY_OPTIONS = [
  { value: "wildlife", label: "Wildlife Safari" },
  { value: "cultural", label: "Cultural Tours" },
  { value: "adventure", label: "Adventure Travel" },
  { value: "luxury", label: "Luxury Travel" },
  { value: "budget", label: "Budget Travel" },
  { value: "eco", label: "Eco-Tourism" },
  { value: "historical", label: "Historical Sites" },
  { value: "culinary", label: "Culinary Experiences" },
  { value: "family", label: "Family Trips" },
] as const;

type FilterOptions = {
  locations: string[];
  priceRanges: string[];
  languages: string[];
  specialities: string[];
};

const formSchema = z.object({
  location: z.string().optional(),
  priceRange: z.string().optional(),
  language: z.string().optional(),
  speciality: z.string().optional(),
});

export const PlannerForm = () => {
  const router = useRouter();
  const [options, setOptions] = useState<FilterOptions>({
    locations: [],
    priceRanges: [],
    languages: [],
    specialities: [],
  });
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      location: "",
      priceRange: "",
      language: "",
      speciality: "",
    },
  });

  useEffect(() => {
    const fetchOptions = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/travel/filters`
        );
        if (!response.ok) {
          throw new Error("Failed to load travel planner filters");
        }
        const payload = await response.json();
        if (payload?.status === "success" && payload?.data) {
          setOptions({
            locations: payload.data.locations ?? [],
            priceRanges: payload.data.priceRanges ?? [],
            languages: payload.data.languages ?? [],
            specialities: payload.data.specialities ?? [],
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

  const languageItems = useMemo(() => {
    const map = new Map<string, string>(
      LANGUAGE_OPTIONS.map(({ value, label }) => [value, label])
    );
    const values =
      options.languages.length > 0
        ? options.languages
        : LANGUAGE_OPTIONS.map(({ value }) => value);

    return values.map((value) => ({
      value,
      label: map.get(value) ?? value,
    }));
  }, [options.languages]);

  const specialityItems = useMemo(() => {
    const map = new Map<string, string>(
      SPECIALITY_OPTIONS.map(({ value, label }) => [value, label])
    );
    const values =
      options.specialities.length > 0
        ? options.specialities
        : SPECIALITY_OPTIONS.map(({ value }) => value);

    return values.map((value) => ({
      value,
      label: map.get(value) ?? value,
    }));
  }, [options.specialities]);

  const priceRangeItems =
    options.priceRanges.length > 0
      ? options.priceRanges
      : ["budget", "moderate", "premium", "luxury", "$", "$$", "$$$", "$$$$"];

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    const params = new URLSearchParams();

    if (data.location) params.set("location", data.location);
    if (data.priceRange) params.set("priceRange", data.priceRange);
    if (data.language) params.set("language", data.language);
    if (data.speciality) params.set("speciality", data.speciality);

    router.push(`/travel?${params.toString()}`);
  };

  return (
    <div className="z-[100] mx-auto w-full max-w-md rounded-lg bg-white shadow-lg">
      <div className="rounded-t-lg bg-primary p-4 text-white border-2 border-white">
        <h2 className="text-center text-xl font-bold">
          Plan Your Kashmir Odyssey <br />
          <span className="text-sm italic">
            Match with travel planners who speak your journey
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
                <FormLabel className="text-sm text-gray-600">Location</FormLabel>
                <Select
                  value={field.value}
                  onValueChange={field.onChange}
                  disabled={isLoading}
                >
                  <FormControl>
                    <SelectTrigger className="h-10">
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
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="priceRange"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm text-gray-600">
                  Price Range
                </FormLabel>
                <Select
                  value={field.value}
                  onValueChange={field.onChange}
                  disabled={isLoading}
                >
                  <FormControl>
                    <SelectTrigger className="h-10">
                      <SelectValue placeholder="– Select Price Range –" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {[...new Set(priceRangeItems)].map((range) => (
                      <SelectItem key={range} value={range}>
                        {PRICE_LABELS[range] ?? range}
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
            name="language"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm text-gray-600">Language</FormLabel>
                <Select
                  value={field.value}
                  onValueChange={field.onChange}
                  disabled={isLoading}
                >
                  <FormControl>
                    <SelectTrigger className="h-10">
                      <SelectValue placeholder="– Select Language –" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {languageItems.map((language) => (
                      <SelectItem key={language.value} value={language.value}>
                        {language.label}
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
            name="speciality"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm text-gray-600">
                  Speciality
                </FormLabel>
                <Select
                  value={field.value}
                  onValueChange={field.onChange}
                  disabled={isLoading}
                >
                  <FormControl>
                    <SelectTrigger className="h-10">
                      <SelectValue placeholder="– Select Speciality –" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {specialityItems.map((speciality) => (
                      <SelectItem
                        key={speciality.value}
                        value={speciality.value}
                      >
                        {speciality.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />

          <Button type="submit" className="h-10 w-full">
            FIND TRAVEL PLANNER
          </Button>
        </form>
      </Form>
    </div>
  );
};

