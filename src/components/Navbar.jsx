import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import logoImg from '../assets/logo.png'

const LINKS = [
  { id: 'home',     label: 'Home' },
  { id: 'about',   label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar({ activePage, navigate }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  function go(id) {
    navigate(id)
    setOpen(false)
  }

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="container">
          <div className="navbar__inner">
            <button className="navbar__logo" onClick={() => go('home')}>
              <img src={logoImg} alt="Advanced GroHair & GloSkin" />
            </button>

            <div className={`navbar__links${open ? ' open' : ''}`}>
              {LINKS.map(l => (
                <button
                  key={l.id}
                  className={`nav-link${activePage === l.id || (l.id === 'services' && activePage.startsWith('ht:')) ? ' active' : ''}`}
                  onClick={() => go(l.id)}
                >
                  {l.label}
                </button>
              ))}
              <button className="nav-mobile-cta btn btn-primary" onClick={() => go('contact')}>
                Book Appointment
              </button>
            </div>

            <div className="navbar__cta">
              <button className="btn btn-primary" onClick={() => go('contact')}>
                Book Appointment
              </button>
            </div>

            <button
              className="navbar__toggle"
              onClick={() => setOpen(v => !v)}
              aria-label="Toggle menu"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {open && <div className="nav-backdrop" onClick={() => setOpen(false)} />}
    </>
  )
}
