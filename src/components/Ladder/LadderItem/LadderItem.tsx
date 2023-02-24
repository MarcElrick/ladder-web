import React from "react";

import { LadderItemProps } from "./LadderItem.types";
import { styles } from "./LadderItem.styles";
import { ChallengeButton } from "./components/ChallengeButton";
import { useTheme } from "@/hooks/useTheme";
import { cx } from "@emotion/css";

export const LadderItem = ({
  email,
  position,
  canChallenge,
}: LadderItemProps) => {
  const { theme, variant } = useTheme();

  return (
    <div className={styles.container(theme, variant)}>
      <span className={cx(styles.position, styles.text(theme, variant))}>
        {position}
      </span>
      <span className={cx(styles.email, styles.text(theme, variant))}>
        {email}
      </span>
      <ChallengeButton email={email} enabled={canChallenge} />
    </div>
  );
};
