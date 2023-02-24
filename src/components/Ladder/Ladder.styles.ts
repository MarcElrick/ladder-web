import { MOBILE_WIDTH } from "@/constants";
import { LadderStyles } from "./Ladder.types";
import { css } from "@emotion/css";

export const styles: LadderStyles = {
  container: css`
    max-width: ${MOBILE_WIDTH};
    margin: auto;
  `,
};
