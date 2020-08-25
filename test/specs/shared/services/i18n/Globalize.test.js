import moment from 'moment';
import Globalize from '@/shared/services/i18n/Globalize';

jest.mock('@/shared/utils/intlHelper', () => ({
  getMessages: () => ({
    'en-US': {
      name: 'test',
    },
  }),
}));

describe('Globalize', () => {
  it('Globalize locale gettr settr should work fine', () => {
    expect(Globalize.locale).toEqual('zh-CN');
    const spyOnIntlChange = jest.spyOn(Globalize, 'onIntlChange'); // we pass 'get'
    Globalize.locale = 'en-US';
    expect(Globalize.locale).toEqual('en-US');
    expect(spyOnIntlChange).toHaveBeenCalled();
  });

  it('Globalize dateFormat gettr settr should work fine', () => {
    expect(Globalize.dateFormat).toEqual('YYYY-MM-DD');
    expect(Globalize.timeFormat).toEqual('HH:mm:ss');
    expect(Globalize.dateTimeFormat).toEqual('YYYY-MM-DD HH:mm:ss');

    Globalize.dateFormat='YYYY/MM/DD';
    Globalize.timeFormat='HH-mm-ss';
    expect(Globalize.dateFormat).toEqual('YYYY/MM/DD');
    expect(Globalize.timeFormat).toEqual('HH-mm-ss');

    Globalize.timeZoneOffset='test';
    expect(Globalize.timeZoneOffset).toEqual('test');
  });


  it('Globalize parseDate-time should work fine', () => {
    expect(Globalize.parseDate('1995/09/23').format(Globalize.dateFormat)).toEqual('1995/09/23');

    expect(Globalize.parseDate('23-1995-09', 'DD-YYYY-MM').format(Globalize.dateFormat)).toEqual('1995/09/23');

    expect(Globalize.parseTime('12-23-23').format(Globalize.timeFormat)).toEqual('12-23-23');
    expect(Globalize.parseTime('12-23-23').format('HH:mm:ss')).toEqual('12:23:23');


    expect(Globalize.parseDateTime(1598343036538).format('YYYY-MM-DD HH:mm:ss')).toEqual('2020-08-25 16:10:36');
    expect(Globalize.parseDateTime('1995/09/23 12-23-23').format('YYYY-MM-DD HH:mm:ss')).toEqual('1995-09-23 12:23:23');
  });

  it('Globalize formatDate should work fine', () => {
    const dateMoment = moment(1598343036538);
    expect(Globalize.formatDate(dateMoment)).toEqual('2020/08/25');
    expect(Globalize.formatDate(dateMoment, 'YYYY-MM-DD')).toEqual('2020-08-25');
    expect(Globalize.formatDate('')).toEqual('');

    expect(Globalize.formatTime(dateMoment)).toEqual('16-10-36');
    expect(Globalize.formatTime(dateMoment, 'HH:mm:ss')).toEqual('16:10:36');
    expect(Globalize.formatTime('')).toEqual('');

    expect(Globalize.formatDateTime('')).toEqual('');
    expect(Globalize.formatDateTime(1598343036538)).toEqual('2020/08/25 16-10-36');
    expect(Globalize.formatDateTime(1598343036538, 'YYYY-MM-DD HH:mm:ss')).toEqual('2020-08-25 16:10:36');
  });


  it('Globalize getTime should work fine', () => {
    const dateMoment = moment(1598343036538);
    expect(Globalize.getTime()).toEqual(new Date().getTime());

    expect(Globalize.getTime(dateMoment)).toEqual(1598343036538);
  });

  it('Globalize translate should work fine', () => {
    // const dateMoment = moment(1598343036538);
    Globalize.translate();
    expect(Globalize.translate('name')).toEqual('test');
  });
});
