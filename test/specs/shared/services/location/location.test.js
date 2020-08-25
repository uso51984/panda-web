
// import { routerRedux } from 'dva';
import location from '@/shared/services/location/locationServices';

// const { routerRedux } = jest.requireActual('dva');

describe('locationServices', () => {
  it('history api should work fine ', () => {
    const store = {
      dispatch: jest.fn(),
    };

    // const spygoForward = jest.spyOn(routerRedux, 'goForward');
    location.initialize(store);
    location.goForward();
    location.goBack();
    location.go();
    location.replace('/user/name');
    const serializedUrl = location.push('/user/name');
    expect(store.dispatch).toHaveBeenCalledTimes(5);
    expect(serializedUrl).toEqual('/user/name?locale=zh-CN');
  });

  it('buildURL should work fine ', () => {
    expect(location.buildURL('/usr/:id/name/:age', {
      params: { id: 3, age: 23 },
      search: { test: 'asdf', name: 'chen' },
    })).toEqual('/usr/3/name/23?test=asdf&name=chen&locale=zh-CN');

    expect(location.buildURL('/usr')).toEqual('/usr?locale=zh-CN');
  });
});
