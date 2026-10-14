---
title: "Elevator Pitches & MVP kick-off"
cohort: "2026-2027"
leerjaar: 2
periode: 1
auteur: "Docententeam CSD"
tags: ["Beroeps", "Agile", "MVP", "GitHub Projects", "Design Thinking"]
<!-- .slide: data-visibility="hidden" -->
---

# Stop de ontkoking.
### De laatste pitches — en dan bouwen we de MVP.
*Creative Software Developer — Grafisch Lyceum Rotterdam · BEROEPS2 · week 4*

Note: Welkom bij BEROEPS2, week 4. We zitten op de helft van de periode. Vandaag twee dingen: eerst krijgen de teams die nog niet aan de beurt waren hun elevator pitch, daarna beginnen we met de MVP — de minimale versie van jullie product die het idee al bewijst. Ga direct bij je team zitten, we starten meteen.

---

<p class="kicker">Leerdoelen</p>

## Aan het einde van deze les kun je …

1. je concept in een korte **elevator pitch** (30–60 seconden) presenteren aan de opdrachtgever;
2. uitleggen waarom een project zonder één beheerd bord onbestuurbaar wordt;
3. een **MVP** opknippen in kleine, zelfstandige taken (issues) op een GitHub Projects-bord;
4. bij andermans pitch een concrete <span class="highlight">Top</span> en <span class="highlight">Tip</span> geven.

Note: Benoem de doelen expliciet (Gagné, gebeurtenis 2). Koppel doelen 1 en 4 aan de pitches van vandaag en doelen 2 en 3 aan de MVP-kick-off.

---

<p class="kicker">Status · Waar staan we?</p>

## Het concept staat — nu moet de MVP het bewijzen

<span class="pill">Onderzoek &amp; concept</span> → <span class="pill">Elevator pitch</span> → <span class="pill">MVP bouwen</span> → <span class="pill">Testen met gebruikers</span>

<div class="cards">
  <div class="glr-card">
    <span class="k">Afgerond</span>
    <h3>Onderzoek &amp; concept</h3>
    <p>Het idee is onderzocht, gekozen en aangescherpt met <strong>Design Thinking</strong>. De kern van het probleem is helder.</p>
  </div>
  <div class="glr-card glr-card--accent">
    <span class="k">Vandaag &amp; hierna</span>
    <h3>MVP bouwen</h3>
    <p>De pitches afmaken en de <strong>MVP</strong> opknippen in kleine taken in <strong>GitHub Projects</strong>, zodat iedereen weet wat te bouwen.</p>
  </div>
</div>

Note: Even de status. We zijn op de helft van de periode. Het onderzoek en het concept staan: jullie weten welk probleem jullie oplossen en waarom. Vandaag maken we de pitches af voor de laatste teams en zetten we de stap naar de MVP. Een MVP is niet het eindproduct — het is de kleinste versie die bewijst dat je idee werkt. Daarvoor hebben we straks een strak projectbord nodig.

---

<p class="kicker">De aanpak · Design Thinking</p>

## Design Thinking geeft de route: van probleem naar prototype

Je doorloopt vijf stappen — en je mag altijd terug.

<figure>
  <img src="assets/design-thinking-proces.png" alt="Diagram van het Design Thinking-proces: vijf stappen (Empathize, Define, Ideate, Prototype, Test) met uitleg, verbonden in een iteratieve cyclus.">
  <figcaption>Design Thinking — vijf stappen, iteratief. Bron: MrJanzen1984 via Wikimedia Commons (CC BY-SA 4.0).</figcaption>
</figure>

Note: Design Thinking is onze routekaart: Empathize (begrijp de gebruiker), Define (formuleer het probleem), Ideate (bedenk oplossingen), Prototype (maak het tastbaar) en Test (toets met gebruikers). Het is geen rechte lijn — je mag altijd terug. Vorige periode hebben jullie dit doorlopen; vandaag oogsten we de opbrengst en gaan we bouwen.

---

<p class="kicker">Opwarmer · Spot de fouten</p>

## Hoeveel fouten zie jij op dit bord?

Bekijk dit sprintbord met je team en noem zoveel fouten als je kunt — let op de titels, de labels en wie wat doet.

<div class="cards">
  <div class="glr-card">
    <span class="k">To do (6)</span>
    <p>dingen · website · website maken · Hele website bouwen · koffie halen · ideeën</p>
  </div>
  <div class="glr-card">
    <span class="k">In progress (5)</span>
    <p>login (urgent · S) · login fixen (urgent · S) · database + api + design (urgent · Y) · Maak alles af · ?</p>
  </div>
  <div class="glr-card">
    <span class="k">In review (1) · Done (2)</span>
    <p>design · website live (urgent · S) · presentatie (Y)</p>
  </div>
</div>

Note: Werkvorm, ongeveer 3 minuten. Laat elk team naar het bord kijken en fouten opsommen. Vraag: wat valt je op, en wat zou jij anders doen? Inventariseer klassikaal; de antwoorden staan op de volgende slide.

--

### Dit valt op

<ul class="check">
  <li>Dubbele taken: “website” én “website maken”; “login” én “login fixen”.</li>
  <li>Geen echte taken: “koffie halen” en “ideeën”.</li>
  <li>Te grote taken (niet atomic): “Hele website bouwen”, “Maak alles af”, “database + api + design”.</li>
  <li>Geen type-labels (Epic / Task / Bug), dus je ziet de grootte niet.</li>
  <li>Alles is “urgent” — als alles urgent is, is niets urgent.</li>
  <li>Bijna niemand is toegewezen; één persoon (S) doet drie taken: geen eigenaarschap.</li>
  <li>Te veel tegelijk in “In progress” (WIP te hoog), dus niets wordt afgerond.</li>
  <li>Geen acceptatiecriteria en geen datums; “Done” bevat ongecontroleerd werk.</li>
</ul>

Note: Loop de fouten klassikaal langs. Sluit af met de brug naar de volgende slide: precies daarom spreken we één beheerd bord en atomic issues af.

---

<p class="kicker">Werkwijze · GitHub Projects</p>

## Zonder één beheerd bord wordt je project onbestuurbaar

<div class="grid2">
  <div class="glr-card glr-card--accent">
    <span class="k">Het knelpunt</span>
    <h3>Werk leeft in hoofden en chats</h3>
    <p>Taken leven in iemands hoofd of in losse chatberichten. Niemand ziet wie waaraan werkt — en werk blijft liggen.</p>
  </div>
  <div class="glr-card">
    <span class="k">De afspraak</span>
    <h3>Alles op één bord</h3>
    <p>Alles wat gebouwd wordt, staat als <strong>issue</strong> op één bord. Wat niet op het bord staat, gebeurt niet.</p>
  </div>
</div>

<figure>
  <img src="assets/github-projects-board.png" alt="Screenshot van een GitHub Projects-board met kolommen zoals Triage, Not Started, Planning en Building, gevuld met issue-kaarten met labels en toegewezen teamleden.">
  <figcaption>GitHub Projects — boardweergave met kolommen en kaarten. Bron: github/docs (CC BY 4.0).</figcaption>
</figure>

Note: Als taken alleen in jullie hoofd of in chatberichten leven, weet niemand wie waaraan werkt en blijft werk liggen — dat noemen we cowboy coding. De afspraak is simpel: alles wat gebouwd wordt, staat als issue op één gedeeld bord in GitHub Projects. Laat de boardweergave zien: elke kaart is één issue met labels en een toegewezen teamlid.

---

<p class="kicker">Werkwijze · Atomic issues</p>

## Knip de MVP op in issues van maximaal één dag

<div class="rows">
  <div class="listrow"><span class="n">1</span><div><h3>Epic — het grote idee</h3><p>Eén module of thema, bijvoorbeeld “Account &amp; favorieten”.</p></div></div>
  <div class="listrow"><span class="n">2</span><div><h3>User story — wat wil de gebruiker?</h3><p>Klein genoeg om te plannen, groot genoeg om nut te hebben.</p></div></div>
  <div class="listrow"><span class="n">3</span><div><h3>Atomic issue — één heldere taak</h3><p>Maximaal één dag werk. Krijg je het niet in een dag af, dan is het te groot: knip het nog eens op.</p></div></div>
</div>

<figure>
  <img src="assets/github-projects-table.png" alt="Screenshot van een GitHub Projects-tabelweergave met per item het type (Epic, Task of Bug), de titel en de sub-issue-voortgang.">
  <figcaption>Table-weergave — type, titel en sub-issue-voortgang per item. Bron: github/docs (CC BY 4.0).</figcaption>
</figure>

Note: Een MVP is te groot om in één keer te bouwen, dus knippen we het op. Dat noemen we atomic issues: elk issue is één heldere, afgeronde taak van maximaal één dag werk. De structuur is: eerst een Epic (het grote idee), dan user stories (wat wil de gebruiker?), en die splits je in losse taken. In de tabel zie je per item het type — Epic, Task of Bug — én de sub-issue-voortgang. Regel voor vandaag: als je een taak niet binnen een dag afkrijgt, is hij te groot.

---

<p class="kicker">Kijkersopdracht · Top / Tip</p>

## Als publiek leer je minstens zoveel als de pitcher

Bij elke pitch noteer je twee dingen: één <span class="highlight">Top</span> en één <span class="highlight">Tip</span>.

<div class="cards">
  <div class="glr-card">
    <span class="k">Top</span>
    <h3>Wat werkte goed?</h3>
    <p>Noem iets concreets dat je overtuigde — een sterke opening, een helder verhaal, een goed argument.</p>
  </div>
  <div class="glr-card glr-card--accent">
    <span class="k">Tip</span>
    <h3>Wat kan beter?</h3>
    <p>Geef een concrete, opbouwende volgende stap.</p>
  </div>
</div>

**Spelregels:** concreet en opbouwend, en over de pitch — niet over de persoon. Schrijf je Top/Tip op; we bespreken ze na.

Note: Terwijl de teams pitchen, ben jij geen passief publiek maar een scherpe kijker. Bij elke pitch schrijf je één Top en één Tip op. Houd het opbouwend en gericht op de pitch, niet op de persoon. Na de ronde bespreken we een paar Top/Tips klassikaal. Slimme zet: leen goede ideeën voor je eigen pitch.

---

<p class="kicker">Showtime · Elevator pitch</p>

## Wie pakt het podium?

Dertig seconden. Eén kans. Vertel waarom jouw idee ertoe doet — en waarom wij erin moeten investeren.

<div class="defbox">
  <span class="k">Podium!</span>
  <p>Top/Tip in de aanslag — jij bent nu het publiek.</p>
</div>

Note: En nu is het jullie beurt: wie pakt het podium? Je pitch is kort en krachtig — ongeveer een halve tot een hele minuut. Vertel het probleem, je oplossing en waarom die het waard is. De rest van de klas schrijft een Top en een Tip op. Ik houd de tijd in de gaten.

---

<p class="kicker">Afronding · Onthoud dit</p>

## Van concept naar MVP — in drie stappen

<div class="cards">
  <div class="glr-card">
    <span class="k">1</span>
    <h3>Pitch je idee</h3>
    <p>Kort, concreet en overtuigend — aan de opdrachtgever.</p>
  </div>
  <div class="glr-card">
    <span class="k">2</span>
    <h3>Eén beheerd bord</h3>
    <p>Alles wat je bouwt, staat als issue op GitHub Projects.</p>
  </div>
  <div class="glr-card glr-card--accent">
    <span class="k">3</span>
    <h3>Atomic issues</h3>
    <p>Klein en zelfstandig: maximaal één dag werk per taak.</p>
  </div>
</div>

**Vervolgstap:** knip jullie MVP op in issues op het bord en claim je eerste taak. Volgende les start de bouw.
