import React from 'react';
import { injectIntl } from 'react-intl';
import { useParams } from 'dva';

const ForgotPassword = () => {
  console.log('dasf', useParams());

  return (
    <div>
      忘记密码
    </div>
  )
}


export default ForgotPassword;
