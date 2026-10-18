# Coccolami — Sito allevamento gatti siberiani

Reinterpretazione moderna di siberiano.ch. Next.js 15 (App Router), Tailwind v4, TypeScript.

## Stack
- **Next.js 15** App Router, React 19
- **Tailwind CSS v4** con design system custom (palette calda, grain texture)
- **next/font** per Cormorant Garamond + Inter
- TypeScript strict
- Zero backend: form contatti usa `mailto:`

## Pagine
- `/` — Home (hero, storia, razza, anteprima gatti, cucciolate, testimonianze, CTA)
- `/gatti` — Riproduttori (femmine + maschi)
- `/cuccioli` — Cucciolate disponibili, cosa è incluso, processo
- `/razza` — Approfondimento razza siberiana
- `/contatti` — Form + info + FAQ

## Avvio locale

```bash
pnpm install        # oppure npm install
pnpm dev            # http://localhost:3000
```

## Personalizzazione

Tutti i dati dell'allevamento (nome, contatti, gatti, cucciolate) sono in
[src/lib/info.ts](src/lib/info.ts). Modifica lì per propagare in tutto il sito.

Palette e tipografia in [src/app/globals.css](src/app/globals.css) sotto `@theme`.

## Note

- Le foto sono attualmente silhouette SVG decorative. Sostituire i placeholder con
  foto reali in `/public/img/` e aggiornare i path in `src/lib/info.ts`.
- Form contatti apre il client mail con `mailto:`. Per ricezione server-side
  integrare Resend / Nodemailer in una route handler.
- Per produzione: build statico `next build && next start`, deploy su Vercel.
