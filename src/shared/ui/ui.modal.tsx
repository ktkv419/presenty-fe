import { create } from "zustand";
import { TLanguages } from "../../app/i18n/i18n.types";
import createSelectors from "../zustand/zustand.selectors";

type TUIState = {
  darkMode: boolean;
  language: TLanguages;
  toggleDarkMode: () => void;
  changeLanguage: (language: TLanguages) => void;
};

const useUIStoreBase = create<TUIState>()((set) => ({
  darkMode: true,
  language: "en",
  toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
  changeLanguage: (language: TLanguages) => set(() => ({ language })),
}));

const useUIStore = createSelectors(useUIStoreBase);

export default useUIStore;
