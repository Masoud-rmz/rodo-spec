# Contributor Guide

Thank you for your interest in rodo-spec!

## What lives here

This repository contains:
- **`src/`** — TypeScript source for the RODO CLI (`rodo` command)
- **`dist/`** — built output (committed for direct GitHub installs)
- **`kit/`** — the RODO method kit: AI skill files and project templates (inside `dist/kit/` after build)
- **`test/`** — CLI unit tests

The backend (RODO board server) and frontend (web panel) are separate and not open-sourced.

## Setup

```bash
# clone the repo
git clone https://github.com/alishafiee1/rodo-spec.git
cd rodo-spec

# install dependencies (requires pnpm)
npm i -g pnpm
pnpm install

# build
pnpm build

# test
pnpm test
```

## Making changes

1. Edit files in `src/`
2. Run `pnpm build` — this also copies the kit into `dist/kit/`
3. Run `pnpm test` — all tests must pass
4. Open a pull request

## Reporting issues

Use GitHub Issues. Please include:
- Your OS and Node.js version (`node --version`)
- The command you ran
- The full output

## Code style

- TypeScript strict mode
- No runtime dependencies beyond `commander` and `picocolors` (everything else is bundled or built-in)
- Tests live in `test/` and use Vitest
