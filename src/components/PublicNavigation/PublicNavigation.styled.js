import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const List = styled.ul`
  display: flex;
  justify-content: center;
  margin: 0px;
  padding: 4px 0px 5px;
  list-style: none;
`;

export const ListItem = styled.li`
  :first-of-type {
    margin-right: 30px;
  }
`;

export const LoginLinks = styled(NavLink)({
  color: "#fff",
  textDecoration: "none",
  fontWeight: "600",
  fontSize: "20px",

  '&[aria-current="page"]': {
    textDecoration: "underline",
  },
});
