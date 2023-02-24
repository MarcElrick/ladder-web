import { Theme, ThemeVariant } from "@/themes/types";
import { IStyle } from "fela";

export interface LadderItemProps {
  email: string;
  position: number;
  canChallenge: boolean;
}

export interface LadderItemStyles {
  text: (them: Theme, variant: ThemeVariant) => string;
  email: string;
  position: string;
  container: (them: Theme, variant: ThemeVariant) => string;
  button: string;
  buttonEnabled: (theme: Theme, variant: ThemeVariant) => string;
  buttonDisabled: (theme: Theme, variant: ThemeVariant) => string;
}

export interface ChallengeButtonProps {
  email: String;
  enabled: boolean;
}
