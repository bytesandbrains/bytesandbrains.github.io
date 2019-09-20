import React, { useState } from 'react'
import { Link, withPrefix } from 'gatsby'
import { useIntl, FormattedMessage } from '../intl/main.js'
import whatWeDoBody from '../data/what-we-do.js'
import Layout from '../components/layout.js'
import SEO from '../components/seo.js'
import { OutboundLink } from 'gatsby-plugin-gtag'
import Footer from '../components/footer.js'
import BrainTalk from '../images/BrainTalk_WithBrain.png'

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

  const [dots, setDots] = useState(0)

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
              <FormattedMessage id="Whatwedo.Headline" />
            </h1>
            <h4>
              We use agile development processes, open source software and keep
              ourselves up-to-date on the latest technology. This benefits your
              bottom line, flexibility, and freedom, and allows you to take
              advantage of long-term sustainable software while staying on the
              cutting-edge of technology.
            </h4>
            <h4>
              Working with us means getting complete solutions. We help our
              customers all the way through the process of taking advantage of
              their data, and we provide end-to-end data science services and
              support our customers in delivering data-driven applications.
            </h4>
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
            <img src={BrainTalk} className={styles.talksBrainTalk} />
            <h2 className={styles.talksText}>
              {' '}
              <FormattedMessage id="What.we.do.talks.headline" />
            </h2>
            <p className={styles.talksText}>
              <FormattedMessage id="What.we.do.talks.text" />
            </p>
            <div className={styles.button + ' ' + styles.talksText}>
              <Link className={commonStyles.button} to="/contact">
                <FormattedMessage id="What.we.do.contact.button" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  )
}

export default WhatWeDo
