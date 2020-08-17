import React from 'react';
import { injectIntl } from 'react-intl';
import { testGetRequest } from 'services/sign';


const Home = () => {
  const data = testGetRequest({name: 'afsadf', age: '大是大非'})

  // testPut({id: 23}, {name: 'afsadf', age: '大是大非'});
  // testPost().catch(()=>{
  //   console.log('23333333')
  // });

  return (
    <div>
      asdfsafd
    </div>
  )
}

export default injectIntl(Home);
