import React from "react"
import ReactDOM from "react-dom/client"
import "./index.scss"
import LanguageWrapper from "./app/i18n/index.tsx"
import Router from "./app/Router/index.tsx"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <LanguageWrapper>
      <Router />
    </LanguageWrapper>
  </React.StrictMode>
)
