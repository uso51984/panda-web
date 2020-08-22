import React from 'react';
import { injectIntl, FormattedMessage } from 'react-intl';
import { Form, Input, Button, Checkbox } from 'antd';
import { connect, useStore } from 'dva';
import { Link } from '@/shared/components/RouterLink';
import { testGetRequest } from '@/services/sign';

const ForgotPassword = () => {
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
    <div className="forgot-password-container">
      <div className="title">找回密码</div>
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
          rules={[{ required: true, message: 'Please input your username!', }, ]}
        >
          <Input />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>

        <Link to="/user/signIn">直接登录</Link>
      </Form>
    </div>
  );
};

export default connect(({ login }) => ({
  userLogin: login,
}))(injectIntl(ForgotPassword));
