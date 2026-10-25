import type { Metadata } from "next";
import Link from "next/link";
import { ultimaCucciolata, cucciolatePrecedenti } from "@/lib/galleria";
import { LeafDivider } from "@/components/PawIcon";
import { Griglia } from "./griglia";

export const metadata: Metadata = {
  title: "Galleria",
  description:
    "Tutti i cuccioli dell'allevamento Coccolami da quando abbiamo iniziato: siberiani e Neva Masquerade cresciuti in casa a Breganzona.",
};

export default function PaginaGalleria() {
  return (
    <>
      <section className="container-edge py-20 md:py-28">
        <div className="max-w-3xl">
          <span className="eyebrow">Galleria</span>
          <h1 className="mt-4 text-5xl md:text-7xl">
            La galleria <em className="italic text-[var(--color-bronzo)]">completa</em>.
          </h1>
          <p className="mt-6 text-lg text-[var(--color-caffe)] leading-relaxed">
            Tutti i nostri cuccioli da quando abbiamo iniziato fino ad oggi.
          </p>
        </div>
        <div className="mt-10">
          <LeafDivider />
        </div>
      </section>

      <section className="container-edge pb-20 md:pb-28">
        <h2 className="text-3xl md:text-5xl mb-10">Ultima cucciolata</h2>
        <Griglia foto={ultimaCucciolata} />
      </section>

      <section className="bg-[var(--color-crema-2)] py-20 md:py-28 grain">
        <div className="container-edge">
          <h2 className="text-3xl md:text-5xl mb-10">Cucciolate precedenti</h2>
          <Griglia foto={cucciolatePrecedenti} />
        </div>
      </section>

      <section className="container-edge py-20 md:py-28 text-center">
        <h3 className="font-display text-3xl md:text-5xl max-w-2xl mx-auto">
          Vuoi il prossimo cucciolo?
        </h3>
        <p className="mt-5 text-[var(--color-caffe)] max-w-xl mx-auto">
          Scrivici: ti diciamo chi è ancora disponibile e quando arrivano i prossimi.
        </p>
        <Link
          href="/#contatto"
          className="mt-8 inline-flex items-center gap-3 px-7 py-4 rounded-full bg-[var(--color-caffe)] text-[var(--color-crema)] hover:bg-[var(--color-inchiostro)] transition"
        >
          Scrivici →
        </Link>
      </section>
    </>
  );
}
