import { createAPI, RequestReponse, httpMethod } from 'shared/common/restClient';

RequestReponse.httpError = (Error) => {
  console.log('httpError', Error)
}

RequestReponse.systemError = (systemError) => {
  console.log('systemError', systemError)
}

RequestReponse.businessError = (businessError) => {
  console.log('businessError', businessError)
}

export { createAPI, httpMethod }
