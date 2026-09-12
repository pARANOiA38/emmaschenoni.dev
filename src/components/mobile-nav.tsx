"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

export function MobileNav({ links, label }: { links: readonly (readonly [string, string])[]; label: string }) {
  const [open, setOpen] = useState(false);
  return <div className="mobile-nav"><button className="icon-button" onClick={() => setOpen(!open)} aria-label={label} aria-expanded={open}>{open ? <X size={19} /> : <Menu size={19} />}</button>{open && <nav className="mobile-menu" aria-label={label}>{links.map(([linkLabel, target]) => <a key={target} href={`#${target}`} onClick={() => setOpen(false)}>{linkLabel}</a>)}</nav>}</div>;
}
