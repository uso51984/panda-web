import React from 'react';
import { Link } from 'react-router-dom';
import buildURL from '../utils/buildURL';

export default ({ children, to, ...rest }) => (<Link to={buildURL(to)} {...rest}>{children}</Link>);
