import { Theme, ThemeVariant } from '@/themes/types';

export interface HeaderStyles {
  container: string;
  nav: string;
  button: (theme: Theme) => string;
}
