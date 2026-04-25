export const content = {
  hero: {
    headline: "Pirmieji smash burgeriai",
    headlineAccent: "Vilniuje.",
    sub: "Sausai brandinta lietuviška Black Angus jautiena. Vietoje keptos bandelės. Halės turgavietėje nuo 2021.",
    primaryCta: {
      label: "UŽSISAKYTI",
      href: "https://food.bolt.eu/lt-lt/9-vilnius/p/169058-hales-mesainis-pylimo-g/",
    },
  },
  story: {
    body: "Brandinta lietuviška jautiena. Bandelės keptos vietoje kiekvieną rytą. Daržovės iš gretimų prekystalių. Viskas, ko reikia, kad smash burgeris būtų tikras smash burgeris.",
    photos: ["/images/story-1.jpg"],
  },
  signature: {
    name: "Halės Mėsainis",
    photo: "/images/signature-burger.jpg",
    ingredients: [
      "Vietoje keptos bandelės",
      "Sausai brandinta lietuviška Black Angus jautiena",
      "Lietuviškas čederis",
      "Svilintų česnakų majonezas",
      "Traški salota, pomidoras, svogūnas",
      "Šoninės uogienė",
    ],
    price: "16,00 €",
  },
  spicy: {
    headline: "Aštru? Mes turim.",
    sub: "Rūkytų chalapų pipirai. Lietuviška Black Angus jautiena. Be šposų.",
    cta: { label: "PAMATYTI MENIU", href: "#meniu" },
  },
  menu: {
    items: [
      { name: "Halės Mėsainis su bulvytėmis", description: "200g jautienos kepsnys, sausai brandinta lietuviška Black Angus jautiena, vietoje keptos bandelės, lietuviškas čederis, svilintų česnakų majonezas, traški salota, pomidoras, svogūnas, šoninės uogienė", price: "16,00 €" },
      { name: "Klasikinis Mėsainis su bulvytėmis", description: "Klasika — jautiena, čederis, salotos, pomidoras, svogūnas", price: "14,00 €" },
      { name: "Vištienos Mėsainis su bulvytėmis", description: "Vištienos kepsnys", price: "13,00 €" },
      { name: "Rūkytų Chalapų Mėsainis su bulvytėmis", description: "Aštrus — su rūkytais chalapų pipirais", price: "14,00 €" },
      { name: "Vegetariškas Mėsainis su bulvytėmis", description: "Vegetariškas variantas", price: "12,00 €" },
      { name: "Bulvytės Fri", price: "4,00 €" },
      { name: "Saldžiosios bulvytės", price: "5,00 €" },
    ] as Array<{ name: string; description?: string; price: string }>,
  },
  findUs: {
    address: "Pylimo g. 58, Halės turgavietė, Vilnius",
    stallNote: "",
    hours: [
      { day: "Pir", hours: "Uždaryta" },
      { day: "Ant", hours: "12:00 – 16:00" },
      { day: "Tre", hours: "12:00 – 22:00" },
      { day: "Ket", hours: "12:00 – 22:00" },
      { day: "Pen", hours: "12:00 – 23:00" },
      { day: "Šeš", hours: "11:00 – 23:00" },
      { day: "Sek", hours: "11:00 – 15:00" },
    ],
    phone: "+370 677 91 895",
    mapsUrl: "https://maps.google.com/?q=Pylimo+g.+58+Vilnius+Halės+turgavietė",
  },
  social: {
    fb: "https://www.facebook.com/halesmesainis/",
    ig: "https://www.instagram.com/halesmesainis/",
  },
} as const;
