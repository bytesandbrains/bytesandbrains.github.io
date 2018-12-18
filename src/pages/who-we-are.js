import React from 'react'

import { useIntl, FormattedMessage } from '../intl/main.js'
import persons from '../data/persons.js'
import ContactBlock from '../components/contact-block.js'
import Layout from '../components/layout'
import SEO from '../components/seo.js'

import styles from './who-we-are.module.css'

function Person(props) {
  const name = props.name
  const title = props.titel
  const face = props.face
  const text = props.text
  return (
    <div className={styles.person}>
      <img alt="Portrait of employee" className={styles.portrait} src={face} />
      <h2 className={styles.name}>{name}</h2>
      <h6 className={styles.title}>
        <FormattedMessage id={title} />
      </h6>
      <p className={styles.text}>
        <FormattedMessage id={text} />
      </p>
    </div>
  )
}

const WhoWeAre = props => {
  const intl = useIntl()

  return (
    <Layout>
      <SEO
        title={intl.formatMessage({ id: 'Meta.whoweare.title' })}
        description={intl.formatMessage({ id: 'Meta.whoweare.text' })}
        keywords={['bytesandbrains']}
      />
      <div>
        <div className={styles.element1}>
          <div className="Headline-overskrift">
            <h1 className={styles.headline}>
              <FormattedMessage id="We.are.your" />
            </h1>
          </div>
          <h2 className={styles.omos}>
            <span className={styles.emphasisGold}>
              <FormattedMessage id="Om.os.one.gold" />
            </span>
            <FormattedMessage id="Om.os.one" />
          </h2>
          <h2 className={styles.omos}>
            <span className={styles.emphasisGold}>
              <FormattedMessage id="Om.os.two.gold" />
            </span>
            <FormattedMessage id="Om.os.two" />
          </h2>
          <h2 className={styles.omos}>
            <span className={styles.emphasisGold}>
              <FormattedMessage id="Om.os.three.gold" />
            </span>
            <FormattedMessage id="Om.os.three" />
          </h2>
        </div>

        <div className={styles.descriptions}>
          {/* Looper over personer og viser dem */}
          {persons.map((person, index) => (
            <Person key={index} {...person} />
          ))}
        </div>
      </div>
      <ContactBlock />
    </Layout>
  )
}

export default WhoWeAre
