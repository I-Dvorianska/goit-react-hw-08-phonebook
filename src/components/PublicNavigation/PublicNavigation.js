import { LoginLinks, List, ListItem } from "./PublicNavigation.styled";

const FirstNavigation = () => {
  return (
    <List>
      <ListItem>
        <LoginLinks to="/register">Registration</LoginLinks>
      </ListItem>
      <ListItem>
        <LoginLinks to="/login">Login</LoginLinks>
      </ListItem>
    </List>
  );
};

export default FirstNavigation;
