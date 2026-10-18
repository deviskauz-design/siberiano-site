import type { Metadata } from "next";
import Link from "next/link";
import { gatti, type Gatto } from "@/lib/info";
import { LeafDivider } from "@/components/PawIcon";
import { FotoGatto } from "@/components/FotoGatto";

export const metadata: Metadata = {
  title: "I nostri gatti",
  description:
    "I gatti dell'allevamento Coccolami: quattro femmine e un maschio, tutti siberiani, tutti in casa con noi a Breganzona.",
};

export default function PaginaGatti() {
  return (
    <>
      <section className="container-edge py-20 md:py-28">
        <div className="max-w-3xl">
          <span className="eyebrow">I nostri gatti</span>
          <h1 className="mt-4 text-5xl md:text-7xl">
            La <em className="italic text-[var(--color-bronzo)]">famiglia</em>.
          </h1>
          <p className="mt-6 text-lg text-[var(--color-caffe)] leading-relaxed">
            Quattro femmine e un maschio. Tutti siberiani. Vivono con noi, dormono dove
            vogliono, mangiano dove gli pare. Sono parte della casa.
          </p>
        </div>
        <div className="mt-10"><LeafDivider /></div>
      </section>

      <SezioneGruppo
        titolo="Le femmine"
        eyebrow="Femmine"
        animali={[...gatti.femmine]}
      />

      <SezioneGruppo
        titolo="Il maschio"
        eyebrow="Maschio"
        animali={[...gatti.maschi]}
        invertito
      />

      <CTABassa />
    </>
  );
}

function SezioneGruppo({
  titolo,
  eyebrow,
  animali,
  invertito = false,
}: {
  titolo: string;
  eyebrow: string;
  animali: Gatto[];
  invertito?: boolean;
}) {
  return (
    <section
      className={`py-20 md:py-28 ${
        invertito
          ? "bg-[var(--color-inchiostro)] text-[var(--color-crema)]"
          : "bg-[var(--color-crema-2)]"
      } grain`}
    >
      <div className="container-edge">
        <div className="max-w-2xl mb-12">
          <span className={`eyebrow ${invertito ? "text-[var(--color-tabacco)]" : ""}`}>
            {eyebrow}
          </span>
          <h2 className="mt-3 text-4xl md:text-6xl">{titolo}</h2>
        </div>

        <div
          className={`grid gap-6 ${
            animali.length === 1
              ? "max-w-md"
              : "md:grid-cols-2 lg:grid-cols-4"
          }`}
        >
          {animali.map((a) => (
            <SchedaGatto key={a.nome} gatto={a} invertito={invertito} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SchedaGatto({
  gatto,
  invertito,
}: {
  gatto: Gatto;
  invertito: boolean;
}) {
  const sterilizzato = gatto.stato === "sterilizzata" || gatto.stato === "sterilizzato";
  return (
    <article
      className={`group rounded-[var(--radius-soft)] overflow-hidden ${
        invertito
          ? "bg-[var(--color-crema)]/5 border border-[var(--color-crema)]/10"
          : "bg-[var(--color-crema)] border border-[var(--color-sabbia)]"
      }`}
    >
      <div className="aspect-[4/5] relative overflow-hidden">
        <FotoGatto
          foto={gatto.foto}
          alt={gatto.nome}
          sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
          invertito={invertito}
        />
        {sterilizzato && (
          <span className="absolute top-4 left-4 text-[0.65rem] tracking-widest uppercase px-3 py-1 rounded-full bg-[var(--color-inchiostro)]/80 text-[var(--color-tabacco)]">
            in pensione
          </span>
        )}
      </div>
      <div className="p-5">
        <h3 className="font-display text-2xl">{gatto.nome}</h3>
        {gatto.nota && (
          <p className={`mt-1 text-sm ${invertito ? "opacity-80" : "text-[var(--color-caffe)]"}`}>
            {gatto.nota}
          </p>
        )}
      </div>
    </article>
  );
}

function CTABassa() {
  return (
    <section className="container-edge py-20 md:py-28 text-center">
      <h3 className="font-display text-3xl md:text-5xl max-w-2xl mx-auto">
        Vuoi conoscerli di persona?
      </h3>
      <p className="mt-5 text-[var(--color-caffe)] max-w-xl mx-auto">
        Riceviamo su appuntamento a Breganzona.
      </p>
      <Link
        href="/#contatto"
        className="mt-8 inline-flex items-center gap-3 px-7 py-4 rounded-full bg-[var(--color-caffe)] text-[var(--color-crema)] hover:bg-[var(--color-inchiostro)] transition"
      >
        Scrivici →
      </Link>
    </section>
  );
}
