import Image from "next/image";
import { PawIcon } from "./PawIcon";

export function FotoGatto({
  foto,
  alt,
  sizes,
  invertito = false,
}: {
  foto: string | null;
  alt: string;
  sizes: string;
  invertito?: boolean;
}) {
  if (foto) {
    return (
      <Image
        src={foto}
        alt={alt}
        fill
        sizes={sizes}
        className="object-cover group-hover:scale-105 transition duration-700"
      />
    );
  }
  return (
    <div
      className={`absolute inset-0 grid place-items-center ${
        invertito
          ? "bg-gradient-to-br from-[var(--color-caffe)] to-[var(--color-inchiostro)] text-[var(--color-tabacco)]"
          : "bg-gradient-to-br from-[var(--color-sabbia)] to-[var(--color-tabacco)]/30 text-[var(--color-bronzo)]"
      } grain`}
    >
      <div className="text-center px-4">
        <PawIcon className="w-10 h-10 mx-auto opacity-70" />
        <p className="mt-3 text-xs tracking-[0.25em] uppercase opacity-80">
          Foto in arrivo
        </p>
      </div>
    </div>
  );
}
