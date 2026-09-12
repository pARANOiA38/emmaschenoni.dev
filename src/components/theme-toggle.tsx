"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle({ labels }: { labels: { light: string; dark: string } }) {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const enabled = saved ? saved === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDark(enabled); document.documentElement.dataset.theme = enabled ? "dark" : "light";
  }, []);
  function toggle() { const next = !dark; setDark(next); localStorage.setItem("theme", next ? "dark" : "light"); document.documentElement.dataset.theme = next ? "dark" : "light"; }
  return <button className="icon-button" type="button" onClick={toggle} aria-label={dark ? labels.light : labels.dark}>{dark ? <Sun size={17} /> : <Moon size={17} />}</button>;
}
