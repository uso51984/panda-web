import React, { useState } from 'react';
import { Button } from 'antd';

const AsyncButton = ({ onClick, action, children, ...rest }) => {
  const [isLoading, setLoading] = useState(false);
  const handleClick = () => {
    setLoading(true);

    onClick().then(() => {
      setLoading(false);
    });
  };
  return (<Button {...rest} onClick={handleClick} loading={isLoading}>{children}</Button>);
};

export default AsyncButton;
