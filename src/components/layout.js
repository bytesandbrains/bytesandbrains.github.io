import React from 'react'
import PropTypes from 'prop-types'
import CookieConsent from './cookie-consent.js'
import Footer from './footer.js'
import Header from './header.js'
import styles from './layout.module.css'

import './index.scss'

const Layout = ({ children }) => {
  return (
    <>
      <div className={styles.app}>
        <Header />
        {children}
        <Footer />
      </div>
      <CookieConsent />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
