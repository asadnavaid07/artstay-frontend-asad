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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { Checkbox } from "~/components/ui/checkbox";
import { useToast } from "~/hooks/use-toast";

type LanguageFilterOptions = {
  languages: string[];
  specializations: string[];
  locations: string[];
  serviceModes: string[];
  priceRanges: string[];
};

const DEFAULT_LANGUAGES = [
  "English",
  "Kashmiri",
  "Hindi",
  "Urdu",
  "Arabic",
  "French",
  "German",
  "Spanish",
  "Chinese",
  "Japanese",
  "Russian",
  "Italian",
  "Punjabi",
  "Bengali",
] as const;

const DEFAULT_SPECIALIZATIONS = [
  "Translation",
  "Interpretation",
  "Transcription",
  "Localization",
  "Language Teaching",
  "Document Translation",
  "Legal Translation",
  "Medical Translation",
  "Technical Translation",
  "Tourism Guide",
  "Cultural Consultation",
] as const;

const DEFAULT_SERVICE_MODES = [
  "Online",
  "In-Person",
  "Hybrid",
  "Phone",
  "Video Call",
] as const;

const DAYS_OF_WEEK = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
] as const;

const PRICE_RANGE_MAP: Record<
  string,
  { min?: number; max?: number; label: string }
> = {
  "Under $50/hr": { max: 50, label: "Under $50/hr" },
  "$50-$100/hr": { min: 50, max: 100, label: "$50-$100/hr" },
  "$100-$200/hr": { min: 100, max: 200, label: "$100-$200/hr" },
  "$200+/hr": { min: 200, label: "$200+/hr" },
};

const formSchema = z.object({
  location: z.string().optional(),
  languages: z.array(z.string()).default([]),
  specializations: z.array(z.string()).default([]),
  serviceModes: z.array(z.string()).default([]),
  availability: z.array(z.string()).default([]),
  priceRange: z.string().optional(),
});

export const LanguageForm = () => {
  const router = useRouter();
  const { toast } = useToast();

  const [options, setOptions] = useState<LanguageFilterOptions>({
    languages: [],
    specializations: [],
    locations: [],
    serviceModes: [],
    priceRanges: [],
  });
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      location: "",
      languages: [],
      specializations: [],
      serviceModes: [],
      availability: [],
      priceRange: "",
    },
  });

  useEffect(() => {
    const fetchFilterOptions = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/language/filters`,
        );

        if (response.data?.status === "success") {
          const payload = response.data.data ?? {};
          setOptions({
            languages: Array.isArray(payload.languages) ? payload.languages : [],
            specializations: Array.isArray(payload.specializations)
              ? payload.specializations
              : [],
            locations: Array.isArray(payload.locations) ? payload.locations : [],
            serviceModes: Array.isArray(payload.serviceModes)
              ? payload.serviceModes
              : [],
            priceRanges: Array.isArray(payload.priceRanges)
              ? payload.priceRanges
              : [],
          });
        }
      } catch (error) {
        console.error("Failed to load language filters", error);
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

  const languageOptions = useMemo(() => {
    if (options.languages.length > 0) {
      return options.languages;
    }
    return [...DEFAULT_LANGUAGES];
  }, [options.languages]);

  const specializationOptions = useMemo(() => {
    if (options.specializations.length > 0) {
      return options.specializations;
    }
    return [...DEFAULT_SPECIALIZATIONS];
  }, [options.specializations]);

  const serviceModeOptions = useMemo(() => {
    if (options.serviceModes.length > 0) {
      return options.serviceModes;
    }
    return [...DEFAULT_SERVICE_MODES];
  }, [options.serviceModes]);

  const priceRangeOptions = useMemo(() => {
    if (options.priceRanges.length > 0) {
      return options.priceRanges;
    }
    return Object.values(PRICE_RANGE_MAP).map((item) => item.label);
  }, [options.priceRanges]);

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
      if (data.location) {
        params.set("location", data.location);
      }

      if (data.languages?.length) {
        data.languages.forEach((language) => {
          params.append("language", language);
        });
      }

      if (data.specializations?.length) {
        data.specializations.forEach((specialization) => {
          params.append("specialization", specialization);
        });
      }

      if (data.serviceModes?.length) {
        data.serviceModes.forEach((mode) => {
          params.append("serviceMode", mode);
        });
      }

      if (data.availability?.length) {
        data.availability.forEach((day) => {
          params.append("availability", day);
        });
      }

      if (data.priceRange) {
        const priceRangeEntry = Object.values(PRICE_RANGE_MAP).find(
          (item) => item.label === data.priceRange,
        );

        if (priceRangeEntry?.min !== undefined) {
          params.set("minRate", priceRangeEntry.min.toString());
        }

        if (priceRangeEntry?.max !== undefined) {
          params.set("maxRate", priceRangeEntry.max.toString());
        }
      }

      const queryString = params.toString();
      const destination = queryString.length > 0 ? `/language?${queryString}` : "/language";
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
          Engage in an ArtStay Language Exploration
          <br />
          <span className="text-sm italic">
            Align with interpreters who speak your story
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
            name="languages"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm text-gray-600">
                  Working languages
                </FormLabel>
                <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
                  {languageOptions.map((language) => {
                    const checked = field.value?.includes(language);
                    return (
                      <label
                        key={language}
                        htmlFor={`language-${language}`}
                        className="flex cursor-pointer items-center gap-2 text-sm"
                      >
                        <Checkbox
                          id={`language-${language}`}
                          checked={checked}
                          onCheckedChange={() =>
                            field.onChange(
                              toggleArrayValue(field.value, language),
                            )
                          }
                        />
                        <span>{language}</span>
                      </label>
                    );
                  })}
                </div>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="specializations"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm text-gray-600">
                  Specializations
                </FormLabel>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {specializationOptions.map((specialization) => {
                    const checked = field.value?.includes(specialization);
                    return (
                      <label
                        key={specialization}
                        htmlFor={`specialization-${specialization}`}
                        className="flex cursor-pointer items-center gap-2 text-sm"
                      >
                        <Checkbox
                          id={`specialization-${specialization}`}
                          checked={checked}
                          onCheckedChange={() =>
                            field.onChange(
                              toggleArrayValue(field.value, specialization),
                            )
                          }
                        />
                        <span>{specialization}</span>
                      </label>
                    );
                  })}
                </div>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="serviceModes"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm text-gray-600">
                  Service modes
                </FormLabel>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {serviceModeOptions.map((mode) => {
                    const checked = field.value?.includes(mode);
                    return (
                      <label
                        key={mode}
                        htmlFor={`serviceMode-${mode}`}
                        className="flex cursor-pointer items-center gap-2 text-sm"
                      >
                        <Checkbox
                          id={`serviceMode-${mode}`}
                          checked={checked}
                          onCheckedChange={() =>
                            field.onChange(toggleArrayValue(field.value, mode))
                          }
                        />
                        <span>{mode}</span>
                      </label>
                    );
                  })}
                </div>
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
                  Budget preference
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
                    {priceRangeOptions.map((range) => (
                      <SelectItem key={range} value={range}>
                        {range}
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
            name="availability"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm text-gray-600">
                  Available days
                </FormLabel>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {DAYS_OF_WEEK.map((day) => {
                    const checked = field.value?.includes(day);
                    return (
                      <label
                        key={day}
                        htmlFor={`availability-${day}`}
                        className="flex cursor-pointer items-center gap-2 text-sm"
                      >
                        <Checkbox
                          id={`availability-${day}`}
                          checked={checked}
                          onCheckedChange={() =>
                            field.onChange(toggleArrayValue(field.value, day))
                          }
                        />
                        <span>{day}</span>
                      </label>
                    );
                  })}
                </div>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />

          <Button type="submit" className="mt-2 h-10 w-full">
            Find Language Services
          </Button>
        </form>
      </Form>
    </div>
  );
};