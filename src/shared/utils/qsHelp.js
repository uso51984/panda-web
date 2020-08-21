import queryString from 'qs';

export const getQueryString = () => {
  const qs = window.location.search;
  if (qs && qs.charAt(0) === '?') {
    return qs.substr(1);
  }

  return '';
};

export const getQueryObject = () => queryString.parse(getQueryString());

export const toQueryString = object => `?${queryString.stringify(object, { encode: true })}`;
