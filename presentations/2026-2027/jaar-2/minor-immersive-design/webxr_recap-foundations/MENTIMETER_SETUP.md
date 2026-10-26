# Mentimeter instellen — WebXR Recap

De vragen, de code en de antwoordopties A–D staan in de Reveal-presentatie, links op de slide.
Mentimeter heb je alleen nodig voor het **stemmen** en de **live grafiek**. Die verschijnt rechts in een iframe.
Daarom houd je de Mentimeter-slides bewust kaal: alleen een korte vraagtitel en de letters.

## 1. Maak één Mentimeter-presentatie met 6 slides

Zet vooraf in de presentatie-instellingen het **verzamelen van deelnemersnamen** aan. Studenten stemmen op naam.

| # | Reveal-slide | Mentimeter-type | Vraagtitel (copy-paste) | Opties / labels (copy-paste) |
|---|---|---|---|---|
| 1 | Slide 4 | Multiple Choice | `Vraag 1 — Nieuwe position van de strandbal?` | `A` · `B` · `C` · `D` |
| 2 | Slide 6 | Multiple Choice | `Vraag 2 — Welke twee fouten in de vuurtoren-code?` | `A` · `B` · `C` · `D` |
| 3 | Slide 7 | Multiple Choice | `Vraag 3 — Waarom reageert de schelp niet?` | `A` · `B` · `C` · `D` |
| 4 | Slide 9 | Multiple Choice | `Vraag 4 — Welke combinatie voor schaduw + geluid?` | `A` · `B` · `C` · `D` |
| 5 | Slide 10 | Scales | `Zelfdiagnose — hoe sterk sta jij per pijler?` | Stellingen: `3D-ruimte & XYZ` · `ECS & externe assets` · `Interactie & scripting` · `Sfeer & zintuigen`<br>Schaal `1`–`5`, labels: laag `Hulp nodig`, hoog `Kan het uitleggen` |
| 6 | Slide 12 | Open Ended | `Exit-ticket — Kracht: … / Oefenen: …` | geen |

Tips:
- **Vraag 1–4: kies Multiple Choice, niet Quiz.** Een quiz voegt een timer en een scorebord toe. Dat leidt af van de peer instruction.
- **Markeer géén goed antwoord** in Mentimeter. Het antwoord bespreek je pas na de peer-discussie.
- **Vraag 5:** een spider chart (radarweergave) kies je bij de resultaatweergave, áls je account die aanbiedt. Anders werkt de standaardweergave van Scales ook.
- **Vraag 6:** zet het aantal antwoorden per deelnemer op 1 als dat kan. Zo komt per student één regel binnen.

Correcte antwoorden (alleen voor jou, staan ook in de speaker notes): 1 = B, 2 = B, 3 = A, 4 = B.

## 2. Vul de configuratie in `index.html` in

Open `index.html` en ga naar het **onderste `<script>`-blok**. Daar staat bovenaan één object:

```js
const MENTI = {
  code: '0000 0000',
  embedUrl: 'https://www.mentimeter.com/app/presentation/JOUW_MENTI_ID/embed',
  perSlide: { q1: '', q2: '', q3: '', q4: '', scales: '', exit: '' },
  startHidden: true,
};
```

- **`code`**: de deelnamecode die Mentimeter toont (bijv. `'1234 5678'`). Die verschijnt in de statusbalk boven elk iframe.
- **`embedUrl`**: de embed-link van je presentatie. Die vind je in Mentimeter onder *Share* → embedden. Vervang de hele placeholder-URL.
  Zolang er `JOUW_MENTI_ID` in staat, toont elke slide een invulhint in plaats van een iframe.
- **`perSlide`** (optioneel): heb je per vraag een eigen link, vul die dan hier in. Een leeg veld valt terug op `embedUrl`.
  - `q1` = slide 4, `q2` = slide 6, `q3` = slide 7, `q4` = slide 9, `scales` = slide 10, `exit` = slide 12.
- **`startHidden`**: `true` laat de grafiek bij binnenkomst afgedekt staan. Het iframe blijft wel geladen, dus het stemmen loopt gewoon door.

## 3. Controleer vóór de les

1. Start de deck lokaal met `npm run serve` (vanuit de repo-root). Open hem daarna via `http://localhost:3000/…`.
2. Ga naar slide 4. Je moet in het iframe **vraag 1** zien.
   Toont één embed-link altijd de eerste vraag? Navigeer dan binnen het iframe naar de juiste vraag, of vul per vraag een link in bij `perSlide`.
3. Weigert het iframe te laden (lege of grijze box)? Dan staat het embedden voor jouw account of link niet toe.
   Presenteer Mentimeter dan in een apart venster. De vraag en de opties blijven gewoon in Reveal staan.

## Bediening tijdens de les

| Actie | Hoe |
|---|---|
| Grafiek tonen of afdekken | knop **[ Verberg / Toon grafiek ]** onder het iframe, of toets **M** |
| Speaker notes met antwoorden en tijdstempels | toets **S** |
| Stappen in code en feedback (slide 5–8) | pijltoets of spatie |

Let op: zolang de grafiek is afgedekt, zie je ook de deelnameteller in het iframe niet meer.
Houd de teller daarom in de gaten via Mentimeter op je telefoon of tweede scherm, en toon de grafiek pas bij 100%.

Na de les exporteer je de resultaten van vraag 5 en 6 voor je collega via de resultaten-download in Mentimeter.
