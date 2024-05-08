import { ReactNode, useEffect } from "react";
import i18next from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";
import english from "./en/translations.json";
import russian from "./ru/translations.json";
import useUIStore from "../../shared/ui/ui.modal";

i18next.use(initReactI18next).init({
  lng: "en", // if you're using a language detector, do not define the lng option
  debug: true,
  resources: {
    en: {
      translation: english,
    },
    ru: {
      translation: russian,
    },
  },
  // if you see an error like: "Argument of type 'DefaultTFuncReturn' is not assignable to parameter of type xyz"
  // set returnNull to false (and also in the i18next.d.ts options)
  // returnNull: false,
});

const LanguageWrapper = ({ children }: { children: ReactNode }) => {
  const { i18n } = useTranslation();
  const language = useUIStore.use.language();

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  return children;
};

export default LanguageWrapper;
