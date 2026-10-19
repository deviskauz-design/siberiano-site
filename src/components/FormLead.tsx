"use client";

import { useState } from "react";
import { allevamento } from "@/lib/info";

export function FormLead() {
  const [inviato, setInviato] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const corpo = [
      `Nome: ${data.get("nome")}`,
      `Email: ${data.get("email")}`,
      `Telefono: ${data.get("telefono") || "—"}`,
      "",
      `${data.get("messaggio")}`,
    ].join("\n");
    window.location.href = `mailto:${allevamento.email}?subject=${encodeURIComponent(
      "Richiesta da siberiano.ch",
    )}&body=${encodeURIComponent(corpo)}`;
    setInviato(true);
  }

  return (
    <form
      onSubmit={onSubmit}
      className="bg-[var(--color-crema)]/5 backdrop-blur rounded-[var(--radius-soft)] p-6 md:p-8 border border-[var(--color-crema)]/15"
    >
      <div className="grid gap-4">
        <Campo nome="nome" etichetta="Nome" required />
        <div className="grid sm:grid-cols-2 gap-4">
          <Campo nome="email" type="email" etichetta="Email" required />
          <Campo nome="telefono" type="tel" etichetta="Telefono" />
        </div>
        <label className="block">
          <span className="text-xs eyebrow text-[var(--color-tabacco)]">Messaggio</span>
          <textarea
            name="messaggio"
            rows={4}
            required
            placeholder="Raccontaci di te. Hai già avuto gatti? Vivi in casa con altri animali o bambini?"
            className="mt-2 block w-full px-4 py-3 rounded-xl bg-[var(--color-crema)]/10 border border-[var(--color-crema)]/15 text-[var(--color-crema)] placeholder:text-[var(--color-crema)]/40 focus:outline-none focus:border-[var(--color-tabacco)] transition resize-none"
          />
        </label>

        <button
          type="submit"
          className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-full bg-[var(--color-tabacco)] text-[var(--color-inchiostro)] hover:bg-[var(--color-crema)] transition mt-2"
        >
          {inviato ? "Apro il tuo client mail…" : "Invia richiesta →"}
        </button>
        <p className="text-xs text-[var(--color-crema)]/50">
          Rispondiamo personalmente, di solito entro 24 ore.
        </p>
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
      <span className="text-xs eyebrow text-[var(--color-tabacco)]">
        {etichetta}{required && " *"}
      </span>
      <input
        type={type}
        name={nome}
        required={required}
        className="mt-2 block w-full px-4 py-3 rounded-xl bg-[var(--color-crema)]/10 border border-[var(--color-crema)]/15 text-[var(--color-crema)] placeholder:text-[var(--color-crema)]/40 focus:outline-none focus:border-[var(--color-tabacco)] transition"
      />
    </label>
  );
}
