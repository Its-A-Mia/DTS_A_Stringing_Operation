interface Colors {
  primary: string;
  secondary: string;
  tertiary: string;
  success: string;
  danger: string;
  warning: string;
  info: string;
  light: string;
  dark: string;
  white: string;
  black: string;
}

export const colors: Colors = {
  primary: '#e56C42',
  secondary: '#c83728',
  tertiary: '#CDD7E8',
  success: '#146217',
  danger: '#c83728',
  warning: '#ffc107',
  info: '#0f49A7',
  light: '#f2f2f2',
  dark: '#333333',
  white: '#ffffff',
  black: '#000000',
};

export const getColor = (color: keyof typeof colors): string => `color: ${colors[color]}`;

export const getActiveColor = (color: keyof typeof colors): string => `color: ${colors[color]}`;

export const getBackgroundColor = (color: keyof typeof colors): string => `background-color: ${colors[color]}`;

export const getHoverBackgroundColor = (color: keyof typeof colors): string => `background-color: ${colors[color]}`;

export const getBorderColor = (color: keyof typeof colors): string => `border-color: ${colors[color]}`;
