// Pagina interna di etichettatura foto. Non linkata in navigazione.
// Apri /etichetta, scorri le foto, clicca il nome del gatto per ciascuna.
// Le assegnazioni vengono salvate in localStorage e mostrate copiabili in fondo.

import Image from "next/image";
import { notFound } from "next/navigation";
import { ClientGestore } from "./client";

const NOMI = ["Jolie", "Tina", "Mia", "Stella", "Michy", "Cucciolo", "Altro"];

const FILE = [
  "DEVISEDIT-0016.jpg", "DEVISEDIT-0437.jpg", "DEVISEDIT-0488.jpg",
  "DEVISEDIT-0538.jpg", "DEVISEDIT-0563.jpg", "DEVISEDIT-1405.jpg",
  "DEVISEDIT-1431.jpg", "DEVISEDIT-1437.jpg", "DEVISEDIT-1444.jpg",
  "DEVISEDIT-1458.jpg", "DEVISEDIT-1475.jpg", "DEVISEDIT-1480.jpg",
  "DEVISEDIT-1499.jpg", "DEVISEDIT-1513.jpg", "DEVISEDIT-1523.jpg",
  "DEVISEDIT-1530.jpg", "DEVISEDIT-1546.jpg", "DEVISEDIT-1557.jpg",
  "DEVISEDIT-1599.jpg", "DEVISEDIT-1606.jpg", "DEVISEDIT-1635.jpg",
  "DEVISEDIT-1663.jpg", "DEVISEDIT-1670.jpg", "DEVISEDIT-1686.jpg",
  "DEVISEDIT-1710.jpg", "DEVISEDIT-1743.jpg", "DEVISEDIT-1769.jpg",
  "DEVISEDIT-1801.jpg", "DEVISEDIT-1820.jpg", "DEVISEDIT-1860.jpg",
  "DEVISEDIT-1861.jpg", "DEVISEDIT-1918.jpg", "DEVISEDIT-1958.jpg",
  "DEVISEDIT-1969.jpg", "DEVISEDIT-2004.jpg", "DEVISEDIT-2028.jpg",
  "DEVISEDIT-2029.jpg", "DEVISEDIT-2048.jpg", "DEVISEDIT-2077.jpg",
  "DEVISEDIT-2089.jpg", "DEVISEDIT-6262.jpg", "DEVISEDIT-6264.jpg",
  "DEVISEDIT-6272.jpg", "DEVISEDIT-6291.jpg", "DEVISEDIT-6794.jpg",
  "DEVISEDIT-6814.jpg", "DEVISEDIT-6819.jpg", "DEVISEDIT-6828.jpg",
  "DEVISEDIT-6831.jpg", "DEVISEDIT-6837.jpg", "DEVISEDIT-6849.jpg",
  "DEVISEDIT-6864.jpg", "DEVISEDIT-6872.jpg", "DEVISEDIT-6882.jpg",
  "DEVISEDIT-6884.jpg", "DEVISEDIT-9631.jpg", "DEVISEDIT-9640.jpg",
  "DEVISEDIT-9645.jpg", "DEVISEDIT-9671.jpg", "DEVISEDIT-9697.jpg",
  "DEVISEDIT-9705.jpg", "DEVISEDIT-9726.jpg", "DEVISEDIT-9788.jpg",
  "DEVISEDIT-9836.jpg", "DEVISEDIT-9838.jpg", "DEVISEDIT-9895.jpg",
  "DEVISEDIT-9899.jpg", "DEVISEDIT-9903.jpg", "DEVISEDIT-9914.jpg",
  "DEVISEDIT-9929.jpg", "DEVISEDIT-9939.jpg", "DEVISEDIT-9944.jpg",
  "DEVISEDIT-9955.jpg", "DEVISEDIT-9980.jpg", "DEVISEDIT-9993.jpg",
  "DEVISEDIT-9997.jpg",
];

export default function PaginaEtichetta() {
  if (process.env.NODE_ENV === "production") notFound();
  return (
    <div className="container-edge py-16">
      <header className="mb-10">
        <h1 className="font-display text-4xl">Etichettatura foto</h1>
        <p className="mt-3 text-[var(--color-caffe)] max-w-2xl">
          {FILE.length} foto da etichettare. Le scelte si salvano nel browser e le
          etichettature precedenti restano. Le foto nuove (non ancora etichettate)
          hanno il bordo arancione. In fondo trovi il riepilogo copiabile.
        </p>
        <p className="mt-3 text-[var(--color-caffe)] max-w-2xl">
          <strong>Priorità</strong>: identifica le foto di <strong>Mia</strong> e <strong>Stella</strong> (le uniche che mancano nel sito).
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {FILE.map((f) => (
          <CardFoto key={f} filename={f} />
        ))}
      </div>

      <ClientGestore />
    </div>
  );
}

function CardFoto({ filename }: { filename: string }) {
  const id = filename.replace("DEVISEDIT-", "").replace(".jpg", "");
  return (
    <div
      data-card={id}
      className="card-foto rounded-2xl border border-[var(--color-sabbia)] overflow-hidden bg-[var(--color-crema-2)]"
    >
      <div className="relative aspect-[3/4]">
        <Image
          src={`/img/archivio/originali/${filename}`}
          alt={filename}
          fill
          sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
          className="object-cover"
        />
        <div className="absolute top-3 left-3 px-2 py-1 rounded bg-black/70 text-white text-xs font-mono">
          {id}
        </div>
      </div>
      <div className="p-4">
        <div className="flex flex-wrap gap-2" data-foto={id}>
          {NOMI.map((n) => (
            <button
              key={n}
              type="button"
              data-nome={n}
              className="px-3 py-1.5 text-sm rounded-full border border-[var(--color-sabbia)] hover:bg-[var(--color-tabacco)]/20 transition data-[attivo=true]:bg-[var(--color-caffe)] data-[attivo=true]:text-[var(--color-crema)] data-[attivo=true]:border-[var(--color-caffe)]"
            >
              {n}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
