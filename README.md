# AI website & motion

My Claude toolkit for websites that look and move like big-brand sites. Install once, and every Claude Code chat knows how to do it.

| Piece | What it gives Claude |
|---|---|
| **website-motion** plugin | A skill with my workflow and quality bar, Lenis + GSAP setup, motion recipes per section, and full catalogues of React Bits (218) and Magic UI (78) components. It also bundles the **Magic UI** and **shadcn** MCP servers, so Claude can search both libraries and pull the source of any component. |
| **gsap-skills** plugin | GreenSock's official GSAP skills: core, timelines, ScrollTrigger, plugins, React, performance. |

The libraries themselves (GSAP, Lenis, React Bits, Magic UI) are installed **per website project** by Claude when it needs them. Nothing to install globally.

## Install in Claude Code (any computer)

Inside Claude Code:

```
/plugin marketplace add ldebruinlars/ai-website-and-motion
/plugin install website-motion@ai-website-and-motion
/plugin install gsap-skills@ai-website-and-motion
```

Or from a terminal, run the setup script, which does the same and also raises the MCP startup timeout:

```powershell
# Windows
irm https://raw.githubusercontent.com/ldebruinlars/ai-website-and-motion/main/setup/install.ps1 | iex
```

```bash
# macOS / Linux
curl -fsSL https://raw.githubusercontent.com/ldebruinlars/ai-website-and-motion/main/setup/install.sh | bash
```

Restart Claude Code afterwards. Needs Node.js 18+.

**Startup timeout:** the shadcn MCP server can take 15 to 25 s to start the first time. If `/mcp` shows it as failed, add `"env": { "MCP_TIMEOUT": "60000" }` to `~/.claude/settings.json` (the setup script does this for you).

## Use it

Open your website project in Claude Code and ask, for example:

- "Make this landing page feel premium. Keep the layout and copy."
- "Add Lenis smooth scrolling and GSAP scroll reveals to every section."
- "Add a client logo marquee and a shimmer CTA button in our brand colours."
- "Rebuild the hero with a React Bits background and animated headline."

The skill kicks in on its own. You can also call it directly with `/website-motion:website-motion`.

## Keep it up to date

```
/plugin marketplace update ai-website-and-motion
```

To refresh the component catalogues after the libraries release new components:

```bash
node scripts/update-catalogs.mjs
git commit -am "Update component catalogues" && git push
```

## Claude.ai chats (web, desktop and mobile apps)

Plugins are Claude Code only. In a normal Claude chat you can still use the skill:

1. Zip the folder `plugins/website-motion/skills/website-motion` (the zip should contain the `website-motion` folder).
2. In Claude, go to **Settings → Capabilities → Skills → Upload skill** and pick the zip.

The MCP servers don't run there, since they need a local computer, so Claude works from the catalogues in the skill instead.

## Repo layout

```
.claude-plugin/marketplace.json          # makes this repo a plugin marketplace
plugins/website-motion/
  .claude-plugin/plugin.json
  .mcp.json                              # Magic UI + shadcn MCP servers
  skills/website-motion/
    SKILL.md                             # workflow + quality bar
    references/                          # Lenis setup, recipes, catalogues
scripts/update-catalogs.mjs              # regenerates the catalogues
setup/install.ps1, setup/install.sh      # one-shot installers
```

## Credits

[Magic UI](https://magicui.design) · [React Bits](https://reactbits.dev) · [GSAP](https://gsap.com) · [Lenis](https://lenis.darkroom.engineering) · [shadcn/ui](https://ui.shadcn.com). Idea from [@jackroberts___](https://www.instagram.com/jackroberts___/).
