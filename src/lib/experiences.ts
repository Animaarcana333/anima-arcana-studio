import returningBodyImg from "@/assets/returning-body.jpg";
import kundaliniImg from "@/assets/kundalini.jpg";
import heroTarotImg from "@/assets/hero-tarot.jpg";
import bodyEarthImg from "@/assets/body-earth.jpg";
import { CALENDLY_URLS } from "@/components/CalendlyBooking";

export type Experience = {
  slug: string;
  name: string;
  short: string;
  poeticSubtitle: string;
  duration: string;
  price: string;
  location: string;
  format: string;
  image: string;
  calendly: string;
  intro: string;
  sections: { title: string; body: string }[];
  supports: string[];
  faq: { q: string; a: string }[];
  safety: string;
};

export const EXPERIENCES: Experience[] = [
  {
    slug: "returning-body",
    name: "The Returning Body",
    short: "Myofascial ritual massage, flowing touch and intuitive Reiki.",
    poeticSubtitle: "A slow return to the language of the body.",
    duration: "90 – 120 minutes",
    price: "From MXN 2,400",
    location: "In person · Oaxaca Coast",
    format: "In person",
    image: returningBodyImg,
    calendly: CALENDLY_URLS.returningBody,
    intro:
      "An immersive, evolving bodywork experience that weaves the study of fascia with long, steady and continuous strokes inspired by Lomi Lomi. The rhythm of the touch invites the body to soften, to remember itself, and to move toward a calmer internal state.",
    sections: [
      {
        title: "Philosophy",
        body:
          "There is no fixed sequence. Each session listens to the body it meets — its history, its holding, its breath — and responds in real time. Virginia works intuitively with energy, and Reiki may naturally weave through the touch when the moment invites it.",
      },
      {
        title: "The language of fascia",
        body:
          "Fascia is the connective web that holds us together — sensitive, responsive, and deeply linked to the nervous system. Working slowly with fascia can invite the body to release patterns of holding that have grown quiet under years of movement and stillness.",
      },
      {
        title: "The importance of long, steady strokes",
        body:
          "Long, continuous strokes borrow their grammar from Lomi Lomi — a rhythm that helps the thinking mind step aside so the body can become the one that speaks and listens.",
      },
      {
        title: "Reiki and intuitive energetic work",
        body:
          "Reiki may be integrated naturally into the session, hands-on or hands-off, as an offering of stillness alongside the movement of touch.",
      },
      {
        title: "What happens during the session",
        body:
          "We begin with a quiet conversation and a simple grounding ritual. The bodywork itself unfolds on a warm table with natural oils. Time is unhurried. You are welcomed back gently, with water and space to arrive again.",
      },
      {
        title: "Preparation & afterward",
        body:
          "Arrive hydrated and lightly nourished. Afterward, allow yourself softness — walking, water, rest — rather than returning immediately to noise.",
      },
    ],
    supports: [
      "May support relaxation and grounding",
      "May encourage body awareness",
      "May help the nervous system move toward rest",
      "Invites presence and inner listening",
    ],
    faq: [
      { q: "Is this a conventional massage?", a: "No. It is an intuitive, ritual experience that draws on bodywork traditions without following a fixed protocol." },
      { q: "What should I wear?", a: "You will be draped throughout in warm linen. Wear what feels comfortable to arrive and leave in." },
      { q: "How often can I return?", a: "Some people come once, some monthly, some in a series. There is no right cadence." },
    ],
    safety:
      "This is a wellness and self-awareness experience. It does not diagnose, treat or cure medical conditions. Please share any relevant health information at booking.",
  },
  {
    slug: "reiki",
    name: "Reiki",
    short: "Energetic presence, rest and reconnection.",
    poeticSubtitle: "A space for stillness, inner listening and energetic reconnection.",
    duration: "60 – 75 minutes",
    price: "From MXN 1,600",
    location: "In person or at a distance",
    format: "Online or in person",
    image: kundaliniImg,
    calendly: CALENDLY_URLS.reiki,
    intro:
      "Reiki is offered as a quiet energetic practice. It can be received hands-on or hands-off, in person, at a distance, integrated into bodywork, or woven into a tarot journey.",
    sections: [
      { title: "What Reiki is", body: "A gentle practice of energetic accompaniment. There is nothing to do — only to arrive and rest." },
      { title: "Virginia's approach", body: "Unhurried, attentive, without ceremony for its own sake. The room is quiet. The intention is presence." },
      { title: "What happens during a session", body: "You remain fully clothed. You may lie down or sit. Hands are placed lightly, or held just above the body, following what the moment asks." },
      { title: "Reiki at a distance", body: "For those who cannot travel, distance sessions are offered by appointment with a shared window of time and a preparatory note." },
      { title: "Tarot and Reiki option", body: "A combined session weaves an intuitive tarot reading with a closing Reiki rest — reflection followed by stillness." },
    ],
    supports: [
      "A space for stillness",
      "May support a sense of grounding",
      "May invite the nervous system toward rest",
      "An accompaniment during transition or unrest",
    ],
    faq: [
      { q: "Do I need to believe in energy?", a: "No. Come as you are, curious or skeptical." },
      { q: "Can Reiki replace medical care?", a: "No. Reiki is an accompaniment, not a treatment." },
    ],
    safety: "Reiki does not diagnose or treat medical or psychological conditions.",
  },
  {
    slug: "tvm",
    name: "Triple Vagal Nerve Method",
    short: "Embodied nervous-system practice with breath, sound and gentle touch.",
    poeticSubtitle: "Meeting the nervous system with breath, sound and presence.",
    duration: "75 – 90 minutes",
    price: "From MXN 2,000",
    location: "In person · Oaxaca Coast",
    format: "In person",
    image: returningBodyImg,
    calendly: CALENDLY_URLS.tvm,
    intro:
      "The Triple Vagal Nerve Method is an embodied and experiential practice centered on nervous-system awareness, breath, sound, gentle touch, movement and presence. It is designed as a wellness and self-awareness experience, not a medical treatment.",
    sections: [
      { title: "What TVM means", body: "An integrative approach that brings attention to the vagal pathways through gentle, layered practices." },
      { title: "The role of breath", body: "Breath is the doorway. Slow, unforced breath invites the body to remember its own rhythm." },
      { title: "The role of sound", body: "Voiced tones and quiet vocalization travel through the throat, chest and belly — a subtle massage from within." },
      { title: "Movement and gentle touch", body: "Light contact and small movements accompany the practice, always at the pace of the person receiving." },
      { title: "Who it may be suitable for", body: "Anyone curious about slowing down and listening to the body. Not appropriate as a substitute for medical or psychological care." },
    ],
    supports: [
      "May support grounding and body awareness",
      "May encourage emotional regulation",
      "May invite a calmer internal state",
      "Supports connection with internal rhythms",
    ],
    faq: [
      { q: "Is TVM the same as Triple Vagal Tone?", a: "No — it is the Triple Vagal Nerve Method. The naming matters." },
      { q: "Will I need to speak about difficult experiences?", a: "No. This is not talk therapy. Presence is the primary language." },
    ],
    safety:
      "TVM is a wellness and self-awareness practice. It is not medical or psychological diagnosis or treatment. If you are under care for a nervous-system, cardiac or psychiatric condition, please speak with your care provider before booking.",
  },
  {
    slug: "kundalini",
    name: "Kundalini Life Force Activation Ceremony",
    short: "A ceremonial space for music, presence, energy and surrender.",
    poeticSubtitle: "A ceremonial invitation to the natural movement of life force.",
    duration: "2 – 3 hours",
    price: "From MXN 3,200 (private) · MXN 900 (group)",
    location: "In person · Private or small group",
    format: "In person · online availability for select ceremonies",
    image: kundaliniImg,
    calendly: CALENDLY_URLS.kundalini,
    intro:
      "A ceremonial space created to invite the natural movement of life force through music, presence, energy, deep listening and surrender. Experiences vary from person to person; the ceremony makes no promises, only offers a container.",
    sections: [
      { title: "The meaning of life force", body: "The word 'kundalini' names the intrinsic vitality that already lives within a body. The ceremony holds a container in which that vitality may be met." },
      { title: "How the ceremony unfolds", body: "Grounding · breath · sound · music · rest · integration. Movement may or may not arise. Emotion may or may not surface. Nothing is required." },
      { title: "Private ceremonies", body: "Held one-to-one, shaped around the person receiving." },
      { title: "Group ceremonies", body: "Small circles held on select dates in Oaxaca and, occasionally, online." },
      { title: "Safety and consent", body: "Consent is asked, and can be withdrawn, at every step. There is no pressure to reach any particular state." },
    ],
    supports: [
      "A container for presence",
      "May support emotional release",
      "Experiences vary and are not guaranteed",
      "An invitation, never a promise",
    ],
    faq: [
      { q: "Will kundalini awaken during the ceremony?", a: "There is no promise of any particular experience. The ceremony offers a space; what arises is yours." },
      { q: "Can I come if I've never done this before?", a: "Yes. Beginners are welcome. Preparation notes are shared before the session." },
    ],
    safety:
      "This ceremony is not medical or psychological treatment. It is not recommended for those in acute psychiatric crisis, or with certain cardiac or neurological conditions, without prior conversation. Please write beforehand if you have questions.",
  },
  {
    slug: "tarot",
    name: "Intuitive Tarot Readings",
    short: "Symbolic guidance for life's thresholds.",
    poeticSubtitle: "A symbolic mirror for moments of clarity, transition and self-discovery.",
    duration: "45 – 90 minutes",
    price: "From MXN 900",
    location: "Online or in person",
    format: "Online or in person",
    image: heroTarotImg,
    calendly: CALENDLY_URLS.tarot,
    intro:
      "Tarot as a symbolic mirror — a language of image and archetype for reflection, not fatalistic prediction. Readings are offered with care, ethics and a respect for your own agency.",
    sections: [
      { title: "Virginia's tarot philosophy", body: "Tarot does not decide your life for you. It offers images, patterns and possibilities so you can meet your own choices with more clarity." },
      { title: "What a reading can explore", body: "Thresholds · relationships · vocation · grief · creative direction · long questions that have not yet found words." },
      { title: "What tarot does not do", body: "It does not predict fixed futures, diagnose medical conditions, or replace psychological support." },
      { title: "Ethics", body: "Readings are held in confidence. You are always the author of the story we read together." },
    ],
    supports: [
      "Reflection and symbolic guidance",
      "A pause for clarity at a threshold",
      "Accompaniment through transition",
    ],
    faq: [
      { q: "Do I need a specific question?", a: "No. Sometimes the deepest readings begin with 'I'm not sure yet.'" },
      { q: "Which decks do you use?", a: "A rotating collection of classical and contemporary decks, chosen for the reading." },
    ],
    safety:
      "Tarot readings are for reflection and personal exploration. They are not medical, psychological or legal advice.",
  },
];

export const TAROT_OFFERS = [
  { title: "Clarity Reading", duration: "30 min", price: "MXN 700", format: "Online" },
  { title: "Full Intuitive Reading", duration: "75 min", price: "MXN 1,600", format: "Online or in person" },
  { title: "Relationship Reading", duration: "75 min", price: "MXN 1,800", format: "Online or in person" },
  { title: "Soul Path Reading", duration: "90 min", price: "MXN 2,200", format: "Online or in person" },
  { title: "Monthly Guidance", duration: "45 min", price: "MXN 1,100", format: "Online" },
  { title: "Tarot & Reiki Journey", duration: "2 hr", price: "MXN 2,600", format: "In person · Oaxaca" },
];

export { bodyEarthImg };
