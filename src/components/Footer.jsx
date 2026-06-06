import { MapPin, Phone, Mail } from 'lucide-react'
import logoImg from '../assets/logo.png'

const SERVICES = [
  'Hair Transplant', 'Cosmetic Hair System',
  'Oxygen Laser Therapy', 'Mesotherapy',
  'Regen Pro 9', 'Stem X 27',
]

export default function Footer({ navigate }) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">

          <div>
            <img
              src={logoImg}
              alt="Advanced GroHair & GloSkin"
              style={{ height: 40, filter: 'brightness(0) invert(1)', opacity: 0.9 }}
            />
            <p className="footer__brand-tagline">
              Advanced GroHair &amp; GloSkin brings together leading hair and skin
              specialists, calm spaces, and advanced treatments — all designed around
              how care should actually feel.
            </p>
            <div className="footer__badges">
              <span className="footer__badge">GloSkin</span>
              <span className="footer__badge">GroHair</span>
            </div>
          </div>

          <div>
            <h4 className="footer__col-title">Explore</h4>
            <div className="footer__links">
              {['home', 'about', 'services', 'contact'].map(p => (
                <button key={p} className="footer__link" onClick={() => navigate(p)}>
                  {p.charAt(0).toUpperCase() + p.slice(1)}
                </button>
              ))}
              <button className="footer__link" onClick={() => navigate('contact')}>
                Book appointment
              </button>
            </div>
          </div>

          <div>
            <h4 className="footer__col-title">Services</h4>
            <div className="footer__links">
              {SERVICES.map(s => (
                <button key={s} className="footer__link" onClick={() => navigate('services')}>
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="footer__col-title">Contact</h4>
            <div className="footer__contact-item">
              <MapPin size={14} className="footer__contact-icon" />
              <span className="footer__contact-text">
                Near Arunachaleswarar Temple,<br />
                Girivalam Road, Tiruvannamalai,<br />
                Tamil Nadu 606601
              </span>
            </div>
            <div className="footer__contact-item">
              <Phone size={14} className="footer__contact-icon" />
              <span className="footer__contact-text">+91 96260 56789</span>
            </div>
            <div className="footer__contact-item">
              <Mail size={14} className="footer__contact-icon" />
              <span className="footer__contact-text">tiruvannamalai@adgrohair.com</span>
            </div>
          </div>

        </div>

        <div className="footer__bottom">
          <p className="footer__copy">
            © 2026 Advanced GroHair &amp; GloSkin. All rights reserved.
          </p>
          <div className="footer__legal">
            <a href="#">Privacy Policy</a>
            <span>&nbsp;|&nbsp;</span>
            <a href="#">Terms &amp; Conditions</a>
          </div>
          <p className="footer__credit">
            Crafted by <a href="#">ARA Discoveries</a>
          </p>
        </div>
      </div>
    </footer>
  )
}
