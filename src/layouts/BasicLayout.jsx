import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Layout, Breadcrumb } from 'antd';
import { Link } from '@/shared/components/RouterLink';
import Menu from '@/shared/components/Menu';
import menuDatas from '@/shared/consts/MenuDatas';
import { getBasicLayoutRoutes } from '@/routers';
import { urls } from '@/shared/services/location';

const { userCenter, accountManagement } = urls;

const { Header, Footer, Sider, Content } = Layout;

const userCenterMenus=  [
  {
    path: accountManagement.ACCOUNT_MANAGEMENT,
    name: '客户',
    icon: 'dashboard',
  },
  {
    path: userCenter.USER_CENTER_WITHDRAW,
    name: '个人中心',
    icon: 'dashboard',
  }
];

class BasicLayout extends React.PureComponent {
  render() {
    return (
      <div>
        <Layout>
          <Header className="header">
            <div className="logo" />
            <Menu menuDatas={userCenterMenus} mode="horizontal" />
          </Header>
          <Layout>
            {/* <Sider width={200} className="site-layout-background">
              <Menu menuDatas={menuDatas} />
            </Sider> */}
            <Layout>
              <div>
                {getBasicLayoutRoutes()}
              </div>
            </Layout>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default BasicLayout;
