import React from 'react';
import { injectIntl, FormattedMessage } from 'react-intl';
import { Form, Input, Button, Checkbox } from 'antd';
import { connect } from 'dva';
import { Link } from 'shared/components/RouterLink';
import { location } from 'shared/services/location';
import { testGetRequest } from 'services/sign';
import selfMessages from './translations';

import './index.less';


const SignIn = ({userLogin, intl}) => {
  const data = testGetRequest({name: 'afsadf', age: '大是大非'})
  const { messages } = intl;
  // testPut({id: 23}, {name: 'afsadf', age: '大是大非'});
  // testPost().catch(()=>{
  //   console.log('23333333')
  // });

  const layout = { labelCol: { span: 8, }, wrapperCol: { span: 16, }, };
  const tailLayout = { wrapperCol: { offset: 8, span: 16, }, };
  const onFinish = values => {
    console.log('Success:', values);
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="signin-container">
      <div className="title">登录页面</div>
      <FormattedMessage {...selfMessages.name} />
      <Button onClick={()=> location.push('/user/signIn', {params: {name: 'asdf', age: 2323}})}>测试</Button>
      <Form
        {...layout}
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[ { required: true, message: 'Please input your username!', }, ]}
        >
          <Input />
        </Form.Item>

        <Form.Item label="Password" name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
          <div>
            <Checkbox>Remember me</Checkbox>

            <Link to="/user/forgotPassword">忘记密码</Link>
          </div>

        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
          Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

// export default injectIntl(Home);

export default connect(({ login }) => ({
  userLogin: login,
}))(injectIntl(SignIn));
