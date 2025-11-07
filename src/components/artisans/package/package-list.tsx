import React from "react";
import { Card, CardContent } from "~/components/ui/card";
import { BookOpen, Calendar, Scroll, Clock, GraduationCap } from "lucide-react";
import dayjs from "dayjs";
import { SelectPackage } from "~/components/artisans/package/select-package";
import type { ArtisanPackageProps } from "~/types";

export const ArtisanPackage = ({
  packages,
}: {
  packages: ArtisanPackageProps[];
}) => {
  return (
    <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
      {packages.map((pkg) => (
        <Card
          key={pkg.packageId}
          className="group relative grid overflow-hidden transition-all hover:shadow-lg"
        >
          {/* Price Tag */}
          <div className="absolute right-0 top-4 sm:top-6 z-10">
            <div className="bg-primary px-2 sm:px-3 md:px-4 py-0.5 sm:py-1 text-xs sm:text-sm font-medium text-primary-foreground shadow-sm">
              ${pkg.price}
            </div>
          </div>

          <CardContent className="grid p-4 sm:p-5 md:p-6">
            {/* Package Header */}
            <div className="mb-4 sm:mb-5 md:mb-6">
              <div className="mb-1.5 sm:mb-2 flex items-center gap-1.5 sm:gap-2">
                <div className="rounded-full bg-primary/10 p-1.5 sm:p-2 flex-shrink-0">
                  <BookOpen className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-muted-foreground">
                  Learning Package
                </span>
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold tracking-tight break-words">
                {pkg.title}
              </h3>
            </div>

            {/* Duration */}
            <div className="mb-3 sm:mb-4 flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
              <Clock className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
              <span>Duration: {pkg.duration} Days</span>
            </div>

            {/* Overview */}
            <div className="mb-4 sm:mb-5 md:mb-6">
              <h4 className="mb-1.5 sm:mb-2 text-xs sm:text-sm font-medium text-primary">
                Overview
              </h4>
              <p className="text-xs sm:text-sm text-muted-foreground break-words">{pkg.experience}</p>
            </div>

            {/* Key Learning Points */}
            <div className="mb-4 sm:mb-5 md:mb-6 space-y-2 sm:space-y-3">
              <h4 className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-medium text-primary">
                <GraduationCap className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                Key Learning Points
              </h4>
              <ul className="space-y-1.5 sm:space-y-2">
                {pkg.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-1.5 sm:gap-2">
                    <div className="mt-1 h-1 w-1 sm:h-1.5 sm:w-1.5 rounded-full bg-primary/60 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-muted-foreground break-words">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Certifications */}
            <div className="mb-3 sm:mb-4 flex items-start gap-2">
              <Scroll className="h-3 w-3 sm:h-4 sm:w-4 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs sm:text-sm font-medium">Certifications</h4>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Scroll of Completion
                </p>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-4 sm:mt-5 md:mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0 border-t pt-3 sm:pt-4 text-[10px] sm:text-xs text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar className="h-2.5 w-2.5 sm:h-3 sm:w-3 flex-shrink-0" />
                <span className="break-words">
                  Updated {dayjs(pkg.updatedAt).format("MMM D, YYYY")}
                </span>
              </div>
              <div className="w-full sm:w-auto">
                <SelectPackage packageId={pkg.packageId} duration={pkg.duration} amount={pkg.price} title={pkg.title} />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
