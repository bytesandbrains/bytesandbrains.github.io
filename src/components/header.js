import React, { useState } from 'react'
import { FormattedMessage } from '../intl/main.js'
import { Link } from 'gatsby'
import Logo from '../images/svg/Logo.svg'
import './header.css'
import { MdMenu } from 'react-icons/md'

let HACKY_LOGO_REPLAY_COUNTER = 1

export default () => {
  const [burgerState, setBurgerState] = useState(false)
  const toggleBurgerMenu = () => setBurgerState(!burgerState)
  return (
    <div>
      <div className="header">
        <Link className="logo-picture" to="/">
          <Logo key={HACKY_LOGO_REPLAY_COUNTER++} className="logo" />
        </Link>
        <div className="text-header">
          <Link className="logo-headline" to="/">
            <span>Bytes & Brains</span>
          </Link>
          <a href="#" className="icon" onClick={toggleBurgerMenu}>
            <MdMenu className="material-icons burger-menu-icon" />
          </a>
          <h2 className={`side-links ${burgerState && 'responsive'}`}>
            <Link
              to="/what-we-do"
              className="links-header"
              id="whatWeDoLink"
              onClick={toggleBurgerMenu}
            >
              <FormattedMessage id="Header.whatwedo" />
            </Link>
            <Link
              to="/who-we-are"
              className="links-header"
              id="whoweare"
              onClick={toggleBurgerMenu}
            >
              <FormattedMessage id="Header.whoweare" />
            </Link>
            <Link
              to="/contact"
              className="links-header"
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
