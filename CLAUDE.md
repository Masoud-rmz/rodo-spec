# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

`@rodo/cli` — the `rodo` command (Node ≥ 20, ESM, TypeScript strict). It installs the RODO method kit (AI skill files + project templates), manages `*.rodo.md` cards, and optionally syncs them with a RODO board server. The board backend/frontend are not in this repo.

## Commands

```bash
pnpm install
pnpm build        # tsup -> dist/index.js, then copies the kit into dist/kit/
pnpm test         # vitest run (all tests)
pnpm lint         # tsc --noEmit (same as typecheck; no eslint)
pnpm vitest run test/validate.test.ts          # single file
pnpm vitest run -t "name of test"              # single test by name
```

## Architecture

- `src/index.ts` — commander wiring only. `buildProgram(run)` registers commands; each calls `runX(ctx, ...)` in `src/commands/`. `main()` builds a `Ctx` (`cwd`, global opts, `Out`, `Prompter`) and maps `CliError` to exit codes. Setting `RODO_CLI_NO_MAIN=1` stops it auto-running so tests can import it.
- `src/core/` — shared plumbing (project discovery, cards, atomic fs writes, locking, git, i18n hints, output/`--json`).
- `src/sync/` — pull/merge/push against the board, offline mode, write-back, sync state. `src/net/` is HTTP + server discovery; `src/auth/` is device-token storage/login.
- `src/kit/` — installs/updates the kit into a user's repo, scaffolds `rodo/<project>/`, migrates legacy layouts.
- `src/test-runner/` — `rodo test`: runs a card's test command, parses jest/playwright/generic output, computes failure signatures to detect repeated failures.
- `packages/card-format` (`@rodo/card-format`) — card parse/serialize/validate/merge/diff and error codes. `packages/protocol` (`@rodo/protocol`) — card status and sync wire types. Both are workspace packages **bundled into the CLI** (`noExternal` in `tsup.config.ts`, along with `yaml`); the CLI itself ships only `commander` and `picocolors` at runtime.

## Gotchas

- `dist/` is committed (for `npm i -g github:...` installs). Rebuild and commit it with source changes.
- The build copies the kit from `../rodo-kit` (a sibling directory **outside** this repo, see `tsup.config.ts`), so `pnpm build` fails without it. `dist/kit/` is the committed copy; don't hand-edit it expecting persistence across builds.
- Error codes stay English; hints and new project files follow `--lang fa|en`.
- Tests use `test/helpers/temp-repo.ts` for throwaway repos and `test/setup/isolate-home.ts` to keep credentials out of the real home dir. `test/__snapshots__` holds `--json` output snapshots, so changing JSON output shapes means updating them deliberately.
- `packages/card-format` has its own `pnpm test` (also runs `scripts/check-codes.ts`) and builds with `tsc` + a CJS step; `packages/*/dist` is also committed.
