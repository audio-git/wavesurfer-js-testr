import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Item {
  index: number;
  name: string;
}

interface TestState {
  value: Item[];
  add: (item: Item) => void;
  del: (index: number) => void;
}

export const useTestStore = create<TestState>()(
  persist(
    (set) => ({
      value: [
        { index: 1, name: "ABC" },
        { index: 2, name: "def" },
      ],
      add: (item) =>
        set((prevValue) => ({ value: prevValue.value.concat(item) })),
      del: (index) =>
        set((prev) => ({
          value: prev.value.filter((item) => item.index !== index),
        })),
    }),
    {
      name: "test-storage",
    }
  )
);
