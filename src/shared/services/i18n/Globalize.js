
import moment from 'moment';
import isNumber from 'lodash/isNumber';

const createMoment = (value) => {
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
          return 'zh-CN';
        }
      }
    });

    Object.defineProperties(this, {
      dateFormat: {
        get() {
          return this.currentDateFormat;
        },
        set(v) {
          this.currentDateFormat = v;
        }
      }
    });

    Object.defineProperties(this, {
      timeFormat: {
        get() {
          return this.currentTimeFormat;
        },
        set(v) {
          this.currentTimeFormat = v;
        }
      }
    });

    Object.defineProperties(this, {
      dateTimeFormat: {
        get() {
          return `${this.currentDateFormat} ${this.currentTimeFormat}`;
        }
      }
    });

    Object.defineProperties(this, {
      timeZoneOffset: {
        get() {
          return this.currentTimeZoneOffset;
        },
        set(v) {
          this.currentTimeZoneOffset = v;
        }
      }
    });
  }

  onIntlChange() {
    const locale = (this.currentIntl && this.currentIntl.locale) || 'en';
    moment.locale(locale);
  }

  parseDate(date, format) {
    return moment(date, format || this.dateFormat);
  }

  parseTime(time, format) {
    return moment(time, format || this.timeFormat);
  }

  parseDateTime(dateTime, format) {
    if (isNumber(dateTime)){
      return moment(dateTime)
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

  isSameDay(start, end) {
    const d1 = this.parseDate(start);
    const d2 = this.parseDate(end);
    return d1.isSame(d2, 'day');
  }
}

export default new Globalize();
