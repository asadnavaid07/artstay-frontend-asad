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

type ShopFilterOptions = {
  productCategories: string[];
  handmadeOptions: string[];
  locations: {
    cities: string[];
    states: string[];
    countries: string[];
  };
};

const DEFAULT_CATEGORIES = [
  "Pashmina & Woolen Products",
  "Embroidery & Textiles",
  "Papier-Mâché Artworks",
  "Wood Carving & Furniture",
  "Copperware & Metal Engraving",
  "Pottery & Ceramics",
  "Wickerwork & Basketry",
  "Khatamband & Woodwork",
  "Handmade Jewelry",
  "Leather Goods",
];

const DEFAULT_HANDMADE_OPTIONS = ["Yes", "No", "Mixed"] as const;
const DEFAULT_LOCATIONS = ["Srinagar", "Gulmarg", "Pahalgam"];

const formSchema = z.object({
  search: z.string().optional(),
  location: z.string().optional(),
  category: z.string().optional(),
  handmade: z.string().optional(),
  giCertified: z.boolean().default(false),
});

export const BusinessForm = () => {
  const router = useRouter();
  const { toast } = useToast();

  const [options, setOptions] = useState<ShopFilterOptions>({
    productCategories: [],
    handmadeOptions: [],
    locations: {
      cities: [],
      states: [],
      countries: [],
    },
  });
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      search: "",
      location: "",
      category: "",
      handmade: "",
      giCertified: false,
    },
  });

  useEffect(() => {
    const fetchFilterOptions = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/shop/filters`,
        );

        if (response.data?.status === "success") {
          const payload = response.data.data ?? {};
          setOptions({
            productCategories: Array.isArray(payload.productCategories)
              ? payload.productCategories
              : [],
            handmadeOptions: Array.isArray(payload.handmadeOptions)
              ? payload.handmadeOptions
              : [],
            locations: {
              cities: payload.locations?.cities ?? [],
              states: payload.locations?.states ?? [],
              countries: payload.locations?.countries ?? [],
            },
          });
        }
      } catch (error) {
        console.error("Failed to load shop filters", error);
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

  const categoryOptions = useMemo(() => {
    if (options.productCategories.length > 0) {
      return options.productCategories;
    }
    return [...DEFAULT_CATEGORIES];
  }, [options.productCategories]);

  const handmadeOptions = useMemo(() => {
    if (options.handmadeOptions.length > 0) {
      return options.handmadeOptions;
    }
    return [...DEFAULT_HANDMADE_OPTIONS];
  }, [options.handmadeOptions]);

  const locationSuggestions = useMemo(() => {
    const set = new Set<string>();
    options.locations.cities.forEach((value: string) => {
      if (value && value !== "none") set.add(value);
    });
    options.locations.states.forEach((value: string) => {
      if (value && value !== "none") set.add(value);
    });
    options.locations.countries.forEach((value: string) => {
      if (value && value !== "none") set.add(value);
    });

    if (set.size === 0) {
      return [...DEFAULT_LOCATIONS];
    }

    return Array.from(set).sort((a, b) => a.localeCompare(b));
  }, [options.locations]);

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    try {
      const params = new URLSearchParams();

      if (data.search && data.search.trim().length > 0) {
        params.set("search", data.search.trim());
      }

      if (data.category && data.category !== "__any" && data.category.trim().length > 0) {
        params.set("category", data.category.trim());
      }

      if (data.handmade && data.handmade !== "__any" && data.handmade.trim().length > 0) {
        params.set("handmade", data.handmade.trim());
      }

      if (data.giCertified) {
        params.set("giCertified", "true");
      }

      if (data.location && data.location.trim().length > 0) {
        params.set("location", data.location.trim());
      }

      const queryString = params.toString();
      const destination =
        queryString.length > 0 ? `/shop?${queryString}` : "/shop";
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
          Find an ArtStay Affiliated Craft Store
          <br />
          <span className="text-sm italic">
            Discover Kashmiri craftsmanship curated with trust
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
            name="search"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm text-gray-600">
                  Search by shop or product
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="e.g. Pashmina, artisan name, specialty..."
                    className="h-10"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm text-gray-600">
                  Craft category
                </FormLabel>
                <Select
                  value={field.value || undefined}
                  onValueChange={(value) =>
                    field.onChange(value === "__any" ? "" : value)
                  }
                  disabled={isLoading}
                >
                  <FormControl>
                    <SelectTrigger className="h-10">
                      <SelectValue placeholder="– Select category –" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="__any">Any category</SelectItem>
                    {categoryOptions.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
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
            name="handmade"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm text-gray-600">
                  Product type
                </FormLabel>
                <Select
                  value={field.value || undefined}
                  onValueChange={(value) =>
                    field.onChange(value === "__any" ? "" : value)
                  }
                  disabled={isLoading}
                >
                  <FormControl>
                    <SelectTrigger className="h-10">
                      <SelectValue placeholder="– Select product type –" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="__any">Any product type</SelectItem>
                    {handmadeOptions.map((option) => (
                      <SelectItem key={option} value={option}>
                        {option === "Yes"
                          ? "Handmade only"
                          : option === "No"
                            ? "Not handmade"
                            : "Mixed production"}
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
            name="giCertified"
            render={({ field }) => (
              <FormItem className="flex items-center gap-2 rounded-lg border border-dashed border-primary/40 p-3">
                <FormControl>
                  <Checkbox
                    id="giCertified"
                    checked={field.value}
                    onCheckedChange={(checked) => field.onChange(!!checked)}
                  />
                </FormControl>
                <div className="space-y-1">
                  <FormLabel
                    htmlFor="giCertified"
                    className="text-sm font-medium text-gray-700"
                  >
                    Show GI-certified shops only
                  </FormLabel>
                  <p className="text-xs text-gray-500">
                    Highlight businesses that hold Geographical Indication
                    certification.
                  </p>
                </div>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm text-gray-600">
                  Preferred location
                </FormLabel>
                <FormControl>
                  <>
                    <Input
                      list="shop-location-suggestions"
                      placeholder="Start typing a city, state or country..."
                      className="h-10"
                      {...field}
                    />
                    <datalist id="shop-location-suggestions">
                      {locationSuggestions.map((location) => (
                        <option key={location} value={location} />
                      ))}
                    </datalist>
                  </>
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />

          <Button type="submit" className="mt-2 h-10 w-full">
            Find Shops
          </Button>
        </form>
      </Form>
    </div>
  );
};