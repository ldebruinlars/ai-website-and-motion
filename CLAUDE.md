# AI website & motion toolkit

This repo is Lars de Bruin's Claude Code plugin marketplace. It also carries a copy of every plugin's skills, agents and commands in `.claude/`, so cloud sessions on this repo (where plugins don't install) have the same toolkit.

## What's available and when to use it

- **Websites and motion:** `website-motion` skill (workflow, Lenis + GSAP setup, React Bits and Magic UI catalogues) with the `gsap-*` skills. MCP servers `magicui` and `shadcn` search and fetch components.
- **Design taste:** `impeccable` skill and its agents. Run `/impeccable teach` once per project, and `critique`, `audit` or `polish` before calling UI work done.
- **UI components:** `21st-ui` skill and the `21st` MCP server (needs `API_KEY_21ST`; skip it if the key isn't set).
- **Up-to-date library docs:** `context7` MCP server. Use it before writing code against any library API you aren't sure about.
- **Engineering workflow:** Addy Osmani's agent skills (spec, plan, build, test, review, ship) and the commands `/spec`, `/plan`, `/build`, `/test`, `/review`, `/code-simplify`, `/ship`, `/webperf`, `/constraints`.
- **Codebase map:** `graphify` skill (`/graphify .`). In cloud sessions a SessionStart hook installs the CLI.
- **Art direction:** Taste Skill (`taste-skill` plus style variants such as minimalist, brutalist and soft, `redesign-skill`, `brandkit`, `image-to-code-skill`). Use it to pick a direction before building; it can open a real browser to inspect the result.
- **Animation craft:** Emil Kowalski's skills: `emil-design-eng` first, then `animate`, `review-animations`, `improve-animations`, `animation-performance`, `find-animation-opportunities`, `apple-design`, `pick-ui-library`, `prototype`, `mobile-native` and `break-ui`. He recommends using them case by case rather than always on.
- **Writing:** `humanizer` skill for any copy that people will read.
- **Project setup:** `claude-automation-recommender` (from claude-code-setup) to suggest hooks, skills and MCP servers for a codebase.

Write to Lars in Dutch unless he writes in English.

## Maintaining this repo

- Marketplace: `.claude-plugin/marketplace.json`. Own plugin: `plugins/website-motion/`.
- After adding or updating a plugin, refresh the cloud copy with `node scripts/sync-cloud-bundle.mjs` and the component catalogues with `node scripts/update-catalogs.mjs`, then commit.
- Don't hand-edit `.claude/skills`, `.claude/agents` or `.claude/commands`: they're generated (see `.claude/VENDORED.md`).
- Upstream marketplace sources must use `{"source":"url"}` or `git-subdir` with HTTPS git URLs, not `{"source":"github"}`, which needs SSH on Lars's PC.
- Never commit API keys.
