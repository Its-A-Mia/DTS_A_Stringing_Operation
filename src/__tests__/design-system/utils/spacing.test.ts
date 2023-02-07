import {
  getPadding,
  getPaddingTop,
  getPaddingRight,
  getPaddingBottom,
  getPaddingLeft,
  getMargin,
  getMarginTop,
  getMarginRight,
  getMarginBottom,
  getMarginLeft,
} from '../../../design-system/utils/spacing';

//sizes are described as followed:
// xs: 5px
// sm: 10px
// md: 20px
// lg: 30px
// xl: 40px

describe('spacing', () => {
  it('can return a string to define padding', () => {
    expect(getPadding('xs')).toBe('padding: 5px');
  });

  it('can return a string to define padding-top', () => {
    expect(getPaddingTop('xs')).toBe('padding-top: 5px');
  });

  it('can return a string to define padding-right', () => {
    expect(getPaddingRight('xs')).toBe('padding-right: 5px');
  });

  it('can return a string to define padding-bottom', () => {
    expect(getPaddingBottom('xs')).toBe('padding-bottom: 5px');
  });

  it('can return a string to define padding-left', () => {
    expect(getPaddingLeft('xs')).toBe('padding-left: 5px');
  });

  it('can return a string to define margin', () => {
    expect(getMargin('xs')).toBe('margin: 5px');
  });

  it('can return a string to define margin-top', () => {
    expect(getMarginTop('xs')).toBe('margin-top: 5px');
  });

  it('can return a string to define margin-right', () => {
    expect(getMarginRight('xs')).toBe('margin-right: 5px');
  });

  it('can return a string to define margin-bottom', () => {
    expect(getMarginBottom('xs')).toBe('margin-bottom: 5px');
  });

  it('can return a string to define margin-left', () => {
    expect(getMarginLeft('xs')).toBe('margin-left: 5px');
  });
});
