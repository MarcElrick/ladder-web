import { Formik, Form, Field, ErrorMessage } from "formik";
import {
  LoginFormProps,
  validationErrors,
} from "@/components/LoginForm/LoginForm.types";
import { styles } from "./LoginForm.styles";
import { useTheme } from "@/hooks/useTheme";
import { useAuth } from "@/hooks/useAuth";

export const LoginForm = ({}: LoginFormProps) => {
  const { variant, theme } = useTheme();
  const { login } = useAuth();

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validate={(values) => {
        const errors: validationErrors = { email: "", password: "" };

        if (!values.email) {
          errors.email = "Required";
        }

        if (!values.password) {
          errors.password = "Required";
        }

        return {};
      }}
      onSubmit={(values, { setSubmitting }) => {
        login(values.email, values.password).then(() => setSubmitting(false));
      }}
    >
      {({ isSubmitting }) => (
        <Form className={styles.container(theme, variant)}>
          <Field
            type="email"
            name="email"
            className={styles.input(theme, variant)}
          />
          <ErrorMessage name="email" component="div" />

          <Field
            type="password"
            name="password"
            className={styles.input(theme, variant)}
          />
          <ErrorMessage name="password" component="div" />
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
