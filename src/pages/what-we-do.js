import React, { useRef, useState } from 'react'
import { Link, withPrefix } from 'gatsby'
import useTyped from '../hooks/typed.js'
import { useIntl, FormattedMessage } from '../intl/main.js'
import whatWeDoBody from '../data/what-we-do.js'
import Layout from '../components/layout.js'
import SEO from '../components/seo.js'

import Carousel, { Dots } from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css'

import commonStyles from '../styles/common.module.css'
import styles from '../styles/what-we-do.module.css'

function WhatWeDoData(props) {
  const IconLeft = props.iconLeft
  const headlineLeft = props.headlineLeft
  const keywordsleft = props.keywordsleft
  const bodyLeft = props.bodyLeft
  const direction = props.direction
  const techLogo1 = props.techLogo1
  const techLogo2 = props.techLogo2
  const techLogo3 = props.techLogo3
  const techLogo4 = props.techLogo4
  if (direction === 'left') {
    return (
      <div className={styles.textLeft}>
        <IconLeft className={styles.headlineIcon} />
        <h2 className={styles.textLeftHeadline}>
          <FormattedMessage id={headlineLeft} />
        </h2>
        <p className={styles.keywordsLeft}>
          <i>
            <FormattedMessage id={keywordsleft} />
          </i>
        </p>
        <p className={styles.textBodyLeft}>
          <FormattedMessage id={bodyLeft} />
        </p>
        {techLogo1 && (
          <img
            alt="techLogo1"
            className={styles.techLogoLeft1}
            src={techLogo1}
          />
        )}
        {techLogo2 && (
          <img
            alt="techLogo2"
            className={styles.techLogoLeft2}
            src={techLogo2}
          />
        )}
        {techLogo3 && (
          <img
            alt="techLogo3"
            className={styles.techLogoLeft3}
            src={techLogo3}
          />
        )}
        {techLogo4 && (
          <img
            alt="techLogo4"
            className={styles.techLogoLeft4}
            src={techLogo4}
          />
        )}
      </div>
    )
  } else {
    return (
      <div className={styles.textRight}>
        <h2 className={styles.textRightHeadline}>
          <FormattedMessage id={headlineLeft} />
        </h2>
        <IconLeft className={styles.headlineIconRight} />
        <p className={styles.keywordsRight}>
          <i>
            <FormattedMessage id={keywordsleft} />
          </i>
        </p>
        <p className={styles.textBodyRight}>
          <FormattedMessage id={bodyLeft} />
        </p>
        {techLogo2 && (
          <img
            alt="techLogo1"
            className={styles.techLogoRight1}
            src={techLogo2}
          />
        )}
        {techLogo1 && (
          <img
            alt="techLogo2"
            className={styles.techLogoRight2}
            src={techLogo1}
          />
        )}
        {techLogo3 && (
          <img
            alt="techLogo3"
            className={styles.techLogoRight3}
            src={techLogo3}
          />
        )}
        {techLogo4 && (
          <img
            alt="techLogo4"
            className={styles.techLogoRight4}
            src={techLogo4}
          />
        )}
      </div>
    )
  }
}

function WhatWeDo(props) {
  const intl = useIntl()

  const textRef = useRef()

  const [dots, setDots] = useState(0)

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
  return (
    <Layout>
      <SEO
        title={intl.formatMessage({ id: 'Meta.whatwedo.title' })}
        description={intl.formatMessage({ id: 'Meta.whatwedo.text' })}
        keywords={['bytesandbrains']}
      />
      <div>
        <div className={styles.outer}>
          <div className={`Headline-overskrift ${styles.headline}`}>
            <h1 className={styles.headline_weTransform}>
              <FormattedMessage id="Headline.we.transform" />
              <span ref={textRef} className={styles.typedText} />
            </h1>
            {/*<p>
              <FormattedMessage id="Headline.bodytext" />
            </p>*/}
          </div>

          <div className={styles.projects}>
            <h1 className={styles.headline_projects}>So what does it mean?</h1>

            <div className={styles.project_outer}>
              <Carousel autoPlay={0} stopAutoPlayOnHover>
                <div className={styles.project_inner}>
                  <p className={styles.project_text}>
                    <span className={styles.case_text}>CASE:</span> This video
                    illustrates how the software, built by Bytes & Brains,
                    enabled one of our customers to fill in missing geographical
                    data samples in an existing database. The orange dots are
                    the generated data. Get in touch for at talk on how we can
                    create value from your data! Part of our work is open
                    sourced and can be found at our github profile. <br />
                    <Link to="https://github.com/bytesandbrains/h3-pg">
                      https://github.com/bytesandbrains/h3-pg
                    </Link>
                  </p>
                  <video
                    className={styles.project_video}
                    autoPlay={true}
                    muted
                    controls
                    src={withPrefix('video/Creeking.webm')}
                    type="video/mp4"
                    width="100%"
                  />
                </div>
              </Carousel>
            </div>
          </div>
          <div>
            {whatWeDoBody.map((whatWeDoBody, index) => (
              <WhatWeDoData
                key={index}
                direction={index % 2 === 0 ? 'left' : 'right'}
                {...whatWeDoBody}
              />
            ))}
          </div>
          <div className={styles.talks}>
            <h1>
              {' '}
              <FormattedMessage id="What.we.do.talks.headline" />
            </h1>
            <p>
              <FormattedMessage id="What.we.do.talks.text" />
            </p>
            <div className={styles.button}>
              <Link className={commonStyles.button} to="/contact">
                <FormattedMessage id="What.we.do.contact.button" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default WhatWeDo
