import { LadderItemStyles } from "./LadderItem.types";
import { css } from "@emotion/css";

export const styles: LadderItemStyles = {
  email: css`
    font-size: 1em;
    flex: 1;
  `,

  position: css`
    opacity: 0.5;
    font-size: 1em;
    padding-right: 25px;
  `,

  text: (theme, variant) => css`
    display: flex;
    justify-content: center;
    flex-direction: column;
    color: ${theme.colors[variant].text};
  `,

  container: (theme, variant) => css`
    margin-inline: 50px;
    display: flex;
    flex-direction: row;
    background-color: ${theme.colors[variant].foreground};
    padding: 10px;
    margin: 10px;
    border-radius: 1em;
  `,

  button: css`
    font-size: 0.8em;
    border: none;
    flex: 1;
    vertical-align: text-bottom;
    maxwidth: fit-content;
    border-radius: 1em;
  `,

  buttonEnabled: (theme, variant) => css`
    color: ${theme.colors[variant].text};
    background-color: ${theme.colors.accent.primary};
  `,

  buttonDisabled: (theme, variant) => css`
    color: ${theme.colors[variant].text};
    background-color: ${theme.colors.accessory.info};
  `,
};
