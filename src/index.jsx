
import React from 'react';
import dva, { router, routerRedux } from 'dva';
import createLoading from 'dva-loading';
import { createBrowserHistory } from 'history';
import { Route, Switch, Link } from 'react-router-dom';
import { injectIntl, IntlProvider, FormattedRelative, useIntl } from 'react-intl';
import forEach from 'lodash/forEach';
import modles from 'root/models';
import SecurityLayout from 'layouts/SecurityLayout';
import UserLayout from 'layouts/UserLayout';
import Home from 'pages/Home';

import intlHelper from 'shared/utils/intlHelper';

const { getMessages } = intlHelper;

/* eslint-disable global-require */
if (__STATIC__) {
  require('../mock')
}

// const { Route, Switch, Link } = router;
const { ConnectedRouter } = routerRedux;

const rootRouter = [
  { path: '/about', exact: true, component: Home },
  { path: '/', exact: true, component: SecurityLayout },
  { path: '/dasbashd', exact: true, component: ()=> 'Home3' }
];

const history = createBrowserHistory();

const Router = () => (
  <IntlProvider locale='zh-CN' messages={getMessages()['zh-CN']}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/user" component={UserLayout} />
        {
          rootRouter.map((item, index) => (
            <Route
              key={index}
              path={item.path}
              exact={item.exact}
              component={item.component}
            />))
        }
        <Route component={() => '404页面'} />
      </Switch>
    </ConnectedRouter>
  </IntlProvider>
)

const app = dva({
  history
});

forEach(modles, (model)=> app.model(model))

app.router(Router)
app.use(createLoading());
app.start('#root')
