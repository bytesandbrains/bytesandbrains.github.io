import IntlMessageFormat from 'intl-messageformat'
import IntlRelativeFormat from 'intl-relativeformat'
import createFormatCache from 'intl-format-cache'

import { createContext, useContext } from 'react'

import locale_en from 'react-intl/locale-data/en'
import locale_da from 'react-intl/locale-data/da'
import messages_da from '../translations/da.json'
import messages_en from '../translations/en.json'

const messages = {
  da: messages_da,
  en: messages_en,
}
let locale = 'en'

const formatters = {
  getDateTimeFormat: createFormatCache(Intl.DateTimeFormat),
  getNumberFormat: createFormatCache(Intl.NumberFormat),
  getMessageFormat: createFormatCache(IntlMessageFormat),
  //getRelativeFormat: createFormatCache(IntlRelativeFormat),
  //getPluralFormat: createFormatCache(IntlPluralFormat),
}

// utils
export const addLocaleData = locales => {
  locales.forEach(localeData => {
    if (localeData && localeData.locale) {
      IntlMessageFormat.__addLocaleData(localeData)
      IntlRelativeFormat.__addLocaleData(localeData)
    }
  })
}

// context
export const createIntl = ({ locale, messages }) => {
  return {
    formatMessage: ({ id, defaultMessage, values }) => {
      const message = messages[id]
      if (!message) return id
      const formatter = formatters.getMessageFormat(message, locale)
      return formatter.format(values)
    },
  }
}
export const IntlContext = createContext(
  createIntl({ locale, messages: messages[locale] })
)

// hooks
export const useIntl = () => useContext(IntlContext)

// Components
const createComponent = method => ({ children, ...props }) => {
  const intl = useIntl()
  return intl[method](props)
}
export const FormattedMessage = createComponent('formatMessage')
//export const FormattedTime = createComponent('formatTime');

addLocaleData([...locale_en, ...locale_da])
