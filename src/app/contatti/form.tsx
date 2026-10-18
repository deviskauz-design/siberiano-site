"use client";

import { useState } from "react";
import { allevamento } from "@/lib/info";

const motivi = [
  "Informazioni sui cuccioli",
  "Visita all'allevamento",
  "Informazioni sulla razza",
  "Altro",
];

export function FormContatti() {
  const [inviato, setInviato] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const corpo = [
      `Nome: ${data.get("nome")}`,
      `Telefono: ${data.get("telefono")}`,
      `Motivo: ${data.get("motivo")}`,
      "",
      `${data.get("messaggio")}`,
    ].join("\n");
    const url = `mailto:${allevamento.email}?subject=${encodeURIComponent(
      "Richiesta da coccolami.ch — " + (data.get("motivo") || "info"),
    )}&body=${encodeURIComponent(corpo)}`;
    window.location.href = url;
    setInviato(true);
  }

  return (
    <form
      onSubmit={onSubmit}
      className="bg-[var(--color-crema-2)] grain rounded-[var(--radius-soft)] p-8 md:p-10 border border-[var(--color-sabbia)]"
    >
      <h2 className="font-display text-3xl">Scrivici</h2>
      <p className="mt-2 text-sm text-[var(--color-caffe)]">
        Compila i campi: si apre il tuo client di posta con il messaggio pronto.
      </p>

      <div className="mt-8 grid gap-5">
        <Campo nome="nome" etichetta="Il tuo nome" required />
        <div className="grid sm:grid-cols-2 gap-5">
          <Campo nome="email" type="email" etichetta="Email" required />
          <Campo nome="telefono" type="tel" etichetta="Telefono (opzionale)" />
        </div>

        <label className="block">
          <span className="text-xs eyebrow">Motivo del contatto</span>
          <select
            name="motivo"
            required
            className="mt-2 block w-full px-4 py-3 rounded-xl bg-[var(--color-crema)] border border-[var(--color-sabbia)] focus:outline-none focus:border-[var(--color-tabacco)] transition"
            defaultValue=""
          >
            <option value="" disabled>Scegli un motivo</option>
            {motivi.map((m) => <option key={m}>{m}</option>)}
          </select>
        </label>

        <label className="block">
          <span className="text-xs eyebrow">Messaggio</span>
          <textarea
            name="messaggio"
            rows={5}
            required
            placeholder="Raccontaci di te, della tua casa, di cosa cerchi."
            className="mt-2 block w-full px-4 py-3 rounded-xl bg-[var(--color-crema)] border border-[var(--color-sabbia)] focus:outline-none focus:border-[var(--color-tabacco)] transition resize-none"
          />
        </label>

        <label className="flex gap-3 items-start text-sm text-[var(--color-caffe)]">
          <input type="checkbox" required className="mt-1 accent-[var(--color-bronzo)]" />
          <span>
            Acconsento al trattamento dei dati per essere ricontattato.
            Nessun marketing, nessuna newsletter.
          </span>
        </label>

        <button
          type="submit"
          className="mt-2 inline-flex items-center justify-center gap-3 px-7 py-4 rounded-full bg-[var(--color-caffe)] text-[var(--color-crema)] hover:bg-[var(--color-inchiostro)] transition"
        >
          {inviato ? "Apro il tuo client mail…" : "Invia richiesta →"}
        </button>
      </div>
    </form>
  );
}

function Campo({
  nome,
  etichetta,
  type = "text",
  required = false,
}: {
  nome: string;
  etichetta: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-xs eyebrow">{etichetta}{required && " *"}</span>
      <input
        type={type}
        name={nome}
        required={required}
        className="mt-2 block w-full px-4 py-3 rounded-xl bg-[var(--color-crema)] border border-[var(--color-sabbia)] focus:outline-none focus:border-[var(--color-tabacco)] transition"
      />
    </label>
  );
}
