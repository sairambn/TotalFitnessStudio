# Total Fitness Studio — Agent Notes

## Stack
- TanStack Start (React 19) + Vite 8 + Bun
- Tailwind CSS v4
- Nitro (via @lovable.dev/vite-tanstack-config)

## Local development
```bash
bun install
bun run dev
```

## Production build
```bash
bun run build
bun run preview
```

## Deploy (Vercel)
1. Import this GitHub repo in Vercel: https://vercel.com/new
2. Framework: leave auto-detect (or set install = `bun install`, build = `bun run build`)
3. Deploy

The `vercel.json` in the root already sets the correct install/build commands.
