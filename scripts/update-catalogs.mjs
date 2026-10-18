// Regenerates the component catalogues the website-motion skill reads.
// Run from the repo root: node scripts/update-catalogs.mjs
import { writeFile } from 'node:fs/promises';

const OUT = 'plugins/website-motion/skills/website-motion/references';
const today = new Date().toISOString().slice(0, 10);

const getJson = async (url) => {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${url} -> ${res.status}`);
  return res.json();
};

const cell = (s = '') => s.replace(/\|/g, '\\|').replace(/\s+/g, ' ').trim();
const extraDeps = (deps = []) =>
  deps.filter((d) => !/^(react|react-dom)(@|$)/.test(d)).map((d) => d.replace(/@\^?[\d.]+$/, '')).join(', ');

async function reactBits() {
  const reg = await getJson('https://reactbits.dev/r/registry.json');
  const items = reg.items.filter((i) => i.name.endsWith('-TS-TW'));
  const rows = items.map((i) => {
    const base = i.name.replace(/-TS-TW$/, '');
    return `| ${base} | ${cell(i.description)} | ${extraDeps(i.dependencies)} |`;
  });
  return `# React Bits catalogue

${items.length} components, generated from https://reactbits.dev/r/registry.json on ${today}.
Refresh with \`node scripts/update-catalogs.mjs\`.

Add one with \`npx shadcn@latest add @react-bits/<Name>-TS-TW\`.
Other variants: \`-JS-CSS\`, \`-JS-TW\`, \`-TS-CSS\`. Pick the one matching the project.
Preview everything at https://reactbits.dev before choosing. The \`shadcn\` MCP server can show a component's source.

Heavy dependencies to watch: \`three\`, \`ogl\`, \`@react-three/*\`, \`matter-js\` (WebGL/physics, lazy-load them).

| Component | What it does | Extra deps |
|---|---|---|
${rows.join('\n')}
`;
}

async function magicUi() {
  const reg = await getJson('https://magicui.design/r/registry.json');
  const items = reg.items.filter((i) => i.type === 'registry:ui');
  const rows = items.map((i) => `| ${i.name} | ${cell(i.description || i.title)} | ${extraDeps(i.dependencies)} |`);
  return `# Magic UI catalogue

${items.length} components, generated from https://magicui.design/r/registry.json on ${today}.
Refresh with \`node scripts/update-catalogs.mjs\`.

Add one with \`npx shadcn@latest add @magicui/<name>\`.
Docs and live demos: https://magicui.design/docs/components/<name>. The \`magicui\` MCP server can search and return full source and examples.

Landing page favourites: \`shimmer-button\`, \`rainbow-button\`, \`marquee\` (logo strip, testimonials), \`animated-list\`, \`bento-grid\`, \`number-ticker\`, \`blur-fade\`, \`border-beam\`, \`magic-card\`, \`text-animate\`, \`globe\`, \`safari\` / \`iphone\` mockups.

| Component | What it does | Extra deps |
|---|---|---|
${rows.join('\n')}
`;
}

await writeFile(`${OUT}/react-bits-catalog.md`, await reactBits());
await writeFile(`${OUT}/magic-ui.md`, await magicUi());
console.log('Catalogues updated in', OUT);
