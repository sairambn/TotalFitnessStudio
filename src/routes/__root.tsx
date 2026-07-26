import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { type ReactNode } from "react";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-dark px-4 text-white">
      <div className="max-w-md text-center">
        <p className="font-mono text-brand text-xs uppercase tracking-[0.3em] mb-4">Error 404</p>
        <h1 className="font-display text-7xl text-brand">404</h1>
        <h2 className="mt-4 font-display text-2xl uppercase tracking-wide">Page not found</h2>
        <p className="mt-2 text-sm text-white/50">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center justify-center bg-brand px-6 py-3 font-mono text-xs font-bold uppercase tracking-[0.25em] text-dark hover:bg-white transition-colors"
          >
            Return Home →
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-dark px-4 text-white">
      <div className="max-w-md text-center">
        <p className="font-mono text-brand text-xs uppercase tracking-[0.3em] mb-4">System Fault</p>
        <h1 className="font-display text-3xl uppercase tracking-wide">This page didn't load</h1>
        <p className="mt-2 text-sm text-white/50">
          Something went wrong on our end. Try refreshing or head back home.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center bg-brand px-5 py-2.5 font-mono text-xs font-bold uppercase tracking-[0.25em] text-dark hover:bg-white transition-colors"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center border border-white/20 px-5 py-2.5 font-mono text-xs font-bold uppercase tracking-[0.25em] text-white hover:border-brand hover:text-brand transition-colors"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

const FONT_CSS =
  "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;500;700;900&family=JetBrains+Mono:wght@400;500;700&display=swap";

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        title:
          "Total Fitness Studio — Best Gym in Chromepet, Chennai | 4.9★ · 798 Reviews",
      },
      {
        name: "description",
        content:
          "Total Fitness Studio — Chromepet's top-rated gym (4.9★ from 798 reviews). Women-owned fitness studio in Hasthinapuram above Axis Bank. Strength, HIIT & personal training. Open daily 4:30 AM – 9:30 PM. Call +91 99419 42942.",
      },
      {
        name: "keywords",
        content:
          "Total Fitness Studio, gym Chromepet, best gym Chromepet, gym Hasthinapuram, personal trainer Chromepet, fitness studio Chennai, women owned gym Chennai, Chitlapakkam gym",
      },
      { name: "theme-color", content: "#0F0F0F" },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { name: "geo.region", content: "IN-TN" },
      { name: "geo.placename", content: "Chromepet, Chennai" },
      { name: "geo.position", content: "12.9524;80.1381" },
      { name: "ICBM", content: "12.9524, 80.1381" },
      {
        property: "og:title",
        content: "Total Fitness Studio — Best Gym in Chromepet · 4.9★",
      },
      {
        property: "og:description",
        content:
          "4.9★ rated gym in Hasthinapuram, Chromepet (798 reviews). Women-owned. Strength, HIIT, personal training. Open 4:30 AM – 9:30 PM daily.",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_IN" },
      { property: "og:site_name", content: "Total Fitness Studio" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Total Fitness Studio — Chromepet Gym · 4.9★",
      },
      {
        name: "twitter:description",
        content:
          "Highest-rated gym in Chromepet. Women-owned. Open 4:30 AM – 9:30 PM. Call +91 99419 42942.",
      },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      // Non-render-blocking font load (media print + onload) for better Speed Index / FCP
      {
        rel: "stylesheet",
        href: FONT_CSS,
        media: "print",
        // @ts-expect-error TanStack head supports onload via attrs in practice
        onLoad: "this.media='all'",
      },
      // Fallback for no-JS
      {
        rel: "stylesheet",
        href: FONT_CSS,
        // noscript equivalent handled by the print trick + browser fallback
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
        {/* Critical: ensure fonts still apply if the media trick is ignored */}
        <noscript>
          <link rel="stylesheet" href={FONT_CSS} />
        </noscript>
      </head>
      <body className="bg-dark text-white antialiased">
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
