import React from 'react';
import decodeHtmlStr from 'shared/utils/decodeHtmlStr';

const FormattedDyncMessage = ({ value }) => (
  <React.Fragment>
    {decodeHtmlStr(`${value || ''}`)}
  </React.Fragment>
)

export default FormattedDyncMessage;
