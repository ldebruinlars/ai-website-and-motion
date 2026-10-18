# Installs the ai-website-and-motion plugins into Claude Code (Windows).
$ErrorActionPreference = 'Stop'

if (-not (Get-Command claude -ErrorAction SilentlyContinue)) { throw 'Claude Code (claude) is not on PATH.' }
if (-not (Get-Command node -ErrorAction SilentlyContinue)) { throw 'Node.js is required for the MCP servers.' }

claude plugin marketplace add ldebruinlars/ai-website-and-motion
foreach ($p in 'website-motion','gsap-skills','impeccable','21st','humanizer','claude-code-setup','agent-skills','context7','taste-skill','emil-kowalski') { claude plugin install "$p@ai-website-and-motion" --scope user }

# Graphify ships as a Python CLI that installs its own skill.
if (Get-Command py -ErrorAction SilentlyContinue) {
  py -3 -m pip install --user -q --use-feature=truststore graphifyy
  $scripts = py -3 -c "import site,os;print(os.path.join(os.path.dirname(site.getusersitepackages()),'Scripts'))"
  $userPath = [Environment]::GetEnvironmentVariable('Path','User')
  if ($userPath -notlike "*$scripts*") { [Environment]::SetEnvironmentVariable('Path', "$userPath;$scripts", 'User') }
  & (Join-Path $scripts 'graphify.exe') install
} else { Write-Host 'Python 3.10+ not found: skipping Graphify (pip install graphifyy && graphify install).' }

# Give MCP servers enough time to start (shadcn can take ~20 s on first run).
$settings = Join-Path $HOME '.claude\settings.json'
node -e "const fs=require('fs');const p=process.argv[1];let s={};try{s=JSON.parse(fs.readFileSync(p,'utf8'))}catch{};s.env=s.env||{};if(!s.env.MCP_TIMEOUT||+s.env.MCP_TIMEOUT<120000){s.env.MCP_TIMEOUT='120000'};fs.writeFileSync(p,JSON.stringify(s,null,2)+'\n')" $settings

Write-Host 'Done. Restart Claude Code, then run /mcp to check the servers are connected.'
Write-Host '21st.dev needs a free key from https://21st.dev/mcp, saved as user env var API_KEY_21ST:'
Write-Host '  [Environment]::SetEnvironmentVariable("API_KEY_21ST", "<your key>", "User")'
