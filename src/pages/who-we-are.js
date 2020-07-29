import React from 'react'

import { useIntl, FormattedMessage } from '../intl/main.js'
import persons from '../data/persons.js'
import ContactBlock from '../components/contact-block.js'
import Layout from '../components/layout'
import SEO from '../components/seo.js'
import Footer from '../components/footer.js'
import { MdFavoriteBorder, MdLink, MdLightbulbOutline } from 'react-icons/md'

import styles from '../styles/who-we-are.module.css'

function Person(props) {
  const intl = useIntl()
  const name = props.name
  const title = props.titel
  const face = props.face
  const face2 = props.face2
  const text = props.text
  const contactemail = props.contactemail
  return (
    <div className={styles.person}>
      <picture>
        <source type="image/webp" srcSet={face2} />
        <img
          alt="Portrait of employee"
          className={styles.portrait}
          src={face}
        />
      </picture>
      <h2 className={styles.name}>{name}</h2>
      <h6 className={styles.title}>
        <FormattedMessage id={title} />
      </h6>
      <p className={styles.contactemail}>
        <a href={`mailto://${intl.formatMessage({ id: contactemail })}`}>
          <FormattedMessage id={contactemail} />
        </a>
      </p>
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
          <h2 className={styles.omos}>
            <span className={styles.emphasisGold}>
              <FormattedMessage id="Om.os.four.gold" />
            </span>
            <FormattedMessage id="Om.os.four" />
          </h2>
        </div>
        <div className={styles.whatWeDoWrapper}>
          <h2 className={styles.whatWeDoHeadline}>
            Three things you need to know about us
          </h2>
          <div className={styles.whatWeDo}>
            <article className={styles.whatWeDoStepWrapper}>
              <div className={styles.whatWeDoStep}>
                <MdFavoriteBorder className={styles.icon} />
                <h2 className={styles.whatWeDoStepHeadline}>
                  We do what we love
                </h2>
                <p className={styles.whatWeDoStepText}>
                  <FormattedMessage id="What.we.do.step.tekst.one" />
                </p>
              </div>
            </article>
            <article className={styles.whatWeDoStepWrapper}>
              <div className={styles.whatWeDoStep}>
                <MdLightbulbOutline className={styles.icon} />
                <h2 className={styles.whatWeDoStepHeadline}>
                  We share our knowledge
                </h2>
                <p className={styles.whatWeDoStepText}>
                  <FormattedMessage id="What.we.do.step.tekst.two" />
                </p>
              </div>
            </article>
            <article className={styles.whatWeDoStepWrapper}>
              <div className={styles.whatWeDoStep}>
                <MdLink className={styles.icon} />
                <h2 className={styles.whatWeDoStepHeadline}>
                  We work directly with you
                </h2>
                <p className={styles.whatWeDoStepText}>
                  <FormattedMessage id="What.we.do.step.tekst.three" />
                </p>
              </div>
            </article>
          </div>
        </div>


        <div className={styles.descriptions}>
          {/* Looper over personer og viser dem */}
          {persons.map((person, index) => (
            <Person key={index} {...person} />
          ))}
        </div>
      </div>
      <ContactBlock />
      <Footer />
    </Layout>
  )
}

export default WhoWeAre
