import Link from "next/link";
import { allevamento } from "@/lib/info";
import { LeafDivider, PawIcon } from "./PawIcon";

export function Footer() {
  return (
    <footer className="bg-[var(--color-inchiostro)] text-[var(--color-crema)]/80 mt-32">
      <div className="container-edge py-20 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2 max-w-md">
          <div className="flex items-center gap-3">
            <span className="grid place-items-center w-10 h-10 rounded-full bg-[var(--color-tabacco)]/20 text-[var(--color-tabacco)]">
              <PawIcon className="w-5 h-5" />
            </span>
            <span className="font-display text-3xl text-[var(--color-crema)]">{allevamento.nome}</span>
          </div>
          <p className="mt-6 text-sm leading-relaxed">
            Allevamento famigliare di gatti siberiani in Ticino. Cresciamo i nostri gatti
            in casa, non in recinti. Pochi cuccioli, quando arrivano arrivano.
          </p>
          <LeafDivider className="w-24 h-6 mt-8 opacity-60" />
        </div>

        <div>
          <p className="eyebrow text-[var(--color-tabacco)]">Esplora</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/" className="hover:text-[var(--color-tabacco)] transition">Casa</Link></li>
            <li><Link href="/gatti" className="hover:text-[var(--color-tabacco)] transition">I nostri gatti</Link></li>
            <li><Link href="/galleria" className="hover:text-[var(--color-tabacco)] transition">Galleria</Link></li>
            <li><Link href="/#contatto" className="hover:text-[var(--color-tabacco)] transition">Contattaci</Link></li>
          </ul>
        </div>

        <div>
          <p className="eyebrow text-[var(--color-tabacco)]">Dove siamo</p>
          <address className="not-italic mt-4 space-y-2 text-sm">
            <p>{allevamento.cap} {allevamento.citta}</p>
            <p>{allevamento.cantone}, {allevamento.paese}</p>
            <p className="pt-2">
              <a href={allevamento.telefonoLink} className="hover:text-[var(--color-tabacco)] transition">
                {allevamento.telefono}
              </a>
            </p>
            <p>
              <a href={allevamento.emailLink} className="hover:text-[var(--color-tabacco)] transition">
                {allevamento.email}
              </a>
            </p>
          </address>
        </div>
      </div>

      <div className="border-t border-[var(--color-crema)]/10">
        <div className="container-edge py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs">
          <p>© {new Date().getFullYear()} {allevamento.nome}. Tutti i diritti riservati.</p>
          <p className="opacity-60">{allevamento.cap} {allevamento.citta}, {allevamento.cantone}</p>
        </div>
      </div>
    </footer>
  );
}
