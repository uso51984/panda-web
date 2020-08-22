import React from 'react';
import { Menu, Icon } from 'antd';

const { SubMenu } = Menu;

const getSubMenuOrItem = item => {
  if (item.children && item.children.length) {
    const { name } = item;
    return (
      <SubMenu
        title={
          item.icon ? (
            <span>
              <Icon type={item.icon} />
              <span>{name}</span>
            </span>
          ) : (
            name
          )
        }
        key={item.path}
      >
        {getNavMenuItems(item.children)}
      </SubMenu>
    );
  }
  return <Menu.Item key={item.path}>{item.name}</Menu.Item>;
};

function getNavMenuItems(menusData) {
  if (!menusData) {
    return [];
  }
  return menusData.map(item => getSubMenuOrItem(item));
}

export default getNavMenuItems;
