export type Locale = "en" | "es" | "it";

export const LOCALES: Locale[] = ["en", "es", "it"];
export const DEFAULT_LOCALE: Locale = "en";

export const LOCALE_NAMES: Record<Locale, string> = {
  en: "EN",
  es: "ES",
  it: "IT",
};

/**
 * Map of internal page keys → per-locale URL segments.
 * Only the homepage exists in ES/IT right now; other links fall back to
 * their English routes until localized pages are built.
 */
export const PAGE_PATHS: Record<
  "home" | "about" | "experiences" | "photography" | "apothecary" | "school" | "journal" | "contact",
  Record<Locale, string>
> = {
  home: { en: "/", es: "/es", it: "/it" },
  about: { en: "/about", es: "/about", it: "/about" },
  experiences: { en: "/experiences", es: "/experiences", it: "/experiences" },
  photography: { en: "/photography", es: "/photography", it: "/photography" },
  apothecary: { en: "/apothecary", es: "/apothecary", it: "/apothecary" },
  school: { en: "/school", es: "/school", it: "/school" },
  journal: { en: "/journal", es: "/journal", it: "/journal" },
  contact: { en: "/contact", es: "/contact", it: "/contact" },
};

type Dict = {
  nav: {
    home: string;
    about: string;
    experiences: string;
    photography: string;
    apothecary: string;
    school: string;
    journal: string;
    contact: string;
    bookCta: string;
    menu: string;
    close: string;
    language: string;
  };
  home: {
    heroEyebrow: string;
    heroTitle1: string;
    heroTitle2: string;
    heroSub: string;
    introEyebrow: string;
    introTitle: string;
    introP1: string;
    introQuestion: string;
    introP2: string;
    introP3a: string;
    introP4: string;
    offersEyebrow: string;
    offersTitle: string;
    offersP1: string;
    offersP2: string;
    welcomeHome: string;
    pathwaysEyebrow: string;
    pathwaysTitle: string;
    pathways: Array<{
      eyebrow: string;
      title: string;
      description: string;
      cta: string;
    }>;
    finalTitle: string;
  };
};


const en: Dict = {
  nav: {
    home: "Home",
    about: "About",
    experiences: "Experiences",
    photography: "Photography",
    apothecary: "The Living Apothecary",
    school: "Arcana School",
    journal: "Journal",
    contact: "Contact",
    bookCta: "Book an Experience",
    menu: "Menu",
    close: "Close",
    language: "Language",
  },
  home: {
    heroEyebrow: "Anima Arcana",
    heroTitle1: "Return to the body.",
    heroTitle2: "Listen to the soul.",
    heroSub: "Embodied healing, intuitive guidance and ritual experiences in communion with nature.",
    introEyebrow: "Welcome",
    introTitle: "Welcome to Anima Arcana",
    introP1: "A place where body, soul and nature remember they were never separate.",
    introQuestion:
      "We spend so much of our lives searching outside ourselves — for answers, healing, direction and belonging. Anima Arcana was born from a different question: what if everything we are looking for is already within us, simply waiting to be remembered?",
    introP2: "Here, healing is not a destination.",
    introP3a: "It is a return.",
    introP4:
      "Through touch, symbolism, ritual, movement, plants and presence, every experience becomes an invitation to listen more deeply to the wisdom already living within you.",
    offersEyebrow: "Anima Arcana offers",
    offersTitle: "What lives within these pathways",
    offersP1:
      "Embodied healing, energy work, intuitive guidance, ritual photography, botanical preparations and tarot education.",
    offersP2:
      "Through bodywork, nervous-system practices, Reiki, Kundalini Life Force Activation, tarot, photography and plant wisdom, every path offers a different way to return to yourself.",
    welcomeHome: "Welcome home.",
    pathwaysEyebrow: "Choose your path",
    pathwaysTitle: "Four Doorways",
    pathways: [
      {
        eyebrow: "Pathway I",
        title: "Experiences",
        description:
          "Hands-on therapies, nervous-system practices, energy work and intuitive guidance to reconnect body, mind and soul.",
        cta: "Explore Experiences",
      },
      {
        eyebrow: "Pathway II",
        title: "Photography",
        description:
          "Artistic expression where body and landscape become one with nature.",
        cta: "Explore Photography",
      },
      {
        eyebrow: "Pathway III",
        title: "The Living Apothecary",
        description:
          "Handcrafted botanical preparations inspired by traditional plant wisdom and the healing intelligence of nature.",
        cta: "Visit the Apothecary",
      },
      {
        eyebrow: "Pathway IV",
        title: "Arcana School",
        description:
          "Learn timeless practices that remain with you long after the experience has ended.",
        cta: "Enter the School",
      },
    ],
    finalTitle: "Are you ready to return to what lives within?",
  },
};


const es: Dict = {
  nav: {
    home: "Inicio",
    about: "Sobre mí",
    experiences: "Experiencias",
    photography: "Fotografía",
    apothecary: "La Botica Viviente",
    school: "Escuela Arcana",
    journal: "Diario",
    contact: "Contacto",
    bookCta: "Reserva una Experiencia",
    menu: "Menú",
    close: "Cerrar",
    language: "Idioma",
  },
  home: {
    heroEyebrow: "Anima Arcana",
    heroTitle1: "Regresa al cuerpo.",
    heroTitle2: "Escucha al alma.",
    heroSub: "Sanación encarnada, guía intuitiva y experiencias rituales en comunión con la naturaleza.",
    introEyebrow: "Bienvenidos",
    introTitle: "Bienvenidos a Anima Arcana",
    introP1: "Un lugar donde el cuerpo, el alma y la naturaleza recuerdan que nunca estuvieron separados.",
    introQuestion:
      "Pasamos gran parte de nuestra vida buscando fuera de nosotros: respuestas, sanación, dirección y un lugar al cual pertenecer. Anima Arcana nació de una pregunta diferente: ¿y si todo lo que estamos buscando ya viviera dentro de nosotros, esperando simplemente ser recordado?",
    introP2: "Aquí, sanar no es un destino.",
    introP3a: "Es un regreso.",
    introP4:
      "A través del tacto, los símbolos, el ritual, el movimiento, las plantas y la presencia, cada experiencia se convierte en una invitación a escuchar más profundamente la sabiduría que ya vive en ti.",
    offersEyebrow: "Anima Arcana ofrece",
    offersTitle: "Lo que vive dentro de estos caminos",
    offersP1:
      "Sanación corporal, trabajo energético, guía intuitiva, fotografía ritual, preparados botánicos y formación en tarot.",
    offersP2:
      "A través del trabajo corporal, las prácticas para el sistema nervioso, Reiki, la Activación de la Fuerza Vital Kundalini, el tarot, la fotografía y la sabiduría de las plantas, cada camino ofrece una manera diferente de regresar a ti.",
    welcomeHome: "Bienvenido a casa.",
    pathwaysEyebrow: "Elige tu camino",
    pathwaysTitle: "Cuatro Umbrales",
    pathways: [
      {
        eyebrow: "Camino I",
        title: "Experiencias",
        description:
          "Terapias manuales, prácticas para el sistema nervioso, trabajo energético y guía intuitiva para reconectar cuerpo, mente y alma.",
        cta: "Explorar Experiencias",
      },
      {
        eyebrow: "Camino II",
        title: "Fotografía",
        description:
          "Expresión artística donde el cuerpo y el paisaje se vuelven uno con la naturaleza.",
        cta: "Explorar Fotografía",
      },
      {
        eyebrow: "Camino III",
        title: "La Botica Viviente",
        description:
          "Preparados botánicos hechos a mano, inspirados en la sabiduría tradicional de las plantas y en la inteligencia sanadora de la naturaleza.",
        cta: "Visitar la Botica",
      },
      {
        eyebrow: "Camino IV",
        title: "Escuela Arcana",
        description:
          "Aprende prácticas atemporales que permanecen contigo mucho después de que termina la experiencia.",
        cta: "Entrar a la Escuela",
      },
    ],
    finalTitle: "¿Estás lista para regresar a lo que vive dentro de ti?",
  },
};


const it: Dict = {
  nav: {
    home: "Home",
    about: "Chi sono",
    experiences: "Esperienze",
    photography: "Fotografia",
    apothecary: "La Spezieria Vivente",
    school: "Scuola Arcana",
    journal: "Diario",
    contact: "Contatti",
    bookCta: "Prenota un'Esperienza",
    menu: "Menu",
    close: "Chiudi",
    language: "Lingua",
  },
  home: {
    heroEyebrow: "Anima Arcana",
    heroTitle1: "Ritorna al corpo.",
    heroTitle2: "Ascolta l'anima.",
    heroSub: "Guarigione incarnata, guida intuitiva ed esperienze rituali in comunione con la natura.",
    introEyebrow: "Benvenuti",
    introTitle: "Benvenuti ad Anima Arcana",
    introP1: "Un luogo in cui il corpo, l'anima e la natura ricordano di non essere mai stati separati.",
    introQuestion:
      "Trascorriamo gran parte della nostra vita cercando fuori di noi: risposte, guarigione, direzione e un luogo a cui appartenere. Anima Arcana è nata da una domanda diversa: e se tutto ciò che stiamo cercando vivesse già dentro di noi, semplicemente in attesa di essere ricordato?",
    introP2: "Qui, la guarigione non è una destinazione.",
    introP3a: "È un ritorno.",
    introP4:
      "Attraverso il tocco, i simboli, il rituale, il movimento, le piante e la presenza, ogni esperienza diventa un invito ad ascoltare più profondamente la saggezza che vive già dentro di te.",
    offersEyebrow: "Anima Arcana offre",
    offersTitle: "Ciò che vive dentro questi cammini",
    offersP1:
      "Pratiche corporee, lavoro energetico, guida intuitiva, fotografia rituale, preparazioni botaniche e formazione nei tarocchi.",
    offersP2:
      "Attraverso il lavoro sul corpo, le pratiche dedicate al sistema nervoso, il Reiki, l'Attivazione della Forza Vitale Kundalini, i tarocchi, la fotografia e la saggezza delle piante, ogni cammino offre un modo diverso di ritornare a te.",
    welcomeHome: "Bentornato a casa.",
    pathwaysEyebrow: "Scegli il tuo cammino",
    pathwaysTitle: "Quattro Soglie",
    pathways: [
      {
        eyebrow: "Cammino I",
        title: "Esperienze",
        description:
          "Terapie manuali, pratiche dedicate al sistema nervoso, lavoro energetico e guida intuitiva per riconnettere corpo, mente e anima.",
        cta: "Esplora le Esperienze",
      },
      {
        eyebrow: "Cammino II",
        title: "Fotografia",
        description:
          "Espressione artistica in cui il corpo e il paesaggio diventano un tutt'uno con la natura.",
        cta: "Esplora la Fotografia",
      },
      {
        eyebrow: "Cammino III",
        title: "La Spezieria Vivente",
        description:
          "Preparazioni botaniche fatte a mano, ispirate alla saggezza tradizionale delle piante e all'intelligenza guaritrice della natura.",
        cta: "Visita la Spezieria",
      },
      {
        eyebrow: "Cammino IV",
        title: "Scuola Arcana",
        description:
          "Apprendi pratiche senza tempo che restano con te molto dopo la fine dell'esperienza.",
        cta: "Entra nella Scuola",
      },
    ],
    finalTitle: "Sei pronto a ritornare a ciò che vive dentro di te?",
  },
};


export const TRANSLATIONS: Record<Locale, Dict> = { en, es, it };
