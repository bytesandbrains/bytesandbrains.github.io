import React, { useRef } from 'react'
import { Link } from 'gatsby'
import { useIntl, FormattedMessage } from '../intl/main.js'
import useTyped from '../hooks/typed.js'
import ContactBlock from '../components/contact-block.js'
import Layout from '../components/layout'
import SEO from '../components/seo.js'
import { MdCamera, MdGraphicEq, MdMemory } from 'react-icons/md'

import ComputerKodeSkærm from '../images/Data-visualisation-min.png'
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
              <h2>
                <FormattedMessage id="Headline.tekst" />

                <span ref={textRef} className={styles.typedText} />
              </h2>
            </div>
            <Link
              to="/what-we-do"
              className={styles.button}
              onClick={handleReadmore}
            >
              <FormattedMessage id="Read.more.button.one" />
            </Link>
          </div>
        </div>
        <div className={styles.pitch}>
          <div>
            <div className={styles.pitchText}>
              <div>
                <h2>
                  <FormattedMessage id="Pitch.tekst" />
                </h2>
                <ul className={styles.checklist}>
                  <li>
                    <b>
                      <FormattedMessage id="Checklist.punkt.et.fed" />
                    </b>{' '}
                    <FormattedMessage id="Checklist.punkt.et" />
                  </li>
                  <li>
                    <b>
                      <FormattedMessage id="Checklist.punkt.to.fed" />
                    </b>{' '}
                    <FormattedMessage id="Checklist.punkt.to" />{' '}
                    <a href="https://www.tensorflow.org/">TensorFlow</a>{' '}
                    (Google), <a href="https://uber.github.io/h3">h3</a> (Uber),{' '}
                    <a href="https://itk.org/">ITK</a> (Kitware),{' '}
                    <FormattedMessage id="Checklist.punkt.to.og" />{' '}
                    <a href="http://eigen.tuxfamily.org/">eigen</a>.
                  </li>
                  <li>
                    <b>
                      <FormattedMessage id="Checklist.punkt.tre.fed" />
                    </b>{' '}
                    <FormattedMessage id="Checklist.punkt.tre" />
                  </li>
                </ul>
                <Link
                  to="/contact"
                  className={styles.checklistButton}
                  onClick={handleFreeConsultation}
                >
                  <FormattedMessage id="Checklist.button" />
                </Link>
              </div>
              <img
                alt="Data visualisation"
                className={styles.computer}
                src={ComputerKodeSkærm}
              />
            </div>
          </div>
        </div>
        <div className={styles.whatWeDoWrapper}>
          <div className={styles.whatWeDo}>
            <article className={styles.whatWeDoStepWrapper}>
              <div className={styles.whatWeDoStep}>
                <MdCamera className={styles.icon} />
                <h2 className={styles.whatWeDoStepHeadline}>
                  {' '}
                  Machine Learning
                </h2>
                <p className={styles.whatWeDoStepText}>
                  <FormattedMessage id="What.we.do.step.tekst.one" />
                </p>
              </div>
            </article>
            <article className={styles.whatWeDoStepWrapper}>
              <div className={styles.whatWeDoStep}>
                <MdMemory className={styles.icon} />
                <h2 className={styles.whatWeDoStepHeadline}>
                  Scientific Programming
                </h2>
                <p className={styles.whatWeDoStepText}>
                  <FormattedMessage id="What.we.do.step.tekst.two" />
                </p>
              </div>
            </article>
            <article className={styles.whatWeDoStepWrapper}>
              <div className={styles.whatWeDoStep}>
                <MdGraphicEq className={styles.icon} />
                <h2 className={styles.whatWeDoStepHeadline}>DevOps</h2>
                <p className={styles.whatWeDoStepText}>
                  <FormattedMessage id="What.we.do.step.tekst.three" />
                </p>
              </div>
            </article>
          </div>
        </div>
        <div className={styles.trustedWrapper}>
          <div className={styles.trusted}>
            <div className={styles.trustedHeader}>
              <h2 className={styles.trushedHeaderText}>
                {' '}
                <FormattedMessage id="Trusted.by" />{' '}
              </h2>
            </div>
            <div className={styles.trustedFirms}>
              <a href="https://www.tetrapak.com/">
                <img
                  alt="TetraPak logo"
                  className={styles.logoTetraPak}
                  src={TetraPak}
                />
              </a>
              <img
                alt="Scandinavian Highlands logo"
                className={styles.logoScandi}
                src={Scandi}
              />
              <img
                alt="Bispebjerg og Frederiksberg Hospital logo"
                className={styles.logoFrederiksberg}
                src={Frederiksberg}
              />
              <img
                alt="Odense Universitetshospital"
                className={styles.logoOdense}
                src={Odense}
              />
              <img
                alt="Roskilde Sygehus"
                className={styles.logoRoskilde}
                src={Roskilde}
              />
            </div>
            <p className={styles.trustedAndMore}>
              <FormattedMessage id="Trusted.and.more" />
            </p>
          </div>
        </div>
        {/*<div className="Customers-wrapper">
          <div className="Customers">
            <div className="Customers-headline">
              <h1> Customer cases</h1>
            </div>
          </div>
        </div>*/}
        <div className={styles.hiringWrapper}>
          <div className={styles.hiring}>
            <h1>
              <FormattedMessage id="We.are.hiring" />
            </h1>
            <h3>
              <FormattedMessage id="Employee.one" />
            </h3>
            <p>
              <FormattedMessage id="Employee.one.description" />
            </p>
            <h3>
              <FormattedMessage id="Employee.two" />
            </h3>
            <p>
              <FormattedMessage id="Employee.two.description" />
            </p>
            <h3>
              <FormattedMessage id="Employee.three" />
            </h3>
            <p>
              <FormattedMessage id="Employee.three.description" />
            </p>
          </div>
        </div>
        <ContactBlock />
      </div>
    </Layout>
  )
}

export default Home
