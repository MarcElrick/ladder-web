import { LadderProps } from "./Ladder.types";
import { LadderItem } from "./LadderItem";
import { styles } from "./Ladder.styles";

export const Ladder = ({ players }: LadderProps) => {
  return (
    <div className={styles.container}>
      {players.map((player) => (
        <LadderItem {...player} />
      ))}
    </div>
  );
};
