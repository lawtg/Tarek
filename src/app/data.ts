import {
  BookOpen,
  BriefcaseBusiness,
  CalendarCheck,
  Church,
  Compass,
  GraduationCap,
  Handshake,
  Leaf,
  MapPinned,
  Plane,
  Users,
} from "lucide-react"

export const PHONE_DISPLAY = "+234 818 262 1701"
export const PHONE_LINK = "tel:+2348182621701"
export const EMAIL = "tareklogisticslimited@gmail.com"

export const whatsappUrl = (message: string) =>
  `https://wa.me/2348182621701?text=${encodeURIComponent(message)}`

export const images = {
  hero: "/medium-shot-people-travel-agency-office (1).jpg",
  educational:
    "/educational tour.jpg",
  group:
    "/african-american-mother-daughter-watching-map-her-travel-paris.jpg",
  pilgrimage:
    "/pilgrimage.jpg",
  events:
    "/protocol.png",
  nature:
    "https://images.unsplash.com/photo-1786519318372-89dfd47f7cb2?auto=format&fit=crop&w=1200&q=80",
  about:
    "/medium-shot-woman-working-office-travel-agency.jpg",
  promise:
    "/medium-shot-people-travel-agency-office.jpg",
  training:
    "https://images.unsplash.com/photo-1655720348590-c739c860beed?auto=format&fit=crop&w=1000&q=80",
  logistics:
    "/happy-african-american-delivery-woman-delivering-packages-looking-camera.jpg",
  travelPlanning:
    "/small-table-lamp-plane-world-map.jpg",
}

export const services = [
  {
    slug: "educational-tourism",
    title: "Educational Tours",
    short: "Learning beyond the classroom.",
    description:
      "Thoughtfully coordinated excursions and educational travel experiences for schools, institutions, and learning groups.",
    audience:
      "Schools, educational institutions, youth groups, and learning communities.",
    includes: [
      "Planning discussions",
      "Group movement coordination",
      "Destination and activity options",
      "Pre-trip guidance",
    ],
    image: images.educational,
    icon: GraduationCap,
    message:
      "Hello Tarek Logistics Limited, I would like to discuss an educational tour.",
  },
  {
    slug: "group-vacations",
    title: "Group Tours & Vacations",
    short: "Travel together. Make memories.",
    description:
      "Travel planning for families, associations, communities, and friends who want to enjoy a well-coordinated group experience.",
    audience:
      "Families, friends, associations, communities, and organised groups.",
    includes: [
      "Travel planning",
      "Group requirement review",
      "Suitable experience options",
      "Coordination support",
    ],
    image: images.group,
    icon: Users,
    message:
      "Hello Tarek Logistics Limited, I am interested in planning a group vacation.",
  },
  {
    slug: "pilgrimage",
    title: "Pilgrimage",
    short: "A meaningful journey, thoughtfully planned.",
    description:
      "Careful planning support for churches and religious organisations arranging meaningful group journeys.",
    audience:
      "Churches, religious organisations, faith communities, and organised groups.",
    includes: [
      "Planning consultation",
      "Group coordination",
      "Travel arrangement support",
      "Preparation guidance",
    ],
    image: images.pilgrimage,
    icon: Church,
    message:
      "Hello Tarek Logistics Limited, I would like information about your pilgrimage planning services.",
  },
  {
    slug: "protocol-events",
    title: "Protocol & Events",
    short: "Professional coordination, seamless experiences.",
    description:
      "Practical protocol, guest coordination, and event-planning support shaped around your programme.",
    audience:
      "Corporate organisations, event organisers, institutions, and visiting delegations.",
    includes: [
      "Guest coordination",
      "Programme support",
      "Event logistics discussions",
      "Protocol planning",
    ],
    image: images.events,
    icon: BriefcaseBusiness,
    message:
      "Hello Tarek Logistics Limited, I would like to discuss protocol and logistics support.",
  },
  {
    slug: "ecotourism",
    title: "Ecotourism",
    short: "Explore nature with care.",
    description:
      "Nature-focused travel ideas and planning for groups seeking refreshing outdoor experiences.",
    audience:
      "Individuals, families, schools, groups, and nature-minded travellers.",
    includes: [
      "Experience planning",
      "Group coordination",
      "Suitable nature-based options",
      "Preparation guidance",
    ],
    image: images.nature,
    icon: Leaf,
    message:
      "Hello Tarek Logistics Limited, I would like to discuss an ecotourism experience.",
  },
  {
    slug: "travel-planning",
    title: "Travel Planning",
    short: "Your plans, carefully coordinated.",
    description:
      "Personalised travel planning support built around your purpose, timing, preferences, and budget.",
    audience: "Individuals, families, groups, institutions, and organisations.",
    includes: [
      "Needs assessment",
      "Planning options",
      "Travel coordination",
      "Clear pre-travel communication",
    ],
    image: images.travelPlanning,
    icon: Plane,
    message:
      "Hello Tarek Logistics Limited, I would like help planning a journey.",
  },
  {
    slug: "meet-and-greet",
    title: "Meet & Greet",
    short: "A welcoming first impression.",
    description:
      "Arrival and guest-support coordination for visitors, groups, and invited delegations.",
    audience:
      "Visitors, corporate guests, groups, event organisers, and delegations.",
    includes: [
      "Arrival coordination",
      "Guest reception planning",
      "Movement support discussions",
      "Contact-point coordination",
    ],
    image: images.events,
    icon: Handshake,
    message:
      "Hello Tarek Logistics Limited, I would like to discuss meet-and-greet support.",
  },
  {
    slug: "training",
    title: "Training Services",
    short: "Practical programmes, well organised.",
    description:
      "Coordination support for structured training programmes shaped around the needs of your audience.",
    audience:
      "Organisations, schools, associations, teams, and community groups.",
    includes: [
      "Programme planning",
      "Participant coordination",
      "Venue requirement discussions",
      "Training logistics",
    ],
    image: images.training,
    icon: BookOpen,
    message:
      "Hello Tarek Logistics Limited, I would like to discuss a training programme.",
  },
  {
    slug: "logistics-support",
    title: "Logistics Support",
    short: "The details that keep plans moving.",
    description:
      "Professional coordination support for group movements, programmes, events, and visiting teams.",
    audience:
      "Corporate organisations, groups, institutions, event organisers, and delegations.",
    includes: [
      "Requirements review",
      "Movement planning",
      "Schedule coordination",
      "Operational communication",
    ],
    image: images.logistics,
    icon: MapPinned,
    message:
      "Hello Tarek Logistics Limited, I would like to discuss logistics support.",
  },
  {
    slug: "event-planning",
    title: "Event Planning",
    short: "Important moments, thoughtfully handled.",
    description:
      "Planning and coordination support for meaningful corporate, social, and community events.",
    audience:
      "Individuals, organisations, associations, communities, and event hosts.",
    includes: [
      "Event planning discussion",
      "Programme coordination",
      "Guest and venue requirements",
      "Logistics support",
    ],
    image: images.events,
    icon: CalendarCheck,
    message:
      "Hello Tarek Logistics Limited, I would like to discuss planning an event.",
  },
]

export const experienceCategories = [
  {
    title: "Educational Excursions",
    copy: "Discuss a learning experience shaped around your institution and students.",
    image: images.educational,
  },
  {
    title: "Group Tours & Vacations",
    copy: "Bring your people together for a journey planned around your shared needs.",
    image: images.group,
  },
  {
    title: "Ecotourism Experiences",
    copy: "Explore nature-focused possibilities for your family, school, or group.",
    image: images.nature,
  },
  {
    title: "Pilgrimage Journeys",
    copy: "Begin a conversation about a meaningful journey for your faith community.",
    image: images.pilgrimage,
  },
]

export const faqs = [
  [
    "What services does Tarek Logistics Limited offer?",
    "We provide travel planning, educational tourism, ecotourism, group tours and vacations, pilgrimage, protocol and logistics, meet-and-greet services, training, and event planning.",
  ],
  [
    "Who can use your services?",
    "We serve individuals, families, schools, churches, corporate organisations, associations, and other organised groups.",
  ],
  [
    "Do you organise group trips and excursions?",
    "Yes. Contact us with your preferred destination, group size, dates, and budget so we can discuss your requirements.",
  ],
  [
    "Can you help churches organise pilgrimages?",
    "Yes. We can discuss pilgrimage planning and the arrangements required for your church or religious group.",
  ],
  [
    "How much do your services cost?",
    "Pricing depends on the service, destination, dates, group size, and specific requirements. Contact us for a quotation.",
  ],
  [
    "How do I book a service or tour package?",
    `Call us or send a WhatsApp message on ${PHONE_DISPLAY}. Share your requirements, and we will guide you through the next steps.`,
  ],
  [
    "Can you help plan a customised trip or event?",
    "Contact us with your ideas and requirements so we can discuss the appropriate arrangements.",
  ],
  [
    "How can I contact your team?",
    `Call or WhatsApp ${PHONE_DISPLAY}, or email ${EMAIL}.`,
  ],
]

export const CompassIcon = Compass
