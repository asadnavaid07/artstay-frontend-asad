import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { SafariTourProps } from '~/types';

type PackageStoreProps = {
  id: string;
  tour: SafariTourProps | null;
  date: string;
}

type SafariPackageStore = {
  safariPackage: PackageStoreProps;
  setPackage: (safariPackage: Partial<PackageStoreProps>) => void;
  setTour: (tour: SafariTourProps) => void;
  clearPackage: () => void;
};

const initialValues: PackageStoreProps = {
  id: '',
  tour: null,
  date: ''
}

export const useSafari = create<SafariPackageStore>()(
  persist(
    (set) => ({
      safariPackage: initialValues,
      setPackage: (safariPackage) =>
        set((state) => ({
          safariPackage: { ...state.safariPackage, ...safariPackage },
        })),
      setTour: (tour) =>
        set(() => ({
          safariPackage: {
            id: tour.tourId,
            tour,
            date: "",
          },
        })),
      clearPackage: () => set({ safariPackage: initialValues })
    }),
    {
      name: 'ARTSAY-SAFARI',
    }
  )
);