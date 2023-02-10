import { Theme, ThemeVariant } from "@/themes/types";
import { IStyle } from "fela";

interface StyleProps {
  body: (variant: ThemeVariant, theme: Theme) => any;
}

export const styles: StyleProps = {
  body: (variant, theme) => ({
    backgroundColor: theme.colors[variant]?.background,
  }),
};
