import { useTheme } from "@/hooks/useTheme";
import { useState } from "react";
import { styles } from "../LadderItem.styles";
import { ChallengeButtonProps } from "../LadderItem.types";
import { cx } from "@emotion/css";

export const ChallengeButton = ({
  email,
  enabled: initial,
}: ChallengeButtonProps) => {
  const [enabled, setEnabled] = useState<boolean>(initial);
  const { theme, variant } = useTheme();

  return (
    <button
      className={cx(
        styles.button,
        enabled
          ? styles.buttonEnabled(theme, variant)
          : styles.buttonDisabled(theme, variant)
      )}
      disabled={!enabled}
      onClick={() => console.log(email)}
    >
      {enabled ? "Challenge" : "Challenged"}
    </button>
  );
};
