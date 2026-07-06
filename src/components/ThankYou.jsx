import { useEffect } from 'react'
import { CheckCircle2, ChevronRight, Phone } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function ThankYou({ navigate }) {
  useScrollReveal()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  return (
    <main>
      <section className="home-cta" style={{ minHeight: '70vh', display: 'flex', alignItems: 'center' }}>
        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <div className="reveal">
            <CheckCircle2 size={56} color="#ec0a1d" style={{ marginBottom: 18 }} />
            <p className="home-cta__eyebrow">Request received</p>
            <div className="gold-bar" style={{ margin: '0 auto 22px' }} />
            <h2 className="home-cta__title">Thank you for reaching out!</h2>
            <p className="home-cta__sub">
              Your booking request has been sent to our team. We'll contact you shortly
              to confirm your appointment date and time.
            </p>
            <div className="home-cta__actions">
              <button className="btn btn-gold" onClick={() => navigate('home')}>
                Back to Home <ChevronRight size={15} />
              </button>
              <a className="btn btn-secondary" href="tel:+917599056789">
                <Phone size={15} /> Call Us Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
