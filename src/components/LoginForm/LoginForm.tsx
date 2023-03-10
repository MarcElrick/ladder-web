import { Formik, Form } from 'formik';
import { Field } from '@/components/Field';
import { LoginFormProps, validationErrors } from './LoginForm.types';
import { styles } from './LoginForm.styles';
import { useTheme } from '@/hooks/useTheme';
import { useAuth } from '@/hooks/useAuth';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export const LoginForm = ({}: LoginFormProps) => {
  const { variant, theme } = useTheme();
  const { login, isAuthenticated } = useAuth();
  const { push } = useRouter();
  useEffect(() => {
    isAuthenticated && push('/');
  }, [isAuthenticated]);

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validate={(values) => {
        const errors: validationErrors = { email: '', password: '' };

        if (!values.email) {
          errors.email = 'Required';
        }

        if (!values.password) {
          errors.password = 'Required';
        }

        return {};
      }}
      onSubmit={(values, { setSubmitting }) => {
        login(values.email, values.password);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form className={styles.container(theme, variant)}>
          <Field name="email" label="Email" type="email" />
          <Field name="password" label="Password" type="password" />

          <button
            className={styles.button(theme, variant)}
            type="submit"
            disabled={isSubmitting}
          >
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};
