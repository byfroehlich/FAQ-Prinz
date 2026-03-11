// ============================================================
// FAQ AGENTUR PRINZ – DATEN
// Hier können alle Inhalte bearbeitet werden.
// Änderungen werden nach dem Push automatisch live.
// ============================================================
//
// PDF-DOWNLOADS HINZUFÜGEN:
// PDFs in den Ordner /public/docs/ legen, dann beim Item eintragen:
//
//   { key: "...", label: "...", content: "...",
//     downloads: [
//       { label: "Formular Kfz",   file: "/docs/formular-kfz.pdf" },
//       { label: "SEPA-Mandat",    file: "/docs/sepa-mandat.pdf" },
//     ]
//   }
//
// Mehrere PDFs pro Item sind möglich.
// ============================================================

export const teamInitials = {
  r_benni: "BP", r_mathias: "MF", r_roland: "RZ", r_hannes: "JE", r_marcel: "MP",
  r_tuba: "TP", r_sarah: "SP", r_lisa: "LP", r_heike: "HP", r_antonio: "AI",
};

export const teamEmails = {
  r_benni: "Benjamin.Prinz@ergo.de",
  r_mathias: "Mathias.Froehlich@ergo.de",
  r_hannes: "Johannes.Eibeler@ergo.de",
  r_lisa: "Lisa.Ramona.Prinz@ergo.de",
  r_sarah: "Sarah-Christin.Paessler@ergo.de",
  r_marcel: "Marcel.Deniz.Peter@ergo.de",
  r_roland: "Roland.Zengerle@ergo.de",
  r_tuba: "Tuba.Peter@ergo.de",
  r_heike: "Heike.Prinz@ergo.de",
  r_antonio: "Antonio.Ilin@ergo.de",
};

export const categories = [
  // ============================================================
  // 1. VERTRIEBSZIELE 2026
  // ============================================================
  {
    id: "vertrieb", label: "Vertriebsziele 2026", color: "#d97706",
    gradient: "linear-gradient(135deg, #92400e, #d97706)",
    sections: [
      { id: "v_ziel", icon: "🎯", title: "1. Ziel", intro: "Das übergeordnete Vertriebsziel für 2026.", items: [
        { key: "v_ape", label: "1.5 MIO APE einfache Wertung", content: "Bis 01.08. jegliches Vertriebsziel erledigt." },
      ]},
      { id: "v_ansaetze", icon: "⚡", title: "2. Die 5 Ansätze", intro: "Fünf konkrete Ansätze zur Erreichung des Vertriebsziels.", items: [
        { key: "v_cesur", label: "Familien-Netzwerk-Vertrieb", content: "Warmakquise im privaten Umfeld:\n• Eltern\n• Geschwister\n• Cousins\n• Schwiegerfamilie\n• Enger Freundeskreis\n→ Niedrigste Hemmschwelle, höchste Abschlussquote durch Vertrauen." },
        { key: "v_marketing", label: "Werbung durch Marketing", content: "Inhalte folgen noch." },
        { key: "v_telefonie", label: "Aktionstelefonie", content: "9 Aktionen weil 9 Vertriebsziele:\n• Sarah koordiniert Terminierung\n• Teampartner führen Beratungsgespräche\n• Fachspezialisten seitens ERGO Nürnberg\n• Fachspezialisten seitens ERGO Abteilung\n\n→ Aktionen:\n• 1. Zahnzusatz\n• 2. (folgt)\n• 3. (folgt)\n• 4. (folgt)\n• 5. (folgt)\n• 6. (folgt)\n• 7. (folgt)\n• 8. (folgt)\n• 9. (folgt)" },
        { key: "v_social", label: "Social Media", content: "Eigener Tab → siehe Social Media. Strategie 2026 mit Benni (On-Camera), Antonio (Planung/Schnitt) und Mathias (Strategie). 104 Content-Ideen, 2 Speaking Posts/Woche, Instagram + TikTok.", linkTo: "socialmedia" },
        { key: "v_firmen", label: "100 Firmen von Praktikanten", content: "Die Kür: 100 Firmen von Praktikanten ins CRM Tool eintragen." },
      ]},
      { id: "v_aktionen", icon: "📣", title: "3. Kampagnen & Bestandsaktionen", intro: "Systematische Vertriebsaktionen zur Bestandsdurchdringung und Neukundengewinnung.", items: [
        { key: "v_bestandsdurchgang", label: "Bestandsdurchgang", content: "Systematische Durchsicht des gesamten Kundenbestands: veraltete Verträge identifizieren, Lücken im Versicherungsschutz finden, Handlungsbedarf feststellen." },
        { key: "v_tarifoptimierung", label: "Tarifoptimierungsaktion", content: "Bestehende Verträge auf bessere/günstigere interne Tarife prüfen. Proaktive Angebotserstellung für Tarifwechsel im Sinne des Kunden." },
        { key: "v_kampagnen", label: "Kundenkampagnen", content: "Organisierte Aktionen mit Direktansprache: Anschreiben, Telefonaktionen zu Produktneueinführungen, saisonalen Themen oder Upgrades für Bestandskunden." },
        { key: "v_crossselling", label: "Cross-Selling Zusatzprodukte", content: "Ergänzende Versicherungen oder Erweiterungen an Bestandskunden im Zuge der Beratung anbieten." },
        { key: "v_rueckgewinnung", label: "Kundenrückgewinnung (Stornoabwehr)", content: "Gezielte Rückholversuche bei Kündigungen – abwandernde Kunden mit Angeboten oder Lösungen zum Verbleib bewegen." },
      ]},
    ],
  },

  // ============================================================
  // 2. ROLLEN & ZUSTÄNDIGKEITEN
  // ============================================================
  {
    id: "rollen", label: "Rollen & Zuständigkeiten", color: "#8b5cf6",
    gradient: "linear-gradient(135deg, #6d28d9, #8b5cf6)",
    sections: [
      { id: "r_team", icon: "👥", title: "1. Teampartner", intro: "Wer macht was – Zuständigkeiten im Team laut Prozesshandbuch.", items: [
        { key: "r_benni", label: "Benni (Benjamin Prinz)", content: "Geschäftsleitung + Bestands-Spezialist Gewerbe/Firmenkunden.\nAgenturnummer: 00640 0006\n• Strategie & Eskalation\n• Rechtliche Sonderfälle\n• Servicepoint-Ansprechpartner für Rückfragen\n→ Keine operative Dauersteuerung – Eskalationsinstanz, nicht Hotline." },
        { key: "r_mathias", label: "Mathias (Fröhlich)", content: "Operative Steuerung & Koordination.\n• Praktikanten anleiten, Aufgaben verteilen, Ergebnisse kontrollieren\n• Projektzuordnung\n• Telefoniekräfte/externe Kräfte einsetzen:\n→ Callcenter, Minijob, Freelancer\n→ Terminvereinbarung, Vorqualifizierung, Telefonaktionen" },
        { key: "r_roland", label: "Roland (Zengerele)", content: "Bestands-Spezialist Gesundheit/Krankenversicherung.\nAgenturnummer: 00640 00076\n• Bestand: Kunden selektieren die du nicht kennst\n• Fachliche Qualitätssicherung, einheitliche Aussagen\n→ Keine Vorgesetztenfunktion, keine Genehmigungsinstanz." },
        { key: "r_hannes", label: "Hannes (Johannes Eibeler)", content: "Backoffice: Buchhaltung & Zahlen.\n• Finanzbuchhaltung & Überweisungen\n• Vertriebszahlen-Controlling\n• Wochenziele tracken\n• Arbeitszeitnachweise\n→ Zahlenkontrolle ≠ Verantwortungsübernahme – er liefert Daten, AD behält Verantwortung." },
        { key: "r_marcel", label: "Marcel (Peter)", content: "Bestands-Spezialist Leben/Rentenversicherung.\nAgenturnummer: 00640 0602\n• Fachliche Klärung bei komplexen Fragen (Ablaufleistung, Steuer, Risikozuschläge)\n→ Keine Vorgesetztenfunktion.\n→ Bestand-Anfragen die nicht im Abschlussprozess liegen." },
        { key: "r_tuba", label: "Tuba (Peter)", content: "Bestands-Spezialistin Sach/Privatkunden (Haus, Haftpflicht, KFZ u.a.). Fachliche Qualitätssicherung Sachversicherung. Keine Vorgesetztenfunktion. Bestand-Anfragen die nicht im Abschlussprozess liegen." },
        { key: "r_sarah", label: "Sarah (Passier)", content: "Backoffice: Terminierung & Inbound.\n• Annahme ALLER eingehenden Anrufe\n• Erste Einordnung\n• Terminvereinbarung gemäß Zuständigkeitslogik\n→ KEIN Vertragsservice, KEINE inhaltliche Beratung\n→ Falls Fragen → Benni (Servicepoint)" },
        { key: "r_lisa", label: "Lisa (Prinz)", content: "Backoffice: Kündigungskontrolle & Vertragsadministration.\n• Kündigungen zentral erfassen\n• Fristenüberwachung\n• Leistungsabrechnungen\n• SEPA/Kontoänderungen\n• Finanzamtsbescheinigungen\n→ Ihre Dokumentation ist VERBINDLICH – keine Nebenabsprachen.\n→ Vertretung Heike bei Schaden." },
        { key: "r_heike", label: "Heike (Prinz)", content: "Backoffice: Schadenmanagement.\n• Schadenaufnahme\n• Kommunikation mit Versicherern\n• Fristenüberwachung & Statuskontrolle\n• Kundenrückmeldung\n→ KEINE Deckungszusagen, KEINE inhaltliche Beratung – koordinierende Stelle.\n→ Vertretung Lisa bei Kündigungen." },
        { key: "r_antonio", label: "Antonio (Ilin)", content: "Vertriebspartner, Social Media Manager, Gründer Aitonio." },
      ]},
      { id: "r_spezialisten", icon: "🎯", title: "2. Bestands-Spezialisten (Sparten)", intro: "Funktionale Expertenrollen – KEINE hierarchischen Rollen. Kein Abschluss-Monopol, keine Genehmigungsinstanz.", items: [
        { key: "r_sp_gesundheit", label: "Gesundheit/Kranken → Roland", content: "Alle fachspezifischen Bestandsanfragen Krankenversicherung:\n• Leistungsabrechnungsfragen\n• Tarifbedingungen\n• Zweitmeinung bei KV-Fällen\n→ Neugeschäft bleibt beim AD." },
        { key: "r_sp_leben", label: "Leben/Rente → Marcel", content: "Alle fachspezifischen Bestandsanfragen Lebens-/Rentenversicherung:\n• Ablaufleistungen\n• Risikozuschläge\n• Steuerliche Fragen LV\n→ Neugeschäft bleibt beim AD." },
        { key: "r_sp_sach", label: "Sach/Privat → Tuba", content: "Alle fachspezifischen Bestandsanfragen Haus, Haftpflicht, KFZ u.a.:\n• Vertragsklauseln\n• Deckungsfragen Sachversicherung\n→ Neugeschäft bleibt beim AD." },
        { key: "r_sp_gewerbe", label: "Gewerbe/Firmen → Benni", content: "Alle fachspezifischen Bestandsanfragen Firmenkunden:\n• Gewerbeversicherungen\n• D&O, Cyber, Betriebshaftpflicht\n→ Zugleich Geschäftsleitung – Eskalationsinstanz bei Streitfällen." },
      ]},
      { id: "r_logik", icon: "🔀", title: "3. Zuständigkeitslogik Inbound", intro: "Wie eingehende Anrufe/Anfragen zugeordnet werden.", items: [
        { key: "r_logik_abschluss", label: "Abschluss/Beratung → Außendienst", content: "Kunde will beraten werden oder hat Abschlussabsicht → zuständiger AD-Partner. Senior oder Junior, alle Sparten." },
        { key: "r_logik_junior", label: "Junior-Bestand, kein Abschluss → Junior selbst", content: "Kundenanfrage aus Junior-Bestand ohne Abschlussbezug → Juniorpartner bearbeitet komplett selbst." },
        { key: "r_logik_senior", label: "Senior-Bestand, kein Abschluss → Spezialist", content: "Allgemeine Service-Anfrage aus Senior-Bestand → zuständiger Bestands-Spezialist der Sparte. Entlastung des AD für Vertriebsfokus." },
        { key: "r_logik_schaden", label: "Schaden → Heike", content: "Jeder Schadenfall → direkt an Heike (Schadenmanagement). AD-Partner bleibt informiert, gibt aber KEINE Deckungszusage." },
        { key: "r_logik_kuendigung", label: "Kündigung → Lisa", content: "Jede Kündigung → zentral an Lisa. Kein anderer bearbeitet Kündigungen eigenmächtig. Dokumentation ist verbindlich." },
      ]},
      { id: "r_vertretung", icon: "🔄", title: "4. Vertretungsregeln", intro: "Wer springt ein bei Abwesenheit – damit nichts liegen bleibt.", items: [
        { key: "r_v_heike", label: "Heike abwesend → Lisa (Schaden)", content: "Lisa übernimmt Schadenmanagement. Sarah kann Schaden telefonisch aufnehmen bis Lisa/Heike verfügbar." },
        { key: "r_v_lisa", label: "Lisa abwesend → Heike (Kündigungen/Admin)", content: "Heike erfasst Kündigungen nach gleichem Schema. Sarah kann einfache Weiterleitungen übernehmen." },
        { key: "r_v_johannes", label: "Johannes abwesend → Benjamin (Zahlungen)", content: "Benjamin hat Bankzugang. Johannes soll Zahlungsliste aktuell halten. Buchungen warten ggf. bis Rückkehr." },
        { key: "r_v_sarah", label: "Sarah abwesend → Team (Inbound)", content: "Telefon wird rotierend übernommen. Zuständigkeitslogik bleibt gleich." },
        { key: "r_v_ad", label: "AD-Partner abwesend → Kollege/Spezialist", content: "Heißer Interessent → anderer Seniorpartner oder Spezialist übernimmt. Alle Gesprächsnotizen in EASY ermöglichen nahtloses Einspringen." },
        { key: "r_v_spezialist", label: "Spezialist abwesend → anderer Spezialist", content: "Inhaltlich nahestehender Kollege springt ein. Nicht-dringende Anfragen warten. Eskalation → Geschäftsleitung nur in Ausnahmefällen." },
      ]},
    ],
  },

  // ============================================================
  // 3. TELEFONIE & KUNDENKONTAKT
  // ============================================================
  {
    id: "telefonie", label: "Telefonie & Kundenkontakt", color: "#ec4899",
    gradient: "linear-gradient(135deg, #be185d, #ec4899)",
    sections: [
      { id: "tel_inbound", icon: "📞", title: "1. Eingehende Anrufe (Inbound)", intro: "Ablauf für alle eingehenden Kundenanrufe – von Annahme bis Dokumentation.", items: [
        { key: "tel_in_annahme", label: "Schnelle Annahme", content: "Telefon spätestens nach dem 3. Klingeln abnehmen (innerhalb 20 Sekunden). Keine Wartezeiten." },
        { key: "tel_in_begruessung", label: "Standardbegrüßung", content: "\"Guten Tag, Versicherungsbüro Prinz, Sie sprechen mit [eigener Name]. Wie kann ich Ihnen helfen?\" – deutlich, freundlich, Vertrauen schaffen." },
        { key: "tel_in_identifikation", label: "Kundenidentifikation", content: "Name des Anrufers, Vertrags-/Kundennummer erfragen. Bei vertragsbezogenen Auskünften Identität verifizieren (Geburtsdatum oder Adresse)." },
        { key: "tel_in_anliegen", label: "Anliegen aufnehmen", content: "Aktiv zuhören, Notizen machen. Anliegen in eigenen Worten zusammenfassen: \"Wenn ich Sie richtig verstehe, möchten Sie...\" – sicherstellen, dass richtig verstanden." },
        { key: "tel_in_bearbeitung", label: "Lösung / Weiterleitung", content: "Sofort beantworten wenn möglich. Vorgang aufnehmen bei Änderungen/Schäden. Weiterleitung an zuständige Person gemäß Zuständigkeitslogik oder Rückruf ankündigen." },
        { key: "tel_in_abschluss", label: "Zusammenfassen & Verabschieden", content: "Vereinbarte Schritte zusammenfassen. Sicherstellen, dass alle Fragen beantwortet. Freundliche Verabschiedung: \"Vielen Dank für Ihren Anruf. Auf Wiederhören!\"" },
        { key: "tel_in_doku", label: "Dokumentation", content: "Direkt nach Telefonat: Datum, Uhrzeit, Anliegen und Vereinbarungen im CRM/EASY erfassen. So können alle im Team nachvollziehen, was besprochen wurde." },
      ]},
      { id: "tel_outbound", icon: "📱", title: "2. Ausgehende Anrufe (Outbound)", intro: "Proaktive Kundenkontakte – Terminbestätigungen, Rückrufe, Beratung.", items: [
        { key: "tel_out_vorbereitung", label: "Vorbereitung", content: "Vor dem Anruf: Kundendaten, Vertragsstatus, offene Vorgänge sammeln. Gut informiert ins Gespräch gehen." },
        { key: "tel_out_einleitung", label: "Einleitung & Vorstellung", content: "\"Guten Tag, hier ist [Name] von Versicherungsbüro Prinz. Spreche ich mit [Kundenname]?\" – Identität bestätigen, dann kurz Grund des Anrufs erläutern." },
        { key: "tel_out_gespraech", label: "Gesprächsführung", content: "Klar und freundlich vortragen. Kunden Raum geben für Fragen/Bedenken. Auf Einwände eingehen ohne Druck. Bei Beratung: Kontext erinnern (früheres Gespräch)." },
        { key: "tel_out_vereinbarung", label: "Weiteres Vorgehen vereinbaren", content: "Am Ende klares Ergebnis: Termin vereinbart, Unterlagen nachsenden, Bedenkzeit. Kunde muss wissen, was die nächsten Schritte sind." },
        { key: "tel_out_doku", label: "Dokumentation", content: "Verlauf und Ergebnis im System erfassen: Themen, Kundenreaktion, vereinbarte Schritte. Alle Kollegen im Bilde." },
      ]},
      { id: "tel_termin", icon: "📅", title: "3. Terminierung", intro: "Kundentermine effizient planen und festhalten.", items: [
        { key: "tel_t_bedarf", label: "Bedarf klären", content: "Zweck des Termins klären → Dauer und Ort bestimmen (Büro, beim Kunden, Telefon, Video)." },
        { key: "tel_t_kalender", label: "Kalender prüfen", content: "Verfügbarkeit des zuständigen Beraters checken. Ausreichend Puffer für Vor- und Nachbereitung einplanen." },
        { key: "tel_t_vorschlag", label: "Termin vorschlagen & festlegen", content: "1–2 konkrete Termine anbieten. Flexibel sein bei Alternativen. Datum, Uhrzeit und Ort/Medium fixieren." },
        { key: "tel_t_bestaetigung", label: "Bestätigung versenden", content: "Terminbestätigung per E-Mail: Datum, Uhrzeit, Ort/Link, Name Berater, Gesprächsthema. Bei langfristigen Terminen: Erinnerung einige Tage vorher." },
        { key: "tel_t_eintrag", label: "Kalendereintrag erstellen", content: "Termin in gemeinsamen Kalender eintragen. Kundenname, Anliegen und benötigte Unterlagen vermerken. Doppelbelegungen vermeiden." },
      ]},
      { id: "tel_beschwerde", icon: "⚠️", title: "4. Beschwerdemanagement", intro: "Kundenbeschwerden professionell behandeln.", items: [
        { key: "tel_b_annahme", label: "Beschwerde annehmen", content: "Ruhig und vollständig zuhören. Nicht unterbrechen. Verständnis zeigen: \"Ich verstehe, dass das ärgerlich für Sie ist.\" Kernpunkte notieren." },
        { key: "tel_b_entschuldigung", label: "Bedauern ausdrücken", content: "Aufrichtig entschuldigen für Unannehmlichkeiten – empathisch, aber ohne rechtliche Schuldanerkenntnis." },
        { key: "tel_b_klaerung", label: "Sachverhalt klären", content: "Alle Fakten ermitteln: Welcher Vorgang, was ist schiefgelaufen? Unterlagen heranziehen, Kollegen befragen. Bei komplexen Fällen: Zeitrahmen für Rückmeldung vereinbaren." },
        { key: "tel_b_loesung", label: "Lösung erarbeiten & umsetzen", content: "Lösungsmöglichkeit prüfen: Nachbearbeitung, Kulanz, Erklärung. Klären ob eigene Entscheidungskompetenz oder Eskalation nötig. Lösung umsetzen und schriftlich bestätigen." },
        { key: "tel_b_doku", label: "Dokumentation & Feedback", content: "Beschwerde und Ursache im CRM/Beschwerderegister erfassen. Intern analysieren: Was kann verbessert werden? Ggf. Schulung oder Prozessanpassung ableiten." },
      ]},
    ],
  },

  // ============================================================
  // 4. VERTRAGSPROZESSE
  // ============================================================
  {
    id: "vertraege", label: "Vertragsprozesse", color: "#f59e0b",
    gradient: "linear-gradient(135deg, #b45309, #f59e0b)",
    sections: [
      { id: "vt_neukunde", icon: "🆕", title: "1. Neukundenanlage", intro: "Vom Erstkontakt bis zur fertigen Kundenakte.", items: [
        { key: "vt_nk_bedarf", label: "Bedarfsanalyse & Angebot", content: "Bedürfnisse des Kunden erfassen (Sparten, Summen). Passendes Angebot erstellen. Offene Fragen klären, Angebot anpassen bis Zusage." },
        { key: "vt_nk_antrag", label: "Antrag ausfüllen", content: "Versicherungsantrag gemeinsam ausfüllen (Papier oder digital). Alle Angaben vollständig: Personalien, Gesundheitsfragen bei Personenversicherung, Objektangaben bei Sach. Unterschrift nicht vergessen." },
        { key: "vt_nk_system", label: "Erfassung im System", content: "Neuen Kunden im CRM/EASY anlegen: Kundennummer, persönliche Daten, Vertrag mit Produktart, Tarif, Vertragsnummer, Beginn, Laufzeit, Beitrag, Zahlungsweise, Bankverbindung." },
        { key: "vt_nk_versicherer", label: "Weiterleitung an Versicherer", content: "Antrag an Versicherungsgesellschaft senden (elektronisch/Portal). Annahmerichtlinien und Fristen beachten. Auf Policierung warten." },
        { key: "vt_nk_police", label: "Policenkontrolle", content: "Nach Erhalt der Police: Alle Daten prüfen – VN, versicherte Risiken, Summen, Beiträge. Bei Abweichungen sofort beim Versicherer reklamieren." },
        { key: "vt_nk_unterlagen", label: "Kundenunterlagen übergeben", content: "Police, Vertragsbedingungen, Kontaktdaten Betreuer, Hinweise zum Schadenfall. Persönlich oder per Post/E-Mail. Nachfass-Termin im Kalender setzen." },
      ]},
      { id: "vt_aenderung", icon: "✏️", title: "2. Vertragsänderungen", intro: "Anpassungen an bestehenden Verträgen.", items: [
        { key: "vt_ae_bedarf", label: "Bedarfsklärung", content: "Änderungswunsch aufnehmen: Was genau? Höhere Summe, Tarifwechsel, Adressänderung, Deckungserweiterung. Im EASY Details des bestehenden Vertrags prüfen." },
        { key: "vt_ae_angebot", label: "Angebot/Änderung erstellen", content: "Über EASY oder Formulare die Vertragsänderung vorbereiten. Vorlagen nutzen. Dem Kunden per Mail zur Prüfung/Unterschrift senden." },
        { key: "vt_ae_umsetzung", label: "Umsetzung & Meldung", content: "Nach Kundenfreigabe: Änderung digital im EASY/Agenturportal an Versicherer übermitteln oder unterschriebene Formulare weiterleiten." },
        { key: "vt_ae_doku", label: "Dokumentation & Nachverfolgung", content: "Jeden Schritt im EASY dokumentieren. Nachverfolgen ob Policierung der Änderung erfolgt. Outlook-Termin setzen falls keine Bestätigung innerhalb Frist." },
      ]},
      { id: "vt_konto", icon: "🏦", title: "3. Kontoänderung & SEPA", intro: "Bankverbindungen ändern und Lastschriftmandate verwalten.", items: [
        { key: "vt_ko_eingang", label: "Änderungsmitteilung erfassen", content: "Kanal feststellen (Telefon/Mail/Brief/persönlich). Identität prüfen. Neue Bankdaten vollständig aufnehmen: IBAN, BIC, Kontoinhaber." },
        { key: "vt_ko_sepa", label: "SEPA-Mandat einholen", content: "Formular mit Gläubiger-ID und Mandatsreferenz an Kunden senden. Unterschrift des Kontoinhabers erforderlich. Wiedervorlage setzen (2 Wochen) falls nichts zurückkommt." },
        { key: "vt_ko_system", label: "Systemaktualisierung", content: "Neue Bankverbindung in EASY/CRM und beim Versicherer hinterlegen. Mandatsdatum eintragen. Sicherstellen, dass nächster Beitragseinzug auf korrektes Konto erfolgt." },
        { key: "vt_ko_bestaetigung", label: "Bestätigung & Ablage", content: "Kunden bestätigen, dass Änderung durchgeführt. Unterschriebenes Mandat digital scannen + Original archivieren. Notiz im Kundenkonto." },
      ]},
      { id: "vt_kuendigung", icon: "📄", title: "4. Kündigungen", intro: "Zentral durch Lisa – eingehende und ausgehende Kündigungen.", items: [
        { key: "vt_ku_eingang", label: "Eingang erfassen", content: "Kündigungsschreiben registrieren mit Eingangsdatum. Bei telefonischer Ankündigung: schriftliche Bestätigung anfordern. Zentral an Lisa." },
        { key: "vt_ku_pruefung", label: "Prüfung", content: "Welche Police, welches Datum, fristgerecht? Bei Unklarheiten (falsche Vertragsnummer etc.) Absender kontaktieren." },
        { key: "vt_ku_bestaetigung", label: "Bestätigung versenden", content: "Dem Kündigenden Empfangsbestätigung senden. Standardvorlage: \"Wir bestätigen die Kündigung Ihrer Versicherung XY zum xx.xx.xxxx.\"" },
        { key: "vt_ku_versicherer", label: "Meldung an Versicherer", content: "Kündigung offiziell an Versicherer weiterleiten (Maklerportal/E-Mail). Sicherstellen, dass Versicherer die Info hat." },
        { key: "vt_ku_fristen", label: "Fristenüberwachung", content: "In Excel/EASY eintragen mit Ablaufdatum. Wiedervorlage kurz vor Ablauf. Prüfen ob Verlängerungsangebot möglich." },
        { key: "vt_ku_doku", label: "Daten aktualisieren", content: "Vertragsstatus in EASY auf \"gekündigt zum [Datum]\" setzen. Notiz: \"Kündigung durch Kunde am [Datum] erhalten, bearbeitet von Lisa\". AD-Partner informieren." },
        { key: "vt_ku_fremd", label: "Kündigungen Fremdverträge", content: null },
      ]},
      { id: "vt_bescheinigung", icon: "📋", title: "5. Finanzamtsbescheinigungen", intro: "Jährliche Bescheinigungen für Steuererklärung.", items: [
        { key: "vt_fa_anforderung", label: "Anforderung durch Kunden", content: "Kunde fragt per Mail/Telefon nach Beitragsbescheinigung für Steuererklärung. AD-Partner kann Wünsche gebündelt an Lisa geben." },
        { key: "vt_fa_beschaffung", label: "Beschaffung", content: "Im Versichererportal prüfen ob Bescheinigung vorliegt. PDF herunterladen. Falls kein Portal: beim Versicherer anfordern (Telefon/Mail)." },
        { key: "vt_fa_versand", label: "Versand an Kunden", content: "Per E-Mail mit kurzem Anschreiben: \"Anbei Ihre Versicherungs-Bescheinigung für das Finanzamt über gezahlte Beiträge in [Jahr].\" Bei sensiblen Daten: Passwort-PDF." },
        { key: "vt_fa_ablage", label: "Ablage", content: "Kopie in EASY beim Kunden speichern. Saisonal (Jan–März): Proaktiv alle Bescheinigungen sammeln und bereitstellen." },
      ]},
      { id: "vt_roller", icon: "🛵", title: "6. Rollerkennzeichen / Moped-Versicherung", intro: "Versicherungskennzeichen für Moped, Mofa, Roller & Co. über EASY. Neues Verkehrsjahr startet immer am 01.03. (Saison 2026/27: schwarze Kennzeichen).", items: [
        { key: "rk_step1", label: "Schritt 1 – Kunde öffnen", content: "→ In EASY den entsprechenden Kunden/Interessenten aufrufen" },
        { key: "rk_step2", label: "Schritt 2 – Tarifrechner öffnen", content: "→ Reiter \"Tarifrechner\" → Kategorie \"Unterwegs\"\n→ Ganz unten: \"Fahrzeuge mit Versicherungskennzeichen\" klicken" },
        { key: "rk_step3", label: "Schritt 3 – Agenturnummer wählen", content: "→ Moped-Webanwendung öffnet sich\n→ BD-AGT / RD-AGT auswählen:\n\nAgenturnummern:\n• Benjamin: 00640 0006\n• Roland: 00640 00076\n• Marcel: 00640 0602\n\n→ Button \"Moped versichern\" klicken" },
        { key: "rk_step4", label: "Schritt 4 – Beitrag berechnen", content: "→ Versicherungsbeginn: Nach dem 01.03. das aktuelle Datum eintragen – NICHT rückwirkend!\n→ Fahrzeugart auswählen (siehe Übersicht unten)\n→ Versicherungsumfang: 100 Mio. € Deckungssumme\n→ Teilkasko: NUR bei Leicht-Kfz aktivieren, sonst ohne\n  (Teilkasko: 150 € SB, bei Totalentwendung 300 € SB)" },
        { key: "rk_fahrzeugarten", label: "Fahrzeugarten – Unterschiede", content: "• Mofa/Moped/Roller: max. 45 km/h, bis 50 ccm, Führerschein AM ab 15 J.\n• Leichtmofa: max. 20 km/h, keine Helmpflicht, ab 15 J. mit Prüfbescheinigung\n• Krankenfahrstuhl: Motorisierter Rollstuhl mit Fahrerlaubnis\n• Leicht-Kfz: Vierrädriges Leichtfahrzeug, max. 45 km/h, max. 350 kg leer\n• Pedelec (S-Pedelec): Tretunterstützung über 25 km/h, max. 45 km/h\n• Elektrokleinstfahrzeug: E-Scooter, max. 20 km/h\n• Segway: Elektrisch, max. 20 km/h\n• Leicht-Quad: Vierrädrig, max. 45 km/h" },
        { key: "rk_step5", label: "Schritt 5 – Persönliche Daten", content: "→ Anrede, Name/Firmenname, Straße, PLZ/Ort\n→ E-Mail-Adresse, Telefon (optional)\n→ Einverständniserklärung: \"per elektronischer Post\" ankreuzen" },
        { key: "rk_step6", label: "Schritt 6 – Fahrzeugdaten", content: "→ Fahrzeugart wählen (Dropdown)\n→ Fahrgestell-Nr. (FIN) vom Fahrzeugschein des Kunden\n→ Hersteller eingeben/auswählen\n→ Ausgabe Versicherungskennzeichen: \"Vertriebspartner\" wählen\n→ Kennzeichen eintragen (Format: 111 AAA)" },
        { key: "rk_step7", label: "Schritt 7 – Prüfen & Senden", content: "→ \"Prüfen und senden\" klicken\n→ NUR die erste Seite auf Vordruck ausdrucken\n→ ACHTUNG: Vorher prüfen wie rum der Vordruck in den Drucker kommt!" },
        { key: "rk_step8", label: "Schritt 8 – Dokument unterschreiben", content: "→ Ausgedrucktes Dokument unterschreiben lassen:\n• Unterschrift Versicherungsnehmer (Kunde)\n• Unterschrift Büro/Agentur\n→ Beide Unterschriften erforderlich!" },
        { key: "rk_step9", label: "Schritt 9 – Abholung & Zahlung", content: "→ Kunde erhält bei Abholung das Zahlungsdokument\n→ Beitrag muss überwiesen werden (KEINE Barzahlung)\n→ Kunde bringt Nachweis der Überweisung an uns",
          downloads: [{ label: "Roller Überweisung", file: "/docs/Roller Überweisung.pdf" }] },
        { key: "rk_step10", label: "Schritt 10 – Eintrag in Tabelle", content: "→ Vorgang in die Tabelle eintragen (Lisa verwaltet)\n→ Dient zur Nachverfolgung der Zahlungsbestätigung\n→ Lisa fasst nach falls Zahlungsbestätigung ausbleibt" },
      ]},
      { id: "vt_evb", icon: "🚗", title: "7. EVB (Elektronische Versicherungsbestätigung)", intro: "KFZ-spezifisch: EVB erstellen, übermitteln, Sonderfälle.", items: [
        { key: "evb_was", label: "Was ist eine EVB?", content: null },
        { key: "evb_wann", label: "Wann wird eine EVB benötigt?", content: null },
        { key: "evb_erstellen", label: "EVB erstellen", content: null },
        { key: "evb_uebermitteln", label: "EVB an Kunden übermitteln", content: null },
        { key: "evb_system", label: "Erfassung im System", content: null },
        { key: "evb_halterwechsel", label: "Halterwechsel", content: null },
        { key: "evb_sonder", label: "Sonderfälle (Doppelte EVB, Storno, abgelaufen)", content: null },
      ]},
    ],
  },

  // ============================================================
  // 5. SCHADEN & LEISTUNG
  // ============================================================
  {
    id: "schaden", label: "Schaden & Leistung", color: "#dc2626",
    gradient: "linear-gradient(135deg, #991b1b, #dc2626)",
    sections: [
      { id: "sch_meldung", icon: "🚨", title: "1. Schadenaufnahme", intro: "Erstbearbeitung eines eingehenden Schadensfalls – verantwortlich: Heike.", items: [
        { key: "sch_aufnahme", label: "Schadenaufnahme", content: "Alle relevanten Daten aufnehmen: Datum/Uhrzeit, Schadenhergang, Beteiligte, Polizeibericht ja/nein, Fotos, Policen-Nr. Strukturierte Schaden-Checkliste verwenden." },
        { key: "sch_kundeninfo", label: "Kundeninformation", content: "Kunden beruhigen. KEINE Deckungszusage. Erklären: \"Wir prüfen das mit der Versicherung und melden uns. Ihre Schaden-Nr. lautet…\". Eingangsbestätigung per E-Mail (Vorlage)." },
        { key: "sch_meldung_vers", label: "Meldung an Versicherer", content: "Schaden im EASY/Versicherer-Portal erfassen. Schadennummer erhalten. Fehlende Unterlagen (Fotos, Kostenvoranschläge) beim Kunden anfordern." },
        { key: "sch_doku", label: "Dokumentation", content: "Alle Daten im EASY unter \"Schadenfälle\" abspeichern. Eingehende Dokumente (Bilder, PDFs) anhängen. Zuständigen AD-Partner informieren." },
      ]},
      { id: "sch_bearbeitung", icon: "🔄", title: "2. Laufende Schadenbearbeitung", intro: "Nachverfolgung offener Schadenfälle bis zur Regulierung.", items: [
        { key: "sch_status", label: "Statuskontrolle", content: "Regelmäßig Status offener Schäden prüfen. Wiedervorlage-Termine nutzen: z.B. 1 Woche nach Meldung nachfassen falls keine Antwort vom Versicherer." },
        { key: "sch_versicherer", label: "Kommunikation mit Versicherer", content: "Bei stockender Bearbeitung: Schadenbearbeiter beim Versicherer kontaktieren. Offene Punkte klären. Alle ausgehenden Infos dokumentieren." },
        { key: "sch_kundenupdate", label: "Kundenupdates", content: "Kunden proaktiv auf dem Laufenden halten, besonders bei längerer Dauer. Ziel: Kunde muss nicht selbst nachfragen." },
        { key: "sch_fristen", label: "Fristenüberwachung", content: "Verjährungsfristen, Rückmeldefristen im Auge behalten per EASY/Outlook-Reminder. Bei Fristproblemen: Geschäftsleitung einschalten." },
      ]},
      { id: "sch_abschluss", icon: "✅", title: "3. Schadenabschluss", intro: "Abschluss, Kommunikation und Lessons Learned.", items: [
        { key: "sch_pruefung", label: "Entscheidung prüfen", content: "Bescheid des Versicherers lesen. Bei Zahlung: Höhe korrekt? Alles abgedeckt? Bei Ablehnung: Begründung verstehen, ggf. mit Spezialist besprechen ob Widerspruch sinnvoll." },
        { key: "sch_kunde_info", label: "Kunden benachrichtigen", content: "Persönliches Anschreiben/Anruf: \"Ihr Schadensfall wurde wie folgt entschieden…\". Bei Zahlung: ob Geld angekommen. Bei Ablehnung: Gründe erläutern, weitere Schritte prüfen." },
        { key: "sch_akte", label: "Akte schließen", content: "Im EASY als \"erledigt\" markieren. Abschlussnotizen (Ergebnis, Betrag). Alle Abschlussdokumente ablegen. AD-Partner informieren." },
      ]},
      { id: "sch_leistung", icon: "💰", title: "4. Leistungsabrechnungen", intro: "Planmäßige Leistungen außerhalb Schaden – verantwortlich: Lisa.", items: [
        { key: "sch_la_eingang", label: "Dokumenteingang", content: "Versicherer schickt Leistungsabrechnung (z.B. KV-Erstattung, LV-Ablaufleistung). Lisa ordnet dem richtigen Kunden zu." },
        { key: "sch_la_weiterleitung", label: "Weiterleitung & Erklärung", content: "Falls Kunde Original nicht hat: weiterleiten mit Anschreiben. Bei Rückfragen (\"Warum nur X€ erstattet?\") erläutern. Bei fachlichen Fragen: Spezialisten hinzuziehen." },
        { key: "sch_la_doku", label: "Dokumentation & Follow-up", content: "Abrechnung in EASY hinterlegen. Prüfen ob Folgemaßnahmen nötig (steuerliche Bescheinigung, AD-Partner informieren bei Beratungsanlass wie Geldanlage)." },
      ]},
    ],
  },

  // ============================================================
  // 6. EASY NUTZUNG
  // ============================================================
  {
    id: "easy", label: "EASY Nutzung", color: "#3b82f6",
    gradient: "linear-gradient(135deg, #1e40af, #3b82f6)",
    sections: [
      { id: "easy_routine", icon: "📋", title: "1. Routinen", intro: "Tägliche, wöchentliche und übergreifende Abläufe im EASY System.", items: [
        { key: "e_taeglich_aufgaben", label: "⏰ Täglich: Aufgaben-Kontrolle", content: "Jeden Morgen bei Arbeitsbeginn: Aufgaben kontrollieren. Erstes was ich tue." },
        { key: "e_taeglich_kalender", label: "⏰ Täglich: Kalender-Kontrolle", content: "Jeden Morgen: Kalender kontrollieren. Zweites was ich tue." },
        { key: "e_woechentlich_impulse", label: "📅 Wöchentlich: Kontrolle Impulse", content: "1x pro Woche: Impulse prüfen." },
        { key: "e_woechentlich_beitrag", label: "📅 Wöchentlich: Beitragsrückstand prüfen", content: "1x pro Woche für eure Agenturnummer prüfen ob Beitragsrückstand herrscht – für jeden Teampartner und seine Kunden." },
        { key: "e_doku", label: "🔁 Übergreifend: Dokumentationspflicht", content: "JEDER Kundenkontakt wird vermerkt. Wenn aus dem Kontakt eine Aufgabe oder ein Termin entsteht → gleich eintragen. Für sich selbst oder den entsprechenden Partner." },
      ]},
    ],
  },

  // ============================================================
  // 7. CRM TOOL
  // ============================================================
  {
    id: "crm", label: "CRM Tool", color: "#f97316",
    gradient: "linear-gradient(135deg, #c2410c, #f97316)",
    sections: [
      { id: "crm_produktion", icon: "⚡", title: "1. Produktion & Wertung", intro: "Regeln für negative/positive Produktion und Wertungseinträge.", items: [
        { key: "c_neg_prod", label: "Negative Produktion – 1. Jahr", content: "Im ersten Jahr: jegliche Veränderung am Vertrag (plus/minus) muss reingenommen werden." },
        { key: "c_kfz", label: "KFZ-Sonderregel", content: "Läuft der Vertrag länger als 1 Jahr im Bereich KFZ → nein (keine neg. Produktion)." },
        { key: "c_kuendigung", label: "Kündigungs-Regel", content: "Wenn der Kunde kündigt und wir nicht tätig werden → im 2. Jahr kein Storno im Sinne Geschäftsplan." },
        { key: "c_wertung", label: "Wertung eintragen", content: "Wenn wir was policieren, egal wann/wie → Wertung MUSS eingetragen werden." },
        { key: "c_abschluss", label: "Abschluss-Pflicht", content: "Bei Abschluss wird gepflegt – PFLICHT!!! Kundenunterschrift allein reicht nicht." },
        { key: "c_storno", label: "Storno-Ausschluss", content: "Wenn nur Kundenunterschrift vorhanden, aber kein beratener Prozess → im 2. Jahr kein Storno." },
      ]},
      { id: "crm_befuellung", icon: "💾", title: "2. CRM Befüllung – Schritt für Schritt", intro: "Anleitung zum korrekten Befüllen des CRM Systems.", items: [
        { key: "c_s1", label: "Schritt 1: Kunde anlegen/öffnen", content: null },
        { key: "c_s2", label: "Schritt 2: Vorgang erfassen", content: null },
        { key: "c_s3", label: "Schritt 3: Dokumentation anhängen", content: null },
        { key: "c_s4", label: "Schritt 4: Wertung eintragen", content: null },
        { key: "c_s5", label: "Schritt 5: Abschluss & Kontrolle", content: null },
      ]},
    ],
  },

  // ============================================================
  // 8. BACKOFFICE & ORGANISATION
  // ============================================================
  {
    id: "backoffice", label: "Backoffice & Organisation", color: "#64748b",
    gradient: "linear-gradient(135deg, #334155, #64748b)",
    sections: [
      { id: "bo_post", icon: "📬", title: "1. Post & E-Mail", intro: "Täglicher Posteingang/-ausgang, E-Mail-Verwaltung.", items: [
        { key: "bo_post_eingang", label: "Tägliche Postöffnung", content: "Jeden Morgen Briefpost öffnen. Sortieren nach Dringlichkeit/Art (Schäden, Vertragsunterlagen, Kündigungen). Jedes Dokument mit Eingangsdatum stempeln." },
        { key: "bo_post_verteilung", label: "Verteilung & Zuordnung", content: "Für jedes Schriftstück: zuständiger Mitarbeiter/Vorgang festlegen. Schadensanzeigen → Heike, Kündigungen → Lisa, Vertragsanfragen → zuständiger AD. Post in Ablagefächer oder digital verteilen." },
        { key: "bo_email", label: "E-Mail-Eingang managen", content: "Zentrales Postfach (info@...) mehrmals täglich prüfen. Laufende Vorgänge an Bearbeiter weiterleiten, neue Anfragen als Vorgang anlegen. Eingang bestätigen bei wichtigen Anliegen." },
        { key: "bo_post_ausgang", label: "Postausgang", content: "Ausgehende Dokumente sammeln, auf Vollständigkeit prüfen (Unterschrift, Kopien). E-Mails zeitnah versenden. Physische Post bis Postschluss frankieren und versenden." },
        { key: "bo_ablage", label: "Digitale Ablage", content: "E-Mails und Anhänge in EASY/digitaler Kundenakte speichern. Klare Dateinamen verwenden: \"2026-01-06_Schadenmeldung_KundeMueller.pdf\"." },
      ]},
      { id: "bo_archiv", icon: "🗂️", title: "2. Archivierung & Akten", intro: "Physische und digitale Ablagestrukturen.", items: [
        { key: "bo_akte_anlegen", label: "Kundenakte anlegen", content: "Für jeden Kunden: Ordner oder digitaler Ordner. Rückenschild mit Kundenname, Kundennummer, ggf. Geburtsdatum. Register/Trennblätter: Anträge, Policen, Korrespondenz, Schäden, Beiträge." },
        { key: "bo_akte_pflege", label: "Aktenpflege", content: "Neue Unterlagen zeitnah einsortieren. Jedes Dokument mit Datum versehen. Jährlich prüfen: Erledigte Vorgänge ins Archiv, Akte aktuell halten." },
        { key: "bo_digital", label: "Digitale Archivierung", content: "Papierdokumente scannen und in EASY/DMS ablegen. Indexierung für Wiederauffindbarkeit. Löschfristen beachten (DSGVO)." },
      ]},
      { id: "bo_controlling", icon: "📊", title: "3. Controlling & Buchhaltung", intro: "Zahlen, Berichte und Finanzen – verantwortlich: Johannes.", items: [
        { key: "bo_buch", label: "Finanzbuchhaltung", content: "Alle Geschäftsvorfälle verbuchen (Provisionen, Rechnungen, Gehälter). Belege sammeln, kontieren, Bankabgleich. Monatlich BWA erstellen. Vorbereitung USt-Voranmeldung und Jahresabschluss." },
        { key: "bo_zahlungen", label: "Zahlungsvorgänge", content: "Überweisungen zum richtigen Fälligkeitsdatum: Gehälter, Miete, Provisionen, Lieferanten. Zahlungsplan in Excel führen. Vier-Augen-Prinzip bei größeren Beträgen mit Benjamin." },
        { key: "bo_reporting", label: "Vertriebszahlen & Reporting", content: "Wöchentlich/monatlich: Daten aus EASY/Versicherer sammeln. In Excel-Controlling aufbereiten: Abschlüsse pro Partner/Sparte, Soll-Ist, KPIs. Berichte an Team und Geschäftsleitung." },
        { key: "bo_wochenziele", label: "Wochenziele tracken", content: "Montag: AD meldet Wochenziel. Freitag: Ist-Meldung. Johannes vergleicht Soll vs. Ist pro Person. Ergebnis per Rundmail oder im Montagsmeeting kommunizieren." },
        { key: "bo_zeit", label: "Arbeitszeiten & Urlaub", content: "Stundenzettel prüfen, Urlaubsanträge gegen Kalender prüfen (keine kritischen Überschneidungen). Genehmigung einholen, Team-Abwesenheitskalender pflegen." },
      ]},
      { id: "bo_compliance", icon: "🔒", title: "4. Compliance & Datenschutz", intro: "Gesetzliche Anforderungen und interne Richtlinien.", items: [
        { key: "bo_dsgvo", label: "DSGVO-Dokumentation", content: "Verarbeitungsverzeichnis führen. Löschfristen überwachen. Zugriffsberechtigungen regelmäßig prüfen." },
        { key: "bo_weiterbildung", label: "Pflichtweiterbildung (IDD)", content: "Versicherungsvermittler: mindestens 15 Stunden pro Jahr Weiterbildung. Seminare, Webinare, interne Workshops. Dokumentation der Stunden." },
        { key: "bo_richtlinien", label: "Richtlinien-Updates", content: "Interne Richtlinien nach gesetzlichen Vorgaben aktualisieren. Compliance-Schulungen für Mitarbeiter durchführen." },
      ]},
    ],
  },

  // ============================================================
  // 9. SOCIAL MEDIA
  // ============================================================
  {
    id: "socialmedia", label: "Social Media", color: "#e11d48",
    gradient: "linear-gradient(135deg, #9f1239, #e11d48)",
    sections: [
      { id: "sm_strategie", icon: "🎯", title: "1. Strategie & Konzept", intro: "Social Media Strategie 2026 – Team: Benni, Antonio, Mathias.", items: [
        { key: "sm_ziel", label: "Ziel & Ausgangslage", content: "Regelmäßiger Video-Content mit Benni als Experte → Beratungsanfragen, Engagement und Sichtbarkeit steigern. Status Quo: 600.000 Views/Monat durch humorvolle Inhalte – ernste Fachthemen müssen deutlich besser performen." },
        { key: "sm_zielgruppe", label: "Zielgruppe & Gewichtung", content: "40% Privatkunden (Familien, Angestellte, Selbständige). 60% Business (Unternehmer, GmbH-Geschäftsführer, Freiberufler, KMU). Zwei Kanäle (Instagram, TikTok) sprechen beide Gruppen an, mit je eigenem Schwerpunkt." },
        { key: "sm_tonalitaet", label: "Tonalität: \"Der Makler nebenan\"", content: "Professionell aber zugänglich – keine Phrasen. Klartext statt abstrakt, einfach erklärt. Nahbar, aber nicht kumpelhaft. Autorität durch Kompetenz." },
      ]},
      { id: "sm_formate", icon: "🎬", title: "2. Formate & Rhythmus", intro: "Content-Formate und Veröffentlichungsplan.", items: [
        { key: "sm_reels", label: "Primärformat: Reels 45–90 Sek", content: "Algorithmus-freundlich, höchste Reichweite. Kurz genug für Scrolling-Verhalten, lang genug für substanzielle Aussagen." },
        { key: "sm_karussell", label: "Karussell-Posts", content: "Für komplexere Themen (Steueroptimierung, Betriebsrente). Hohe Save-Rate = Algorithmus-Boost." },
        { key: "sm_rhythmus", label: "Wöchentlicher Rhythmus", content: "2 Speaking Posts pro Woche, 1x Overlay-Post, 4 witzige/leichte Inhalte pro Monat. Ergibt ca. 104 Speaking Posts/Jahr." },
      ]},
      { id: "sm_hooks", icon: "🪝", title: "3. Hook-Strategie", intro: "Test & Learn – verschiedene Einstiegstypen.", items: [
        { key: "sm_provokant", label: "Provokant (25%)", content: "\"Banken verkaufen dir Produkte, obwohl sie in 80% der Fälle ungeeignet sind.\" Polarisierende Thesen die Engagement auslösen." },
        { key: "sm_painpoint", label: "Pain-Point", content: "\"Kennst du das? Firma gegründet und dann passiert's.\" Relatables Problem ansprechen, Lösung anbieten." },
        { key: "sm_education", label: "Education", content: "\"3 Dinge, die sich bei der betrieblichen Altersvorsorge ändern.\" Aufklärung, Mythen-Busting, Fachwissen kompakt." },
        { key: "sm_story", label: "Story/Case (20%)", content: "\"Kunde kam letzte Woche, Beitrag bezahlt – und warum?\" Echte Fälle (anonymisiert), Schadensfälle, Lessons Learned." },
      ]},
      { id: "sm_perspektiven", icon: "👁️", title: "4. Die 7 Content-Perspektiven", intro: "Sieben Blickwinkel aus denen Content-Ideen entstehen.", items: [
        { key: "sm_p1", label: "1. Versicherer: Aufklärung & Mythen", content: "Was sollten Kunden wissen? Welche Mythen halten sich hartnäckig? (z.B. \"Hausrat zahlt bei Einbruch immer\" – FALSCH). Unterschied Makler/Vertreter, Deckungssummen, Wartezeiten, Obliegenheiten." },
        { key: "sm_p2", label: "2. Kunden-Emotionen & Bedürfnisse", content: "Soziale Trigger: Sicherheitsgefühl, Schutz der Familie, Zukunftsangst, Kontrollverlust. Fragen: \"Brauche ich das?\", \"Wie viel ist genug?\", \"Was brauche ich NICHT?\"" },
        { key: "sm_p3", label: "3. Social Media Viralität", content: "Reichweite durch polarisierende Thesen, Pain-Points, Storytelling-Hooks. Engagement-Calls: Umfragen, \"Rate mal\", \"Schreib JA in die Kommentare\"." },
        { key: "sm_p4", label: "4. Business & ROI", content: "60% Zielgruppe Business-Mindset. Opportunitätskosten, Investitionsschutz, Cyber-Versicherung als Voraussetzung. \"Ohne Versicherung kein Kredit/Auftrag.\" Steueroptimierung: bAV, Gehaltsumwandlung." },
        { key: "sm_p5", label: "5. Psychologie & Verhaltensökonomie", content: "Optimismus-Bias: \"Wir denken 'Mir passiert das nicht' – Statistik sagt anderes.\" Verdrängungsmechanismen. Entscheidungs-Paralyse: \"Zu viel Auswahl? So findest du's in 10 Minuten.\"" },
        { key: "sm_p6", label: "6. Branchen-Insider", content: "Was darf Benni sagen? Provisionen, Beratung vs. Verkauf, Produkt-Wahrheit. No-Bullshit: \"Was ich noch nie gesagt hab, aber ihr wissen solltet.\"" },
        { key: "sm_p7", label: "7. News-Jacking", content: "Aktuelle Marktentwicklungen nutzen: Betriebsrenten-News, Crashs, Edelmetalle, neue Gesetze. Saisonal: Ski-Unfall (Winter), Hochwasser (Frühjahr), Reise-Pannen (Sommer), KFZ-Wechsel (Herbst)." },
      ]},
      { id: "sm_monatsplan", icon: "📅", title: "5. Monatsthemen 2026", intro: "Schwerpunktthemen pro Monat.", items: [
        { key: "sm_m02", label: "Februar: Jahresstart, Steuer, Winter-Risiken", content: "Jahresstart-Optimierung, Steuertipps, Winter-Risiken (Glatteis, Frostschäden). \"Neujahrsvorsätze\"-Content." },
        { key: "sm_m03", label: "März: Cyber, Unternehmer-Absicherung", content: "Cyber-Versicherung, Unternehmer-Absicherung, Frühjahrs-Check bestehender Verträge." },
        { key: "sm_m04", label: "April: Vorauszahlung, Rechtsschutz", content: "Steuervorauszahlung, Rechtsschutz-Themen, aktuelle Trends." },
        { key: "sm_m05", label: "Mai: Reiseversicherung, Vorsorge", content: "Reiseversicherung (Sommerurlaub-Planung), private Vorsorge, Altersvorsorge, Mythen-Busting." },
        { key: "sm_m06", label: "Juni: Sommerloch kreativ nutzen", content: "Mid-Year Review, leichtere Themen, Investment-Strategien, Inflation, Edelmetalle." },
        { key: "sm_m078", label: "Juli/August: Urlaubs-Pannen", content: "Urlaubs-Pannen, Auslandskrankenversicherung, Story-Heavy Content." },
        { key: "sm_m09", label: "September: Betriebliche AV, Q4", content: "Betriebliche Altersvorsorge, Q4-Planung, Herbst-Trigger." },
        { key: "sm_m10", label: "Oktober: KFZ-Wechsel, Winterreifen", content: "KFZ-Wechselsaison, Winterreifen, Jahresend-Vorbereitung." },
        { key: "sm_m11", label: "November: Wechsel-Tipps, Jahres-Hacks", content: "Versicherungswechsel-Tipps, Steuer-Hacks für Jahresende." },
        { key: "sm_m12", label: "Dezember/Januar: Neujahr", content: "Neustart-Effekt, Jahresrückblick, Vorsätze-Content." },
      ]},
      { id: "sm_team", icon: "👥", title: "6. Team-Rollen", intro: "Wer macht was im Social Media Workflow.", items: [
        { key: "sm_benni", label: "Benni – On-Camera & Freigabe", content: "Gesicht der Agentur. On-Camera Experte, finale Freigabe, inhaltliche Durchsicht." },
        { key: "sm_antonio", label: "Antonio – Planung, Schnitt, Management", content: "Hauptverantwortlich:\n• Script-Vorlagen\n• Schnitt (CapCut/Canva)\n• Plattform-Management (Buffer/Meta Suite)\n• Scheduling\n• Kommentar-Monitoring\n• Reporting & Analytics" },
        { key: "sm_mathias_sm", label: "Mathias – Support & Strategie", content: "Strategische Unterstützung, Content-Ideen-Entwicklung, Konzeptarbeit, Feedback-Runden." },
      ]},
      { id: "sm_workflow", icon: "⚙️", title: "7. Produktions-Workflow", intro: "Vom Script bis zum Post.", items: [
        { key: "sm_wf_script", label: "Script & Vorbereitung", content: "Content-Idee auswählen (aus 104er-Liste), Script schreiben, Hook testen." },
        { key: "sm_wf_dreh", label: "Batch-Drehs", content: "4 Videos pro Batch. Gleicher Tag, gleiche Location, verschiedene Outfits." },
        { key: "sm_wf_schnitt", label: "Schnitt & Nachbearbeitung", content: "Antonio schneidet (CapCut/Canva). Thumbnails, Untertitel." },
        { key: "sm_wf_posting", label: "Scheduling & Monitoring", content: "Automatisiert via Buffer/Meta Suite. Kommentare monitoren. Engagement in ersten Stunden aktiv pushen." },
        { key: "sm_wf_reporting", label: "Monatliches Reporting", content: "KPIs: Shares, Follower-Wachstum, Engagement-Rate. Excel-Sheet + 5-Min-Summary. Quarterly Review: Welcher Stil funktioniert? Flops eliminieren, Erfolge skalieren." },
      ]},
      { id: "sm_compliance", icon: "⚠️", title: "8. Compliance & No-Gos", intro: "Was erlaubt ist und was nicht.", items: [
        { key: "sm_erlaubt", label: "Erlaubt", content: "Finanzmarkt-Themen, Edelmetalle, Rechtsschutz-Produkte. Produktnamen außerhalb von ERGO (zur Warnung/Vergleich). Aufklärung und Education." },
        { key: "sm_nogo", label: "No-Gos", content: "Krypto-Empfehlungen, konkrete Renditeversprechen ohne Disclaimer, steuerrelevante Einzelfall-Beratung. Keine Garantieaussagen." },
      ]},
    ],
  },
];
