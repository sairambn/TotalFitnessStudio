// @lovable.dev/vite-tanstack-config already includes:
//   TanStack Start, viteReact, tailwindcss, tsConfigPaths, nitro, @ path alias, etc.
// Override nitro target to "vercel" so production builds work on Vercel.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts
    server: { entry: "server" },
  },
  // Force Nitro to emit a Vercel-compatible output
  nitro: {
    preset: "vercel",
  },
});
