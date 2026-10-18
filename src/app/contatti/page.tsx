import type { Metadata } from "next";
import { allevamento } from "@/lib/info";
import { LeafDivider, PawIcon } from "@/components/PawIcon";
import { FormContatti } from "./form";

export const metadata: Metadata = {
  title: "Contatti",
  description:
    "Contatta l'allevamento Coccolami a Breganzona, Ticino. Telefono, WhatsApp, email e form di contatto.",
};

export default function PaginaContatti() {
  return (
    <>
      <section className="container-edge py-20 md:py-28">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <span className="eyebrow">Contatti</span>
            <h1 className="mt-4 text-5xl md:text-7xl">
              Parliamoci, <em className="italic text-[var(--color-bronzo)]">senza fretta</em>.
            </h1>
            <p className="mt-6 text-lg text-[var(--color-caffe)] leading-relaxed">
              Scrivici. Rispondiamo noi, di persona.
            </p>
            <div className="mt-10"><LeafDivider /></div>

            <div className="mt-12 space-y-8">
              <BloccoContatto
                titolo="Allevamento"
                righe={[
                  `${allevamento.cap} ${allevamento.citta}`,
                  `${allevamento.cantone}, ${allevamento.paese}`,
                ]}
                nota="Indirizzo esatto comunicato dopo primo contatto."
              />
              <BloccoContatto
                titolo="Telefono"
                righe={[allevamento.telefono]}
                link={allevamento.telefonoLink}
              />
              <BloccoContatto
                titolo="Email"
                righe={[allevamento.email]}
                link={allevamento.emailLink}
              />
              <div>
                <a
                  href={allevamento.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[var(--color-foglia)] text-[var(--color-crema)] hover:opacity-90 transition"
                >
                  <PawIcon className="w-4 h-4" />
                  Scrivici su WhatsApp
                </a>
              </div>
            </div>
          </div>

          <div>
            <FormContatti />
          </div>
        </div>
      </section>
    </>
  );
}

function BloccoContatto({
  titolo,
  righe,
  link,
  nota,
}: {
  titolo: string;
  righe: string[];
  link?: string;
  nota?: string;
}) {
  return (
    <div>
      <p className="eyebrow">{titolo}</p>
      <div className="mt-2 font-display text-2xl text-[var(--color-inchiostro)]">
        {link ? (
          <a href={link} className="hover:text-[var(--color-bronzo)] transition">
            {righe.join(" · ")}
          </a>
        ) : (
          righe.map((r, i) => <p key={i}>{r}</p>)
        )}
      </div>
      {nota && <p className="mt-2 text-sm text-[var(--color-caffe)]">{nota}</p>}
    </div>
  );
}
