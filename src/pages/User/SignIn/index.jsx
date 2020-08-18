import React from 'react';
import { injectIntl, FormattedMessage } from 'react-intl';
import { Button } from 'antd';
import { testGetRequest } from 'services/sign';
import { connect } from 'dva';
import selfMessages from './translations';

import './index.less';


const Home = ({userLogin, intl}) => {
  const data = testGetRequest({name: 'afsadf', age: '大是大非'})
  const { messages } = intl;
  // testPut({id: 23}, {name: 'afsadf', age: '大是大非'});
  // testPost().catch(()=>{
  //   console.log('23333333')
  // });
  console.log('messages', messages[selfMessages.name.id]);

  return (
    <div>
      登录页面
      <Button type="primary" className="red-color">测试按钮</Button>
      <FormattedMessage {...selfMessages.name} />
    </div>
  )
}

// export default injectIntl(Home);

export default connect(({ login }) => ({
  userLogin: login,
}))(injectIntl(Home));
