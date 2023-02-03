type Color = string;

interface ColorSet {
  primary: Color;
  secondary: Color;
  tertiary: Color;
}

interface Colors {
  orangePeach: ColorSet;
  blastRed: ColorSet;
  coolBlue: ColorSet;
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
  orangePeach: {
    primary: '#E56C42',
    secondary: 'ED835F',
    tertiary: 'F3A083',
  },
  blastRed: {
    primary: '#C83728',
    secondary: 'C25448',
    tertiary: 'DC7F75',
  },
  coolBlue: {
    primary: '0F49A7',
    secondary: '406BAF',
    tertiary: '6986B5',
  },
  success: '#28a745',
  danger: '#C83728',
  warning: '#ffc107',
  info: '#0F49A7',
  light: '#F2F2F2',
  dark: '#333333',
  white: '#ffffff',
  black: '#000000',
};

export const getColor = (color: keyof Colors): string => {
  return `color: ${colors[color]}`;
};

export const getActiveColor = (color: keyof Colors): string => {
  return `color: ${colors[color]}`;
};

export const getBackgroundColor = (color: keyof Colors): string => {
  return `background-color: ${colors[color]}`;
};

export const getHoverBackgroundColor = (color: keyof Colors): string => {
  return `background-color: ${colors[color]}`;
};

export const getBorderColor = (color: keyof Colors): string => {
  return `border-color: ${colors[color]}`;
};
