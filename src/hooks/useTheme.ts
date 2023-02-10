import { create } from "zustand";
import { theme } from "@/themes/default";
import { Theme } from "@/themes/types";

export const useTheme = create<ThemeState>((set) => ({
  theme: theme,
  setTheme: (theme: Theme) => set({ theme }),
}));

type ThemeState = {
  theme: Theme;
  setTheme: (t: Theme) => void;
};
