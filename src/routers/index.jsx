import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { urls } from '@/shared/services/location';
import UserCenterLayout from '@/layouts/UserCenterLayout';
import CustomLayout from '@/layouts/CustomLayout';
// account
import AccountsDetail from '@/pages/Accounts/AccountsDetail';
// usercenter
import Basicinfo from '@/pages/UserCenter/Basicinfo';
import EditPasswd from '@/pages/UserCenter/EditPasswd';
import PersonalNotify from '@/pages/UserCenter/PersonalNotify';
import Withdraw from '@/pages/UserCenter/Withdraw';

const { userCenter, accountManagement } = urls;

export const getBasicLayoutRoutes = () => (
  <Switch>
    <Route path={userCenter.USER_CENTER} component={UserCenterLayout} />
    <Route path={accountManagement.ACCOUNTS} component={CustomLayout} />
  </Switch>
);

export const getAccountsRoutes = () => (
  <Switch>
    <Route exact path={accountManagement.ACCOUNTS_DETAIL} component={AccountsDetail} />
    <Route component={ () => '404'} />
  </Switch>
);

export const getUserCenterRoutes = () => (
  <Switch>
    <Route exact path={userCenter.USER_CENTER_WITHDRAW} component={Withdraw} />
    <Route exact path={userCenter.USER_CENTER_EDIT_PASSWD} component={EditPasswd} />
    <Route exact path={userCenter.USER_CENTER_BASICINFO} component={Basicinfo} />
    <Route exact path={userCenter.USER_CENTER_PERSONAL_NOTIFY} component={PersonalNotify} />
    {/* <Redirect from={userCenter.USER_CENTER} to={userCenter.USER_CENTER_WITHDRAW} /> */}
  </Switch>
);
