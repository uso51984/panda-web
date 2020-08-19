import isObject from 'lodash/isObject';
import { location } from 'shared/services/location';

export default (to) => {
  let path;

  if (isObject(to)) {
    const { url, vars, params } = to;
    path = location.buildURL(url, { vars, params });
  } else {
    path = location.buildURL(to);
  }

  return path;
};

