import React from 'react'
import { useIntl, FormattedMessage } from '../intl/main.js'
import Layout from '../components/layout'
import SEO from '../components/seo'

import styles from '../styles/404.module.css'

function NotFoundPage() {
  const intl = useIntl()
  return (
    <Layout>
      <SEO title={intl.formatMessage({ id: 'Meta.notfound.title' })} />
      <div>
        <div className={styles.notFound}>
          <div className={styles.headline}>
            <h1>
              <FormattedMessage id="Notfound.headline" />
            </h1>
            <p>
              <FormattedMessage id="Notfound.text" />
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default NotFoundPage
