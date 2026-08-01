import type { Locale } from "./translations";

import milkThistleImg from "@/assets/photos/IMG_4532.jpg.asset.json";
import hojaSantaImg from "@/assets/photos/IMG_4023.jpg.asset.json";
import sunblockImg from "@/assets/photos/IMG_4043.jpg.asset.json";
import chilcuagueImg from "@/assets/photos/IMG_4028.jpg.asset.json";
import ointmentImg from "@/assets/photos/GY8A0709.jpg.asset.json";
import coughSyrupPlaceholder from "@/assets/cough-syrup-placeholder.jpg";

export type ProductSection = { title: string; body?: string; items?: string[] };

export type Product = {
  slug: string;
  name: Record<Locale, string>;
  image: string;
  imageAlt: string;
  isPlaceholderImage?: boolean;
  size: string;
  price: string;
  duration?: string;
  intro: string[];
  notice?: string;
  sections: ProductSection[];
};

export const PRODUCTS: Product[] = [
  {
    slug: "milk-thistle",
    name: {
      en: "ARCANA Milk Thistle",
      es: "ARCANA Cardo Mariano",
      it: "ARCANA Cardo Mariano",
    },
    image: milkThistleImg.url,
    imageAlt: "ARCANA Milk Thistle tincture bottle resting among dry branches",
    size: "60 ml",
    price: "MXN 590",
    duration: "Approximately 3 months, depending on the final directions for use.",
    intro: [
      "Milk Thistle, Silybum marianum, is one of the most recognized plants in traditional European herbalism.",
      "Its seeds naturally contain a group of botanical compounds known collectively as silymarin. Milk Thistle has traditionally been used as a botanical ally, supportive of digestive wellbeing and of the body's normal liver functions.",
      "ARCANA Milk Thistle is handcrafted in small batches and designed to become part of a mindful daily herbal practice.",
    ],
    sections: [
      { title: "Botanical name", body: "Silybum marianum (Asteraceae). Seed of the milk thistle." },
      {
        title: "Traditional herbal context",
        body:
          "Long held within European folk herbalism as a supportive plant for the liver and digestion, milk thistle has accompanied seasonal cleansing rituals and everyday tonics for centuries. It is offered here as a traditional botanical companion, not as a medicine.",
      },
      {
        title: "Main botanical constituents",
        items: [
          "Silymarin complex, naturally occurring in the seed",
          "Flavonolignans and flavonoids",
          "Natural seed oils and plant sterols",
        ],
      },
      { title: "Ingredients", items: ["Organic milk thistle seed", "Grain alcohol", "Spring water"] },
      {
        title: "Preparation method",
        body:
          "Seeds are gently crushed and macerated in small batches, extracted slowly over several weeks, then pressed and decanted by hand in Oaxaca. Nothing is heated or rushed.",
      },
      {
        title: "Directions for use",
        body:
          "Editable — pending final review. Suggested placeholder: a small measure diluted in water, taken with meals. Final dosage guidance will be confirmed by a qualified herbalist.",
      },
      { title: "Approximate duration", body: "Approximately 3 months, depending on the final directions for use." },
      { title: "Storage", body: "Keep the bottle closed, away from direct sunlight and heat. No refrigeration needed." },
      {
        title: "Precautions",
        body:
          "Contains alcohol. Not intended for use during pregnancy or nursing, or by anyone with a known sensitivity to plants of the Asteraceae family, without professional guidance. This preparation is not intended to diagnose, treat, cure or prevent any disease. If you are under medical care, please consult your practitioner before use.",
      },
    ],
  },
  {
    slug: "hoja-santa",
    name: {
      en: "ARCANA Hoja Santa",
      es: "ARCANA Hoja Santa",
      it: "ARCANA Hoja Santa",
    },
    image: hojaSantaImg.url,
    imageAlt: "ARCANA Hoja Santa tincture held against the sun with a golden dropper",
    size: "30 ml",
    price: "MXN 390",
    duration: "Editable according to final directions for use.",
    intro: [
      "Hoja Santa, Piper auritum, is an aromatic plant deeply connected with Mexican culinary culture and traditional household herbal practices.",
      "Its broad, fragrant leaves grow naturally in humid environments and are treasured for their distinctive warm and slightly anise-like aroma.",
      "Traditionally, Hoja Santa has been appreciated as a botanical companion, supportive of digestive comfort, relaxation and general wellbeing.",
      "This preparation honours the cultural history and living plant knowledge surrounding one of Mexico's most beloved aromatic leaves.",
    ],
    sections: [
      { title: "Botanical name", body: "Piper auritum (Piperaceae). Known in Mexico as hoja santa or acuyo." },
      {
        title: "Cultural and botanical history",
        body:
          "A large-leaved understory plant of humid southern Mexico, hoja santa has flavoured tamales, moles and infusions for generations. Its presence in kitchens and household remedies alike places it at the meeting point of food, culture and plant knowledge.",
      },
      {
        title: "Traditional uses",
        items: [
          "Aromatic infusions taken after meals",
          "Household preparations for moments of rest",
          "Culinary wrapping and flavouring of foods",
        ],
      },
      { title: "Ingredients", items: ["Wild-harvested hoja santa leaf", "Grain alcohol", "Spring water"] },
      {
        title: "Preparation method",
        body:
          "Leaves are harvested fresh, wilted briefly and macerated in small batches, then pressed and bottled by hand.",
      },
      {
        title: "Directions for use",
        body:
          "Editable — internal-use directions are pending professional review. No dosage is suggested at this time.",
      },
      { title: "Storage", body: "Store closed, away from light and heat." },
      {
        title: "Precautions",
        body:
          "Hoja Santa naturally contains safrole. For this reason internal use should be occasional and modest, and this preparation is not suitable during pregnancy or nursing, for children, or for anyone with liver conditions. Contains alcohol. Not intended to diagnose, treat, cure or prevent any disease. Please consult a qualified practitioner before use.",
      },
    ],
  },
  {
    slug: "sunblock",
    name: {
      en: "ARCANA Sunblock",
      es: "Bloqueador Solar ARCANA",
      it: "Protezione Solare ARCANA",
    },
    image: sunblockImg.url,
    imageAlt: "ARCANA Sunblock jar resting on mossy coastal rock",
    size: "50 ml",
    price: "MXN 480",
    notice: "SPF level and reapplication interval are pending final product testing.",
    intro: [
      "ARCANA Sunblock is a rich botanical formula created for outdoor rituals and everyday skin care.",
      "Zinc oxide is blended with nourishing plant oils, shea butter, beeswax, vitamin E and niacinamide to create a creamy protective layer that helps care for skin exposed to the elements.",
      "Carrot seed, coconut and sweet almond oils contribute softness and nourishment, while shea butter and beeswax help maintain a comfortable barrier on the skin.",
    ],
    sections: [
      {
        title: "Full ingredients",
        items: [
          "Zinc oxide",
          "Vitamin B3 / niacinamide",
          "Vitamin E",
          "Carrot seed oil",
          "Coconut oil",
          "Sweet almond oil",
          "Beeswax",
          "Shea butter",
        ],
      },
      {
        title: "Texture and skin feel",
        body:
          "Dense and balm-like in the jar, softening between the fingers into a creamy, slightly matte layer. Warm ivory in colour, faintly sweet from the shea and beeswax.",
      },
      {
        title: "Intended external use",
        body:
          "For external use on skin exposed to sun and wind — face, shoulders, hands. Part of a wider approach to sun care that includes shade, cloth and timing.",
      },
      {
        title: "Application",
        body: "Placeholder — apply an even layer to clean, dry skin before going outdoors. Final application guidance pending testing.",
      },
      {
        title: "Reapplication",
        body: "Placeholder — reapplication interval is pending final product testing and will be confirmed here.",
      },
      {
        title: "Patch test",
        body: "Apply a small amount to the inner forearm and wait 24 hours before wider use.",
      },
      { title: "Storage", body: "Keep in a cool, shaded place. The balm softens in heat; this does not affect it." },
      {
        title: "Precautions",
        body:
          "External use only. Contains beeswax and sweet almond oil — avoid in case of known nut or bee-product sensitivity. Keep away from the eyes. No SPF value, broad-spectrum status or duration of protection is claimed; these are pending appropriate testing.",
      },
    ],
  },
  {
    slug: "chilcuague-spray",
    name: {
      en: "ARCANA Chilcuague Spray",
      es: "Spray de Chilcuague ARCANA",
      it: "Spray al Chilcuague ARCANA",
    },
    image: chilcuagueImg.url,
    imageAlt: "Tattooed hand misting the ARCANA Chilcuague spray against stone",
    size: "60 ml",
    price: "MXN 450",
    intro: [
      "Chilcuague, traditionally known as Raíz de Oro, is a remarkable Mexican root recognized for the intense tingling and salivating sensation it can produce in the mouth.",
      "Its cultural history reaches back through regional Mexican herbal traditions, where the root has been valued for its powerful sensory character and used in a variety of household botanical preparations, appreciated as supportive of everyday wellbeing.",
      "ARCANA Chilcuague Spray transforms this distinctive root into a practical small-batch preparation.",
    ],
    sections: [
      { title: "Botanical identity", body: "Heliopsis longipes, known in Mexico as chilcuague or raíz de oro. The root is the part used." },
      {
        title: "Cultural history",
        body:
          "Native to the Sierra Gorda, chilcuague has travelled through regional Mexican herbal traditions for generations, carried in small bottles and pouches and shared between households as a treasured root.",
      },
      {
        title: "Sensory qualities",
        body:
          "Pungent and electric — a bright tingling and immediate salivation, followed by a slow warming numbness. Earthy and resinous in aroma.",
      },
      { title: "Ingredients", items: ["Chilcuague root", "Grain alcohol", "Spring water"] },
      { title: "Preparation method", body: "Roots are cleaned, cut and macerated slowly in small batches, then filtered and bottled by hand." },
      {
        title: "Intended use",
        body: "Placeholder — oral or topical use, concentration and dosage remain editable pending final professional review.",
      },
      { title: "Directions for use", body: "Editable — no directions are published until professional review is complete." },
      { title: "Storage", body: "Store closed, away from light and heat." },
      {
        title: "Precautions",
        body:
          "Contains alcohol. Not suitable during pregnancy or nursing, or for children. Keep away from the eyes. This preparation is not an antibiotic, antifungal, antiparasitic or pharmaceutical pain treatment, and is not intended to diagnose, treat, cure or prevent any disease.",
      },
    ],
  },
  {
    slug: "herbal-cough-syrup",
    name: {
      en: "ARCANA Herbal Cough Syrup",
      es: "Jarabe Herbal para la Tos ARCANA",
      it: "Sciroppo Erboristico per la Tos ARCANA",
    },
    image: coughSyrupPlaceholder,
    imageAlt: "Placeholder card for ARCANA Herbal Cough Syrup — image coming soon",
    isPlaceholderImage: true,
    size: "60 ml",
    price: "MXN 420",
    notice: "Not suitable for children under one year because it contains honey.",
    intro: [
      "ARCANA Herbal Cough Syrup is inspired by traditional household preparations combining honey, warming roots and aromatic herbs.",
      "Honey creates a smooth and comforting base, while ginger, garlic, thyme, Osha and Hoja Santa bring together a rich botanical character associated with seasonal rituals and supportive of respiratory comfort.",
      "The formula is intended as a traditional-style herbal preparation rather than a substitute for medical care.",
    ],
    sections: [
      { title: "Ingredients", items: ["Honey", "Osha", "Ginger", "Garlic", "Thyme", "Hoja Santa"] },
      {
        title: "Botanical story",
        body:
          "Osha root from the highlands, ginger and garlic from the kitchen, thyme from the garden and hoja santa from the humid coast — six plants that have long shared a shelf during the cold turning of the year.",
      },
      {
        title: "Traditional context",
        body:
          "Honey-based herbal syrups belong to household traditions across many cultures, made in the season they are needed and kept close at hand as a comforting ritual.",
      },
      {
        title: "Preparation method",
        body: "Roots and herbs are infused slowly and combined with raw honey in small batches, without heating the honey.",
      },
      { title: "Directions for use", body: "Editable — final directions and dosage are pending professional review." },
      { title: "Refrigeration", body: "Keep refrigerated at all times. Use a clean spoon; never return unused syrup to the bottle." },
      { title: "Shelf life", body: "Editable and pending final stability testing." },
      {
        title: "Precautions",
        body:
          "Not suitable for children under one year because it contains honey. Not intended during pregnancy or nursing without professional guidance. This preparation is not intended to diagnose, treat, cure or prevent any disease, and is not a substitute for medical care.",
      },
    ],
  },
  {
    slug: "muscle-relief-ointment",
    name: {
      en: "ARCANA Muscle Relief Ointment",
      es: "Ungüento ARCANA para el Alivio Muscular",
      it: "Unguento ARCANA per il Sollievo Muscolare",
    },
    image: ointmentImg.url,
    imageAlt: "Hands holding the ARCANA ointment jar with its emblem lid",
    size: "Size to be confirmed",
    price: "MXN 460",
    intro: [
      "ARCANA Muscle Relief Ointment is a warming botanical preparation created for massage, physical recovery and moments of bodily rest.",
      "Coconut oil and beeswax form a rich, smooth base that glides comfortably over the skin. Nettle and marjoram have long been appreciated within traditional herbal practices and give the ointment its grounding botanical character.",
      "It can be incorporated into a gentle self-massage ritual after physical activity, work or long periods of tension.",
    ],
    sections: [
      { title: "Full ingredients", items: ["Coconut oil", "Nettle leaves", "Marjoram oil", "Beeswax"] },
      {
        title: "Botanical context",
        body:
          "Nettle and marjoram are two of the oldest companions of the working body in European and Mexican herbal practice alike — infused into oils and carried into the hands of those who massage.",
      },
      {
        title: "Texture and aroma",
        body: "Firm in the jar, melting to a slow, rich glide on warm skin. Green and softly herbaceous, with the sweetness of marjoram.",
      },
      {
        title: "External use",
        body: "For external use only. Take a small amount, warm it between the palms and work it into the skin over the muscle you are tending.",
      },
      {
        title: "Massage suggestions",
        body:
          "Long slow strokes along the length of the muscle, then small circles where the tissue holds. Shoulders and neck after long work; calves and feet after walking; lower back at the end of the day.",
      },
      { title: "Patch test", body: "Apply a small amount to the inner forearm and wait 24 hours before wider use." },
      { title: "Storage", body: "Keep in a cool, shaded place with the lid closed." },
      {
        title: "Precautions",
        body:
          "External use only. Do not apply to broken, irritated or highly sensitive skin. Contains beeswax. Avoid the eyes and mucous membranes. Not intended to treat or eliminate chronic pain, rheumatism, circulatory problems, injuries or menstrual conditions, and not a substitute for medical care.",
      },
    ],
  },
];
