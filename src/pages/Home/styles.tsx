import styled from "@emotion/styled";

export const ButtonCover = styled.div({
  display: "flex",

  "@media (min-width: 1440px)": {
    padding: "0 85px",
  },

  "@media (max-width: 767px)": {
    justifyContent: "center",
  },
});
