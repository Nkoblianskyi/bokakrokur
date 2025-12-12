import type { Event } from "./types"

export const events: Event[] = [
  {
    id: "1",
    title: "Bókaklúbbur: Sjálfstætt fólk",
    description:
      "Vertu með okkur í mánaðarlega umræðu um meistaraverk Halldórs Laxness. Við skoðum þemu sjálfstæðis og íslenskrar náttúru.",
    date: "2024-02-15",
    time: "18:00",
    location: "Aðalsalur",
    image: "/cozy-icelandic-book-club-reading-room.jpg",
    capacity: 25,
    registered: 18,
    category: "bókaklúbbur",
  },
  {
    id: "2",
    title: "Ritunarnámskeið: Skapandi skrif",
    description:
      "Lærðu aðferðir við sögusköpun og þróaðu þína eigin rödd sem rithöfundur. Hentar bæði byrjendum og reyndum rithöfundum.",
    date: "2024-02-20",
    time: "16:00",
    location: "Námskeiðsherbergi",
    image: "/creative-writing-workshop-iceland.jpg",
    capacity: 15,
    registered: 12,
    category: "námskeið",
  },
  {
    id: "3",
    title: "Kynning: Nýir íslenskir höfundar",
    description: "Kynnstu nýjum röddum í íslenskum bókmenntum. Spurningatími og bókaundirritun með höfundum.",
    date: "2024-02-25",
    time: "19:00",
    location: "Hátíðasalur",
    image: "/icelandic-author-book-presentation.jpg",
    capacity: 50,
    registered: 35,
    category: "kynning",
  },
  {
    id: "4",
    title: "Ljóðalestur við sólsetur",
    description:
      "Náinn kvöld með ljóðlestri frá klassískum og nútíma íslenskum skáldum. Afslappaðrými með kaffi og tei.",
    date: "2024-03-01",
    time: "17:30",
    location: "Svalir",
    image: "/sunset-poetry-reading-iceland-terrace.jpg",
    capacity: 30,
    registered: 22,
    category: "lestur",
  },
]

export const mockEvents = events

export const eventCategories = [
  { value: "allt", label: "Allir viðburðir" },
  { value: "lestur", label: "Lestrar" },
  { value: "námskeið", label: "Námskeið" },
  { value: "kynning", label: "Kynningar" },
  { value: "bókaklúbbur", label: "Bókaklúbbar" },
]
