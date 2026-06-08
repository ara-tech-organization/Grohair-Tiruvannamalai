import { useState } from 'react'
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

export default function App() {
  const [page, setPage] = useState(() => sessionStorage.getItem('grohair_page') || 'home')

  function navigate(id) {
    setPage(id)
    sessionStorage.setItem('grohair_page', id)
    window.scrollTo({ top: 0, behavior: 'instant' })
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
