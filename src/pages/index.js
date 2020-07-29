/* global gtag */

import React, { useRef, useState } from 'react'
import { Link } from 'gatsby'
import { useIntl, FormattedMessage } from '../intl/main.js'
import useTyped from '../hooks/typed.js'
import FooterFrontpage from '../components/footerFrontpage.js'
import Layout from '../components/layout'
import SEO from '../components/seo.js'
import { MdFavoriteBorder, MdLink, MdLightbulbOutline } from 'react-icons/md'
import Carousel, { Dots } from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css'
import Costumercarousel from '../components/costumercarousel.js'
import Casescarousel from '../components/casescarousel.js'
import Testimonialcarousel from '../components/testimonialcarousel.js'

import SplashImage3 from '../images/frontpage/ide.png'
import SplashImage2 from '../images/frontpage/kraken.png'
import SplashImage1 from '../images/frontpage/visualization.png'
import SplashImage32 from '../images/frontpage/ide.webp'
import SplashImage22 from '../images/frontpage/kraken.webp'
import SplashImage12 from '../images/frontpage/visualization.webp'
import Frederiksberg from '../images/logos/FrederiksbergLogo.png'
import Roskilde from '../images/logos/RoskildeSygehus.png'
import TetraPak from '../images/logos/TetraPak.png'
import Scandi from '../images/logos/ScandiLogo.png'
import Odense from '../images/logos/OdenseHospital.jpg'

import styles from '../styles/index.module.css'

const Home = props => {
  const intl = useIntl()

  const textRef = useRef()
  useTyped(textRef, {
    strings: [
      intl.formatMessage({ id: 'Typed.first' }),
      intl.formatMessage({ id: 'Typed.second' }),
      intl.formatMessage({ id: 'Typed.third' }),
    ],
    typeSpeed: 80,
    loop: true,
    backSpeed: 30,
  })

  function handleReadmore() {
    gtag('event', 'click_read_more', {
      event_category: 'Button',
      event_label: 'read_more',
    })
  }
  function handleFreeConsultation() {
    gtag('event', 'click_free_consultation', {
      event_category: 'Button',
      event_label: 'free_consultation',
    })
  }
  return (
    <Layout>
      <SEO
        title={intl.formatMessage({ id: 'Meta.frontpage.title' })}
        description={intl.formatMessage({ id: 'Meta.frontpage.text' })}
        keywords={['bytesandbrains']}
      />
      <div>
        <div className={styles.headlineWrapper}>
          <div className={styles.headline}>
            <div className={styles.headlineOverskrift}>
              <h1>
                <FormattedMessage id="Headline.overskrift" />{' '}
              </h1>
            </div>
            <div className={styles.headlineText}>
              <h3>
                <FormattedMessage id="Headline.tekst" />
                <br className={styles.breakTyped} />
                <span ref={textRef} className={styles.typedText} />
              </h3>
            </div>
            <Link
              to="/what-we-do"
              className={styles.button}
              onClick={handleReadmore}
            >
              <FormattedMessage id="Read.more.button.one" />
            </Link>
          </div>
          {<Testimonialcarousel />}
          <Costumercarousel />
        </div>

        <div className={styles.pitch}>
          <div className={styles.pitchText}>
            <h2>
              <FormattedMessage id="Pitch.tekst" />
            </h2>
            <div className={styles.mission}>
              <p className={styles.missionText}>
                We are data scientists and software engineers that help our
                customers transform their data into competitive advantages.
              </p>
            </div>

            <Link
              to="/contact"
              className={styles.button}
              onClick={handleFreeConsultation}
            >
              <FormattedMessage id="Checklist.button" />
            </Link>
          </div>

          <div className={styles.splashPictures}>
            <picture>
              <source type="image/webp" srcSet={SplashImage12} />
              <img
                alt="Data visualisation"
                className={styles.splash + ' ' + styles.Picture1}
                src={SplashImage1}
              />
            </picture>

            <picture>
              <source type="image/webp" srcSet={SplashImage22} />
              <img
                alt="Data visualisation"
                className={styles.splash + ' ' + styles.Picture2}
                src={SplashImage2}
              />
            </picture>
            <picture>
              <source type="image/webp" srcSet={SplashImage32} />
              <img
                alt="Data visualisation"
                className={styles.splash + ' ' + styles.Picture3}
                src={SplashImage3}
              />
            </picture>
          </div>
        </div>
        <div className={styles.whatWeDoWrapper}>
          <h2 className={styles.whatWeDoHeadline}>
            Three things we are really good at
          </h2>
          <div className={styles.whatWeDo}>
            <article className={styles.whatWeDoStepWrapper}>
              <div className={styles.whatWeDoStep}>
                <MdFavoriteBorder className={styles.icon} />
                <h2 className={styles.whatWeDoStepHeadline}>
                  Data Science & Artificial Intelligence
                </h2>
                <p className={styles.whatWeDoStepText}>
                  <FormattedMessage id="Three.things.we.are.good.at.one" />
                </p>
              </div>
            </article>
            <article className={styles.whatWeDoStepWrapper}>
              <div className={styles.whatWeDoStep}>
                <MdLightbulbOutline className={styles.icon} />
                <h2 className={styles.whatWeDoStepHeadline}>
                  Full-stack Development
                </h2>
                <p className={styles.whatWeDoStepText}>
                  <FormattedMessage id="Three.things.we.are.good.at.two" />
                </p>
              </div>
            </article>
            <article className={styles.whatWeDoStepWrapper}>
              <div className={styles.whatWeDoStep}>
                <MdLink className={styles.icon} />
                <h2 className={styles.whatWeDoStepHeadline}>
                  M&A Technical Due Diligence
                </h2>
                <p className={styles.whatWeDoStepText}>
                  <FormattedMessage id="Three.things.we.are.good.at.three" />
                </p>
              </div>
            </article>
          </div>
        </div>
        {/*<Casescarousel />*/}
        <FooterFrontpage />
      </div>
    </Layout>
  )
}

export default Home
