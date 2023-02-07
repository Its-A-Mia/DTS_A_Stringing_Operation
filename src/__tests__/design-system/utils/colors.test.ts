import {
  getActiveColor,
  getBackgroundColor,
  getBorderColor,
  getColor,
  getHoverBackgroundColor,
} from '../../../design-system/utils/colors';

// colors are as followed:
//   primary: '#e56C42'
//   secondary: '#c83728'
//   tertiary: '#CDD7E8'
//   success: '#146217'
//   danger: '#c83728'
//   warning: '#ffc107'
//   info: '#0f49A7'
//   light: '#f2f2f2'
//   dark: '#333333'
//   white: '#ffffff'
//   black: '#000000'

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
