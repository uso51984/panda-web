
import dva from 'dva';
import createLoading from 'dva-loading';
import forEach from 'lodash/forEach';
import AppRootRouter, { history } from 'root/AppRootRouter';
import modles from 'root/models';
import location from 'shared/services/location'

const { locationHelp } = location;

/* eslint-disable global-require */
if (__STATIC__) {
  require('../mock')
}

const app = dva({
  history
});

forEach(modles, (model)=> app.model(model))
app.router(AppRootRouter)
app.use(createLoading());
app.start('#root')

// eslint-disable-next-line no-underscore-dangle
locationHelp.initialize(app._store);
