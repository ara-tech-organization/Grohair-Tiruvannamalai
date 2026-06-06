import { useState, useEffect, useRef } from 'react'
import {
  Stethoscope, FlaskConical, Users, Shield,
  ChevronDown, Target, Eye, CheckCircle, Award, Zap, Star,
} from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

function CountUp({ end, suffix = '' }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true
        let start = 0
        const step = Math.ceil(end / 60)
        const t = setInterval(() => {
          start += step
          if (start >= end) { setCount(end); clearInterval(t) }
          else setCount(start)
        }, 24)
      }
    }, { threshold: 0.5 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [end])
  return <span ref={ref}>{count}{suffix}</span>
}
import hairTxImg    from '../assets/treatments/basic-hair-transplant-fue.webp'
import qswitchImg   from '../assets/treatments/q-switched-lasers.webp'
import skinPeelsImg from '../assets/treatments/skin-peels.webp'
import regenImg     from '../assets/treatments/regenpro9.webp'
import mesoImg      from '../assets/treatments/mesotherapy.webp'

const WHY_US = [
  {
    Icon: Stethoscope,
    img: hairTxImg,
    title: 'Certified Specialists',
    desc: 'Trichologists, dermatologists, and cosmetic experts trained on modern techniques and refreshed continuously.',
  },
  {
    Icon: FlaskConical,
    img: qswitchImg,
    title: 'Modern Equipment',
    desc: 'Lasers, growth-factor systems, and HydraFacial technology — sterilized, calibrated, and operated by trained staff.',
  },
  {
    Icon: Users,
    img: skinPeelsImg,
    title: 'Personalized Plans',
    desc: 'We start with a detailed consult and tailor treatment to your hair type, skin condition, and lifestyle.',
  },
  {
    Icon: Shield,
    img: regenImg,
    title: 'Safe & Sterile',
    desc: 'Strict clinical protocols and a serene, premium space designed to feel calm from the moment you walk in.',
  },
]

const HAIR_FAQS = [
  {
    q: 'How long does a hair transplant procedure take?',
    a: 'Most sessions take 6–8 hours depending on the number of grafts. We pace the day with breaks and a quiet recovery space designed for comfort.',
  },
  {
    q: 'When will I see hair regrowth after treatment?',
    a: 'Initial shedding occurs in the first 2–4 weeks, followed by visible regrowth from month 3 onwards. Full density is typically seen between 9–12 months.',
  },
  {
    q: 'Is PRP painful?',
    a: 'PRP involves fine injections using a numbing cream beforehand. Most clients describe a mild pinching sensation — discomfort is minimal and short-lived.',
  },
  {
    q: 'How many Mesotherapy sessions are needed?',
    a: 'A standard course involves 6–8 sessions spaced 2–3 weeks apart, followed by maintenance sessions every 3–4 months.',
  },
  {
    q: 'Are hair transplant results permanent?',
    a: 'Yes. Transplanted follicles are taken from DHT-resistant zones and retain that resistance in their new location, giving you permanent, natural-looking results.',
  },
  {
    q: 'Do I need to shave my head before a transplant?',
    a: 'For FUE transplants, the donor area is trimmed short, but surrounding hair can cover it. We discuss the best approach during your consultation.',
  },
]

const SKIN_FAQS = [
  {
    q: 'How is a HydraFacial different from a regular facial?',
    a: 'HydraFacial uses a multi-step medical-grade system that cleanses, exfoliates, and infuses serums in one session — no scrubbing, immediate glow.',
  },
  {
    q: 'Are laser treatments safe for Indian skin?',
    a: 'Yes. Our lasers are calibrated specifically for Fitzpatrick skin types IV–VI, the most common in South India, ensuring safe, effective outcomes.',
  },
  {
    q: 'How many Q-Switch Laser sessions are needed for pigmentation?',
    a: 'Most pigmentation concerns resolve within 4–6 sessions, spaced 3–4 weeks apart. Deeper conditions like melasma may need 8+ sessions.',
  },
  {
    q: 'Is downtime needed after a Cosmelan Peel?',
    a: 'Expect 5–7 days of peeling and redness. We provide a full at-home care kit and schedule a follow-up to monitor your skin through the recovery.',
  },
  {
    q: 'How long do HydraFacial results last?',
    a: 'Immediate glow lasts 5–7 days, with cumulative improvements building over monthly sessions. Most clients notice transformative changes after 4 sessions.',
  },
  {
    q: 'Can I combine multiple skin treatments?',
    a: 'Absolutely. Our dermatologists design multi-treatment protocols — for example, Q-Switch + HydraFacial + Cosmelan Peel — sequenced safely for maximum results.',
  },
]

function FAQ({ items }) {
  const [open, setOpen] = useState(null)

  return (
    <div className="faq2-list">
      {items.map((item, i) => (
        <div key={i} className={`faq2-item${open === i ? ' open' : ''}`}>
          <button className="faq2-q" onClick={() => setOpen(open === i ? null : i)}>
            <div className="faq2-num">{String(i + 1).padStart(2, '0')}</div>
            <span className="faq2-q-text">{item.q}</span>
            <ChevronDown size={18} className="faq2-chevron" />
          </button>
          <div className="faq2-ans">
            <div className="faq2-ans-inner">{item.a}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default function About({ navigate }) {
  useScrollReveal()
  const [faqTab, setFaqTab] = useState('hair')

  return (
    <main>

      {/* ── PAGE HERO ── */}
      <section className="ab3-hero">
        <div className="ab3-hero__scan" aria-hidden="true" />
        <div className="container ab3-hero__body">

          {/* left: text */}
          <div className="ab3-hero__left">
            <span className="ab3-hero__eyebrow">
              <Star size={10} fill="currentColor" /> About the Clinic
            </span>
            <h1 className="ab3-hero__title">
              Where <span>expertise</span><br />meets exceptional care.
            </h1>
            <p className="ab3-hero__sub">
              Advanced GroHair &amp; GloSkin Tiruvannamalai unites two leading brands in hair
              and skin wellness — delivered by certified specialists in a calm, modern setting
              designed for results that last.
            </p>
            <div className="ab3-hero__checks">
              {[
                'Certified trichologists & dermatologists',
                'Modern lasers & growth-factor systems',
                'Personalized treatment plans',
                'Premium, sterile clinical environment',
              ].map(c => (
                <div key={c} className="ab3-hero__check">
                  <span className="ab3-hero__check-dot" />
                  {c}
                </div>
              ))}
            </div>
            <div className="ab3-hero__actions">
              <button className="btn btn-primary" onClick={() => navigate('contact')}>Book Appointment</button>
              <button className="btn btn-outline" onClick={() => navigate('services')}>Our Treatments</button>
            </div>
            <div className="ab3-hero__stats">
              {[
                { num:'1000+', label:'Happy clients' },
                { num:'10+',   label:'Specialists' },
                { num:'99%',   label:'Satisfaction' },
                { num:'20+',   label:'Technologies' },
              ].map(s => (
                <div key={s.label}>
                  <div className="ab3-hero__stat-num">{s.num}</div>
                  <div className="ab3-hero__stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* right: staggered images */}
          <div className="ab3-hero__right">
            <div className="ab3-hero__img-main">
              <img src={regenImg} alt="Regen Pro treatment" />
              <div className="ab3-hero__img-lbl">Regen Pro 9</div>
            </div>
            <div className="ab3-hero__img-b">
              <img src={hairTxImg} alt="Hair transplant" />
              <div className="ab3-hero__img-lbl">Hair Transplant</div>
            </div>
            <div className="ab3-hero__img-c">
              <img src={skinPeelsImg} alt="Skin peels" />
              <div className="ab3-hero__img-lbl">Skin Peels</div>
            </div>
            <div className="ab3-hero__award">
              <div className="ab3-hero__award-icon"><Award size={18} /></div>
              <div>
                <div className="ab3-hero__award-num">1000+</div>
                <div className="ab3-hero__award-label">Happy clients</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── CLINIC INTRO ── */}
      <section className="section">
        <div className="container">
          <div className="clinic-split">
            <div className="ab-img-collage reveal-left">
              <div className="ab-img-main">
                <img src={mesoImg} alt="Advanced GroHair & GloSkin clinic" className="ab-img" />
              </div>
              <div className="ab-img-side">
                <div className="ab-img-sm">
                  <img src={hairTxImg} alt="Hair transplant" className="ab-img" />
                  <span className="ab-img-tag">Hair Transplant</span>
                </div>
                <div className="ab-img-sm">
                  <img src={skinPeelsImg} alt="Skin treatment" className="ab-img" />
                  <span className="ab-img-tag">Skin Care</span>
                </div>
              </div>
              <div className="ab-img-badge">
                <div className="ab-img-badge-icon"><Award size={18} /></div>
                <div>
                  <strong className="ab-img-badge-num">1000+</strong>
                  <span className="ab-img-badge-label">Happy clients</span>
                </div>
              </div>
            </div>

            <div className="reveal-right">
              <p className="eyebrow">Our Story</p>
              <div className="gold-bar" />
              <h2 className="section-title">
                Two Trusted <span>Brands</span>.<br />One Exceptional Clinic.
              </h2>
              <p className="section-sub" style={{ marginBottom: 18 }}>
                Advanced GroHair &amp; GloSkin Tiruvannamalai combines two leading names in
                hair and skin wellness under one roof — bringing world-class care to the
                heart of Tiruvannamalai.
              </p>
              <p className="section-sub" style={{ marginBottom: 32 }}>
                Our clinic blends clinical precision with a luxurious, considered patient
                experience. Every treatment is delivered by certified specialists who listen
                first, plan carefully, and act with integrity — in a serene, premium space
                built for your comfort and confidence.
              </p>
              <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
                <button className="btn btn-primary" onClick={() => navigate('contact')}>
                  Book Appointment
                </button>
                <button className="btn btn-secondary" onClick={() => navigate('services')}>
                  Explore Treatments
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MISSION + VISION ── */}
      <section className="section section--alt">
        <div className="container">
          <div className="text-center reveal" style={{ marginBottom: 52 }}>
            <p className="eyebrow">Our Purpose</p>
            <div className="gold-bar" />
            <h2 className="section-title">Mission &amp; <span>Vision</span></h2>
          </div>

          <div className="mv-grid">
            <div className="mv-card mv-card--mission reveal-left">
              <div className="mv-card__icon"><Target size={26} /></div>
              <p className="mv-card__tag">Our Mission</p>
              <h3 className="mv-card__title">Care That's Truly Accessible</h3>
              <p className="mv-card__text">
                To make world-class hair and skin care effortlessly accessible in
                Tiruvannamalai — combining clinical precision with a calm, considered
                patient experience where every client feels heard, valued, and well cared for.
              </p>
            </div>

            <div className="mv-card mv-card--vision reveal-right">
              <div className="mv-card__icon"><Eye size={26} /></div>
              <p className="mv-card__tag">Our Vision</p>
              <h3 className="mv-card__title">A Clinic for Life</h3>
              <p className="mv-card__text">
                A clinic that people return to for life — known for honest assessments,
                refined results, and an unwavering commitment to safety and aesthetics.
                We exist to build lasting trust, not just deliver single treatments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="section">
        <div className="container">
          <div className="text-center reveal" style={{ marginBottom: 52 }}>
            <p className="eyebrow">Why choose us</p>
            <div className="gold-bar" />
            <h2 className="section-title">A Standard of Care, <span>Refined</span></h2>
            <p className="section-sub">
              Every detail of the Advanced GroHair &amp; GloSkin experience is designed
              for trust — from how we consult to how we deliver every result.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 24 }}>
            {WHY_US.map((f, i) => (
              <div key={f.title} className={`feature-card feature-card--img reveal d${i + 1}`}>
                <div className="feature-card__img-wrap">
                  <img src={f.img} alt={f.title} className="feature-card__img" />
                </div>
                <div className="feature-card__body">
                  <div className="feature-icon"><f.Icon size={24} /></div>
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section section--alt">
        <div className="container">

          {/* Heading */}
          <div className="text-center reveal" style={{ marginBottom: 40 }}>
            <p className="eyebrow">FAQs</p>
            <div className="gold-bar" />
            <h2 className="section-title">Questions, <span>Answered</span></h2>
            <p className="section-sub">
              A few things our clients in Tiruvannamalai often ask before their first visit.
            </p>
          </div>

          {/* Category pills — centered */}
          <div className="faq2-pills reveal" style={{ marginBottom: 40 }}>
            <button
              className={`faq2-pill${faqTab === 'hair' ? ' active' : ''}`}
              onClick={() => setFaqTab('hair')}
            >
              ✦ Hair Treatments
            </button>
            <button
              className={`faq2-pill${faqTab === 'skin' ? ' active' : ''}`}
              onClick={() => setFaqTab('skin')}
            >
              ✦ Skin Treatments
            </button>
          </div>

          {/* Accordion — two columns */}
          <div className="faq2-grid reveal">
            {faqTab === 'hair' ? <FAQ items={HAIR_FAQS} /> : <FAQ items={SKIN_FAQS} />}
          </div>

        </div>
      </section>

      {/* ── STATS ── */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-layout">

            {/* Left — content */}
            <div className="reveal-left">
              <p className="eyebrow">Our numbers</p>
              <div className="gold-bar" />
              <h2 className="section-title">
                Results That<br />Speak for Themselves
              </h2>
              <p className="section-sub" style={{ marginBottom: 32 }}>
                Every number reflects a real client, a real result, and a commitment
                to excellence that we carry into every treatment at our Tiruvannamalai clinic.
              </p>
              <button className="btn btn-primary" onClick={() => navigate('contact')}>
                Book a Consultation
              </button>
            </div>

            {/* Right — 2×2 stat cards */}
            <div className="stats-cards">
              <div className="stat-item reveal d1">
                <div className="stat-icon"><Users size={22} /></div>
                <div className="stat-num"><CountUp end={1000} suffix="+" /></div>
                <div className="stat-label">Happy Clients</div>
              </div>
              <div className="stat-item reveal d2">
                <div className="stat-icon"><Stethoscope size={22} /></div>
                <div className="stat-num"><CountUp end={10} suffix="+" /></div>
                <div className="stat-label">Experienced Specialists</div>
              </div>
              <div className="stat-item reveal d3">
                <div className="stat-icon"><Zap size={22} /></div>
                <div className="stat-num"><CountUp end={20} suffix="+" /></div>
                <div className="stat-label">Advanced Technologies</div>
              </div>
              <div className="stat-item reveal d4">
                <div className="stat-icon"><Star size={22} /></div>
                <div className="stat-num"><CountUp end={99} suffix="%" /></div>
                <div className="stat-label">Client Satisfaction</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="home-cta">
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="reveal">
            <p className="home-cta__eyebrow">Ready to begin your transformation?</p>
            <div className="gold-bar" style={{ margin: '0 auto 22px' }} />
            <h2 className="home-cta__title">
              Book a private consultation with our<br />specialists at our Tiruvannamalai clinic.
            </h2>
            <div className="home-cta__actions" style={{ marginTop: 36 }}>
              <button className="btn btn-gold" onClick={() => navigate('contact')}>
                Book Appointment
              </button>
              <button className="btn btn-secondary" onClick={() => navigate('services')}>
                Explore Treatments
              </button>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}
