import queryString from 'qs';
import { compile } from 'path-to-regexp';

export const getQueryString = () => {
  const qs = window.location.search;
  if (qs && qs.charAt(0) === '?') {
    return qs.substr(1);
  }

  return '';
};

export const getQueryObject = () => queryString.parse(getQueryString());

export const toQueryString = object => `?${queryString.stringify(object, { encode: true })}`;

export const urlToList = url => {
  const urllist = url.split('/').filter(i => i);
  return urllist.map((urlItem, index) => `/${urllist.slice(0, index + 1).join('/')}`);
};

export const toPath = (url, vars) => compile(url, { encode: encodeURIComponent })(vars);
