import enLocal from 'i18n/source/en-US.js';//eslint-disable-line
import zhLocal from 'i18n/source/zh-CN.js';//eslint-disable-line
/**
 * determine whether multilingual is enabled.
 */
// const isMultilingualEnabled = () => {
//   const languages = getLanguages();
//   return Array.isArray(languages) && languages.length > 1;
// };

// const isValidLocale = (item) => {
//   if (!item) {
//     return false;
//   }

//   const languages = getLanguages();

//   return findIndex(languages, obj => obj.code === item) > -1;
// };

/**
 * Get Query String of current url without ?
 */
// const getQueryString = () => {
//   const qs = window.location.search;
//   if (qs && qs.charAt(0) === '?') {
//     return qs.substr(1);
//   }

//   return '';
// };

/**
 * Get all Locales for en and fr
 */
// const getLocales = () => [...en, ...fr];

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
