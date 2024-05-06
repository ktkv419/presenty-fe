import { useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"
import { useTranslation } from "react-i18next"
import useUIStore from './shared/ui/ui.modal'

function App() {
  const { t } = useTranslation()
  const [count, setCount] = useState(0)
  const languageChange = () => useUIStore((state) => state.changeLanguage("ru"))

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>{t("title")}</h1>
      <div className="card">
        <button onClick={() => languageChange()}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
