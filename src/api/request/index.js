import { Modal } from 'antd';
import * as restClient from '@/shared/services/restClient';

const { RequestReponse, httpMethod } = restClient;

RequestReponse.httpError = Error => {
  const { title, data } = Error;
  if (data.code === 404){
    Modal.error({
      title,
      content: '请求了不存在的接口'
    });
  }

  if (data.code === 500){
    Modal.error({
      title,
      content: '服务器端出错了'
    });
  }

  if (data.code === 'failed') {
    Modal.error({
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

const defaultConfig = {
  headers: {
    'x-test': 'sadf'
  }
};

// eslint-disable-next-line import/no-mutable-exports
let createAPI = (method, url) => restClient.createAPI(method, url, defaultConfig);

if (__TESTING__){
  createAPI = (_, url) => function request() {return Promise.resolve(url);};
}

export {
  createAPI,
  httpMethod
};
