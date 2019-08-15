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
function gtagPhoneFooter() {
  gtag('event', 'click_phonenumber_footer_frontpage', {
    event_category: 'Footer Frontpage',
    event_label: 'click_phone_number',
  })
}
function gtagMailFooter() {
  gtag('event', 'click_mail_footer_frontpage', {
    event_category: 'Footer Frontpage',
    event_label: 'click_mail',
  })
}

export default () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <h2 className={styles.headline}>
          <FormattedMessage id="Footer.frontpage.headline" />
        </h2>
        <Link
          className={commonStyles.button}
          to="/contact"
          onClick={handleContactFooter}
        >
          <FormattedMessage id="Footer.frontpage.button" />
        </Link>
      </div>
      <div className={styles.wrapperContactInfo}>
        <div>
          <a href="https://www.google.dk/maps/place/Bytes+%26+Brains/@55.66802,12.5920971,17z/data=!3m1!4b1!4m5!3m4!1s0x465252f6afb5318b:0x7e50a531f24c413a!8m2!3d55.668017!4d12.5942911">
            <p>
              <FormattedMessage id="Footer.all.sites.address" />
            </p>
          </a>
          <p className={styles.contactInfomation}>
            Phone:{' '}
            <a href="tel:004542670301" onClick={gtagPhoneFooter}>
              +45 42 67 03 01
            </a>{' '}
            – Email:{' '}
            <a href="mailto:hello@bytesandbrains.com" onClick={gtagMailFooter}>
              hello@bytesandbrains.com{' '}
            </a>
            – CVR: 38952137
          </p>
        </div>
      </div>
    </div>
  )
}
