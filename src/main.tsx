import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import LanguageWrapper from "./app/i18n/index.tsx";
import UIProvider from "./app/Mantine/index.tsx";
import Router from "./app/Router/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <UIProvider>
      <LanguageWrapper>
        <Router />
      </LanguageWrapper>
    </UIProvider>
  </React.StrictMode>,
);
