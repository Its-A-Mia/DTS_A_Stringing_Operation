import { css } from '@emotion/react';
import theme from '../../utils/theme';

interface TypographyProps {
  children?: React.ReactNode;
  backgroundColor?: 'primary' | 'secondary' | 'tertiary';
  borderRadius?: string;
  width?: string | number;
}

export const Typography: React.FC = ({ children, backgroundColor, borderRadius = '10px' }: TypographyProps) => {
  const setBackgroundColor = (): string => {
    return backgroundColor === 'primary'
      ? theme.colors.primary
      : backgroundColor === 'secondary'
      ? theme.colors.secondary
      : theme.colors.tertiary;
  };

  const cardStyles = css({
    color: theme.colors.white,
    padding: `${theme.spacing.md}`,
    backgroundColor: `${setBackgroundColor()}`,
    borderRadius: borderRadius,
  });

  return <div css={cardStyles}>{children}</div>;
};
