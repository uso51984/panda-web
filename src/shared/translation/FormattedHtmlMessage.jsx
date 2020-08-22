import React from 'react';
import decodeHtmlStr from '@/shared/utils/decodeHtmlStr';

/**
 * TODO: prevent XSS.
 */

const FormattedHtmlMessage = ({ value, ...rest }) => (
  // eslint-disable-next-line react/no-danger
  <span {...rest} dangerouslySetInnerHTML={{ __html: decodeHtmlStr(`${value || ''}`) }} />
);

export default FormattedHtmlMessage;
