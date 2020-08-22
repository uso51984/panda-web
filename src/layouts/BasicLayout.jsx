import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Link } from '@/shared/components/RouterLink';
import Menus from '@/shared/components/Menu';

const { Header, Footer, Sider, Content } = Layout;
const { SubMenu } = Menu;

class BasicLayout extends React.PureComponent {
  render() {
    return (
      <div>
        <Layout>
          <Header className="header">
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
              <Menu.Item key="1">nav 1</Menu.Item>
              <Menu.Item key="2">nav 2</Menu.Item>
              <Menu.Item key="3">nav 3</Menu.Item>
            </Menu>
          </Header>
          <Layout>
            <Sider width={200} className="site-layout-background">
              <Menus />
            </Sider>
            <Layout style={{ padding: '0 24px 24px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
              </Breadcrumb>
              <div>
                <Switch>
                  <Route exact path="/settings/user/roleSetting" component={() => '角色权限管理内容'} />
                  <Route exact path="/settings/linkSetting" component={() => '推广链接设置内容'} />
                </Switch>
              </div>
            </Layout>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default BasicLayout;
