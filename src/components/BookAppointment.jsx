import { useState, useRef, useEffect } from 'react'
import { Send, ChevronDown, Sparkles, ShieldCheck, CheckCircle2 } from 'lucide-react'
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

function todayISO() {
  return new Date().toISOString().slice(0, 10)
}

function formatDate(iso) {
  if (!iso) return ''
  const d = new Date(iso)
  return d.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' })
}

function to12Hour(time24) {
  if (!time24) return ''
  const [h, m] = time24.split(':').map(Number)
  const period = h >= 12 ? 'PM' : 'AM'
  const hour12 = h % 12 === 0 ? 12 : h % 12
  return `${hour12}:${String(m).padStart(2, '0')} ${period}`
}

export default function BookAppointment({ navigate }) {
  useScrollReveal()
  const [service, setService] = useState('')
  const [dropOpen, setDropOpen] = useState(false)
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [name, setName] = useState('')
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
    if (!service || !date || !time) {
      setError('Please choose a treatment, date, and time slot.')
      return
    }
    const data = new FormData(e.target)
    const payload = {
      name: data.get('name'),
      email: data.get('email'),
      phone: data.get('phone'),
      date,
      time: to12Hour(time),
      treatment: service,
      message: data.get('message'),
      source: 'Book Appointment Page',
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
      <section className="page-hero" style={{ textAlign: 'center' }}>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <p className="page-hero__eyebrow">Book Appointment</p>
          <div className="gold-bar" style={{ margin: '0 auto 18px' }} />
          <h1 className="page-hero__title" style={{ maxWidth: 640 }}>
            Reserve your private <span>consultation</span>
          </h1>
          <p className="page-hero__sub" style={{ maxWidth: 560 }}>
            Tell us a little about you and choose a time that works. Our team at
            Advanced GroHair &amp; GloSkin Tiruvannamalai will confirm shortly.
          </p>
        </div>
      </section>

      {/* ── BOOKING FORM ── */}
      <section className="cq-section">
        <div className="container">
          <div className="cq-grid" style={{ gridTemplateColumns: '1.6fr 1fr' }}>

            {/* ── FORM ── */}
            <div className="cq-form-wrap reveal-left">
              <div className="cq-form-header">
                <p className="eyebrow">Your Details</p>
                <div className="gold-bar" />
                <h2 className="cq-form-title">Book your <span>slot</span></h2>
                <p className="cq-form-sub">All fields are required. We'll keep your information private.</p>
              </div>

              <form className="cq-form" onSubmit={handleSubmit}>
                <div className="cq-form-row">
                  <div className="cq-field">
                    <input
                      className="cq-input"
                      name="name"
                      placeholder=" "
                      value={name}
                      onChange={e => setName(e.target.value)}
                      required
                    />
                    <label className="cq-label">Full name</label>
                    <span className="cq-line" />
                  </div>
                  <div className="cq-field">
                    <input className="cq-input" type="email" name="email" placeholder=" " required />
                    <label className="cq-label">Email address</label>
                    <span className="cq-line" />
                  </div>
                </div>
                <div className="cq-form-row">
                  <div className="cq-field">
                    <input className="cq-input" type="tel" name="phone" placeholder=" " required />
                    <label className="cq-label">Phone number</label>
                    <span className="cq-line" />
                  </div>

                  <div className="cq-field cq-field--select" ref={dropRef}>
                    <input type="hidden" name="service" value={service} required />
                    <div
                      className={`cq-input cq-drop-trigger${dropOpen ? ' cq-drop-trigger--open' : ''}`}
                      onClick={() => setDropOpen(o => !o)}
                      tabIndex={0}
                      onKeyDown={e => e.key === 'Enter' && setDropOpen(o => !o)}
                    >
                      <span className={service ? 'cq-drop-value' : 'cq-drop-placeholder'}>{service || ''}</span>
                      <ChevronDown size={16} className={`cq-drop-chevron${dropOpen ? ' cq-drop-chevron--open' : ''}`} />
                    </div>
                    <label className={`cq-label${service ? ' cq-label--active' : ''}`}>Treatment</label>
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
                </div>

                <div className="cq-form-row">
                  <div className="cq-field">
                    <input
                      className="cq-input"
                      type="date"
                      name="date"
                      min={todayISO()}
                      value={date}
                      onChange={e => setDate(e.target.value)}
                      required
                    />
                    <label className="cq-label cq-label--active">Preferred date</label>
                    <span className="cq-line" />
                  </div>
                  <div className="cq-field">
                    <input
                      className="cq-input"
                      type="time"
                      name="time"
                      value={time}
                      onChange={e => setTime(e.target.value)}
                      required
                    />
                    <label className="cq-label cq-label--active">Preferred time</label>
                    <span className="cq-line" />
                  </div>
                </div>

                <div className="cq-field">
                  <textarea className="cq-input cq-textarea" name="message" placeholder=" " />
                  <label className="cq-label">Notes (optional)</label>
                  <span className="cq-line" />
                </div>

                {error && <p className="cq-note" style={{ color: '#ec0a1d' }}>{error}</p>}
                <p className="cq-note">
                  By booking, you agree to our{' '}
                  <button type="button" className="cq-note-link" onClick={() => navigate('terms')}>cancellation</button>
                  {' '}and{' '}
                  <button type="button" className="cq-note-link" onClick={() => navigate('privacy')}>privacy policies</button>.
                </p>
                <button type="submit" className="cq-submit" disabled={submitting}>
                  <Send size={16} /> {submitting ? 'Booking…' : 'Confirm Appointment'}
                </button>
              </form>
            </div>

            {/* ── SUMMARY / TRUST ── */}
            <div className="reveal-right" style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              <div className="cq-form-wrap" style={{ padding: '28px 26px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
                  <span className="ba-icon-badge"><Sparkles size={16} /></span>
                  <h3 className="ba-card-title">Your booking</h3>
                </div>
                <ul className="ba-summary-list">
                  <li className="ba-summary-row"><span>Name</span><strong>{name || '—'}</strong></li>
                  <li className="ba-summary-row"><span>Treatment</span><strong>{service || '—'}</strong></li>
                  <li className="ba-summary-row"><span>Date</span><strong>{date ? formatDate(date) : '—'}</strong></li>
                  <li className="ba-summary-row"><span>Time</span><strong>{time ? to12Hour(time) : '—'}</strong></li>
                </ul>
              </div>

              <div className="cq-form-wrap" style={{ padding: '28px 26px' }}>
                <h3 className="ba-card-title">Why book with us</h3>
                <ul className="ba-trust-list">
                  <li><CheckCircle2 size={16} /> Certified trichologists &amp; dermatologists</li>
                  <li><CheckCircle2 size={16} /> Sterile, premium clinic environment</li>
                  <li><CheckCircle2 size={16} /> Personalised plans, honest assessments</li>
                  <li><CheckCircle2 size={16} /> Confidential, secure booking</li>
                </ul>
                <div className="ba-free-badge">
                  <ShieldCheck size={14} /> Free first consultation
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}
