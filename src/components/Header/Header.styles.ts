import { HeaderStyles } from '@/components/Header/Header.types';
import { css } from '@emotion/css';

export const styles: HeaderStyles = {
  container: css`
    display: flex;
    width: 100%;
    justify-content: space-between;
  `,
  nav: css``,
  button: (theme) => css`
    background-color: ${theme.colors.accent.primary};
    &:hover {
      background-color: ${theme.colors.accent.secondary};
    }
    border-style: none;
    margin: 10px;
  `,
};
