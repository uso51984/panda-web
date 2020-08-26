import enLocal from '@/locales/source/en-US.js';//eslint-disable-line
import zhLocal from '@/locales/source/zh-CN.js';//eslint-disable-line

/**
 * get all supported Languag messages
 */
const getMessages = () => ({
  'en-US': {
    ...enLocal
  },
  'zh-CN': {
    ...zhLocal
  }
});

export default {
  getMessages
};
