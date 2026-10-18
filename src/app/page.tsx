import Link from "next/link";
import Image from "next/image";
import { allevamento, gatti, immagini, cucciolataAttuale } from "@/lib/info";
import { LeafDivider, PawIcon } from "@/components/PawIcon";
import { FotoGatto } from "@/components/FotoGatto";
import { FormLead } from "@/components/FormLead";

export default function Home() {
  return (
    <>
      <Hero />
      <Storia />
      <PerchéSiberiano />
      <AnteprimaGatti />
      <Cucciolata />
      <Galleria />
      <CTAContatto />
    </>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[88vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 grain">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-crema)] via-[var(--color-crema-2)] to-[var(--color-sabbia)]" />
        <div className="absolute -top-32 -right-32 w-[40rem] h-[40rem] rounded-full bg-[var(--color-tabacco)]/15 blur-3xl" />
        <div className="absolute -bottom-40 -left-20 w-[35rem] h-[35rem] rounded-full bg-[var(--color-foglia)]/10 blur-3xl" />
      </div>

      <div className="absolute right-[3%] top-1/2 -translate-y-1/2 w-[36rem] h-[44rem] hidden lg:block">
        <div className="relative w-full h-full rounded-[2rem] overflow-hidden shadow-2xl ring-1 ring-[var(--color-tabacco)]/20 animate-float-slow">
          <Image
            src={immagini.hero}
            alt="Gatto siberiano dell'allevamento Coccolami"
            fill
            priority
            sizes="(min-width: 1024px) 36rem, 0px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-inchiostro)]/30 via-transparent to-transparent" />
        </div>
      </div>

      <div className="relative container-edge grid lg:grid-cols-12 gap-10 py-20">
        <div className="lg:col-span-7 animate-fade-up">
          <span className="eyebrow">Allevamento famigliare · Breganzona</span>
          <h1 className="mt-6 text-5xl md:text-7xl lg:text-[5.5rem] leading-[0.95]">
            Gatti siberiani <em className="font-display italic text-[var(--color-bronzo)]">cresciuti</em> in famiglia.
          </h1>
          <p className="mt-8 text-lg md:text-xl text-[var(--color-caffe)] max-w-xl leading-relaxed">
            Coccolami è un piccolo allevamento famigliare in Ticino. I nostri gatti vivono
            in casa con noi: niente gabbie, niente recinti.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contatto"
              className="group inline-flex items-center gap-3 px-7 py-4 rounded-full bg-[var(--color-caffe)] text-[var(--color-crema)] hover:bg-[var(--color-inchiostro)] transition"
            >
              <span>Chiedi informazioni</span>
              <span className="text-[var(--color-tabacco)] group-hover:translate-x-1 transition">→</span>
            </a>
            <a
              href={allevamento.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 px-7 py-4 rounded-full border border-[var(--color-caffe)]/30 text-[var(--color-caffe)] hover:bg-[var(--color-caffe)]/5 transition"
            >
              Scrivici su WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[var(--color-bronzo)] text-xs tracking-widest uppercase animate-float-slow">
        scorri ↓
      </div>
    </section>
  );
}

function Storia() {
  return (
    <section className="container-edge py-28 md:py-36">
      <div className="grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5">
          <div className="relative aspect-[4/5] rounded-[var(--radius-soft)] overflow-hidden ring-1 ring-[var(--color-sabbia)]">
            <Image
              src={immagini.storia}
              alt="Mamma siberiana con cucciolo nel giardino"
              fill
              sizes="(min-width: 1024px) 35vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="lg:col-span-7 lg:pl-12">
          <span className="eyebrow">Chi siamo</span>
          <h2 className="mt-4 text-4xl md:text-6xl">
            Una famiglia, una casa, <em className="italic text-[var(--color-bronzo)]">pochi gatti</em>.
          </h2>

          <div className="mt-8 space-y-5 text-[var(--color-caffe)] leading-relaxed text-lg max-w-2xl">
            <p>
              Coccolami nasce nel {allevamento.annoFondazione}: un allevamento famigliare a
              Breganzona, in Ticino. I nostri siberiani vivono in casa con noi, non in
              recinti. I cuccioli crescono fra divani, bambini e finestre aperte sul verde.
            </p>
            <p>
              Non programmiamo cucciolate su richiesta. Le mamme partoriscono quando è
              tempo: i cuccioli arrivano poche volte all'anno, non sempre disponibili.
              Se ti interessa portarne uno a casa, scrivici e ti aggiorniamo appena ce ne sono.
            </p>
          </div>

          <div className="mt-10">
            <a
              href="#contatto"
              className="inline-flex items-center gap-3 text-[var(--color-bronzo)] hover:text-[var(--color-caffe)] transition"
            >
              <span className="border-b border-current pb-1">Iscrivi alla lista d'attesa</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function PerchéSiberiano() {
  const tratti = [
    {
      t: "Ipoallergenici",
      d: "Il siberiano produce meno Fel d1 di altre razze. Molte persone allergiche convivono bene con un siberiano, ma ogni allergia è individuale: la prova in casa è sempre il modo più sicuro per capirlo.",
    },
    {
      t: "Carattere sociale",
      d: "Riconoscono il proprio nome, accolgono chi entra, seguono in casa. Convivono bene con bambini e altri animali.",
    },
    {
      t: "Pelo lungo, manutenzione bassa",
      d: "Triplo strato resistente all'acqua. Non si annoda facilmente: una spazzolata a settimana basta.",
    },
    {
      t: "Razza naturale",
      d: "Origine russa, evoluzione naturale. Robusti, longevi, geneticamente stabili.",
    },
  ];
  return (
    <section className="bg-[var(--color-crema-2)] py-28 md:py-36 grain">
      <div className="container-edge">
        <div className="text-center max-w-2xl mx-auto">
          <span className="eyebrow">Perché un siberiano</span>
          <h2 className="mt-4 text-4xl md:text-6xl">
            Una razza <em className="italic text-[var(--color-bronzo)]">naturale</em>, dal carattere raro.
          </h2>
          <div className="mt-6 flex justify-center">
            <LeafDivider />
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-x-12 gap-y-10 max-w-5xl mx-auto">
          {tratti.map((t) => (
            <article key={t.t} className="flex gap-5">
              <div className="shrink-0 grid place-items-center w-12 h-12 rounded-full bg-[var(--color-tabacco)]/15 text-[var(--color-bronzo)]">
                <PawIcon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display text-2xl">{t.t}</h3>
                <p className="mt-2 text-[var(--color-caffe)] leading-relaxed">{t.d}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function AnteprimaGatti() {
  const tutti = [...gatti.femmine, ...gatti.maschi];
  return (
    <section className="container-edge py-28 md:py-36">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
        <div>
          <span className="eyebrow">I nostri gatti</span>
          <h2 className="mt-4 text-4xl md:text-6xl">La famiglia.</h2>
          <p className="mt-4 text-[var(--color-caffe)] max-w-xl">
            Quattro femmine e un maschio. Tutti siberiani, tutti in casa con noi.
          </p>
        </div>
        <Link
          href="/gatti"
          className="self-start inline-flex items-center gap-2 text-[var(--color-bronzo)] hover:text-[var(--color-caffe)] transition"
        >
          <span className="border-b border-current pb-1">Conoscili</span>
          <span>→</span>
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {tutti.map((g) => (
          <article
            key={g.nome}
            className="group relative overflow-hidden rounded-[var(--radius-soft)] aspect-[3/4]"
          >
            <FotoGatto
              foto={g.foto}
              alt={g.nome}
              sizes="(min-width: 768px) 20vw, 50vw"
            />
            <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-[var(--color-inchiostro)]/90 to-transparent text-[var(--color-crema)]">
              <h3 className="font-display text-2xl">{g.nome}</h3>
              {(g.stato === "sterilizzata" || g.stato === "sterilizzato") && (
                <p className="mt-0.5 text-[0.65rem] tracking-widest uppercase opacity-70">
                  in pensione
                </p>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Cucciolata() {
  const totale = cucciolataAttuale.cuccioli.length;
  const femmine = cucciolataAttuale.cuccioli.filter((c) => c.sesso === "femmina").length;
  const maschi = cucciolataAttuale.cuccioli.filter((c) => c.sesso === "maschio").length;
  return (
    <section className="bg-[var(--color-inchiostro)] text-[var(--color-crema)] py-24 md:py-32">
      <div className="container-edge">
        <div className="grid lg:grid-cols-12 gap-12 items-end mb-16">
          <div className="lg:col-span-7">
            <span className="eyebrow text-[var(--color-tabacco)]">Cucciolata disponibile</span>
            <h2 className="mt-3 text-4xl md:text-6xl">
              {totale} cuccioli, <em className="italic text-[var(--color-tabacco)]">pronti</em> a casa tua.
            </h2>
            <p className="mt-6 text-lg opacity-80 leading-relaxed max-w-xl">
              {femmine} femmine e {maschi} maschi, cresciuti in casa con noi. Scrivici per
              conoscerli.
            </p>
          </div>
          <div className="lg:col-span-5 flex lg:justify-end">
            <a
              href="#contatto"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[var(--color-tabacco)] text-[var(--color-inchiostro)] hover:bg-[var(--color-crema)] transition"
            >
              Prenota il tuo →
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {cucciolataAttuale.cuccioli.map((c) => (
            <article
              key={c.id}
              className="group relative overflow-hidden rounded-[var(--radius-soft)] aspect-[3/4]"
            >
              <Image
                src={c.foto}
                alt={c.descrizione}
                fill
                sizes="(min-width:1024px) 20vw, (min-width:768px) 33vw, 50vw"
                className="object-cover group-hover:scale-105 transition duration-700"
              />
              <span className="absolute top-3 right-3 text-[0.65rem] tracking-widest uppercase px-2.5 py-1 rounded-full bg-[var(--color-tabacco)] text-[var(--color-inchiostro)]">
                {c.sesso === "femmina" ? "♀ Fem." : "♂ Mas."}
              </span>
              <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-[var(--color-inchiostro)]/95 to-transparent">
                <p className="text-xs leading-tight opacity-90">{c.descrizione}</p>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-10 text-sm opacity-60 text-center">
          Scrivici su WhatsApp per altre foto e video.
        </p>
      </div>
    </section>
  );
}

function Galleria() {
  return (
    <section className="container-edge py-28 md:py-36">
      <div className="max-w-2xl mb-14">
        <span className="eyebrow">Galleria</span>
        <h2 className="mt-3 text-4xl md:text-6xl">
          Una giornata <em className="italic text-[var(--color-bronzo)]">a casa nostra</em>.
        </h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
        {immagini.galleria.map((src, i) => (
          <div
            key={src}
            className={`relative overflow-hidden rounded-2xl ${
              i === 0 || i === 4 ? "row-span-2 aspect-[3/4] md:aspect-[3/5]" : "aspect-square"
            }`}
          >
            <Image
              src={src}
              alt="Foto dell'allevamento Coccolami"
              fill
              sizes="(min-width: 768px) 33vw, 50vw"
              className="object-cover hover:scale-105 transition duration-700"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

function CTAContatto() {
  return (
    <section id="contatto" className="container-edge pb-28">
      <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[var(--color-caffe)] to-[var(--color-inchiostro)] grain px-6 md:px-12 py-16 md:py-20 text-[var(--color-crema)]">
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-[var(--color-tabacco)]/20 blur-3xl" />

        <div className="relative grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <span className="eyebrow text-[var(--color-tabacco)]">Scrivici</span>
            <h2 className="mt-3 text-4xl md:text-5xl">
              Vuoi un nostro <em className="italic text-[var(--color-tabacco)]">cucciolo</em>?
            </h2>
            <p className="mt-5 opacity-80 leading-relaxed">
              Lascia il tuo contatto. Ti scriviamo per parlare di te, della tua casa e
              capire quando potremmo avere un cucciolo per te.
            </p>

            <div className="mt-10 space-y-4 text-sm">
              <a
                href={allevamento.telefonoLink}
                className="flex items-center gap-3 hover:text-[var(--color-tabacco)] transition"
              >
                <PawIcon className="w-4 h-4 text-[var(--color-tabacco)]" />
                {allevamento.telefono}
              </a>
              <a
                href={allevamento.emailLink}
                className="flex items-center gap-3 hover:text-[var(--color-tabacco)] transition"
              >
                <PawIcon className="w-4 h-4 text-[var(--color-tabacco)]" />
                {allevamento.email}
              </a>
              <a
                href={allevamento.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 hover:text-[var(--color-tabacco)] transition"
              >
                <PawIcon className="w-4 h-4 text-[var(--color-tabacco)]" />
                WhatsApp
              </a>
            </div>
          </div>

          <div className="lg:col-span-7">
            <FormLead />
          </div>
        </div>
      </div>
    </section>
  );
}
