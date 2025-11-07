"use client";

import { api } from "~/trpc/react";
import { useMemo } from "react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { Card, CardContent } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import {
  MapPin,
  Utensils,
  Package,
} from "lucide-react";
import dayjs from "dayjs";
import type { RestaurantProps } from "~/types";

const getPriceRangeSymbol = (priceRange: string) => {
  switch (priceRange) {
    case "$":
      return "Inexpensive";
    case "$$":
      return "Moderate";
    case "$$$":
      return "Expensive";
    case "$$$$":
      return "Luxury";
    default:
      return priceRange; 
  }
};

export const RestaurantList = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const searchFilter = searchParams.get("search");
  const cuisineFilter = searchParams.get("cuisine");
  const priceRangeFilter = searchParams.get("priceRange");
  const locationFilter = searchParams.get("location");

  const [restaurants] = api.dining.getAllRestaurants.useSuspenseQuery();

  const filteredRestaurants = useMemo(() => {
    if (
      !searchFilter &&
      !cuisineFilter &&
      !priceRangeFilter &&
      !locationFilter
    ) {
      return restaurants;
    }

    return restaurants.filter((restaurant: RestaurantProps) => {
      if (
        searchFilter &&
        !(
          restaurant.name.toLowerCase().includes(searchFilter.toLowerCase()) ||
          restaurant.description.toLowerCase().includes(searchFilter.toLowerCase())
        )
      ) {
        return false;
      }

      if (cuisineFilter && !restaurant.cuisine.includes(cuisineFilter)) {
        return false;
      }

      if (priceRangeFilter && restaurant.priceRange !== priceRangeFilter) {
        return false;
      }

      if (
        locationFilter &&
        !restaurant.location.toLowerCase().includes(locationFilter.toLowerCase())
      ) {
        return false;
      }

      return true;
    });
  }, [
    restaurants,
    searchFilter,
    cuisineFilter,
    priceRangeFilter,
    locationFilter,
  ]);

  return (
    <div className="px-2 sm:px-4 md:px-6 py-4 sm:py-6 md:py-8">
      {((searchFilter ?? false) || (cuisineFilter ?? false) || (priceRangeFilter ?? false) || locationFilter) && (
        <div className="mb-4 sm:mb-6 flex flex-wrap gap-2">
          <span className="text-xs sm:text-sm font-medium">Active filters:</span>
          {searchFilter && (
            <Badge variant="secondary" className="text-xs">Search: {searchFilter}</Badge>
          )}
          {cuisineFilter && (
            <Badge variant="secondary" className="text-xs">Cuisine: {cuisineFilter}</Badge>
          )}
          {priceRangeFilter && (
            <Badge variant="secondary" className="text-xs">Price: {getPriceRangeSymbol(priceRangeFilter)}</Badge>
          )}
          {locationFilter && (
            <Badge variant="secondary" className="text-xs">Location: {locationFilter}</Badge>
          )}
        </div>
      )}

      <div className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredRestaurants.map((restaurant: RestaurantProps, index: number) => (
          <Card
            key={restaurant.restaurantId ?? index}
            className="group cursor-pointer overflow-hidden bg-white transition-all duration-300 hover:shadow-xl"
            onClick={() => router.push(`/dining/profile?restaurantId=${restaurant.restaurantId}`)}
          >
            <div className="relative">
              <div className="relative h-40 sm:h-48 md:h-56 overflow-hidden">
                <Image
                  src={restaurant.image || '/placeholder.png'}
                  alt={restaurant.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
              
              <div className="absolute bottom-2 sm:bottom-3 right-2 sm:right-3">
                <Badge variant="outline" className="bg-white/90 font-mono text-[10px] sm:text-xs text-gray-800">
                  {getPriceRangeSymbol(restaurant.priceRange)}
                </Badge>
              </div>
            </div>

            <CardContent className="p-3 sm:p-4">
              <div className="mb-2 sm:mb-3 flex items-center justify-between gap-2">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 line-clamp-1">{restaurant.name}</h3>
                <Badge variant="outline" className="text-[10px] sm:text-xs font-normal flex-shrink-0">
                  {dayjs(restaurant.createdAt).format('MMM YYYY')}
                </Badge>
              </div>
              
              <p className="mb-2 sm:mb-3 line-clamp-2 min-h-[2rem] sm:min-h-[2.5rem] text-xs sm:text-sm text-gray-600">
                {restaurant.description}
              </p>
              
              <div className="mb-2 sm:mb-3 flex flex-wrap gap-1">
                {restaurant.cuisine?.slice(0, 3).map((cuisineItem, i) => (
                  <Badge key={i} variant="secondary" className="text-[10px] sm:text-xs">
                    <Utensils className="mr-1 h-2.5 w-2.5 sm:h-3 sm:w-3" />
                    {cuisineItem}
                  </Badge>
                ))}
                {restaurant.cuisine?.length > 3 && (
                  <Badge variant="secondary" className="text-[10px] sm:text-xs">
                    +{restaurant.cuisine.length - 3} more
                  </Badge>
                )}
              </div>
              
              <div className="flex items-center text-[10px] sm:text-xs text-gray-600">
                <MapPin className="mr-1.5 sm:mr-2 h-2.5 w-2.5 sm:h-3 sm:w-3 flex-shrink-0 text-gray-400" />
                <span className="line-clamp-1">{restaurant.location}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      {filteredRestaurants.length === 0 && (
        <div className="mt-6 sm:mt-8 flex flex-col items-center justify-center rounded-lg border border-dashed border-gray-300 p-6 sm:p-8 text-center">
          <Package className="mb-3 sm:mb-4 h-8 w-8 sm:h-12 sm:w-12 text-gray-400" />
          <h3 className="mb-2 text-base sm:text-lg font-medium text-gray-900">No restaurants found</h3>
          <p className="text-sm sm:text-base text-gray-500">Try adjusting your search or filter criteria</p>
        </div>
      )}
    </div>
  );
};