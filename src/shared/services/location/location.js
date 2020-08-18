import qs from 'qs';
import template from 'lodash/template';
import { routerRedux } from 'dva';

const { push, replace, go, goBack, goForward } = routerRedux;

/**
 * These actions correspond to the history API.
 * The associated routerMiddleware will capture these events before they get to
 * your reducer and reissue them as the matching function on your history.
 */

class Location {
  initialize(store) {
    this.store = store;
  }

  buildURL = (url, vars, params) => {
    let serializedUrl = template(url, { interpolate: /{{([\s\S]+?)}}/g })(vars);

    const queryStr = qs.stringify(params, { indices: false });

    if (queryStr) {
      serializedUrl = `${serializedUrl}?${queryStr}`;
    }

    return serializedUrl;
  }

  goForward(){
    this.store.dispatch(goForward())
  }

  goBack(stepNumber){
    this.store.dispatch(goBack(stepNumber));
  }

  go(stepNumber){
    this.store.dispatch(go(stepNumber));
  }

  replace(url, options = {}) {
    const { vars, params } = options;
    const serializedUrl = this.buildURL(url, vars, params);

    this.store.dispatch(replace(serializedUrl));
  }

  push(url, options = {}) {
    const { vars, params } = options;
    const serializedUrl = this.buildURL(url, vars, params);

    this.store.dispatch(push(serializedUrl));

    return serializedUrl;
  }
}

export default new Location();
