import React from 'react';
import { routerRedux } from 'dva';
import { createBrowserHistory } from 'history';
import { Route, Switch } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import { ConfigProvider } from 'antd';
import SecurityLayout from 'layouts/SecurityLayout';
import UserLayout from 'layouts/UserLayout';
import intlHelper from 'shared/utils/intlHelper';

const { getMessages } = intlHelper;

export const history = createBrowserHistory();
const { ConnectedRouter } = routerRedux;

const Router = () => (
  <IntlProvider locale='zh-CN' messages={getMessages()['zh-CN']}>
    <ConfigProvider prefixCls="crm">
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path="/" component={SecurityLayout} />
          <Route path="/user" component={UserLayout} />
          <Route component={() => '404页面'} />
        </Switch>
      </ConnectedRouter>
    </ConfigProvider>
  </IntlProvider>
)


export default Router;
