import React from 'react';
import { Spin } from 'antd';
import { Route, Switch } from 'react-router-dom';
import loadable from '@loadable/component';
import { urls } from '@/shared/services/location';
import SignIn from '@/pages/User/SignIn';
import LanguageSelect from '@/shared/components/LanguageSelect';
import { Redirect } from '@/shared/components/RouterLink';
import ErrorBoundary from '@/shared/components/ErrorBoundary';
import './index.less';

const ForgotPassword = loadable(() =>
  import(
    /* webpackChunkName: 'forgotPassword' */
    /* webpackPrefetch: true */
    '@/pages/User/ForgotPassword'
  ), {
  fallback: <Spin />
});

class UserLayout extends React.Component {
  handleChange = value => {
    console.log('languege change');
  }

  render() {
    return (
      <div className="user-layout">
        <div className="user-layout-container">
          <div className="user-layout-header">
            <div className="logo">logo</div>
            <div className="lang">
              <LanguageSelect />
            </div>
          </div>
          <ErrorBoundary>
            <Switch>
              <Route exact path={urls.SIGNIN} component={SignIn} />
              <Route exact path={urls.FORGOT_PASSWORD} component={ForgotPassword} />
              <Redirect from={urls.USER} to={urls.SIGNIN} />
            </Switch>
          </ErrorBoundary>
        </div>
      </div>
    );
  }
}

export default UserLayout;
