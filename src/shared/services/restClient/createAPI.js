import isObject from 'lodash/isObject';
import isString from 'lodash/isString';
import isArray from 'lodash/isArray';
import request from './request';

const exp = /\{\{([\s\S]+?)\}\}/g;
const hasTemplate = s => s.match(exp);
const findTemplate = s => {
  const m = exp.exec(s);
  return m ? m[1] : '';
};

const doTemplate = (url, params) => {
  let result = url;
  if (isString(url) && isObject(params)) {
    let key = findTemplate(url);
    while (key) {
      let value = params[key] || '';
      if (isArray(value)) {
        value = value.join(',');
      }
      result = url.replace(`{{${key}}}`, value);
      key = findTemplate(url);
    }
  }

  return result;
};

const createAPI = (method, url, defaultConfig) => (params, content, config) => {
  let data = content;
  let restUrl = url;
  if (hasTemplate(url)) {
    restUrl = doTemplate(url, params);
  } else {
    data = params;
  }

  const fetchConfig = { ...defaultConfig,  ...config };

  return request(restUrl, method, data, fetchConfig);
};

export default createAPI;
