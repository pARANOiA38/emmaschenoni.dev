import { copy, type Locale } from "@/data/translations";
import { About } from "./about";
import { Contact } from "./contact";
import { Education } from "./education";
import { Experience } from "./experience";
import { Expertise } from "./expertise";
import { Header } from "./header";
import { Hero } from "./hero";

export function PortfolioPage({ locale }: { locale: Locale }) {
  return (
    <main>
      <Header locale={locale} />
      <Hero locale={locale} />
      <About locale={locale} />
      <Experience locale={locale} />
      <Expertise locale={locale} />
      <Education locale={locale} />
      <Contact locale={locale} />
      <footer><span>© Emmanuel Schenoni</span><span>{copy[locale].footer}</span></footer>
    </main>
  );
}
