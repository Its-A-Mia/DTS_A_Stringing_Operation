import {
  getActiveColor,
  getBackgroundColor,
  getBorderColor,
  getColor,
  getHoverBackgroundColor,
} from '../../../design-system/utils/colors';

describe('colors', () => {
  it('can return a string defining color as css', () => {
    expect(getColor('white')).toBe('color: #ffffff');
  });

  it('can return a string defining an active elements color as css', () => {
    expect(getActiveColor('white')).toBe('color: #ffffff');
  });

  it('can return a string defining background-color as css', () => {
    expect(getBackgroundColor('light')).toBe('background-color: #f2f2f2');
  });

  it('can return a string defining background-color if hovering an element as css', () => {
    expect(getHoverBackgroundColor('light')).toBe('background-color: #f2f2f2');
  });

  it('can return a string defining border-color as css', () => {
    expect(getBorderColor('primary')).toBe('border-color: #e56C42');
  });
});
