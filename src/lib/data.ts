export interface ServiceItem {
  id: string;
  number: string;
  name: string;
  duration: string;
  price: string;
  description: string;
  ctaText: string;
  popular?: boolean;
}

export interface SportCardItem {
  number: string;
  title: string;
  focus: string[];
  image: string;
  description: string;
}

export interface BodyPartItem {
  id: string;
  name: string;
  commonAfter: string[];
  focus: string[];
  recommended: string;
  recommendedPrice: string;
  coords: { x: number; y: number }; // percentage position on silhouette
}

export interface BodyNeedItem {
  id: string;
  label: string;
  description: string;
  recommendedService: string;
  duration: string;
  price: string;
}

export const BRAND_DATA = {
  name: "PEAK PERFORMANCE",
  tagline: "SOLVE. ENHANCE. DOMINATE.",
  badge: "FEMALE ONLY • SPORTS RECOVERY STUDIO",
  therapist: "SOFEA",
  phoneDisplay: "011 1991 7397",
  phoneRaw: "601119917397",
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "full-body",
    number: "01",
    name: "Full Body Sports Massage",
    duration: "1 HOUR",
    price: "RM135",
    description:
      "Full-body sports massage focused on muscle tension, recovery and physical readiness.",
    ctaText: "BOOK THIS →",
    popular: true,
  },
  {
    id: "full-body-pnf",
    number: "02",
    name: "Full Body + PNF Stretching",
    duration: "1 HOUR & ABOVE",
    price: "RM180",
    description:
      "Sports massage combined with PNF (Proprioceptive Neuromuscular Facilitation) stretching for athletes looking to improve mobility and range of motion.",
    ctaText: "BOOK THIS →",
  },
  {
    id: "half-body",
    number: "03",
    name: "Half Body Sports Massage",
    duration: "30 MINUTES",
    price: "RM65",
    description:
      "Targeted sports massage focused on selected muscle groups for quick tune-ups or localized relief.",
    ctaText: "BOOK THIS →",
  },
  {
    id: "dry-cupping",
    number: "04",
    name: "Dry Cupping",
    duration: "TARGETED SESSION",
    price: "RM10–20",
    description:
      "Targeted dry cupping therapy. Pricing depends on treatment area.",
    ctaText: "ASK ON WHATSAPP →",
  },
  {
    id: "sports-taping",
    number: "05",
    name: "Sports Taping (Kinesiology Tape)",
    duration: "APPLICATION",
    price: "RM10–20",
    description:
      "Premium kinesiology taping application. Pricing RM10–20 depending on area.",
    ctaText: "ASK ON WHATSAPP →",
  },
];

export const SPORTS_DATA: SportCardItem[] = [
  {
    number: "01",
    title: "FOOTBALL",
    focus: ["Hamstrings & Quads", "Hip Flexors", "Calf Strain Relief"],
    image:
      "https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?q=80&w=1200&auto=format&fit=crop",
    description: "High-impact sprint recovery and lower-body mobility work.",
  },
  {
    number: "02",
    title: "BADMINTON",
    focus: ["Shoulder & Rotator Cuff", "Forearm Tension", "Explosive Lunges"],
    image:
      "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?q=80&w=1200&auto=format&fit=crop",
    description: "Overhead smash recovery, wrist-forearm relief and footwork mobility.",
  },
  {
    number: "03",
    title: "RUNNING",
    focus: ["IT Band & Glutes", "Achilles & Calf", "Plantor Fascia Relief"],
    image:
      "https://images.unsplash.com/photo-1571008887538-b36bb32f4571?q=80&w=1200&auto=format&fit=crop",
    description: "Repetitive impact flush out, muscle knot release and joint movement.",
  },
  {
    number: "04",
    title: "FITNESS / CROSSFIT",
    focus: ["Posterior Chain", "Lower Back Tension", "Grip & Lats"],
    image:
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop",
    description: "Deep tissue tension relief for heavy lifting and conditioning overload.",
  },
  {
    number: "05",
    title: "FUTSAL",
    focus: ["Adductors & Groin", "Quick Direction Change", "Ankle Mobility"],
    image:
      "https://images.unsplash.com/photo-1518091043644-c1d4457512c6?q=80&w=1200&auto=format&fit=crop",
    description: "Cortical agility recovery for indoor fast-paced turf play.",
  },
  {
    number: "06",
    title: "VOLLEYBALL / TENNIS",
    focus: ["Overhead Drive", "Thoracic Spine", "Lateral Stability"],
    image:
      "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?q=80&w=1200&auto=format&fit=crop",
    description: "Rotational power enhancement and dynamic overhead joint health.",
  },
];

export const BODY_NEEDS_DATA: BodyNeedItem[] = [
  {
    id: "recovery",
    label: "RECOVERY",
    description:
      "Reduce muscle tension and support fast physical recovery after intense training or tournament games.",
    recommendedService: "Full Body Sports Massage",
    duration: "60 MIN",
    price: "RM135",
  },
  {
    id: "muscle-relief",
    label: "MUSCLE RELIEF",
    description:
      "Target tight knots, localized stiffness, and muscle overload in high-stress zones.",
    recommendedService: "Half Body or Full Body Massage",
    duration: "30 - 60 MIN",
    price: "RM65 – RM135",
  },
  {
    id: "mobility",
    label: "MOBILITY",
    description:
      "Improve movement quality, joint range of motion (ROM), and muscle flexibility through PNF techniques.",
    recommendedService: "Full Body + PNF Stretching",
    duration: "60 MIN+",
    price: "RM180",
  },
  {
    id: "performance",
    label: "PERFORMANCE",
    description:
      "Unlock peak physical readiness so your muscles operate without restriction during competition.",
    recommendedService: "Full Body + PNF Stretching",
    duration: "60 MIN+",
    price: "RM180",
  },
  {
    id: "pre-training",
    label: "PRE-TRAINING",
    description:
      "Activate tight tissues, enhance blood circulation, and apply strategic sports taping before games.",
    recommendedService: "Half Body + Sports Taping",
    duration: "30 MIN+",
    price: "RM65 + Taping",
  },
  {
    id: "post-training",
    label: "POST-TRAINING",
    description:
      "Flush metabolic waste, ease post-game soreness, and accelerate muscle repair.",
    recommendedService: "Full Body Sports Massage",
    duration: "60 MIN",
    price: "RM135",
  },
];

export const BODY_PARTS_DATA: BodyPartItem[] = [
  {
    id: "shoulder",
    name: "SHOULDER & ROTATOR CUFF",
    commonAfter: ["Badminton Overhead Smashes", "Volleyball Spikes", "Gym Presses / Pull-ups"],
    focus: ["Rotator cuff tension", "Pectoral tightness", "Scapular mobility"],
    recommended: "Full Body Sports Massage",
    recommendedPrice: "RM135",
    // SVG viewBox 200x380: shoulder at x≈130, y≈78 → percentages
    coords: { x: 65, y: 21 },
  },
  {
    id: "back",
    name: "UPPER & LOWER BACK",
    commonAfter: ["Deadlifts & Squats", "Badminton Arching", "Running Impact Load"],
    focus: ["Erector spinae tension", "Thoracic spine stiffness", "Lumbosacral relief"],
    recommended: "Full Body + PNF Stretching",
    recommendedPrice: "RM180",
    // spine center x=100, mid-torso y≈130
    coords: { x: 50, y: 34 },
  },
  {
    id: "quads",
    name: "QUADRICEPS",
    commonAfter: ["Heavy Squats", "Football Sprints", "Futsal Direction Cuts"],
    focus: ["Rectus femoris tightness", "Knee tracking support", "Tissue flush"],
    recommended: "Full Body Sports Massage",
    recommendedPrice: "RM135",
    // left thigh front x≈84, y≈225
    coords: { x: 42, y: 59 },
  },
  {
    id: "hamstring",
    name: "HAMSTRINGS",
    commonAfter: ["Maximal Sprints", "Football Kick Follow-through", "High-speed Running"],
    focus: ["Biceps femoris tension", "Hip mobility", "PNF hamstring elongation"],
    recommended: "Full Body + PNF Stretching",
    recommendedPrice: "RM180",
    // right thigh x≈116, y≈235
    coords: { x: 58, y: 62 },
  },
  {
    id: "calf",
    name: "CALF & ACHILLES",
    commonAfter: ["Long Distance Running", "Futsal Turf Bouncing", "Badminton Footwork"],
    focus: ["Gastrocnemius knots", "Soleus tightness", "Ankle dorsiflexion"],
    recommended: "Half Body or Full Body",
    recommendedPrice: "RM65 – RM135",
    // left calf x≈82, y≈305
    coords: { x: 41, y: 80 },
  },
  {
    id: "ankle",
    name: "ANKLE & FOOT",
    commonAfter: ["Lateral Cuts", "Trail Running", "Court Sport Stops"],
    focus: ["Joint stiffness", "Peroneal tension", "Supportive Kinesiology Taping"],
    recommended: "Sports Taping + Targeted Massage",
    recommendedPrice: "RM10–20 + RM65",
    // right ankle x≈118, y≈348
    coords: { x: 59, y: 92 },
  },
];

export const FAQ_DATA = [
  {
    question: "Who is the service for?",
    answer:
      "RE:MK Performance provides female-only sports massage and recovery services specifically tailored for active women and athletes of all levels (football, futsal, badminton, running, gym, CrossFit, etc.).",
  },
  {
    question: "What should I choose for my first session?",
    answer:
      "For general full-body muscle tension and post-training recovery, the Full Body Sports Massage (1 hour - RM135) is the most popular starting option. If your primary goal is flexibility and joint mobility, choose Full Body + PNF Stretching (RM180).",
  },
  {
    question: "How do I book a session?",
    answer:
      "All bookings are handled directly through WhatsApp with Sofea. Click any 'BOOK YOUR SESSION' button on this website to launch WhatsApp with your pre-filled service request.",
  },
  {
    question: "Is the service female-only?",
    answer:
      "Yes. RE:MK Performance is strictly a female-only sports recovery studio operated by Sofea for female clients.",
  },
  {
    question: "How much does each service cost?",
    answer:
      "Our transparent pricing:\n• Full Body (1 hour) — RM135\n• Full Body + PNF Stretching (1 hour+) — RM180\n• Half Body (30 mins) — RM65\n• Dry Cupping — RM10–20\n• Sports Taping (Kinesiology Tape) — RM10–20 depending on area.",
  },
  {
    question: "Do I need to pay online?",
    answer:
      "No online payment system is required on the website. Payment and scheduling details will be confirmed directly through WhatsApp.",
  },
];
