
import { getParams, getMatchParams } from './utils';

export default {
  getList: req => {
    console.log('req23', getParams(req.url));

    return ({
      header: {
        responseCode: '0001',
        responseMessage: 'error………..',
        pageInfo: {
          orderBy: '',
          pageNumber: 0,
          totalPage: 0
        }
      },
      body: {}
    });
  },

  testPost: req => {
    console.log('req,233', req);
    console.log('matchParams', getMatchParams({ sourceUrl: '/testPostMock/:id', targetUrl: req.url }));
    console.log('---', JSON.parse(req.body));
    return { tst: 1 };
  }
};
