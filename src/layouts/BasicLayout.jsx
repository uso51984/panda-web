import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Layout, Breadcrumb } from 'antd';
import { Link } from '@/shared/components/RouterLink';
import Menu from '@/shared/components/Menu';
import menuDatas from '@/shared/consts/MenuDatas';

const { Header, Footer, Sider, Content } = Layout;

class BasicLayout extends React.PureComponent {
  render() {
    return (
      <div>
        <Layout>
          <Header className="header">
            <div className="logo" />
          </Header>
          <Layout>
            <Sider width={200} className="site-layout-background">
              <Menu menuDatas={menuDatas} />
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
