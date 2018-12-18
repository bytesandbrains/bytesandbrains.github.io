import React from 'react'
import { FormattedMessage } from '../intl/main.js'
import styles from './footer.module.css'

export default () => {
  return (
    <div className={styles.wrapper}>
      <div>
        <p>
          {' '}
          <FormattedMessage id="Footer.all.sites.tekst" />
        </p>
        <a href="https://www.google.dk/maps/place/Bytes+%26+Brains/@55.66802,12.5920971,17z/data=!3m1!4b1!4m5!3m4!1s0x465252f6afb5318b:0x7e50a531f24c413a!8m2!3d55.668017!4d12.5942911">
          <p>
            <FormattedMessage id="Footer.all.sites.address" />
          </p>
        </a>
      </div>
    </div>
  )
}
