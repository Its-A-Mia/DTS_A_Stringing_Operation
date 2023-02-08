import theme from './utils/theme';
import Button from './components/button';
import { ThemeProvider } from '@emotion/react';

const DesignSystem: React.FC = () => (
  <ThemeProvider theme={theme}>
    <Button />
  </ThemeProvider>
);

export { Button };
