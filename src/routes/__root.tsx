import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { I18nProvider } from "../lib/i18n";

function NotFoundComponent() {
  return (
    <div className="bg-parchment-texture flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center">
        <p className="text-sacred text-[11px] text-burgundy">Untraveled path</p>
        <h1 className="mt-6 font-display text-7xl text-burgundy">404</h1>
        <p className="mt-6 font-display text-2xl italic text-ink/70">
          This page is not yet part of the map.
        </p>
        <div className="mt-10">
          <Link
            to="/"
            className="inline-flex items-center border border-burgundy px-6 py-3 text-[11px] uppercase tracking-[0.28em] text-burgundy hover:bg-burgundy hover:text-cream transition-colors duration-500"
          >
            Return home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="bg-parchment-texture flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-4xl text-burgundy">Something rests uneasily here</h1>
        <p className="mt-4 text-sm text-ink/70">Please try again, or return home.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="border border-burgundy px-6 py-3 text-[11px] uppercase tracking-[0.28em] text-burgundy hover:bg-burgundy hover:text-cream transition-colors"
          >
            Try again
          </button>
          <a
            href="/"
            className="border border-ink/30 px-6 py-3 text-[11px] uppercase tracking-[0.28em] text-ink hover:bg-ink hover:text-cream transition-colors"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Anima Arcana — Embodied healing, tarot & ritual with Virginia Giordano" },
      {
        name: "description",
        content:
          "Embodied healing, intuitive guidance and ritual experiences in communion with nature. Bodywork, tarot, Reiki, TVM, Kundalini ceremony, ritual photography, an apothecary and a tarot school — from Oaxaca, Mexico.",
      },
      { name: "author", content: "Virginia Giordano · Anima Arcana" },
      { property: "og:site_name", content: "Anima Arcana" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#4A0E0A" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Cinzel:wght@400;500&family=Inter:wght@300;400;500&display=swap",
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
      </head>
      <body>
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
      <I18nProvider>
        <Outlet />
      </I18nProvider>
    </QueryClientProvider>
  );
}
