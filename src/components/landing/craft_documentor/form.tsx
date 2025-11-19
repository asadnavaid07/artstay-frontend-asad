"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

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

type FilterOptions = {
  specializations: string[];
  craftFocusAreas: string[];
  languages: string[];
  locations: string[];
};

const stringFilterSchema = z
  .string()
  .min(1)
  .optional()
  .or(z.literal(""));

const formSchema = z.object({
  specialization: stringFilterSchema,
  craftFocusArea: stringFilterSchema,
  language: stringFilterSchema,
  location: stringFilterSchema,
});

export const BookCraftDocumentationSession = () => {
  const router = useRouter();
  const [options, setOptions] = useState<FilterOptions>({
    specializations: [],
    craftFocusAreas: [],
    languages: [],
    locations: [],
  });
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      specialization: "",
      craftFocusArea: "",
      language: "",
      location: "",
    },
  });

  useEffect(() => {
    const fetchOptions = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/documentor/filters`
        );
        if (!response.ok) {
          throw new Error("Failed to load documentor filter options");
        }
        const payload = await response.json();
        if (payload?.status === "success" && payload?.data) {
          setOptions({
            specializations: payload.data.specializations ?? [],
            craftFocusAreas: payload.data.craftFocusAreas ?? [],
            languages: payload.data.languages ?? [],
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

  const specializationItems = useMemo(
    () =>
      options.specializations.map((value) => ({
        value,
        label: value,
      })),
    [options.specializations],
  );

  const craftFocusItems = useMemo(
    () =>
      options.craftFocusAreas.map((value) => ({
        value,
        label: value,
      })),
    [options.craftFocusAreas],
  );

  const languageItems = useMemo(
    () =>
      options.languages.map((value) => ({
        value,
        label: value,
      })),
    [options.languages],
  );

  const locationItems = useMemo(
    () =>
      options.locations.map((value) => ({
        value,
        label: value,
      })),
    [options.locations],
  );

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    const params = new URLSearchParams();

    if (data.specialization) params.set("specialization", data.specialization);
    if (data.craftFocusArea) params.set("craftFocusArea", data.craftFocusArea);
    if (data.language) params.set("language", data.language);
    if (data.location) params.set("location", data.location);

    router.push(`/documentary?${params.toString()}`);
  };

  return (
    <div className="z-[100] mx-auto w-full max-w-md rounded-lg bg-white shadow-lg">
      <div className="rounded-t-lg bg-primary p-4 text-white border-2 border-white">
        <h2 className="text-center text-xl font-bold">
          Experience Kashmir Through the Lens <br />
          <span className="text-sm italic">
            Find documentors who can tell your craft story
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
            name="specialization"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm text-gray-600">
                  Specialization
                </FormLabel>
                <Select
                  value={field.value}
                  onValueChange={field.onChange}
                  disabled={isLoading}
                >
                  <FormControl>
                    <SelectTrigger className="h-10">
                      <SelectValue placeholder="– Select Specialization –" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {specializationItems.map((item) => (
                      <SelectItem key={item.value} value={item.value}>
                        {item.label}
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
            name="craftFocusArea"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm text-gray-600">
                  Craft Focus Area
                </FormLabel>
                <Select
                  value={field.value}
                  onValueChange={field.onChange}
                  disabled={isLoading}
                >
                  <FormControl>
                    <SelectTrigger className="h-10">
                      <SelectValue placeholder="– Select Focus Area –" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {craftFocusItems.map((item) => (
                      <SelectItem key={item.value} value={item.value}>
                        {item.label}
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
                    {languageItems.map((item) => (
                      <SelectItem key={item.value} value={item.value}>
                        {item.label}
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
                    {locationItems.map((item) => (
                      <SelectItem key={item.value} value={item.value}>
                        {item.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />

          <Button type="submit" className="h-10 w-full">
            FIND DOCUMENTOR
          </Button>
        </form>
      </Form>
    </div>
  );
};

