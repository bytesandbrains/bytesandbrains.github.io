import React from 'react'
import { FormattedMessage } from '../intl/main.js'
import { useConsent } from '../hooks/consent.js'
import { Link } from 'gatsby'
import styles from '../styles/cookie-consent.module.css'

function handleCookieAccept() {
  gtag('event', 'click_cookie_accept', {
    event_category: 'Button',
    event_label: 'cookie_accept',
  })
}

export default () => {
  const [consent, toggleConsent] = useConsent()
  if (consent) return null

  return (
    <div className={styles.wrapper}>
      <p>
        <FormattedMessage id="Cookie.consent.tekst" />
        <Link to="/cookie-policy">
          <FormattedMessage id="Cookie.consent.link" />
        </Link>
      </p>
      <button
        className={styles.acceptButton}
        type="button"
        onClick={(toggleConsent, handleCookieAccept)}
      >
        <FormattedMessage id="Cookie.consent.button" />
      </button>
    </div>
  )
}
