import { Link, useParams } from "react-router"
import { useEffect, useRef, useState } from "react"
import {
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  Phone,
} from "lucide-react"
import {
  ContactForm,
  Eyebrow,
  FaqList,
  PageHero,
  SectionHeading,
  WhatsAppLink,
} from "./components"
import {
  EMAIL,
  experienceCategories,
  faqs,
  images,
  PHONE_DISPLAY,
  PHONE_LINK,
  services,
  whatsappUrl,
} from "./data"

// ── Scroll-reveal hook ─────────────────────────────────────────────────────
// Uses IntersectionObserver — fires once per element, never on scroll events.
function useReveal(threshold = 0.12) {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          obs.disconnect()
        }
      },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return { ref, visible }
}

export function Home() {
  const visibleServices = services.slice(0, 4)
  const moreServices = services.slice(4)

  const servicesReveal = useReveal()
  const aboutReveal = useReveal()
  const diffReveal = useReveal()
  const packagesReveal = useReveal()

  return (
    <>
      {/* ════════════════════════════════════════════════════════════════
          SECTION 01 — HERO (cinematic panoramic luxury travel)
      ════════════════════════════════════════════════════════════════ */}
      <section className="hero" aria-label="Welcome to Tarek Travels and Logistics Limited">
        {/* Full-bleed panoramic photographic background */}
        <div className="hero__backdrop" aria-hidden="true">
          <img
            src="/Luxury Jet Departure Over Lagos.jpg"
            alt="Luxury Jet Departure Over Lagos — Tarek Travels & Logistics"
            fetchPriority="high"
            decoding="async"
          />
          <div className="hero__overlay" />
        </div>

        {/* Content container aligned over left negative space */}
        <div className="container hero__container">
          <div className="hero__content">
            <div className="hero__eyebrow-wrap">
              <span className="hero__eyebrow">
                TRAVELS &amp; LOGISTICS
              </span>
              <span className="hero__diamond" aria-hidden="true">✦</span>
            </div>

            <h1 className="hero__title">
              <span>YOUR JOURNEY.</span>
              <em>OUR MISSION.</em>
            </h1>

            <p className="hero__tagline">
              STRESS-FREE. RELIABLE. PERSONAL.
            </p>

            <p className="hero__sub">
              We plan bespoke travel, educational tours, pilgrimages, VIP protocol,
              events, and logistics — so you and your group can focus entirely on
              the extraordinary experience.
            </p>

            <div className="hero__actions">
              <WhatsAppLink
                message="Hello Tarek Travels and Logistics Limited, I would like to plan an experience."
                className="hero__btn hero__btn--primary"
              >
                Start Planning — It's Free
                <ArrowRight size={16} />
              </WhatsAppLink>
              <a className="hero__btn hero__btn--secondary" href="#services">
                Explore Our Experiences
              </a>
            </div>

            <div className="hero__trust">
              <span>✓ No commitment required</span>
              <span className="hero__trust-dot" />
              <span>✓ Fast response</span>
              <span className="hero__trust-dot" />
              <span>✓ Tailored to your group</span>
            </div>
          </div>
        </div>

        {/* Floating stat card on tarmac */}
        <div className="hero__stat" aria-hidden="true">
          <span className="hero__stat-eyebrow">LAGOS · GLOBAL</span>
          <strong>Est. 2020</strong>
          <span>Tarek Travels &amp; Logistics</span>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          SECTION 02 — THE TAREK STORY (immediately after hero)
      ════════════════════════════════════════════════════════════════ */}
      <section
        className={`section about-split reveal-section${aboutReveal.visible ? " is-visible" : ""}`}
        ref={aboutReveal.ref as React.RefObject<HTMLElement>}
      >
        <div className="container about-grid">
          <div className="about-copy reveal-item" style={{ "--delay": "0ms" } as React.CSSProperties}>
            <Eyebrow>THE TAREK STORY</Eyebrow>
            <h2>Travel &amp; Events,
            Planned Right.</h2>
            <p className="about-copy__lead">
              Tarek Travels and Logistics plans every detail — so you arrive, meet,
              travel, and celebrate without the stress of coordination.
            </p>
            <p>
              From educational excursions and group vacations to pilgrimage, protocol,
              logistics, training, and events — we help you turn plans into
              well-coordinated experiences.
            </p>
            <p>
              Our approach: listen carefully, plan with precision, communicate
              clearly, deliver with professionalism.
            </p>
            <Link className="text-link" to="/about">
              Discover Our Story <ArrowRight size={16} />
            </Link>
          </div>
          <div className="about-image reveal-item" style={{ "--delay": "150ms" } as React.CSSProperties}>
            <div className="about-image__frame">
              <img src="/Tarek story.png" alt="Tarek Travels and Logistics — Travel in Style" loading="lazy" />
            </div>
            <div className="about-image__tag">
              <span>Excellent &amp; Exceptional</span>
              <strong>Service.</strong>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          SECTION 03 — WHAT WE CREATE (services card grid)
      ════════════════════════════════════════════════════════════════ */}
      <section
        className={`services-section reveal-section${servicesReveal.visible ? " is-visible" : ""}`}
        id="services"
        ref={servicesReveal.ref as React.RefObject<HTMLElement>}
      >
        <div className="container">
          <div className="svc-head reveal-item" style={{ "--delay": "0ms" } as React.CSSProperties}>
            <div className="svc-head__text">
              <Eyebrow>WHAT WE PLAN FOR YOU</Eyebrow>
              <h2 className="svc-head__title">Our Services</h2>
              <p className="svc-head__sub">
                From educational tours to corporate protocol — every experience
                thoughtfully coordinated from first enquiry to final delivery.
              </p>
            </div>
          </div>
          <div className="svc-grid">
            {services.slice(0, 6).map((service, i) => (
              <ServiceCard key={service.slug} service={service} index={i} visible={servicesReveal.visible} />
            ))}
          </div>
          <div className="svc-more reveal-item" style={{ "--delay": "600ms" } as React.CSSProperties}>
            <Link className="svc-more__all" to="/services">
              View all services <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          SECTION 05 — THE TAREK DIFFERENCE (premium two-column)
      ════════════════════════════════════════════════════════════════ */}
      <section
        className={`diff-section${diffReveal.visible ? " is-visible" : ""}`}
        ref={diffReveal.ref as React.RefObject<HTMLElement>}
      >
        <div className="diff-inner">
        {/* LEFT — content */}
        <div className="diff-left">
          <div className="diff-left__inner">
            <p className="diff-eyebrow">
              <span className="diff-eyebrow-rule" aria-hidden="true" />
              THE TAREK DIFFERENCE
            </p>
            <h2 className="diff-heading">
              What Sets<br />Us <em>Apart.</em>
            </h2>
            <p className="diff-sub">
              We go beyond coordination. Every detail is planned with care,
              every client treated as a priority, every experience made to last.
            </p>
            <div className="diff-grid">
              <div className="diff-card">
                <span className="diff-card__icon" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/>
                  </svg>
                </span>
                <h3 className="diff-card__title">Thoughtful Planning</h3>
                <p className="diff-card__desc">We go beyond logistics. Every detail is considered, every arrangement discussed, and every commitment kept.</p>
              </div>
              <div className="diff-card">
                <span className="diff-card__icon" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>
                  </svg>
                </span>
                <h3 className="diff-card__title">Personalised Attention</h3>
                <p className="diff-card__desc">We take time to understand your requirements, discuss what matters to you, and tailor arrangements accordingly.</p>
              </div>
              <div className="diff-card">
                <span className="diff-card__icon" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/>
                  </svg>
                </span>
                <h3 className="diff-card__title">Seamless Coordination</h3>
                <p className="diff-card__desc">From first inquiry to delivery, our coordination is precise, proactive, and professionally communicated.</p>
              </div>
              <div className="diff-card">
                <span className="diff-card__icon" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                  </svg>
                </span>
                <h3 className="diff-card__title">Experiences Worth Remembering</h3>
                <p className="diff-card__desc">We are committed to positive experiences that stay with people long after the journey ends.</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT — single professional photograph */}
        <div className="diff-right" aria-hidden="true">
          <div className="diff-img-wrap">
            <img
              src="/Tarek Difference.png"
              alt="Tarek Travels and Logistics team — Travel in Style, Travel with Confidence"
              loading="lazy"
            />
          </div>
        </div>{/* end diff-right */}
        </div>{/* end diff-inner */}
      </section>

      {/* ════════════════════════════════════════════════════════════════
          TOUR PACKAGES — card grid
      ════════════════════════════════════════════════════════════════ */}
      <section
        className={`tour-packages reveal-section${packagesReveal.visible ? " is-visible" : ""}`}
        ref={packagesReveal.ref as React.RefObject<HTMLElement>}
      >
        <div className="container">
          <div className="tp-head reveal-item" style={{ "--delay": "0ms" } as React.CSSProperties}>
            <div className="tp-head__text">
              <Eyebrow>EXPLORE THE POSSIBILITIES</Eyebrow>
              <h2 className="tp-head__title">Tour Packages</h2>
              <p className="tp-head__sub">
                Carefully curated tours across Nigeria — from city day trips to
                faith-based journeys. Contact us to plan your experience.
              </p>
            </div>
          </div>
          <div className="tp-cards">
            {[
              {
                title: "Aba Day Trip",
                location: "Abia State, Nigeria",
                category: "City Excursion",
                desc: "A guided day tour exploring the commercial and cultural heart of Aba.",
                img: "/Aerial_view_of_Aba.jpg",
                imgAlt: "Aerial view of Aba, Abia State, Nigeria",
              },
              {
                title: "Bonny City Tour",
                location: "Rivers State, Nigeria",
                category: "Island Heritage",
                desc: "Discover the rich history, waterways, and heritage of Bonny Island.",
                img: "/bonny city.jpeg",
                imgAlt: "Bonny City, Rivers State, Nigeria",
              },
              {
                title: "Port Harcourt City Tour",
                location: "Rivers State, Nigeria",
                category: "Garden City",
                desc: "A curated tour of the Garden City — landmarks, culture, and cuisine.",
                img: "/Port harcourt.jpeg",
                imgAlt: "Port Harcourt, Rivers State, Nigeria",
              },
              {
                title: "Hand of God Cathedral",
                location: "Rivers State, Nigeria",
                category: "Architectural Landmark",
                desc: "A meaningful guided visit to one of Nigeria's most iconic religious landmarks.",
                img: "/finger of god cathedral .jpeg",
                imgAlt: "Hand of God Cathedral, Rivers State, Nigeria",
              },
              {
                title: "Shiloh Tour Packages",
                location: "Canaanland, Ota, Nigeria",
                category: "Annual Pilgrimage",
                desc: "Faith-inspired group journeys coordinated around the Shiloh experience.",
                img: "/canaanland.jpg",
                imgAlt: "Canaanland, Ota, Ogun State — Faith Tabernacle Shiloh Arena",
              },
              {
                title: "Glory Reign Tour Packages",
                location: "Port Harcourt, Rivers State",
                category: "Faith Gathering",
                desc: "Coordinated travel and logistics for Glory Reign pilgrims and groups.",
                img: "/glory_reign_card.jpg",
                imgAlt: "Glory Reign Tour Packages, Rivers State, Nigeria",
              },
            ].map((pkg, i) => (
              <a
                key={pkg.title}
                className="tp-card reveal-item"
                href={whatsappUrl(`Hello Tarek Travels and Logistics Limited, I would like to enquire about the ${pkg.title}.`)}
                target="_blank"
                rel="noreferrer"
                style={{ "--delay": `${i * 80}ms` } as React.CSSProperties}
              >
                <div className="tp-card__img">
                  <img src={pkg.img} alt={pkg.imgAlt} loading="lazy" />
                  <span className="tp-card__badge">{pkg.category}</span>
                </div>
                <div className="tp-card__body">
                  <p className="tp-card__location">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                    {pkg.location}
                  </p>
                  <h3 className="tp-card__title">{pkg.title}</h3>
                  <p className="tp-card__desc">{pkg.desc}</p>
                  <span className="tp-card__cta">
                    Enquire Now <ArrowRight size={14} />
                  </span>
                </div>
              </a>
            ))}
          </div>
          <div className="tp-footer reveal-item" style={{ "--delay": "500ms" } as React.CSSProperties}>
            <p>Pricing and dates are confirmed after your initial enquiry. No commitment required.</p>
            <Link className="button button--primary" to="/contact">
              Plan a Custom Experience <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* PROMISE — fixed background, centred, black gradient */}
      <section className="promise" aria-label="Our brand promise">
        <div
          className="promise__bg"
          style={{ backgroundImage: `url(${images.promise})` }}
          aria-hidden="true"
        />
        <div className="promise__overlay" aria-hidden="true" />
        <div className="promise__content">
          <Eyebrow light>WHY CLIENTS CHOOSE US</Eyebrow>
          <h2>Your Plans Matter.<br /><em>Your Experience Matters More.</em></h2>
          <p>
            From the first conversation to delivery of the agreed service, we are committed
            to thoughtful planning, clear communication, and a positive experience every time.
          </p>
          <strong>EXCELLENT AND EXCEPTIONAL SERVICE.</strong>
          <WhatsAppLink className="button button--champagne">
            Let&apos;s Plan Something Great <ArrowRight size={16} />
          </WhatsAppLink>
        </div>
      </section>

      {/* FAQ */}
      <section className="section faq-section">
        <div className="container faq-grid">
          <div>
            <Eyebrow>HELPFUL INFORMATION</Eyebrow>
            <h2>Common Questions.</h2>
            <p>Quick answers below. Not finding what you need? Call or WhatsApp us directly — we respond the same day.</p>
            <a href={PHONE_LINK} className="text-link faq-phone">
              <Phone size={15} /> {PHONE_DISPLAY}
            </a>
          </div>
          <FaqList items={faqs} />
        </div>
      </section>

    </>
  )
}

function ServiceCard({ service, index = 0, visible = false }: { service: typeof services[number]; index?: number; visible?: boolean }) {
  const isPopular = index === 0
  return (
    <Link
      className={`svc-card reveal-item${visible ? " is-visible" : ""}`}
      to={`/services/${service.slug}`}
      style={{ "--delay": `${index * 70}ms` } as React.CSSProperties}
    >
      <div className="svc-card__top">
        <span className="svc-card__icon" aria-hidden="true">
          <service.icon size={24} />
        </span>
        {isPopular && <span className="svc-card__badge">Popular</span>}
      </div>
      <h3 className="svc-card__title">{service.title}</h3>
      <span className="svc-card__divider" aria-hidden="true" />
      <p className="svc-card__desc">{service.description}</p>
      <span className="svc-card__link">
        Learn More <ArrowRight size={15} />
      </span>
    </Link>
  )
}

function PackageCard({ item, index = 0, visible = false }: { item: typeof experienceCategories[number]; index?: number; visible?: boolean }) {
  const message = `Hello Tarek Travels and Logistics Limited, I would like to enquire about ${item.title}.`
  const isTall = index === 0 || index === 3
  return (
    <article
      className={`pkg-card reveal-item${isTall ? " pkg-card--tall" : ""}${visible ? " is-visible" : ""}`}
      style={{ "--delay": `${index * 100}ms` } as React.CSSProperties}
    >
      <div className="pkg-card__img">
        <img src={item.image} alt={item.title} loading="lazy" />
      </div>
      <div className="pkg-card__body">
        <h3>{item.title}</h3>
        <p>{item.copy}</p>
        <a className="pkg-card__link" href={whatsappUrl(message)} target="_blank" rel="noreferrer">
          Enquire <ArrowRight size={14} />
        </a>
      </div>
    </article>
  )
}

export function About() {
  const values = [
    "Excellence",
    "Affordability",
    "Customer focus",
    "Professionalism",
    "Memorable experiences",
  ]
  return (
    <>
      <PageHero
        eyebrow="ABOUT TAREK LOGISTICS"
        title="Thoughtful planning. Professional coordination. Meaningful experiences."
        copy="We help individuals, groups, and organisations turn travel, logistics, training, and event plans into well-coordinated experiences."
        image={images.about}
      />
      <section className="section">
        <div className="container story-grid">
          <div>
            <Eyebrow>WHO WE ARE</Eyebrow>
            <h2>Service that begins by listening.</h2>
          </div>
          <div>
            <p>
              Tarek Travels and Logistics was founded to make quality travel and event coordination accessible — regardless of group size or budget.
            </p>
            <p>
              We support travel, excursions, pilgrimage, protocol, logistics,
              training, and events with careful planning, clear communication,
              and professional coordination.
            </p>
            <p>
              We do not believe in one-size-fits-all arrangements. We discuss
              your needs, explore suitable options, and agree the details before
              the service begins.
            </p>
          </div>
        </div>
      </section>
      <section className="section mission-section">
        <div className="container mission-grid">
          <article>
            <span>01</span>
            <h2>Our Mission</h2>
            <p>
              To provide accessible, dependable, and professionally coordinated
              travel, logistics, training, and event services that create
              meaningful experiences for individuals, groups, and organisations.
            </p>
          </article>
          <article>
            <span>02</span>
            <h2>Our Vision</h2>
            <p>
              To become a trusted choice for travel experiences, logistics
              coordination, and event services, recognised for quality,
              affordability, and customer satisfaction.
            </p>
          </article>
        </div>
      </section>
      <section className="section">
        <div className="container values-layout">
          <SectionHeading
            eyebrow="WHAT GUIDES US"
            title="Our core values shape every conversation and every plan."
          />
          <div className="values-list">
            {values.map((value, index) => (
              <div key={value}>
                <span>0{index + 1}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="motto-band">
        <div className="container">
          <Eyebrow light>OUR MOTTO</Eyebrow>
          <h2>Excellent and Exceptional Service.</h2>
          <p>
            A simple promise that keeps our attention on careful coordination
            and a positive client experience.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHeading
            centered
            eyebrow="WHAT WE DO"
            title="One team for journeys, programmes, and important moments."
          />
          <div className="compact-service-grid">
            {services.map((service) => (
              <Link key={service.slug} to={`/services/${service.slug}`}>
                <service.icon size={21} />
                <span>{service.title}</span>
                <ArrowRight size={16} />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="OUR SERVICES"
        title="Every service we offer."
        copy="From educational tours and pilgrimages to protocol, training, and event planning — browse all our services and enquire directly."
        image={images.events}
      />
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="EVERY SERVICE"
            title="Tell us what you need. We’ll help you explore the next step."
            copy="Click any service for full details, who it's for, and what's typically included. Enquire directly via WhatsApp."
          />
          <div className="services-list">
            {services.map((service, index) => (
              <article key={service.slug} id={service.slug}>
                <div className="services-list__number">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className="services-list__icon">
                  <service.icon size={24} />
                </div>
                <div>
                  <h2>{service.title}</h2>
                  <p>{service.description}</p>
                  <span>{service.short}</span>
                </div>
                <Link to={`/services/${service.slug}`}>
                  View service <ArrowRight size={17} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export function ServiceDetail() {
  const { slug } = useParams()
  const service = services.find((item) => item.slug === slug)
  if (!service) return <NotFound />
  const related = services.filter((item) => item.slug !== slug).slice(0, 3)
  return (
    <>
      <PageHero
        eyebrow="TAREK LOGISTICS SERVICE"
        title={service.title}
        copy={service.description}
        image={service.image}
      />
      <section className="section">
        <div className="container detail-grid">
          <div>
            <Eyebrow>WHO IT IS FOR</Eyebrow>
            <h2>Who is this for?</h2>
            <p>{service.audience}</p>
            <WhatsAppLink message={service.message}>
              {`Enquire About ${service.title}`} <ArrowRight size={18} />
            </WhatsAppLink>
          </div>
          <div className="detail-panel">
            <h2>What's typically included</h2>
            <p>
              The exact arrangement is discussed and agreed based on your
              requirements. It may include:
            </p>
            {service.includes.map((item) => (
              <div key={item}>
                <CheckCircle2 size={18} /> {item}
              </div>
            ))}
            <small>
              Inclusions, availability, pricing, and timelines are confirmed
              only after we understand your needs.
            </small>
          </div>
        </div>
      </section>
      <section className="section related">
        <div className="container">
          <SectionHeading
            eyebrow="RELATED SERVICES"
            title="You may also be interested in"
          />
          <div className="related-grid">
            {related.map((item) => (
              <Link key={item.slug} to={`/services/${item.slug}`}>
                <item.icon size={23} />
                <h3>{item.title}</h3>
                <p>{item.short}</p>
                <ArrowRight size={17} />
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="section faq-section">
        <div className="container faq-grid">
          <div>
            <Eyebrow>BEFORE YOU ENQUIRE</Eyebrow>
            <h2>Useful questions to consider.</h2>
            <p>
              Have your preferred dates, group size, purpose, and budget ready
              where applicable. This helps us discuss suitable options.
            </p>
          </div>
          <FaqList items={faqs.slice(2, 7)} />
        </div>
      </section>
    </>
  )
}

export function Tours() {
  const filters = [
    "All experiences",
    "Educational",
    "Group travel",
    "Ecotourism",
    "Pilgrimage",
  ]
  const [activeFilter, setActiveFilter] = useState(filters[0])
  const filteredExperiences =
    activeFilter === filters[0]
      ? experienceCategories
      : experienceCategories.filter((item) => {
          const categoryTerms: Record<string, string> = {
            Educational: "Educational",
            "Group travel": "Group",
            Ecotourism: "Ecotourism",
            Pilgrimage: "Pilgrimage",
          }
          return item.title.includes(categoryTerms[activeFilter])
        })
  return (
    <>
      <PageHero
        eyebrow="TOURS & PACKAGES"
        title="Start with an idea. We’ll explore the possibilities together."
        copy="Choose a category below and enquire directly via WhatsApp. We'll discuss available options, dates, and pricing based on your requirements."
        image={images.nature}
      />
      <section className="section">
        <div className="container">
          <div className="filter-row">
            <span>Explore by category</span>
            {filters.map((item) => (
              <button
                className={activeFilter === item ? "is-active" : ""}
                key={item}
                onClick={() => setActiveFilter(item)}
                aria-pressed={activeFilter === item}
              >
                {item}
              </button>
            ))}
          </div>
          <div className="package-grid package-grid--large">
            {filteredExperiences.map((item) => (
              <PackageCard key={item.title} item={item} visible={true} />
            ))}
          </div>
          <div className="empty-info">
            <strong>Looking for dates, destinations, or pricing?</strong>
            <p>
              Pricing and availability depend on your group size, dates, and destination.
              Message us with your idea and we'll come back to you with options.
            </p>
            <WhatsAppLink>
              Request Current Details <ArrowRight size={18} />
            </WhatsAppLink>
          </div>
        </div>
      </section>
    </>
  )
}

export function Contact() {
  return (
    <>
      <PageHero
        eyebrow="CONTACT TAREK LOGISTICS"
        title="Tell us what you’re planning."
        copy="Whether you have a clear plan or just an idea, reach out and we'll take it from there — no commitment required."
      />
      <section className="section contact-section">
        <div className="container contact-grid">
          <div className="contact-aside">
            <Eyebrow>DIRECT CONTACT</Eyebrow>
            <h2>We're ready
            to help.</h2>
            <p>
              WhatsApp is fastest. Call or email us if you prefer.
              We aim to respond within a few hours on business days.
            </p>
            <a
              href={whatsappUrl(
                "Hello Tarek Travels and Logistics Limited, I would like to make an inquiry about your services.",
              )}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle />
              <span>
                <small>WhatsApp</small>
                <strong>{PHONE_DISPLAY}</strong>
              </span>
            </a>
            <a href={PHONE_LINK}>
              <Phone />
              <span>
                <small>Telephone</small>
                <strong>{PHONE_DISPLAY}</strong>
              </span>
            </a>
            <a href={`mailto:${EMAIL}`}>
              <span className="mail-symbol">@</span>
              <span>
                <small>Email</small>
                <strong>{EMAIL}</strong>
              </span>
            </a>
            <div className="contact-hours">
              <strong>Helpful details to include</strong>
              <p>
                Service required, preferred date, destination or venue, group
                size, and budget where applicable.
              </p>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  )
}

export function Privacy() {
  return (
    <>
      <PageHero
        eyebrow="PRIVACY"
        title="Privacy Policy"
        copy="How information shared through this website is handled."
      />
      <section className="section">
        <div className="container legal-copy">
          <h2>Information you choose to share</h2>
          <p>
            This website does not submit inquiry forms to a private database.
            The contact form prepares the details you enter in a WhatsApp
            message, which you review and send manually.
          </p>
          <h2>Contact information</h2>
          <p>
            If you contact Tarek Travels and Logistics Limited by phone, email, or WhatsApp,
            the information you provide is used to respond to your inquiry and
            discuss the requested service.
          </p>
          <h2>External services</h2>
          <p>
            WhatsApp and email links open third-party applications. Their own
            privacy policies apply when you use those services.
          </p>
          <h2>Questions</h2>
          <p>
            For privacy questions, email <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            .
          </p>
        </div>
      </section>
    </>
  )
}

export function NotFound() {
  return (
    <section className="not-found">
      <div>
        <span>404</span>
        <Eyebrow>PAGE NOT FOUND</Eyebrow>
        <h1>Page not found.</h1>
        <p>The page you're looking for may have moved. Head back home or contact us directly.</p>
        <Link className="button button--primary" to="/">
          Return Home <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  )
}
