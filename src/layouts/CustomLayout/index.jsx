import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from '@/shared/components/RouterLink';
import { urls } from '@/shared/services/location';
import { getAccountsRoutes } from '@/routers';

const { accountManagement } = urls;

export default () => {
  const parmas = useParams();
  console.log('parmas', parmas);

  return (
    <div>
      <h2>这是头部23</h2>
      {getAccountsRoutes()}
      <Link
        to={{
          url: accountManagement.ACCOUNTS_DETAIL,
          params: { id: 2323 } ,
          search: { name: 'chenjianb', age: 2323 }
        } }
      >
      accountsDetail
      </Link>
    </div>
  );};
