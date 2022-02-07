import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.div`
  padding: 12px 16px;
  background-color: #1b5e64;
`;

export const LoggedInMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ContactsLink = styled(NavLink)({
  color: "#fff",
  textDecoration: "none",
  fontWeight: "600",
  fontSize: "20px",
});
