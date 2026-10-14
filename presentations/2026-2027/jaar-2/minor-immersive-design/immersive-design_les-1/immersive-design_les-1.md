### Presentatie Les 1: Fundering WebXR

**Slide 1: Welkom in de 3D Wereld!**

* **Visueel:** Grote titel "WebXR Introductie: De Brug naar 3D" met een prikkelende achtergrondafbeelding van een virtuele wereld.
* **Tekst/Spreker:** Welkom bij de eerste les van de module WebXR. Tot nu toe hebben jullie platte 2D webapplicaties gebouwd, maar vandaag gaan we letterlijk de diepte in. Dit is jullie voorbereiding op het keuzedeel Virtual en augmented reality.



**Slide 2: Inspiratie**

* **Visueel:** Embedded YouTube video.
* **Actie:** Toon 1 tot 2 minuten van de video "Santuario Digital - WebXR Creative Environment Showcase".


* **Tekst/Spreker:** "Kijk even goed naar wat hier gebeurt. Het web zit niet meer vast aan platte schermen.".



**Slide 3: De Activeringsvraag**

* **Visueel:** Grote, open vraag op het scherm.
* **Tekst op slide:** *Als je een stoel in een 3D-ruimte wilt plaatsen via code, welke informatie heeft de computer dan extra nodig in vergelijking met een gewone website?*.


* **Actie:** Laat de klas kort nadenken en antwoord geven, en stuur het gesprek richting de komst van de "Z-as" (diepte).



**Slide 4: Jouw Missie Vandaag (Mijlpaal 1: Greyboxing)**

* **Visueel:** Een screenshot van een simpele 3D scene opgebouwd uit grijze basisvormen (kubussen, cilinders).
* **Tekst op slide:**
* Eindproject: Interactieve Strandervaring ('Immersed').


* Mijlpaal vandaag: Greyboxing.


* Bouw de statische lay-out: lucht, zand en minimaal 5 objecten.




* **Tekst/Spreker:** Voordat we gaan ontdekken hóe je in 3D codeert, is dit wat je vandaag gaat opleveren. Jullie bouwen de fundering voor het project 'Immersed'. We noemen dit 'Greyboxing': we gebruiken grijze blokken of simpele vormen zonder complexe textures, puur om de ruimte en schaal logisch in te richten.



**Slide 5: De 3D Ruimte (Fysieke Oefening)**

* **Visueel:** Een simpele afbeelding van een X, Y en Z as, maar de focus ligt op de docent.
* **Actie:** Studenten houden laptops gesloten en moeten fysiek opstaan. De docent wijst de muren van het klaslokaal aan.


* **Tekst/Spreker:** "Laten we de ruimte om ons heen gebruiken. Armen wijd: dit is de X-as. Links is negatief, rechts is positief. Onder naar boven is de Y-as, waarbij de vloer 0 is en het plafond positief. En dan de belangrijkste, de Z-as: als je je monitor ín kijkt, de diepte in, dan is dat een negatieve Z-waarde. Achter je rug is positief.".



**Slide 6: Live Coding & ECS Architectuur (Kijk & Leer)**

* **Visueel:** Het scherm toont de code-editor (VS Code) via de beamer.


* **Actie:** Laptops blijven gesloten. De docent codeert live een `index.html` en importeert A-Frame via de script-tag in de `<head>`.


* **Tekst/Spreker:** "Kijk goed mee. We maken een `<a-scene>`, dit is onze wereld. Daarin plaatsen we een `<a-box>` op position='0 1 -3' (dus 1 meter hoog, 3 meter van ons áf) en maken hem rood. Dit werkt via het Entity-Component-System. De box is een Entity (een lege doos) en de kleur rood is een Component, een sticker met gedrag die we erop plakken.".



**Slide 7: JavaScript & 3D (De Overdracht)**

* **Visueel:** Een korte code snippet op het bord met `document.createElement('a-box')`.
* **Tekst/Spreker:** "Omdat A-Frame entities onder de motorkap gewoon HTML-elementen zijn, werkt standaard JavaScript hier direct op. Dat betekent dat je `document.createElement('a-box')` kunt gebruiken om objecten te genereren. En dat is precies wat jullie nu gaan doen."



**Slide 8: Aan de slag! (Lab 1 & Mijlpaal 1)**

* **Visueel:** Een duidelijke, aftellende timer op het scherm (bijv. 2.5 uur resterend) en een kort stappenplan.
* **Tekst op slide:**
1. **Lab 1:** A-Frame Scene Builder (gebruik een array).


2. **Boss Fights (Bonus):** Wiskunde in 3D, Procedural Generation of Externe Assets.


3. **Mijlpaal 1:** Greyboxing van je strand (map aanmaken, statische scene bouwen).




* **Tekst/Spreker:** "Laptops mogen open. Open de Reader bij Lab 1. Je gaat met een JavaScript array dynamisch een 3D-scene bouwen. Ben je daar snel mee klaar? Kies dan direct een Boss Fight uit de reader om jezelf uit te dagen met wiskunde of procedural generation. Ben je klaar met het Lab, dan start je met de Greyboxing voor je eindproject. Succes!"