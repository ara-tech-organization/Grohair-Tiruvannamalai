import { useState } from 'react'
import { Scissors, Sparkles } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

import hairTxImg      from '../assets/treatments/basic-hair-transplant-fue.webp'
import capImg         from '../assets/treatments/celebrity-choice.webp'
import oltImg         from '../assets/treatments/olt.webp'
import mesoImg        from '../assets/treatments/mesotherapy.webp'
import regenImg       from '../assets/treatments/regenpro9.webp'
import stemXImg       from '../assets/treatments/stem-x-pro.webp'
import prpImg         from '../assets/treatments/prp.webp'
import smpImg         from '../assets/treatments/smp.webp'
import beardImg       from '../assets/treatments/beard-transplant.webp'
import eyebrowImg     from '../assets/treatments/eyebrow-transplant.webp'
import hairExtImg     from '../assets/treatments/hair-extension.webp'
import lashImg        from '../assets/treatments/eyelash-extensions.webp'
import microbladingImg from '../assets/treatments/microblading.webp'
import skinPeelsImg   from '../assets/treatments/skin-peels.webp'
import qswitchImg     from '../assets/treatments/q-switched-lasers.webp'
import diodeImg       from '../assets/treatments/diode-laser.webp'
import glutaImg       from '../assets/treatments/glutathioneiv.webp'
import fillersImg     from '../assets/treatments/dermal-fillers.webp'
import hydrafacialImg from '../assets/treatments/hydrafacial.webp'
import facePrpImg     from '../assets/treatments/face-prp.webp'
import cosmelanImg    from '../assets/treatments/cosmelanpeel.webp'
import mnrfImg        from '../assets/treatments/rf-facials.webp'
import lipImg         from '../assets/treatments/lip-micropigmentation.webp'
import wartImg        from '../assets/treatments/wart-removal.webp'

const HAIR = [
  { img: hairTxImg,      title: 'Hair Transplant',       desc: 'Permanent, natural-looking hair restoration using your own follicles. Refined FUE techniques for dense, undetectable results.' },
  { img: capImg,         title: 'Cosmetic Hair System',  desc: 'A non-surgical route to instant volume and coverage. Custom-fitted, breathable systems designed to look and feel like your own hair.' },
  { img: oltImg,         title: 'Oxygen Laser Therapy',  desc: 'A scalp-rejuvenating session that pairs oxygenation with low-level laser light to revive follicles and support healthier growth.' },
  { img: mesoImg,        title: 'Mesotherapy',           desc: 'A minimally invasive scalp treatment delivering vitamins, peptides, and growth factors to strengthen roots and reduce hair fall.' },
  { img: regenImg,       title: 'Regen Pro 9',           desc: 'An advanced regenerative protocol combining nine targeted growth factors to reactivate dormant follicles and accelerate visible regrowth.' },
  { img: stemXImg,       title: 'Stem X 27',             desc: 'A 27-factor stem-cell-derived therapy that nourishes the scalp at a cellular level — ideal for early thinning and chronic shedding.' },
  { img: prpImg,         title: 'PRP',                   desc: 'Platelet-rich plasma drawn from your own blood, processed and reintroduced into the scalp to stimulate natural growth and improve density.' },
  { img: smpImg,         title: 'Scalp Micropigmentation', desc: 'A precision pigmentation technique that mimics the look of a fuller hairline — ideal for thinning crowns, scar camouflage, and clean buzz looks.' },
  { img: beardImg,       title: 'Beard Transplant',      desc: 'Sculpt a fuller, well-defined beard with permanent follicle transfer, designed to suit your facial proportions.' },
  { img: eyebrowImg,     title: 'Eyebrow Transplant',    desc: 'Restore sparse or over-plucked brows using advanced follicle techniques — permanent, natural-looking results.' },
  { img: hairExtImg,     title: 'Hair Extension',        desc: 'High-grade extensions for instant length and volume, fitted by trained stylists to blend seamlessly with your natural hair.' },
  { img: lashImg,        title: 'Eye Lash Lifting',      desc: 'A gentle lift and curl that opens up the eyes for weeks at a time. No daily curling, no extensions — just elevated natural lashes.' },
  { img: microbladingImg, title: 'Microblading',         desc: 'A semi-permanent technique that crafts naturally fuller, hair-stroke brows — tailored shape, color, and density for an effortless look.' },
]

const SKIN = [
  { img: skinPeelsImg,   title: 'Skin Peels',            desc: 'Medical-grade chemical peels that gently resurface, brighten, and refine the skin. Customized strength for acne, pigmentation, or dullness.' },
  { img: qswitchImg,     title: 'Q-Switch Laser',        desc: 'Precision laser energy that targets deep pigmentation, melasma, and stubborn dark spots. Safe for all skin types with minimal downtime.' },
  { img: diodeImg,       title: 'Laser Hair Reduction',  desc: 'Long-lasting, comfortable hair reduction across the face and body using next-generation lasers calibrated to your skin tone and hair type.' },
  { img: glutaImg,       title: 'Glutathione IV',        desc: 'A wellness-grade IV protocol designed to support skin clarity, even tone, and antioxidant balance — beauty supported from the inside out.' },
  { img: fillersImg,     title: 'Derma Fillers',         desc: 'Hyaluronic-acid fillers used to refine contours, restore lost volume, and gently re-balance facial proportions for a natural finish.' },
  { img: hydrafacialImg, title: 'HydraFacial',           desc: 'A multi-step facial that cleanses, exfoliates, and deeply hydrates the skin — ideal for instantly improved texture, hydration, and clarity.' },
  { img: facePrpImg,     title: 'Face PRP',              desc: 'Your own platelet-rich plasma applied to the skin to support natural collagen, smoother tone, and a refreshed, lit-from-within glow.' },
  { img: cosmelanImg,    title: 'Cosmelan Peel',         desc: 'A globally recognized depigmenting protocol designed to fade stubborn melasma and uneven tone with measured, lasting results.' },
  { img: mnrfImg,        title: 'MNRF',                  desc: 'Microneedling Radiofrequency that combines micro-channels with controlled RF energy to firm skin, refine pores, and soften scars.' },
  { img: lipImg,         title: 'Lip Micropigmentation', desc: 'Subtle pigment placement to enhance the natural color and definition of the lips — soft, fresh, and beautifully understated.' },
  { img: wartImg,        title: 'Wart Removal',          desc: 'Quick, precise removal of warts and skin tags using safe clinical methods — minimal scarring and rapid recovery.' },
]

const ALL = [
  ...HAIR.map(t => ({ ...t, type: 'hair' })),
  ...SKIN.map(t => ({ ...t, type: 'skin' })),
]

export default function Services({ navigate }) {
  useScrollReveal()
  const [tab, setTab] = useState('all')

  const items = tab === 'all' ? ALL : tab === 'hair' ? HAIR.map(t => ({ ...t, type: 'hair' })) : SKIN.map(t => ({ ...t, type: 'skin' }))

  return (
    <main>

      {/* ── PAGE HERO ── */}
      <section className="sh3-hero">
        {/* bg image with overlay */}
        <div className="sh3-hero__bg" style={{backgroundImage:`url(${hairTxImg})`}} />
        <div className="sh3-hero__overlay" />

        {/* floating orb */}
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

        {/* image strip */}
        <div className="sh3-hero__strip">
          {[
            { img: hairTxImg,    label: 'Hair Transplant' },
            { img: mesoImg,      label: 'Mesotherapy' },
            { img: prpImg,       label: 'PRP Therapy' },
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

      {/* ── TREATMENTS ── */}
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

          <div className="tgrid">
            {items.map((t, i) => (
              <div key={t.title + tab} className={`tgrid-card d${(i % 4) + 1}`}>
                <div className="tgrid-img-wrap">
                  <img src={t.img} alt={t.title} className="tgrid-img" />
                </div>
                <div className="tgrid-content">
                  <h3 className="tgrid-title">{t.title}</h3>
                  <p className="tgrid-desc">{t.desc}</p>
                  <span className={`tgrid-badge tgrid-badge--${t.type}`}>
                    {t.type === 'hair' ? <Scissors size={10} /> : <Sparkles size={10} />}
                    &nbsp;{t.type.charAt(0).toUpperCase() + t.type.slice(1)}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


    </main>
  )
}
