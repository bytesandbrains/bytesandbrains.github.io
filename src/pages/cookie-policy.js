import React from 'react'

import { useIntl } from '../intl/main.js'
import Consent from '../components/consent.js'
import Layout from '../components/layout.js'
import SEO from '../components/seo.js'

import styles from '../styles/cookie-policy.module.css'

export default props => {
  const intl = useIntl()

  return (
    <Layout>
      <SEO
        title={intl.formatMessage({ id: 'Meta.cookiepolicy.title' })}
        description={intl.formatMessage({ id: 'Meta.cookiepolicy.text' })}
        keywords={['bytesandbrains']}
      />
      <div className={styles.wrapper}>
        <h1>Cookie Policy for Bytes and Brains</h1>

        <p className={styles.text}>
          This is the Cookie Policy for Bytes and Brains, accessible from
          www.bytesandbrains.com
        </p>

        <h3 className={styles.headlines}>
          <strong>What Are Cookies</strong>
        </h3>

        <p className={styles.text}>
          As is common practice with almost all professional websites this site
          uses cookies, which are tiny files that are downloaded to your
          computer, to improve your experience. This page describes what
          information they gather, how we use it and why we sometimes need to
          store these cookies. We will also share how you can prevent these
          cookies from being stored however this may downgrade or 'break'
          certain elements of the sites functionality.
        </p>

        <p className={styles.text}>
          For more general information on cookies see the Wikipedia article on
          HTTP Cookies.
        </p>

        <h3 className={styles.headlines}>
          <strong>How We Use Cookies</strong>
        </h3>

        <p className={styles.text}>
          We use cookies for a variety of reasons detailed below. Unfortunately
          in most cases there are no industry standard options for disabling
          cookies without completely disabling the functionality and features
          they add to this site. It is recommended that you leave on all cookies
          if you are not sure whether you need them or not in case they are used
          to provide a service that you use.
        </p>

        <h3 className={styles.headlines}>
          <strong>Disabling Cookies</strong>
        </h3>

        <p className={styles.text}>
          You can prevent the setting of cookies by adjusting the settings on
          your browser (see your browser Help for how to do this). Be aware that
          disabling cookies will affect the functionality of this and many other
          websites that you visit. Disabling cookies will usually result in also
          disabling certain functionality and features of the this site.
          Therefore it is recommended that you do not disable cookies.
        </p>

        <h3 className={styles.headlines}>
          <strong>The Cookies We Set</strong>
        </h3>

        <ul>
          <li>
            <p className={styles.text}>Site preferences cookies</p>
            <p className={styles.text}>
              In order to provide you with a great experience on this site we
              provide the functionality to set your preferences for how this
              site runs when you use it. In order to remember your preferences
              we need to set cookies so that this information can be called
              whenever you interact with a page is affected by your preferences.
            </p>
          </li>
        </ul>

        <h3 className={styles.headlines}>
          <strong>Third Party Cookies</strong>
        </h3>

        <p className={styles.text}>
          In some special cases we also use cookies provided by trusted third
          parties. The following section details which third party cookies you
          might encounter through this site.
        </p>

        <ul>
          <li>
            <p className={styles.text}>
              This site uses Google Analytics which is one of the most
              widespread and trusted analytics solution on the web for helping
              us to understand how you use the site and ways that we can improve
              your experience. These cookies may track things such as how long
              you spend on the site and the pages that you visit so we can
              continue to produce engaging content.
            </p>
            <p className={styles.text}>
              For more information on Google Analytics cookies, see the official
              Google Analytics page.
            </p>
          </li>

          <li>
            <p className={styles.text}>
              We also use social media buttons and/or plugins on this site that
              allow you to connect with your social network in various ways. For
              these to work the following social media sites including;
              LinkedIn, will set cookies through our site which may be used to
              enhance your profile on their site or contribute to the data they
              hold for various purposes outlined in their respective privacy
              policies.
            </p>
          </li>
        </ul>

        <h3 className={styles.headlines}>
          <strong>More Information</strong>
        </h3>

        <p className={styles.text}>
          Hopefully that has clarified things for you and as was previously
          mentioned if there is something that you aren't sure whether you need
          or not it's usually safer to leave cookies enabled in case it does
          interact with one of the features you use on our site. This Cookies
          Policy was created with the help of the{' '}
          <a href="https://cookiepolicygenerator.com">
            GDPR Cookies Policy Generator
          </a>
        </p>

        <p className={styles.text}>
          However if you are still looking for more information then you can
          contact us through one of our preferred contact methods:
        </p>
        <div className={styles.contact}>
          <ul>
            <li>
              Email:{' '}
              <a href="mailto:cookies@bytesandbrains.com">
                {' '}
                cookie@bytesandbrains.com
              </a>
            </li>
          </ul>
        </div>
        <Consent />
      </div>
    </Layout>
  )
}
