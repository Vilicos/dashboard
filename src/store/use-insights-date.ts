import { create } from "zustand";

type DateOption = "today" | "yesterday" | "lastWeek" | "lastMonth" | "lastQuarter";

type UseInsightDate = {
  date: DateOption;
  setDate: (newDate: DateOption) => void;
};

export const useInsightDate = create<UseInsightDate>((set) => ({
  date: "lastMonth",
  setDate: (newDate) => set(() => ({ date: newDate })),
}));
