import styled from "@emotion/styled";
import { Color } from "@styles/index";

export const Title = styled.h2({
  color: Color.grey,
  "@media (max-width: 1439px)": {
    fontSize: "32px",
  },

  "@media (max-width: 767px)": {
    fontSize: "24px",
    lineHeight: "28px",
  },
});

export const Header = styled.div(
  {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    "@media (min-width: 1440px)": {
      marginBottom: "56px",
    },
    "@media (max-width: 1439px)": {
      marginBottom: "40px",
    },
    "@media (max-width: 767px)": {
      marginBottom: "32px",
    },
  },
  ({ disable, expend }: { disable: boolean; expend: boolean }) => ({
    opacity: disable ? 0.5 : 1,

    "& svg": {
      rotate: expend ? "180deg" : "0",
    },
  })
);

export const Content = styled.div({
  display: "flex",

  "@media (min-width: 1440px)": {
    columnGap: "23px",
  },

  "@media (max-width: 1439px)": {
    justifyContent: "space-between",
    columnGap: "10px",
  },

  "@media (max-width: 767px)": {
    flexDirection: "column",
    rowGap: "16px",
  },
});
