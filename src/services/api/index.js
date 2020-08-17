import { createAPI } from 'shared/utils/request';

export const testGet = createAPI('get', 'https://www.fastmock.site/mock/a4676b8718662138dc75efb3b3a401e6/restclinet/rest/user');
export const getUserName = createAPI('get', 'https://www.fastmock.site/mock/a4676b8718662138dc75efb3b3a401e6/restclinet/api/username');
export const testPost = createAPI('post', 'jiekec/index.php?route=catalog/banner/bannerlist');
export const testPut = createAPI('put', 'jiekec/index.php?route=catalog/{{id}}/bannerlist');

