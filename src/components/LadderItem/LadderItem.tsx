import React from "react";
import { useFela } from "react-fela";

import { LadderItemProps } from "./LadderItem.types";
import { styles } from "./LadderItem.styles";
import { ChallengeButton } from "./components/ChallengeButton";

export const LadderItem = ({ email, position }: LadderItemProps) => {
  const { css } = useFela();
  return (
    <div className={css(styles.container)}>
      <span className={css(styles.email)}>{email}</span>
      <span className={css(styles.position)}>{position}</span>
      <ChallengeButton
        email={"marclksdjfklsd"}
        onClick={function (): void {
          console.log("clicked");
        }}
      />
    </div>
  );
};
