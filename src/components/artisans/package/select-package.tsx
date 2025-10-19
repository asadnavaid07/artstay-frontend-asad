"use client";
import { useSearchParams, useRouter } from "next/navigation";
import { Button } from "~/components/ui/button";
import { usePackage } from "~/hooks/use-artisan";

type ComponentProps = {
  packageId: string;
  duration: number;
  title: string;
  amount: number;
};

export const SelectPackage = ({
  packageId,
  duration,
  amount,
  title,
}: ComponentProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { artisanPackage, setPackage } = usePackage();
  
  const handleSelectPackage = () => {
    // Set the package in the store
    setPackage({
      id: packageId,
      duration: duration,
      title: title,
      amount: amount,
      artisanId: searchParams.get("artisanId") ?? "",
    });
    
    // Update URL to switch to booking tab without page reload
    const artisanId = searchParams.get("artisanId");
    if (artisanId) {
      const newUrl = `/artisan/profile?artisanId=${artisanId}&tab=booking`;
      window.history.replaceState({}, '', newUrl);
      
      // Trigger a custom event to notify the tabs component
      window.dispatchEvent(new CustomEvent('tabChange', { detail: { tab: 'booking' } }));
    }
  };
  
  return (
    <Button
      type="button"
      variant={artisanPackage.id === packageId ? "default" : "outline"}
      onClick={handleSelectPackage}
    >
      {artisanPackage.id === packageId ? "Selected" : "Select Package"}
    </Button>
  );
};
