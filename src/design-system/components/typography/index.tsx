import { css } from '@emotion/react';
import theme from '../../utils/theme';

interface TypographyProps {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'p';
  text?: string;
  color?: string;
  fontSize?: string;
  fontWeight?: string;
}

export const Typography: React.FC = ({ variant = 'p', color = 'black', ...props }: TypographyProps) => {
  const typographyBase = css({
    margin: '0',
  });

  // ================
  //       h1
  // ================

  const h1Styles = css({
    h1: {
      color: color,
      fontSize: `${props.fontSize ? props.fontSize : theme.fontSizes.heading.xxxl}`,
      fontWeight: `${props.fontWeight ? props.fontWeight : '700'}`,
    },
  });

  const h1 = <h1 css={[typographyBase, h1Styles]}>{props.text}</h1>;

  // ================
  //       h2
  // ================

  const h2Styles = css({
    h2: {
      color: color,
      fontSize: `${props.fontSize ? props.fontSize : theme.fontSizes.heading.xxl}`,
      fontWeight: `${props.fontWeight ? props.fontWeight : '700'}`,
    },
  });

  const h2 = <h2 css={h2Styles}>{props.text}</h2>;

  // ================
  //       h3
  // ================

  const h3Styles = css({
    h3: {
      color: color,
      fontSize: `${props.fontSize ? props.fontSize : theme.fontSizes.heading.xl}`,
      fontWeight: `${props.fontWeight ? props.fontWeight : '700'}`,
    },
  });

  const h3 = <h3 css={h3Styles}>{props.text}</h3>;

  // ================
  //       h4
  // ================

  const h4Styles = css({
    h4: {
      color: color,
      fontSize: `${props.fontSize ? props.fontSize : theme.fontSizes.heading.lg}`,
      fontWeight: `${props.fontWeight ? props.fontWeight : '700'}`,
    },
  });

  const h4 = <h4 css={h4Styles}>{props.text}</h4>;

  // ================
  //       p
  // ================

  const pStyles = css({
    h4: {
      color: color,
      fontSize: `${props.fontSize ? props.fontSize : theme.fontSizes.text.md}`,
      fontWeight: `${props.fontWeight ? props.fontWeight : '500'}`,
    },
  });

  const p = <p css={pStyles}>{props.text}</p>;

  return variant === 'h1' ? h1 : variant === 'h2' ? h2 : variant === 'h3' ? h3 : variant === 'h4' ? h4 : p;
};
