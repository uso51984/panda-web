import moment from 'moment';
import isNumber from 'lodash/isNumber';
import intlHelper from '@/shared/utils/intlHelper';

const createMoment = value => {
  if (value) {
    const val = moment(value);

    if (val.isValid()) {
      return val;
    }
  }

  return null;
};

class Globalize {
  constructor() {
    this.currentDateFormat = 'YYYY-MM-DD';
    this.currentTimeFormat = 'HH:mm:ss';

    Object.defineProperties(this, {
      locale: {
        get() {
          return this.currentLocale || 'zh-CN';
        },
        set(v) {
          this.currentLocale = v;
          this.onIntlChange();
        },
      },
    });

    Object.defineProperties(this, {
      dateFormat: {
        get() {
          return this.currentDateFormat;
        },
        set(v) {
          this.currentDateFormat = v;
        },
      },
    });

    Object.defineProperties(this, {
      timeFormat: {
        get() {
          return this.currentTimeFormat;
        },
        set(v) {
          this.currentTimeFormat = v;
        },
      },
    });

    Object.defineProperties(this, {
      dateTimeFormat: {
        get() {
          return `${this.currentDateFormat} ${this.currentTimeFormat}`;
        },
      },
    });

    Object.defineProperties(this, {
      timeZoneOffset: {
        get() {
          return this.currentTimeZoneOffset;
        },
        set(v) {
          this.currentTimeZoneOffset = v;
        },
      },
    });
  }

  onIntlChange() {
    const locale = this.currentLocale;
    moment.locale(locale);
  }

  parseDate(date, format) {
    return moment(date, format || this.dateFormat);
  }

  parseTime(time, format) {
    return moment(time, format || this.timeFormat);
  }

  parseDateTime(dateTime, format) {
    if (isNumber(dateTime)) {
      return moment(dateTime);
    }

    return moment(dateTime, format || this.dateTimeFormat);
  }

  formatDate(date, format) {
    const m = createMoment(date);

    return m ? m.format(format || this.dateFormat) : '';
  }

  formatTime(time, format) {
    const m = createMoment(time);
    return m ? m.format(format || this.timeFormat) : '';
  }

  formatDateTime(dateTime, format) {
    const m = createMoment(dateTime);
    return m ? m.format(format || this.dateTimeFormat) : '';
  }

  getTime = date => {
    if (!date) {
      return new Date().getTime();
    }

    if (date instanceof Date){
      return date.getTime();
    }

    const m = createMoment(date);
    return m ? parseInt(m.format('x'), 10) : '';
  }

  translate(messageKey) {
    const currentLocaleMessages = intlHelper.getMessages()[this.currentLocale];

    return currentLocaleMessages[messageKey];
  }
}

export default new Globalize();
