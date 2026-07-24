import { createContext, useContext, useEffect, useMemo, type ReactNode } from "react";
import { useRouterState } from "@tanstack/react-router";
import { DEFAULT_LOCALE, LOCALES, TRANSLATIONS, type Locale } from "./translations";

const STORAGE_KEY = "anima-arcana-locale";

type I18nValue = {
  locale: Locale;
  t: (typeof TRANSLATIONS)[Locale];
};

const I18nContext = createContext<I18nValue | null>(null);

export function detectLocaleFromPath(pathname: string): Locale {
  const seg = pathname.split("/").filter(Boolean)[0];
  if (seg === "es" || seg === "it") return seg;
  return DEFAULT_LOCALE;
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const locale = detectLocaleFromPath(pathname);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, locale);
    } catch {}
    if (typeof document !== "undefined") {
      document.documentElement.lang = locale;
    }
  }, [locale]);

  const value = useMemo<I18nValue>(
    () => ({ locale, t: TRANSLATIONS[locale] }),
    [locale],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n(): I18nValue {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    // Fall back gracefully during SSR before provider mounts.
    return { locale: DEFAULT_LOCALE, t: TRANSLATIONS[DEFAULT_LOCALE] };
  }
  return ctx;
}

export function getStoredLocale(): Locale | null {
  if (typeof window === "undefined") return null;
  try {
    const v = localStorage.getItem(STORAGE_KEY);
    if (v && (LOCALES as string[]).includes(v)) return v as Locale;
  } catch {}
  return null;
}

export { LOCALES, DEFAULT_LOCALE };
export type { Locale };
