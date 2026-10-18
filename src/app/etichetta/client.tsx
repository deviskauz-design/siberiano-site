"use client";

import { useEffect, useState } from "react";

type Assegnazioni = Record<string, string>;
const STORAGE = "coccolami-etichetta-v1";

export function ClientGestore() {
  const [assegnazioni, setAssegnazioni] = useState<Assegnazioni>({});

  // Carica da localStorage e collega listener ai pulsanti.
  useEffect(() => {
    const salvato = localStorage.getItem(STORAGE);
    const iniziali: Assegnazioni = salvato ? JSON.parse(salvato) : {};
    setAssegnazioni(iniziali);

    // Applica stato iniziale agli attributi data-attivo + evidenzia non etichettate
    document.querySelectorAll<HTMLDivElement>("[data-foto]").forEach((wrap) => {
      const id = wrap.dataset.foto!;
      const corrente = iniziali[id];
      wrap.querySelectorAll<HTMLButtonElement>("button[data-nome]").forEach((btn) => {
        btn.dataset.attivo = btn.dataset.nome === corrente ? "true" : "false";
      });
      const card = document.querySelector<HTMLElement>(`[data-card="${id}"]`);
      if (card) {
        if (corrente) {
          card.style.borderColor = "";
          card.style.boxShadow = "";
        } else {
          card.style.borderColor = "#B58A4F";
          card.style.boxShadow = "0 0 0 2px rgba(181, 138, 79, 0.3)";
        }
      }
    });

    // Listener delegato
    const handler = (e: MouseEvent) => {
      const t = (e.target as HTMLElement).closest<HTMLButtonElement>("button[data-nome]");
      if (!t) return;
      const wrap = t.closest<HTMLDivElement>("[data-foto]");
      if (!wrap) return;
      const id = wrap.dataset.foto!;
      const nome = t.dataset.nome!;
      setAssegnazioni((prev) => {
        const next = { ...prev, [id]: nome };
        localStorage.setItem(STORAGE, JSON.stringify(next));
        wrap.querySelectorAll<HTMLButtonElement>("button[data-nome]").forEach((b) => {
          b.dataset.attivo = b.dataset.nome === nome ? "true" : "false";
        });
        const card = document.querySelector<HTMLElement>(`[data-card="${id}"]`);
        if (card) { card.style.borderColor = ""; card.style.boxShadow = ""; }
        return next;
      });
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  const testo = Object.entries(assegnazioni)
    .filter(([, v]) => v)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([id, nome]) => `${id} = ${nome}`)
    .join("\n");

  function resetTutto() {
    if (!confirm("Cancellare tutte le assegnazioni?")) return;
    localStorage.removeItem(STORAGE);
    location.reload();
  }

  async function copia() {
    await navigator.clipboard.writeText(testo);
    alert("Copiato negli appunti.");
  }

  return (
    <div className="mt-16 sticky bottom-4">
      <div className="mx-auto max-w-3xl bg-[var(--color-inchiostro)] text-[var(--color-crema)] rounded-2xl p-6 shadow-2xl">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-display text-2xl">
            Riepilogo ({Object.keys(assegnazioni).length}/40)
          </h2>
          <div className="flex gap-2">
            <button
              onClick={copia}
              className="px-3 py-1.5 text-sm rounded-full bg-[var(--color-tabacco)] text-[var(--color-inchiostro)]"
            >
              Copia
            </button>
            <button
              onClick={resetTutto}
              className="px-3 py-1.5 text-sm rounded-full border border-[var(--color-crema)]/30"
            >
              Reset
            </button>
          </div>
        </div>
        <pre className="text-xs leading-relaxed max-h-40 overflow-auto font-mono whitespace-pre-wrap opacity-90">
{testo || "(nessuna foto etichettata)"}
        </pre>
      </div>
    </div>
  );
}
