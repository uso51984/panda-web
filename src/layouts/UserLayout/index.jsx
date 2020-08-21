import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { urls } from 'shared/services/location';
import SignIn from 'pages/User/SignIn';
import loadable from '@loadable/component';
import LanguageSelect from 'shared/components/LanguageSelect';
import { Redirect } from 'shared/components/RouterLink';
import './index.less';

const ForgotPassword = loadable(() =>
  import(/* webpackChunkName: 'forgotPassword' */ 'pages/User/ForgotPassword'), {
  fallback: 'loading'
});

class BasicLayout extends React.Component {
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

          <Switch>
            <Route exact path={urls.SIGNIN} component={SignIn} />
            <Route exact path={urls.FORGOT_PASSWORD} component={ForgotPassword} />
            <Redirect from={urls.USER} to={urls.SIGNIN} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default BasicLayout;
