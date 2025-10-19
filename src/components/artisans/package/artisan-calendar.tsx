"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "~/components/ui/button";
import dayjs, { type Dayjs } from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
import weekday from "dayjs/plugin/weekday";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
import { usePackage } from "~/hooks/use-artisan";
import { useRouter, useSearchParams } from "next/navigation";
import { api } from "~/trpc/react";

dayjs.extend(isBetween);
dayjs.extend(weekday);
dayjs.extend(isSameOrBefore);
dayjs.extend(isSameOrAfter);

interface CalendarDay {
  date: Dayjs;
  isCurrentMonth: boolean;
  isDisabled: boolean;
}
const weekDays: readonly string[] = [
  "Su",
  "Mo",
  "Tu",
  "We",
  "Th",
  "Fr",
  "Sa",
] as const;

export const ArtisanCalendar = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [currentDate, setCurrentDate] = useState<Dayjs>(dayjs());
  const { artisanPackage, setPackage } = usePackage();
  
  const artisanId = searchParams.get("artisanId");
  
  // Debug logging
  console.log("ArtisanCalendar Debug:", {
    artisanPackage,
    artisanId,
    hasPackage: !!artisanPackage.id,
    duration: artisanPackage.duration
  });
  
  // Fetch booked dates for this artisan
  const { data: bookedDates = [], error: bookedDatesError, isLoading: bookedDatesLoading } = api.artisan.getArtisanBookedDates.useQuery(
    { artisanId: artisanId ?? "" },
    { enabled: !!artisanId }
  );

  // Debug logging for booked dates
  console.log("Booked dates debug:", {
    artisanId,
    bookedDates,
    bookedDatesError,
    bookedDatesLoading
  });

  // Check if a date is booked
  const isDateBooked = (date: Dayjs): boolean => {
    return bookedDates.some(booked => {
      const startDate = dayjs(booked.startDate);
      const endDate = dayjs(booked.endDate);
      return date.isBetween(startDate, endDate, "day", "[]");
    });
  };

  // Get the reason why a date is disabled
  const getDateDisabledReason = (date: Dayjs): string => {
    if (date.isBefore(dayjs(), "day")) {
      return "Past date";
    }
    if (isDateBooked(date)) {
      return "Already booked";
    }
    const endDateForDuration = date.add((artisanPackage.duration || 1) - 1, "day");
    if (!isDateRangeAvailable(date, endDateForDuration)) {
      return "Duration not available";
    }
    return "";
  };

  // Check if a date range is available (not overlapping with any booked dates)
  const isDateRangeAvailable = (startDate: Dayjs, endDate: Dayjs): boolean => {
    let currentDate = startDate;
    while (currentDate.isSameOrBefore(endDate, "day")) {
      if (isDateBooked(currentDate)) {
        console.log("Date range not available - booked date found:", currentDate.format("YYYY-MM-DD"));
        return false;
      }
      currentDate = currentDate.add(1, "day");
    }
    console.log("Date range available:", startDate.format("YYYY-MM-DD"), "to", endDate.format("YYYY-MM-DD"));
    return true;
  };

  const generateCalendarDays = (date: Dayjs): CalendarDay[] => {
    const firstDayOfMonth = date.startOf("month");
    const lastDayOfMonth = date.endOf("month");
    const startDay = firstDayOfMonth.day();
    const daysInMonth = date.daysInMonth();
    const currentDate = dayjs();
    const days: CalendarDay[] = [];
    // Previous month's days
    for (let i = 0; i < startDay; i++) {
      const prevDate = firstDayOfMonth.subtract(startDay - i, "day");
      days.push({
        date: prevDate,
        isCurrentMonth: false,
        isDisabled: true, // Always disable previous month's days
      });
    }

    // Current month's days
    for (let i = 1; i <= daysInMonth; i++) {
      const currentDayDate = firstDayOfMonth.add(i - 1, "day");
      
      // Calculate the end date for the package duration
      const endDateForDuration = currentDayDate.add((artisanPackage.duration || 1) - 1, "day");
      
      // Disable if:
      // 1. Date is before today
      // 2. Date is booked
      // 3. The full duration period is not available
      const isDisabled = currentDayDate.isBefore(currentDate, "day") || 
                        isDateBooked(currentDayDate) || 
                        !isDateRangeAvailable(currentDayDate, endDateForDuration);
      
      days.push({
        date: currentDayDate,
        isCurrentMonth: true,
        isDisabled: isDisabled,
      });
    }

    // Next month's days to complete the calendar grid
    const remainingDays = 42 - days.length; // 6 rows * 7 days = 42
    for (let i = 1; i <= remainingDays; i++) {
      const nextDate = lastDayOfMonth.add(i, "day");
      days.push({
        date: nextDate,
        isCurrentMonth: false,
        isDisabled: true,
      });
    }

    return days;
  };

  const handleDateClick = (day: CalendarDay) => {
    if (day.isDisabled) return;

    const startDate = day.date;
    const duration = artisanPackage.duration || 1;
    const endDate = startDate.add(duration - 1, "day");

    console.log("Date clicked:", {
      startDate: startDate.format("YYYY-MM-DD"),
      endDate: endDate.format("YYYY-MM-DD"),
      duration,
      isAvailable: isDateRangeAvailable(startDate, endDate)
    });

    // Check if the entire duration range is available
    if (isDateRangeAvailable(startDate, endDate)) {
      setPackage({
        startDate: startDate.format("YYYY-MM-DD"),
        endDate: endDate.format("YYYY-MM-DD"),
      });
    }
  };

  const isDateInRange = (date: Dayjs): boolean => {
    if (!artisanPackage.startDate || !artisanPackage.endDate) return false;
    const start = dayjs(artisanPackage.startDate);
    const end = dayjs(artisanPackage.endDate);
    return date.isBetween(start, end, "day", "[]");
  };

  const isDateSelected = (date: Dayjs): boolean => {
    return (
      date.format("YYYY-MM-DD") === artisanPackage.startDate ||
      date.format("YYYY-MM-DD") === artisanPackage.endDate
    );
  };

  const nextMonth = (): void => setCurrentDate(currentDate.add(1, "month"));
  const prevMonth = (): void =>
    setCurrentDate(currentDate.subtract(1, "month"));

  const renderCalendarMonth = (date: Dayjs) => (
    <div className="w-full">
      <div className="mb-4 text-center">
        <h2 className="font-heading text-base font-extrabold text-gray-900">
          {date.format("MMMM YYYY")}
        </h2>
        {artisanPackage.duration && artisanPackage.duration > 0 && (
          <p className="text-xs text-gray-500 mt-1">
            Select any date for {artisanPackage.duration} day{artisanPackage.duration > 1 ? 's' : ''} period
          </p>
        )}
      </div>
      <div className="grid grid-cols-7 gap-1">
        {weekDays.map((day) => (
          <div
            key={day}
            className="mb-1 text-center text-sm font-bold text-primary"
          >
            {day}
          </div>
        ))}

        {generateCalendarDays(date).map((day, index) => {
          const isInRange = isDateInRange(day.date);
          const isSelected = isDateSelected(day.date);
          const isBooked = isDateBooked(day.date);
          const disabledReason = getDateDisabledReason(day.date);

          return (
            <Button
              type="button"
              key={index}
              onClick={() => handleDateClick(day)}
              disabled={day.isDisabled}
              variant={isSelected || isInRange ? "default" : "outline"}
              className={`h-[5rem] w-[5rem] relative ${
                day.isDisabled 
                  ? "opacity-50 cursor-not-allowed" 
                  : "hover:bg-primary/10"
              } ${
                isInRange 
                  ? "bg-primary text-primary-foreground" 
                  : ""
              } ${
                isBooked
                  ? "bg-red-100 text-red-600 border-red-300"
                  : ""
              }`}
              title={day.isDisabled ? disabledReason : ""}
            >
              <div className="flex flex-col items-center">
                <span className="text-sm font-medium">{day.date.date()}</span>
                {isSelected && (
                  <span className="text-xs opacity-75">Start</span>
                )}
                {isInRange && !isSelected && (
                  <span className="text-xs opacity-75">Part</span>
                )}
                {isBooked && (
                  <span className="text-xs text-red-600 font-bold">Booked</span>
                )}
              </div>
            </Button>
          );
        })}
      </div>
    </div>
  );

  // Don't render calendar if no package is selected
  if (!artisanPackage.id || !artisanPackage.duration) {
    return (
      <div className="mb-6 rounded-lg border border-amber-200 bg-amber-50 p-4">
        <p className="text-sm text-amber-800">
          Please select a learning package first to view available dates.
        </p>
        <div className="mt-2 text-xs text-amber-600">
          Debug: Package ID: {artisanPackage.id || 'none'}, Duration: {artisanPackage.duration || 'none'}
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Show booked dates summary */}
      {bookedDates.length > 0 && (
        <div className="mb-4 rounded-lg border border-amber-200 bg-amber-50 p-3">
          <p className="text-sm text-amber-800 font-medium">
            Booked Periods ({bookedDates.length}):
          </p>
          <div className="mt-2 space-y-1">
            {bookedDates.slice(0, 3).map((booking, index) => (
              <div key={index} className="text-xs text-amber-700">
                {dayjs(booking.startDate).format("MMM D")} - {dayjs(booking.endDate).format("MMM D, YYYY")}
              </div>
            ))}
            {bookedDates.length > 3 && (
              <div className="text-xs text-amber-600">
                +{bookedDates.length - 3} more periods...
              </div>
            )}
          </div>
        </div>
      )}

      {!artisanPackage.startDate && (
        <div className="mb-6 rounded-lg border border-blue-200 bg-blue-50 p-4">
          <p className="text-sm text-blue-800">
            Click on any available date to select your {artisanPackage.duration} day{artisanPackage.duration > 1 ? 's' : ''} period.
          </p>
          <div className="mt-3 flex flex-wrap gap-4 text-xs">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded border bg-white"></div>
              <span>Available</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded border bg-red-100 border-red-300"></div>
              <span>Booked</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded border bg-gray-100 opacity-50"></div>
              <span>Unavailable</span>
            </div>
          </div>
        </div>
      )}

      {artisanPackage.startDate && (
        <div className="mt-4 space-y-2 rounded-lg border bg-secondary/5 p-4">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Selected Period:</span>
            <span className="font-medium text-secondary">
              {artisanPackage.duration} Days
            </span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Start Date:</span>
            <span className="font-medium">
              {dayjs(artisanPackage.startDate).format("MMM D, YYYY")}
            </span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">End Date:</span>
            <span className="font-medium">
              {dayjs(artisanPackage.endDate).format("MMM D, YYYY")}
            </span>
          </div>
        </div>
      )}
      <div className="flex items-center justify-between">
        <Button
          variant="outline"
          size="icon"
          onClick={prevMonth}
          className="h-8 w-8"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={nextMonth}
          className="h-8 w-8"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
      <div className="grid grid-cols-2 gap-8">
        {renderCalendarMonth(currentDate)}
        {renderCalendarMonth(currentDate.add(1, "month"))}
      </div>
      <div>
        <Button
          type="button"
          disabled={
            artisanPackage.startDate == "" || artisanPackage.endDate == ""
          }
          onClick={() => {
            router.push("/artisan/booking");
          }}
        >
          Continue
        </Button>
      </div>
    </>
  );
};
