import UserMenu from "../UserMenu/UserMenu";
import { isUserLoggedIn } from "../../redux/Selectors/userSelectors";
import { useSelector } from "react-redux";
import { Wrapper, LoggedInMenu, ContactsLink } from "./AppBar.styled";
import PublicNavigation from "../PublicNavigation/PublicNavigation";

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
          <PublicNavigation />
        )}
      </Wrapper>
    </header>
  );
};

export default AppBar;
