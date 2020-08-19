import { getQueryObject, toQueryString } from 'shared/utils/qsHelp';
import locationHelp from 'shared/utils/locationHelp';
import localStorage from 'shared/utils/localStorage';
import languages from './consts/languages';

class Locale {
  initialize() {
    const { locale } = getQueryObject();
    if (locale) {
      this.currentLocale = locale;
      localStorage.set('locale', locale);
      return;
    }

    const storageLocaleValue = localStorage.get('locale');
    const isStorageLocale = languages.indexOf(storageLocaleValue) !== -1;

    if (isStorageLocale){
      this.updateLocale(storageLocaleValue);
      return;
    }

    this.updateLocale('zh-CN');
  }

  updateLocale(newLocale) {
    const { location } = window;
    if (this.currentLocale !== newLocale) {
      this.currentLocale = newLocale;
      localStorage.set('locale', newLocale);
      const nowQueryObject = getQueryObject();
      nowQueryObject.locale = newLocale;

      const newUrl = `${location.origin}${location.pathname}${toQueryString(nowQueryObject)}`;
      locationHelp.redirect(newUrl);
    }
    return null;
  }
}

export default new Locale();
