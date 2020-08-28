import React from 'react';
import useSelector from '@/shared/hooks/useSelector';

import { fromJS } from 'immutable';


const Test1 = () => {

  const mapState = useSelector(state => ({
    list: state.signIn.getIn(['persons', 'detail'])
  }));

  console.log('---------测试render', mapState.list.toJS());

  return (
    <div>
      这是测试render执行情况
    </div>
  );
};

export default React.memo(Test1);
