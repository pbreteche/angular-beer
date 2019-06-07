import { MyCurrencyPipe } from './my-currency.pipe';

describe('MyCurrencyPipe', () => {
  it('create an instance', () => {
    const pipe = new MyCurrencyPipe('en');
    expect(pipe).toBeTruthy();
  });

  it('transform 123.45', () => {
    const pipe = new MyCurrencyPipe('en');
    expect(pipe.transform(123.45)).toBe('123,45\u00A0€');
  });
});
