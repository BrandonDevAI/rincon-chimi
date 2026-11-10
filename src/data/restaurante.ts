// Información recopilada de fichas públicas (Tripadvisor / reseñas en Google).
// Verifica teléfono, horarios y precios con el restaurante antes de publicar.

export const restaurante = {
  nombre: "Rincón Chami",
  eslogan: "Cocina casera peruana",
  direccion: "Calle Esperanza 154, Miraflores, Lima",
  referencia: "A dos cuadras del Óvalo de Miraflores y del Parque Kennedy",
  telefono: "(01) 444-4511",
  telefonoHref: "tel:+5114444511",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Rinc%C3%B3n+Chami+Calle+Esperanza+154+Miraflores",
  mapsEmbed:
    "https://www.google.com/maps?q=Calle+Esperanza+154,+Miraflores,+Lima&output=embed",
  rating: 4.5,
  resenas: 305,
  anios: "40+",
  precio: "S/ 15 – 35",
};

export type Plato = {
  nombre: string;
  descripcion: string;
  tag?: string;
  foto?: string;
};

export const carta: Record<string, Plato[]> = {
  Criollos: [
    {
      nombre: "Ají de gallina",
      foto: "/fotos/aji-de-gallina.webp",
      descripcion:
        "Gallina deshilachada en crema de ají amarillo, pan y pecanas. Con arroz, papa y aceituna.",
      tag: "El favorito",
    },
    {
      nombre: "Lomo saltado",
      foto: "/fotos/lomo-saltado.webp",
      descripcion:
        "Lomo al wok con cebolla, tomate y ají, flambeado al sillao. Papas fritas y arroz blanco.",
      tag: "Clásico",
    },
    {
      nombre: "Tacu tacu",
      foto: "/fotos/tacu-tacu.webp",
      descripcion:
        "Frejoles y arroz dorados a la plancha, crocantes por fuera. Solo o a lo pobre.",
      tag: "De la casa",
    },
    {
      nombre: "Tallarines verdes con apanado",
      foto: "/fotos/tallarines-verdes.webp",
      descripcion:
        "Pesto criollo de albahaca y espinaca con queso fresco y un apanado bien dorado.",
    },
    {
      nombre: "Cabrito con frejoles",
      foto: "/fotos/cabrito.webp",
      descripcion:
        "Cabrito macerado en chicha de jora y loche, cocido lento. Frejoles y arroz.",
    },
  ],
  Entradas: [
    {
      nombre: "Papa a la huancaína",
      foto: "/fotos/papa-huancaina.webp",
      descripcion:
        "Papa amarilla bañada en crema de ají amarillo y queso fresco, huevo y aceituna.",
    },
    {
      nombre: "Causa limeña",
      foto: "/fotos/causa.webp",
      descripcion: "Masa de papa amarilla con limón y ají, rellena de pollo o atún.",
    },
    {
      nombre: "Ocopa",
      descripcion: "Papa sancochada con salsa de huacatay, maní y ají mirasol.",
    },
  ],
  "Postres y bebidas": [
    {
      nombre: "Mazamorra morada",
      foto: "/fotos/mazamorra.webp",
      descripcion: "Maíz morado, frutas y canela. Ideal en combinado con arroz con leche.",
    },
    {
      nombre: "Arroz con leche",
      descripcion: "Cremoso, con canela y clavo de olor, como en casa.",
    },
    {
      nombre: "Chicha morada",
      foto: "/fotos/chicha-morada.webp",
      descripcion: "Refresco de maíz morado con piña, membrillo y limón. Por jarra o vaso.",
    },
  ],
};

export const resenas = [
  {
    texto:
      "Comida casera, porciones generosas y atención rápida. Una tradición de Miraflores.",
    autor: "Comensal en Tripadvisor",
  },
  {
    texto:
      "El ají de gallina y el tacu tacu son imperdibles. Aquí comen los limeños de verdad.",
    autor: "Reseña de visitante",
  },
  {
    texto:
      "Más de 40 años en el mercado y sigue con el sabor criollo de siempre. Muy buena relación precio-calidad.",
    autor: "Cliente frecuente",
  },
];

// Fotos referenciales de Wikimedia Commons (licencias libres). Reemplázalas por fotos propias del local.
export const creditosFotos = [
  { plato: "Ají de gallina", autor: "ta@keshi kimi", licencia: "CC BY 2.0", url: "https://commons.wikimedia.org/wiki/File:Aji_de_gallina_10.jpg" },
  { plato: "Ají de gallina (2)", autor: "F Delventhal", licencia: "CC BY 2.0", url: "https://commons.wikimedia.org/wiki/File:Aji_de_Gallina_-_48836160152.jpg" },
  { plato: "Lomo saltado", autor: "Miguel Alan Córdova Silva", licencia: "CC BY-SA 4.0", url: "https://commons.wikimedia.org/wiki/File:Lomo_saltado_peruano.jpg" },
  { plato: "Tacu tacu", autor: "Suedehead", licencia: "CC BY-SA 2.0", url: "https://commons.wikimedia.org/wiki/File:Tacu_Tacu.jpg" },
  { plato: "Tallarines verdes", autor: "Miguel Alan Córdova Silva", licencia: "CC BY-SA 4.0", url: "https://commons.wikimedia.org/wiki/File:Tallarines_verdes.jpg" },
  { plato: "Seco de cabrito", autor: "H.dav.are", licencia: "CC BY-SA 4.0", url: "https://commons.wikimedia.org/wiki/File:Seco_de_cabrito_con_frejoles_en_Chiclayo,_Peru.jpg" },
  { plato: "Papa a la huancaína", autor: "AgainErick", licencia: "CC BY-SA 3.0", url: "https://commons.wikimedia.org/wiki/File:Cuisine_Per%C3%BA_Papa_a_la_Huanca%C3%ADna.jpg" },
  { plato: "Causa limeña", autor: "F Delventhal", licencia: "CC BY 2.0", url: "https://commons.wikimedia.org/wiki/File:Causa_a_la_Lime%C3%B1a_(48836160237).jpg" },
  { plato: "Mazamorra morada", autor: "Mover el Bigote", licencia: "CC BY 2.0", url: "https://commons.wikimedia.org/wiki/File:Lima_(Per%C3%BA)_-_Restaurante_El_Embrujo_-_Mazamorra_morada.jpg" },
  { plato: "Chicha morada", autor: "young shanahan", licencia: "CC BY 2.0", url: "https://commons.wikimedia.org/wiki/File:Chicha_Morada_2017.jpg" },
];
