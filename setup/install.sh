#!/usr/bin/env bash
# Installs the ai-website-and-motion plugins into Claude Code (macOS / Linux).
set -euo pipefail

command -v claude >/dev/null || { echo 'Claude Code (claude) is not on PATH.'; exit 1; }
command -v node >/dev/null || { echo 'Node.js is required for the MCP servers.'; exit 1; }

claude plugin marketplace add ldebruinlars/ai-website-and-motion
for p in website-motion gsap-skills impeccable 21st humanizer claude-code-setup agent-skills context7 taste-skill emil-kowalski; do claude plugin install "$p@ai-website-and-motion" --scope user; done

# Graphify ships as a Python CLI that installs its own skill.
if command -v uv >/dev/null; then uv tool install graphifyy && graphify install || true
elif command -v pipx >/dev/null; then pipx install graphifyy && graphify install || true
else echo 'uv or pipx not found: skipping Graphify (pipx install graphifyy && graphify install).'; fi

# Give MCP servers enough time to start (shadcn can take ~20 s on first run).
node -e "const fs=require('fs');const p=process.argv[1];let s={};try{s=JSON.parse(fs.readFileSync(p,'utf8'))}catch{};s.env=s.env||{};if(!s.env.MCP_TIMEOUT||+s.env.MCP_TIMEOUT<120000){s.env.MCP_TIMEOUT='120000'};fs.writeFileSync(p,JSON.stringify(s,null,2)+'\n')" "$HOME/.claude/settings.json"

echo 'Done. Restart Claude Code, then run /mcp to check the servers are connected.'
echo '21st.dev needs a free key from https://21st.dev/mcp: add  export API_KEY_21ST="<your key>"  to your shell profile.'
