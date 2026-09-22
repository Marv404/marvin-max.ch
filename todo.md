# TODO – index.html

Sammlung aller besprochenen Punkte für die Startseite.

## Offene Bugs / Fehler

- [ ] **CSS-Spezifitäts-Konflikt beim Kontakt-Button**: `.nav-list a` und `.nav-list a:hover` überschreiben aktuell `.contact-button` bzw. `.contact-button:hover` (Farbe, evtl. schlechter Kontrast beim Hover). Fix: `.nav-list a:not(.contact-button)` verwenden, damit sich die Regeln nicht in die Quere kommen.
- [ ] `body { font-family: "Space Grotesk"; }` hat kein Fallback (`, sans-serif` fehlt) – ergänzen für den Fall, dass der Font nicht lädt.
- [ ] `fonts.css` aufräumen: `.audiowide-regular` und `.space-grotesk` sind als Klassen ungenutzt (Font wird direkt per `font-family` in `style.css` gesetzt, nicht über diese Klassen). Entweder Klassen wirklich verwenden oder Datei/Klassen entfernen.

## Semantik & SEO

- [ ] Zwei `<h1>` auf der Seite (`menu-name` im Header + `hero-title`) – nur eine `<h1>` pro Seite verwenden, Logo z.B. als `<p>`/`<span>` statt `<h1>`.
- [ ] `<html lang="en">` → sollte `lang="de"` sein, da der Content Deutsch ist.
- [ ] Favicon einbinden.
- [ ] `<meta name="description">` ergänzen.
- [ ] Logo-Link (`menu-name a`) zeigt hart auf `https://www.marvin-max.ch` – auf der Startseite besser relativ (`/` oder `#`) verlinken.

## Barrierefreiheit

- [ ] `aria-label="Hauptnavigation"` auf `<nav>` ergänzen.
- [ ] `:focus-visible`-Styling für Tastaturnutzer ergänzen (aktuell nur `:hover`).
- [ ] "Skip to content"-Link vor der Navigation einbauen.

## Design / UX

- [ ] Aktiven Nav-Link markieren (z.B. auf Unterseiten hervorheben, welche Seite gerade aktiv ist).
- [ ] Header ggf. `position: sticky; top: 0;` geben, damit er beim Scrollen sichtbar bleibt.
- [ ] Leichten `border-bottom` oder `box-shadow` am Header ergänzen, um ihn optisch vom Hero-Bereich abzugrenzen.
- [ ] Social-Links (GitHub, LinkedIn, E-Mail) im Header ergänzen.
- [ ] Optional: CV/Lebenslauf-Download-Link im Header.

## Typografie

- [ ] Entscheiden/konsequent umsetzen: Space Grotesk für Fließtext/Nav/Buttons, Audiowide nur für Headline/Logo als Akzent (aktuell größtenteils schon so umgesetzt, nochmal gegenchecken).

## Inhalt / Struktur der Startseite

- [ ] Kurzes "Über mich"-Teaser (2–3 Sätze) mit Link "Mehr über mich" → `about.html`.
- [ ] Skills/Tech-Stack-Sektion (Badges/Icons der verwendeten Sprachen, Frameworks, Tools).
- [ ] "Featured Projects"-Sektion mit 2–3 Highlight-Projekten (Card, Bild, Titel, kurze Beschreibung, Link) + "Alle Projekte ansehen" → `projekte.html`.
- [ ] Kontakt-CTA-Sektion am Seitenende ("Lust auf Zusammenarbeit? Schreib mir") mit Button → `kontakt.html`.
- [ ] Footer mit Copyright, Social-Links, evtl. kleinen Sitemap-Links.

## Fehlende Seiten

- [ ] `about.html`, `projekte.html`, `kontakt.html` existieren noch nicht – Nav-Links laufen aktuell ins Leere.

## Bewusst zurückgestellt

- [ ] Media Queries / Responsive Design – wird laut Absprache erst am Schluss gebaut.
