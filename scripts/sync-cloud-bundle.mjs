// Copies every skill, agent and command from the marketplace plugins into this
// repo's .claude/ folder, so a Claude Code cloud session opened on this repo has
// all of them (cloud sessions don't install plugins, but do load .claude/).
// Run from the repo root: node scripts/sync-cloud-bundle.mjs
import { execFileSync } from 'node:child_process';
import { cpSync, existsSync, mkdirSync, mkdtempSync, readdirSync, rmSync, statSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const SOURCES = [
  { name: 'gsap-skills', repo: 'https://github.com/greensock/gsap-skills.git', root: '.', license: 'MIT' },
  { name: 'impeccable', repo: 'https://github.com/pbakaus/impeccable.git', root: 'plugin', license: 'Apache-2.0' },
  { name: 'humanizer', repo: 'https://github.com/blader/humanizer.git', root: '.', skillAtRoot: 'humanizer', license: 'MIT' },
  { name: 'agent-skills', repo: 'https://github.com/addyosmani/agent-skills.git', root: '.', license: 'MIT' },
  { name: 'claude-code-setup', repo: 'https://github.com/anthropics/claude-plugins-official.git', root: 'plugins/claude-code-setup', license: 'Apache-2.0' },
  { name: '21st', repo: 'https://github.com/21st-dev/magic-mcp.git', root: '.', license: 'ISC' },
  { name: 'taste-skill', repo: 'https://github.com/Leonxlnx/taste-skill.git', root: '.', license: 'MIT' },
  // Alleen de webskills; Swift, Expo en Sonner laten we weg (zelfde selectie als in marketplace.json).
  { name: 'emil-kowalski', repo: 'https://github.com/emilkowalski/skills.git', root: '.', license: 'MIT', only: ['emil-design-eng', 'animate', 'review-animations', 'improve-animations', 'find-animation-opportunities', 'animation-performance', 'animation-vocabulary', 'apple-design', 'pick-ui-library', 'prototype', 'mobile-native', 'break-ui'] },
];

const OUT = '.claude';
const SKIP = new Set(['node_modules', '.git']);
const tmp = mkdtempSync(join(tmpdir(), 'cloud-bundle-'));
const report = [];

const dirs = (p) => (existsSync(p) ? readdirSync(p).filter((d) => !SKIP.has(d) && statSync(join(p, d)).isDirectory()) : []);
const files = (p) => (existsSync(p) ? readdirSync(p).filter((f) => statSync(join(p, f)).isFile()) : []);
const copy = (from, to) => cpSync(from, to, { recursive: true, filter: (s) => !s.split(/[\\/]/).some((part) => SKIP.has(part)) });

for (const kind of ['skills', 'agents', 'commands']) rmSync(join(OUT, kind), { recursive: true, force: true });
for (const kind of ['skills', 'agents', 'commands']) mkdirSync(join(OUT, kind), { recursive: true });

// Our own skill.
copy('plugins/website-motion/skills/website-motion', join(OUT, 'skills', 'website-motion'));
report.push({ name: 'website-motion', commit: 'this repo', skills: ['website-motion'], agents: [], commands: [] });

for (const src of SOURCES) {
  const dir = join(tmp, src.name);
  execFileSync('git', ['clone', '--depth', '1', '--quiet', src.repo, dir], { stdio: 'inherit' });
  const commit = execFileSync('git', ['-C', dir, 'rev-parse', '--short', 'HEAD']).toString().trim();
  const root = join(dir, src.root);
  const license = ['LICENSE', 'LICENSE.md', 'LICENSE.txt'].map((f) => join(dir, f)).find(existsSync);
  const entry = { name: src.name, commit, skills: [], agents: [], commands: [] };

  const skillDirs = src.skillAtRoot ? [[root, src.skillAtRoot]] : dirs(join(root, 'skills')).map((d) => [join(root, 'skills', d), d]);
  for (const [from, name] of skillDirs) {
    if (!existsSync(join(from, 'SKILL.md'))) continue;
    if (src.only && !src.only.includes(name)) continue;
    const to = join(OUT, 'skills', name);
    if (existsSync(to)) { console.warn(`skip duplicate skill ${name} from ${src.name}`); continue; }
    if (src.skillAtRoot) {
      mkdirSync(to, { recursive: true });
      for (const f of files(from).filter((f) => /\.(md|txt)$/i.test(f))) cpSync(join(from, f), join(to, f));
    } else {
      copy(from, to);
    }
    if (license && !existsSync(join(to, 'LICENSE'))) cpSync(license, join(to, 'LICENSE'));
    entry.skills.push(name);
  }
  for (const kind of ['agents', 'commands']) {
    for (const base of [join(root, kind), join(root, '.claude', kind)]) {
      for (const f of files(base).filter((f) => f.endsWith('.md'))) {
        const to = join(OUT, kind, f);
        if (existsSync(to)) { console.warn(`skip duplicate ${kind}/${f} from ${src.name}`); continue; }
        cpSync(join(base, f), to);
        entry[kind].push(f.replace(/\.md$/, ''));
      }
    }
  }
  report.push({ ...entry, license: src.license, repo: src.repo });
}

// Graphify ships its skill through its Python CLI; copy the locally installed one if present.
const home = process.env.USERPROFILE || process.env.HOME;
const graphify = join(home, '.claude', 'skills', 'graphify');
if (existsSync(join(graphify, 'SKILL.md'))) {
  copy(graphify, join(OUT, 'skills', 'graphify'));
  report.push({ name: 'graphify', commit: 'pip graphifyy', skills: ['graphify'], agents: [], commands: [], license: 'MIT', repo: 'https://github.com/Graphify-Labs/graphify' });
}

rmSync(tmp, { recursive: true, force: true });

const lines = report.map((r) => `| ${r.name} | ${r.repo ? `[source](${r.repo.replace(/\.git$/, '')})` : 'this repo'} @ ${r.commit} | ${r.license ?? ''} | ${r.skills.length} skills${r.agents.length ? `, ${r.agents.length} agents` : ''}${r.commands.length ? `, ${r.commands.length} commands` : ''} |`);
writeFileSync(join(OUT, 'VENDORED.md'), `# Cloud bundle

Copies of the marketplace plugins' skills, agents and commands, so Claude Code cloud sessions on this repo can use them.
Generated by \`node scripts/sync-cloud-bundle.mjs\` on ${new Date().toISOString().slice(0, 10)}. Do not edit by hand: change the source and re-run.
Each skill keeps its original license file. All rights remain with the original authors.

| Plugin | Source | License | Contents |
|---|---|---|---|
${lines.join('\n')}
`);
console.log(report.map((r) => `${r.name}: ${r.skills.length} skills, ${r.agents.length} agents, ${r.commands.length} commands`).join('\n'));
