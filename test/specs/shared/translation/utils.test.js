import { formattedNumberFunc, formatI18n } from 'shared/translation/utils';

describe('shared/translation utils', () => {
  test('formattedNumberFunc should work fine ', () => {
    expect(formattedNumberFunc({ value: 33333 })).toEqual("$33,333.00");
    expect(formattedNumberFunc({ value: -33333 })).toEqual("-$33,333.00");
    expect(formattedNumberFunc({ value: 12, numberStyle: 'percent' })).toEqual("12.00%");
    expect(formattedNumberFunc({ value: 12, numberStyle: 'decimal' })).toEqual("12.00");
    expect(formattedNumberFunc({ value: -12, numberStyle: 'decimal' })).toEqual("-12.00");
    expect(formattedNumberFunc({ value: -12, numberStyle: 'decimalinreport' })).toEqual("($12.00)");
    expect(formattedNumberFunc({ value: 12, numberStyle: 'decimalinreport' })).toEqual("$12.00");
    const callback = jest.fn();

    formattedNumberFunc({ value: 12, numberStyle: 'decimalinreport', callback });
    expect(callback).toHaveBeenCalled();

  });

  test('formatI18n should work fine ', () => {
    expect(formatI18n()).toEqual("");
    expect(formatI18n('test')).toEqual("test");
    expect(formatI18n('name{id}', { id: 23 })).toEqual("name23");
  });
});
