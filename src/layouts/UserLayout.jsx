import React from 'react';
import { Route, Link } from 'react-router-dom';
import SignIn from 'pages/User/SignIn';
import ForgotPassword from 'pages/User/ForgotPassword';
import { routerRedux } from 'dva';

class BasicLayout extends React.Component {
  componentDidMount(){
    const { history: { location: { pathname } } } = this.props;

    if (pathname === '/user') {
      routerRedux.push('user/signIn')
    }
  }

  render() {
    return (
      <div>
        <div style={{ color: 'red' }} onClick={()=> routerRedux.push('/user/forgotPassword')}>这是user容器</div>
        <Link to="/user/forgotPassword"> test forgotpassword</Link>
        <Route exact path="/user/signIn" component={SignIn} />
        <Route exact path="/user/forgotPassword" component={ForgotPassword} />
      </div>
    )
  }
}

export default BasicLayout;
