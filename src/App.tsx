import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useTranslation } from "react-i18next";
import useUIStore from "./shared/ui/ui.modal";

function App() {
  const { t } = useTranslation();
  // const languageChange = () => useUIStore((state) => state.changeLanguage("ru"))

  useEffect(() => {
    document.title = t("title");
  }, []);

  return <></>;
}

export default App;
