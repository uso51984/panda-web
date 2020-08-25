import qs from 'qs';
import { routerRedux } from 'dva';
import { toPath } from '@/shared/utils/qsHelp';
import Globalize from '@/shared/services/i18n/Globalize';

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

  buildURL = (url, options = {}) => {
    const { params = {}, search = {} } = options;
    let serializedUrl = toPath(url, params);
    search.locale = Globalize.locale;

    const queryStr = qs.stringify(search, { indices: false });

    if (queryStr) {
      serializedUrl = `${serializedUrl}?${queryStr}`;
    }

    return serializedUrl;
  }

  goForward(){
    this.store.dispatch(goForward());
  }

  goBack(stepNumber){
    this.store.dispatch(goBack(stepNumber));
  }

  go(stepNumber){
    this.store.dispatch(go(stepNumber));
  }

  replace(url, options = {}) {
    const { params, search } = options;
    const serializedUrl = this.buildURL(url, { params, search });

    this.store.dispatch(replace(serializedUrl));
  }

  push(url, options = {}) {
    const { params, search } = options;
    const serializedUrl = this.buildURL(url, { params, search });

    this.store.dispatch(push(serializedUrl));

    return serializedUrl;
  }
}

export default new Location();
