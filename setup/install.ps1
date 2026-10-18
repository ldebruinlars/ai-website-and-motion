# Installs the ai-website-and-motion plugins into Claude Code (Windows).
$ErrorActionPreference = 'Stop'

if (-not (Get-Command claude -ErrorAction SilentlyContinue)) { throw 'Claude Code (claude) is not on PATH.' }
if (-not (Get-Command node -ErrorAction SilentlyContinue)) { throw 'Node.js is required for the MCP servers.' }

claude plugin marketplace add ldebruinlars/ai-website-and-motion
claude plugin install website-motion@ai-website-and-motion --scope user
claude plugin install gsap-skills@ai-website-and-motion --scope user

# Give MCP servers enough time to start (shadcn can take ~20 s on first run).
$settings = Join-Path $HOME '.claude\settings.json'
node -e "const fs=require('fs');const p=process.argv[1];let s={};try{s=JSON.parse(fs.readFileSync(p,'utf8'))}catch{};s.env=s.env||{};if(!s.env.MCP_TIMEOUT){s.env.MCP_TIMEOUT='60000'};fs.writeFileSync(p,JSON.stringify(s,null,2)+'\n')" $settings

Write-Host 'Done. Restart Claude Code, then run /mcp to check magicui and shadcn are connected.'
