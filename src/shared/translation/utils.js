import template from 'lodash/template';
import isPlainObject from 'lodash/isPlainObject';

export const formatI18n = (message = '', values) => {
  return values && isPlainObject(values) ? template(message, { interpolate: /{([\s\S]+?)}/g })(values) : message;
}

export const formattedNumberFunc = (options) => {
  const { value, numberStyle, callback } = options;

  const formattedNumber = new Intl.NumberFormat('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(value);
  let formatedCurrency;
  if (numberStyle === 'percent') {
    formatedCurrency = `${formattedNumber}%`;
  } else if (numberStyle === 'decimal') {
    formatedCurrency = formattedNumber.indexOf('-') !== -1 ? `-${formattedNumber.split('-')[1]}` : `${formattedNumber}`;
  } else if (numberStyle === 'decimalinreport') {
    formatedCurrency = formattedNumber.indexOf('-') !== -1 ? `($${formattedNumber.split('-')[1]})` : `$${formattedNumber}`;
  } else {
    formatedCurrency = formattedNumber.indexOf('-') !== -1 ? `-$${formattedNumber.split('-')[1]}` : `$${formattedNumber}`;
  }
  if (typeof callback === 'function') {
    return callback(formatedCurrency);
  }
  return formatedCurrency;
};
