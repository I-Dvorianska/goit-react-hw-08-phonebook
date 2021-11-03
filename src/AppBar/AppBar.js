import { NavLink } from "react-router-dom";
import UserMenu from "../UserMenu/UserMenu";
import { isUserLoggedIn } from "../redux/Selectors/userSelectors";
import { useSelector } from "react-redux";

const AppBar = () => {
  const isLoggedIn = useSelector(isUserLoggedIn);

  return (
    <header>
      {isLoggedIn ? (
        <>
          <NavLink to="/contacts">Contacts</NavLink>
          <UserMenu />
        </>
      ) : (
        <>
          <NavLink to="/register">Registration</NavLink>
          <NavLink to="/login">Login</NavLink>
        </>
      )}
    </header>
  );
};

export default AppBar;
