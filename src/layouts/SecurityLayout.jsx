import React from 'react';
import { Redirect } from 'react-router-dom';

class SecurityLayout extends React.Component {
  render() {
    if (window.location.pathname === '/') {
      return <Redirect to='user/signIn' />;
    }

    return 'SecurityLayout'
  }
}

export default SecurityLayout;
