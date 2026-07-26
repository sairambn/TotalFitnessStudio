# Contributing to Total Fitness Studio

Thanks for your interest in contributing. This is a portfolio / production marketing site, so keep changes focused, typed, and accessible.

## Development setup

```bash
git clone https://github.com/sairambn/TotalFitnessStudio.git
cd TotalFitnessStudio
bun install
bun run dev
```

## Workflow

1. Create a branch from `main`
2. Make focused changes
3. Run checks locally:
   ```bash
   bun run lint
   bunx tsc --noEmit
   bun run build
   ```
4. Open a Pull Request using the template

## Code guidelines

- **TypeScript** — prefer strict types; avoid `any`
- **Accessibility** — keyboard support, focus states, reduced-motion
- **SEO / conversion** — preserve Schema.org, meta, and CTA paths
- **Single source of truth** — business data lives in `src/lib/site.ts`
- **Commits** — clear, imperative messages (`fix: …`, `feat: …`, `docs: …`)

## Pull requests

- Keep PRs small and reviewable
- Include a short summary + test plan
- UI changes: add before/after screenshots when helpful

## Questions

Open an issue or reach out via the contact details in the profile README.
