import React, { useState, useCallback } from 'react';
import { injectIntl, FormattedMessage } from 'react-intl';
import { Form, Input, Button, Checkbox } from 'antd';
import { connect } from 'dva';
import { useSelector } from 'react-redux';
import { Link } from '@/shared/components/RouterLink';
import AsyncButton from '@/shared/components/AsyncButton';
import { location } from '@/shared/services/location';
import Test1 from './components/Test';
import { signInEffectAction, setErrorUiAction } from './actions';
import selfMessages from './translations';
import './index.less';

const people = {};

const SignIn = ({ userLogin, intl, dispatch }) => {
  const [conut, setConut] = useState(0);

  const mapState = useSelector(state => {
    return ({
      list: state.signIn.get('text')
    });
  });

  console.log('mapState', mapState.list.toJS())

  const layout = { labelCol: { span: 8 }, wrapperCol: { span: 16 } };
  const tailLayout = { wrapperCol: { offset: 8, span: 16 } };
  const onFinish = values => {
    console.log('Success:', values);
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  const click = () => {
    dispatch(setErrorUiAction());
    return dispatch(signInEffectAction({ test: 2323 }))
      .then(data => console.log(data));
  };



  return (
    <div className="signin-container">
      <div className="title">登录页面</div>
      <Test1 />
      <h2>{conut}</h2>
      <AsyncButton
        onClick={click}
      >
          测试Action
      </AsyncButton>
      <FormattedMessage {...selfMessages.name} />
      <Button onClick={() => {dispatch(setErrorUiAction());}}>测试+</Button>
      <Form
        {...layout}
        name="basic"
        initialValues={{
          remember: true
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item label="Username" name="username">
          <Input />
        </Form.Item>

        <Form.Item label="Password" name="password">
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
  );
};

export default connect(({ login }) => ({
  userLogin: login
}))(injectIntl(SignIn));
