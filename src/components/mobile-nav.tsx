"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

export function MobileNav({ links }: { links: readonly (readonly [string, string])[] }) {
  const [open, setOpen] = useState(false);
  return <div className="mobile-nav"><button className="icon-button" onClick={() => setOpen(!open)} aria-label="Menu" aria-expanded={open}>{open ? <X size={19} /> : <Menu size={19} />}</button>{open && <nav className="mobile-menu" aria-label="Mobile navigation">{links.map(([label, target]) => <a key={target} href={`#${target}`} onClick={() => setOpen(false)}>{label}</a>)}</nav>}</div>;
}
