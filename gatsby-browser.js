/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import React from 'react'
import locale_en from 'react-intl/locale-data/en'
import locale_da from 'react-intl/locale-data/da'
import messages_da from './src/translations/da.json'
import messages_en from './src/translations/en.json'

import 'typeface-source-sans-pro'

import { IntlContext, createIntl, addLocaleData } from './src/intl/main.js'

import './src/components/index.scss'

addLocaleData([...locale_en, ...locale_da])
const messages = {
  da: messages_da,
  en: messages_en,
}
let locale = navigator.language.split(/[-_]/)[0]
if (locale !== 'da') {
  locale = 'en'
} else {
  locale = 'en'
}

const intl = createIntl({ locale, messages: messages[locale] })

export const wrapRootElement = ({ element }) => {
  return <IntlContext.Provider value={intl}>{element}</IntlContext.Provider>
}
