import { useState, useRef, useEffect } from 'react'
import { MapPin, Phone, Mail, Clock, Send, ChevronRight, ChevronDown } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const SERVICES = [
  'Hybrid Hair Transplant',
  'G Cell Therapy',
  'Regen Pro 9 GFC',
  'Advanced Gel PRP',
  'PRP Pro+ StemX27',
  'Oxygen Laser Therapy',
  'Cosmetic Hair System',
  'Beard Transplant',
  'Glutalite IV Drip',
  'Chemical Peel',
  'Photo Carbon Skin Polish',
  'Laser Hair Reduction',
  'Hydra Lift Skin Booster',
  'Lip Micropigmentation',
  'Botox & Fillers',
  'MNRF Treatment',
  'Tattoo Removal',
  'Other / General Inquiry',
]

const API_URL = 'https://adgrohairgloskintiruvannamalai.com/api/email.php'

function defaultDate() {
  const d = new Date()
  return d.toISOString().slice(0, 10)
}

function defaultTime() {
  const d = new Date()
  d.setHours(d.getHours() + 1, 0, 0, 0)
  return `${String(d.getHours()).padStart(2, '0')}:00`
}

function to12Hour(time24) {
  if (!time24) return ''
  const [h, m] = time24.split(':').map(Number)
  const period = h >= 12 ? 'PM' : 'AM'
  const hour12 = h % 12 === 0 ? 12 : h % 12
  return `${hour12}:${String(m).padStart(2, '0')} ${period}`
}

export default function Contact({ navigate }) {
  useScrollReveal()
  const [service, setService] = useState('')
  const [dropOpen, setDropOpen] = useState(false)
  const [date, setDate] = useState(defaultDate)
  const [time, setTime] = useState(defaultTime)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')
  const dropRef = useRef(null)

  useEffect(() => {
    function handleClick(e) {
      if (dropRef.current && !dropRef.current.contains(e.target)) setDropOpen(false)
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    const data = new FormData(e.target)
    const payload = {
      name: data.get('name'),
      email: data.get('email'),
      phone: data.get('phone'),
      date,
      time: to12Hour(time),
      treatment: service || 'General Inquiry',
      message: data.get('message'),
      source: 'Website Form',
    }
    setSubmitting(true)
    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error('Request failed')
      navigate('thankyou')
    } catch (err) {
      setError('Something went wrong sending your request. Please try again or call us directly.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <main>

      {/* ── PAGE HERO ── */}
      <section className="page-hero ph-contact">
        <div className="ph-contact__mesh" aria-hidden="true" />
        <div className="container">
          <div className="ph-contact__split">
            <div style={{position:'relative',zIndex:1}}>
              <p className="page-hero__eyebrow">Contact Us</p>
              <div className="gold-bar" />
              <h1 className="page-hero__title">
                We'd love to <span>hear from you</span>.
              </h1>
              <p className="page-hero__sub">
                Questions about a treatment, pricing, or your first visit? Send us a note —
                our team responds within one business day.
              </p>
            </div>
            <div className="ph-contact__card">
              <a href="tel:+917599056789" className="ph-contact__info-row ph-contact__info-row--link">
                <div className="ph-contact__info-icon">
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.09 10.8 19.79 19.79 0 01.05 2.19 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                </div>
                <div>
                  <div className="ph-contact__info-label">Phone</div>
                  <div className="ph-contact__info-value">+91 75990 56789</div>
                </div>
              </a>
              <a href="mailto:tiruvannamalai@adgrohair.com" className="ph-contact__info-row ph-contact__info-row--link">
                <div className="ph-contact__info-icon">
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </div>
                <div>
                  <div className="ph-contact__info-label">Email</div>
                  <div className="ph-contact__info-value">tiruvannamalai@adgrohair.com</div>
                </div>
              </a>
              <a href="https://www.google.com/maps?q=Second+Floor,+No.1551,+Vellore+Thoothukudi+Hwy,+above+Reliance+Digital,+Thendral+Nagar,+Vengikkal,+Tiruvannamalai,+Tamil+Nadu+606604" target="_blank" rel="noopener noreferrer" className="ph-contact__info-row ph-contact__info-row--link">
                <div className="ph-contact__info-icon">
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div>
                  <div className="ph-contact__info-label">Location</div>
                  <div className="ph-contact__info-value">Second Floor, No.1551, Vellore - Thoothukudi Hwy, Vengikkal, Tiruvannamalai 606604</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── QUICK CONTACT BAR ── */}
      <div className="cq-bar reveal">
        <div className="container">
          <div className="cq-bar__inner">
            <a href="tel:+917599056789" className="cq-bar__item">
              <div className="cq-bar__icon"><Phone size={16} /></div>
              <div>
                <div className="cq-bar__label">Call us</div>
                <div className="cq-bar__value">+91 75990 56789</div>
              </div>
            </a>
            <div className="cq-bar__divider" />
            <a href="mailto:tiruvannamalai@adgrohair.com" className="cq-bar__item">
              <div className="cq-bar__icon"><Mail size={16} /></div>
              <div>
                <div className="cq-bar__label">Email us</div>
                <div className="cq-bar__value">tiruvannamalai@adgrohair.com</div>
              </div>
            </a>
            <div className="cq-bar__divider" />
            <div className="cq-bar__item">
              <div className="cq-bar__icon"><Clock size={16} /></div>
              <div>
                <div className="cq-bar__label">Open hours</div>
                <div className="cq-bar__value">Mon – Sat, 10 AM – 8 PM</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── CONTACT BODY ── */}
      <section className="cq-section">
        <div className="container">
          <div className="cq-grid">

            {/* ── LEFT: FORM ── */}
            <div className="cq-form-wrap reveal-left">
              <div className="cq-form-header">
                <p className="eyebrow">Send a Message</p>
                <div className="gold-bar" />
                <h2 className="cq-form-title">Book your <span>consultation</span></h2>
                <p className="cq-form-sub">Fill in your details and we'll get back to you within a few hours.</p>
              </div>

              <form className="cq-form" onSubmit={handleSubmit}>
                <div className="cq-form-row">
                  <div className="cq-field">
                    <input className="cq-input" name="name" placeholder=" " required />
                    <label className="cq-label">Full name</label>
                    <span className="cq-line" />
                  </div>
                  <div className="cq-field">
                    <input className="cq-input" type="email" name="email" placeholder=" " required />
                    <label className="cq-label">Email address</label>
                    <span className="cq-line" />
                  </div>
                </div>
                <div className="cq-field">
                  <input className="cq-input" type="tel" name="phone" placeholder=" " required />
                  <label className="cq-label">Phone number</label>
                  <span className="cq-line" />
                </div>
                <div className="cq-field cq-field--select" ref={dropRef}>
                  <input type="hidden" name="service" value={service} />
                  <div
                    className={`cq-input cq-drop-trigger${dropOpen ? ' cq-drop-trigger--open' : ''}`}
                    onClick={() => setDropOpen(o => !o)}
                    tabIndex={0}
                    onKeyDown={e => e.key === 'Enter' && setDropOpen(o => !o)}
                  >
                    <span className={service ? 'cq-drop-value' : 'cq-drop-placeholder'}>{service || ''}</span>
                    <ChevronDown size={16} className={`cq-drop-chevron${dropOpen ? ' cq-drop-chevron--open' : ''}`} />
                  </div>
                  <label className={`cq-label${service ? ' cq-label--active' : ''}`}>Treatment interest</label>
                  <span className="cq-line" />
                  {dropOpen && (
                    <ul className="cq-drop-list">
                      {SERVICES.map(s => (
                        <li
                          key={s}
                          className={`cq-drop-item${service === s ? ' cq-drop-item--selected' : ''}`}
                          onClick={() => { setService(s); setDropOpen(false) }}
                        >
                          {s}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                <div className="cq-field">
                  <textarea className="cq-input cq-textarea" name="message" placeholder=" " required />
                  <label className="cq-label">Your message</label>
                  <span className="cq-line" />
                </div>
                {error && <p className="cq-note" style={{ color: '#ec0a1d' }}>{error}</p>}
                <p className="cq-note">
                  By submitting, you agree to our{' '}
                  <button type="button" className="cq-note-link" onClick={() => navigate('privacy')}>privacy practices</button>.
                </p>
                <button type="submit" className="cq-submit" disabled={submitting}>
                  <Send size={16} /> {submitting ? 'Sending…' : 'Send Message'}
                </button>
              </form>
            </div>

            {/* ── RIGHT: MAP ── */}
            <div className="cq-right reveal-right">
              <div className="cq-map-wrap">
                <div className="cq-map-label">
                  <MapPin size={14} />
                  Tiruvannamalai, Tamil Nadu
                </div>
                <iframe
                  className="cq-map-frame"
                  title="Advanced GroHair & GloSkin Tiruvannamalai"
                  src="https://maps.google.com/maps?q=Arunachaleswarar+Temple+Tiruvannamalai+Tamil+Nadu&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
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
              Ready to take the first step?
            </h2>
            <p className="home-cta__sub">
              Our specialists are here to listen, plan, and deliver results
              tailored to your unique goals — gently, precisely, beautifully.
            </p>
            <div className="home-cta__actions">
              <button className="btn btn-gold" onClick={() => navigate('services')}>
                Explore Treatments <ChevronRight size={15} />
              </button>
              <button className="btn btn-secondary" onClick={() => navigate('about')}>
                Learn About Us
              </button>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}
