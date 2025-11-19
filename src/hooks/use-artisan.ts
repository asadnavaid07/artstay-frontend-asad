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
    (set) => ({
      artisanPackage: initialValues,
      setPackage: (payload) => {
        set((state) => {
          const previous = state.artisanPackage;
          const hasPackageChanged =
            payload.id !== undefined && payload.id !== previous.id;

          const next: PackageStoreProps = {
            ...previous,
            ...payload,
          };

          if (hasPackageChanged) {
            next.startDate = "";
            next.endDate = "";
          }

          if (payload.startDate) {
            next.startDate = payload.startDate;
          }

          if (payload.duration !== undefined && !payload.startDate && next.startDate) {
            next.endDate = dayjs(next.startDate)
              .add(Math.max(payload.duration, 1) - 1, "day")
              .format("YYYY-MM-DD");
          }

          if (payload.startDate) {
            const duration = payload.duration ?? next.duration;
            if (duration > 0) {
              next.endDate = dayjs(payload.startDate)
                .add(duration - 1, "day")
                .format("YYYY-MM-DD");
            }
          }

          if (payload.endDate) {
            next.endDate = payload.endDate;
          }

          if (!next.startDate) {
            next.endDate = "";
          }

          return { artisanPackage: next };
        });
      },
      setClearPackage: () => set({ artisanPackage: initialValues }),
    }),
    {
      name: "ARTYSAY-ARTISAN",
    }
  )
);