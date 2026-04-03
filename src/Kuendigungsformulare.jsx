import { useState } from "react";

const VERSICHERER = [
  "Allianz",
  "Alte Leipziger",
  "ARAG",
  "Auxilia",
  "AXA",
  "Barmenia",
  "Canada Life",
  "Continentale",
  "Cosmos Direkt",
  "DA Direkt",
  "Debeka",
  "DEVK",
  "Dialog",
  "ERGO",
  "Generali",
  "Gothaer",
  "Hanse Merkur",
  "HDI",
  "HUK-Coburg",
  "LVM",
  "Provinzial",
  "R+V",
  "Signal Iduna",
  "Sparkassen Versicherung",
  "Stuttgarter",
  "Zurich",
];

const TABS = [
  { id: "ordentlich", label: "Ordentliche Kündigung" },
  { id: "beitragserhöhung", label: "Sonderkündigung Beitragserhöhung" },
  { id: "schadensfall", label: "Sonderkündigung Schadensfall" },
  { id: "risikowegfall", label: "Kündigung Risikowegfall" },
];

const RISIKOWEGFALL_GRUENDE = [
  { value: "", label: "– Grund wählen –" },
  { value: "fahrzeug_verkauf", label: "Fahrzeug verkauft / abgemeldet" },
  { value: "fahrzeug_totalschaden", label: "Fahrzeug Totalschaden" },
  { value: "gebaeude_abriss", label: "Gebäude abgerissen / nicht mehr vorhanden" },
  { value: "tod", label: "Tod des Versicherungsnehmers" },
  { value: "umzug_ausland", label: "Dauerhafter Umzug ins Ausland" },
  { value: "gewerbe_aufgabe", label: "Gewerbeaufgabe / Betriebsschließung" },
  { value: "sonstiges", label: "Sonstiger Risikowegfall" },
];

const today = new Date().toLocaleDateString("de-DE");

const INIT = {
  absenderName: "",
  absenderStrasse: "",
  absenderOrt: "",
  datum: today,
  versichererName: "",
  versichererStrasse: "",
  versichererOrt: "",
  versicherungsart: "",
  versicherungsnummer: "",
  erhoehungsDatum: "",
  schadenDatum: "",
  risikowegfallGrund: "",
  risikowegfallDatum: "",
};

function Field({ label, value, onChange, placeholder, type = "text" }) {
  return (
    <div style={{ marginBottom: 10 }}>
      <label style={{ display: "block", fontSize: 11, fontWeight: 600, color: "#555", marginBottom: 3, textTransform: "uppercase", letterSpacing: "0.5px" }}>
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        style={{
          width: "100%",
          padding: "7px 10px",
          border: "1px solid #d0d0d0",
          borderRadius: 6,
          fontSize: 14,
          fontFamily: "inherit",
          boxSizing: "border-box",
          background: "#fff",
          outline: "none",
          transition: "border 0.15s",
        }}
        onFocus={(e) => (e.target.style.border = "1px solid #3b82f6")}
        onBlur={(e) => (e.target.style.border = "1px solid #d0d0d0")}
      />
    </div>
  );
}

function VersichererField({ value, onChange }) {
  const [frei, setFrei] = useState(false);
  const inputStyle = {
    width: "100%", padding: "7px 10px", border: "1px solid #d0d0d0",
    borderRadius: 6, fontSize: 13, fontFamily: "inherit",
    boxSizing: "border-box", background: "#fff", outline: "none",
  };
  return (
    <div style={{ marginBottom: 10 }}>
      <label style={{ display: "block", fontSize: 11, fontWeight: 600, color: "#555", marginBottom: 3, textTransform: "uppercase", letterSpacing: "0.5px" }}>
        Name des Versicherers
      </label>
      {frei ? (
        <div style={{ display: "flex", gap: 6 }}>
          <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Versicherer eingeben..."
            style={inputStyle}
            autoFocus
          />
          <button onClick={() => { setFrei(false); onChange(""); }}
            style={{ padding: "0 8px", border: "1px solid #d0d0d0", borderRadius: 6, background: "#334155", color: "#94a3b8", cursor: "pointer", fontSize: 11, whiteSpace: "nowrap" }}>
            ← Liste
          </button>
        </div>
      ) : (
        <select
          value={value}
          onChange={(e) => { if (e.target.value === "__frei__") { setFrei(true); onChange(""); } else { onChange(e.target.value); } }}
          style={{ ...inputStyle, cursor: "pointer" }}
        >
          <option value="">– Versicherer wählen –</option>
          {VERSICHERER.map((v) => <option key={v} value={v}>{v}</option>)}
          <option value="__frei__">✏️ Andere / frei eingeben...</option>
        </select>
      )}
    </div>
  );
}

function LetterPreview({ tab, form }) {
  const blank = (v, fb) => v.trim() || fb;

  const bodyText = () => {
    if (tab === "ordentlich") {
      return (
        <>
          Hiermit kündige ich meine oben genannte Versicherung fristgerecht{" "}
          <strong>zum nächstmöglichen Zeitpunkt</strong>.
        </>
      );
    }
    if (tab === "beitragserhöhung") {
      return (
        <>
          Hiermit kündige ich meine oben genannte Versicherung{" "}
          <strong>fristlos zum nächstmöglichen Zeitpunkt</strong>. Grund hierfür ist die mir
          mitgeteilte Beitragserhöhung
          {form.erhoehungsDatum ? ` zum ${form.erhoehungsDatum}` : ""}.{" "}
          Mein Sonderkündigungsrecht ergibt sich aus § 40 VVG.
        </>
      );
    }
    if (tab === "schadensfall") {
      return (
        <>
          Hiermit kündige ich meine oben genannte Versicherung gemäß{" "}
          <strong>§ 92 VVG fristlos</strong> nach Regulierung des Schadens
          {form.schadenDatum ? ` vom ${form.schadenDatum}` : ""}.
        </>
      );
    }
    // risikowegfall
    const grundLabel = RISIKOWEGFALL_GRUENDE.find((g) => g.value === form.risikowegfallGrund)?.label || "";
    const grundText = form.risikowegfallGrund && form.risikowegfallGrund !== ""
      ? ` Grund: ${grundLabel}${form.risikowegfallDatum ? ` (${form.risikowegfallDatum})` : ""}.`
      : "";
    return (
      <>
        Hiermit kündige ich meine oben genannte Versicherung gemäß{" "}
        <strong>§ 80 VVG</strong> aufgrund des <strong>vollständigen Wegfalls des versicherten Risikos</strong>
        {form.risikowegfallDatum ? ` zum ${form.risikowegfallDatum}` : ""} mit sofortiger Wirkung.{grundText}
      </>
    );
  };

  const p = { margin: "0 0 10px 0", lineHeight: 1.6, fontSize: 12 };
  const line = { borderBottom: "1px solid #aaa", display: "block", marginBottom: 2, minWidth: 160, height: 14 };

  return (
    <div
      className="letter-preview"
      style={{
        background: "#fff",
        width: "100%",
        maxWidth: 640,
        minHeight: 860,
        padding: "48px 56px",
        boxSizing: "border-box",
        fontFamily: "Times New Roman, serif",
        fontSize: 12,
        color: "#111",
        boxShadow: "0 2px 16px rgba(0,0,0,0.13)",
        borderRadius: 2,
        position: "relative",
      }}
    >
      {/* Header: Absender links, Datum rechts */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 32 }}>
        <div style={{ fontSize: 12, lineHeight: 1.8 }}>
          <div>{blank(form.absenderName, <span style={{ color: "#bbb" }}>Vor- und Nachname</span>)}</div>
          <div>{blank(form.absenderStrasse, <span style={{ color: "#bbb" }}>Straße und Hausnummer</span>)}</div>
          <div>{blank(form.absenderOrt, <span style={{ color: "#bbb" }}>PLZ Ort</span>)}</div>
        </div>
        <div style={{ fontSize: 12, textAlign: "right" }}>
          Missen, den {form.datum || today}
        </div>
      </div>

      {/* Empfänger */}
      <div style={{ marginBottom: 28, fontSize: 12, lineHeight: 1.8 }}>
        <div style={{ fontWeight: "bold" }}>{blank(form.versichererName, <span style={{ color: "#bbb" }}>Name des Versicherers</span>)}</div>
        <div>{blank(form.versichererStrasse, <span style={{ color: "#bbb" }}>Straße und Hausnummer</span>)}</div>
        <div>{blank(form.versichererOrt, <span style={{ color: "#bbb" }}>PLZ Ort</span>)}</div>
      </div>

      {/* Betreff */}
      <div style={{ marginBottom: 20 }}>
        <div style={{ fontWeight: "bold", fontSize: 12, marginBottom: 2 }}>
          Kündigung meiner {blank(form.versicherungsart, "_______________")} Versicherung
        </div>
        <div style={{ fontSize: 12 }}>
          <span style={{ fontWeight: "bold" }}>Versicherungsnummer:</span>{" "}
          {blank(form.versicherungsnummer, "_______________")}
        </div>
      </div>

      {/* Anrede */}
      <p style={p}>Sehr geehrte Damen und Herren,</p>

      {/* Body */}
      <p style={p}>{bodyText()}</p>

      <p style={p}>
        Bitte bestätigen Sie mir schriftlich den Erhalt dieser Kündigung sowie das
        Beendigungsdatum des Vertrages.
      </p>

      <p style={p}>
        Zudem widerrufe ich eine eventuell erteilte Einzugsermächtigung zum Zeitpunkt
        der Vertragsbeendigung.
      </p>

      {/* Vollmacht */}
      <p style={p}>Hiermit bevollmächtige ich das:</p>

      <p style={{ ...p, fontWeight: "bold", paddingLeft: 0 }}>
        Versicherungsbüro Prinz<br />
        Lußwiesen 2<br />
        87547 Missen
      </p>

      <p style={p}>
        Sämtliche vertragsbezogenen Informationen zu der oben genannten Versicherung
        bei Ihnen einzuholen.
      </p>

      <p style={{ ...p, marginBottom: 24 }}>
        Diese Vollmacht umfasst insbesondere Auskünfte zu Vertragsstatus, Laufzeiten,
        Kündigungsfristen sowie sämtliche vertragsrelevanten Daten.
      </p>

      <p style={{ ...p, marginBottom: 32 }}>Mit freundlichen Grüßen</p>

      {/* Unterschrift */}
      <div style={{ marginTop: 40 }}>
        <span style={line} />
        <div style={{ fontSize: 11, color: "#555" }}>
          {blank(form.absenderName, "Vor- und Nachname")}
        </div>
      </div>
    </div>
  );
}

export default function Kuendigungsformulare() {
  const [tab, setTab] = useState("ordentlich");
  const [form, setForm] = useState(INIT);

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const handlePrint = () => window.print();

  const s = {
    wrapper: {
      display: "flex",
      minHeight: "100vh",
      background: "#f3f4f6",
      fontFamily: "system-ui, -apple-system, sans-serif",
    },
    leftPanel: {
      width: 280,
      minWidth: 260,
      background: "#1e293b",
      padding: "24px 20px",
      boxSizing: "border-box",
      overflowY: "auto",
      flexShrink: 0,
    },
    rightPanel: {
      flex: 1,
      padding: 32,
      overflowY: "auto",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    sectionTitle: {
      color: "#94a3b8",
      fontSize: 10,
      fontWeight: 700,
      letterSpacing: "1px",
      textTransform: "uppercase",
      marginBottom: 10,
      marginTop: 20,
    },
    divider: {
      borderTop: "1px solid #334155",
      margin: "20px 0",
    },
  };

  return (
    <div style={s.wrapper}>
      {/* ─── LEFT: Formular ─── */}
      <div style={s.leftPanel} className="no-print">
        <div style={{ color: "#f1f5f9", fontWeight: 700, fontSize: 15, marginBottom: 4 }}>
          Kündigungsformular
        </div>
        <div style={{ color: "#64748b", fontSize: 11, marginBottom: 20 }}>
          Felder ausfüllen → Vorschau erscheint rechts
        </div>

        {/* Tabs */}
        <div style={{ marginBottom: 20 }}>
          {TABS.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              style={{
                display: "block",
                width: "100%",
                textAlign: "left",
                padding: "8px 12px",
                marginBottom: 4,
                borderRadius: 6,
                border: "none",
                cursor: "pointer",
                fontSize: 12,
                fontWeight: tab === t.id ? 700 : 400,
                background: tab === t.id ? "#3b82f6" : "#334155",
                color: tab === t.id ? "#fff" : "#94a3b8",
                transition: "all 0.15s",
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div style={s.divider} />

        {/* Absender */}
        <div style={s.sectionTitle}>Absender</div>
        <Field label="Name" value={form.absenderName} onChange={set("absenderName")} placeholder="Max Mustermann" />
        <Field label="Straße & Nr." value={form.absenderStrasse} onChange={set("absenderStrasse")} placeholder="Musterstraße 1" />
        <Field label="PLZ & Ort" value={form.absenderOrt} onChange={set("absenderOrt")} placeholder="87547 Missen" />
        <Field label="Datum" value={form.datum} onChange={set("datum")} placeholder={today} />

        <div style={s.divider} />

        {/* Versicherer */}
        <div style={s.sectionTitle}>Versicherer / Empfänger</div>
        <VersichererField value={form.versichererName} onChange={(v) => setForm((f) => ({ ...f, versichererName: v }))} />
        <Field label="Straße & Nr." value={form.versichererStrasse} onChange={set("versichererStrasse")} placeholder="Königinstraße 28" />
        <Field label="PLZ & Ort" value={form.versichererOrt} onChange={set("versichererOrt")} placeholder="80802 München" />

        <div style={s.divider} />

        {/* Vertrag */}
        <div style={s.sectionTitle}>Vertragsdaten</div>
        <Field label="Versicherungsart" value={form.versicherungsart} onChange={set("versicherungsart")} placeholder="z.B. Kfz-Haftpflicht" />
        <Field label="Versicherungsnummer" value={form.versicherungsnummer} onChange={set("versicherungsnummer")} placeholder="123456789" />

        {/* Tab-spezifische Felder */}
        {tab === "beitragserhöhung" && (
          <>
            <div style={s.divider} />
            <div style={s.sectionTitle}>Beitragserhöhung</div>
            <Field label="Datum der Erhöhung" value={form.erhoehungsDatum} onChange={set("erhoehungsDatum")} placeholder="01.01.2026" />
          </>
        )}
        {tab === "schadensfall" && (
          <>
            <div style={s.divider} />
            <div style={s.sectionTitle}>Schadensfall</div>
            <Field label="Datum des Schadens" value={form.schadenDatum} onChange={set("schadenDatum")} placeholder="15.03.2026" />
          </>
        )}
        {tab === "risikowegfall" && (
          <>
            <div style={s.divider} />
            <div style={s.sectionTitle}>Risikowegfall</div>
            <div style={{ marginBottom: 10 }}>
              <label style={{ display: "block", fontSize: 11, fontWeight: 600, color: "#555", marginBottom: 3, textTransform: "uppercase", letterSpacing: "0.5px" }}>
                Grund des Wegfalls
              </label>
              <select
                value={form.risikowegfallGrund}
                onChange={set("risikowegfallGrund")}
                style={{
                  width: "100%",
                  padding: "7px 10px",
                  border: "1px solid #d0d0d0",
                  borderRadius: 6,
                  fontSize: 13,
                  fontFamily: "inherit",
                  boxSizing: "border-box",
                  background: "#fff",
                  outline: "none",
                  cursor: "pointer",
                }}
              >
                {RISIKOWEGFALL_GRUENDE.map((g) => (
                  <option key={g.value} value={g.value}>{g.label}</option>
                ))}
              </select>
            </div>
            <Field label="Datum des Wegfalls" value={form.risikowegfallDatum} onChange={set("risikowegfallDatum")} placeholder="01.04.2026" />
          </>
        )}

        <div style={s.divider} />

        {/* Print Button */}
        <button
          onClick={handlePrint}
          style={{
            width: "100%",
            padding: "10px 0",
            background: "#16a34a",
            color: "#fff",
            border: "none",
            borderRadius: 8,
            fontSize: 13,
            fontWeight: 700,
            cursor: "pointer",
            letterSpacing: "0.3px",
          }}
          onMouseOver={(e) => (e.target.style.background = "#15803d")}
          onMouseOut={(e) => (e.target.style.background = "#16a34a")}
        >
          Drucken / Als PDF speichern
        </button>
        <div style={{ color: "#475569", fontSize: 10, marginTop: 6, textAlign: "center" }}>
          Browser-Dialog öffnet sich. „Als PDF speichern" wählen.
        </div>
      </div>

      {/* ─── RIGHT: Vorschau ─── */}
      <div style={s.rightPanel}>
        {/* Tab-Label */}
        <div className="no-print" style={{ marginBottom: 16, width: "100%", maxWidth: 640, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: 13, fontWeight: 600, color: "#374151" }}>
            {TABS.find((t) => t.id === tab)?.label}
          </span>
          <span style={{ fontSize: 11, color: "#9ca3af" }}>Vorschau</span>
        </div>

        <LetterPreview tab={tab} form={form} />

        <div className="no-print" style={{ marginTop: 16, fontSize: 11, color: "#9ca3af" }}>
          Felder links ausfüllen – der Brief aktualisiert sich automatisch
        </div>
      </div>
    </div>
  );
}
