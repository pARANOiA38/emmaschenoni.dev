import { PortfolioPage } from "@/components/portfolio-page";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("en");

export default function EnglishPage() {
  return <PortfolioPage locale="en" />;
}
