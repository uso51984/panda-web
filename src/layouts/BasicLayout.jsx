import React from 'react';
import { Link } from 'shared/components/RouterLink';

class UserLayout extends React.PureComponent {
  render() {
    return (
      <div>
        <Link to="/user/forgotPassword">忘记密码</Link>
      </div>
    );
  }
}

export default UserLayout;
