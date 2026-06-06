import { useRef, useEffect, useState } from 'react'
import {
  Shield, Award, Stethoscope, Star, ChevronRight,
  Users, FlaskConical, Sparkles, CheckCircle, Zap,
} from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

import heroBg         from '../assets/treatments/hero.webp'
import skinPeelsImg   from '../assets/treatments/skin-peels.webp'
import qswitchImg     from '../assets/treatments/q-switched-lasers.webp'
import hydrafacialImg from '../assets/treatments/hydrafacial.webp'
import hairTxImg      from '../assets/treatments/basic-hair-transplant-fue.webp'
import mesoImg        from '../assets/treatments/mesotherapy.webp'
import stemXImg       from '../assets/treatments/stem-x-pro.webp'
import prpImg         from '../assets/treatments/prp.webp'

const FEATURES = [
  {
    Icon: Stethoscope,
    img: mesoImg,
    title: 'Experienced Doctors',
    desc: 'Certified trichologists, dermatologists, and cosmetic specialists with decades of combined practice.',
  },
  {
    Icon: Zap,
    img: stemXImg,
    title: 'Advanced Equipment',
    desc: 'Modern lasers, growth-factor systems, and HydraFacial technology in a sterile, premium setting.',
  },
  {
    Icon: CheckCircle,
    img: prpImg,
    title: 'Aftercare Support',
    desc: 'Rapid post-procedure check-ins and on-call specialists when you need reassurance, not delays.',
  },
  {
    Icon: Users,
    img: hydrafacialImg,
    title: 'Personalized Treatment',
    desc: 'Plans built around your hair type, skin condition, and lifestyle — never one-size-fits-all.',
  },
]

const SKIN_POP = [
  {
    img: skinPeelsImg, badge: 'Popular',
    title: 'Skin Peels',
    desc: 'Medical-grade chemical peels that gently resurface, brighten, and refine the skin. Customized strength for acne, pigmentation, or dullness.',
  },
  {
    img: qswitchImg, badge: 'Recommended',
    title: 'Q-Switch Laser',
    desc: 'Precision laser energy that targets deep pigmentation, melasma, and stubborn dark spots. Safe for all skin types with minimal downtime.',
  },
  {
    img: hydrafacialImg, badge: 'Best Seller',
    title: 'HydraFacial',
    desc: 'A multi-step facial that cleanses, exfoliates, and deeply hydrates the skin — ideal for instantly improved texture, hydration, and clarity.',
  },
]

const HAIR_POP = [
  {
    img: hairTxImg, badge: 'Permanent',
    title: 'Hair Transplant',
    desc: 'Permanent, natural-looking hair restoration using your own follicles. Our surgeons apply refined FUE techniques for dense, undetectable results.',
  },
  {
    img: mesoImg, badge: 'Minimally Invasive',
    title: 'Mesotherapy',
    desc: 'A minimally invasive scalp treatment that delivers vitamins, peptides, and growth factors directly into the dermis to strengthen roots.',
  },
  {
    img: stemXImg, badge: 'Advanced',
    title: 'Stem X 27',
    desc: 'A 27-factor stem-cell-derived therapy that nourishes the scalp at a cellular level — ideal for early thinning and chronic shedding.',
  },
]

const TESTIMONIALS_ROW1 = [
  { quote: "Never thought I'd love my skin this much. Every session was pure magic — the glow is real.", name: 'Sneha R.', role: 'GloSkin client', initials: 'SR' },
  { quote: 'Professional, clean, and deeply caring. Tiruvannamalai needed a place like this. Blessings!', name: 'Bhavik K.', role: 'GroHair client', initials: 'BK' },
  { quote: 'Doctor explained every detail with patience. My acne is gone and my confidence is back.', name: 'Meera L.', role: 'Acne care patient', initials: 'ML' },
  { quote: 'From bald spots to full locks — what a transformation! Truly life-changing care.', name: 'Harish V.', role: 'Hair restoration patient', initials: 'HV' },
  { quote: 'The PRP sessions genuinely stopped my shedding. Staff are friendly and the place feels premium.', name: 'Karthik S.', role: 'PRP patient', initials: 'KS' },
]

const TESTIMONIALS_ROW2 = [
  { quote: 'HydraFacial was incredible — my skin was glowing for days. Already booked my next session!', name: 'Priya M.', role: 'HydraFacial client', initials: 'PM' },
  { quote: 'Finally a clinic that truly listens. The hair transplant result is completely natural.', name: 'Ramesh T.', role: 'Hair transplant patient', initials: 'RT' },
  { quote: 'Q-Switch laser cleared my pigmentation in just four sessions. Highly recommend this clinic!', name: 'Divya N.', role: 'Pigmentation care', initials: 'DN' },
  { quote: 'Mesotherapy gave my hair new life. Very professional team and painless experience.', name: 'Arun P.', role: 'Mesotherapy patient', initials: 'AP' },
  { quote: 'Stem X 27 exceeded my expectations. Hair density improved noticeably within two months.', name: 'Lalitha K.', role: 'Stem X patient', initials: 'LK' },
]

const TRUST_ITEMS = [
  '1000+ Happy Clients', 'Certified Trichologists', '20+ Advanced Treatments',
  'Sterile Premium Setting', '99% Satisfaction Rate', 'Tiruvannamalai Trusted',
  'Personalised Plans', 'Expert Dermatologists', 'Modern Technology',
]

function TrustTicker() {
  const items = [...TRUST_ITEMS, ...TRUST_ITEMS]
  return (
    <div className="trust-ticker" aria-hidden="true">
      <div className="ticker-track">
        {items.map((item, i) => (
          <span className="ticker-item" key={i}>
            {item}
            <span className="ticker-sep" />
          </span>
        ))}
      </div>
    </div>
  )
}

function TestiCard({ t }) {
  return (
    <div className="testi-card">
      <div className="testi-stars">
        {[...Array(5)].map((_, s) => <Star key={s} size={13} fill="currentColor" />)}
      </div>
      <p className="testi-text">"{t.quote}"</p>
      <div className="testi-author">
        <div className="testi-avatar">{t.initials}</div>
        <div>
          <div className="testi-name">{t.name}</div>
          <div className="testi-role">{t.role}</div>
        </div>
      </div>
    </div>
  )
}

function CountUp({ end, suffix = '' }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const DURATION = 1800
          const steps = 60
          const inc = end / steps
          let cur = 0
          const timer = setInterval(() => {
            cur += inc
            if (cur >= end) { setCount(end); clearInterval(timer) }
            else { setCount(Math.floor(cur)) }
          }, DURATION / steps)
        }
      },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [end])

  return <span ref={ref}>{count}{suffix}</span>
}

export default function Home({ navigate }) {
  useScrollReveal()

  return (
    <main>

      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero__bg" style={{ backgroundImage: `url(${heroBg})` }} />
        <div className="hero__overlay" />
        <div className="hero__orb1" aria-hidden="true" />
        <div className="hero__orb2" aria-hidden="true" />
        <div className="hero__spotlight" aria-hidden="true" />
        <div className="container">
          <div className="hero__content">
            <div className="hero__badge">
              <Star size={12} fill="currentColor" /> Now in Tiruvannamalai
            </div>
            <h1 className="hero__title">
              Hair &amp; Skin Wellness<br />
              in <span>Tiruvannamalai</span>
            </h1>
            <p className="hero__sub">
              Advanced GroHair and GloSkin proudly bring expert care in hair restoration
              and skin health to Tiruvannamalai. Our certified trichologists and skincare
              professionals deliver customized treatments focused on effective, lasting results.
            </p>
            <div className="hero__actions">
              <button className="btn btn-gold" onClick={() => navigate('contact')}>
                Book Appointment
              </button>
              <button className="btn btn-outline" onClick={() => navigate('services')}>
                Explore Treatments <ChevronRight size={15} />
              </button>
            </div>
            <div className="hero__trust">
              <div className="hero__trust-item">
                <div className="hero__trust-icon"><Stethoscope size={16} /></div>
                <span>Certified specialists</span>
              </div>
              <div className="hero__trust-item">
                <div className="hero__trust-icon"><Shield size={16} /></div>
                <span>Sterile, premium setting</span>
              </div>
              <div className="hero__trust-item">
                <div className="hero__trust-icon"><Award size={16} /></div>
                <span>Personalized plans</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrustTicker />

      {/* ── INTRO ── */}
      <section className="section">
        <div className="container">
          <div className="intro-split">
            <div className="reveal-left">
              <p className="eyebrow">We Provide</p>
              <div className="gold-bar" />
              <h2 className="section-title">
                Welcome to Advanced <span>GroHair &amp; GloSkin</span> Tiruvannamalai
              </h2>
              <p className="section-sub" style={{ marginBottom: 16 }}>
                Advanced GroHair and GloSkin combine deep expertise in hair and skin wellness
                with the serene pace of Tiruvannamalai. Our clinic blends clinical precision
                with a luxurious experience, delivered by trained professionals in a safe,
                sterile setting.
              </p>
              <p className="section-sub" style={{ marginBottom: 36 }}>
                At our Tiruvannamalai center, you'll find the best of science, technology,
                and personalized care. Whether it's hair thinning, pigmentation issues,
                premature aging, or any other concern — solutions are tailored just for you,
                backed by trusted professionals.
              </p>
              <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
                <button className="btn btn-primary" onClick={() => navigate('about')}>
                  About the Clinic
                </button>
                <button className="btn btn-secondary" onClick={() => navigate('contact')}>
                  Book a Consultation
                </button>
              </div>
            </div>

            <div className="reveal-right">
              <div className="intro-card">
                <h3 className="intro-card-title">Trusted Excellence</h3>
                <p className="intro-card-sub">Results that speak for themselves</p>
                <div className="intro-stats">
                  <div className="intro-stat-item">
                    <div className="intro-stat-num">1000<sup style={{ fontSize: 22 }}>+</sup></div>
                    <div className="intro-stat-label">Happy clients across our clinics</div>
                  </div>
                  <div className="intro-stat-item">
                    <div className="intro-stat-num">10<sup style={{ fontSize: 22 }}>+</sup></div>
                    <div className="intro-stat-label">Experienced specialists on staff</div>
                  </div>
                  <div className="intro-stat-item">
                    <div className="intro-stat-num">99<span style={{ fontSize: 26 }}>%</span></div>
                    <div className="intro-stat-label">Client satisfaction rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURE CARDS ── */}
      <section className="section">
        <div className="container">
          <div className="text-center reveal" style={{ marginBottom: 56 }}>
            <p className="eyebrow">Why Choose Us</p>
            <div className="gold-bar" />
            <h2 className="section-title">A Standard of Care, <span>Refined</span></h2>
            <p className="section-sub">
              Every detail of the Advanced GroHair &amp; GloSkin experience is designed
              for trust — from how we consult to how we deliver every result.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 24 }}>
            {FEATURES.map((f, i) => (
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

      {/* ── SERVICES OVERVIEW ── */}
      <section className="section">
        <div className="container">
          <div className="text-center reveal" style={{ marginBottom: 52 }}>
            <p className="eyebrow">Our Services</p>
            <div className="gold-bar" />
            <h2 className="section-title">
              Leading Hair &amp; <span>Skin Treatments</span> at<br />
              Advanced GroHair &amp; GloSkin — Tiruvannamalai
            </h2>
            <p className="section-sub">
              Proven hair restoration, modern dermatological skincare, and refined cosmetic
              care — paired with advanced technology for results that are not just visible,
              but long-lasting.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 14, marginTop: 28 }}>
              <button className="btn btn-primary" onClick={() => navigate('services')}>
                Explore all treatments
              </button>
              <button className="btn btn-secondary" onClick={() => navigate('contact')}>
                Book consultation
              </button>
            </div>
          </div>

          <div className="svc-cat-grid">
            <div className="svc-cat-card reveal d1">
              <div className="svc-cat-icon"><Stethoscope size={28} /></div>
              <h3 className="svc-cat-title">Hair Care</h3>
              <p className="svc-cat-desc">
                Targeted therapies for hair fall, thinning, and scalp health — built around
                your hair type and goals.
              </p>
              <div className="svc-cat-tags">
                <span className="svc-tag">Hair fall analysis</span>
                <span className="svc-tag">Scalp therapy</span>
                <span className="svc-tag">Volume restoration</span>
              </div>
            </div>

            <div className="svc-cat-card reveal d2">
              <div className="svc-cat-icon"><Sparkles size={28} /></div>
              <h3 className="svc-cat-title">Skin Treatments</h3>
              <p className="svc-cat-desc">
                Dermatologist-led skincare for clarity, hydration, and tone — calm, clinical,
                and effective.
              </p>
              <div className="svc-cat-tags">
                <span className="svc-tag">Acne care</span>
                <span className="svc-tag">Pigmentation</span>
                <span className="svc-tag">Glow facials</span>
              </div>
            </div>

            <div className="svc-cat-card reveal d3">
              <div className="svc-cat-icon"><FlaskConical size={28} /></div>
              <h3 className="svc-cat-title">Laser &amp; Cosmetic</h3>
              <p className="svc-cat-desc">
                Precision laser solutions and subtle cosmetic enhancements delivered by
                certified specialists in a sterile, premium setting.
              </p>
              <div className="svc-cat-tags">
                <span className="svc-tag">Pigmentation</span>
                <span className="svc-tag">Hair reduction</span>
                <span className="svc-tag">Anti aging</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── POPULAR SKIN ── */}
      <section className="section section--alt">
        <div className="container">
          <div className="text-center reveal" style={{ marginBottom: 52 }}>
            <p className="eyebrow">Top Skin Solutions at GloSkin Tiruvannamalai</p>
            <div className="gold-bar" />
            <h2 className="section-title">Our Most Popular <span>Skin Treatments</span></h2>
            <p className="section-sub">
              Our most popular skin treatments are crafted for issues like pigmentation,
              acne, dullness, and aging. Each session is designed by certified
              dermatologists to deliver healthy, radiant skin.
            </p>
          </div>

          <div className="pop-grid">
            {SKIN_POP.map((t, i) => (
              <div key={t.title} className={`treat-card reveal d${i + 1}`}>
                <div className="treat-card__img-wrap">
                  <img src={t.img} alt={t.title} className="treat-card__img" />
                  <span className="treat-card__badge">{t.badge}</span>
                </div>
                <div className="treat-card__content">
                  <h3 className="treat-card__title">{t.title}</h3>
                  <p className="treat-card__desc">{t.desc}</p>
                  <button
                    className="treat-card__link"
                    onClick={() => navigate('contact')}
                  >
                    Book this treatment <ChevronRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── POPULAR HAIR ── */}
      <section className="section">
        <div className="container">
          <div className="text-center reveal" style={{ marginBottom: 52 }}>
            <p className="eyebrow">Most Popular Hair Solutions in Tiruvannamalai</p>
            <div className="gold-bar" />
            <h2 className="section-title">Our Most Popular <span>Hair Treatments</span></h2>
            <p className="section-sub">
              Combat thinning, bald spots, and hair fall with advanced, scientifically
              proven treatments. All solutions are customized to your hair type, scalp
              condition, and desired results.
            </p>
          </div>

          <div className="pop-grid">
            {HAIR_POP.map((t, i) => (
              <div key={t.title} className={`treat-card reveal d${i + 1}`}>
                <div className="treat-card__img-wrap">
                  <img src={t.img} alt={t.title} className="treat-card__img" />
                  <span className="treat-card__badge">{t.badge}</span>
                </div>
                <div className="treat-card__content">
                  <h3 className="treat-card__title">{t.title}</h3>
                  <p className="treat-card__desc">{t.desc}</p>
                  <button
                    className="treat-card__link"
                    onClick={() => navigate('contact')}
                  >
                    Book this treatment <ChevronRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-layout">

            {/* Left — content */}
            <div className="reveal-left">
              <p className="eyebrow">Why we're trusted</p>
              <div className="gold-bar" />
              <h2 className="section-title">
                Why Tiruvannamalai<br />Clients Trust Us
              </h2>
              <p className="section-sub" style={{ marginBottom: 32 }}>
                Advanced equipment, certified specialists, and a client-first approach —
                every visit to our clinic is designed around your comfort and results.
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

      {/* ── TESTIMONIALS ── */}
      <section className="section">
        <div className="container">
          <div className="text-center reveal" style={{ marginBottom: 52 }}>
            <p className="eyebrow">Testimonials</p>
            <div className="gold-bar" />
            <h2 className="section-title">What Our Clients <span>Say</span></h2>
            <p className="section-sub">
              Real words from real clients who've experienced our care first-hand.
            </p>
          </div>

          <div className="testi-marquee-outer">
            <div className="testi-row testi-row--fwd">
              {[...TESTIMONIALS_ROW1, ...TESTIMONIALS_ROW1].map((t, i) => (
                <TestiCard key={i} t={t} />
              ))}
            </div>
            <div className="testi-row testi-row--rev" style={{ marginTop: 20 }}>
              {[...TESTIMONIALS_ROW2, ...TESTIMONIALS_ROW2].map((t, i) => (
                <TestiCard key={i} t={t} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="home-cta">
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="reveal">
            <p className="home-cta__eyebrow">Begin your transformation</p>
            <div className="gold-bar" style={{ margin: '0 auto 22px' }} />
            <h2 className="home-cta__title">
              Restore your <span>confidence</span> today with<br />expert hair &amp; skin care.
            </h2>
            <p className="home-cta__sub">
              Book a private consultation at our Tiruvannamalai clinic. Our specialists
              will design a plan tailored to your goals — gently, precisely, beautifully.
            </p>
            <div className="home-cta__actions">
              <button className="btn btn-gold" onClick={() => navigate('contact')}>
                Book Appointment
              </button>
              <button className="btn btn-secondary" onClick={() => navigate('contact')}>
                Call us
              </button>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}
