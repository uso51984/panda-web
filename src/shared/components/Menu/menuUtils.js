import pathToRegexp from 'path-to-regexp';
import { urlToList } from '@/shared/utils/qsHelp';

/**
 * Recursively flatten the data
 * [{path:string},{path:string}] => {path,path2}
 * @param  menus
 */
export const getFlatMenuKeys = menuData => {
  let keys = [];
  menuData.forEach(item => {
    keys.push(item.path);
    if (item.children) {
      keys = keys.concat(getFlatMenuKeys(item.children));
    }
  });
  return keys;
};

const getMenuMatches = (flatMenuKeys, path) => flatMenuKeys.filter(item => {
  if (item) {
    return pathToRegexp(item).test(path);
  }
  return false;
});

/**
 * 获得菜单子节点
 * @memberof SiderMenu
 */
export const getDefaultCollapsedSubMenus = (pathname, flatMenuKeys) => urlToList(pathname)
  .map(item => getMenuMatches(flatMenuKeys, item)[0])
  .filter(item => item);

export const getSelectedMenuKeys = ( pathname, flatMenuKeys ) => urlToList(pathname)
  .map(itemPath => getMenuMatches(flatMenuKeys, itemPath).pop());
