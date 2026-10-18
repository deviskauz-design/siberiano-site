// Dati centralizzati allevamento — modificare qui per propagare ovunque.

export const allevamento = {
  nome: "Coccolami",
  payoff: "Allevamento famigliare di gatti siberiani",
  citta: "Breganzona",
  cap: "6932",
  paese: "Svizzera",
  cantone: "Ticino",
  telefono: "+41 76 392 04 72",
  telefonoLink: "tel:+41763920472",
  email: "mycolibri@hotmail.com",
  emailLink: "mailto:mycolibri@hotmail.com",
  whatsapp: "https://wa.me/41763920472",
  annoFondazione: 2023,
} as const;

// Copie ridimensionate in /public/img/sito (generate da public/img/archivio, non tracciato).
const F = (id: string) => `/img/sito/DEVISEDIT-${id}.jpg`;

export const immagini = {
  hero: F("6291"), // Jolie sul balcone al tramonto con vista montagne
  storia: F("9939"), // adulto + cucciolo che giocano col nastro rosso
  galleria: [
    F("1437"), // cucciolone balcone
    F("0437"), // cucciolo con farfalla
    F("9939"), // mamma + cucciolo nastro rosso
    F("0563"), // cucciolo
    F("6828"), // cucciolo balcone coda ritta
    F("1530"), // Tina da cucciola
    F("6849"), // cucciolo
    F("1444"), // cucciolo
  ],
} as const;

export type Gatto = {
  nome: string;
  stato: "attiva" | "attivo" | "sterilizzata" | "sterilizzato";
  foto: string | null; // null = foto non ancora identificata
  nota?: string;
};

export type Cucciolo = {
  id: string;
  descrizione: string;
  sesso: "maschio" | "femmina";
  foto: string;
  fotoExtra?: string[];
};

export const cucciolataAttuale = {
  presente: true,
  titolo: "Cuccioli disponibili",
  fotoGruppo: "/img/sito/cuccioli/_DSC2836.jpg",
  cuccioli: [
    {
      id: "f-macchia-bianca",
      descrizione: "Black tabby & white, macchia bianca sul naso",
      sesso: "femmina",
      foto: "/img/sito/cuccioli/_DSC2983.jpg",
    },
    {
      id: "m-tabby",
      descrizione: "Black tabby & white",
      sesso: "maschio",
      foto: "/img/sito/cuccioli/_DSC2972.jpg",
      fotoExtra: ["/img/sito/cuccioli/_DSC2980.jpg"],
    },
    {
      id: "m-arancione",
      descrizione: "Neva Masquerade red point",
      sesso: "maschio",
      foto: "/img/sito/cuccioli/_DSC2923.jpg",
    },
    {
      id: "m-grigio",
      descrizione: "Neva Masquerade blue point",
      sesso: "maschio",
      foto: "/img/sito/cuccioli/_DSC3013.jpg",
      fotoExtra: ["/img/sito/cuccioli/_DSC2904.jpg"],
    },
    {
      id: "f-grigio",
      descrizione: "Neva Masquerade blue point",
      sesso: "femmina",
      foto: "/img/sito/cuccioli/_DSC3026.jpg",
      fotoExtra: ["/img/sito/cuccioli/_DSC3008.jpg"],
    },
  ] satisfies Cucciolo[],
} as const;

export const gatti: { femmine: Gatto[]; maschi: Gatto[] } = {
  femmine: [
    {
      nome: "Jolie",
      stato: "sterilizzata",
      foto: F("6262"), // ritratto frontale balcone, sguardo dritto
    },
    {
      nome: "Tina",
      stato: "sterilizzata",
      foto: F("1670"), // balcone con vista montagne, molto bella
    },
    {
      nome: "Mia",
      stato: "attiva",
      foto: null,
    },
    {
      nome: "Stella",
      stato: "attiva",
      foto: null,
    },
  ],
  maschi: [
    {
      nome: "Michy",
      stato: "attivo",
      nota: "Disponibile anche per la monta esterna.",
      foto: F("1861"),
    },
  ],
};
