#!/usr/bin/env node
/**
 * Kopieert de reveal.js-distributie uit `node_modules` naar `shared/vendor/reveal/`.
 *
 * Waarom een aparte stap? We installeren reveal.js via npm (package.json), maar
 * de presentaties moeten ook **offline** te openen zijn. Dit script zet de
 * benodigde bestanden klaar op een vaste, relatieve locatie die de
 * presentatie-templates (shared/vendor/reveal/...) kunnen aanroepen.
 *
 * Gebruik:  npm run vendor
 * De map `shared/vendor/` staat in .gitignore (het is een gegenereerd artefact).
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const source = path.join(root, 'node_modules', 'reveal.js');
const dest = path.join(root, 'shared', 'vendor', 'reveal');

if (!fs.existsSync(source)) {
  console.error('✖ reveal.js niet gevonden in node_modules. Voer eerst `npm install` uit.');
  process.exit(1);
}

/** Kopieert de inhoud van `fromDir` (niet de map zelf) naar `toDir`. */
function copyInto(fromDir, toDir) {
  fs.mkdirSync(toDir, { recursive: true });
  for (const name of fs.readdirSync(fromDir)) {
    fs.cpSync(path.join(fromDir, name), path.join(toDir, name), { recursive: true });
  }
}

fs.rmSync(dest, { recursive: true, force: true });

// reveal.js/dist/*   -> shared/vendor/reveal/*        (reveal.js, reveal.css, reset.css, theme/)
copyInto(path.join(source, 'dist'), dest);
// reveal.js/plugin/* -> shared/vendor/reveal/plugin/* (markdown, highlight, notes, search, zoom)
copyInto(path.join(source, 'plugin'), path.join(dest, 'plugin'));

console.log(`✔ reveal.js gekopieerd naar ${path.relative(root, dest)}/`);
