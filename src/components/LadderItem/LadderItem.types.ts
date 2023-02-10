import { Theme, ThemeVariant } from "@/themes/types";
import { IStyle } from "fela";

export interface LadderItemProps {
  email: string;
  position: number;
}

export interface LadderItemStyles {
  email: IStyle;
  position: IStyle;
  container: IStyle;
  button: IStyle;
  buttonEnabled: (theme: Theme) => IStyle;
  buttonDisabled: (theme: Theme) => IStyle;
}

export interface ChallengeButtonProps {
  email: String;
  onClick: () => void;
}
