interface Theme {
  colors: {
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
  };
  spacing: {
    xxs: string;
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
  };
  fontSizes: {
    text: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      lead: string;
    };
    heading: {
      1: string;
      2: string;
      3: string;
      4: string;
      5: string;
      sm: string;
      xs: string;
    };
  };
}

const theme: Theme = {
  colors: {
    primary: '#e56C42',
    secondary: '#c83728',
    tertiary: '#e5bc42',
    success: '#146217',
    danger: '#c83728',
    warning: '#e5bc42',
    info: '#42bce5',
    light: '#f2f2f2',
    dark: '#333333',
    white: '#ffffff',
    black: '#000000',
  },
  spacing: {
    xxs: '2px',
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '32px',
    xl: '64px',
    xxl: '128px',
  },
  fontSizes: {
    text: {
      xs: '0.50rem',
      sm: '0.75rem',
      md: '1rem',
      lg: '1.25rem',
      lead: '1.25em',
    },
    heading: {
      1: '3.75rem',
      2: '3rem',
      3: '2rem',
      4: '1.5rem',
      5: '1.125rem',
      sm: '1rem',
      xs: '0.75rem',
    },
  },
};

export default theme;
