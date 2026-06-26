"use client";

import { useCallback, useEffect, useState } from "react";
import type { Lang } from "@/components/Sidebar";

const STORAGE_KEY = "albader-lang";

function isLang(value: string | null): value is Lang {
  return value === "ar" || value === "en" || value === "zh";
}

export function useStoredLang(defaultLang: Lang = "ar") {
  const [lang, setLangState] = useState<Lang>(defaultLang);

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (isLang(saved)) {
      window.setTimeout(() => setLangState(saved), 0);
    }
  }, []);

  const setLang = useCallback((nextLang: Lang) => {
    setLangState(nextLang);
    window.localStorage.setItem(STORAGE_KEY, nextLang);
  }, []);

  return [lang, setLang] as const;
}
