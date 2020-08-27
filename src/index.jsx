import dva, { createBrowserHistory } from 'dva';
import createLoading from 'dva-loading';
import forEach from 'lodash/forEach';
import AppRootRouter from '@/root/AppRootRouter';
import modles from '@/root/models';
import { location } from '@/shared/services/location';
import locale from '@/shared/services/i18n/locale';
import Globalize from '@/shared/services/i18n/Globalize';

/* eslint-disable global-require */
// if (__STATIC__) {
  require('../mock');
// }

const history = createBrowserHistory();

locale.initialize();

Globalize.locale = locale.currentLocale;

const app = dva({
  history
});

forEach(modles, model => app.model(model));
app.router(AppRootRouter);
app.use(createLoading());
app.start('#root');

// eslint-disable-next-line no-underscore-dangle
location.initialize(app._store);
