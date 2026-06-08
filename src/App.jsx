import { useState, useEffect } from 'react'
import Navbar              from './components/Navbar'
import Footer              from './components/Footer'
import Home                from './components/Home'
import About               from './components/About'
import Services            from './components/Services'
import Contact             from './components/Contact'
import Privacy             from './components/Privacy'
import HairTreatmentDetail from './components/HairTreatmentDetail'
import SkinTreatmentDetail from './components/SkinTreatmentDetail'
import './styles/main.css'

const BASE = '/Grohair-Tiruvannamalai'

function pageToUrl(id) {
  if (id === 'home')    return BASE + '/'
  if (id === 'about')   return BASE + '/about'
  if (id === 'services') return BASE + '/Services'
  if (id === 'contact') return BASE + '/Contact'
  if (id === 'privacy') return BASE + '/privacy'
  if (id.startsWith('ht:')) return `${BASE}/Services/hair-treatment/${id.slice(3)}`
  if (id.startsWith('st:')) return `${BASE}/Skin-treatment/${id.slice(3)}`
  return null
}

function urlToPage(pathname) {
  const path = pathname.replace(BASE, '') || '/'
  if (path === '/' || path === '') return 'home'
  if (path === '/about') return 'about'
  if (path === '/Contact') return 'contact'
  if (path === '/privacy') return 'privacy'
  if (path.startsWith('/Services/hair-treatment/')) {
    const slug = path.replace('/Services/hair-treatment/', '').replace(/\/$/, '')
    if (slug) return `ht:${slug}`
    return 'services'
  }
  if (path === '/Services/hair-treatment') return 'services'
  if (path.startsWith('/Services')) return 'services'
  if (path.startsWith('/Skin-treatment/')) {
    const slug = path.replace('/Skin-treatment/', '').replace(/\/$/, '')
    if (slug) return `st:${slug}`
    return 'services'
  }
  if (path === '/Skin-treatment') return 'services'
  return 'home'
}

export default function App() {
  const [page, setPage] = useState(() => {
    const fromUrl = urlToPage(window.location.pathname)
    if (fromUrl !== 'home') return fromUrl
    return sessionStorage.getItem('grohair_page') || 'home'
  })

  // On first mount, sync URL to current page state
  useEffect(() => {
    const url = pageToUrl(page)
    if (url) window.history.replaceState({ page }, '', url)
  }, []) // eslint-disable-line

  // Browser back / forward
  useEffect(() => {
    const handlePop = (e) => {
      const p = e.state?.page || urlToPage(window.location.pathname)
      setPage(p)
      sessionStorage.setItem('grohair_page', p)
    }
    window.addEventListener('popstate', handlePop)
    return () => window.removeEventListener('popstate', handlePop)
  }, [])

  function navigate(id) {
    setPage(id)
    sessionStorage.setItem('grohair_page', id)
    window.scrollTo({ top: 0, behavior: 'instant' })
    const url = pageToUrl(id)
    if (url) window.history.pushState({ page: id }, '', url)
  }

  const isHairDetail = page.startsWith('ht:')
  const isSkinDetail = page.startsWith('st:')
  const hairSlug     = isHairDetail ? page.slice(3) : null
  const skinSlug     = isSkinDetail ? page.slice(3) : null

  return (
    <>
      <Navbar activePage={page} navigate={navigate} />

      <div key={page} className="page-enter">
        {page === 'home'     && <Home     navigate={navigate} />}
        {page === 'about'    && <About    navigate={navigate} />}
        {page === 'services' && <Services navigate={navigate} />}
        {page === 'contact'  && <Contact  navigate={navigate} />}
        {page === 'privacy'  && <Privacy  navigate={navigate} />}
        {isHairDetail        && <HairTreatmentDetail slug={hairSlug} navigate={navigate} />}
        {isSkinDetail        && <SkinTreatmentDetail slug={skinSlug} navigate={navigate} />}
      </div>

      <Footer navigate={navigate} />
    </>
  )
}
