"use client";

import { useEffect, useState } from "react";
import type { Locale } from "@/data/translations";

export function LanguageSwitcher({ locale, label }: { locale: Locale; label: string }) {
  const [hash, setHash] = useState("");

  useEffect(() => {
    const updateHash = () => setHash(window.location.hash);
    updateHash();
    window.addEventListener("hashchange", updateHash);
    return () => window.removeEventListener("hashchange", updateHash);
  }, []);

  return (
    <div className="language" aria-label={label}>
      {locale === "es" ? <span className="active" aria-current="page">ES</span> : <a href={`/${hash}`}>ES</a>}
      <span aria-hidden="true">/</span>
      {locale === "en" ? <span className="active" aria-current="page">EN</span> : <a href={`/en${hash}`}>EN</a>}
    </div>
  );
}
