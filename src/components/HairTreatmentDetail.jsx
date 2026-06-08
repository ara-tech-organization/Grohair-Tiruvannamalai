import { Check, ChevronLeft, ArrowRight, Clock, Leaf, Zap, Shield } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

import glutaImg   from '../assets/treatments/glutathioneiv.webp'
import stemXImg   from '../assets/treatments/stem-x-pro.webp'
import hairTxImg  from '../assets/treatments/basic-hair-transplant-fue.webp'
import regenImg   from '../assets/treatments/regenpro9.webp'
import prpImg     from '../assets/treatments/prp.webp'
import oltImg     from '../assets/treatments/olt.webp'
import capImg     from '../assets/treatments/celebrity-choice.webp'
import beardImg   from '../assets/treatments/beard-transplant.webp'

const TREATMENTS = {
  glutathione: {
    img: glutaImg,
    eyebrow: 'Advanced Wellness Treatment',
    title: 'Glutathione IV Drip Therapy',
    tagline: 'Revitalize Your Body, Enhance Your Glow',
    intro:
      'Glutathione IV Drips are advanced wellness and skin rejuvenation treatments designed to deliver powerful antioxidants directly into the bloodstream for maximum absorption and effectiveness.',
    introDetail:
      'Known as the body\'s "Master Antioxidant," Glutathione helps support detoxification, improve skin radiance, combat oxidative stress, and promote overall wellness. This treatment offers a safe and efficient way to refresh your body from within while enhancing your natural glow.',
    processTitle: 'Glutathione IV Drip Process',
    processDesc:
      'At Advanced GroHair & GloSkin Clinic, every Glutathione IV Drip session begins with a detailed consultation to understand your health goals, skin concerns, and wellness requirements. During the procedure, a carefully formulated Glutathione solution is administered intravenously under professional supervision. The nutrients are delivered directly into the bloodstream, allowing optimal absorption and faster results compared to oral supplements. The treatment is comfortable, relaxing, and typically completed within 30 to 60 minutes with no downtime required.',
    processSteps: [
      { title: 'Consultation', desc: 'Detailed health assessment to understand your skin concerns, wellness goals, and medical history.' },
      { title: 'Formulation', desc: 'A personalized Glutathione solution is prepared based on your specific health and aesthetic needs.' },
      { title: 'IV Administration', desc: 'Solution administered intravenously under professional supervision for maximum absorption.' },
      { title: 'Relaxation', desc: 'Comfortable 30–60 minute session with no injections or pain — just a gentle drip.' },
      { title: 'No Downtime', desc: 'Walk out refreshed. No recovery period required — return to daily activities immediately.' },
    ],
    benefitsIntro:
      'Glutathione plays a vital role in protecting the body against free radicals, supporting detoxification, and promoting healthy skin. IV therapy ensures efficient delivery, helping you achieve both wellness and aesthetic benefits.',
    benefits: [
      'Promotes brighter and healthier-looking skin',
      'Supports natural detoxification processes',
      'Provides powerful antioxidant protection',
      'Helps reduce the effects of oxidative stress',
      'Improves overall skin radiance and glow',
      'Supports healthy aging and wellness',
      'Enhances energy and vitality',
      'Safe, comfortable, and non-surgical treatment',
    ],
    whyUsTitle: 'Why Choose Advanced GroHair & GloSkin Clinic?',
    whyUsDesc:
      'At Advanced GroHair & GloSkin Clinic, we provide premium IV wellness therapies administered by experienced professionals in a safe and comfortable clinical environment. Our personalized approach ensures every treatment is tailored to support your individual health and aesthetic goals.',
    whyUs: [
      'Experienced Wellness & Aesthetic Specialists',
      'Premium Quality IV Formulations',
      'Personalized Wellness Programs',
      'Safe & Hygienic Clinical Environment',
      'Comfortable & Relaxing Treatment Experience',
      'Focus on Skin Health and Overall Well-Being',
    ],
    ctaTitle: 'Book Your Glutathione IV Drip Session Today',
    ctaDesc:
      'Refresh your body, enhance your skin\'s natural radiance, and support your overall wellness with Glutathione IV Drip Therapy at Advanced GroHair & GloSkin Clinic. Our specialists are ready to create a personalized wellness plan that helps you achieve healthier skin, renewed vitality, and lasting confidence.',
    sessionDuration: '30 – 60 minutes',
    treatmentType: 'Wellness & Aesthetic',
  },

  gcell: {
    img: stemXImg,
    eyebrow: 'Advanced Hair Rejuvenation',
    title: 'G Cell Therapy',
    tagline: 'Rediscover Stronger, Thicker, and Healthier Hair',
    intro:
      'G Cell Therapy at Advanced GroHair & GloSkin Clinic uses growth-factor-rich cellular technology to stimulate dormant hair follicles, reduce hair fall, improve scalp health, and promote natural hair regrowth.',
    introDetail:
      'Ideal for individuals experiencing hair thinning, early hair loss, or weakened hair density, this non-surgical treatment provides long-lasting hair rejuvenation and renewed confidence.',
    processTitle: 'How G Cell Therapy Works',
    processDesc:
      'Every session begins with a detailed scalp analysis and consultation. Our specialists evaluate your hair loss pattern, follicle health, and underlying causes to create a customized treatment plan. Regenerative cellular components are administered directly into targeted areas of the scalp. The minimally invasive procedure is comfortable and usually completed within 45 to 60 minutes.',
    processSteps: [
      { title: 'Scalp Analysis', desc: 'Detailed scalp and follicle assessment to map hair loss patterns and evaluate scalp health.' },
      { title: 'Custom Plan', desc: 'Specialists design a personalized treatment plan based on your unique hair loss profile.' },
      { title: 'Cell Preparation', desc: 'Growth-factor-rich cellular components are prepared using advanced regenerative technology.' },
      { title: 'Administration', desc: 'Cellular components are administered directly into targeted scalp areas with precision.' },
      { title: 'Results', desc: 'Minimally invasive procedure completed in 45–60 minutes with no significant downtime.' },
    ],
    benefitsIntro:
      'G Cell Therapy harnesses the power of advanced regenerative technology to address hair loss at its root, delivering visible and lasting improvement in hair density and scalp health.',
    benefits: [
      'Reduces hair fall',
      'Strengthens hair follicles',
      'Improves hair density and thickness',
      'Activates dormant follicles',
      'Enhances scalp health',
      'Supports a healthy hair growth cycle',
      'Delivers long-lasting, natural results',
    ],
    whyUsTitle: 'Why Choose Advanced GroHair & GloSkin Clinic?',
    whyUsDesc:
      'Our team of experienced hair specialists combines advanced regenerative technology with personalized treatment plans to deliver visible, natural, and lasting results in a safe clinical environment.',
    whyUs: [
      'Experienced Hair Specialists',
      'Advanced Regenerative Technology',
      'Customized Treatment Plans',
      'Safe & Minimally Invasive',
      'Visible Improvement in Hair Density',
      'Modern Clinical Environment',
    ],
    ctaTitle: 'Book Your G Cell Therapy Consultation Today',
    ctaDesc:
      'Take the first step toward stronger, healthier hair with Advanced GroHair & GloSkin Clinic\'s G Cell Therapy. Our specialists are ready to evaluate your hair health and design a personalized plan for lasting hair rejuvenation.',
    sessionDuration: '45 – 60 minutes',
    treatmentType: 'Non-Surgical Hair Restoration',
  },

  hybrid: {
    img: hairTxImg,
    eyebrow: 'Advanced Hair Transplant',
    title: 'Hybrid Hair Transplant',
    tagline: 'Achieve Fuller, Natural-Looking Hair',
    intro:
      'Advanced Hybrid Hair Transplant combines modern FUE technology with enhanced graft implantation techniques to deliver superior hair density, natural hairline design, and long-lasting results.',
    introDetail:
      'Perfect for thinning hair, receding hairlines, or bald patches, our personalized approach restores your hair and confidence with precision and care.',
    processTitle: 'The Hybrid Hair Transplant Process',
    processDesc:
      'The journey begins with a comprehensive scalp analysis and consultation. Specialists assess your hair loss pattern, donor area quality, and aesthetic goals to develop a customized plan. Healthy hair follicles are extracted from the donor area and strategically implanted into thinning regions, ensuring natural growth direction, improved density, and high graft survival. The procedure is minimally invasive, performed under local anesthesia for patient comfort.',
    processSteps: [
      { title: 'Consultation', desc: 'Comprehensive scalp analysis — hair loss pattern, donor area quality, and aesthetic goals assessed.' },
      { title: 'Custom Plan', desc: 'A personalized hairline design and graft plan is developed for your facial structure.' },
      { title: 'Extraction', desc: 'Healthy follicles are carefully extracted from the donor area using advanced FUE technique.' },
      { title: 'Implantation', desc: 'Follicles are strategically implanted at natural growth angles for maximum density.' },
      { title: 'Recovery', desc: 'Minimally invasive procedure under local anesthesia with fast recovery and lasting results.' },
    ],
    benefitsIntro:
      'The Hybrid Hair Transplant technique offers the best of both worlds — precise FUE extraction combined with advanced implantation for results that are natural, dense, and permanent.',
    benefits: [
      'Natural-looking hairline design',
      'Increased graft survival',
      'Enhanced hair density and coverage',
      'Minimal scarring and downtime',
      'Permanent, long-lasting results',
      'Faster recovery',
      'Improved overall appearance and confidence',
    ],
    whyUsTitle: 'Why Choose Advanced GroHair & GloSkin Clinic?',
    whyUsDesc:
      'Our expert hair transplant surgeons combine advanced hybrid technology with individualized hairline design to deliver dense, natural, and permanent results in a safe and hygienic environment.',
    whyUs: [
      'Expert Hair Transplant Surgeons',
      'Advanced Hybrid Technology',
      'Customized Hairline Design',
      'Safe & Hygienic Clinical Environment',
      'Dense, Natural, and Long-Lasting Results',
    ],
    ctaTitle: 'Book Your Hybrid Hair Transplant Consultation Today',
    ctaDesc:
      'Restore your hair and confidence with Advanced GroHair & GloSkin Clinic\'s Hybrid Hair Transplant. Our specialists are ready to design a personalized treatment plan that delivers the natural, dense results you deserve.',
    sessionDuration: 'Varies by case',
    treatmentType: 'Surgical Hair Restoration',
  },

  'regen-pro9': {
    img: regenImg,
    eyebrow: 'Advanced Hair Restoration',
    title: 'Regen Pro 9 GFC Hair Restoration',
    tagline: 'Revitalize Your Hair Naturally',
    intro:
      'Regen Pro 9 GFC (Growth Factor Concentrate) uses highly concentrated growth factors derived from your blood to stimulate dormant follicles, promote healthier hair growth, and improve scalp health.',
    introDetail:
      'Safe, minimally invasive, and non-surgical, it is ideal for early-stage hair loss and thinning hair, offering natural and visible results with no significant downtime.',
    processTitle: 'The Regen Pro 9 GFC Process',
    processDesc:
      'Your treatment begins with a detailed scalp assessment. A small blood sample is processed to isolate concentrated growth factors, which are carefully injected into targeted scalp areas. These growth factors activate follicles, improve circulation, and support stronger hair growth. The procedure is quick, comfortable, and requires minimal downtime.',
    processSteps: [
      { title: 'Scalp Assessment', desc: 'Detailed evaluation of scalp condition, hair loss stage, and follicle health.' },
      { title: 'Blood Draw', desc: 'A small blood sample is collected and processed to isolate concentrated growth factors.' },
      { title: 'GFC Preparation', desc: 'Growth Factor Concentrate is extracted and prepared for targeted scalp injection.' },
      { title: 'Injection', desc: 'GFC is carefully injected into targeted scalp zones to activate follicles and improve circulation.' },
      { title: 'Recovery', desc: 'Quick, comfortable procedure completed in 45–60 minutes with minimal downtime.' },
    ],
    benefitsIntro:
      'Regen Pro 9 GFC harnesses your body\'s own growth factors to repair, strengthen, and reactivate hair follicles — delivering natural regrowth without surgery.',
    benefits: [
      'Reduces excessive hair fall',
      'Stimulates dormant hair follicles',
      'Promotes thicker, stronger hair',
      'Improves scalp health and circulation',
      'Minimally invasive and virtually painless',
      'Natural, long-lasting results',
    ],
    whyUsTitle: 'Why Choose Advanced GroHair & GloSkin Clinic?',
    whyUsDesc:
      'Our experienced hair restoration specialists use advanced growth factor technology and personalized treatment plans to deliver natural, visible results in a safe and hygienic clinical environment.',
    whyUs: [
      'Experienced Hair Restoration Specialists',
      'Advanced Growth Factor Technology',
      'Personalized Treatment Plans',
      'Safe & Hygienic Clinical Environment',
      'Non-Surgical Hair Regrowth',
      'Natural and Visible Results',
    ],
    ctaTitle: 'Book Your Regen Pro 9 GFC Consultation Today',
    ctaDesc:
      'Take the first step toward fuller, healthier hair with Regen Pro 9 GFC at Advanced GroHair & GloSkin Clinic. Our specialists will design a personalized plan to help you achieve the thicker, stronger hair you deserve.',
    sessionDuration: '45 – 60 minutes',
    treatmentType: 'Non-Surgical Hair Restoration',
  },

  'gel-prp': {
    img: prpImg,
    eyebrow: 'Advanced PRP Therapy',
    title: 'Advanced Gel PRP Hair Restoration',
    tagline: 'Strengthen Hair Follicles and Restore Growth Naturally',
    intro:
      'Advanced Gel PRP combines PRP therapy with a specialized gel matrix for prolonged growth factor release, stimulating hair regrowth, improving scalp health, and reducing hair fall.',
    introDetail:
      'Safe, minimally invasive, and effective, it is ideal for early to moderate hair loss, offering natural hair restoration with long-lasting results.',
    processTitle: 'The Advanced Gel PRP Process',
    processDesc:
      'A small blood sample is processed to isolate platelet-rich plasma, which is converted into a growth-factor-rich gel. This gel is carefully injected into the scalp to stimulate dormant follicles, improve circulation, and support healthier hair growth. Treatment is comfortable with minimal downtime.',
    processSteps: [
      { title: 'Blood Collection', desc: 'A small blood sample is collected from the patient in a sterile clinical setting.' },
      { title: 'PRP Processing', desc: 'Blood is centrifuged to isolate platelet-rich plasma with high growth factor concentration.' },
      { title: 'Gel Conversion', desc: 'PRP is converted into a sustained-release gel matrix for prolonged growth factor delivery.' },
      { title: 'Scalp Injection', desc: 'Gel is carefully injected into targeted scalp areas to stimulate dormant follicles.' },
      { title: 'Recovery', desc: 'Comfortable treatment completed in 45–60 minutes — minimal downtime, visible results.' },
    ],
    benefitsIntro:
      'Advanced Gel PRP delivers growth factors deep into the scalp through a sustained-release matrix, ensuring longer-lasting stimulation of hair follicles and superior results compared to conventional PRP.',
    benefits: [
      'Reduces hair fall and thinning',
      'Stimulates natural hair regrowth',
      'Strengthens weak follicles',
      'Improves hair density and thickness',
      'Enhances scalp nourishment',
      'Safe, minimally invasive, and long-lasting',
    ],
    whyUsTitle: 'Why Choose Advanced GroHair & GloSkin Clinic?',
    whyUsDesc:
      'Our experienced hair restoration experts apply advanced Gel PRP technology with customized treatment plans to deliver visible, natural hair growth in a safe and sterile clinical environment.',
    whyUs: [
      'Experienced Hair Restoration Experts',
      'Advanced Gel PRP Technology',
      'Customized Treatment Plans',
      'Safe & Sterile Clinical Environment',
      'Non-Surgical Hair Restoration',
      'Natural and Visible Hair Growth',
    ],
    ctaTitle: 'Book Your Advanced Gel PRP Consultation Today',
    ctaDesc:
      'Achieve stronger, thicker, and healthier hair with Advanced Gel PRP at Advanced GroHair & GloSkin Clinic. Our specialists are ready to design a personalized plan that delivers visible, natural results.',
    sessionDuration: '45 – 60 minutes',
    treatmentType: 'Non-Surgical Hair Restoration',
  },

  'oxygen-laser': {
    img: oltImg,
    eyebrow: 'Advanced Laser Therapy',
    title: 'Oxygen Laser Therapy for Hair',
    tagline: 'Control Dandruff, Reduce Hair Fall, and Stimulate Hair Growth',
    intro:
      'Oxygen Laser Therapy is an advanced, non-invasive treatment designed to improve scalp health, control dandruff, reduce hair fall, and promote natural hair growth.',
    introDetail:
      'Using oxygen-powered laser technology, this therapy stimulates blood circulation, nourishes hair follicles, and creates a healthier environment for stronger, thicker hair.',
    processTitle: 'The Oxygen Laser Therapy Process',
    processDesc:
      'Every session begins with a detailed scalp analysis and consultation. Oxygen-rich laser energy is applied to the scalp, enhancing circulation, reducing dandruff, and activating dormant follicles. The treatment is safe, comfortable, and requires no downtime, making it ideal for those with busy schedules.',
    processSteps: [
      { title: 'Scalp Analysis', desc: 'Detailed consultation and scalp evaluation to identify concerns and customize the session.' },
      { title: 'Scalp Prep', desc: 'The scalp is gently cleansed and prepared to ensure optimal laser penetration.' },
      { title: 'Laser Application', desc: 'Oxygen-enriched laser energy is applied across the scalp to stimulate circulation and follicles.' },
      { title: 'Follicle Activation', desc: 'Laser energy activates dormant follicles, reduces dandruff, and strengthens hair roots.' },
      { title: 'No Downtime', desc: 'Safe, comfortable session in 30–45 minutes — return to your day immediately after.' },
    ],
    benefitsIntro:
      'Oxygen Laser Therapy targets the root causes of scalp problems — poor circulation, dandruff, and weakened follicles — using the proven power of oxygen-enriched laser energy.',
    benefits: [
      'Controls dandruff and scalp dryness',
      'Reduces hair fall and thinning',
      'Stimulates dormant hair follicles',
      'Strengthens weak and damaged hair',
      'Improves overall scalp health',
      'Supports natural hair regrowth',
      'Safe, non-invasive, and comfortable',
    ],
    whyUsTitle: 'Why Choose Advanced GroHair & GloSkin Clinic?',
    whyUsDesc:
      'Our experienced hair specialists deliver Oxygen Laser Therapy using advanced technology and customized scalp treatment plans to ensure visible improvement in hair density and scalp health.',
    whyUs: [
      'Experienced Hair Specialists',
      'Advanced Oxygen Laser Technology',
      'Customized Scalp & Hair Treatment Plans',
      'Safe & Non-Invasive Procedure',
      'Modern Clinical Environment',
      'Visible Improvement in Hair Density',
    ],
    ctaTitle: 'Book Your Oxygen Laser Therapy Consultation Today',
    ctaDesc:
      'Take the first step toward a healthier scalp and stronger hair with Advanced GroHair & GloSkin Clinic\'s Oxygen Laser Therapy. Our specialists are ready to create a personalized scalp treatment plan for lasting results.',
    sessionDuration: '30 – 45 minutes',
    treatmentType: 'Non-Invasive Scalp Therapy',
  },

  'cosmetic-hair': {
    img: capImg,
    eyebrow: 'Advanced Cosmetic Solution',
    title: 'Cosmetic Hair System Solutions',
    tagline: 'Instant Hair Transformation with Natural Results',
    intro:
      'A Cosmetic Hair System provides a non-surgical solution for hair thinning or baldness. Customized to match your hair color, texture, and style, it delivers immediate, natural-looking results safely and painlessly.',
    introDetail:
      'Whether you are experiencing early-stage hair thinning or advanced hair loss, our Cosmetic Hair Systems are designed to blend seamlessly with your natural hair for a confident, natural appearance.',
    processTitle: 'The Cosmetic Hair System Process',
    processDesc:
      'A consultation and scalp assessment determine your ideal system. The hair system is customized to blend seamlessly with your natural hair and facial features, then professionally fitted with advanced attachment techniques for comfort and durability. Our specialists ensure the system is styled to perfection for a completely natural appearance.',
    processSteps: [
      { title: 'Consultation', desc: 'Thorough scalp assessment and lifestyle discussion to identify your ideal hair system.' },
      { title: 'Customization', desc: 'Hair system crafted to precisely match your color, texture, density, and facial features.' },
      { title: 'Fitting', desc: 'System professionally fitted using advanced attachment techniques for comfort and security.' },
      { title: 'Styling', desc: 'Expert stylists shape and finish the system for a completely natural, seamless appearance.' },
      { title: 'Same-Day Results', desc: 'Walk out with an instant transformation — no surgery, no waiting, no downtime.' },
    ],
    benefitsIntro:
      'Cosmetic Hair Systems offer an immediate, non-surgical solution for all stages of hair loss — delivering a natural-looking, comfortable, and durable result tailored to your lifestyle.',
    benefits: [
      'Instant, visible transformation',
      'Natural-looking hair appearance',
      'Non-surgical and painless',
      'Customized to your hair and style',
      'Suitable for all stages of hair loss',
      'Comfortable, lightweight, and durable',
    ],
    whyUsTitle: 'Why Choose Advanced GroHair & GloSkin Clinic?',
    whyUsDesc:
      'At Advanced GroHair & GloSkin Clinic, we offer personalized Cosmetic Hair System consultations, premium-quality systems, and expert fitting by trained professionals with ongoing maintenance support.',
    whyUs: [
      'Personalized Hair System Consultation',
      'Premium Quality Hair Systems',
      'Expert Fitting and Styling',
      'Comfortable & Secure Attachment',
      'Ongoing Maintenance and Support',
    ],
    ctaTitle: 'Book Your Cosmetic Hair System Consultation Today',
    ctaDesc:
      'Restore your confidence instantly with a customized Cosmetic Hair System at Advanced GroHair & GloSkin Clinic. Our experts will guide you to the perfect solution for an immediate, natural-looking transformation.',
    sessionDuration: 'Same-day fitting available',
    treatmentType: 'Non-Surgical Hair Solution',
  },

  'prp-stemx27': {
    img: stemXImg,
    eyebrow: 'Next-Generation Hair Restoration',
    title: 'PRP Pro+ StemX27 Hair Restoration',
    tagline: 'Next-Generation Hair Regrowth Solution',
    intro:
      'PRP Pro+ StemX27 combines platelet-rich plasma with StemX27 growth factor technology to stimulate dormant follicles, strengthen roots, improve scalp health, and promote natural hair regrowth.',
    introDetail:
      'Safe, non-surgical, and highly effective for early-stage hair loss, this advanced protocol delivers superior results by fusing the proven benefits of PRP with cutting-edge StemX27 growth factor enhancement.',
    processTitle: 'The PRP Pro+ StemX27 Process',
    processDesc:
      'A blood sample is collected and processed to extract PRP, which is enhanced with StemX27 technology. The mixture is injected into targeted scalp areas to activate follicles, improve circulation, and encourage healthier hair growth. Treatment is comfortable with minimal downtime.',
    processSteps: [
      { title: 'Blood Draw', desc: 'A blood sample is collected in a sterile clinical environment for processing.' },
      { title: 'PRP Extraction', desc: 'Centrifugation isolates platelet-rich plasma with high growth factor concentration.' },
      { title: 'StemX27 Enhancement', desc: 'PRP is combined with StemX27 growth factor technology for amplified follicle stimulation.' },
      { title: 'Scalp Injection', desc: 'Enhanced mixture is injected into targeted zones to activate follicles and improve scalp health.' },
      { title: 'Recovery', desc: 'Comfortable 45–60 minute session with minimal downtime and visible natural results.' },
    ],
    benefitsIntro:
      'PRP Pro+ StemX27 goes beyond conventional PRP by integrating StemX27 growth factor technology — delivering a more powerful, targeted stimulus for hair follicle activation and regrowth.',
    benefits: [
      'Reduces hair fall',
      'Stimulates dormant follicles',
      'Promotes thicker, healthier hair',
      'Strengthens weak roots',
      'Improves scalp nourishment and circulation',
      'Non-surgical and minimally invasive',
      'Natural and long-lasting results',
    ],
    whyUsTitle: 'Why Choose Advanced GroHair & GloSkin Clinic?',
    whyUsDesc:
      'Our experienced specialists deliver PRP Pro+ StemX27 using advanced technology and personalized treatment plans to ensure natural, visible hair regrowth in a safe and sterile environment.',
    whyUs: [
      'Experienced Specialists',
      'Advanced PRP Pro+ StemX27 Technology',
      'Personalized Treatment Plans',
      'Safe & Sterile Environment',
      'Natural and Visible Hair Regrowth',
    ],
    ctaTitle: 'Book Your PRP Pro+ StemX27 Consultation Today',
    ctaDesc:
      'Start your journey to thicker, healthier hair with PRP Pro+ StemX27 at Advanced GroHair & GloSkin Clinic. Our specialists will create a personalized plan to help you achieve visible, natural hair regrowth.',
    sessionDuration: '45 – 60 minutes',
    treatmentType: 'Non-Surgical Hair Restoration',
  },

  beard: {
    img: beardImg,
    eyebrow: 'Advanced Facial Hair Restoration',
    title: 'Beard Transplant',
    tagline: 'Achieve a Fuller, Well-Defined Beard Naturally',
    intro:
      'A Beard Transplant enhances facial hair density, fills patchy areas, and creates a natural, permanent beard. Using your own hair follicles, it delivers realistic, long-lasting results.',
    introDetail:
      'Whether you are looking to fill patchy areas, define your beard shape, or build a full beard from scratch, our expert surgeons design a customized beard that complements your facial features.',
    processTitle: 'The Beard Transplant Process',
    processDesc:
      'After consultation and facial hair assessment, healthy follicles are extracted from the donor area and implanted into the beard region at correct angles for natural growth. The procedure is performed under local anesthesia with minimal downtime, ensuring patient comfort throughout.',
    processSteps: [
      { title: 'Consultation', desc: 'Facial hair assessment and beard design planning tailored to your facial structure.' },
      { title: 'Donor Prep', desc: 'Donor area identified and prepared for safe, minimal-scar follicle extraction.' },
      { title: 'Extraction', desc: 'Healthy follicles extracted using advanced FUE techniques under local anesthesia.' },
      { title: 'Implantation', desc: 'Follicles implanted at precise natural angles for authentic beard growth pattern.' },
      { title: 'Recovery', desc: 'Minimal downtime post-procedure — permanent, natural-looking results develop over months.' },
    ],
    benefitsIntro:
      'Beard Transplants use your own follicles to deliver permanent, natural-looking facial hair that grows and behaves exactly like your natural beard.',
    benefits: [
      'Fuller and denser beard',
      'Natural-looking growth',
      'Permanent results',
      'Customized beard design',
      'Fills patchy areas',
      'Boosts facial aesthetics and confidence',
    ],
    whyUsTitle: 'Why Choose Advanced GroHair & GloSkin Clinic?',
    whyUsDesc:
      'Our experienced specialists combine advanced extraction techniques with customized beard design to deliver natural-looking, permanent results in a safe and hygienic clinical environment.',
    whyUs: [
      'Experienced Specialists',
      'Advanced Extraction Techniques',
      'Customized Beard Design',
      'Natural Hair Direction & Density',
      'Safe & Hygienic Clinical Environment',
    ],
    ctaTitle: 'Book Your Beard Transplant Consultation Today',
    ctaDesc:
      'Create a fuller, well-defined beard with Advanced GroHair & GloSkin Clinic\'s Beard Transplant. Our experts will design a customized beard plan that enhances your facial aesthetics and delivers permanent, natural results.',
    sessionDuration: 'Varies by case',
    treatmentType: 'Surgical Beard Restoration',
  },
}

export default function HairTreatmentDetail({ slug, navigate }) {
  useScrollReveal()
  const t = TREATMENTS[slug]

  if (!t) {
    navigate('services')
    return null
  }

  return (
    <main className="ht-page">

      {/* Breadcrumb */}
      <div className="ht-breadcrumb">
        <div className="container">
          <button className="ht-back-btn" onClick={() => navigate('services')}>
            <ChevronLeft size={16} />
            Back to Services
          </button>
          <span className="ht-breadcrumb-sep">/</span>
          <span className="ht-breadcrumb-label">Hair Treatments</span>
          <span className="ht-breadcrumb-sep">/</span>
          <span className="ht-breadcrumb-current">{t.title}</span>
        </div>
      </div>

      {/* Hero */}
      <section className="ht-hero">
        <div className="container ht-hero__inner">
          <div className="ht-hero__text reveal">
            <p className="eyebrow">{t.eyebrow}</p>
            <div className="gold-bar" />
            <h1 className="ht-hero__title">{t.title}</h1>
            <p className="ht-hero__tagline">{t.tagline}</p>
            <p className="ht-hero__intro">{t.intro}</p>
            <div className="ht-hero__meta">
              <div className="ht-meta-chip">
                <Clock size={14} />
                {t.sessionDuration}
              </div>
              <div className="ht-meta-chip">
                <Shield size={14} />
                {t.treatmentType}
              </div>
            </div>
            <div className="ht-hero__actions">
              <button className="btn btn-primary" onClick={() => navigate('contact')}>
                Book Consultation
                <ArrowRight size={16} />
              </button>
              <button className="btn btn-secondary" onClick={() => navigate('contact')}>
                Contact Us
              </button>
            </div>
          </div>
          <div className="ht-hero__img-wrap reveal-right">
            <img src={t.img} alt={t.title} className="ht-hero__img" />
            <div className="ht-hero__img-badge">
              <div className="ht-hero__img-badge-icon">
                <Leaf size={18} />
              </div>
              <div>
                <strong>Advanced GroHair</strong>
                <span>Tiruvannamalai</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section ht-intro">
        <div className="container">
          <div className="ht-intro__inner reveal">
            <div className="ht-intro__text">
              <p className="eyebrow">About This Treatment</p>
              <div className="gold-bar" />
              <h2 className="section-title">
                What is <span>{t.title}?</span>
              </h2>
              <p className="ht-intro__para">{t.intro}</p>
              <p className="ht-intro__para">{t.introDetail}</p>
            </div>
            <div className="ht-intro__highlight">
              <div className="ht-highlight-card">
                <div className="ht-highlight-icon">
                  <Zap size={22} />
                </div>
                <h3>Advanced Technology</h3>
                <p>Delivered by experienced specialists using the latest clinical protocols at our Tiruvannamalai clinic.</p>
              </div>
              <div className="ht-highlight-card">
                <div className="ht-highlight-icon">
                  <Shield size={22} />
                </div>
                <h3>Safe & Effective</h3>
                <p>Every treatment is performed in a safe, hygienic clinical environment with the highest standards of care.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section ht-process">
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
      <section className="section ht-benefits">
        <div className="container">
          <div className="text-center reveal">
            <p className="eyebrow">Treatment Advantages</p>
            <div className="gold-bar" style={{ margin: '0 auto 22px' }} />
            <h2 className="section-title">Benefits <span>Include</span></h2>
            {t.benefitsIntro && (
              <p className="section-sub text-center" style={{ margin: '0 auto 48px' }}>
                {t.benefitsIntro}
              </p>
            )}
          </div>
          <div className="ht-benefits__grid">
            {t.benefits.map((b, i) => (
              <div key={i} className={`ht-benefit-item reveal d${(i % 4) + 1}`}>
                <div className="ht-benefit-icon">
                  <Check size={16} />
                </div>
                <span className="ht-benefit-text">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section section--alt ht-why">
        <div className="section--alt alt-ring" aria-hidden="true" />
        <div className="section--alt alt-ring2" aria-hidden="true" />
        <div className="section--alt alt-cross" aria-hidden="true" />
        <div className="container">
          <div className="ht-why__inner">
            <div className="ht-why__text reveal-left">
              <p className="eyebrow">Our Commitment</p>
              <div className="gold-bar" />
              <h2 className="section-title">{t.whyUsTitle}</h2>
              <p className="section-sub">{t.whyUsDesc}</p>
              <button
                className="btn btn-primary"
                style={{ marginTop: '32px' }}
                onClick={() => navigate('contact')}
              >
                Book Consultation
                <ArrowRight size={16} />
              </button>
            </div>
            <div className="ht-why__list reveal-right">
              {t.whyUs.map((item, i) => (
                <div key={i} className="ht-why-item">
                  <div className="ht-why-check">
                    <Check size={16} />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="ht-cta-final">
        <div className="container">
          <div className="ht-cta-final__inner reveal">
            <p className="eyebrow" style={{ color: '#ec0a1d' }}>Get Started Today</p>
            <div className="gold-bar" style={{ margin: '0 auto 22px' }} />
            <h2 className="ht-cta-final__title">{t.ctaTitle}</h2>
            <p className="ht-cta-final__desc">{t.ctaDesc}</p>
            <div className="ht-cta-final__actions">
              <button className="btn btn-primary" onClick={() => navigate('contact')}>
                Book An Appointment
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
