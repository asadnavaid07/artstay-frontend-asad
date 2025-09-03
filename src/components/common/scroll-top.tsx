"use client";
import { ArrowBigUp } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "~/lib/utils";
import { Button } from "~/components/ui/button";

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", 
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <Button
      type="button"
      onClick={scrollToTop}
      className={cn(
        "fixed bottom-6 right-4 rounded-full bg-gradient-to-r from-primary to-secondary text-white shadow-2xl hover:scale-110 hover:rotate-12 transition-all duration-300 focus:ring-2 focus:ring-white z-[100000]",
        {
          "block": isVisible,
          "hidden": !isVisible,
        }
      )}
      aria-label="Scroll to top"
    >
      <ArrowBigUp className="h-6 w-6" />
    </Button>
  );
};
