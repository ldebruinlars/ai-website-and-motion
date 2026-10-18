# AI website & motion

My Claude toolkit so Claude stops producing generic "AI slop": premium design, real components, smooth motion, human-sounding copy and a project setup that fits. Install it once, and every Claude Code chat can use it.

| Plugin | What it gives Claude | Source |
|---|---|---|
| **website-motion** | My workflow and quality bar for premium sites: Lenis + GSAP setup, motion recipes per section, catalogues of React Bits (218) and Magic UI (78) components. Bundles the **Magic UI** and **shadcn** MCP servers to search both libraries and pull component source. | this repo |
| **gsap-skills** | GreenSock's official GSAP skills: core, timelines, ScrollTrigger, plugins, React, performance. | [greensock/gsap-skills](https://github.com/greensock/gsap-skills) |
| **impeccable** | Design taste from premium references, anti-pattern detection, `/impeccable teach`, `audit`, `critique`, `polish` and more. | [pbakaus/impeccable](https://github.com/pbakaus/impeccable) |
| **21st** | 21st.dev MCP: 10,000+ professional UI components and templates. **Needs a free API key** (see below). | [21st-dev/magic-mcp](https://github.com/21st-dev/magic-mcp) |
| **humanizer** | Removes the tell-tale signs of AI writing and matches your own voice. `/humanizer` or "humanize this". | [blader/humanizer](https://github.com/blader/humanizer) |
| **claude-code-setup** | Official Anthropic plugin: scans a codebase and recommends the hooks, skills, MCP servers and subagents it needs. | [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official/tree/main/plugins/claude-code-setup) |
| **agent-skills** | Addy Osmani's production-grade engineering skills for the whole dev cycle (spec, plan, build, test, review, ship), with commands like `/spec`, `/plan`, `/review`, `/ship`. | [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) |
| **context7** | Upstash Context7: up-to-date, version-specific library docs, so Claude never codes against outdated APIs. Works without a key at a low monthly limit; set `CONTEXT7_API_KEY` for more. | [claude-plugins-official](https://github.com/anthropics/claude-plugins-official/tree/main/external_plugins/context7) |
| **Graphify** *(Python CLI, not a plugin)* | Turns a codebase into a knowledge graph so Claude doesn't re-read everything. `/graphify .` | [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) |

The third-party plugins are pulled straight from their authors' repos, so updates arrive automatically. The libraries themselves (GSAP, Lenis, React Bits, Magic UI) are installed **per website project** by Claude when it needs them.

## Install in Claude Code (any computer)

Run the setup script, which installs all eight plugins and Graphify, and sets the MCP startup timeout:

```powershell
# Windows (PowerShell)
irm https://raw.githubusercontent.com/ldebruinlars/ai-website-and-motion/main/setup/install.ps1 | iex
```

```bash
# macOS / Linux
curl -fsSL https://raw.githubusercontent.com/ldebruinlars/ai-website-and-motion/main/setup/install.sh | bash
```

Or by hand inside Claude Code:

```
/plugin marketplace add ldebruinlars/ai-website-and-motion
/plugin install website-motion@ai-website-and-motion
/plugin install gsap-skills@ai-website-and-motion
/plugin install impeccable@ai-website-and-motion
/plugin install 21st@ai-website-and-motion
/plugin install humanizer@ai-website-and-motion
/plugin install claude-code-setup@ai-website-and-motion
/plugin install agent-skills@ai-website-and-motion
/plugin install context7@ai-website-and-motion
```

Graphify: `pip install graphifyy && graphify install` (Python 3.10+).

Restart Claude Code afterwards. Needs Node.js 18+, git and (for Graphify) Python 3.10+.

### 21st.dev API key

1. Create a free key at [21st.dev/mcp](https://21st.dev/mcp).
2. Save it as the environment variable `API_KEY_21ST`:
   - Windows: `[Environment]::SetEnvironmentVariable("API_KEY_21ST", "<your key>", "User")`, then restart Claude.
   - macOS / Linux: add `export API_KEY_21ST="<your key>"` to `~/.zshrc` or `~/.bashrc`.

Never commit the key to this repo.

### Startup timeout

The shadcn MCP server can take 10 to 25 s to start, longer on the first run. The setup script sets `"env": { "MCP_TIMEOUT": "120000" }` in `~/.claude/settings.json`. Add it yourself if you installed by hand and `/mcp` shows a timeout.

## Use it

Open your project in Claude Code and ask, for example:

- "Make this landing page feel premium. Keep the layout and copy." (website-motion + impeccable)
- "Run /impeccable critique on the homepage and fix what it finds."
- "Find a pricing table on 21st.dev that fits our style and add it."
- "Humanize the hero text and about page."
- "Use claude-code-setup to recommend the right automations for this repo."

Skills switch on by themselves when the request fits. You can also call them directly, e.g. `/website-motion:website-motion`, `/impeccable`, `/humanizer`.

## Keep it up to date

```
/plugin marketplace update ai-website-and-motion
```

To refresh the React Bits / Magic UI catalogues:

```bash
node scripts/update-catalogs.mjs
git commit -am "Update component catalogues" && git push
```

## Cloud sessions (claude.ai/code, Desktop "Cloud", phone)

Cloud sessions don't install plugins, but they do load what's committed in the repo. This repo therefore carries a copy of every skill, agent and command in `.claude/` (see `.claude/VENDORED.md`), the MCP servers in `.mcp.json`, and a SessionStart hook that installs Graphify. **Start a cloud session on `ldebruinlars/ai-website-and-motion` and everything is there.**

For a cloud session on a *different* repo, copy `.claude/`, `.mcp.json` and `CLAUDE.md` into that repo, or upload the skills to your claude.ai account (below), which cloud sessions also load.

After adding or updating plugins, refresh the copy with `node scripts/sync-cloud-bundle.mjs` and commit.

For 21st.dev in the cloud, add `API_KEY_21ST` to the cloud environment's settings, never to the repo.

## Claude.ai chats (web, desktop and mobile apps)

Plugins are Claude Code only. In a normal Claude chat you can still upload the skills:

1. Zip a skill folder so the zip contains the folder itself, for example `plugins/website-motion/skills/website-motion`. Impeccable and Humanizer can be zipped from their own repos the same way.
2. In Claude go to **Settings → Capabilities → Skills → Upload skill**.

The MCP servers (Magic UI, shadcn, 21st) are not available there: the first two need a local computer, and 21st.dev authenticates with an API-key header that claude.ai connectors may not accept. In those chats Claude works from the skills and catalogues instead.

## Repo layout

```
.claude-plugin/marketplace.json          # this repo is a plugin marketplace (lists all six)
plugins/website-motion/
  .claude-plugin/plugin.json
  .mcp.json                              # Magic UI + shadcn MCP servers
  skills/website-motion/
    SKILL.md                             # workflow + quality bar
    references/                          # Lenis setup, recipes, catalogues
scripts/update-catalogs.mjs              # regenerates the catalogues
scripts/sync-cloud-bundle.mjs            # copies all plugin skills into .claude/ for cloud sessions
.claude/, .mcp.json, CLAUDE.md           # what cloud sessions on this repo load
setup/install.ps1, setup/install.sh      # one-shot installers
```

## Credits

[Magic UI](https://magicui.design) · [React Bits](https://reactbits.dev) · [GSAP](https://gsap.com) · [Lenis](https://lenis.darkroom.engineering) · [shadcn/ui](https://ui.shadcn.com) · [Impeccable](https://impeccable.style) · [21st.dev](https://21st.dev) · [Humanizer](https://github.com/blader/humanizer) · [Anthropic](https://github.com/anthropics/claude-plugins-official). [Agent Skills](https://github.com/addyosmani/agent-skills) · [Context7](https://context7.com) · [Graphify](https://graphify.com). Ideas from [@jackroberts___](https://www.instagram.com/jackroberts___/) and Nick Saraev.
