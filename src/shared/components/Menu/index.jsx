import React, { useState } from 'react';
import { Menu } from 'antd';
import { useSelector } from 'dva';
import { location } from '@/shared/services/location';
import getNavMenuItems from './getNavMenuItems';
import {
  getFlatMenuKeys,
  getDefaultCollapsedSubMenus,
  getSelectedMenuKeys
} from './menuUtils';

const MenuWrapper = props => {
  const { menuDatas, ...menuProps } = props;
  const { pathname } = useSelector(state => state.router.location);
  const flatMenuKeys = getFlatMenuKeys(menuDatas);
  const selectedKeys = getSelectedMenuKeys(pathname, flatMenuKeys);
  const defaultOpenKeys = getDefaultCollapsedSubMenus(pathname, flatMenuKeys);
  const [ openKeys, setOpenKeys ] = useState(defaultOpenKeys);

  const handleSelect = data => {
    location.push(data.key);
  };

  const isMainMenu =  key => menuDatas.some(item => {
    if (key) {
      return item.key === key || item.path === key;
    }
    return false;
  });

  const handleOpenChange = nextOenKeys => {
    const moreThanOne = nextOenKeys.filter(openKey => isMainMenu(openKey)).length > 1;
    const newOpenKeys = moreThanOne ? [nextOenKeys.pop()] : [...nextOenKeys];
    setOpenKeys(newOpenKeys);
  };

  return(
    <Menu
      mode="inline"
      {...menuProps}
      defaultOpenKeys={openKeys}
      onOpenChange={handleOpenChange}
      openKeys={openKeys}
      onSelect={handleSelect}
      selectedKeys={selectedKeys}
    >
      { getNavMenuItems(menuDatas) }
    </Menu>
  );
};

export default React.memo(MenuWrapper);
