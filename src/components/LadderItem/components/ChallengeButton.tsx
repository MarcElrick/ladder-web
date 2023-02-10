import { useTheme } from "@/hooks/useTheme";
import { useState } from "react";
import { useFela } from "react-fela";
import { styles } from "../LadderItem.styles";
import { ChallengeButtonProps } from "../LadderItem.types";

export const ChallengeButton = ({ email, onClick }: ChallengeButtonProps) => {
  const [disabled, setDisabled] = useState<boolean>(false);
  const { css } = useFela();
  const { theme } = useTheme();

  return (
    <button
      className={css(
        styles.button,
        disabled ? styles.buttonDisabled(theme) : styles.buttonEnabled(theme)
      )}
      disabled={disabled}
      onClick={onClick}
    >
      Challenge
    </button>
  );
};
