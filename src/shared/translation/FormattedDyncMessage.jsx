import React from 'react';
import decodeHtmlStr from 'shared/utils/decodeHtmlStr';

const FormattedDyncMessage = ({ value }) => (
  <>
    {decodeHtmlStr(`${value || ''}`)}
  </>
);

export default FormattedDyncMessage;
