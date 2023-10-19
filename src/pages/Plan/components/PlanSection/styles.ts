import styled from "@emotion/styled";
import { Color } from "@styles/index";

export const PlanCover = styled.div({
  backgroundColor: Color.darkGrey,
  borderRadius: "10px",

  "@media (min-width: 1440px)": {
    padding: "91px 85px 107px",
  },

  "@media (max-width: 1439px)": {
    padding: "97px 39px 70px",
  },

  "@media (max-width: 767px)": {
    padding: "80px 24px",
  },
});
