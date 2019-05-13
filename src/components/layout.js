import React from 'react'
import PropTypes from 'prop-types'
import CookieConsent from './cookie-consent.js'
import Footer from './footer.js'
import Header from './header.js'
import styles from '../styles/layout.module.css'

import '../styles/index.scss'

const Layout = ({ children }) => {
  return (
    <>
      <div className={styles.app}>
        <Header />
        {children}
      </div>
      <CookieConsent />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
