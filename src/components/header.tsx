import { copy, type Locale } from "@/data/translations";
import { LanguageSwitcher } from "./language-switcher";
import { MobileNav } from "./mobile-nav";
import { ThemeToggle } from "./theme-toggle";

export function Header({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const home = locale === "en" ? "/en" : "/";

  return (
    <header className="site-header">
      <a href={home} className="brand" aria-label="Emmanuel Schenoni home">E. Schenoni</a>
      <nav className="desktop-nav" aria-label={t.header.navigationLabel}>
        {t.nav.map(([label, target]) => <a href={`#${target}`} key={target}>{label}</a>)}
      </nav>
      <div className="header-actions">
        <LanguageSwitcher locale={locale} label={t.header.languageLabel} />
        <ThemeToggle labels={t.theme} />
        <MobileNav links={t.nav} label={t.header.menuLabel} />
      </div>
    </header>
  );
}
