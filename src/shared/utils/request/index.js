import { Modal } from 'antd';
import { createAPI, RequestReponse, httpMethod } from '@/shared/services/restClient';

const { error } = Modal;

RequestReponse.httpError = Error => {
  const { title, data } = Error;
  if (data.code === 404){
    error({
      title,
      content: '请求了不存在的接口'
    });
  }

  if (data.code === 500){
    error({
      title,
      content: '服务器端出错了'
    });
  }

  if (data.code === 'failed') {
    error({
      title,
      content: '服务端超时'
    });
  }
};

RequestReponse.systemError = systemError => {
  console.log('systemError', systemError);
};

RequestReponse.businessError = businessError => {
  console.log('businessError', businessError);
};

export { createAPI, httpMethod };
