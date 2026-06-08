import { Scissors, Sparkles, ArrowRight, Check } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useState } from 'react'

import glutaImg    from '../assets/treatments/glutathioneiv.webp'
import stemXImg    from '../assets/treatments/stem-x-pro.webp'
import hairTxImg   from '../assets/treatments/basic-hair-transplant-fue.webp'
import regenImg    from '../assets/treatments/regenpro9.webp'
import prpImg      from '../assets/treatments/prp.webp'
import oltImg      from '../assets/treatments/olt.webp'
import capImg      from '../assets/treatments/celebrity-choice.webp'
import beardImg    from '../assets/treatments/beard-transplant.webp'

import skinPeelsImg   from '../assets/treatments/skin-peels.webp'
import qswitchImg     from '../assets/treatments/q-switched-lasers.webp'
import diodeImg       from '../assets/treatments/diode-laser.webp'
import fillersImg     from '../assets/treatments/dermal-fillers.webp'
import hydrafacialImg from '../assets/treatments/hydrafacial.webp'
import facePrpImg     from '../assets/treatments/face-prp.webp'
import cosmelanImg    from '../assets/treatments/cosmelanpeel.webp'
import mnrfImg        from '../assets/treatments/rf-facials.webp'
import lipImg         from '../assets/treatments/lip-micropigmentation.webp'
import wartImg        from '../assets/treatments/wart-removal.webp'

const HAIR = [
  {
    slug: 'glutathione',
    img: glutaImg,
    title: 'Glutathione IV Drip Therapy',
    desc: 'Advanced wellness and skin rejuvenation treatment delivering the body\'s "Master Antioxidant" directly into the bloodstream for maximum absorption, enhanced glow, and detoxification support.',
  },
  {
    slug: 'gcell',
    img: stemXImg,
    title: 'G Cell Therapy',
    desc: 'Growth-factor-rich cellular technology that stimulates dormant hair follicles, reduces hair fall, improves scalp health, and promotes natural hair regrowth without surgery.',
  },
  {
    slug: 'hybrid',
    img: hairTxImg,
    title: 'Hybrid Hair Transplant',
    desc: 'Modern FUE technology combined with enhanced graft implantation techniques for superior hair density, natural hairline design, and permanent long-lasting results.',
  },
  {
    slug: 'regen-pro9',
    img: regenImg,
    title: 'Regen Pro 9 GFC',
    desc: 'Highly concentrated growth factors derived from your own blood that stimulate dormant follicles, promote healthier hair growth, and improve scalp health naturally.',
  },
  {
    slug: 'gel-prp',
    img: prpImg,
    title: 'Advanced Gel PRP',
    desc: 'PRP therapy with a specialized gel matrix for prolonged growth factor release, stimulating hair regrowth, improving scalp health, and reducing hair fall effectively.',
  },
  {
    slug: 'oxygen-laser',
    img: oltImg,
    title: 'Oxygen Laser Therapy',
    desc: 'Non-invasive oxygen-powered laser technology that stimulates blood circulation, controls dandruff, reduces hair fall, and promotes natural hair growth for a healthier scalp.',
  },
  {
    slug: 'cosmetic-hair',
    img: capImg,
    title: 'Cosmetic Hair System',
    desc: 'A non-surgical solution for hair thinning or baldness. Customized to match your hair color, texture, and style for immediate, natural-looking results — painless and instant.',
  },
  {
    slug: 'prp-stemx27',
    img: stemXImg,
    title: 'PRP Pro+ StemX27',
    desc: 'Platelet-rich plasma enhanced with StemX27 growth factor technology to stimulate dormant follicles, strengthen roots, and promote natural hair regrowth with lasting results.',
  },
  {
    slug: 'beard',
    img: beardImg,
    title: 'Beard Transplant',
    desc: 'Permanent facial hair enhancement using your own follicles. Fills patchy areas, defines beard shape, and creates a full, natural-looking beard with lasting results.',
  },
]

const SKIN = [
  { slug: 'glutalite',          img: glutaImg,       title: 'Glutalite IV Drip Treatment',      desc: 'Nutrient-rich IV infusion with Glutathione, Vitamin C, and essential nutrients to brighten skin, reduce pigmentation, combat oxidative stress, and support whole-body detoxification.' },
  { slug: 'chemical-peel',      img: cosmelanImg,    title: 'Chemical Peel Treatments',         desc: 'Medical-grade chemical peels that resurface skin, reduce pigmentation, minimize acne scars, and reveal smoother, brighter, and healthier skin.' },
  { slug: 'photo-carbon',       img: qswitchImg,     title: 'Photo Carbon Skin Polish',         desc: 'Activated carbon combined with laser energy to deeply cleanse, reduce pigmentation, minimize pores, and restore a radiant, rejuvenated complexion.' },
  { slug: 'laser-hair-reduction', img: diodeImg,     title: 'Laser Hair Reduction',             desc: 'Advanced laser technology that safely targets hair follicles for long-term hair reduction on the face and body — smooth, confident skin with minimal maintenance.' },
  { slug: 'hydra-lift',         img: hydrafacialImg, title: 'Hydra Lift Skin Booster',          desc: 'Powerful skin-enhancing nutrients delivered deep into the skin to hydrate, boost collagen, improve elasticity, and restore a youthful, radiant glow.' },
  { slug: 'lip-micropigmentation', img: lipImg,      title: 'Lip Micropigmentation',            desc: 'Semi-permanent cosmetic procedure that enhances lip shape, color, and symmetry — creating naturally fuller, beautifully defined, and youthful-looking lips.' },
  { slug: 'botox-fillers',      img: fillersImg,     title: 'Botox & Fillers',                  desc: 'Botox and dermal fillers that reduce wrinkles, restore facial volume, and enhance contours for a refreshed, naturally youthful appearance without surgery.' },
  { slug: 'mnrf',               img: mnrfImg,        title: 'MNRF Treatment',                   desc: 'Microneedling Radiofrequency combining precise microchannels with RF energy to stimulate collagen, tighten skin, reduce acne scars, and minimize enlarged pores.' },
  { slug: 'tattoo-removal',     img: wartImg,        title: 'Tattoo Removal',                   desc: 'Advanced laser technology that targets tattoo pigments beneath the skin without harming surrounding tissue — safe, gradual, and effective removal for all colors.' },
]

export default function Services({ navigate }) {
  useScrollReveal()
  const [tab, setTab] = useState('all')

  return (
    <main>

      {/* Hero */}
      <section className="sh3-hero">
        <div className="sh3-hero__bg" style={{ backgroundImage: `url(${hairTxImg})` }} />
        <div className="sh3-hero__overlay" />
        <div className="sh3-hero__orb" aria-hidden="true" />

        <div className="container sh3-hero__body">
          <div className="sh3-hero__text">
            <span className="sh3-hero__eyebrow">Our Services</span>
            <h1 className="sh3-hero__title">
              <span>Hair &amp; Skin</span><br />Treatments
            </h1>
            <p className="sh3-hero__sub">
              Hair restoration, skin wellness, laser &amp; cosmetic care —
              delivered by certified specialists at our Tiruvannamalai clinic.
            </p>
            <div className="sh3-hero__actions">
              <button className="btn btn-primary" onClick={() => navigate('contact')}>Book Consultation</button>
              <button className="btn btn-outline" onClick={() => navigate('about')}>About the Clinic</button>
            </div>
          </div>
        </div>

        <div className="sh3-hero__strip">
          {[
            { img: hairTxImg,    label: 'Hair Transplant' },
            { img: regenImg,     label: 'Regen Pro 9 GFC' },
            { img: prpImg,       label: 'Gel PRP' },
            { img: hydrafacialImg, label: 'HydraFacial' },
            { img: qswitchImg,   label: 'Q-Switch Laser' },
            { img: skinPeelsImg, label: 'Skin Peels' },
          ].map(item => (
            <div key={item.label} className="sh3-hero__strip-item" onClick={() => navigate('contact')}>
              <img src={item.img} alt={item.label} className="sh3-hero__strip-img" />
              <div className="sh3-hero__strip-overlay" />
              <span className="sh3-hero__strip-label">{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Filter tabs */}
      <section className="section">
        <div className="container">

          <div className="svc-filter reveal">
            <button className={`filter-btn${tab === 'all' ? ' active' : ''}`} onClick={() => setTab('all')}>
              All Treatments
            </button>
            <button className={`filter-btn${tab === 'hair' ? ' active' : ''}`} onClick={() => setTab('hair')}>
              <Scissors size={14} /> Hair
            </button>
            <button className={`filter-btn${tab === 'skin' ? ' active' : ''}`} onClick={() => setTab('skin')}>
              <Sparkles size={14} /> Skin
            </button>
          </div>

          {/* Hair treatment cards */}
          {(tab === 'all' || tab === 'hair') && (
            <>
              {tab === 'all' && (
                <div className="svc-section-header">
                  <div className="svc-section-header__line" />
                  <span className="svc-section-header__label">
                    <Scissors size={14} /> Hair Treatments
                  </span>
                  <div className="svc-section-header__line" />
                </div>
              )}
              <div className="ht-card-grid">
                {HAIR.map((t, i) => (
                  <div
                    key={t.slug}
                    className={`ht-svc-card d${(i % 3) + 1}`}
                    onClick={() => navigate(`ht:${t.slug}`)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={e => e.key === 'Enter' && navigate(`ht:${t.slug}`)}
                  >
                    <div className="ht-svc-card__img-wrap">
                      <img src={t.img} alt={t.title} className="ht-svc-card__img" />
                      <span className="ht-svc-card__badge">
                        <Scissors size={10} /> Hair
                      </span>
                    </div>
                    <div className="ht-svc-card__body">
                      <h3 className="ht-svc-card__title">{t.title}</h3>
                      <p className="ht-svc-card__desc">{t.desc}</p>
                      <button
                        className="ht-svc-card__cta"
                        onClick={e => { e.stopPropagation(); navigate(`ht:${t.slug}`) }}
                      >
                        View Treatment <ArrowRight size={14} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Skin treatment cards */}
          {(tab === 'all' || tab === 'skin') && (
            <>
              {tab === 'all' && (
                <div className="svc-section-header" style={{ marginTop: '60px' }}>
                  <div className="svc-section-header__line" />
                  <span className="svc-section-header__label">
                    <Sparkles size={14} /> Skin Treatments
                  </span>
                  <div className="svc-section-header__line" />
                </div>
              )}
              <div className="ht-card-grid">
                {SKIN.map((t, i) => (
                  <div
                    key={t.slug}
                    className={`ht-svc-card d${(i % 3) + 1}`}
                    onClick={() => navigate(`st:${t.slug}`)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={e => e.key === 'Enter' && navigate(`st:${t.slug}`)}
                  >
                    <div className="ht-svc-card__img-wrap">
                      <img src={t.img} alt={t.title} className="ht-svc-card__img" />
                      <span className="ht-svc-card__badge ht-svc-card__badge--skin">
                        <Sparkles size={10} /> Skin
                      </span>
                    </div>
                    <div className="ht-svc-card__body">
                      <h3 className="ht-svc-card__title">{t.title}</h3>
                      <p className="ht-svc-card__desc">{t.desc}</p>
                      <button
                        className="ht-svc-card__cta"
                        onClick={e => { e.stopPropagation(); navigate(`st:${t.slug}`) }}
                      >
                        View Treatment <ArrowRight size={14} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

        </div>
      </section>

      {/* CTA strip */}
      <section className="home-cta">
        <div className="container">
          <p className="home-cta__eyebrow">Ready to Begin?</p>
          <h2 className="home-cta__title">
            Book Your <span>Consultation</span> Today
          </h2>
          <p className="home-cta__sub">
            Our specialists are ready to create a personalized treatment plan tailored to your goals and lifestyle.
          </p>
          <div className="home-cta__actions">
            <button className="btn btn-primary" onClick={() => navigate('contact')}>
              Book An Appointment <ArrowRight size={16} />
            </button>
            <button className="btn btn-secondary" onClick={() => navigate('about')}>
              About the Clinic
            </button>
          </div>
        </div>
      </section>

    </main>
  )
}
