import { match } from 'path-to-regexp';

export const getParams = url => {
  const keyValueArr = url.split('?')[1].split('&');
  const paramObj = {};
  keyValueArr.forEach(item => {
    const keyValue = item.split('=');
    // eslint-disable-next-line prefer-destructuring
    paramObj[keyValue[0]] = keyValue[1];
  });
  return paramObj;
};

export const getMatchParams = ({ sourceUrl, targetUrl }) => {
  const matchRule = match(sourceUrl, { decode: decodeURIComponent });
  return matchRule(targetUrl).params;
};
