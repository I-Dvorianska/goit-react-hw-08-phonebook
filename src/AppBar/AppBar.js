import { NavLink } from "react-router-dom";
import UserMenu from "../UserMenu/UserMenu";

const AppBar = () => {
  return (
    <header>
      <NavLink to="/contacts">Contacts</NavLink>
      <NavLink to="/register">Registration</NavLink>
      <NavLink to="/login">Login</NavLink>
      <UserMenu />
    </header>
  );
};

export default AppBar;
