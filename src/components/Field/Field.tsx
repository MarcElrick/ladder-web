import { ErrorMessage, Field as FormikField } from 'formik';
import { styles } from './Field.styles';
import { useTheme } from '@/hooks/useTheme';
export const Field = ({ name, type, label }: FieldProps) => {
  const { theme, variant } = useTheme();

  return (
    <>
      <label htmlFor={name}>{label}</label>
      <FormikField
        className={styles.input(theme, variant)}
        type={type}
        name={name}
      ></FormikField>
      <ErrorMessage name={name} component="div" />
    </>
  );
};

export interface FieldProps {
  name: string;
  label: string;
  type: 'email' | 'password';
}
