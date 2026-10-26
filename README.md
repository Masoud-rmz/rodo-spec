# rodo-spec

> **RODO** is a way of working, not a gate. Nothing blocks a commit, a test or a status.  
> You follow it because it keeps the project understandable for the user, for teammates and for the next AI session.

RODO is an open method for teams and AI agents to work together on software projects. It brings structure to planning, documentation, and task management — without locking or gating your workflow.

## What is RODO?

RODO gives you:
- **Cards** — lightweight task files (`*.rodo.md`) that live next to your code
- **A kit** — AI skill files that teach any AI assistant how to work with your project
- **A CLI** — to install the kit, manage cards, and optionally sync with the RODO board
- **A method** — five statuses, one card per feature, docs that stay true to the code

```
RODO project layout
├── .agents/skills/rodo/     ← AI skill (the method, in plain language)
├── rodo/<project>/
│   ├── MAP.md               ← project map (always up to date)
│   ├── MEMORY.md            ← decisions log (append-only)
│   ├── RULES.md             ← human-readable rules
│   ├── CHANGELOG.md
│   └── cycles/NNN-slug/
│       ├── card.rodo.md     ← the task card
│       ├── simple.md        ← plain-language explanation
│       └── spec.md          ← technical rules
├── AGENTS.md                ← points AI assistants to the skill
└── rodo/kit.json            ← installed kit version
```

---

## Install

```bash
npm i -g @rodo/cli
```

Or directly from GitHub (no npm account needed):

```bash
npm i -g github:alishafiee1/rodo-spec
```

Requires **Node.js ≥ 20**.

---

## Quick start

```bash
# 1. go to your project
cd your-project

# 2. install the RODO kit (no server, no account needed)
rodo init --method-only --lang en

# 3. commit the generated files
git add rodo/ .agents/ AGENTS.md CLAUDE.md .gitignore
git commit -m "chore: add RODO method kit"

# 4. ask your AI assistant to read AGENTS.md and plan the first card
#    or create a card directly:
rodo new "My first feature"
```

---

## Commands

| Command | What it does |
|---------|-------------|
| `rodo init` | Install or update the kit; optionally connect a board |
| `rodo new "<title>"` | Start a new cycle (card + docs) |
| `rodo resume [card]` | Print context for an AI session |
| `rodo sync` | Pull, merge, push cards with the board |
| `rodo status` | Show cards and their state |
| `rodo validate` | Check card files for errors |
| `rodo test [card]` | Run the card's test command, track failure signatures |
| `rodo doctor` | Read-only health checks |

---

## Method-only vs. with a board

**Method-only** (free, offline, no account):
```bash
rodo init --method-only --project myapp --lang en
```
Card files live in git. The AI reads them directly. No sync needed.

**With the RODO board** (optional web panel):
```bash
rodo init --project myapp --create-board
```
Card files sync with the web board. Your team can see and update cards from the browser.

---

## How AI assistants use RODO

After `rodo init`, your repo has an `AGENTS.md` file. This tells any AI assistant (Claude, Gemini, GPT, etc.) to:

1. Run `rodo sync` at the start of every session
2. Run `rodo resume` to read the active card
3. Work only within the card's scope
4. Run `rodo sync` again at the end

No plugin or special setup is needed — just a file the AI can read.

---

## Works on any platform with Node.js

| Platform | Supported |
|----------|-----------|
| Windows | ✅ |
| macOS | ✅ |
| Linux | ✅ |
| Any AI agent with CLI access | ✅ |

---

## License

MIT — see [LICENSE](LICENSE)
