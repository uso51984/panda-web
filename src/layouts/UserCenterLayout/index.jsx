import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Layout, Breadcrumb } from 'antd';
import { Link } from '@/shared/components/RouterLink';
import Menu from '@/shared/components/Menu';
import { getUserCenterRoutes } from '@/routers';
import { urls } from '@/shared/services/location';

const { Sider } = Layout;

const { userCenter } = urls;

const userCenterMenus=  [
  {
    path: userCenter.USER_CENTER_WITHDRAW,
    name: '出金申请',
    icon: 'dashboard',
  },
  {
    path: userCenter.USER_CENTER_EDIT_PASSWD,
    name: '修改密码',
    icon: 'dashboard',
  },
  {
    path: userCenter.USER_CENTER_BASICINFO,
    name: '个人资料',
    icon: 'dashboard',
  },
  {
    path: userCenter.USER_CENTER_PERSONAL_NOTIFY,
    name: '个人通知',
  },
];



export default () => {
  return (
    <Layout>
      <Sider>
        <Menu menuDatas={userCenterMenus} />
      </Sider>

      <div>
        {getUserCenterRoutes()}
      </div>
    </Layout>
  );
};
