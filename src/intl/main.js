import IntlMessageFormat from 'intl-messageformat';
import IntlRelativeFormat from 'intl-relativeformat';
import createFormatCache from 'intl-format-cache';

import { createContext, useContext } from 'react';

const formatters = {
  getDateTimeFormat: createFormatCache(Intl.DateTimeFormat),
  getNumberFormat: createFormatCache(Intl.NumberFormat),
  getMessageFormat: createFormatCache(IntlMessageFormat),
  //getRelativeFormat: createFormatCache(IntlRelativeFormat),
  //getPluralFormat: createFormatCache(IntlPluralFormat),
};

// context
export const IntlContext = createContext();
export const createIntl = ({ locale, messages }) => {
  return {
    formatMessage: ({id, defaultMessage, values}) => {
      const message = messages[id];
      if (!message) return id;
      const formatter = formatters.getMessageFormat(message, locale);
      return formatter.format(values);
    }
  }
}

// hooks
export const useIntl = () => useContext(IntlContext);

// utils
export const addLocaleData = (locales) => {
  locales.forEach(localeData => {
    if (localeData && localeData.locale) {
      IntlMessageFormat.__addLocaleData(localeData);
      IntlRelativeFormat.__addLocaleData(localeData);
    }
});
}

// Components
const createComponent = (method) => ({children, ...props}) => {
  const intl = useIntl()
  return intl[method](props)
}
export const FormattedMessage = createComponent('formatMessage');
//export const FormattedTime = createComponent('formatTime');
