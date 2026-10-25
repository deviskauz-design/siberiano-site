"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { PawIcon } from "./PawIcon";

const voci = [
  { href: "/", label: "Casa" },
  { href: "/gatti", label: "I nostri gatti" },
  { href: "/galleria", label: "Galleria" },
  { href: "/#contatto", label: "Contatti" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[var(--color-crema)]/85 backdrop-blur-md border-b border-[var(--color-sabbia)]/60"
          : "bg-transparent"
      }`}
    >
      <div className="container-edge flex items-center justify-between h-20">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="grid place-items-center w-10 h-10 rounded-full bg-[var(--color-tabacco)]/15 text-[var(--color-bronzo)] group-hover:bg-[var(--color-tabacco)]/25 transition">
            <PawIcon className="w-5 h-5" />
          </span>
          <span className="font-display text-2xl tracking-tight">Coccolami</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {voci.map((v) => (
            <Link
              key={v.href}
              href={v.href}
              className="px-4 py-2 text-sm rounded-full text-[var(--color-caffe)] hover:bg-[var(--color-sabbia)]/60 transition"
            >
              {v.label}
            </Link>
          ))}
          <Link
            href="/#contatto"
            className="ml-3 inline-flex items-center gap-2 px-5 py-2.5 text-sm rounded-full bg-[var(--color-caffe)] text-[var(--color-crema)] hover:bg-[var(--color-inchiostro)] transition"
          >
            Chiedi informazioni
          </Link>
        </nav>

        <button
          aria-label="Apri menu"
          onClick={() => setOpen((o) => !o)}
          className="lg:hidden grid place-items-center w-10 h-10 rounded-full border border-[var(--color-sabbia)]"
        >
          <span className="flex flex-col gap-1.5">
            <span className={`block h-px w-5 bg-current transition ${open ? "translate-y-1.5 rotate-45" : ""}`} />
            <span className={`block h-px w-5 bg-current transition ${open ? "opacity-0" : ""}`} />
            <span className={`block h-px w-5 bg-current transition ${open ? "-translate-y-1.5 -rotate-45" : ""}`} />
          </span>
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-[var(--color-crema)] border-t border-[var(--color-sabbia)]/60">
          <nav className="container-edge flex flex-col py-4">
            {voci.map((v) => (
              <Link
                key={v.href}
                href={v.href}
                onClick={() => setOpen(false)}
                className="py-3 text-base border-b border-[var(--color-sabbia)]/40 last:border-0"
              >
                {v.label}
              </Link>
            ))}
            <Link
              href="/#contatto"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex justify-center items-center gap-2 px-5 py-3 rounded-full bg-[var(--color-caffe)] text-[var(--color-crema)]"
            >
              Chiedi informazioni
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
