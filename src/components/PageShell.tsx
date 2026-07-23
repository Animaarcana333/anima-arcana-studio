import type { ReactNode } from "react";
import { SiteNav } from "./SiteNav";
import { SiteFooter } from "./SiteFooter";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="bg-parchment-texture min-h-screen">
      <SiteNav />
      <main className="pb-24 md:pb-0">{children}</main>
      <SiteFooter />
    </div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative pt-40 pb-16 lg:pt-52 lg:pb-24">
      <div className="mx-auto max-w-4xl px-6 text-center">
        {eyebrow ? (
          <p className="text-sacred text-[10px] text-burgundy fade-in-slow">{eyebrow}</p>
        ) : null}
        <h1 className="mt-6 text-display text-5xl text-burgundy sm:text-6xl lg:text-7xl rise-in">
          {title}
        </h1>
        {subtitle ? (
          <p className="mx-auto mt-8 max-w-2xl text-lg italic text-ink/70 font-display fade-in-slow">
            {subtitle}
          </p>
        ) : null}
        {children}
      </div>
    </section>
  );
}
