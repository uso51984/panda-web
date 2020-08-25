import React from 'react';
import { Menu, Dropdown } from 'antd';

export default () => {

  const menu = (
    <Menu>
      <Menu.Item key="1">1st menu item</Menu.Item>
      <Menu.Item key="2">2nd memu item</Menu.Item>
      <Menu.Item key="3">3rd menu item</Menu.Item>
    </Menu>
  );

  return (
    <div>
      <Dropdown overlay={menu} trigger={['contextMenu']}>
        <span className="ant-dropdown-link">
          Hover me, Click menu item
        </span>
      </Dropdown>
    </div>
  );

};
