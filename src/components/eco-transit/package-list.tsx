import React, { useEffect, useState } from "react";
import { Calendar, CheckCircle2 } from "lucide-react";
import { Badge } from "~/components/ui/badge";
import { EcoTransitBook } from "~/components/eco-transit/booking/eco-transit-book";

interface DistanceMatrixResponse {
  rows?: Array<{
    elements?: Array<{
      distance?: {
        value: number;
      };
    }>;
  }>;
}

export const EcoTransitPackage = ({
  option,
  pickupLocation = "",
  dropOffLocation = "",
  numberOfPassengers = 1,
}: {
  option: EcoTransitOptionProps;
  pickupLocation?: string;
  dropOffLocation?: string;
  numberOfPassengers?: number;
}) => {
  const [distance, setDistance] = useState<number | null>(null);
  const [calculatedPrice, setCalculatedPrice] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDistance = async () => {
      if (!pickupLocation || !dropOffLocation) {
        setDistance(null);
        setCalculatedPrice(null);
        return;
      }
      setLoading(true);
      setError(null);
      try {
        const apiKey = "6oIDQjy8gxak7O7gGun4rE5T12oMNWiunzVuZKN7t2Jzzn4GoRAbOBsNqtp4vqmp";
        const url = `https://api.distancematrix.ai/maps/api/distancematrix/json?origins=${encodeURIComponent(
          pickupLocation
        )}&destinations=${encodeURIComponent(dropOffLocation)}&key=${apiKey}`;
        const res = await fetch(url);
        const data = (await res.json()) as DistanceMatrixResponse;
        const meters = data.rows?.[0]?.elements?.[0]?.distance?.value ?? 0;
        const km = meters / 1000;
        setDistance(km);
        // Calculate price
        const price = option.fee * km * numberOfPassengers;
        setCalculatedPrice(price);
      } catch (_err) {
        console.log(_err)
        setError("Failed to fetch distance");
        setDistance(null);
        setCalculatedPrice(null);
      } finally {
        setLoading(false);
      }
    };
    void fetchDistance();
  }, [pickupLocation, dropOffLocation, option.fee, numberOfPassengers]);

  return (
    <div className="rounded-lg bg-white p-6 shadow-md transition-all duration-300 hover:shadow-lg">
      <div className="flex flex-col gap-6 lg:flex-row">
        <div className="flex-1">
          <div className="mb-4 flex items-start justify-between">
            <div>
              <h3 className="font-heading text-xl font-semibold text-secondary">{option.title}</h3>
              <p className="font-text text-sm text-gray-500">{option.operator}</p>
            </div>
            <Badge className="bg-primary/10 text-primary">{option.duration}</Badge>
          </div>
          <p className="mb-6 text-gray-600">{option.description}</p>
          <div className="grid gap-4">
            <p className="font-heading text-lg text-secondary">Features</p>
            {option.features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-secondary" />
                <span className="text-sm text-gray-600">{feature}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-between rounded-lg bg-gray-50 p-4 lg:w-64">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Price:</span>
              <span className="text-xl font-semibold text-primary">
                {loading ? (
                  <span>Calculating...</span>
                ) : error ? (
                  <span className="text-red-500">Error</span>
                ) : calculatedPrice !== null ? (
                  `$${calculatedPrice.toLocaleString(undefined, { maximumFractionDigits: 2 })}`
                ) : (
                  `$${option.fee.toLocaleString()}`
                )}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-gray-400" />
              <span className="text-sm text-gray-600">
                Updated: {new Date(option.updatedAt).toLocaleDateString()}
              </span>
            </div>
            {distance !== null && !loading && !error && (
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-500">Distance:</span>
                <span className="text-xs font-medium">{distance.toFixed(2)} km</span>
              </div>
            )}
          </div>
          <EcoTransitBook option={option} />
        </div>
      </div>
    </div>
  );
};