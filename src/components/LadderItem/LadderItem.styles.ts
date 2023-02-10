import { theme } from "@/themes/default";
import { Theme } from "@/themes/types";
import { LadderItemStyles } from "./LadderItem.types";

export const styles: LadderItemStyles = {
  email: {
    fontSize: "1em",
    color: "red",
  },

  position: {
    fontSize: "1em",
    color: "green",
  },

  container: {
    maxWidth: "100%",
  },

  button: {
    fontSize: "1em",
    border: "none",
  },

  buttonEnabled: (theme) => ({
    backgroundColor: `${theme.colors.accent.primary}`,
  }),

  buttonDisabled: (theme) => ({
    backgroundColor: `${theme.colors.accessory.error}`,
  }),
};
