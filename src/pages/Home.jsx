import React from 'react';
import { injectIntl, useIntl } from 'react-intl';

const Home = (props) => {
  console.log('props', props);
  const intl = useIntl();
  console.log('intl', intl);
  return (
    <div>
      asdfsafd
    </div>
  )
}

export default injectIntl(Home);