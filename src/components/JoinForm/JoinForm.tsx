import { Formik, Form, ErrorMessage } from 'formik';
import { validationErrors } from './JoinForm.types';
import { Field } from '@/components/Field';

import { useTheme } from '@/hooks/useTheme';
import { useAuth } from '@/hooks/useAuth';
import { styles } from './JoinForm.styles';

export const JoinForm = () => {
  const { variant, theme } = useTheme();
  const { signup } = useAuth();

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validate={(values) => {
        const errors: validationErrors = {
          email: '',
          password: '',
          confirmPassword: '',
        };

        if (!values.email) {
          errors.email = 'Required';
        }

        if (!values.password) {
          errors.password = 'Required';
        }

        return {};
      }}
      onSubmit={(values, { setSubmitting }) => {
        signup(values.email, values.password).then(() => setSubmitting(false));
      }}
    >
      {({ isSubmitting }) => (
        <Form className={styles.container(theme, variant)}>
          <Field type="email" name="email" label="Email" />
          <ErrorMessage name="email" component="div" />

          <Field type="password" name="password" label={'Password'} />
          <ErrorMessage name="password" component="div" />

          <Field
            type="password"
            name="confirm-password"
            label={'Confirm Password'}
          />
          <ErrorMessage name="confirm-password" component="div" />
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
