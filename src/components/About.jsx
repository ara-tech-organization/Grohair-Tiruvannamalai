import { useState, useEffect, useRef } from 'react'
import {
  Stethoscope, FlaskConical, Users, Shield,
  ChevronDown, Target, Eye, Award, Zap, Star,
  Sparkles, Heart, CheckCircle,
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

import hairTxImg    from '../assets/treatments/hybrid-hair-transplant.jpg'
import qswitchImg   from '../assets/treatments/photo-carbon.png'
import skinPeelsImg from '../assets/treatments/chemical-peel.jpg'
import regenImg     from '../assets/treatments/regen-pro9-new.png'
import mesoImg      from '../assets/treatments/gcell.jpg'

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
      <section className="ab4-hero">

        <div className="container ab4-hero__body">

          {/* ── LEFT TEXT ── */}
          <div className="ab4-hero__left">
            <div className="ab4-hero__tag">
              <span className="ab4-hero__tag-dot" />
              About the Clinic
            </div>
            <h1 className="ab4-hero__title">
              Where <span>expertise</span><br />meets exceptional care.
            </h1>
            <div className="ab4-hero__rule" />
            <p className="ab4-hero__sub">
              Advanced GroHair &amp; GloSkin Tiruvannamalai unites two leading brands in hair
              and skin wellness — delivered by certified specialists in a calm, modern setting
              built for results that last.
            </p>

            <div className="ab4-hero__checks">
              {[
                { label: 'Certified trichologists & dermatologists' },
                { label: 'Modern lasers & growth-factor systems' },
                { label: 'Personalized treatment plans' },
                { label: 'Premium, sterile clinical environment' },
              ].map(c => (
                <div key={c.label} className="ab4-hero__check">
                  <CheckCircle size={15} className="ab4-hero__check-icon" />
                  {c.label}
                </div>
              ))}
            </div>

            <div className="ab4-hero__actions">
              <button className="btn btn-primary" onClick={() => navigate('contact')}>Book Appointment</button>
              <button className="btn btn-secondary" onClick={() => navigate('services')}>Our Treatments</button>
            </div>

            <div className="ab4-hero__stats">
              {[
                { num:'1000+', label:'Happy Clients' },
                { num:'10+',   label:'Specialists' },
                { num:'99%',   label:'Satisfaction' },
                { num:'20+',   label:'Technologies' },
              ].map((s, i) => (
                <div key={s.label} className="ab4-hero__stat">
                  <div className="ab4-hero__stat-num">{s.num}</div>
                  <div className="ab4-hero__stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT IMAGE ── */}
          <div className="ab4-hero__right">
            {/* floating badge top-left */}
            <div className="ab4-hero__badge">
              <div className="ab4-hero__badge-icon"><Award size={18} /></div>
              <div>
                <div className="ab4-hero__badge-num">1000+</div>
                <div className="ab4-hero__badge-label">Happy clients</div>
              </div>
            </div>

            {/* main rotated image */}
            <div className="ab4-hero__frame">
              <img src={regenImg} alt="Regen Pro treatment" className="ab4-hero__img" />
              <div className="ab4-hero__img-overlay" />
            </div>

            {/* small secondary image bottom-right */}
            <div className="ab4-hero__sm">
              <img src={mesoImg} alt="Mesotherapy" />
              <span className="ab4-hero__sm-label">Mesotherapy</span>
            </div>

            {/* red accent circle */}
            <div className="ab4-hero__circle" aria-hidden="true" />
          </div>

        </div>
      </section>

      {/* ── OUR STORY ── */}
      <section className="section abt-story">
        <div className="container">
          <div className="text-center reveal" style={{ marginBottom: 52 }}>
            <p className="eyebrow">Our Story</p>
            <div className="gold-bar" />
            <h2 className="section-title">
              Two Trusted <span>Brands</span>.<br />One Exceptional Clinic.
            </h2>
            <p className="section-sub" style={{ maxWidth: 520, margin: '0 auto' }}>
              Advanced GroHair &amp; GloSkin Tiruvannamalai combines two leading names in hair
              and skin wellness under one roof — bringing world-class care to our community.
            </p>
          </div>

          <div className="abt-milestones">
            <div className="abt-milestone reveal d1">
              <div className="abt-milestone__icon"><Award size={24} /></div>
              <div className="abt-milestone__year">GroHair</div>
              <h3 className="abt-milestone__title">Hair Restoration Pioneer</h3>
              <p className="abt-milestone__text">Advanced GroHair began as a dedicated hair restoration clinic, pioneering FUE transplants and scalp therapies across Tamil Nadu with certified specialists.</p>
            </div>
            <div className="abt-milestone__divider" aria-hidden="true" />
            <div className="abt-milestone reveal d2">
              <div className="abt-milestone__icon"><Sparkles size={24} /></div>
              <div className="abt-milestone__year">GloSkin</div>
              <h3 className="abt-milestone__title">Skin Division Launch</h3>
              <p className="abt-milestone__text">GloSkin expanded the offering to a full spectrum of dermatological and cosmetic skin treatments — lasers, HydraFacials, peels, and more under one roof.</p>
            </div>
            <div className="abt-milestone__divider" aria-hidden="true" />
            <div className="abt-milestone reveal d3">
              <div className="abt-milestone__icon"><Heart size={24} /></div>
              <div className="abt-milestone__year">Today</div>
              <h3 className="abt-milestone__title">Tiruvannamalai Clinic</h3>
              <p className="abt-milestone__text">Now serving Tiruvannamalai with a premium, serene clinic — delivering world-class hair and skin wellness to the heart of our community.</p>
            </div>
          </div>

          <div className="abt-story__images reveal" style={{ marginTop: 56 }}>
            {[
              { img: mesoImg,      label: 'Mesotherapy' },
              { img: hairTxImg,    label: 'Hair Transplant' },
              { img: qswitchImg,   label: 'Q-Switch Laser' },
              { img: skinPeelsImg, label: 'Skin Peels' },
            ].map(item => (
              <div key={item.label} className="abt-story__img-item">
                <img src={item.img} alt={item.label} />
                <span className="abt-story__img-label">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY TRUSTED ── */}
      <section className="section section--alt">
        <div className="alt-ring" aria-hidden="true" />
        <div className="alt-ring2" aria-hidden="true" />
        <div className="alt-cross" aria-hidden="true" />
        <div className="container">
          <div className="text-center reveal" style={{ marginBottom: 48 }}>
            <p className="eyebrow">Why We're Trusted</p>
            <div className="gold-bar" style={{ margin: '0 auto 20px' }} />
            <h2 className="section-title">A Standard of Care, <span>Refined</span></h2>
            <p className="section-sub">
              Every detail of the Advanced GroHair &amp; GloSkin experience is designed
              for trust — from how we consult to how we deliver every result.
            </p>
          </div>
          <div className="wt-grid">
            {WHY_US.map((f, i) => (
              <div key={f.title} className={`wt-card reveal d${i + 1}`}>
                <div className="wt-card__img">
                  <img src={f.img} alt={f.title} />
                  <div className="wt-card__num">{String(i + 1).padStart(2, '0')}</div>
                </div>
                <div className="wt-card__body">
                  <div className="wt-card__icon"><f.Icon size={22} /></div>
                  <h3 className="wt-card__title">{f.title}</h3>
                  <p className="wt-card__desc">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MISSION + VISION ── */}
      <section className="section">
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

      {/* ── OUR NUMBERS ── */}
      <section className="abt-nums">
        <div className="container">
          <div className="abt-nums__head reveal">
            <p className="eyebrow">Our Numbers</p>
            <div className="gold-bar" style={{ margin: '0 auto 20px' }} />
            <h2 className="section-title">Results That <span>Speak</span> for Themselves</h2>
          </div>
          <div className="abt-nums__grid">
            {[
              { Icon: Users,       end: 1000, suffix: '+', label: 'Happy Clients',           sub: 'Across all treatments' },
              { Icon: Stethoscope, end: 10,   suffix: '+', label: 'Expert Specialists',       sub: 'Certified & experienced' },
              { Icon: Zap,         end: 20,   suffix: '+', label: 'Advanced Technologies',    sub: 'Modern clinical tools' },
              { Icon: Star,        end: 99,   suffix: '%', label: 'Client Satisfaction',      sub: 'Measured every visit' },
            ].map(({ Icon, end, suffix, label, sub }, i) => (
              <div key={label} className={`abt-nums__item reveal d${i + 1}`}>
                <div className="abt-nums__icon"><Icon size={20} /></div>
                <div className="abt-nums__num"><CountUp end={end} suffix={suffix} /></div>
                <div className="abt-nums__label">{label}</div>
                <div className="abt-nums__sub">{sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section">
        <div className="container">
          <div className="faq2-layout">

            <div className="faq2-header reveal-left">
              <p className="eyebrow">FAQs</p>
              <div className="gold-bar" />
              <h2 className="section-title">Questions,<br /><span>Answered</span></h2>
              <p className="section-sub" style={{ marginBottom: 32 }}>
                A few things our clients in Tiruvannamalai often ask before their first visit.
              </p>
              <div className="faq2-pills">
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
            </div>

            <div className="faq2-content reveal-right">
              {faqTab === 'hair' ? <FAQ items={HAIR_FAQS} /> : <FAQ items={SKIN_FAQS} />}
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
