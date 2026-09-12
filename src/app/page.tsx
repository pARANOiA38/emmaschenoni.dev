import { PortfolioPage } from "@/components/portfolio-page";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("es");

export default function SpanishPage() {
  return <PortfolioPage locale="es" />;
}
