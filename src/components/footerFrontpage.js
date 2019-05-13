/* global gtag */

import React from 'react'
import { FormattedMessage } from '../intl/main.js'
import { Link } from 'gatsby'
import styles from '../styles/footerFrontpage.module.css'
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
        <div className={styles.wrapperContactInfo}>
          <div>
            <a href="https://www.google.dk/maps/place/Bytes+%26+Brains/@55.66802,12.5920971,17z/data=!3m1!4b1!4m5!3m4!1s0x465252f6afb5318b:0x7e50a531f24c413a!8m2!3d55.668017!4d12.5942911">
              <p>
                <FormattedMessage id="Footer.all.sites.address" />
              </p>
            </a>
            <p>
              {' '}
              <FormattedMessage id="Footer.all.sites.contact" />
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
