"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { FotoGalleria } from "@/lib/galleria";

export function Griglia({ foto }: { foto: FotoGalleria[] }) {
  const [aperta, setAperta] = useState<number | null>(null);

  const chiudi = () => setAperta(null);
  const sposta = (d: number) =>
    setAperta((i) => (i === null ? null : (i + d + foto.length) % foto.length));

  useEffect(() => {
    if (aperta === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setAperta(null);
      if (e.key === "ArrowRight") setAperta((i) => (i === null ? null : (i + 1) % foto.length));
      if (e.key === "ArrowLeft") setAperta((i) => (i === null ? null : (i - 1 + foto.length) % foto.length));
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [aperta, foto.length]);

  const corrente = aperta === null ? null : foto[aperta];

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8">
        {foto.map((f, i) => (
          <button
            key={f.foto}
            type="button"
            onClick={() => setAperta(i)}
            className="group text-left focus:outline-none"
            aria-label={`Apri foto: ${f.razza}, ${f.colore}`}
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl ring-1 ring-[var(--color-sabbia)] group-focus-visible:ring-2 group-focus-visible:ring-[var(--color-bronzo)]">
              <Image
                src={f.foto}
                alt={`${f.razza}, ${f.colore}`}
                fill
                sizes="(min-width:1024px) 25vw, (min-width:768px) 33vw, 50vw"
                className="object-cover group-hover:scale-105 transition duration-700"
              />
              {f.disponibile && (
                <span className="absolute top-3 left-3 text-[0.65rem] tracking-widest uppercase px-3 py-1 rounded-full bg-[var(--color-foglia)] text-[var(--color-crema)]">
                  Disponibile
                </span>
              )}
            </div>
            <p className="mt-3 font-display text-lg leading-tight text-[var(--color-inchiostro)]">{f.razza}</p>
            <p className="mt-0.5 text-sm text-[var(--color-caffe)]">{f.colore}</p>
          </button>
        ))}
      </div>

      {corrente && aperta !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${corrente.razza}, ${corrente.colore}`}
          className="fixed inset-0 z-[60] bg-[var(--color-inchiostro)]/95 flex flex-col"
          onClick={chiudi}
        >
          <div className="flex items-center justify-between px-4 md:px-8 py-4 text-[var(--color-crema)]">
            <span className="text-sm opacity-70">
              {aperta + 1} / {foto.length}
            </span>
            <button
              type="button"
              onClick={chiudi}
              className="grid place-items-center w-11 h-11 rounded-full border border-[var(--color-crema)]/30 hover:bg-[var(--color-crema)]/10 transition text-xl"
              aria-label="Chiudi"
            >
              ×
            </button>
          </div>

          <div className="relative flex-1 mx-4 md:mx-20" onClick={(e) => e.stopPropagation()}>
            <Image
              src={corrente.foto}
              alt={`${corrente.razza}, ${corrente.colore}`}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          </div>

          <div className="px-4 py-5 text-center text-[var(--color-crema)]" onClick={(e) => e.stopPropagation()}>
            <p className="font-display text-2xl">{corrente.razza}</p>
            <p className="mt-1 text-sm opacity-80">{corrente.colore}</p>
          </div>

          {foto.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  sposta(-1);
                }}
                className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 grid place-items-center w-12 h-12 rounded-full bg-[var(--color-crema)]/10 hover:bg-[var(--color-crema)]/20 text-[var(--color-crema)] text-2xl transition"
                aria-label="Foto precedente"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  sposta(1);
                }}
                className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 grid place-items-center w-12 h-12 rounded-full bg-[var(--color-crema)]/10 hover:bg-[var(--color-crema)]/20 text-[var(--color-crema)] text-2xl transition"
                aria-label="Foto successiva"
              >
                ›
              </button>
            </>
          )}
        </div>
      )}
    </>
  );
}
