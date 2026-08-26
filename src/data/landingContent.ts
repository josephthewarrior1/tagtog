export interface ProductItem {
  id: "ems" | "pms" | "crm" | "iam";
  name: string;
  fullName: string;
  eyebrow: string;
  description: string;
  bullets: string[];
  imageSrc: string;
  imageAlt: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  title: string;
  company: string;
  quote: string;
  image: string;
}

export const navItems = [
  { label: "Why TAGTOG", href: "#why-tagtog" },
  { label: "Resources", href: "#resources" },
  { label: "Contact", href: "#contact" },
];

export const productItems: ProductItem[] = [
  {
    id: "ems",
    name: "EMS",
    fullName: "Event Management System",
    eyebrow: "Run the event with live operational clarity",
    description:
      "Coordinate schedules, speakers, venues, run-of-show details, and live changes in one operational workspace built for event teams.",
    bullets: [
      "Keep rundowns, rooms, and cue changes aligned in real time.",
      "Reduce confusion across production, venue, and onsite teams.",
      "Surface the latest approved operational view when the pace picks up.",
    ],
    imageSrc: "/images/product-ems.svg",
    imageAlt: "Placeholder TAGTOG EMS interface showing live event operations.",
  },
  {
    id: "pms",
    name: "PMS",
    fullName: "Project Management System",
    eyebrow: "Organize work, ownership, and approvals",
    description:
      "Track milestones, dependencies, approvals, and responsibilities so event delivery does not depend on scattered follow-ups.",
    bullets: [
      "Give every deliverable a clear owner and visible next step.",
      "Maintain accountability across internal teams and external vendors.",
      "Keep project progress connected to the actual event operation.",
    ],
    imageSrc: "/images/product-pms.svg",
    imageAlt: "Placeholder TAGTOG PMS interface showing tasks and approvals.",
  },
  {
    id: "crm",
    name: "CRM",
    fullName: "Client Relationship Management",
    eyebrow: "Keep stakeholders and master data connected",
    description:
      "Manage clients, sponsors, speakers, partners, and key contacts in one source so the rest of the operation works from trusted information.",
    bullets: [
      "Reduce duplicate entry across proposals, schedules, and deliverables.",
      "Keep stakeholder details usable across planning and execution.",
      "Support quieter AI assistance for summaries and repetitive admin tasks.",
    ],
    imageSrc: "/images/product-crm.svg",
    imageAlt: "Placeholder TAGTOG CRM interface showing stakeholder records.",
  },
  {
    id: "iam",
    name: "IAM",
    fullName: "Identity & Access Management",
    eyebrow: "Control who can see what and when",
    description:
      "Apply role-based access, temporary permissions, and audit visibility so the right people have the right information at the right moment.",
    bullets: [
      "Limit access by team, role, partner, or event responsibility.",
      "Track changes and approvals with an auditable history.",
      "Support security and operational control without slowing teams down.",
    ],
    imageSrc: "/images/product-iam.svg",
    imageAlt: "Placeholder TAGTOG IAM interface showing access control and audit trails.",
  },
];

export const trustLogos = [
  { short: "SUMM", name: "Summit Asia" },
  { short: "VEN", name: "Venue Circle" },
  { short: "EVE", name: "Event Leaders" },
  { short: "60V", name: "Gov Forum" },
  { short: "LIV", name: "Live Ops Co" },
  { short: "EXP", name: "Expo Network" },
  { short: "PRI", name: "Prime Stage" },
  { short: "CON", name: "Conference Group" },
];

export const problemQuestions = [
  "Which version is the latest and correct one?",
  "Where can I actually find what I need right now?",
  "Who changed this, and was it approved?",
  "Who should be allowed to see or edit this?",
];

export const scopeColumns = {
  before: [
    "Stakeholder and speaker data connected through CRM",
    "Project timelines, deliverables, and approvals managed in PMS",
    "Venue, session, and schedule planning aligned inside EMS",
    "Access roles defined early through IAM",
    "Master data stays consistent across planning documents",
  ],
  duringAfter: [
    "Live operational updates stay visible in EMS",
    "Onsite responsibilities and changes remain traceable in PMS",
    "Approved contact and stakeholder context stays usable through CRM",
    "Role-based access and audit trails continue through IAM",
    "Reporting and follow-up inherit the same connected record",
  ],
};

export const messagingPillars = [
  {
    title: "Reliable Information",
    description: "Find the latest version without digging through disconnected files and messages.",
  },
  {
    title: "One Connected Flow",
    description: "EMS, PMS, CRM, and IAM reinforce each other instead of creating new silos.",
  },
  {
    title: "Traceability and Control",
    description: "See what changed, who changed it, and how decisions moved forward.",
  },
  {
    title: "Growth Without More Complexity",
    description: "Start where the pressure is highest and expand without rebuilding everything.",
  },
  {
    title: "Useful Innovation",
    description: "Quiet assistance helps summarize information and reduce repetitive work inside the flow.",
  },
];

export const testimonials: TestimonialItem[] = [
  {
    id: "arya",
    name: "Arya Pratama",
    title: "Head of Live Event Operations",
    company: "National Conference & Summit Consortium",
    quote:
      "TAGTOG gave our team one operational view instead of five competing versions. Live updates became easier to trust when the pressure was highest.",
    image: "/images/headshot-arya.svg",
  },
  {
    id: "siti",
    name: "Siti Rahmawati",
    title: "VP Information Security",
    company: "Enterprise Event Holding",
    quote:
      "IAM and audit visibility were the deciding factors for us. Technical control stayed practical for operations, not separate from it.",
    image: "/images/headshot-siti.svg",
  },
  {
    id: "budi",
    name: "Budi Santoso",
    title: "Executive Event Producer",
    company: "Vanguard Live Media",
    quote:
      "Once schedules, approvals, and stakeholder context were connected, handoffs stopped feeling like guesswork between teams.",
    image: "/images/headshot-budi.svg",
  },
];

export const technicalPillars = [
  {
    title: "Access control with operational context",
    description: "IAM keeps internal teams, vendors, partners, and temporary contributors scoped to what they actually need.",
  },
  {
    title: "Audit trails you can use",
    description: "Every important change, approval, and role decision stays visible for governance and technical review.",
  },
  {
    title: "Integration without another silo",
    description: "TAGTOG is designed to connect event operations with the surrounding systems your organization already depends on.",
  },
];

export const faqItems = [
  {
    id: "security",
    question: "How does TAGTOG handle security and access control?",
    answer:
      "IAM supports role-based access, scoped permissions, and audit visibility so teams can control who sees what and when across the event operation.",
  },
  {
    id: "integration",
    question: "Can TAGTOG integrate with systems we already use?",
    answer:
      "Yes. TAGTOG is meant to connect operational context across existing systems where that connection improves event delivery and data consistency.",
  },
  {
    id: "onboarding",
    question: "How long does onboarding usually take?",
    answer:
      "Onboarding depends on the starting product and workflow complexity, but teams can begin with one operational area first instead of attempting a full migration on day one.",
  },
  {
    id: "customization",
    question: "How much can the workflow be customized?",
    answer:
      "TAGTOG is designed around real operational patterns, with room to adapt ownership, approvals, access, and process details to how your team actually works.",
  },
  {
    id: "support",
    question: "What kind of support do customers receive?",
    answer:
      "Customers receive practical implementation support, operational guidance, and follow-through from teams who understand event complexity, not just software setup.",
  },
];

export const footerColumns = {
  products: ["EMS", "PMS", "CRM", "IAM"],
  company: ["Why TAGTOG", "About", "Contact"],
  resources: ["FAQ", "Security", "Implementation"],
  contact: ["hello@tagtog.com", "Jakarta, Indonesia", "Book a Demo"],
};
