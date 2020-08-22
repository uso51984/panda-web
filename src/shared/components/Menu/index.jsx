import React, { useState, useEffect } from 'react';
import { Menu } from 'antd';
import { useSelector } from 'dva';
import { location } from '@/shared/services/location';

const { SubMenu } = Menu;


const listData = [
  {
    popupClassName: '',
    disabled: false,
    key: 'settings/user',
    title: '用户管理',
    icon: 'icon',
    children: [
      {
        popupClassName: '',
        children: [],
        disabled: false,
        key: '/settings/user/roleSetting',
        title: '角色权限设置',
        icon: 'icon'
      },
      {
        popupClassName: '',
        children: [{
          popupClassName: '',
          children: [],
          disabled: false,
          key: 'sub1--1-1-=1',
          title: 'subnav 132',
          icon: 'icon'
        }],
        disabled: false,
        key: 'sub1-1-1',
        title: 'subnav 12323',
        icon: 'icon'
      }
    ],
  },
  {
    popupClassName: '',
    children: [
      {
        popupClassName: '',
        children: [],
        disabled: false,
        key: '/settings/linkSetting/setd',
        title: 'dsaf',
        icon: 'icon'
      },
    ],
    disabled: false,
    key: 'settings/linkSetting',
    title: '推广链接设置',
    icon: 'icon'
  },
];



const getMenuList = (listData) => {
  const listSubMenuNode = [];

  // const getSubMenu= (list) => {
  //   list.forEach(({ children, key, title }) => {
  //     if (children.length) {
  //       listSubMenuNode.push(
  //         <SubMenu key={key} title={title}>
  //           {
  //             children.map(menuItem => {
  //               if (menuItem.children.length){
  //                 return (
  //                   <SubMenu key={menuItem.key} title={menuItem.title}>
  //                     {
  //                       menuItem.children.map(subMenuItem => <Menu.Item key={subMenuItem.key}>{subMenuItem.title}</Menu.Item>)
  //                     }
  //                   </SubMenu>
  //                 );
  //               }
  //               return <Menu.Item key={menuItem.key}>{menuItem.title}</Menu.Item>;
  //             })
  //           }
  //         </SubMenu>
  //       );
  //     } else {
  //       listSubMenuNode.push(<Menu.Item key={key}>{title}</Menu.Item>);
  //     }
  //   });
  // };

  listData.forEach((MenuItem, index) => {
    const getSubMenu= nextMenuItem => {
      if (nextMenuItem.children.length) {
        listSubMenuNode.push(
          <SubMenu key={nextMenuItem.key} title={nextMenuItem.title}>
            {
              nextMenuItem.children.map(menuItem => {
                if (menuItem.children.length){
                  return (
                    <SubMenu key={menuItem.key} title={menuItem.title}>
                      {
                        menuItem.children.map(subMenuItem => <Menu.Item key={subMenuItem.key}>{subMenuItem.title}</Menu.Item>)
                      }
                    </SubMenu>
                  );
                }
                return <Menu.Item key={menuItem.key}>{menuItem.title}</Menu.Item>;
              })
            }
          </SubMenu>
        );
      } else {
        listSubMenuNode.push(<Menu.Item key={nextMenuItem.key}>{nextMenuItem.title}</Menu.Item>);
      }
    };

    getSubMenu(MenuItem);
  });

  return listSubMenuNode;
};

const getSubMenuOrItem = item => {
  // doc: add hideChildrenInMenu
  if (item.children.length) {
    const { title } = item;
    return (
      <SubMenu
        title={
          item.icon ? (
            <span>
              <span>{title}</span>
            </span>
          ) : (
            title
          )
        }
        key={item.key}
      >
        {getNavMenuItems(item.children)}
      </SubMenu>
    );
  }
  return <Menu.Item key={item.key}>{item.title}</Menu.Item>;
};


function getNavMenuItems (menusData, parent) {
  if (!menusData) {
    return [];
  }
  return menusData
    .map(item => getSubMenuOrItem(item, parent));
}


const Menus = props => {
  const { dataSource } = props;


  // const listSubMenuNode = getMenuList(listData);

  const { pathname } = useSelector(state => state.router.location);

  const pathArray = pathname.split('/');
  let defaultOpenKeys = [];
  if (pathArray.length ===4){
    defaultOpenKeys = [pathArray.slice(1, 3).join('/')];
  }

  const [ openKeys, setOpenKeys ] = useState(defaultOpenKeys);


  const handleSelect = data => {
    location.push(data.key);
  };

  const handleOpenChange = data => {
    const newOpenKeys = [data[data.length-1]];
    if (!data.length && newOpenKeys.length){
      return;
    }
    setOpenKeys(newOpenKeys);
  };


  return(
    <Menu
      mode="inline"
      defaultOpenKeys={openKeys}
      onOpenChange={handleOpenChange}
      // openKeys={openKeys}
      onSelect={handleSelect}
      selectedKeys={pathname}
      style={{ height: '100%', borderRight: 0 }}
    >
      { getNavMenuItems(listData) }
    </Menu>
  );
};


export default Menus;
