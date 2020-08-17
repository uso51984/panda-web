
import React from 'react';
import dva from 'dva';
import createLoading from 'dva-loading';
import { createBrowserHistory } from 'history';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { injectIntl, IntlProvider, FormattedRelative, useIntl } from 'react-intl';
import SignInModels from 'pages/Sign/SignIn/models';
import intlModel from 'root/models/intl';
import Home from 'pages/Home';
import SignIn from 'pages/Sign/SignIn';
import intlHelper from 'shared/utils/intlHelper';

const { getMessages } = intlHelper;

/* eslint-disable global-require */
if (__STATIC__) {
  require('../mock')
}

const rootRouter = [
  { path: '/signin', exact: true, component: SignIn },
  { path: '/about', exact: true, component: Home },
  { path: '/', exact: true, component: ()=> 'Home2' },
  { path: '/dasbashd', exact: true, component: ()=> 'Home3' }
];


const Router = () => (
  <IntlProvider locale='zh-CN' messages={getMessages()['zh-CN']}>
    <BrowserRouter>
      <div className="mian-content">
        <ul>
          <li><Link to="/signin">登录</Link></li>
          <li><Link to="/">首页</Link></li>
          <li><Link to="/about">关于我们</Link></li>
          <li><Link to="/dasbashd">个人主页</Link></li>
        </ul>
        <Switch>
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
      </div>
    </BrowserRouter>
  </IntlProvider>
)

const app = dva({
  history: createBrowserHistory()
});

app.model(SignInModels);
app.model(intlModel);
app.router(Router)
app.use(createLoading());
app.start('#root')
