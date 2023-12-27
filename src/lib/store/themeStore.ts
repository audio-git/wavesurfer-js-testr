import { create } from "zustand";
import { persist } from "zustand/middleware";

type Theme = "dark" | "light";

interface ThemeState {
  theme: Theme;
  followOS: boolean;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      theme: "light",
      followOS: false,
      toggleTheme: () =>
        set((prev) => ({ theme: prev.theme === "dark" ? "light" : "dark" })),
      setTheme: (theme) => set(() => ({ theme })),
    }),
    { name: "theme-storage" }
  )
);
