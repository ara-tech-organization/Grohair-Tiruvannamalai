import { useEffect } from 'react'
import { ChevronRight, ShieldCheck, FileText } from 'lucide-react'

const CLINIC = 'Advanced GroHair & GloSkin — Tiruvannamalai'

export default function Privacy({ navigate }) {
  useEffect(() => {
    const hash = window.location.hash
    if (hash) {
      const el = document.querySelector(hash)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])

  return (
    <main className="legal-page">

      {/* ── HERO ── */}
      <section className="legal-hero">
        <div className="container legal-hero__inner">
          <p className="legal-hero__tag">
            <ShieldCheck size={11} /> Legal
          </p>
          <h1 className="legal-hero__title">Privacy Policy &amp; Terms</h1>
          <p className="legal-hero__sub">
            How {CLINIC} collects, uses and protects your information,
            and the terms under which we offer our services at adgrohair.com.
          </p>
          <div className="legal-hero__nav">
            <a href="#privacy-policy" className="legal-hero__link">
              Privacy Policy <ChevronRight size={14} />
            </a>
            <a href="#terms-and-conditions" className="legal-hero__link">
              Terms &amp; Conditions <ChevronRight size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* ── CONTENT ── */}
      <div className="legal-body">
        <div className="container">
          <div className="legal-layout">

            {/* Sidebar nav */}
            <aside className="legal-sidebar">
              <p className="legal-sidebar__title">On this page</p>
              <a href="#privacy-policy" className="legal-sidebar__link">Privacy Policy</a>
              <a href="#terms-and-conditions" className="legal-sidebar__link">Terms and Conditions</a>
              <a href="#data-privacy" className="legal-sidebar__link">— Data &amp; Privacy</a>
              <a href="#telemedicine" className="legal-sidebar__link">— Telemedicine</a>
              <a href="#payments" className="legal-sidebar__link">— Payments</a>
              <a href="#content-copyrights" className="legal-sidebar__link">— Content &amp; Copyrights</a>
            </aside>

            {/* Main content */}
            <div>

              {/* Privacy Policy */}
              <section id="privacy-policy" className="legal-section">
                <div className="legal-section__header">
                  <div className="legal-section__icon">
                    <ShieldCheck size={18} style={{ color: '#ec0a1d' }} />
                  </div>
                  <h2 className="legal-section__title">Privacy Policy</h2>
                </div>
                <div className="legal-section__content">
                  <p>
                    {CLINIC} abides to maintain privacy and this applies to all the information
                    collected from you or published on our website adgrohair.com. We will not,
                    unless required by law, use or share the information with external or third
                    parties. Privacy policy applies to the collection, storage and usage of all
                    information from {CLINIC}. By using the services of this website, you agree
                    to the terms and conditions of {CLINIC}.
                  </p>
                  <p>
                    Our privacy policy and terms &amp; conditions are subject to changes and
                    revisions. So kindly review the policy periodically.
                  </p>
                </div>
              </section>

              {/* Terms and Conditions */}
              <section id="terms-and-conditions" className="legal-section">
                <div className="legal-section__header">
                  <div className="legal-section__icon">
                    <FileText size={18} style={{ color: '#ec0a1d' }} />
                  </div>
                  <h2 className="legal-section__title">Terms and Conditions</h2>
                </div>
                <div className="legal-section__content">
                  <p>
                    Kindly go through the terms and conditions of {CLINIC} before using the
                    website or mobile application or availing the services offered by us. The
                    terms 'you', 'your', 'user' refer to all registered and unregistered users
                    using services from {CLINIC}, Tiruvannamalai.
                  </p>
                  <ul className="legal-list">
                    <li>User should be at least 17 years old or using the services under the supervision of a parent or guardian, who then will be the recipient of the Terms and Conditions.</li>
                    <li>The content of this application is for general purpose only and is subject to change without notice. All content provided by {CLINIC} is strictly for information purpose only and must not be used as an alternate for emergency medical care.</li>
                  </ul>

                  <h3 id="data-privacy" className="legal-subsection">Data and Privacy</h3>
                  <ul className="legal-list">
                    <li>To have access to {CLINIC} website and mobile application, one must register, which includes providing personal information like name, contact, email id, gender, date of birth.</li>
                    <li>{CLINIC} has full access to information provided by the user for further communication or analytics. The collected information will be used only for the improvement of service quality or to develop better services.</li>
                    <li>{CLINIC} shall not, unless required by law, use or share the information with external or third parties.</li>
                    <li>Users are responsible for the accuracy of the information provided. {CLINIC} reserves the right to discontinue services if the information provided is inaccurate, incomplete, or untrue.</li>
                    <li>Users are requested not to share their credentials. User is responsible to maintain the confidentiality of their account details. User shall immediately notify {CLINIC} for any actual or suspected unauthorized activity.</li>
                    <li>If a user provides access to a third party, they are responsible for all activities done by that person. {CLINIC} is not liable for any loss or compromise from the user side.</li>
                    <li>Users are required to keep their profile updated in case of change in mobile number or email.</li>
                    <li>Registering is required to book appointments or be updated through notifications.</li>
                    <li>Any update or instruction about appointments will be notified to the user through the mobile application. {CLINIC} is not liable if a reminder is undelivered for any reason.</li>
                  </ul>

                  <h3 id="telemedicine" className="legal-subsection">Telemedicine</h3>
                  <ul className="legal-list">
                    <li>Services shall be provided via audio/video consultation. Please ensure proper video conference equipment and internet connectivity. {CLINIC} reserves the right to reschedule or cancel appointments in case of technical issues.</li>
                    <li>There will be no physical examination involved — consultation services are through video only.</li>
                    <li>Video consultation is subject to doctor availability; changes will be notified through the mobile application.</li>
                    <li>The doctor's opinion is solely based on verbal communication and the reports/information provided during the online consultation.</li>
                    <li>If the patient misses or cancels the appointment, they shall not be entitled to any refund.</li>
                    <li>Online consultation services are not for emergency conditions. Please take the patient to the nearest hospital in such cases.</li>
                    <li>{CLINIC} reserves the right to ask for confirmation of identification when required. Failing which, the consultation may be cancelled without refund.</li>
                    <li>{CLINIC} reserves the right to change or revise the pricing structure at any time without prior notification.</li>
                  </ul>

                  <h3 id="payments" className="legal-subsection">Payments</h3>
                  <ul className="legal-list">
                    <li>Online payments are done through trusted gateway partners. {CLINIC} is not liable for incorrect input or unauthorized access from the user side.</li>
                    <li>{CLINIC} shall not take responsibility for: 1) Incomplete transactions, 2) Transaction failure from user or bank side, 3) Declines due to unauthorized attempts, 4) Any other failure from the user side.</li>
                    <li>All payment or refund related queries are handled by {CLINIC} support team only.</li>
                  </ul>

                  <h3 id="content-copyrights" className="legal-subsection">Content and Copyrights</h3>
                  <ul className="legal-list">
                    <li>All content on the website and mobile application is copyrighted by {CLINIC}. Any sharing or copying for commercial purposes is a violation of copyrights.</li>
                    <li>Users agree not to share or upload the content without obtaining permission from {CLINIC}.</li>
                    <li>Services should not be used in any way that can harm an individual, invade another's privacy, breach laws, or hinder the functioning of the same.</li>
                    <li>Users agree to provide full co-operation to {CLINIC} to resolve any queries or issues.</li>
                    <li>{CLINIC} may maintain temporary or permanent cookies. Users have full permission to accept or refuse cookies by configuring their browser.</li>
                    <li>By using the services of {CLINIC}, you are bound to all terms and conditions and subject to our privacy policy.</li>
                    <li>No term or condition will be compromised for any individual unless authorized by {CLINIC}.</li>
                    <li>{CLINIC} reserves the right to modify or terminate any of the above terms and conditions without notice.</li>
                    <li>All terms and conditions represent an agreement between the user and {CLINIC}. By proceeding, you confirm that you have read, understood and agree to all terms and conditions.</li>
                  </ul>
                </div>
              </section>

              {/* Contact block */}
              <div className="legal-contact">
                <h3>For further queries</h3>
                <p className="legal-contact__sub">Reach out to our team for any questions about this policy.</p>
                <div className="legal-contact__grid">
                  <div className="legal-contact__card">
                    <div className="legal-contact__label">Website</div>
                    <a href="https://adgrohair.com" target="_blank" rel="noopener noreferrer" className="legal-contact__value">adgrohair.com</a>
                  </div>
                  <div className="legal-contact__card">
                    <div className="legal-contact__label">Email</div>
                    <a href="mailto:tiruvannamalai@adgrohair.com" className="legal-contact__value">tiruvannamalai@adgrohair.com</a>
                  </div>
                </div>
                <div className="legal-contact__actions">
                  <button className="btn btn-primary" onClick={() => navigate('home')}>Return Home</button>
                  <button className="btn btn-secondary" onClick={() => navigate('contact')}>Contact us</button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

    </main>
  )
}
