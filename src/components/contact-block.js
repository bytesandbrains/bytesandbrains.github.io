import React from 'react'
import { FormattedMessage } from '../intl/main.js'
import { Link } from 'gatsby'
import styles from '../styles/contact-block.module.css'
import commonStyles from '../styles/common.module.css'

function handleContactFooter() {
  gtag('event', 'click_contact_footer', {
    event_category: 'Button',
    event_label: 'contact_us_button',
  })
}

export default () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <h1 className={styles.headline}>
          <FormattedMessage id="Footer.frontpage.headline" />
        </h1>
        <Link
          className={commonStyles.button}
          to="/contact"
          onClick={handleContactFooter}
        >
          <FormattedMessage id="Footer.frontpage.button" />
        </Link>
      </div>
    </div>
  )
}
