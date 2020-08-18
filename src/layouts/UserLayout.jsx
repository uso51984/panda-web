import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import location from 'shared/services/location';
import SignIn from 'pages/User/SignIn';
import ForgotPassword from 'pages/User/ForgotPassword';
import { FormattedDyncMessage } from 'shared/translation'

const { locationHelp, urls } = location;


class BasicLayout extends React.Component {
  componentDidMount(){
    // console.log('location', location);
    // if (pathname === '/user') {
    //   locationHelp.push(urls.SIGNIN)
    // }
  }

  testClick = ()=>{
    // console.log(' this.props',  this.props.location)
    // console.log(' this.props',  this.props.location)
    locationHelp.replace('/user/forgotPassword');
    // routerRedux.push('/')
  }

  render() {
    return (
      <div>
        <div style={{ color: 'red' }} onClick={this.testClick }>test forgotpassword</div>
        <FormattedDyncMessage value="&lt;as f32" />
        <Switch>
          <Route exact path="/user/signIn" component={SignIn} />
          <Route exact path="/user/forgotPassword" component={ForgotPassword} />
          <Redirect from="/user" to="/user/signIn" />
        </Switch>
      </div>
    )
  }
}

export default BasicLayout;
