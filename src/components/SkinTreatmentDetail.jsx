import { ChevronLeft, ArrowRight, Clock, Shield, Check, Droplets, Layers, Zap, Smile, Sparkles, FlaskConical, X } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

import glutaImg       from '../assets/treatments/glutathioneiv.webp'
import skinPeelsImg   from '../assets/treatments/skin-peels.webp'
import cosmelanImg    from '../assets/treatments/cosmelanpeel.webp'
import qswitchImg     from '../assets/treatments/q-switched-lasers.webp'
import diodeImg       from '../assets/treatments/diode-laser.webp'
import hydrafacialImg from '../assets/treatments/hydrafacial.webp'
import lipImg         from '../assets/treatments/lip-micropigmentation.webp'
import fillersImg     from '../assets/treatments/dermal-fillers.webp'
import mnrfImg        from '../assets/treatments/rf-facials.webp'
import wartImg        from '../assets/treatments/wart-removal.webp'

const TREATMENTS = {
  glutalite: {
    img: glutaImg,
    Icon: Droplets,
    eyebrow: 'Advanced Wellness & Skin Brightening',
    title: 'Glutalite IV Drip Treatment',
    tagline: 'Brighten Your Skin & Rejuvenate Your Body Naturally',
    intro:
      'Glutalite IV Drip is a nutrient-rich intravenous infusion formulated with Glutathione (the master antioxidant), Vitamin C, and essential nutrients.',
    introDetail:
      'This treatment helps brighten skin, reduce hyperpigmentation, combat oxidative stress, and support whole-body detoxification and anti-aging.',
    processTitle: 'Glutalite IV Drip Process',
    processDesc:
      'Every session begins with a comprehensive health and skin assessment. A personalized infusion is formulated based on your goals. The Glutalite solution is administered intravenously under professional supervision, delivering nutrients directly into the bloodstream for optimal absorption. Comfortable, relaxing, and completed in 30 to 60 minutes with no downtime.',
    processSteps: [
      { title: 'Consultation', desc: 'Comprehensive health and skin assessment to understand your goals and wellness needs.' },
      { title: 'Formulation', desc: 'Personalized Glutalite IV infusion prepared with Glutathione, Vitamin C, and essential nutrients.' },
      { title: 'IV Administration', desc: 'Solution administered intravenously under professional supervision for maximum absorption.' },
      { title: 'Relaxation', desc: 'Comfortable 30–60 minute session in a hygienic clinical environment.' },
      { title: 'No Downtime', desc: 'Walk out refreshed — return to daily activities immediately after your session.' },
    ],
    benefitsIntro:
      'Glutalite IV Drip delivers powerful antioxidants and nutrients directly into the bloodstream, supporting skin brightening, detoxification, and anti-aging from within.',
    benefits: [
      'Brightens and evens skin tone',
      'Reduces dark spots, pigmentation, and age spots',
      'Boosts collagen production and improves skin elasticity',
      'Combats oxidative stress and early signs of aging',
      'Supports liver detoxification and cellular repair',
      'Enhances immunity and overall vitality',
    ],
    whyUsTitle: 'Why Choose Advanced GroHair & GloSkin Clinic?',
    whyUsDesc:
      'Our specialists deliver expert-led IV therapy sessions using safe, clinically proven formulations tailored to your individual skin and wellness goals.',
    whyUs: [
      'Expert-led IV Therapy Sessions',
      'Safe, Clinically Proven Formulations',
      'Personalized Treatment Plans',
      'Comfortable & Hygienic Environment',
      'Visible and Lasting Skin & Wellness Benefits',
    ],
    ctaTitle: 'Book Your Consultation Today',
    ctaDesc:
      'Revitalize your skin and body with Glutalite IV Drip at Advanced GroHair & GloSkin Clinic. Our specialists will craft a personalized infusion plan to bring out your natural glow.',
    sessionDuration: '30 – 60 minutes',
    treatmentType: 'Wellness & Skin Brightening',
  },

  'chemical-peel': {
    img: cosmelanImg,
    Icon: Layers,
    eyebrow: 'Advanced Skin Renewal',
    title: 'Advanced Chemical Peel Treatments',
    tagline: 'Reveal Smoother, Brighter, and Healthier Skin',
    intro:
      'Chemical Peels are highly effective for improving skin texture, reducing pigmentation, minimizing acne scars, and restoring a youthful glow.',
    introDetail:
      'By gently exfoliating the outer layers of damaged skin, the treatment encourages natural skin renewal and reveals fresher, healthier-looking skin.',
    processTitle: 'Chemical Peel Process',
    processDesc:
      'After a detailed skin analysis, our specialists select the most suitable peel formulation for your skin type and concerns. The chemical solution is applied carefully to exfoliate dead skin cells and stimulate new skin growth. The treatment is safe, quick, and supervised for optimal results.',
    processSteps: [
      { title: 'Skin Analysis', desc: 'Detailed skin assessment to identify concerns and select the most suitable peel type.' },
      { title: 'Skin Prep', desc: 'Skin is cleansed and prepared to ensure even application and optimal peel penetration.' },
      { title: 'Peel Application', desc: 'Customized chemical solution applied carefully to exfoliate dead cells and stimulate renewal.' },
      { title: 'Treatment Time', desc: 'Solution works precisely on the skin under specialist supervision for safe, controlled results.' },
      { title: 'Post-Care', desc: 'Aftercare guidance provided — visible brightening and smoother texture emerge within days.' },
    ],
    benefitsIntro:
      'Chemical Peels promote deep skin renewal, targeting pigmentation, acne scars, and uneven texture for visibly clearer and brighter skin.',
    benefits: [
      'Improves skin texture and smoothness',
      'Reduces pigmentation, dark spots, and blemishes',
      'Minimizes acne scars',
      'Brightens dull, uneven skin tone',
      'Reduces fine lines and early aging signs',
      'Promotes healthy skin cell regeneration',
      'Safe, effective, and non-surgical',
    ],
    whyUsTitle: 'Why Choose Advanced GroHair & GloSkin Clinic?',
    whyUsDesc:
      'Our experienced skin specialists deliver personalized chemical peel treatments using advanced formulations in a modern, professional clinical environment.',
    whyUs: [
      'Experienced Skin Specialists',
      'Personalized Skin Assessment',
      'Advanced Chemical Peel Solutions',
      'Safe & Professional Treatment Protocols',
      'Modern Clinical Environment',
      'Visible and Long-Lasting Results',
    ],
    ctaTitle: 'Book Your Consultation Today',
    ctaDesc:
      'Achieve clearer, brighter, and rejuvenated skin with Advanced Chemical Peel treatments at Advanced GroHair & GloSkin Clinic.',
    sessionDuration: '30 – 60 minutes',
    treatmentType: 'Skin Resurfacing',
  },

  'photo-carbon': {
    img: qswitchImg,
    Icon: Zap,
    eyebrow: 'Advanced Laser Skin Treatment',
    title: 'Advanced Photo Carbon Skin Polish',
    tagline: 'Achieve Brighter, Clearer, and Rejuvenated Skin',
    intro:
      'Photo Carbon Skin Polish combines activated carbon technology with laser energy to deeply cleanse, exfoliate, and revitalize the skin.',
    introDetail:
      'This treatment reduces pigmentation, controls excess oil, minimizes enlarged pores, and restores a radiant complexion — comfortable and non-invasive.',
    processTitle: 'Photo Carbon Skin Polish Process',
    processDesc:
      'A thin layer of medical-grade carbon is applied to the skin. Laser energy targets the carbon particles to exfoliate dead cells, stimulate collagen production, and promote skin renewal. Comfortable, non-invasive, and requires minimal downtime.',
    processSteps: [
      { title: 'Consultation', desc: 'Skin analysis to evaluate tone, pores, pigmentation, and overall skin health.' },
      { title: 'Carbon Application', desc: 'Medical-grade activated carbon mask applied evenly across the treatment area.' },
      { title: 'Laser Targeting', desc: 'Laser energy directed at carbon particles to vaporize impurities and exfoliate dead cells.' },
      { title: 'Collagen Stimulation', desc: 'Laser energy stimulates collagen production for firmer, smoother, brighter skin.' },
      { title: 'No Downtime', desc: 'Comfortable, non-invasive session completed in 30–45 minutes with immediate radiance.' },
    ],
    benefitsIntro:
      'Photo Carbon Skin Polish delivers deep cleansing and rejuvenation using the combined power of activated carbon and targeted laser energy.',
    benefits: [
      'Deeply cleanses and detoxifies skin',
      'Reduces excess oil and acne-causing impurities',
      'Minimizes enlarged pores',
      'Improves skin tone and texture',
      'Reduces pigmentation and tanning',
      'Stimulates collagen production',
      'Enhances radiance and brightness',
    ],
    whyUsTitle: 'Why Choose Advanced GroHair & GloSkin Clinic?',
    whyUsDesc:
      'Our team applies advanced carbon laser technology with personalized treatment plans to deliver visible skin rejuvenation safely and effectively.',
    whyUs: [
      'Advanced Carbon Laser Technology',
      'Personalized Treatment Plans',
      'Experienced Skin Specialists',
      'Safe & Non-Invasive Procedures',
      'Modern Clinical Environment',
      'Visible and Lasting Skin Rejuvenation',
    ],
    ctaTitle: 'Book Your Consultation Today',
    ctaDesc:
      'Restore your skin\'s natural glow and achieve smoother, brighter, and healthier skin with Photo Carbon Skin Polish at Advanced GroHair & GloSkin Clinic.',
    sessionDuration: '30 – 45 minutes',
    treatmentType: 'Laser Skin Rejuvenation',
  },

  'laser-hair-reduction': {
    img: diodeImg,
    Icon: Zap,
    eyebrow: 'Advanced Laser Treatment',
    title: 'Advanced Laser Hair Reduction',
    tagline: 'Enjoy Smooth, Hair-Free Skin with Lasting Results',
    intro:
      'Laser Hair Reduction safely targets hair follicles to reduce unwanted hair growth on the face and body.',
    introDetail:
      'Suitable for men and women, this long-term solution provides smoother skin while minimizing maintenance — precise, safe, and effective.',
    processTitle: 'Laser Hair Reduction Process',
    processDesc:
      'Specialized laser energy is applied to the targeted area, weakening hair follicles and inhibiting future growth without affecting surrounding skin. The treatment is quick, comfortable, and requires minimal downtime.',
    processSteps: [
      { title: 'Consultation', desc: 'Skin and hair type assessment to customize the laser settings for safe, effective treatment.' },
      { title: 'Skin Prep', desc: 'Treatment area cleansed and prepared — cooling gel applied for comfort.' },
      { title: 'Laser Application', desc: 'Specialized laser energy directed at follicles to weaken and inhibit future hair growth.' },
      { title: 'Follicle Treatment', desc: 'Laser precisely targets follicles without damaging surrounding skin tissue.' },
      { title: 'Recovery', desc: 'Minimal downtime after each session — gradual smooth, hair-free results over multiple sessions.' },
    ],
    benefitsIntro:
      'Laser Hair Reduction provides a long-term, low-maintenance solution for smooth skin using precision laser technology calibrated to your skin type.',
    benefits: [
      'Long-term reduction of unwanted hair',
      'Smooth and soft skin texture',
      'Precise follicle targeting',
      'Reduces ingrown hairs',
      'Suitable for face and body',
      'Minimally invasive and safe',
      'Improves confidence and personal comfort',
    ],
    whyUsTitle: 'Why Choose Advanced GroHair & GloSkin Clinic?',
    whyUsDesc:
      'Our experienced laser specialists use advanced technology and customized treatment plans to deliver safe, visible, and lasting hair reduction results.',
    whyUs: [
      'Advanced Laser Technology',
      'Experienced Skin & Laser Specialists',
      'Customized Treatment Plans',
      'Safe for All Skin Types',
      'Comfortable & Hygienic Environment',
      'Visible and Lasting Results',
    ],
    ctaTitle: 'Book Your Consultation Today',
    ctaDesc:
      'Achieve smooth, hair-free skin safely and effectively with Laser Hair Reduction at Advanced GroHair & GloSkin Clinic.',
    sessionDuration: '30 – 60 minutes',
    treatmentType: 'Laser Hair Removal',
  },

  'hydra-lift': {
    img: hydrafacialImg,
    Icon: Droplets,
    eyebrow: 'Advanced Skin Hydration',
    title: 'Advanced Hydra Lift Skin Booster',
    tagline: 'Deep Hydration for Radiant, Youthful Skin',
    intro:
      'Hydra Lift Skin Booster delivers powerful skin-enhancing nutrients deep into the skin to hydrate, boost collagen, improve elasticity, and restore a youthful glow.',
    introDetail:
      'Suitable for all skin types, this treatment is ideal for dehydrated, dull, or aging skin — minimally invasive with immediate visible results.',
    processTitle: 'Hydra Lift Skin Booster Process',
    processDesc:
      'Hydrating compounds are delivered to the deeper skin layers using advanced techniques, stimulating collagen production and improving overall skin quality. Treatment is minimally invasive and requires little to no downtime.',
    processSteps: [
      { title: 'Skin Assessment', desc: 'Analysis of hydration levels, elasticity, and skin quality to tailor the booster protocol.' },
      { title: 'Treatment Plan', desc: 'Personalized hydration and nutrient plan developed for your specific skin needs.' },
      { title: 'Booster Delivery', desc: 'Hydrating compounds delivered deep into the skin layers using advanced techniques.' },
      { title: 'Collagen Activation', desc: 'Nutrients stimulate collagen and elastin production for improved firmness and glow.' },
      { title: 'Immediate Results', desc: 'Visible hydration boost and radiance immediately — little to no downtime required.' },
    ],
    benefitsIntro:
      'Hydra Lift Skin Booster replenishes deep skin hydration and stimulates natural collagen for firmer, plumper, and more radiant skin.',
    benefits: [
      'Deeply hydrates and nourishes skin',
      'Improves texture and smoothness',
      'Enhances elasticity and firmness',
      'Reduces fine lines and early aging signs',
      'Restores natural radiance and glow',
      'Safe, effective, and minimally invasive',
    ],
    whyUsTitle: 'Why Choose Advanced GroHair & GloSkin Clinic?',
    whyUsDesc:
      'Our skin specialists use advanced booster technology and personalized protocols to deliver visible hydration, firmness, and lasting skin rejuvenation.',
    whyUs: [
      'Advanced Skin Booster Technology',
      'Experienced Skin Specialists',
      'Personalized Treatment Plans',
      'Safe & Hygienic Environment',
      'Visible and Lasting Skin Rejuvenation',
    ],
    ctaTitle: 'Book Your Consultation Today',
    ctaDesc:
      'Revitalize your skin with Hydra Lift Skin Booster for deep hydration and a natural, youthful glow at Advanced GroHair & GloSkin Clinic.',
    sessionDuration: '45 – 60 minutes',
    treatmentType: 'Skin Hydration & Anti-Aging',
  },

  'lip-micropigmentation': {
    img: lipImg,
    Icon: Sparkles,
    eyebrow: 'Advanced Cosmetic Enhancement',
    title: 'Advanced Lip Micropigmentation',
    tagline: 'Enhance Your Natural Beauty with Defined, Fuller Lips',
    intro:
      'Lip Micropigmentation is a semi-permanent cosmetic procedure that improves lip shape, color, and symmetry, creating naturally fuller and youthful lips.',
    introDetail:
      'Comfortable, safe, and long-lasting — this precision treatment enhances your natural lip beauty without the need for daily makeup.',
    processTitle: 'Lip Micropigmentation Process',
    processDesc:
      'After consultation, the specialist selects pigments to complement your skin tone. Precision micropigmentation techniques deposit pigment into lips for enhanced definition while maintaining a natural look. Comfortable, safe, and long-lasting.',
    processSteps: [
      { title: 'Consultation', desc: 'Lip shape, symmetry, and color assessment — personalized design planned to complement your features.' },
      { title: 'Pigment Selection', desc: 'Custom pigments precisely matched to your skin tone for a natural, flattering result.' },
      { title: 'Lip Mapping', desc: 'Precise lip outline crafted to enhance definition, symmetry, and natural fullness.' },
      { title: 'Micropigmentation', desc: 'Pigment deposited with expert precision technique for lasting, even color and definition.' },
      { title: 'Results', desc: 'Naturally fuller, well-defined lips with semi-permanent color that lasts beautifully over time.' },
    ],
    benefitsIntro:
      'Lip Micropigmentation enhances your natural lip shape and color using precision pigment placement for a beautiful, lasting result.',
    benefits: [
      'Enhances natural lip color',
      'Improves shape and symmetry',
      'Creates fuller-looking lips',
      'Defines borders and contours',
      'Reduces need for daily lipstick',
      'Restores pale or uneven lips',
      'Safe, minimally invasive, long-lasting',
    ],
    whyUsTitle: 'Why Choose Advanced GroHair & GloSkin Clinic?',
    whyUsDesc:
      'Our micropigmentation specialists combine artistic precision with clinical expertise to deliver natural, long-lasting lip enhancement tailored to your unique features.',
    whyUs: [
      'Experienced Micropigmentation Specialists',
      'Personalized Lip Design',
      'Premium Quality Pigments',
      'Safe & Hygienic Environment',
      'Natural, Long-Lasting Results',
    ],
    ctaTitle: 'Book Your Consultation Today',
    ctaDesc:
      'Enhance your lips naturally with Lip Micropigmentation at Advanced GroHair & GloSkin Clinic. Our specialists will design a personalized enhancement for beautifully defined, lasting results.',
    sessionDuration: '60 – 90 minutes',
    treatmentType: 'Semi-Permanent Cosmetics',
  },

  'botox-fillers': {
    img: fillersImg,
    Icon: Smile,
    eyebrow: 'Advanced Aesthetic Treatment',
    title: 'Advanced Botox & Fillers Treatments',
    tagline: 'Smooth, Restore, and Rejuvenate Your Natural Beauty',
    intro:
      'Botox and Dermal Fillers reduce visible signs of aging, restore facial volume, and enhance contours for a refreshed, youthful appearance without surgery.',
    introDetail:
      'Minimally invasive with little to no downtime — delivering natural-looking, balanced results that enhance your features while preserving your individual character.',
    processTitle: 'Botox & Fillers Process',
    processDesc:
      'After a detailed facial assessment, Botox is applied to relax targeted muscles, softening wrinkles. Dermal Fillers restore volume, enhance contours, and improve balance. Minimally invasive with little to no downtime.',
    processSteps: [
      { title: 'Facial Assessment', desc: 'Detailed facial mapping of concern areas, volume loss, and aesthetic goals.' },
      { title: 'Treatment Plan', desc: 'Personalized Botox and filler plan developed for natural-looking, balanced results.' },
      { title: 'Botox Application', desc: 'Targeted muscle relaxation to soften wrinkles and fine lines with precision.' },
      { title: 'Filler Placement', desc: 'Volume restoration and contour enhancement using hyaluronic acid-based dermal fillers.' },
      { title: 'Results', desc: 'Natural, refreshed appearance — minimal downtime, results visible within days.' },
    ],
    benefitsIntro:
      'Botox and Dermal Fillers work together to address wrinkles, volume loss, and facial asymmetry for a naturally rejuvenated appearance.',
    benefits: [
      'Reduces fine lines and wrinkles',
      'Restores facial volume',
      'Enhances facial contours and symmetry',
      'Quick, safe, and minimally invasive',
      'Long-lasting, natural-looking results',
    ],
    whyUsTitle: 'Why Choose Advanced GroHair & GloSkin Clinic?',
    whyUsDesc:
      'Our aesthetic specialists combine advanced injection techniques with personalized facial assessments to deliver balanced, natural-looking rejuvenation results.',
    whyUs: [
      'Experienced Aesthetic Specialists',
      'Personalized Facial Assessment',
      'Advanced Injection Techniques',
      'Safe & Hygienic Environment',
      'Natural & Balanced Results',
    ],
    ctaTitle: 'Book Your Consultation Today',
    ctaDesc:
      'Achieve a youthful, naturally rejuvenated appearance with Botox and Fillers at Advanced GroHair & GloSkin Clinic. Our specialists will design a personalized plan for refreshed, balanced results.',
    sessionDuration: '30 – 60 minutes',
    treatmentType: 'Non-Surgical Aesthetic',
  },

  mnrf: {
    img: mnrfImg,
    Icon: Layers,
    eyebrow: 'Advanced Skin Rejuvenation',
    title: 'Advanced MNRF Treatment',
    tagline: 'Renew, Repair, and Rejuvenate Your Skin Naturally',
    intro:
      'MNRF combines microneedling with radiofrequency to stimulate collagen, improve texture, tighten skin, and reduce acne scars and pores.',
    introDetail:
      'Safe, minimally invasive, and effective for comprehensive skin rejuvenation — delivering visible improvement in skin quality with minimal downtime.',
    processTitle: 'MNRF Treatment Process',
    processDesc:
      'Fine microneedles create microchannels while RF energy stimulates collagen and elastin production, promoting skin repair. Precision treatment ensures maximum effectiveness with minimal discomfort.',
    processSteps: [
      { title: 'Consultation', desc: 'Detailed skin analysis — scarring, pore size, and texture concerns mapped for treatment planning.' },
      { title: 'Skin Prep', desc: 'Skin cleansed and topical numbing applied for a comfortable treatment experience.' },
      { title: 'Microneedling', desc: 'Fine microneedles create precise microchannels across the treatment area.' },
      { title: 'RF Energy', desc: 'Radiofrequency energy delivered through the microchannels to stimulate collagen and elastin.' },
      { title: 'Recovery', desc: 'Minimal downtime — progressive skin improvement in texture, firmness, and clarity over weeks.' },
    ],
    benefitsIntro:
      'MNRF combines two powerful technologies to address scars, pores, and skin laxity for comprehensive rejuvenation from within.',
    benefits: [
      'Reduces acne scars and blemishes',
      'Improves skin texture and tone',
      'Minimizes enlarged pores',
      'Tightens and firms loose skin',
      'Reduces fine lines and wrinkles',
      'Stimulates collagen and elastin',
      'Safe, minimally invasive, effective',
    ],
    whyUsTitle: 'Why Choose Advanced GroHair & GloSkin Clinic?',
    whyUsDesc:
      'Our skin specialists use advanced MNRF technology and personalized treatment plans to deliver comprehensive skin rejuvenation in a safe, hygienic clinical environment.',
    whyUs: [
      'Advanced MNRF Technology',
      'Experienced Skin Specialists',
      'Personalized Treatment Plans',
      'Safe & Hygienic Environment',
      'Minimal Downtime',
      'Natural & Long-Lasting Results',
    ],
    ctaTitle: 'Book Your Consultation Today',
    ctaDesc:
      'Transform your skin with MNRF treatment at Advanced GroHair & GloSkin Clinic. Our specialists will design a personalized plan for visible, lasting skin rejuvenation.',
    sessionDuration: '45 – 75 minutes',
    treatmentType: 'Skin Rejuvenation',
  },

  'tattoo-removal': {
    img: wartImg,
    Icon: X,
    eyebrow: 'Advanced Laser Treatment',
    title: 'Advanced Tattoo Removal Treatment',
    tagline: 'Remove Unwanted Tattoos Safely & Effectively',
    intro:
      'Laser Tattoo Removal targets tattoo pigments beneath the skin without harming surrounding tissue.',
    introDetail:
      'Perfect for complete removal or lightening for cover-ups — our laser technology works on multiple colors with minimal skin damage.',
    processTitle: 'Tattoo Removal Process',
    processDesc:
      'The tattoo is analyzed for size, color, depth, and age. Laser energy breaks down pigments, which are naturally removed by the body. Multiple sessions may be recommended for complete clearance.',
    processSteps: [
      { title: 'Tattoo Analysis', desc: 'Evaluation of tattoo size, color, ink depth, and age to plan the optimal removal protocol.' },
      { title: 'Treatment Plan', desc: 'Session schedule designed based on tattoo complexity and skin type for gradual safe removal.' },
      { title: 'Laser Application', desc: 'Targeted laser energy applied precisely to break down tattoo pigment beneath the skin.' },
      { title: 'Pigment Breakdown', desc: 'Laser shatters ink particles into tiny fragments that the body processes naturally.' },
      { title: 'Natural Clearance', desc: 'Body eliminates broken-down pigment over time — progressive fading with each session.' },
    ],
    benefitsIntro:
      'Laser Tattoo Removal uses precise energy to break down tattoo ink safely, allowing the body to naturally clear the pigment over multiple sessions.',
    benefits: [
      'Safe and effective tattoo reduction',
      'Works on multiple colors',
      'Minimal skin damage',
      'Suitable for small and large tattoos',
      'Gradual fading with natural healing',
      'Non-surgical and precise',
    ],
    whyUsTitle: 'Why Choose Advanced GroHair & GloSkin Clinic?',
    whyUsDesc:
      'Our experienced specialists use advanced laser technology and personalized treatment plans to deliver safe, effective tattoo removal in a hygienic clinical environment.',
    whyUs: [
      'Advanced Laser Technology',
      'Experienced Specialists',
      'Personalized Treatment Plans',
      'Safe & Hygienic Environment',
      'Suitable for Various Tattoo Types & Colors',
    ],
    ctaTitle: 'Book Your Consultation Today',
    ctaDesc:
      'Safely remove unwanted tattoos with Advanced GroHair & GloSkin Clinic\'s laser treatment. Our specialists will design a personalized plan for gradual, effective tattoo removal.',
    sessionDuration: '15 – 45 minutes',
    treatmentType: 'Laser Tattoo Removal',
  },
}

export default function SkinTreatmentDetail({ slug, navigate }) {
  useScrollReveal()
  const t = TREATMENTS[slug]

  if (!t) {
    navigate('services')
    return null
  }

  const TreatmentIcon = t.Icon

  return (
    <main className="st-page">

      {/* Breadcrumb */}
      <div className="st-breadcrumb">
        <div className="container">
          <button className="st-back-btn" onClick={() => navigate('services')}>
            <ChevronLeft size={16} />
            Back to Services
          </button>
          <span className="st-breadcrumb-sep">/</span>
          <span className="st-breadcrumb-label">Skin Treatments</span>
          <span className="st-breadcrumb-sep">/</span>
          <span className="st-breadcrumb-current">{t.title}</span>
        </div>
      </div>

      {/* Hero */}
      <section className="st-hero">
        <div className="container st-hero__inner">
          <div className="st-hero__text reveal">
            <div className="st-hero__eyebrow-wrap">
              <span className="st-hero__eyebrow">{t.eyebrow}</span>
            </div>
            <div className="gold-bar" />
            <h1 className="st-hero__title">{t.title}</h1>
            <p className="st-hero__tagline">{t.tagline}</p>
            <p className="st-hero__intro">{t.intro}</p>
            <div className="st-hero__meta">
              <div className="st-meta-chip">
                <Clock size={14} />
                {t.sessionDuration}
              </div>
              <div className="st-meta-chip">
                <Shield size={14} />
                {t.treatmentType}
              </div>
            </div>
            <div className="st-hero__actions">
              <button className="btn btn-primary" onClick={() => navigate('contact')}>
                Book Consultation
                <ArrowRight size={16} />
              </button>
              <button className="btn btn-secondary" onClick={() => navigate('contact')}>
                Contact Us
              </button>
            </div>
          </div>
          <div className="st-hero__img-wrap reveal-right">
            <img src={t.img} alt={t.title} className="st-hero__img" />
            <div className="st-hero__img-badge">
              <div className="st-hero__img-badge-icon">
                <TreatmentIcon size={18} />
              </div>
              <div>
                <strong>Advanced GloSkin</strong>
                <span>Tiruvannamalai</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section st-intro">
        <div className="container">
          <div className="st-intro__inner reveal">
            <div className="st-intro__text">
              <p className="eyebrow">About This Treatment</p>
              <div className="gold-bar" />
              <h2 className="section-title">
                What is <span>{t.title}?</span>
              </h2>
              <p className="st-intro__para">{t.intro}</p>
              <p className="st-intro__para">{t.introDetail}</p>
            </div>
            <div className="st-intro__highlight">
              <div className="st-highlight-card">
                <div className="st-highlight-icon">
                  <TreatmentIcon size={22} />
                </div>
                <h3>Advanced Technology</h3>
                <p>Delivered by experienced skin specialists using the latest clinical protocols at our Tiruvannamalai clinic.</p>
              </div>
              <div className="st-highlight-card">
                <div className="st-highlight-icon">
                  <Shield size={22} />
                </div>
                <h3>Safe & Effective</h3>
                <p>Every treatment is performed in a safe, hygienic clinical environment with the highest standards of care.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step by Step */}
      <section className="section st-process">
        <div className="container">
          <div className="text-center reveal">
            <p className="eyebrow">Step by Step</p>
            <div className="gold-bar" style={{ margin: '0 auto 22px' }} />
            <h2 className="section-title">{t.processTitle}</h2>
          </div>
          <div className="ht-steps reveal">
            {t.processSteps.map((step, i) => (
              <div key={i} className="ht-step">
                <div className="ht-step__connector" aria-hidden="true" />
                <div className="ht-step__num">{String(i + 1).padStart(2, '0')}</div>
                <div className="ht-step__body">
                  <h4 className="ht-step__title">{step.title}</h4>
                  <p className="ht-step__desc">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section st-benefits">
        <div className="container">
          <div className="text-center reveal">
            <p className="eyebrow">Treatment Advantages</p>
            <div className="gold-bar" style={{ margin: '0 auto 22px' }} />
            <h2 className="section-title">Benefits of <span>{t.title}</span></h2>
            <p className="st-benefits__intro reveal">{t.benefitsIntro}</p>
          </div>
          <div className="st-benefits__grid reveal">
            {t.benefits.map((b, i) => (
              <div key={i} className="st-benefit-item">
                <div className="st-benefit-icon">
                  <Check size={14} />
                </div>
                <span className="st-benefit-text">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="section st-whyus">
        <div className="container">
          <div className="st-whyus__inner reveal">
            <div className="st-whyus__text">
              <p className="eyebrow">Our Commitment</p>
              <div className="gold-bar" />
              <h2 className="section-title">{t.whyUsTitle}</h2>
              <p className="st-whyus__desc">{t.whyUsDesc}</p>
            </div>
            <div className="st-whyus__list">
              {t.whyUs.map((item, i) => (
                <div key={i} className="st-whyus__item">
                  <div className="st-whyus__check">
                    <Check size={14} />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="st-cta">
        <div className="container">
          <div className="st-cta__inner reveal">
            <div className="st-cta__content">
              <p className="eyebrow">Get Started</p>
              <h2 className="st-cta__title">{t.ctaTitle}</h2>
              <p className="st-cta__desc">{t.ctaDesc}</p>
            </div>
            <div className="st-cta__actions">
              <button className="btn btn-primary" onClick={() => navigate('contact')}>
                Book Your Consultation Today
                <ArrowRight size={16} />
              </button>
              <button className="btn btn-secondary" onClick={() => navigate('services')}>
                View All Treatments
              </button>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}
