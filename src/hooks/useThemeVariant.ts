import { create } from "zustand";

export const useThemeVariant = create<ThemeVariantState>((set) => ({
  variant: "light",
  setLightVariant: () => set(() => ({ variant: "light" })),
  setDarkVariant: () => set(() => ({ variant: "dark" })),
}));

type ThemeVariantState = {
  variant: "light" | "dark";
  setLightVariant: () => void;
  setDarkVariant: () => void;
};
