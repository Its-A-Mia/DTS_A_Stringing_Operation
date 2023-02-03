type Color = string;

interface Colors {
  orangePeachPrimary: Color;
  orangePeachSecondary: Color;
  orangePeachTertiary: Color;
  blastRedPrimary: Color;
  blastRedSecondary: Color;
  blastRedTertiary: Color;
  coolBluePrimary: Color;
  coolBlueSecondary: Color;
  coolBlueTertiary: Color;
  success: Color;
  danger: Color;
  warning: Color;
  info: Color;
  light: Color;
  dark: Color;
  white: Color;
  black: Color;
}

export const colors: Colors = {
  orangePeachPrimary: '#e56c42',
  orangePeachSecondary: '#ed835f',
  orangePeachTertiary: '#f3a083',
  blastRedPrimary: '#c83728',
  blastRedSecondary: '#c25448',
  blastRedTertiary: '#dc7F75',
  coolBluePrimary: '#0f49a7',
  coolBlueSecondary: '#406baf',
  coolBlueTertiary: '#6986b5',
  success: '#28a745',
  danger: '#c83728',
  warning: '#ffc107',
  info: '#0f49A7',
  light: '#f2f2f2',
  dark: '#333333',
  white: '#ffffff',
  black: '#000000',
};

export function getColor(color: keyof typeof colors): string {
  return `color: ${colors[color]}`;
}

export const getActiveColor = (color: keyof typeof colors): string => {
  return `color: ${colors[color]}`;
};

export const getBackgroundColor = (color: keyof typeof colors): string => {
  return `background-color: ${colors[color]}`;
};

export const getHoverBackgroundColor = (color: keyof typeof colors): string => {
  return `background-color: ${colors[color]}`;
};

export const getBorderColor = (color: keyof typeof colors): string => {
  return `border-color: ${colors[color]}`;
};
