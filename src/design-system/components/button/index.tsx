import { css } from '@emotion/react';
import theme from '../../utils/theme';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  text?: string;
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  backgroundColor?: string;
  type?: 'button' | 'submit';
  ariaLabel?: string;
}

export const Button: React.FC = ({
  variant = 'primary',
  type = 'button',
  size = 'md',
  text,
  onClick,
  ariaLabel,
}: ButtonProps) => {
  const buttonPadding = {
    sm: `${theme.spacing.xs} ${theme.spacing.md}`,
    md: `${theme.spacing.sm} ${theme.spacing.md}`,
    lg: `${theme.spacing.md} ${theme.spacing.lg}`,
  };

  const primaryStyles = css({
    fontFamily: '"Ubuntu", Verdana, Trebuchet MS',
    fontWeight: '600',
    fontSize: `${size === 'md' || size === 'sm' ? theme.fontSizes.text.sm : theme.fontSizes.text.md}`,
    backgroundColor: theme.colors.primary,
    color: theme.colors.white,
    padding: `${size === 'md' ? buttonPadding.md : size === 'sm' ? buttonPadding.sm : buttonPadding.lg}`,
    borderRadius: 40,
    cursor: 'pointer',
    border: 'none',
    transitionProperty: 'background-color, color',
    transitionDuration: '200ms',
    '&:hover': {
      backgroundColor: theme.colors.tertiary,
      color: theme.colors.dark,
    },
  });

  const secondaryStyles = css({
    fontFamily: 'Ubuntu, Verdana, Trebuchet MS',
    fontWeight: '600',
    fontSize: `${size === 'md' || size === 'sm' ? theme.fontSizes.text.sm : theme.fontSizes.text.md}`,
    backgroundColor: theme.colors.secondary,
    color: theme.colors.white,
    padding: `${size === 'md' ? buttonPadding.md : size === 'sm' ? buttonPadding.sm : buttonPadding.lg}`,
    borderRadius: 40,
    cursor: 'pointer',
    border: 'none',
    transitionProperty: 'background-color, color',
    transitionDuration: '200ms',
    '&:hover': {
      backgroundColor: theme.colors.tertiary,
      color: theme.colors.dark,
    },
  });

  return (
    <button
      css={variant === 'primary' ? primaryStyles : secondaryStyles}
      type={type}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {text}
    </button>
  );
};
