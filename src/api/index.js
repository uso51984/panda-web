import { createAPI, httpMethod } from './request';

export const testGet = createAPI(httpMethod.GET, '/testGetMock');
export const getUserName = createAPI(httpMethod.GET, 'https://www.fastmock.site/mock/a4676b8718662138dc75efb3b3a401e6/restclinet/api/username');
export const testPost = createAPI(httpMethod.POST, '/testPostMock/23');
export const testPut = createAPI(httpMethod.PUT, 'jiekec/index.php?route=catalog/{{id}}/bannerlist');
