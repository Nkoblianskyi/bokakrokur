import type { Book } from "./types"

export const books: Book[] = [
  {
    id: "1",
    title: "Sjálfstætt fólk",
    author: "Halldór Laxness",
    genre: "skáldsaga",
    coverImage: "/icelandic-novel-sjalfstaett-folk-book-cover.jpg",
    description:
      "Sögumeistaraverk um Bjarta að Sumarhúsum, sjálfstæðan íslenskan bónda sem berst við náttúruöflin og samfélagið. Nóbelsverðlaunasaga sem endurspeglar íslenska þjóðarsál.",
    publishedYear: 1934,
    pages: 756,
    isbn: "978-9979-3-0001-1",
    rating: 4.9,
    reviews: [
      {
        id: "r1",
        author: "Guðrún Jónsdóttir",
        rating: 5,
        comment: "Ótrúleg saga um íslenska baráttuanda. Halldór Laxness á sínu besta.",
        date: "2024-01-15",
      },
      {
        id: "r2",
        author: "Ólafur Sigurðsson",
        rating: 5,
        comment: "Meistararit sem sýnir íslenska náttúru og menningu. Skyldulestur.",
        date: "2024-02-20",
      },
    ],
  },
  {
    id: "2",
    title: "Atómstöðin",
    author: "Halldór Laxness",
    genre: "skáldsaga",
    coverImage: "/icelandic-novel-atomstod-book-cover.jpg",
    description:
      "Pólitísk og samfélagsleg gagnrýni á Ísland eftirstríðsáranna. Saga um menningarátök og áhrif vestræns kapítalisma á íslenskt samfélag.",
    publishedYear: 1948,
    pages: 324,
    isbn: "978-9979-3-0002-8",
    rating: 4.7,
    reviews: [
      {
        id: "r3",
        author: "Helga Björnsdóttir",
        rating: 5,
        comment: "Tímabær saga sem á enn við í dag. Frábær samfélagsgagnrýni.",
        date: "2024-01-10",
      },
    ],
  },
  {
    id: "3",
    title: "Brekkukotsannáll",
    author: "Halldór Laxness",
    genre: "skáldsaga",
    coverImage: "/icelandic-novel-brekkukotsannall-book-cover.jpg",
    description:
      "Hugleiðingar gamals manns um ævi sína í Reykjavík frá upphafi 20. aldar. Ljóðræn og hugfangandi saga um minningu og tíma.",
    publishedYear: 1957,
    pages: 456,
    isbn: "978-9979-3-0003-5",
    rating: 4.6,
    reviews: [
      {
        id: "r4",
        author: "Magnús Þorsteinsson",
        rating: 5,
        comment: "Fallegasta bók Laxness. Einstök lýsing á gömlu Reykjavík.",
        date: "2024-02-14",
      },
    ],
  },
  {
    id: "4",
    title: "Sagan af Grettir sterka",
    author: "Óþekktur höfundur",
    genre: "sagnfræði",
    coverImage: "/icelandic-saga-grettir-book-cover.jpg",
    description:
      "Ein frægasta Íslendingasagan um Gretti Ásmundarson, útlaga og hetju. Saga um styrk, einmanaleika og íslenskt þjóðerni.",
    publishedYear: 1320,
    pages: 286,
    isbn: "978-9979-3-0004-2",
    rating: 4.8,
    reviews: [
      {
        id: "r5",
        author: "Þóra Einarsdóttir",
        rating: 5,
        comment: "Klassísk íslensk saga sem allir ættu að lesa. Kraftmikil og spennandi.",
        date: "2024-01-25",
      },
    ],
  },
  {
    id: "5",
    title: "Ljóð og söngvar",
    author: "Jónas Hallgrímsson",
    genre: "ljóð",
    coverImage: "/icelandic-poetry-jonas-hallgrimsson-book-cover.jpg",
    description:
      "Ljóðasafn rómantíska skáldsins Jónasar Hallgrímssonar sem varð táknmynd íslenskrar þjóðernishyggju og fegurðar íslenskrar tungu.",
    publishedYear: 1847,
    pages: 198,
    isbn: "978-9979-3-0005-9",
    rating: 4.9,
    reviews: [
      {
        id: "r6",
        author: "Kristín Guðmundsdóttir",
        rating: 5,
        comment: "Ómissandi safn. Jónas var meistari íslenskrar tungu.",
        date: "2024-02-08",
      },
    ],
  },
  {
    id: "6",
    title: "Engill, pípuhattur og jarðarber",
    author: "Hallgrímur Helgason",
    genre: "skáldsaga",
    coverImage: "/icelandic-modern-novel-hallgrimur-helgason-book-co.jpg",
    description:
      "Nútíma íslensk skáldsaga sem fjallar um ævi aldraðrar konu í elliheimili. Blendur saman húmor og alvöru á einstakan hátt.",
    publishedYear: 2019,
    pages: 402,
    isbn: "978-9979-3-0006-6",
    rating: 4.5,
    reviews: [
      {
        id: "r7",
        author: "Sigríður Pálsdóttir",
        rating: 4,
        comment: "Snilldarlega skrifað. Hallgrímur á sínu besta með gáfuða sögusköpun.",
        date: "2024-03-05",
      },
    ],
  },
  {
    id: "7",
    title: "Konan við 1000°",
    author: "Hallgrímur Helgason",
    genre: "skáldsaga",
    coverImage: "/icelandic-novel-konan-vid-1000-book-cover.jpg",
    description:
      "Óvenjuleg saga um aldraða konu sem segir frá ævi sinni á 20. öldinni, frá heimsstyrjöldunum til fjármálahrunsins á Íslandi.",
    publishedYear: 2011,
    pages: 512,
    isbn: "978-9979-3-0007-3",
    rating: 4.4,
    reviews: [
      {
        id: "r8",
        author: "Jón Ólafsson",
        rating: 5,
        comment: "Einstök sögusköpun. Halldórur blendur sögu og skáldskap á meistarlegan hátt.",
        date: "2024-02-22",
      },
    ],
  },
  {
    id: "8",
    title: "Myrkráin",
    author: "Arnaldur Indriðason",
    genre: "glæpasaga",
    coverImage: "/icelandic-crime-novel-arnaldur-indridason-book-cov.jpg",
    description:
      "Spennandi glæpasaga um Erlend Sveinsson rannsóknalögreglumanninn. Dökkheimar Reykjavíkur og flóknar rannsóknir.",
    publishedYear: 2017,
    pages: 334,
    isbn: "978-9979-3-0008-0",
    rating: 4.6,
    reviews: [
      {
        id: "r9",
        author: "Anna Bergsdóttir",
        rating: 5,
        comment: "Arnaldur er meistari glæpasögunnar. Ekki hægt að leggja frá sér.",
        date: "2024-03-01",
      },
    ],
  },
  {
    id: "9",
    title: "Grafarþögn",
    author: "Arnaldur Indriðason",
    genre: "glæpasaga",
    coverImage: "/icelandic-crime-thriller-grafarthogn-book-cover.jpg",
    description:
      "Fyrsta bók um Erlend Sveinsson. Leyndarmál úr fortíðinni koma í ljós þegar beinagrind finnst í Grafarvogi.",
    publishedYear: 2001,
    pages: 298,
    isbn: "978-9979-3-0009-7",
    rating: 4.7,
    reviews: [
      {
        id: "r10",
        author: "Stefán Magnússon",
        rating: 5,
        comment: "Klassísk íslensk glæpasaga. Arnaldur skilur íslenskt samfélag betur en flestir.",
        date: "2024-01-20",
      },
    ],
  },
  {
    id: "10",
    title: "Íslendingabók og Landnámabók",
    author: "Ari fróði Þorgilsson",
    genre: "sagnfræði",
    coverImage: "/icelandic-history-islendingabok-book-cover.jpg",
    description:
      "Elstu heimildir um sögu Íslands og landnám víkinga. Grundvallarrit um upphaf íslenskrar þjóðar og sögu.",
    publishedYear: 1130,
    pages: 156,
    isbn: "978-9979-3-0010-3",
    rating: 4.8,
    reviews: [
      {
        id: "r11",
        author: "Björn Haraldsson",
        rating: 5,
        comment: "Ómetanlegur sögusannleiki. Allir Íslendingar ættu að þekkja þessa bók.",
        date: "2024-03-10",
      },
    ],
  },
  {
    id: "11",
    title: "Himnaríki og helvíti",
    author: "Jón Kalman Stefánsson",
    genre: "skáldsaga",
    coverImage: "/icelandic-novel-jon-kalman-stefansson-book-cover.jpg",
    description:
      "Ljóðræn og hugfangandi saga um ungan mann í sjávarþorpi við aldamótin 1900. Fyrsti hluti þríleiksins um Vesturfjörðu.",
    publishedYear: 2007,
    pages: 234,
    isbn: "978-9979-3-0011-0",
    rating: 4.7,
    reviews: [
      {
        id: "r12",
        author: "Guðný Þórðardóttir",
        rating: 5,
        comment: "Fallegasti íslenskur texti sem ég hef lesið. Ljóðrænt og dýrmætt.",
        date: "2024-02-05",
      },
    ],
  },
  {
    id: "12",
    title: "Sagan öll",
    author: "Snorri Sturluson",
    genre: "sagnfræði",
    coverImage: "/icelandic-saga-snorri-sturluson-edda-book-cover.jpg",
    description:
      "Heimskringla - saga Noregskonunga frá öndverðu til daga Snorra. Eitt mikilvægasta rit miðaldabókmennta.",
    publishedYear: 1230,
    pages: 678,
    isbn: "978-9979-3-0012-7",
    rating: 4.9,
    reviews: [
      {
        id: "r13",
        author: "Einar Guðjónsson",
        rating: 5,
        comment: "Meistaraverk Snorra. Ómetanleg heimild um norræna sögu og goðafræði.",
        date: "2024-01-18",
      },
    ],
  },
]

export const mockBooks = books

export const genres: { value: string; label: string }[] = [
  { value: "allar", label: "Allar bókmenntir" },
  { value: "skáldsaga", label: "Skáldsögur" },
  { value: "fræðibók", label: "Fræðibækur" },
  { value: "glæpasaga", label: "Glæpasögur" },
  { value: "ástarsaga", label: "Ástarsögur" },
  { value: "vísindaskáldskapur", label: "Vísindaskáldskapur" },
  { value: "fantasía", label: "Fantasía" },
  { value: "ævisaga", label: "Ævisögur" },
  { value: "sagnfræði", label: "Sagnfræði" },
  { value: "ljóð", label: "Ljóð" },
  { value: "spennusaga", label: "Spennusögur" },
]
