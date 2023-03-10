import { Theme, ThemeVariant } from '@/themes/types';
import { css } from '@emotion/css';

export const styles: FieldStyles = {
  input: (theme, variant) => css`
    background-color: ${theme.colors[variant].background};
    color: ${theme.colors[variant].text};
    margin: 20px;
  `,
};

export interface FieldStyles {
  input: (theme: Theme, variant: ThemeVariant) => string;
}
