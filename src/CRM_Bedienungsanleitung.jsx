import { useState, useEffect } from "react";
import { teamInitials, teamEmails, categories } from "./data";

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handle = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handle);
    return () => window.removeEventListener("resize", handle);
  }, []);
  return width;
}

// ============================================================
export default function CRMAnleitung() {
  const [activeCategory, setActiveCategory] = useState("vertrieb");
  const [activeSection, setActiveSection] = useState("v_ziel");
  const [expandedItems, setExpandedItems] = useState({});
  const [searchQuery, setSearchQuery] = useState("");
  const [searchFocused, setSearchFocused] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const width = useWindowWidth();
  const isMobile = width < 768;

  const toggleItem = (key) => setExpandedItems((p) => ({ ...p, [key]: !p[key] }));

  const cat = categories.find((c) => c.id === activeCategory);
  const sec = cat?.sections.find((s) => s.id === activeSection);

  const totalAll = categories.reduce((a, c) => a + c.sections.reduce((b, s) => b + s.items.length, 0), 0);
  const filledAll = categories.reduce((a, c) => a + c.sections.reduce((b, s) => b + s.items.filter((i) => i.content).length, 0), 0);
  const progress = Math.round((filledAll / totalAll) * 100);

  const getCatStats = (c) => {
    let total = 0, filled = 0;
    c.sections.forEach((s) => s.items.forEach((i) => { total++; if (i.content) filled++; }));
    return { total, filled };
  };

  const getSecStats = (s) => ({
    total: s.items.length,
    filled: s.items.filter((i) => i.content).length,
  });

  // Search
  const searchResults = searchQuery.trim().length >= 2 ? (() => {
    const q = searchQuery.toLowerCase();
    const results = [];
    categories.forEach((c) => c.sections.forEach((s) => s.items.forEach((item) => {
      const inLabel = item.label.toLowerCase().includes(q);
      const inContent = item.content?.toLowerCase().includes(q);
      if (inLabel || inContent) results.push({ ...item, catId: c.id, catLabel: c.label, catColor: c.color, secId: s.id, secTitle: s.title });
    })));
    return results;
  })() : [];

  const jumpTo = (r) => {
    setActiveCategory(r.catId);
    setActiveSection(r.secId);
    setExpandedItems((p) => ({ ...p, [r.key]: true }));
    setSearchQuery("");
    setSidebarOpen(false);
  };

  const highlightMatch = (text, query) => {
    if (!query || query.length < 2) return text;
    const idx = text.toLowerCase().indexOf(query.toLowerCase());
    if (idx === -1) return text;
    return (<>{text.slice(0, idx)}<span style={{ background: "rgba(245,158,11,0.3)", borderRadius: 2, padding: "0 1px" }}>{text.slice(idx, idx + query.length)}</span>{text.slice(idx + query.length)}</>);
  };

  const selectSection = (sId) => {
    setActiveSection(sId);
    setSidebarOpen(false);
  };

  const selectCategory = (cId) => {
    const c = categories.find((x) => x.id === cId);
    setActiveCategory(cId);
    setActiveSection(c.sections[0].id);
    setSidebarOpen(false);
  };

  return (
    <div style={{ minHeight: "100vh", background: "#f8f9fb", color: "#1e293b", fontFamily: "'Segoe UI', system-ui, sans-serif" }}>
      {/* Header */}
      <div style={{ background: "#ffffff", borderBottom: "1px solid #e2e8f0", boxShadow: "0 1px 3px rgba(0,0,0,0.06)", padding: isMobile ? "12px 16px" : "20px 32px" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>

          {/* Top row: Logo + Fortschritt (+ Hamburger on mobile) */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: isMobile ? 10 : 0 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              {isMobile && (
                <button onClick={() => setSidebarOpen((v) => !v)} style={{
                  background: "none", border: "none", cursor: "pointer", padding: 6,
                  fontSize: 20, color: "#475569", display: "flex", alignItems: "center",
                }}>☰</button>
              )}
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ width: 32, height: 32, borderRadius: 8, background: "linear-gradient(135deg, #8b0000, #c8102e)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 10, color: "#fff", letterSpacing: "0.05em", flexShrink: 0 }}>ERGO</div>
                <div>
                  <h1 style={{ margin: 0, fontSize: isMobile ? 16 : 22, fontWeight: 700, letterSpacing: "-0.02em" }}>FAQ Agentur Prinz</h1>
                  {!isMobile && <p style={{ margin: 0, fontSize: 13, color: "#64748b" }}>ERGO Agentur – Systemdokumentation & Prozesshandbuch</p>}
                </div>
              </div>
            </div>

            {/* Fortschritt */}
            <div style={{ textAlign: "right", flexShrink: 0 }}>
              {!isMobile && <div style={{ fontSize: 13, color: "#64748b", marginBottom: 6 }}>Fortschritt</div>}
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div style={{ width: isMobile ? 80 : 120, height: 6, background: "#f1f5f9", borderRadius: 3, overflow: "hidden" }}>
                  <div style={{ width: `${progress}%`, height: "100%", background: progress === 100 ? "#e53e3e" : `linear-gradient(90deg, ${cat.color}, #f59e0b)`, borderRadius: 3, transition: "width 0.4s ease" }} />
                </div>
                <span style={{ fontSize: isMobile ? 12 : 14, fontWeight: 600, color: progress === 100 ? "#e53e3e" : "#f59e0b" }}>{filledAll}/{totalAll}</span>
              </div>
            </div>
          </div>

          {/* Search – immer sichtbar, auf Mobile volle Breite */}
          <div style={{ position: "relative", width: isMobile ? "100%" : 320, margin: isMobile ? "0" : "0 24px", alignSelf: "center" }}>
            <div style={{ position: "relative" }}>
              <span style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", fontSize: 15, color: "#64748b", pointerEvents: "none" }}>🔍</span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setTimeout(() => setSearchFocused(false), 200)}
                placeholder="Suche in allen Einträgen..."
                style={{
                  width: "100%", padding: "9px 12px 9px 38px", background: "#f1f5f9",
                  border: searchFocused ? `1px solid ${cat.color}` : "1px solid #d1d5db", borderRadius: 8,
                  color: "#1e293b", fontSize: 13, fontFamily: "inherit", outline: "none",
                  boxSizing: "border-box", transition: "border-color 0.15s ease",
                }}
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery("")} style={{
                  position: "absolute", right: 8, top: "50%", transform: "translateY(-50%)",
                  background: "#e2e8f0", border: "none", borderRadius: "50%", width: 20, height: 20,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "#6b7280", fontSize: 12, cursor: "pointer",
                }}>✕</button>
              )}
            </div>
            {searchFocused && searchQuery.trim().length >= 2 && (
              <div style={{
                position: "absolute", top: "calc(100% + 6px)", left: 0, right: 0, zIndex: 50,
                background: "#f1f5f9", border: "1px solid #d1d5db", borderRadius: 10,
                maxHeight: 360, overflowY: "auto", boxShadow: "0 12px 40px rgba(0,0,0,0.5)",
              }}>
                {searchResults.length === 0 ? (
                  <div style={{ padding: "16px 18px", color: "#64748b", fontSize: 13, textAlign: "center" }}>Keine Treffer für "{searchQuery}"</div>
                ) : (
                  <>
                    <div style={{ padding: "8px 14px", fontSize: 11, color: "#64748b", borderBottom: "1px solid #d1d5db" }}>{searchResults.length} Treffer</div>
                    {searchResults.slice(0, 15).map((r) => (
                      <button key={r.key} onMouseDown={() => jumpTo(r)} style={{
                        display: "block", width: "100%", textAlign: "left", padding: "10px 14px",
                        border: "none", borderBottom: "1px solid #e5e7eb", cursor: "pointer",
                        background: "transparent", color: "#1e293b", fontFamily: "inherit",
                        transition: "background 0.1s",
                      }} onMouseEnter={(e) => e.target.style.background = "#f1f5f9"} onMouseLeave={(e) => e.target.style.background = "transparent"}>
                        <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 3 }}>{highlightMatch(r.label, searchQuery)}</div>
                        <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 11, color: "#64748b" }}>
                          <span style={{ padding: "1px 6px", borderRadius: 4, background: `${r.catColor}15`, color: r.catColor, fontSize: 10, fontWeight: 600 }}>{r.catLabel}</span>
                          <span>›</span>
                          <span>{r.secTitle}</span>
                        </div>
                        {r.content && (
                          <div style={{ fontSize: 12, color: "#6b7280", marginTop: 3, lineHeight: 1.4, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", maxWidth: 280 }}>
                            {highlightMatch(r.content.slice(0, 80) + (r.content.length > 80 ? "…" : ""), searchQuery)}
                          </div>
                        )}
                      </button>
                    ))}
                    {searchResults.length > 15 && (
                      <div style={{ padding: "8px 14px", fontSize: 11, color: "#64748b", textAlign: "center" }}>+ {searchResults.length - 15} weitere Treffer</div>
                    )}
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Category Tabs */}
      <div style={{ background: "#ffffff", borderBottom: "1px solid #e2e8f0", overflowX: "auto" }}>
        <div style={{ display: "flex", maxWidth: 1400, margin: "0 auto", minWidth: "max-content" }}>
          {categories.map((c) => {
            const st = getCatStats(c);
            const isActive = c.id === activeCategory;
            return (
              <button key={c.id} onClick={() => selectCategory(c.id)}
                style={{
                  flex: "0 0 auto", padding: isMobile ? "10px 12px" : "12px 16px", border: "none", cursor: "pointer",
                  background: isActive ? `${c.color}10` : "transparent",
                  borderBottom: isActive ? `3px solid ${c.color}` : "3px solid transparent",
                  color: isActive ? "#1e293b" : "#64748b",
                  fontSize: isMobile ? 11 : 12, fontWeight: 700, whiteSpace: "nowrap",
                  display: "flex", alignItems: "center", gap: 5, transition: "all 0.15s ease",
                }}>
                {c.label}
                <span style={{
                  fontSize: 10, padding: "2px 5px", borderRadius: 10,
                  background: st.filled === st.total ? "rgba(200,16,46,0.15)" : `${c.color}15`,
                  color: st.filled === st.total ? "#e53e3e" : c.color,
                }}>{st.filled}/{st.total}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Mobile Sidebar Overlay */}
      {isMobile && sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          style={{
            position: "fixed", inset: 0, zIndex: 40,
            background: "rgba(0,0,0,0.4)",
          }}
        />
      )}

      <div style={{ display: "flex", maxWidth: 1400, margin: "0 auto", minHeight: "calc(100vh - 155px)", position: "relative" }}>
        {/* Sidebar */}
        <nav style={{
          width: 280, flexShrink: 0, borderRight: "1px solid #e2e8f0", padding: "16px 0", overflowY: "auto",
          ...(isMobile ? {
            position: "fixed", top: 0, left: 0, bottom: 0, zIndex: 50,
            background: "#ffffff",
            transform: sidebarOpen ? "translateX(0)" : "translateX(-100%)",
            transition: "transform 0.25s ease",
            boxShadow: sidebarOpen ? "4px 0 20px rgba(0,0,0,0.15)" : "none",
            paddingTop: 60,
          } : {}),
        }}>
          {/* Mobile close button */}
          {isMobile && (
            <button onClick={() => setSidebarOpen(false)} style={{
              position: "absolute", top: 16, right: 16, background: "#f1f5f9", border: "none",
              borderRadius: "50%", width: 32, height: 32, fontSize: 16, cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center", color: "#475569",
            }}>✕</button>
          )}
          {cat.sections.map((s) => {
            const isActive = s.id === activeSection;
            const st = getSecStats(s);
            return (
              <button key={s.id} onClick={() => selectSection(s.id)}
                style={{
                  display: "flex", alignItems: "center", gap: 10, width: "100%",
                  padding: "10px 20px", border: "none", cursor: "pointer",
                  background: isActive ? `${cat.color}08` : "transparent",
                  borderLeft: isActive ? `3px solid ${cat.color}` : "3px solid transparent",
                  color: isActive ? "#1e293b" : "#94a3b8",
                  fontSize: 13, fontWeight: isActive ? 600 : 400, textAlign: "left",
                  transition: "all 0.15s ease",
                }}>
                <span style={{ fontSize: 16 }}>{s.icon}</span>
                <span style={{ flex: 1, lineHeight: 1.3 }}>{s.title}</span>
                <span style={{
                  fontSize: 11, padding: "2px 6px", borderRadius: 10,
                  background: st.filled === st.total ? "rgba(200,16,46,0.15)" : "rgba(100,116,139,0.15)",
                  color: st.filled === st.total ? "#e53e3e" : "#64748b",
                }}>{st.filled}/{st.total}</span>
              </button>
            );
          })}
          <div style={{ margin: "24px 20px", padding: "16px", background: `${cat.color}08`, border: `1px solid ${cat.color}25`, borderRadius: 8 }}>
            <div style={{ fontSize: 11, color: cat.color, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 6 }}>Merksatz</div>
            <div style={{ fontSize: 12, color: "#6b7280", lineHeight: 1.5 }}>WER Schreibt der BLEIBT!!!!!</div>
          </div>
        </nav>

        {/* Content */}
        <main style={{ flex: 1, padding: isMobile ? "16px" : "28px 36px", overflowY: "auto", minWidth: 0 }}>
          {sec && (
            <>
              <div style={{ marginBottom: isMobile ? 16 : 28 }}>
                <div style={{
                  display: "inline-block", fontSize: 10, fontWeight: 700, letterSpacing: "0.1em",
                  textTransform: "uppercase", color: cat.color, background: `${cat.color}12`,
                  padding: "4px 10px", borderRadius: 4, marginBottom: 10,
                }}>{cat.label}</div>
                <h2 style={{ margin: 0, fontSize: isMobile ? 17 : 20, fontWeight: 700, color: "#111827", display: "flex", alignItems: "center", gap: 10 }}>
                  <span>{sec.icon}</span>{sec.title}
                </h2>
                <p style={{ margin: "8px 0 0", fontSize: isMobile ? 13 : 14, color: "#64748b" }}>{sec.intro}</p>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {sec.items.map((item) => {
                  const hasContent = !!item.content;
                  const isExpanded = expandedItems[item.key] !== false;
                  return (
                    <div key={item.key} style={{
                      background: "#ffffff",
                      border: `1px solid ${hasContent ? "rgba(200,16,46,0.15)" : "rgba(245,158,11,0.15)"}`,
                      borderRadius: 10, overflow: "hidden",
                    }}>
                      <button onClick={() => toggleItem(item.key)} style={{
                        display: "flex", alignItems: "center", width: "100%", padding: isMobile ? "12px 14px" : "14px 18px",
                        border: "none", cursor: "pointer", background: "transparent", color: "#1e293b", gap: 10,
                        fontFamily: "inherit",
                      }}>
                        {teamInitials[item.key] ? (
                          <div style={{
                            width: 34, height: 34, borderRadius: "50%", flexShrink: 0,
                            background: "linear-gradient(135deg, #e2e8f0, #cbd5e1)",
                            border: "2px solid " + cat.color + "40",
                            display: "flex", alignItems: "center", justifyContent: "center",
                            fontSize: 12, fontWeight: 700, color: "#4b5563", letterSpacing: "0.05em",
                          }}>{teamInitials[item.key]}</div>
                        ) : (
                          <div style={{
                            width: 22, height: 22, borderRadius: "50%", flexShrink: 0,
                            background: hasContent ? "#c8102e" : "rgba(245,158,11,0.15)",
                            border: hasContent ? "none" : "2px solid rgba(245,158,11,0.4)",
                            display: "flex", alignItems: "center", justifyContent: "center",
                            fontSize: 11, color: hasContent ? "#fff" : "#f59e0b",
                          }}>{hasContent ? "✓" : "…"}</div>
                        )}
                        <span style={{ flex: 1, textAlign: "left", fontSize: isMobile ? 13 : 14, fontWeight: 600 }}>{item.label}</span>
                        <span style={{
                          fontSize: 18, color: "#475569",
                          transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
                          transition: "transform 0.2s ease",
                          flexShrink: 0,
                        }}>▾</span>
                      </button>
                      {isExpanded && (
                        <div style={{ padding: isMobile ? "0 14px 14px" : "0 18px 16px" }}>
                          {hasContent ? (
                            <div>
                              <div style={{
                                fontSize: isMobile ? 13 : 14, color: "#374151", lineHeight: 1.7,
                                background: "rgba(200,16,46,0.03)",
                                padding: isMobile ? "12px 12px" : "14px 16px", borderRadius: 8,
                                borderLeft: `3px solid ${cat.color}40`,
                              }}>{item.content.split("\n").map((line, i) => {
                                const isBullet = line.startsWith("• ") || line.startsWith("→ ");
                                return <div key={i} style={{ paddingLeft: isBullet ? 10 : 0, marginBottom: 3 }}>{line}</div>;
                              })}</div>
                              {teamEmails[item.key] && (
                                <div style={{ marginTop: 8, display: "flex", alignItems: "center", gap: 8, fontSize: 12, color: "#64748b" }}>
                                  <span>✉️</span>
                                  <a href={`mailto:${teamEmails[item.key]}`} style={{ color: cat.color, textDecoration: "none" }}>{teamEmails[item.key]}</a>
                                </div>
                              )}
                              {item.linkTo && (() => {
                                const target = categories.find(c => c.id === item.linkTo);
                                return target ? (
                                  <button onClick={(e) => { e.stopPropagation(); selectCategory(target.id); }}
                                    style={{
                                      marginTop: 10, display: "inline-flex", alignItems: "center", gap: 6,
                                      padding: "8px 14px", background: `${target.color}15`, border: `1px solid ${target.color}30`,
                                      borderRadius: 6, color: target.color, fontSize: 13, fontWeight: 600,
                                      cursor: "pointer", fontFamily: "inherit", transition: "all 0.15s ease",
                                    }}
                                    onMouseEnter={(e) => { e.target.style.background = `${target.color}25`; }}
                                    onMouseLeave={(e) => { e.target.style.background = `${target.color}15`; }}
                                  >→ Zum Tab: {target.label}</button>
                                ) : null;
                              })()}
                              {item.downloads?.length > 0 && (
                                <div style={{ marginTop: 10, display: "flex", flexWrap: "wrap", gap: 6 }}>
                                  {item.downloads.map((dl, i) => (
                                    <a key={i} href={dl.file} download target="_blank" rel="noopener noreferrer"
                                      style={{
                                        display: "inline-flex", alignItems: "center", gap: 6,
                                        padding: "7px 12px", background: "#f1f5f9", border: "1px solid #d1d5db",
                                        borderRadius: 6, color: "#334155", fontSize: 12, fontWeight: 500,
                                        textDecoration: "none", transition: "all 0.15s ease",
                                      }}
                                      onMouseEnter={(e) => { e.currentTarget.style.background = "#e2e8f0"; }}
                                      onMouseLeave={(e) => { e.currentTarget.style.background = "#f1f5f9"; }}
                                    >📄 {dl.label}</a>
                                  ))}
                                </div>
                              )}
                            </div>
                          ) : (
                            <div style={{
                              fontSize: 13, color: "#f59e0b", fontStyle: "italic",
                              background: "rgba(245,158,11,0.04)",
                              padding: "12px 16px", borderRadius: 8,
                              borderLeft: "3px solid rgba(245,158,11,0.3)",
                            }}>⏳ Inhalt folgt – wird gemeinsam befüllt</div>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </>
          )}
        </main>
      </div>
    </div>
  );
}
