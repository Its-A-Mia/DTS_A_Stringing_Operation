interface Spacing {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
}

export const spacing: Spacing = {
  xs: '5px',
  sm: '10px',
  md: '20px',
  lg: '30px',
  xl: '40px',
};

export const getPadding = (size: keyof Spacing): string => `padding: ${spacing[size]}`;

export const getPaddingLeft = (size: keyof Spacing): string => `padding-left: ${spacing[size]}`;

export const getPaddingTop = (size: keyof Spacing): string => `padding-top: ${spacing[size]}`;

export const getPaddingRight = (size: keyof Spacing): string => `padding-right: ${spacing[size]}`;

export const getPaddingBottom = (size: keyof Spacing): string => `padding-bottom: ${spacing[size]}`;

export const getMargin = (size: keyof Spacing): string => `margin: ${spacing[size]}`;

export const getMarginTop = (size: keyof Spacing): string => `margin-top: ${spacing[size]}`;

export const getMarginRight = (size: keyof Spacing): string => `margin-right: ${spacing[size]}`;

export const getMarginLeft = (size: keyof Spacing): string => `margin-left: ${spacing[size]}`;

export const getMarginBottom = (size: keyof Spacing): string => `margin-bottom: ${spacing[size]}`;
