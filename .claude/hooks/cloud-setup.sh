#!/bin/bash
# Runs at session start. Only does work in Claude Code cloud sessions,
# where plugins aren't installed: it adds the Graphify CLI that the graphify skill needs.
[ "$CLAUDE_CODE_REMOTE" = "true" ] || exit 0

if ! command -v graphify >/dev/null 2>&1; then
  pip install -q graphifyy >/dev/null 2>&1 || uv tool install -q graphifyy >/dev/null 2>&1 || true
fi
exit 0
