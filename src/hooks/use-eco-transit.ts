import { create } from "zustand";
import { persist } from "zustand/middleware";

type PackageStoreProps = {
  id: string;
  option: EcoTransitOptionProps | null;
  date: string;
};

type EcoTransitPackageStore = {
  ecoTransitPackage: PackageStoreProps;
  setPackage: (ecoTransitPackage: Partial<PackageStoreProps>) => void;
  setOption: (option: EcoTransitOptionProps) => void;
  clearPackage: () => void;
};

const initialValues: PackageStoreProps = {
  id: "",
  option: null,
  date: "",
};

export const useEcoTransit = create<EcoTransitPackageStore>()(
  persist(
    (set) => ({
      ecoTransitPackage: initialValues,
      setPackage: (ecoTransitPackage) =>
        set((state) => ({
          ecoTransitPackage: { ...state.ecoTransitPackage, ...ecoTransitPackage },
        })),
      setOption: (option) =>
        set((state) => ({
          ecoTransitPackage: {
            ...state.ecoTransitPackage,
            id: option.optionId,
            option,
          },
        })),
      clearPackage: () => set({ ecoTransitPackage: initialValues }),
    }),
    { name: "ARTSAY-ECO-TRANSIT" }
  )
);