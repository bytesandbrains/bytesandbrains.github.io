/* global gtag */

import React from 'react'
import { useIntl, FormattedMessage } from '../intl/main.js'
import Layout from '../components/layout.js'
import SEO from '../components/seo.js'
import Footer from '../components/footer.js'
import styles from '../styles/contact.module.css'

const Contact = props => {
  const intl = useIntl()
  function handleSubmit() {
    gtag('event', 'click_submit_contact_form', {
      event_category: 'Contact form',
      event_label: 'send_contact_form',
    })
  }
  return (
    <Layout>
      <SEO
        title={intl.formatMessage({ id: 'Meta.contact.title' })}
        description={intl.formatMessage({ id: 'Meta.contact.text' })}
        keywords={['bytesandbrains']}
      />
      <div>
        <div className={styles.outer}>
          <div className={styles.headline}>
            <h1>
              <FormattedMessage id="Contact.formular.headline" />
            </h1>
            <p className={styles.contactInfomation}>
              <FormattedMessage id="Contact.formular.contact.info" />
            </p>
            <p>
              <FormattedMessage id="Contact.formular.text" />
            </p>
          </div>
          <form
            action="https://formspree.io/hello@bytesandbrains.com"
            method="POST"
            onSubmit={handleSubmit}
          >
            <div className={styles.inputSection}>
              <input
                type="text"
                id="name"
                name="user_name"
                placeholder={intl.formatMessage({ id: 'Contactform.name' })}
              />
            </div>
            <div className={styles.inputSection}>
              <input
                type="tel"
                id="phone"
                name="user_phone"
                placeholder={intl.formatMessage({ id: 'Contactform.phone' })}
              />
            </div>
            <div className={styles.inputSection}>
              <input
                type="email"
                id="email"
                name="email"
                placeholder={intl.formatMessage({ id: 'Contactform.email' })}
              />
            </div>
            <div className={styles.inputSection}>
              <textarea
                rows={10}
                id="besked"
                name="message"
                placeholder={intl.formatMessage({
                  id: 'Contactform.message',
                })}
              />
            </div>
            <div className={styles.inputSection}>
              <button type="submit">Send</button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </Layout>
  )
}

export default Contact
