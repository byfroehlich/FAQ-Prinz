import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import CRMAnleitung from "./CRM_Bedienungsanleitung";
import Kuendigungsformulare from "./Kuendigungsformulare";

const NAV = [
  { id: "faq", label: "FAQ / CRM" },
  { id: "kuendigung", label: "Kündigungsformulare" },
];

function App() {
  const [view, setView] = useState("faq");

  return (
    <>
      <nav
        className="no-print"
        style={{
          display: "flex",
          gap: 4,
          padding: "8px 16px",
          background: "#0f172a",
          position: "sticky",
          top: 0,
          zIndex: 100,
        }}
      >
        {NAV.map((n) => (
          <button
            key={n.id}
            onClick={() => setView(n.id)}
            style={{
              padding: "6px 16px",
              borderRadius: 6,
              border: "none",
              cursor: "pointer",
              fontSize: 13,
              fontWeight: view === n.id ? 700 : 400,
              background: view === n.id ? "#3b82f6" : "transparent",
              color: view === n.id ? "#fff" : "#94a3b8",
              fontFamily: "system-ui, sans-serif",
            }}
          >
            {n.label}
          </button>
        ))}
      </nav>

      {view === "faq" ? <CRMAnleitung /> : <Kuendigungsformulare />}
    </>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
