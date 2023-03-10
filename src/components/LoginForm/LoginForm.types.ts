import { Theme, ThemeVariant } from '@/themes/types';

export interface LoginFormProps {}

export interface LoginFormStyles {
  button: (theme: Theme, themeVariant: ThemeVariant) => string;
  container: (theme: Theme, themeVariant: ThemeVariant) => string;
  input: (theme: Theme, themeVariant: ThemeVariant) => string;
}

export interface validationErrors {
  email: '' | 'Required';
  password: '' | 'Required';
}
