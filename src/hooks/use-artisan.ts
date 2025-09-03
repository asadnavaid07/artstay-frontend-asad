import { create } from "zustand";
import { persist } from "zustand/middleware";
import dayjs from "dayjs";

type PackageStoreProps = {
  id: string;
  artisanId: string;
  title: string;
  amount: number;
  duration: number;
  startDate: string;
  endDate: string;
  bookedDates: { startDate: string; endDate: string }[];
  accountId: string;
};

type PackageStore = {
  artisanPackage: PackageStoreProps;
  setPackage: (artisanPackage: Partial<PackageStoreProps>) => void;
  setClearPackage: () => void;
};

const initialValues: PackageStoreProps = {
  id: "",
  title: "",
  amount: 0,
  duration: 0,
  startDate: "",
  endDate: "",
  artisanId: "",
  bookedDates: [],
  accountId: "",
};

export const usePackage = create<PackageStore>()(
  persist(
    (set, get) => ({
      artisanPackage: initialValues,
      setPackage: ({ id, title, amount, duration, artisanId, bookedDates, accountId }) => {
        // Initialize startDate to today and endDate based on duration
        let startDate = dayjs();
        let endDate = duration ? startDate.add(duration - 1, "day") : startDate;

        // If bookedDates are provided and not empty, find the next available slot
        if (bookedDates && bookedDates.length > 0) {
          let hasOverlap = true;
          while (hasOverlap) {
            hasOverlap = false;
            for (const booked of bookedDates) {
              const bookedStart = dayjs(booked.startDate);
              const bookedEnd = dayjs(booked.endDate);
              // Check if the proposed range overlaps with any booked range
              if (
                startDate.isBetween(bookedStart, bookedEnd, "day", "[]") ||
                endDate.isBetween(bookedStart, bookedEnd, "day", "[]") ||
                bookedStart.isBetween(startDate, endDate, "day", "[]") ||
                bookedEnd.isBetween(startDate, endDate, "day", "[]")
              ) {
                hasOverlap = true;
                // Move startDate to the day after the booked endDate
                startDate = bookedEnd.add(1, "day");
                endDate = startDate.add(duration ?? 1 - 1, "day");
                break;
              }
            }
          }
        }

        set({
          artisanPackage: {
            ...get().artisanPackage,
            id: id ?? get().artisanPackage.id,
            title: title ?? get().artisanPackage.title,
            amount: amount ?? get().artisanPackage.amount,
            duration: duration ?? get().artisanPackage.duration,
            artisanId: artisanId ?? get().artisanPackage.artisanId,
            startDate: startDate.format("YYYY-MM-DD"),
            endDate: endDate.format("YYYY-MM-DD"),
            bookedDates: bookedDates ?? get().artisanPackage.bookedDates,
            accountId: accountId ?? get().artisanPackage.accountId,
          },
        });
      },
      setClearPackage: () => set({ artisanPackage: initialValues }),
    }),
    {
      name: "ARTYSAY-ARTISAN",
    }
  )
);