import React from 'react';
import { render } from '@testing-library/react';
import { IntlProvider } from 'react-intl';
import { ConfigProvider, Modal, message } from 'antd';
import Globalize from '@/shared/services/i18n/Globalize';
import intlHelper from '@/shared/utils/intlHelper';

const { getMessages } = intlHelper;

Modal.config({ rootPrefixCls: 'crm' });
message.config({ prefixCls: 'crm' });

const AllTheProviders = ({ children }) => (
  <IntlProvider locale={Globalize.locale} messages={getMessages()[Globalize.locale]}>
    <ConfigProvider prefixCls="crm">
      {children}
    </ConfigProvider>
  </IntlProvider>
);

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
