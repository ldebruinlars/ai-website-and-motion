#!/usr/bin/env bash
# Installs the ai-website-and-motion plugins into Claude Code (macOS / Linux).
set -euo pipefail

command -v claude >/dev/null || { echo 'Claude Code (claude) is not on PATH.'; exit 1; }
command -v node >/dev/null || { echo 'Node.js is required for the MCP servers.'; exit 1; }

claude plugin marketplace add ldebruinlars/ai-website-and-motion
claude plugin install website-motion@ai-website-and-motion --scope user
claude plugin install gsap-skills@ai-website-and-motion --scope user

# Give MCP servers enough time to start (shadcn can take ~20 s on first run).
node -e "const fs=require('fs');const p=process.argv[1];let s={};try{s=JSON.parse(fs.readFileSync(p,'utf8'))}catch{};s.env=s.env||{};if(!s.env.MCP_TIMEOUT){s.env.MCP_TIMEOUT='60000'};fs.writeFileSync(p,JSON.stringify(s,null,2)+'\n')" "$HOME/.claude/settings.json"

echo 'Done. Restart Claude Code, then run /mcp to check magicui and shadcn are connected.'
