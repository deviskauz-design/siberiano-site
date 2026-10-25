// Foto della galleria cuccioli. Colori letti dalle foto: in caso di dubbio fa fede il pedigree.

export type FotoGalleria = {
  foto: string;
  razza: string;
  colore: string;
  disponibile?: boolean;
};

const SIB = "Siberiano";
const NEVA = "Siberiano Neva Masquerade";

const f = (id: string, razza: string, colore: string): FotoGalleria => ({
  foto: `/img/sito/DEVISEDIT-${id}.jpg`,
  razza,
  colore,
});

const c = (id: string, razza: string, colore: string, disponibile = false): FotoGalleria => ({
  foto: `/img/sito/cuccioli/_DSC${id}.jpg`,
  razza,
  colore,
  disponibile,
});

export const ultimaCucciolata: FotoGalleria[] = [
  c("2836", "Siberiani", "Black tabby & white e Neva Masquerade"),
  c("3013", NEVA, "Blue point, maschio", true),
  c("2904", NEVA, "Blue point"),
  c("3026", NEVA, "Blue point, femmina"),
  c("3008", NEVA, "Blue point"),
  c("2923", NEVA, "Red point, maschio"),
  c("2983", SIB, "Black tabby & white, femmina"),
  c("2972", SIB, "Black tabby & white, maschio"),
  c("2980", SIB, "Black tabby & white"),
];

export const cucciolatePrecedenti: FotoGalleria[] = [
  f("6794", "Siberiani", "Blue e cream"),
  f("1918", SIB, "Red tabby & white"),
  f("1958", SIB, "Red tabby & white"),
  f("1969", SIB, "Black tabby"),
  f("2004", SIB, "Black tabby"),
  f("2028", SIB, "Black tabby & white"),
  f("2029", SIB, "Black tabby"),
  f("2048", SIB, "Black tabby & white"),
  f("2077", SIB, "Black tabby & white"),
  f("2089", SIB, "Black tabby & white"),
  f("1405", SIB, "Black tabby & white"),
  f("1431", SIB, "Black tabby & white"),
  f("1437", SIB, "Black tabby & white"),
  f("1444", SIB, "Black torbie & white"),
  f("1458", SIB, "Black tabby & white"),
  f("1475", SIB, "Black torbie & white"),
  f("1480", SIB, "Black tabby & white"),
  f("1499", SIB, "Black tabby & white"),
  f("1513", SIB, "Black tabby & white"),
  f("1546", SIB, "Black torbie & white"),
  f("1557", SIB, "Black torbie & white"),
  f("1599", SIB, "Black tabby"),
  f("1606", SIB, "Black tabby"),
  f("1635", SIB, "Black tabby"),
  f("1710", "Siberiani", "Black tabby"),
  f("1743", SIB, "Black tabby"),
  f("1769", SIB, "Black tabby & white"),
  f("1801", SIB, "Black tabby & white"),
  f("1820", SIB, "Black tabby & white"),
  f("1523", SIB, "Black tabby & white, Tina da cucciola"),
  f("1530", SIB, "Black tabby & white, Tina da cucciola"),
  f("0563", SIB, "Black tabby & white, Tina da cucciola"),
  f("0437", SIB, "Black tabby & white"),
  f("0488", "Siberiani", "Black"),
  f("0538", SIB, "Black"),
  f("0016", NEVA, "Seal point"),
  f("9631", NEVA, "Blue point"),
  f("9640", "Siberiani Neva Masquerade", "Blue point"),
  f("9645", "Siberiani Neva Masquerade", "Blue point"),
  f("9671", NEVA, "Seal point"),
  f("9697", NEVA, "Blue point"),
  f("9705", SIB, "Black tabby & white"),
  f("9726", NEVA, "Blue point"),
  f("9788", NEVA, "Blue point"),
  f("9836", NEVA, "Blue point"),
  f("9838", NEVA, "Blue point"),
  f("9895", SIB, "Black tabby & white"),
  f("9899", SIB, "Black tabby & white"),
  f("9903", SIB, "Black tabby & white"),
  f("9914", SIB, "Black tabby & white"),
  f("9929", SIB, "Black tabby & white"),
  f("9939", SIB, "Black tabby & white"),
  f("9944", SIB, "Black tabby & white"),
  f("9955", NEVA, "Seal point"),
  f("9980", NEVA, "Seal point"),
  f("9993", NEVA, "Seal point"),
  f("9997", NEVA, "Seal point"),
  f("6814", SIB, "Blue tabby"),
  f("6819", "Siberiani", "Cream e blue"),
  f("6828", SIB, "Black tabby"),
  f("6831", SIB, "Cream"),
  f("6837", SIB, "Blue"),
  f("6849", SIB, "Blue tabby"),
  f("6864", SIB, "Blue tabby"),
  f("6872", SIB, "Cream"),
  f("6882", SIB, "Blue"),
  f("6884", SIB, "Blue"),
];
