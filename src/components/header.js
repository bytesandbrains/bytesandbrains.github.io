import React, { useState } from 'react'
import { FormattedMessage } from '../intl/main.js'
import { Link } from 'gatsby'
import Logo from '../images/svg/Logo.svg'
import styles from '../styles/header.module.css'
import { MdMenu } from 'react-icons/md'

let HACKY_LOGO_REPLAY_COUNTER = 1

export default () => {
  const [burgerState, setBurgerState] = useState(false)
  const toggleBurgerMenu = () => setBurgerState(!burgerState)
  return (
    <div>
      <div className={styles.header}>
        <Link className={styles.logoPicture} to="/">
          <Logo key={HACKY_LOGO_REPLAY_COUNTER++} className={styles.logo} />
        </Link>
        <div className={styles.textHeader}>
          <Link className={styles.logoHeadline} to="/">
            <span>Bytes & Brains</span>
          </Link>
          <button className={styles.burgerIcon} onClick={toggleBurgerMenu}>
            <MdMenu />
          </button>
          <h2
            className={
              burgerState ? styles.responsiveSideLinks : styles.sideLinks
            }
          >
            {/*<Link
              to="/blog"
              className={styles.linksHeader}
              id="blogLink"
              onClick={toggleBurgerMenu}
            >
              <FormattedMessage id="Header.blog" />
            </Link>*/}
            <Link
              to="/what-we-do"
              className={styles.linksHeader}
              id="whatWeDoLink"
              onClick={toggleBurgerMenu}
            >
              <FormattedMessage id="Header.whatwedo" />
            </Link>
            <Link
              to="/who-we-are"
              className={styles.linksHeader}
              id="whoweare"
              onClick={toggleBurgerMenu}
            >
              <FormattedMessage id="Header.whoweare" />
            </Link>
            <Link
              to="/cases"
              className={styles.linksHeader}
              id="cases"
              onClick={toggleBurgerMenu}
            >
              <FormattedMessage id="Header.cases" />
            </Link>
            <Link
              to="/contact"
              className={styles.linksHeader}
              id="contact"
              onClick={toggleBurgerMenu}
            >
              <FormattedMessage id="Header.contact" />
            </Link>
          </h2>
        </div>
      </div>
    </div>
  )
}
