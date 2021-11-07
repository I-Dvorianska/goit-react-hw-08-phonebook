// import { NavLink } from "react-router-dom";
import UserMenu from "../UserMenu/UserMenu";
import { isUserLoggedIn } from "../redux/Selectors/userSelectors";
import { useSelector } from "react-redux";
import { Wrapper, LoggedInMenu, ContactsLink } from "./AppBar.styled";
import FirstNavigation from "../FirstNavigation/FirstNavigation";

const AppBar = () => {
  const isLoggedIn = useSelector(isUserLoggedIn);

  return (
    <header>
      <Wrapper>
        {isLoggedIn ? (
          <LoggedInMenu>
            <ContactsLink to="/contacts">Contacts</ContactsLink>
            <UserMenu />
          </LoggedInMenu>
        ) : (
          <FirstNavigation />
        )}
      </Wrapper>
    </header>
  );
};

export default AppBar;
