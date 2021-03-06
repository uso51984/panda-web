import React from 'react';
import { routerRedux } from 'dva';
import { Route, Switch } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import { ConfigProvider, Modal, message } from 'antd';
import SecurityLayout from '@/layouts/SecurityLayout';
import UserLayout from '@/layouts/UserLayout';
import intlHelper from '@/shared/utils/intlHelper';
import Globalize from '@/shared/services/i18n/Globalize';

const { getMessages } = intlHelper;

const { ConnectedRouter } = routerRedux;

Modal.config({ rootPrefixCls: 'crm' });
message.config({ prefixCls: 'crm' });

const Router = props => {
  const { history } = props;

  return (
    <IntlProvider locale={Globalize.locale} messages={getMessages()[Globalize.locale]}>
      <ConfigProvider prefixCls="crm">
        <ConnectedRouter history={history}>
          <Switch>
            <Route path="/user" component={UserLayout} />
            <Route path="/" component={SecurityLayout} />
            <Route component={() => '这个页面走丢了'} />
          </Switch>
        </ConnectedRouter>
      </ConfigProvider>
    </IntlProvider>
  );
};

export default Router;
