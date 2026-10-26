import { FormEvent, ReactNode, useEffect, useState } from "react"
import { Link, NavLink, Outlet, useLocation } from "react-router"
import {
  ArrowRight,
  CalendarDays,
  Check,
  ChevronDown,
  Mail,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react"
import { EMAIL, PHONE_DISPLAY, PHONE_LINK, services, whatsappUrl } from "./data"

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link
      to="/"
      className={`logo ${light ? "logo--light" : ""}`}
      aria-label="Tarek Travels and Logistics Limited home"
    >
      <img
        src="/logo.jpeg"
        alt="Tarek Travels and Logistics Limited"
        className="logo-img"
      />
    </Link>
  )
}

export function WhatsAppLink({
  children,
  message = "Hello Tarek Logistics Limited, I would like to make an inquiry about your services.",
  className = "button button--primary",
}: {
  children: ReactNode
  message?: string
  className?: string
}) {
  return (
    <a
      href={whatsappUrl(message)}
      target="_blank"
      rel="noreferrer"
      className={className}
    >
      {children}
    </a>
  )
}

const nav = [
  ["/", "Home"],
  ["/services", "Our Services"],
  ["/tours", "Tours & Packages"],
  ["/about", "About Us"],
  ["/contact", "Contact"],
]

export function Header() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => setOpen(false), [location.pathname])

  return (
    <header className="site-header">
      <div className="header-inner">
        {/* Logo — always on white, fully visible */}
        <Logo />
        {/* Nav — centered */}
        <nav className="desktop-nav" aria-label="Main navigation">
          {nav.map(([to, label]) => (
            <NavLink key={to} to={to} end={to === "/"}>
              {label}
            </NavLink>
          ))}
        </nav>
        {/* Right side — phone + CTA */}
        <div className="header-right">
          <a href={PHONE_LINK} className="header-phone">
            <Phone size={15} />
            {PHONE_DISPLAY}
          </a>
          <WhatsAppLink
            message="Hello Tarek Logistics Limited, I would like to plan a journey."
            className="button button--primary header-cta"
          >
            Plan Your Journey <ArrowRight size={15} />
          </WhatsAppLink>
        </div>
        <button
          className={`menu-toggle${open ? " is-open" : ""}`}
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <span className="menu-toggle__bar" />
          <span className="menu-toggle__bar" />
          <span className="menu-toggle__bar" />
        </button>
      </div>
      <div id="mobile-menu" className={`mobile-menu${open ? " is-open" : ""}`} aria-hidden={!open}>
        <nav aria-label="Mobile navigation">
          {nav.map(([to, label], i) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              style={{ "--nav-i": i } as React.CSSProperties}
            >
              {label}
              <ArrowRight size={16} />
            </NavLink>
          ))}
          <WhatsAppLink message="Hello Tarek Logistics Limited, I would like to plan a journey.">
            <MessageCircle size={18} /> Plan Your Journey
          </WhatsAppLink>
        </nav>
      </div>
    </header>
  )
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Logo light />
          <p>
            Tarek Logistics Limited helps individuals, groups, and organisations
            plan travel, excursions, logistics, training, and events with a
            commitment to affordability and exceptional service.
          </p>
          <strong>Excellent and Exceptional Service.</strong>
        </div>
        <div>
          <h3>Explore</h3>
          {nav.slice(1).map(([to, label]) => (
            <Link key={to} to={to}>
              {label}
            </Link>
          ))}
          <Link to="/privacy">Privacy Policy</Link>
        </div>
        <div>
          <h3>Services</h3>
          {services.slice(0, 6).map((service) => (
            <Link key={service.slug} to={`/services/${service.slug}`}>
              {service.title}
            </Link>
          ))}
        </div>
        <div>
          <h3>Contact</h3>
          <a href={PHONE_LINK}>
            <Phone size={16} /> {PHONE_DISPLAY}
          </a>
          <a href={`mailto:${EMAIL}`}>
            <Mail size={16} /> {EMAIL}
          </a>
          <WhatsAppLink className="footer-whatsapp">
            <MessageCircle size={17} /> Chat on WhatsApp
          </WhatsAppLink>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 Tarek Logistics Limited. All rights reserved.</span>
        <span>Travel · Logistics · Training · Events</span>
      </div>
    </footer>
  )
}

export function Layout() {
  const location = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" })
    const path = location.pathname
    const service = path.startsWith("/services/")
      ? services.find((item) => path.endsWith(item.slug))
      : undefined
    const titles: Record<string, string> = {
      "/": "Tarek Logistics Limited | Travel, Tours & Event Planning",
      "/about": "About Us | Tarek Logistics Limited",
      "/services": "Travel, Logistics & Event Services | Tarek Logistics Limited",
      "/tours": "Tours & Packages | Tarek Logistics Limited",
      "/contact": "Contact Us | Tarek Logistics Limited",
      "/privacy": "Privacy Policy | Tarek Logistics Limited",
    }
    document.title = service
      ? `${service.title} | Tarek Logistics Limited`
      : titles[path] || "Page Not Found | Tarek Logistics Limited"
  }, [location.pathname])
  return (
    <>
      <Header />
      <main style={{ paddingTop: "76px" }}>
        <Outlet />
      </main>
      <Footer />
      <div className="mobile-contact-bar">
        <a href={PHONE_LINK}>
          <Phone size={19} /> Call
        </a>
        <WhatsAppLink className="">
          <MessageCircle size={19} /> WhatsApp
        </WhatsAppLink>
      </div>
    </>
  )
}

export function Eyebrow({
  children,
  light = false,
}: {
  children: ReactNode
  light?: boolean
}) {
  return (
    <p className={`eyebrow ${light ? "eyebrow--light" : ""}`}>
      <span />
      {children}
    </p>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  copy,
  centered = false,
}: {
  eyebrow?: string
  title: string
  copy?: string
  centered?: boolean
}) {
  return (
    <div
      className={`section-heading ${centered ? "section-heading--center" : ""}`}
    >
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2>{title}</h2>
      {copy && <p>{copy}</p>}
    </div>
  )
}

export function PageHero({
  eyebrow,
  title,
  copy,
  image,
}: {
  eyebrow: string
  title: string
  copy: string
  image?: string
}) {
  return (
    <section className={`page-hero ${image ? "page-hero--image" : ""}`}>
      {image && <img src={image} alt="" />}
      <div className="container page-hero__content">
        <Eyebrow light={!!image}>{eyebrow}</Eyebrow>
        <h1>{title}</h1>
        <p>{copy}</p>
      </div>
    </section>
  )
}

export function FinalCta() {
  return (
    <section className="final-cta">
      <div className="container final-cta__inner">
        <div>
          <Eyebrow light>LET'S START A CONVERSATION</Eyebrow>
          <h2>Your Next Great Experience Starts Here.</h2>
          <p>
            Whether you&apos;re planning an excursion, group vacation,
            pilgrimage, training programme, or important event, let&apos;s
            discuss how we can help.
          </p>
        </div>
        <div className="final-cta__actions">
          <WhatsAppLink className="button button--white">
            <MessageCircle size={18} /> Chat With Us on WhatsApp
          </WhatsAppLink>
          <a className="button button--outline-light" href={PHONE_LINK}>
            <Phone size={18} /> Call Our Team
          </a>
          <small>
            Tell us what you are planning. We will discuss your needs and help
            you explore the next steps.
          </small>
        </div>
      </div>
    </section>
  )
}

export function ContactForm() {
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [status, setStatus] =
    useState<"idle" | "loading" | "success" | "error">("idle")

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (status === "loading") return
    const form = new FormData(event.currentTarget)
    const next: Record<string, string> = {}
    if (!String(form.get("name") || "").trim())
      next.name = "Please enter your full name."
    if (!String(form.get("phone") || "").trim())
      next.phone = "Please enter a phone number."
    if (!String(form.get("service") || "").trim())
      next.service = "Please select a service."
    if (!String(form.get("message") || "").trim())
      next.message = "Please tell us what you are planning."
    setErrors(next)
    if (Object.keys(next).length) {
      setStatus("error")
      return
    }
    setStatus("loading")
    const fields = [
      ["Name", form.get("name")],
      ["Phone", form.get("phone")],
      ["Email", form.get("email")],
      ["Service", form.get("service")],
      ["Preferred date", form.get("date")],
      ["Destination / venue", form.get("destination")],
      ["Group size", form.get("groupSize")],
      ["Budget", form.get("budget")],
      ["Message", form.get("message")],
    ].filter(([, value]) => String(value || "").trim())
    const message = `Hello Tarek Logistics Limited, I would like to make an inquiry.\n\n${fields.map(([label, value]) => `${label}: ${value}`).join("\n")}`
    window.open(whatsappUrl(message), "_blank", "noopener,noreferrer")
    setStatus("success")
  }

  return (
    <form className="contact-form" onSubmit={submit} noValidate>
      <div className="form-intro">
        <h2>Tell us what you&apos;re planning.</h2>
        <p>
          Complete the form and we&apos;ll prepare your details in WhatsApp. You
          will review and send the message yourself.
        </p>
      </div>
      <div className="form-grid">
        <Field label="Full name" name="name" required error={errors.name} />
        <Field
          label="Phone number"
          name="phone"
          type="tel"
          required
          error={errors.phone}
        />
        <Field label="Email address (optional)" name="email" type="email" />
        <label className="field">
          Service required <span aria-hidden="true">*</span>
          <select name="service" aria-invalid={!!errors.service}>
            <option value="">Select a service</option>
            {services.map((service) => (
              <option key={service.slug}>{service.title}</option>
            ))}
          </select>
          {errors.service && (
            <small className="field-error">{errors.service}</small>
          )}
        </label>
        <Field label="Preferred date (optional)" name="date" type="date" />
        <Field label="Destination or venue (optional)" name="destination" />
        <Field label="Group size (optional)" name="groupSize" />
        <Field label="Budget (optional)" name="budget" />
        <label className="field field--full">
          Message <span aria-hidden="true">*</span>
          <textarea
            name="message"
            rows={5}
            placeholder="Share the key details of your trip, event, or programme."
            aria-invalid={!!errors.message}
          />
          {errors.message && (
            <small className="field-error">{errors.message}</small>
          )}
        </label>
      </div>
      <div className="privacy-note">
        <Check size={16} /> Your details are used only to prepare this inquiry.
        No message is sent until you confirm it in WhatsApp.
      </div>
      {status === "error" && (
        <p className="form-status form-status--error" role="alert">
          Please review the highlighted fields.
        </p>
      )}
      {status === "success" && (
        <p className="form-status form-status--success" role="status">
          Your inquiry is ready in WhatsApp. Please review it and tap send to
          deliver it.
        </p>
      )}
      <button
        className="button button--primary button--submit"
        type="submit"
        disabled={status === "loading"}
      >
        {status === "loading" ? (
          "Preparing inquiry…"
        ) : (
          <>
            <Send size={18} /> Continue to WhatsApp
          </>
        )}
      </button>
    </form>
  )
}

function Field({
  label,
  name,
  type = "text",
  required,
  error,
}: {
  label: string
  name: string
  type?: string
  required?: boolean
  error?: string
}) {
  return (
    <label className="field">
      {label} {required && <span aria-hidden="true">*</span>}
      <input name={name} type={type} aria-invalid={!!error} />
      {error && <small className="field-error">{error}</small>}
    </label>
  )
}

export function FaqList({ items }: { items: string[][] }) {
  const [open, setOpen] = useState(0)
  return (
    <div className="faq-list">
      {items.map(([question, answer], index) => (
        <div
          className={`faq-item ${open === index ? "is-open" : ""}`}
          key={question}
        >
          <button
            onClick={() => setOpen(open === index ? -1 : index)}
            aria-expanded={open === index}
          >
            <span>{question}</span>
            <ChevronDown size={20} />
          </button>
          <div className="faq-answer" aria-hidden={open !== index}>
            <p>{answer}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export function DateIcon() {
  return <CalendarDays />
}
