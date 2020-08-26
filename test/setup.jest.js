import configureStore from 'redux-mock-store';

const middlewares = [];
global.mockStore = configureStore(middlewares);

const MatchMedia = () => ({
  matches: false,
  addListener: () => { },
  removeListener: () => { }
});


window.matchMedia = window.matchMedia || MatchMedia;

Object.defineProperty(window, 'location', {
  configurable: true,
  writable: true,
  enumerable: true,
  value: {
    href: 'www.test.cn',
    search: '?locale=en-US&name=23&age=3',
    pathname: '/home'
  }
});

