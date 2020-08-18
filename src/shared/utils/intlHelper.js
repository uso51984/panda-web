import enLocal from 'i18n/source/en-US.js';//eslint-disable-line
import zhLocal from 'i18n/source/zh-CN.js';//eslint-disable-line

/**
 * get all supported Languag messages
 */
const getMessages = () => ({
  'en-US': {
    ...enLocal,
  },
  'zh-CN': {
    ...zhLocal,
  }
});

export default {
  getMessages,
};
