# TODO – marvin-max.ch

Persönliches Portfolio & Lernprojekt. Aufgaben nach Priorität sortiert, oben zuerst.

---

## 🔴 Prio 1 – Fehler auf der Startseite (schnell erledigt)

- [ ] **Hero-Text aufräumen**: In `.hero-text` steht noch `▎ IT-Systemtechniker & angehender Web Developer`. Zeile inkl. `▎` löschen, die Rolle gehört nur in `.hero-role`.
- [ ] **`.hero-role` korrigieren**: „IT Systemtechniker  & Web Developer“ → Bindestrich (`IT-Systemtechniker`), doppeltes Leerzeichen entfernen, `&` als `&amp;` schreiben. Evtl. „angehender Web Developer“ übernehmen.
- [ ] **Nav-Hover unsichtbar**: `.nav-list a:hover` nutzt `--color-border` (dunkel auf dunkel). Hellere Farbe verwenden, z. B. `--color-primary-light` oder `--color-text`.
- [ ] **Kontakt-Button Hover**: `.contact-button:hover` nutzt `--color-border-hover` als Hintergrund, dunkle Schrift darauf ist schwer lesbar. Besser `--color-primary-hover` (wie beim Hero-Button).
- [ ] **Font-Fallback**: `body { font-family: "Space Grotesk"; }` → `"Space Grotesk", sans-serif`.
- [ ] **Footer**: `align-items: center;` in `.footer` ergänzen.
- [ ] **`.menu-name` hat Standard-Margin**: Seit es ein `<p>` ist, hat es oben/unten `margin`, der Header wird dadurch höher. `margin: 0` setzen.
- [ ] Danach **committen** 🎉

## 🟠 Prio 2 – Grundlagen, die jede Seite braucht

- [ ] **CSS-Pfade relativ machen**: `/CSS/style.css` → `CSS/style.css`. Sonst lädt kein Style, wenn man die Datei direkt im Browser öffnet.
- [ ] **CSS-Reihenfolge**: `colors.css` vor `style.css` laden (erst Variablen, dann Styles).
- [ ] **Logo-Link**: `menu-name a` zeigt auf `https://www.marvin-max.ch`. Relativ auf `index.html` oder `/` verlinken.
- [ ] **`<meta name="description">`** ergänzen (kurzer Satz, worum es auf der Seite geht).
- [ ] **Favicon** einbinden.
- [ ] **Header & Footer fertig machen, bevor sie auf die Unterseiten kopiert werden**, sonst muss jede Änderung mehrfach gemacht werden.

## 🟡 Prio 3 – Unterseiten bauen

Alle Seiten mit gleichem `<head>`, Header und Footer wie `index.html`, `lang="de"` und einem passenden `<title>`.

- [ ] **`about.html`** (leer): Geschichte, Beruf/Ausbildung, Skills („Was ich kann“ / „Was ich gerade lerne“), Hobbys, evtl. Foto.
- [ ] **`projekte.html`** (leer): Projekte als Cards (Bild, Titel, 1 Satz, Link). Erstes Projekt: diese Webseite selbst.
- [ ] **`kontakt.html`** (nur Grundgerüst, noch `lang="en"` und `<title>Title</title>`): E-Mail, GitHub/LinkedIn, später evtl. Formular.
- [ ] **`impressum.html`** (leer): Name, Adresse, E-Mail.
- [ ] **`datenschutz.html`** (leer): Google Fonts erwähnen (IP-Adresse geht an Google), oder Fonts selbst hosten (siehe Prio 5).

## 🟢 Prio 4 – Design & Barrierefreiheit

- [ ] **Hero aufwerten**: z. B. weicher Lichtschein im Hintergrund (`radial-gradient`) oder feines Gitter-/Punktmuster.
- [ ] **Badge über dem Hero-Titel**: z. B. „● Work in Progress“.
- [ ] **Name im Header in Audiowide**, damit er wie ein Logo wirkt.
- [ ] **Header abgrenzen**: `border-bottom` oder `box-shadow`.
- [ ] **Sticky Header**: `position: sticky; top: 0;`.
- [ ] **Sticky Footer**: Footer soll bei wenig Inhalt ganz unten kleben (Stichwort: „sticky footer flexbox“).
- [ ] **Aktiven Nav-Link markieren**: auf Unterseiten zeigen, welche Seite gerade offen ist.
- [ ] **`:focus-visible`-Styles** für Tastaturnutzer (aktuell nur `:hover`).
- [ ] **`aria-label="Hauptnavigation"`** auf `<nav>`.
- [ ] **„Skip to content“-Link** vor der Navigation.

## 🔵 Prio 5 – Aufräumen & später

- [ ] **Doppeltes CSS entfernen**: `ul` und `.nav-list` setzen beide `list-style`, `margin`, `padding`. `.navbar` hat `gap` und `text-align`, die nichts bewirken. `}.navbar {` auf eigene Zeile.
- [ ] **`fonts.css` aufräumen**: `.audiowide-regular` und `.space-grotesk` werden nirgends benutzt. Klassen verwenden oder Datei entfernen.
- [ ] **Einheitliche Einrückung** in `index.html` (Hero-Section ist anders eingerückt). JetBrains: Strg + Alt + L.
- [ ] **Google Fonts selbst hosten** (Datenschutz).
- [ ] **Responsive Design / Media Queries**: bewusst erst am Schluss.
- [ ] **JavaScript-Ideen**: Jahreszahl im Footer automatisch (`new Date().getFullYear()`), Tipp-Effekt im Hero.
- [ ] **Lern-Log / Changelog** als eigene Seite oder Sektion.
- [ ] **README.md** anpassen (steht noch „Vorlage“ drin).

---

## ✅ Erledigt

- [x] Header mit Navigation
- [x] Hero-Section mit Titel, Rolle, Text und Buttons
- [x] CSS-Spezifitäts-Konflikt beim Kontakt-Button (`:not(.contact-button)`)
- [x] `lang="de"` auf `index.html`
- [x] Nur noch ein `<h1>` (Name im Header ist jetzt `<p>`)
- [x] Schriftgröße im Header in `rem` statt `px`
- [x] Footer mit Copyright, Impressum/Datenschutz-Links und Spruch
- [x] `impressum.html` und `datenschutz.html` angelegt
