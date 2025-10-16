"use client";

import { useEffect } from "react";

// Lightweight client-side enhancer that wires up the server nav shell.
export default function NavEnhancer() {
  useEffect(() => {
    const btn = document.getElementById("nav-toggle");
    const mobile = document.getElementById("nav-mobile");
    if (!btn || !mobile) return;

    let open = false;
    const setState = (next: boolean) => {
      open = next;
      btn.setAttribute("aria-expanded", String(open));
      // Avoid layout thrash: batch class toggle into rAF
      requestAnimationFrame(() => {
        if (open) mobile.classList.remove("hidden");
        else mobile.classList.add("hidden");
      });
    };

    const onClick = (e: MouseEvent) => {
      e.preventDefault();
      setState(!open);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) setState(false);
    };
    const onDocClick = (e: MouseEvent) => {
      if (!open) return;
      const target = e.target as Node;
      if (!mobile.contains(target) && !btn.contains(target)) {
        setState(false);
      }
    };

    btn.addEventListener("click", onClick);
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("click", onDocClick, { passive: true } as any);

    return () => {
      btn.removeEventListener("click", onClick);
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("click", onDocClick as any);
    };
  }, []);

  return null;
}

