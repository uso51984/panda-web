import React from 'react';
import { formattedNumberFunc } from './utils';

const FormattedNumber = ({ value, numberStyle }) => (
  <span className="format-number">
    {formattedNumberFunc({ value, numberStyle })}
  </span>
);

export default FormattedNumber;
