import { useEffect, useState, type ReactNode } from "react"
import mistakeScreen from "./Images/a-mistake.png"
import stepScreen from "./Images/a-step.png"
import timerScreen from "./Images/a-timer.png"
import andhraBhojanamImage from "./Images/andhra-bhojanam.jpg"
import appLogo from "./Images/app-logo.png"
import everydayLifeImage from "./Images/built-for-everyday-life.jpg"
import comingToKitchenImage from "./Images/coming-to-your-kitchen.png"
import findDishScreen from "./Images/find-your-dish.png"
import gonguraImage from "./Images/gongura-pachadi.jpg"
import guttiVankayaImage from "./Images/gutti-vankaya.jpg"
import homePageScreen from "./Images/home-page.png"
import idliSambarImage from "./Images/idli-sambar.jpg"
import karamDosaImage from "./Images/karam-dosa.jpg"
import kollamRangoli from "./Images/kollam-rangoli.png"
import nimmakayaPulihoraImage from "./Images/nimmakaya-pulihora.jpg"
import peruguAnnamImage from "./Images/perugu-annam.jpg"
import pesarattuImage from "./Images/Pesaratu.jpg"
import pindiVantaluImage from "./Images/Pindivantalu.jpg"
import pulihoraImage from "./Images/Pullihora.jpg"
import punuguluImage from "./Images/punugulu-recipe.jpg"
import rasamAnnamImage from "./Images/rasam-annam.jpg"
import startCookingScreen from "./Images/start-cooking.png"
import talkCookScreen from "./Images/talk-ask-and-cook.png"
import tomatoPappuImage from "./Images/tomato-pappu.jpg"
import vankayaPulusuImage from "./Images/vankaya-pulusu.jpg"
import verusenagaChutneyImage from "./Images/verusenaga-chutney.jpg"
import whyRuchiImage from "@/imports/why-ruchi-exists.jpg"

const images = {
  hero: "https://images.unsplash.com/photo-1743517894265-c86ab035adef?auto=format&fit=crop&w=1200&q=85",
  dosa: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=900&q=82",
  idli: "https://images.unsplash.com/photo-1787024231387-edccb8c44700?auto=format&fit=crop&w=900&q=82",
  thali:
    "https://images.unsplash.com/photo-1625398407796-82650a8c135f?auto=format&fit=crop&w=1000&q=84",
  feast:
    "https://images.unsplash.com/photo-1789993494855-1f89bb27fecb?auto=format&fit=crop&w=1000&q=84",
  family:
    "https://images.unsplash.com/photo-1683555500010-e2315045eef9?auto=format&fit=crop&w=1600&q=86",
  lifestyle:
    "https://images.unsplash.com/photo-1683555691492-5eed27dc7f61?auto=format&fit=crop&w=1000&q=82",
}

const navItems = [
  ["How it works", "how"],
  ["Pricing", "pricing"],
  ["Community", "community"],
  ["FAQ", "faq"],
]

function Icon({ name, size = 20 }: { name: string size?: number }) {
  const paths: Record<string, ReactNode> = {
    arrow: (
      <>
        <path d="M5 12h14" />
        <path d="m14 7 5 5-5 5" />
      </>
    ),
    mic: (
      <>
        <rect x="9" y="3" width="6" height="12" rx="3" />
        <path d="M5 11a7 7 0 0 0 14 0M12 18v3M9 21h6" />
      </>
    ),
    play: <path d="m9 7 8 5-8 5V7Z" />,
    menu: (
      <>
        <path d="M4 7h16M4 12h16M4 17h16" />
      </>
    ),
    close: (
      <>
        <path d="m6 6 12 12M18 6 6 18" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    pot: (
      <>
        <path d="M5 10h14l-1 9H6l-1-9Z" />
        <path d="M8 10V8h8v2M3 12h2m14 0h2" />
      </>
    ),
    spark: (
      <path d="m12 3 1.5 5.5L19 10l-5.5 1.5L12 17l-1.5-5.5L5 10l5.5-1.5L12 3Z" />
    ),
    leaf: (
      <>
        <path d="M19 4C10 4 5 9 5 16c5 1 12-2 14-12Z" />
        <path d="M5 19c2-5 6-8 11-11" />
      </>
    ),
    book: (
      <>
        <path d="M4 5c4-1 6 0 8 2v13c-2-2-4-3-8-2V5Z" />
        <path d="M20 5c-4-1-6 0-8 2v13c2-2 4-3 8-2V5Z" />
      </>
    ),
    heart: (
      <path d="M20 8c0 5-8 11-8 11S4 13 4 8a4 4 0 0 1 7-2 4 4 0 0 1 9 2Z" />
    ),
    chevron: <path d="m6 9 6 6 6-6" />,
    pause: (
      <>
        <path d="M9 8v8M15 8v8" />
      </>
    ),
    headphones: (
      <>
        <path d="M4 14v-2a8 8 0 0 1 16 0v2" />
        <path d="M4 14h3v6H5a1 1 0 0 1-1-1v-5Zm16 0h-3v6h2a1 1 0 0 0 1-1v-5Z" />
      </>
    ),
    users: (
      <>
        <circle cx="9" cy="8" r="3" />
        <path d="M3 20c0-4 2-6 6-6s6 2 6 6" />
        <path d="M16 5a3 3 0 0 1 0 6m1 4c3 0 4 2 4 5" />
      </>
    ),
  }
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[name]}
    </svg>
  )
}

function Button({
  children,
  href = "#download",
  secondary = false,
  onClick,
}: {
  children: ReactNode
  href?: string
  secondary?: boolean
  onClick?: () => void
}) {
  return (
    <a
      className={`button ${secondary ? "button-secondary" : ""}`}
      href={href}
      onClick={onClick}
    >
      {children}
      <Icon name="arrow" size={18} />
    </a>
  )
}

function AppLogo({ compact = false }: { compact?: boolean }) {
  return (
    <img
      className={compact ? "app-logo compact" : "app-logo"}
      src={appLogo}
      alt="Ruchi"
    />
  )
}

function Kolam({ className = "" }: { className?: string }) {
  return (
    <img
      className={`kolam ${className}`}
      src={kollamRangoli}
      alt=""
      aria-hidden="true"
    />
  )
}

function SectionHeading({
  eyebrow,
  title,
  copy,
  align = "center",
}: {
  eyebrow?: string
  title: ReactNode
  copy?: string
  align?: "center" | "left"
}) {
  return (
    <div
      className={`section-heading reveal ${
        align === "left" ? "align-left" : ""
      }`}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {copy && <p>{copy}</p>}
    </div>
  )
}

function Waveform({ small = false }: { small?: boolean }) {
  return (
    <div className={`waveform ${small ? "wave-small" : ""}`} aria-hidden="true">
      {[4, 9, 15, 22, 12, 26, 18, 8, 16, 5].map((height, index) => (
        <i
          key={index}
          style={
            {
              "--bar": `${height}px`,
              "--delay": `${index * 0.07}s`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  )
}

function HeroTimer() {
  const [remaining, setRemaining] = useState(105)

  useEffect(() => {
    const timer = window.setInterval(
      () => setRemaining((value) => (value <= 0 ? 105 : value - 1)),
      1000,
    )
    return () => window.clearInterval(timer)
  }, [])

  const minutes = Math.floor(remaining / 60)
  const seconds = String(remaining % 60).padStart(2, "0")

  return (
    <strong>
      {String(minutes).padStart(2, "0")}:{seconds}
    </strong>
  )
}

function PhoneMockup({
  variant = "cook",
  compact = false,
}: {
  variant?: "cook" | "discover" | "voice"
  compact?: boolean
}) {
  return (
    <div className={`phone ${compact ? "phone-compact" : ""}`}>
      <div className="phone-top">
        <span>9:41</span>
        <span className="phone-island" />
        <span>● ●</span>
      </div>
      <div className="phone-screen">
        <div className="app-bar">
          <AppLogo compact />
          <button aria-label="Saved recipes">
            <Icon name="heart" size={17} />
          </button>
        </div>
        {variant === "discover" ? (
          <>
            <p className="phone-kicker">GOOD EVENING</p>
            <h3>What shall we cook?</h3>
            <div className="search-pill">Search dishes or ingredients</div>
            <img src={images.dosa} alt="Dosa with chutneys" />
            <div className="phone-row">
              <strong>Pesarattu</strong>
              <span>30 min</span>
            </div>
            <p className="phone-muted">Andhra • Breakfast</p>
          </>
        ) : (
          <>
            <div className="recipe-mini">
              <img
                src={variant === "voice" ? images.thali : images.hero}
                alt=""
              />
              <div>
                <p>COOKING NOW</p>
                <strong>
                  {variant === "voice" ? "Tomato pappu" : "Masala dosa"}
                </strong>
              </div>
            </div>
            <div className="progress">
              <i />
            </div>
            <p className="phone-kicker">STEP 3 OF 7</p>
            <h3>
              {variant === "voice"
                ? "Add the cooked dal and simmer."
                : "Spread the batter in a thin circle."}
            </h3>
            <p className="phone-muted">
              Keep the flame at medium and drizzle a little oil around the
              edges.
            </p>
            <div className="timer">
              <Icon name="clock" />
              <div>
                <span>SMART TIMER</span>
                <strong>{variant === "voice" ? "04:12" : "01:45"}</strong>
              </div>
              <button aria-label="Pause timer">
                <Icon name="pause" size={17} />
              </button>
            </div>
            <div className="voice-orb">
              <Waveform />
              <span>Ruchi is listening</span>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

function HomeScreenPhone() {
  return (
    <div className="phone home-screen-phone">
      <img
        src={homePageScreen}
        alt="Ruchi app home screen with recipe search, quick actions, family recipes, and navigation"
      />
    </div>
  )
}

function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])
  return (
    <header className={`nav-wrap ${scrolled ? "scrolled" : ""}`}>
      <nav className="nav container" aria-label="Main navigation">
        <a className="logo" href="#top" aria-label="Ruchi home">
          <AppLogo />
        </a>
        <div className={`nav-links ${open ? "open" : ""}`}>
          {navItems.map(([label, id]) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <a
            className="mobile-download"
            href="#download"
            onClick={() => setOpen(false)}
          >
            Download app
          </a>
        </div>
        <a className="nav-cta" href="#download">
          Download app <Icon name="arrow" size={17} />
        </a>
        <button
          className="menu-button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <Icon name={open ? "close" : "menu"} />
        </button>
      </nav>
    </header>
  )
}

const problems = [
  [
    "play",
    "Pause. Rewind. Repeat.",
    "Recipe videos aren't designed for hands covered in atta.",
  ],
  [
    "spark",
    "No one to ask",
    "Small doubts can turn into a dinner-sized problem.",
  ],
  [
    "leaf",
    "What can I make?",
    "Good ingredients wait while inspiration runs out.",
  ],
  [
    "pot",
    "Too many things at once",
    "Timers, pans, and steps are easy to lose track of.",
  ],
]

const features = [
  [
    "mic",
    "Cook with your voice",
    "Move through every step without repeatedly touching your phone.",
    "voice",
  ],
  [
    "leaf",
    "Cook with what you have",
    "Turn what is already in your kitchen into something delicious.",
    "ingredients",
  ],
  [
    "clock",
    "Smart cooking timers",
    "Keep every tadka, simmer, and resting time on track.",
    "timer",
  ],
  [
    "spark",
    "Fix cooking mistakes",
    "Get calm, practical suggestions when a dish needs rescuing.",
    "fix",
  ],
  [
    "headphones",
    "Speak your language",
    "Switch naturally between Telugu and English as you cook.",
    "language",
  ],
]

function FeatureImageSlot({ title }: { title: string }) {
  return (
    <div
      className="feature-image-slot"
      role="img"
      aria-label={`${title} image or video placeholder`}
    >
      <span className="placeholder-label">IMAGE OR VIDEO</span>
      <strong>{title}</strong>
      <p>Place your feature media here</p>
      <small>Recommended: 16:9 landscape</small>
    </div>
  )
}

const conversations = [
  {
    tab: "A step",
    title: "A Step interface",
    image: stepScreen,
    user: "Ruchi, next enti?",
    answer: "Now add the onions and sauté until they turn soft.",
  },
  {
    tab: "A mistake",
    title: "A Mistake interface",
    image: mistakeScreen,
    user: "Ruchi, paneer overcook iyindhi",
    answer:
      "Parledu, let's see how we can fix it. Remove the unburnt pieces without scraping the pan.",
  },
  {
    tab: "A timer",
    title: "A Timer interface",
    image: timerScreen,
    user: "Remind me in five minutes.",
    answer: "Done. I'll let you know when your pappu is ready to check.",
  },
]

function DemoSection() {
  const [active, setActive] = useState(1)
  const item = conversations[active]
  return (
    <section className="section meet" id="demo">
      <Kolam className="meet-kolam" />
      <div className="container meet-grid">
        <div className="demo-stage reveal">
          <div className="phone-backdrop" />
          <div
            className="demo-image-frame"
            key={item.tab}
            role="img"
            aria-label={`${item.title} image placeholder`}
          >
            {item.image ? (
              <img src={item.image} alt={`${item.title} screen`} />
            ) : (
              <div className="demo-image-placeholder">
                <span className="placeholder-icon">
                  <Icon name="spark" size={28} />
                </span>
                <span className="placeholder-label">INTERFACE IMAGE</span>
                <strong>{item.title}</strong>
                <p>Replace this placeholder with your app screen</p>
                <small>Recommended: portrait PNG</small>
              </div>
            )}
            <div className="demo-caption demo-caption-user">{item.user}</div>
            <div className="demo-caption demo-caption-ruchi">
              <span>R</span>
              <p>{item.answer}</p>
            </div>
          </div>
        </div>
        <div className="meet-copy reveal">
          <span className="eyebrow">A CONVERSATION, NOT A CHECKLIST</span>
          <h2>Meet Ruchi. More than a recipe app.</h2>
          <p>
            Ask questions the way you would in your own kitchen. Ruchi remembers
            where you are in the recipe and responds with practical, contextual
            help.
          </p>
          <div
            className="demo-tabs"
            role="tablist"
            aria-label="Example conversations"
          >
            {conversations.map((conversation, index) => (
              <button
                key={conversation.tab}
                role="tab"
                aria-selected={active === index}
                onClick={() => setActive(index)}
              >
                {conversation.tab}
              </button>
            ))}
          </div>
          <div className="list-benefits">
            <span>
              <Icon name="check" /> Repeat or clarify any step
            </span>
            <span>
              <Icon name="check" /> Pause and manage timers by voice
            </span>
            <span>
              <Icon name="check" /> Get help without losing your place
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

function App() {
  useEffect(() => {
    document.documentElement.classList.add("reveal-ready")
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
            observer.unobserve(entry.target)
          }
        }),
      { threshold: 0.08, rootMargin: "0px 0px -10% 0px" },
    )
    const sections = document.querySelectorAll("main > section:not(.hero)")
    sections.forEach((section) => section.classList.add("section-reveal"))
    document
      .querySelectorAll(".reveal, .section-reveal")
      .forEach((element) => observer.observe(element))

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches
    const howSection = document.querySelector<HTMLElement>(".how")
    const howPhones =
      howSection?.querySelectorAll<HTMLElement>(".how-phone") ?? []
    const howKolam = howSection?.querySelector<HTMLElement>(".how-kolam")
    let parallaxFrame = 0

    const updateHowParallax = () => {
      parallaxFrame = 0
      if (!howSection || reducedMotion) return

      const rect = howSection.getBoundingClientRect()
      const progress = Math.max(
        0,
        Math.min(
          1,
          (window.innerHeight - rect.top) / (window.innerHeight + rect.height),
        ),
      )
      const distance = (progress - 0.5) * 2
      const directions = [1, -0.75, 0.9]

      howPhones.forEach((phone, index) => {
        phone.style.setProperty(
          "--how-parallax-y",
          `${distance * 34 * directions[index]}px`,
        )
      })
      howKolam?.style.setProperty("--how-kolam-y", `${distance * -45}px`)
    }

    const requestHowParallax = () => {
      if (!parallaxFrame) {
        parallaxFrame = window.requestAnimationFrame(updateHowParallax)
      }
    }

    if (!reducedMotion) {
      updateHowParallax()
      window.addEventListener("scroll", requestHowParallax, { passive: true })
      window.addEventListener("resize", requestHowParallax)
    }

    return () => {
      observer.disconnect()
      if (parallaxFrame) window.cancelAnimationFrame(parallaxFrame)
      window.removeEventListener("scroll", requestHowParallax)
      window.removeEventListener("resize", requestHowParallax)
      document.documentElement.classList.remove("reveal-ready")
    }
  }, [])

  return (
    <div id="top">
      <Navbar />
      <main>
        <section className="hero">
          <Kolam className="hero-kolam" />
          <div className="container hero-grid">
            <div className="hero-copy">
              <span className="eyebrow hero-in hero-1">
                YOUR AI COOKING COMPANION
              </span>
              <h1 className="hero-in hero-2">
                A little help in the kitchen.
                <br />
                <em>A feeling of home.</em>
              </h1>
              <p className="hero-in hero-3">
                Cook, talk, and create delicious meals with Ruchi — your
                conversational cooking companion for patient, step-by-step help
                in Telugu or English.
              </p>
              <div className="hero-actions hero-in hero-4">
                <Button>Download Ruchi</Button>
                <Button secondary href="#how">
                  See how it works
                </Button>
              </div>
              <div className="benefit-row hero-in hero-5">
                <span>
                  <Icon name="mic" /> Voice-guided
                </span>
                <span>అ + A Telugu & English</span>
                <span>
                  <Icon name="pot" /> Hands-free
                </span>
              </div>
            </div>
            <div className="hero-visual hero-in hero-phone">
              <div className="hero-photo">
                <img
                  src={images.hero}
                  alt="Freshly prepared dosa served with South Indian chutneys"
                />
                <span>Made for real Indian kitchens</span>
              </div>
              <HomeScreenPhone />
              <div className="floating-card float-timer">
                <Icon name="clock" />
                <div>
                  <span>DOSA TIMER</span>
                  <HeroTimer />
                </div>
              </div>
              <div className="floating-card float-voice">
                <span className="status-dot" />
                <span className="listening-label">LISTENING</span>
                <Waveform small />
              </div>
            </div>
          </div>
        </section>

        <section className="section problems">
          <div className="container">
            <SectionHeading
              eyebrow="A BETTER WAY TO COOK"
              title="Cooking shouldn't be complicated."
              copy="You shouldn't have to keep checking videos with messy hands, guess what comes next, or give up when something goes wrong."
            />
            <div className="problem-grid">
              {problems.map(([icon, title, copy], i) => (
                <article
                  className="problem-card reveal"
                  style={{ "--stagger": `${i * 90}ms` } as React.CSSProperties}
                  key={title}
                >
                  <span className="number">0{i + 1}</span>
                  <div className="line-icon">
                    <Icon name={icon} />
                  </div>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <DemoSection />

        <section className="section features" id="features" hidden>
          <div className="container">
            <SectionHeading
              eyebrow="COOK WITH CONFIDENCE"
              title="Everything you need, right when you need it."
              copy="Thoughtful assistance from the first idea to the final tempering."
            />
            <div className="feature-grid">
              {features.map(([, title, copy], i) => (
                <article
                  className={`feature-card stack-card reveal ${
                    i === features.length - 1 ? "last-card" : ""
                  }`}
                  style={
                    {
                      "--stack-index": i,
                      "--stack-offset": `${i * 8}px`,
                      "--stagger": `${i * 50}ms`,
                    } as React.CSSProperties
                  }
                  key={title}
                >
                  <div className="feature-copy">
                    <span className="feature-number">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3>{title}</h3>
                    <p>{copy}</p>
                  </div>
                  <FeatureImageSlot title={title} />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section how" id="how">
          <Kolam className="how-kolam" />
          <div className="container">
            <SectionHeading
              eyebrow="HOW IT WORKS"
              title="From craving to cooking, in three simple steps."
            />
            <div className="steps">
              {[
                [
                  "01",
                  "Find your dish.",
                  "Search a recipe or explore dishes using what you have.",
                  findDishScreen,
                ],
                [
                  "02",
                  "Start cooking.",
                  "Follow one calm, clear instruction at a time.",
                  startCookingScreen,
                ],
                [
                  "03",
                  "Talk, ask, and cook.",
                  "Clarify steps, pause, set timers, and ask for help.",
                  talkCookScreen,
                ],
              ].map(([num, title, copy, screen], i) => (
                <article
                  className="step reveal"
                  style={{ "--stagger": `${i * 120}ms` } as React.CSSProperties}
                  key={num}
                >
                  <div className="step-number">{num}</div>
                  <div className="how-phone">
                    <img src={screen} alt={`${title} Ruchi app screen`} />
                  </div>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section audiences">
          <div className="container">
            <SectionHeading
              eyebrow="BUILT FOR EVERYDAY LIFE"
              title="Made for real kitchens and real lives."
            />
            <div className="audience-grid">
              <div className="audience-image reveal">
                <img
                  src={everydayLifeImage}
                  alt="People preparing a meal together in a home kitchen"
                />
                <div>
                  <strong>Cooking feels easier with a little company.</strong>
                  <span>Patient help, at your pace.</span>
                </div>
              </div>
              <div className="audience-list">
                {[
                  [
                    "01",
                    "Students",
                    "Learn everyday cooking without the overwhelm.",
                  ],
                  [
                    "02",
                    "Busy professionals",
                    "Get dinner moving while you multitask.",
                  ],
                  [
                    "03",
                    "New cooks",
                    "Ask every small question without hesitation.",
                  ],
                  [
                    "04",
                    "Hands-free cooks",
                    "Keep messy hands away from the screen.",
                  ],
                  [
                    "05",
                    "Families",
                    "Preserve recipes in the words you remember.",
                  ],
                ].map(([num, title, copy], i) => (
                  <div
                    className="audience-item reveal"
                    style={
                      { "--stagger": `${i * 70}ms` } as React.CSSProperties
                    }
                    key={title}
                  >
                    <span>{num}</span>
                    <div>
                      <h3>{title}</h3>
                      <p>{copy}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section pricing" id="pricing">
          <div className="container">
            <SectionHeading
              eyebrow="SIMPLE, HONEST PLANS"
              title="Choose a plan that fits your kitchen."
              copy="Pricing and final plan entitlements are coming soon. Join the early access list to be the first to know."
            />
            <div className="pricing-grid">
              {[
                [
                  "Free",
                  "Explore the core Ruchi experience.",
                  [
                    "Core recipe discovery",
                    "Guided cooking basics",
                    "Telugu & English",
                  ],
                  "Try Ruchi",
                  false,
                ],
                [
                  "Ruchi Plus",
                  "For regular cooks who want more assistance.",
                  [
                    "Expanded cooking guidance",
                    "More saved recipes",
                    "Mistake recovery help",
                  ],
                  "Join early access",
                  true,
                ],
                [
                  "Ruchi Family",
                  "For households cooking and saving together.",
                  [
                    "Shared family collection",
                    "Recipe notes & memories",
                    "Household profiles",
                  ],
                  "Join early access",
                  false,
                ],
              ].map(([name, desc, list, cta, popular]) => (
                <article
                  className={`price-card reveal ${popular ? "popular" : ""}`}
                  key={name as string}
                >
                  {popular && (
                    <span className="popular-label">MOST POPULAR</span>
                  )}
                  <h3>{name}</h3>
                  <p>{desc}</p>
                  <div className="price-placeholder">
                    <strong>Coming soon</strong>
                    <span>Final pricing to be announced</span>
                  </div>
                  <ul>
                    {(list as string[]).map((item) => (
                      <li key={item}>
                        <Icon name="check" size={17} />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Button secondary={!popular}>{cta}</Button>
                </article>
              ))}
            </div>
            <p className="pricing-note">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </p>
          </div>
        </section>

        <section className="story">
          <div className="story-image reveal">
            <img
              src={whyRuchiImage}
              alt="Family members preparing food together in a warm home kitchen"
            />
          </div>
          <div className="story-copy reveal">
            <Kolam />
            <span className="eyebrow">WHY RUCHI EXISTS</span>
            <h2>More than food. It's family, culture, and memories.</h2>
            <p>
              Every kitchen has its own stories, little traditions, and recipes
              passed from one generation to the next. Ruchi helps you explore
              new dishes and preserve the flavours and memories that make
              cooking personal.
            </p>
            <blockquote>
              “A pinch” and “until it smells right” are part of the recipe too.
            </blockquote>
          </div>
        </section>

        <RecipeDiscovery />

        <Faq />

        <section className="download" id="download">
          <Kolam className="download-kolam left" />
          <Kolam className="download-kolam right" />
          <div className="download-food reveal">
            <img
              src={comingToKitchenImage}
              alt="A warm Telugu food composition for Ruchi"
            />
          </div>
          <div className="download-copy reveal">
            <span className="eyebrow">COMING TO YOUR KITCHEN</span>
            <h2>Your next favourite dish starts with a conversation.</h2>
            <p>
              Bring a little more confidence, creativity, and joy to your
              everyday cooking.
            </p>
            <a
              className="button light-button"
              href="mailto:hello@ruchi.app?subject=Ruchi%20early%20access"
            >
              Join the early access list <Icon name="arrow" size={18} />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

const recipes = [
  [
    pesarattuImage,
    "Pesarattu",
    "Andhra • Breakfast",
    "Crisp green gram crepes",
  ],
  [pulihoraImage, "Pulihora", "Telugu • Festive", "Tangy tamarind rice"],
  [
    gonguraImage,
    "Gongura Pachadi",
    "Andhra • Classic",
    "Bold, leafy, and bright",
  ],
  [
    pindiVantaluImage,
    "Pindi Vantalu",
    "South Indian • Traditional",
    "Made slowly, shared warmly",
  ],
  [
    guttiVankayaImage,
    "Gutti Vankaya",
    "Andhra • Curry",
    "Stuffed brinjal in a rich masala",
  ],
  [
    tomatoPappuImage,
    "Tomato Pappu",
    "Telugu • Comfort",
    "Homely dal with a bright tempering",
  ],
  [
    karamDosaImage,
    "Karam Dosa",
    "Andhra • Tiffin",
    "Crisp dosa with a fiery red chutney",
  ],
  [
    andhraBhojanamImage,
    "Andhra Bhojanam",
    "Andhra • Lunch",
    "A generous everyday meal with rice",
  ],
  [
    idliSambarImage,
    "Idli Sambar",
    "South Indian • Breakfast",
    "Soft idlis with warm, comforting sambar",
  ],
  [
    nimmakayaPulihoraImage,
    "Nimmakaya Pulihora",
    "Andhra • Rice",
    "Bright lemon rice with a fragrant tempering",
  ],
  [
    rasamAnnamImage,
    "Rasam Annam",
    "Telugu • Comfort",
    "Peppery rasam folded through hot rice",
  ],
  [
    vankayaPulusuImage,
    "Vankaya Pulusu",
    "Andhra • Curry",
    "Tender brinjal in a tangy tamarind gravy",
  ],
  [
    verusenagaChutneyImage,
    "Verusenaga Chutney",
    "Telugu • Chutney",
    "Creamy peanut chutney for hot tiffins",
  ],
  [
    "https://images.unsplash.com/photo-1743517894265-c86ab035adef?auto=format&fit=crop&w=900&q=82",
    "Masala Dosa",
    "South Indian • Tiffin",
    "Golden dosa with a spiced potato filling",
  ],
  [
    peruguAnnamImage,
    "Perugu Annam",
    "Telugu • Comfort",
    "Cooling curd rice for the end of a meal",
  ],
  [
    punuguluImage,
    "Punugulu",
    "Andhra • Snack",
    "Crisp, fluffy bites served with chutney",
  ],
]

function RecipeDiscovery() {
  return (
    <section className="section community" id="community">
      <div className="container">
        <SectionHeading
          eyebrow="RECIPE DISCOVERY"
          title="Discover something delicious."
          copy="A thoughtful mix of Telugu favourites and everyday South Indian comfort food."
        />
        <div className="recipe-viewport reveal">
          <div className="recipe-grid">
            {[...recipes, ...recipes].map(
              ([image, title, category, copy], i) => {
                const duplicate = i >= recipes.length
                return (
                  <article
                    className="recipe-card"
                    style={
                      {
                        "--card-order": i % recipes.length,
                      } as React.CSSProperties
                    }
                    aria-hidden={duplicate}
                    key={`${title}-${i}`}
                  >
                    <div className="recipe-image">
                      <img
                        src={image}
                        alt={`${title}, ${copy}`}
                        loading="lazy"
                      />
                    </div>
                    <span>{category}</span>
                    <h3>{title}</h3>
                    <p>{copy}</p>
                    <a href="#download" tabIndex={duplicate ? -1 : 0}>
                      Explore with Ruchi <Icon name="arrow" size={16} />
                    </a>
                  </article>
                )
              },
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

const faqItems = [
  [
    "Is Ruchi free to use?",
    "Ruchi will include a free way to explore the core experience. Final limits and paid plan details will be published before launch.",
  ],
  [
    "Does Ruchi support Telugu?",
    "Yes. Ruchi is designed for natural cooking guidance in Telugu and English.",
  ],
  [
    "Do I need to know how to cook?",
    "Not at all. Ruchi breaks recipes into clear steps and lets you ask for clarification whenever you need it.",
  ],
  [
    "Can I use Ruchi while my hands are busy?",
    "Voice-guided cooking is central to Ruchi, so you can move through steps and manage timers with less screen touching.",
  ],
  [
    "What happens if I make a cooking mistake?",
    "Ruchi can suggest practical ways to recover from common issues such as a dish being too salty, spicy, watery, bland, or slightly burnt.",
  ],
  [
    "Is Ruchi available for Android and iOS?",
    "Platform availability is still being confirmed. Join early access for verified launch updates.",
  ],
  [
    "What is included in the paid plans?",
    "Paid plan entitlements are still being finalised. The pricing section is intentionally labelled as a preview.",
  ],
  [
    "Can I cancel my subscription?",
    "Cancellation terms will be published with the final subscription policy before paid plans launch.",
  ],
]

function Faq() {
  const [open, setOpen] = useState(0)
  return (
    <section className="section faq" id="faq">
      <div className="container faq-grid">
        <SectionHeading
          eyebrow="COMMON QUESTIONS"
          title="Got questions? Let's clear them up."
          copy="Everything we can confirm today, without the fine-print fog."
          align="left"
        />
        <div className="faq-list">
          {faqItems.map(([question, answer], index) => (
            <article
              className={`faq-item ${open === index ? "open" : ""}`}
              key={question}
            >
              <button
                type="button"
                aria-expanded={open === index}
                aria-controls={`faq-answer-${index}`}
                onClick={() => setOpen(open === index ? -1 : index)}
              >
                <span>{question}</span>
                <Icon name="chevron" />
              </button>
              <div
                className="faq-answer"
                id={`faq-answer-${index}`}
                aria-hidden={open !== index}
              >
                <p>{answer}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer>
      <div className="container footer-grid">
        <div className="footer-brand">
          <a className="logo" href="#top" aria-label="Ruchi home">
            <AppLogo />
          </a>
          <p>
            A conversational cooking companion for real kitchens, familiar
            flavours, and everyday confidence.
          </p>
        </div>
        <div>
          <strong>Product</strong>
          <a href="#how">How it works</a>
          <a href="#pricing">Pricing</a>
        </div>
        <div>
          <strong>Explore</strong>
          <a href="#demo">Voice demo</a>
          <a href="#faq">FAQ</a>
        </div>
        <div>
          <strong>Contact</strong>
          <a href="mailto:hello@ruchi.app">hello@ruchi.app</a>
          <span>Privacy — coming soon</span>
          <span>Terms — coming soon</span>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 Ruchi. Built with care.</span>
      </div>
    </footer>
  )
}

export default App
