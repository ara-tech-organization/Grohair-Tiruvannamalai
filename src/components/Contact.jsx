import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, Send, ChevronRight } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Contact({ navigate }) {
  useScrollReveal()

  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [sent, setSent] = useState(false)

  function handleChange(e) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    setSent(true)
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
              <div className="ph-contact__info-row">
                <div className="ph-contact__info-icon">
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.09 10.8 19.79 19.79 0 01.05 2.19 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                </div>
                <div>
                  <div className="ph-contact__info-label">Phone</div>
                  <div className="ph-contact__info-value">+91 96260 56789</div>
                </div>
              </div>
              <div className="ph-contact__info-row">
                <div className="ph-contact__info-icon">
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </div>
                <div>
                  <div className="ph-contact__info-label">Email</div>
                  <div className="ph-contact__info-value">tiruvannamalai@adgrohair.com</div>
                </div>
              </div>
              <div className="ph-contact__info-row">
                <div className="ph-contact__info-icon">
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div>
                  <div className="ph-contact__info-label">Location</div>
                  <div className="ph-contact__info-value">Girivalam Rd, Tiruvannamalai</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── QUICK CONTACT BAR ── */}
      <div className="cq-bar reveal">
        <div className="container">
          <div className="cq-bar__inner">
            <a href="tel:+919626056789" className="cq-bar__item">
              <div className="cq-bar__icon"><Phone size={16} /></div>
              <div>
                <div className="cq-bar__label">Call us</div>
                <div className="cq-bar__value">+91 96260 56789</div>
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

              {sent ? (
                <div className="cq-success">
                  <div className="cq-success__icon"><Send size={26} /></div>
                  <h3 className="cq-success__title">Message Sent!</h3>
                  <p className="cq-success__text">Thank you — our team will reach out within one business day.</p>
                </div>
              ) : (
                <form className="cq-form" onSubmit={handleSubmit}>
                  <div className="cq-form-row">
                    <div className="cq-field">
                      <input className="cq-input" name="name" placeholder=" " value={form.name} onChange={handleChange} required />
                      <label className="cq-label">Full name</label>
                      <span className="cq-line" />
                    </div>
                    <div className="cq-field">
                      <input className="cq-input" type="email" name="email" placeholder=" " value={form.email} onChange={handleChange} required />
                      <label className="cq-label">Email address</label>
                      <span className="cq-line" />
                    </div>
                  </div>
                  <div className="cq-field">
                    <input className="cq-input" name="phone" placeholder=" " value={form.phone} onChange={handleChange} />
                    <label className="cq-label">Phone number</label>
                    <span className="cq-line" />
                  </div>
                  <div className="cq-field cq-field--select">
                    <select className="cq-input cq-select" name="service" onChange={handleChange} defaultValue="">
                      <option value="" disabled> </option>
                      <option>Hair Transplant</option>
                      <option>Mesotherapy</option>
                      <option>PRP Therapy</option>
                      <option>Stem X 27</option>
                      <option>HydraFacial</option>
                      <option>Q-Switch Laser</option>
                      <option>Skin Peels</option>
                      <option>Cosmelan Peel</option>
                      <option>Other / General inquiry</option>
                    </select>
                    <label className="cq-label">Treatment interest</label>
                    <span className="cq-line" />
                  </div>
                  <div className="cq-field">
                    <textarea className="cq-input cq-textarea" name="message" placeholder=" " value={form.message} onChange={handleChange} required />
                    <label className="cq-label">Your message</label>
                    <span className="cq-line" />
                  </div>
                  <p className="cq-note">By submitting, you agree to our privacy practices.</p>
                  <button type="submit" className="cq-submit">
                    <Send size={16} /> Send Message
                  </button>
                </form>
              )}
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
