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
  experiencesMenu: {
    returningBody: string;
    tvm: string;
    tarot: string;
    reiki: string;
    kundalini: string;
  };
  home: {
    heroEyebrow: string;
    heroTitle1: string;
    heroTitle2: string;
    heroSub: string;
    heroCtaExplore: string;
    heroCtaBook: string;
    introEyebrow: string;
    introTitle: string;
    introP1: string;
    introQuestion: string;
    introP2: string;
    introP3a: string;
    introP3b: string;
    introP4: string;
    welcomeHome: string;
    pathwaysEyebrow: string;
    pathwaysTitle: string;
    pathwaysCta: string;
    pathways: Array<{
      eyebrow: string;
      title: string;
      offerings: string[];
      quote: string;
    }>;
    finalTitle: string;
    finalCta: string;
  };
};

const en: Dict = {
  nav: {
    home: "Home",
    about: "About",
    experiences: "Experiences",
    photography: "Photography",
    apothecary: "Apothecary",
    school: "School",
    journal: "Journal",
    contact: "Contact",
    bookCta: "Book an Experience",
    menu: "Menu",
    close: "Close",
    language: "Language",
  },
  experiencesMenu: {
    returningBody: "The Returning Body",
    tvm: "Triple Vagal Nerve Method",
    tarot: "Intuitive Tarot Readings",
    reiki: "Reiki",
    kundalini: "Kundalini Life Force Activation Ceremony",
  },
  home: {
    heroEyebrow: "Anima Arcana",
    heroTitle1: "Return to the body.",
    heroTitle2: "Listen to the soul.",
    heroSub: "Embodied healing, intuitive guidance and ritual experiences in communion with nature.",
    heroCtaExplore: "Explore the pathways",
    heroCtaBook: "Book an Experience",
    introEyebrow: "Welcome",
    introTitle: "Welcome to Anima Arcana",
    introP1: "A place where body, soul and nature remember they were never separate.",
    introQuestion:
      "We spend so much of our lives searching outside ourselves — for answers, healing, direction and belonging. Anima Arcana was born from a different question: what if everything we are looking for is already within us, simply waiting to be remembered?",
    introP2: "Here, healing is not a destination.",
    introP3a: "It is a return.",
    introP3b: "",
    introP4:
      "Through touch, symbolism, ritual, movement, plants and presence, every experience becomes an invitation to listen more deeply to the wisdom already living within you.",
    welcomeHome: "Welcome home.",
    pathwaysEyebrow: "Six pathways",
    pathwaysTitle: "Choose Your Path",
    pathwaysCta: "Learn more",
    pathways: [
      {
        eyebrow: "Pathway I",
        title: "Return to the Body",
        offerings: ["The Returning Body", "Triple Vagal Nerve Method"],
        quote: "Healing begins where the body feels safe enough to speak.",
      },
      {
        eyebrow: "Pathway II",
        title: "Listen to the Soul",
        offerings: ["Intuitive Tarot Readings"],
        quote: "Symbols become mirrors when we are ready to see.",
      },
      {
        eyebrow: "Pathway III",
        title: "Return to Stillness",
        offerings: ["Reiki"],
        quote: "Stillness creates the space in which energy can be heard.",
      },
      {
        eyebrow: "Pathway IV",
        title: "Awaken the Life Force",
        offerings: ["Kundalini Life Force Activation Ceremony"],
        quote: "The deepest transformations cannot be forced. They are invited.",
      },
      {
        eyebrow: "Pathway V",
        title: "Become Part of Nature",
        offerings: ["Body & Earth"],
        quote: "Where the landscape remembers your original shape.",
      },
      {
        eyebrow: "Pathway VI",
        title: "Carry the Journey Home",
        offerings: ["The Living Apothecary", "Arcana School"],
        quote: "Because transformation continues long after the session ends.",
      },
    ],
    finalTitle: "Are you ready to return to what lives within?",
    finalCta: "Book an Experience",
  },
};

const es: Dict = {
  nav: {
    home: "Inicio",
    about: "Sobre mí",
    experiences: "Experiencias",
    photography: "Fotografía",
    apothecary: "Botica",
    school: "Escuela",
    journal: "Diario",
    contact: "Contacto",
    bookCta: "Reserva una Experiencia",
    menu: "Menú",
    close: "Cerrar",
    language: "Idioma",
  },
  experiencesMenu: {
    returningBody: "El Cuerpo que Regresa",
    tvm: "Método del Triple Nervio Vago",
    tarot: "Lecturas Intuitivas de Tarot",
    reiki: "Reiki",
    kundalini: "Ceremonia de Activación de la Fuerza Vital Kundalini",
  },
  home: {
    heroEyebrow: "Anima Arcana",
    heroTitle1: "Regresa al cuerpo.",
    heroTitle2: "Escucha al alma.",
    heroSub: "Sanación encarnada, guía intuitiva y experiencias rituales en comunión con la naturaleza.",
    heroCtaExplore: "Explora los caminos",
    heroCtaBook: "Reserva una Experiencia",
    introEyebrow: "Bienvenidos",
    introTitle: "Bienvenidos a Anima Arcana",
    introP1: "Un lugar donde el cuerpo, el alma y la naturaleza recuerdan que nunca estuvieron separados.",
    introQuestion:
      "Pasamos gran parte de nuestra vida buscando fuera de nosotros: respuestas, sanación, dirección y un lugar al cual pertenecer. Anima Arcana nació de una pregunta diferente: ¿y si todo lo que estamos buscando ya viviera dentro de nosotros, esperando simplemente ser recordado?",
    introP2: "Aquí, sanar no es un destino.",
    introP3a: "Es un regreso.",
    introP3b: "",
    introP4:
      "A través del tacto, los símbolos, el ritual, el movimiento, las plantas y la presencia, cada experiencia se convierte en una invitación a escuchar más profundamente la sabiduría que ya vive en ti.",
    welcomeHome: "Bienvenido a casa.",
    pathwaysEyebrow: "Seis caminos",
    pathwaysTitle: "Elige tu Camino",
    pathwaysCta: "Descubre más",
    pathways: [
      {
        eyebrow: "Camino I",
        title: "Regresa al Cuerpo",
        offerings: ["El Cuerpo que Regresa", "Método del Triple Nervio Vago"],
        quote: "La sanación comienza allí donde el cuerpo se siente lo bastante seguro para hablar.",
      },
      {
        eyebrow: "Camino II",
        title: "Escucha al Alma",
        offerings: ["Lecturas Intuitivas de Tarot"],
        quote: "Los símbolos se vuelven espejos cuando estamos listos para ver.",
      },
      {
        eyebrow: "Camino III",
        title: "Regresa a la Quietud",
        offerings: ["Reiki"],
        quote: "La quietud crea el espacio donde la energía puede ser escuchada.",
      },
      {
        eyebrow: "Camino IV",
        title: "Despierta la Fuerza Vital",
        offerings: ["Ceremonia de Activación de la Fuerza Vital Kundalini"],
        quote: "Las transformaciones más profundas no pueden forzarse. Se invitan.",
      },
      {
        eyebrow: "Camino V",
        title: "Vuélvete Parte de la Naturaleza",
        offerings: ["Cuerpo y Tierra"],
        quote: "Donde el paisaje recuerda tu forma original.",
      },
      {
        eyebrow: "Camino VI",
        title: "Lleva el Viaje a Casa",
        offerings: ["La Botica Viviente", "Escuela Arcana"],
        quote: "Porque la transformación continúa mucho después de que termina la sesión.",
      },
    ],
    finalTitle: "¿Estás lista para regresar a lo que vive dentro de ti?",
    finalCta: "Reserva una Experiencia",
  },
};

const it: Dict = {
  nav: {
    home: "Home",
    about: "Chi sono",
    experiences: "Esperienze",
    photography: "Fotografia",
    apothecary: "Spezieria",
    school: "Scuola",
    journal: "Diario",
    contact: "Contatti",
    bookCta: "Prenota un'Esperienza",
    menu: "Menu",
    close: "Chiudi",
    language: "Lingua",
  },
  experiencesMenu: {
    returningBody: "Il Corpo che Ritorna",
    tvm: "Metodo del Triplo Nervo Vago",
    tarot: "Letture Intuitive dei Tarocchi",
    reiki: "Reiki",
    kundalini: "Cerimonia di Attivazione della Forza Vitale Kundalini",
  },
  home: {
    heroEyebrow: "Anima Arcana",
    heroTitle1: "Ritorna al corpo.",
    heroTitle2: "Ascolta l'anima.",
    heroSub: "Guarigione incarnata, guida intuitiva ed esperienze rituali in comunione con la natura.",
    heroCtaExplore: "Esplora i cammini",
    heroCtaBook: "Prenota un'Esperienza",
    introEyebrow: "Benvenuti",
    introTitle: "Benvenuti ad Anima Arcana",
    introP1: "Un luogo in cui il corpo, l'anima e la natura ricordano di non essere mai stati separati.",
    introQuestion:
      "Trascorriamo gran parte della nostra vita cercando fuori di noi: risposte, guarigione, direzione e un luogo a cui appartenere. Anima Arcana è nata da una domanda diversa: e se tutto ciò che stiamo cercando vivesse già dentro di noi, semplicemente in attesa di essere ricordato?",
    introP2: "Qui, la guarigione non è una destinazione.",
    introP3a: "È un ritorno.",
    introP3b: "",
    introP4:
      "Attraverso il tocco, i simboli, il rituale, il movimento, le piante e la presenza, ogni esperienza diventa un invito ad ascoltare più profondamente la saggezza che vive già dentro di te.",
    welcomeHome: "Bentornato a casa.",
    pathwaysEyebrow: "Sei cammini",
    pathwaysTitle: "Scegli il tuo Cammino",
    pathwaysCta: "Scopri di più",
    pathways: [
      {
        eyebrow: "Cammino I",
        title: "Ritorna al Corpo",
        offerings: ["Il Corpo che Ritorna", "Metodo del Triplo Nervo Vago"],
        quote: "La guarigione inizia dove il corpo si sente abbastanza al sicuro per parlare.",
      },
      {
        eyebrow: "Cammino II",
        title: "Ascolta l'Anima",
        offerings: ["Letture Intuitive dei Tarocchi"],
        quote: "I simboli diventano specchi quando siamo pronti a vedere.",
      },
      {
        eyebrow: "Cammino III",
        title: "Ritorna alla Quiete",
        offerings: ["Reiki"],
        quote: "La quiete crea lo spazio in cui l'energia può essere ascoltata.",
      },
      {
        eyebrow: "Cammino IV",
        title: "Risveglia la Forza Vitale",
        offerings: ["Cerimonia di Attivazione della Forza Vitale Kundalini"],
        quote: "Le trasformazioni più profonde non possono essere forzate. Vengono invitate.",
      },
      {
        eyebrow: "Cammino V",
        title: "Diventa Parte della Natura",
        offerings: ["Corpo e Terra"],
        quote: "Dove il paesaggio ricorda la tua forma originaria.",
      },
      {
        eyebrow: "Cammino VI",
        title: "Porta il Viaggio a Casa",
        offerings: ["La Spezieria Vivente", "Scuola Arcana"],
        quote: "Perché la trasformazione continua molto dopo la fine della sessione.",
      },
    ],
    finalTitle: "Sei pronto a ritornare a ciò che vive dentro di te?",
    finalCta: "Prenota un'Esperienza",
  },
};

export const TRANSLATIONS: Record<Locale, Dict> = { en, es, it };
