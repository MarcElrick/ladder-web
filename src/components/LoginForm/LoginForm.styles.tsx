import { MOBILE_WIDTH } from "@/constants";
import { LoginFormStyles } from "@/components/LoginForm/LoginForm.types";
import { css } from "@emotion/css";

export const styles: LoginFormStyles = {
  button: (theme) => css`
    background-color: ${theme.colors.accent.primary};
    color: white;
    border-radius: 1em;
    margin-inline: 20px;
  `,

  container: (theme, variant) => css`
    background-color: ${theme.colors[variant]?.foreground};
    max-width: ${MOBILE_WIDTH};
    margin: auto;
    display: flex;
    flex-direction: column;
  `,

  input: (theme, variant) => css`
    background-color: ${theme.colors[variant].background};
    color: ${theme.colors[variant].text};
    margin: 20px;
  `,
};
