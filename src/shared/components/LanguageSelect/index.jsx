import React from 'react';
import { Select } from 'antd';
import Globalize from 'shared/services/i18n/Globalize';
import locale from 'shared/services/i18n/locale';
import './index.less';

const { Option } = Select;

export default () => (
  <Select
    className="languages"
    defaultValue={Globalize.locale}
    onChange={value => locale.updateLocale(value)}
  >
    <Option value="zh-CN">中文</Option>
    <Option value="en-US">English</Option>
  </Select>
);
