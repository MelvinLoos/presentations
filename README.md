# GLR CSD — Presentatie-monorepo

Reveal.js presentatie-monorepo voor de opleiding **Creative Software Developer
(MBO 4)** van het **Grafisch Lyceum Rotterdam**. Presentaties worden geschreven
als platte tekst (Markdown) volgens het *Slides-as-Code*-principe en gedeeld via
één centrale repository.

Zie voor de volledige architectuur en richtlijnen:
[`architectuur_reveal_js_monorepo.md`](architectuur_reveal_js_monorepo.md).

## Mappenstructuur

```text
.
├── .github/workflows/deploy.yml    # CI/CD: build, PDF-export en deploy naar GitHub Pages
├── .skills/reveal-slide-builder/   # Agent Skill voor structuur, styling en didactiek
├── .agents/skills/                 # Agentskills-runtime (o.a. educational-presentation-nl)
├── input/                          # Lokale staging voor brondocumenten (niet in Git)
├── presentations/                  # De presentaties, per cohort/jaar/vak
├── shared/                         # Gedeelde assets
│   ├── css/glr-theme.css           # GLR-huisstijl (kleuren, typografie, utilities)
│   ├── fonts/                      # Space Grotesk + Hanken Grotesk (.ttf)
│   ├── img/glr-logo.svg            # Logo
│   ├── js/glr-plugins.js           # Gedeelde plugins/controllers (timer, kleurenwiel)
│   └── vendor/                     # reveal.js (gegenereerd met `npm run vendor`)
├── scripts/
│   ├── build-index.js              # Bouwt de portaalpagina (dist/index.html)
│   ├── export-pdf.js               # PDF-export via DeckTape
│   └── vendor-reveal.js            # Kopieert reveal.js uit node_modules
├── package.json
└── README.md
```

## Snelstart

Vereist Node.js ≥ 20.

```bash
npm install          # installeert reveal.js en tooling
npm run vendor       # zet reveal.js klaar in shared/vendor/ (offline)
npm run serve        # start een lokale server op http://localhost:3000
```

Open daarna een presentatie via de server, bijvoorbeeld
`http://localhost:3000/presentations/…/index.html`. De markdown-plugin haalt
`slides.md` op via HTTP, dus open presentaties **niet** via `file://`.

## Een nieuwe presentatie maken

1. Plaats het brondocument (`.pptx`, `.pdf`, `.docx`, …) in `input/`.
   Deze map staat in `.gitignore` en blijft dus strikt lokaal (AVG/auteursrecht).
2. Laat de Agent Skill **`reveal-slide-builder`** het bronmateriaal omzetten naar
   een `slides.md` die voldoet aan de syntax- en didactiekregels.
3. Kopieer de templates uit
   [`.skills/reveal-slide-builder/templates/`](.skills/reveal-slide-builder/templates)
   naar een nieuwe map onder
   `presentations/<cohort>/<jaar>/<vak>/<presentatie>/`.
4. Werk de YAML-frontmatter bij (titel, cohort, leerjaar, periode, tags) en
   bekijk het resultaat met `npm run serve`.

> **Diepte van presentatiemappen.** De gedeelde wrapper `index.html` verwijst met
> `../../../../../shared/` naar de gedeelde map — dat werkt zolang een
> presentatie 5 niveaus onder de repo-root staat
> (`presentations/<cohort>/<jaar>/<vak>/<presentatie>/`). Nest je dieper of
> ondieper, pas dan het aantal `../` in `index.html` aan.

## Scripts

| Commando | Wat het doet |
|---|---|
| `npm run vendor` | Kopieert reveal.js uit `node_modules` naar `shared/vendor/` |
| `npm run build:index` | Bouwt de portaalpagina `dist/index.html` uit de presentaties + frontmatter |
| `npm run build` | `vendor` + `build:index` |
| `npm run export:pdf` | Exporteert elke presentatie naar `presentation.pdf` via DeckTape (Docker) |
| `npm run export:pdf -- --local` | Idem, maar met een lokaal geïnstalleerde `decktape` |
| `npm run serve` | Start een statische server in de repo-root |

## Deployment (CI/CD)

Bij elke push naar `main` draait `.github/workflows/deploy.yml`: dependencies
installeren, reveal.js vendoren, de `dist/`-map opbouwen, per presentatie een PDF
genereren en het geheel publiceren naar **GitHub Pages**. Op de portaalpagina
(`dist/index.html`) staan per presentatie links naar de slides en de PDF.

## Conventies

- **Slides-as-Code**: inhoud in Markdown met YAML-frontmatter; opmaak via de
  GLR-huisstijl (`shared/css/glr-theme.css`), niet via ad-hoc HTML/CSS.
- **Didactiek**: leerdoelen ("Aan het einde van deze les kun je…"), actieve
  verwerkingsopdrachten en een afsluitende samenvatting. Zie de skill
  `reveal-slide-builder` en `educational-presentation-nl`.
- **Toegankelijkheid**: WCAG 2.2 AA — contrast ≥ 4.5:1, broodtekst ≥ 24px,
  beschrijvende `alt`-tekst.

> **Let op — skillslocatie.** De architectuurspecificatie schrijft `.skills/`
> voor; dit bestand volgt die afspraak. De actieve agentskills-runtime van deze
> omgeving leest echter `.agents/skills/` (zie `skills-lock.json`). Wil je de
> `reveal-slide-builder`-skill door de agent laten oppikken, verplaats of symlink
> hem dan naar `.agents/skills/reveal-slide-builder/`.
