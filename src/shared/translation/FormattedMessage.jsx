import React from 'react';
import * as ReactIntl from 'react-intl';
import decodeHtmlStr from 'shared/utils/decodeHtmlStr';

const FormattedMessage = (props) => {
  const { children, values, ...rest } = props;
  const formattedValues = {};
  if (values) {
    Object.keys(values).forEach((key) => {
      const val = values[key];
      formattedValues[key] = typeof val === 'string' ? decodeHtmlStr(val) : val;
    });
  }
  return (
    <ReactIntl.FormattedMessage {...rest} values={formattedValues}>
      {children}
    </ReactIntl.FormattedMessage>
  );
};

export default FormattedMessage;
