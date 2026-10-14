#!/usr/bin/env node
/**
 * Bouwt de centrale portaalpagina (dist/index.html).
 *
 * Het script scant recursief alle mappen onder `presentations/` en beschouwt
 * elke map met een `index.html` en/of `slides.md` als een presentatie.
 * Titel, cohort, leerjaar, periode en tags worden — indien aanwezig — gelezen
 * uit de YAML-frontmatter van `slides.md`; anders valt het terug op de mapnaam.
 *
 * Gebruik:  npm run build:index
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const presentationsRoot = path.join(root, 'presentations');
const distDir = path.join(root, 'dist');

const MARKERS = ['index.html', 'slides.md'];

/** Escapecode voor veilige HTML-interpolatie. */
function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (c) => (
    { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]
  ));
}

/** Leest eenvoudige `key: value`-frontmatter uit een markdownbestand. */
function readFrontmatter(file) {
  try {
    const content = fs.readFileSync(file, 'utf8');
    const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
    if (!match) return {};
    const data = {};
    for (const line of match[1].split(/\r?\n/)) {
      const kv = line.match(/^([A-Za-z0-9_-]+)\s*:\s*(.*)$/);
      if (!kv) continue;
      let value = kv[2].trim().replace(/^["']|["']$/g, '');
      if (/^\[.*\]$/.test(value)) {
        value = value.slice(1, -1)
          .split(',')
          .map((s) => s.trim().replace(/^["']|["']$/g, ''))
          .filter(Boolean);
      }
      data[kv[1]] = value;
    }
    return data;
  } catch {
    return {};
  }
}

/** Maakt van `p1-html-css-basics` een leesbare titel: "html css basics". */
function prettifyName(slug) {
  return slug.replace(/^[0-9]+[-_]/, '').replace(/[-_]+/g, ' ');
}

function collect(dir, found) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const fileNames = entries.filter((e) => e.isFile()).map((e) => e.name);

  if (MARKERS.some((marker) => fileNames.includes(marker))) {
    const slides = path.join(dir, 'slides.md');
    const fm = fs.existsSync(slides) ? readFrontmatter(slides) : {};
    found.push({
      path: path.relative(presentationsRoot, dir).split(path.sep).join('/'),
      name: fm.title || prettifyName(path.basename(dir)),
      cohort: fm.cohort || '',
      leerjaar: fm.leerjaar ?? '',
      periode: fm.periode ?? '',
      tags: Array.isArray(fm.tags) ? fm.tags : [],
    });
    return;
  }

  for (const entry of entries.filter((e) => e.isDirectory())) {
    collect(path.join(dir, entry.name), found);
  }
}

const presentations = [];
if (fs.existsSync(presentationsRoot)) {
  collect(presentationsRoot, presentations);
}
presentations.sort((a, b) => a.path.localeCompare(b.path, 'nl'));

const listItems = presentations.map((item) => {
  const meta = [item.cohort, item.leerjaar && `leerjaar ${item.leerjaar}`, item.periode && `periode ${item.periode}`]
    .filter(Boolean)
    .map((part) => `<span class="meta-item">${escapeHtml(part)}</span>`)
    .join('');
  const tags = item.tags.map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`).join('');
  return `
  <li class="presentation-item">
    <div class="info">
      <span class="title">${escapeHtml(item.name)}</span>
      ${meta || tags ? `<div class="meta">${meta}${tags}</div>` : ''}
    </div>
    <div class="links">
      <a class="btn" href="./${item.path}/">Presentatie</a>
      <a class="btn btn-secondary" href="./${item.path}/presentation.pdf" download>PDF</a>
    </div>
  </li>`;
}).join('\n');

const empty = '<li class="empty">Nog geen presentaties gevonden onder <code>presentations/</code>.</li>';

const html = `<!DOCTYPE html>
<html lang="nl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>GLR CSD — Lespresentaties</title>
  <style>
    :root { --accent: #A6E22E; --accent-dk: #416900; }
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; max-width: 900px; margin: 40px auto; padding: 0 20px; line-height: 1.6; color: #111; }
    h1 { color: var(--accent-dk); border-bottom: 2px solid #eee; padding-bottom: 10px; }
    ul { list-style: none; padding: 0; }
    .presentation-item { display: flex; justify-content: space-between; align-items: center; gap: 16px; padding: 12px 16px; margin-bottom: 8px; border: 1px solid #e1e4e8; border-radius: 6px; }
    .presentation-item:hover { background-color: #f8f9fa; }
    .title { text-transform: capitalize; font-weight: 600; }
    .meta { margin-top: 4px; font-size: 13px; color: #6B7280; display: flex; flex-wrap: wrap; gap: 6px; }
    .meta-item, .tag { background: #f4f4f6; border-radius: 3px; padding: 1px 7px; }
    .tag { background: var(--accent); color: #111; }
    .links { flex: 0 0 auto; }
    .links a { text-decoration: none; margin-left: 8px; padding: 6px 12px; font-size: 14px; border-radius: 4px; }
    .btn { background: var(--accent-dk); color: #fff; }
    .btn-secondary { background: #e1e4e8; color: #333; }
    .empty { color: #6B7280; }
  </style>
</head>
<body>
  <h1>Creative Software Developer — Presentaties</h1>
  <p>Centraal archief voor theorie-, instructie- en workshopslides.</p>
  <ul>
    ${listItems || empty}
  </ul>
</body>
</html>
`;

fs.mkdirSync(distDir, { recursive: true });
fs.writeFileSync(path.join(distDir, 'index.html'), html);

console.log(`✔ Portaalpagina gebouwd: dist/index.html (${presentations.length} presentatie(s))`);
