import { useSelector, useDispatch } from "react-redux";
import { userName } from "../redux/Selectors/userSelectors";
import { logout } from "../redux/Users/usersOperation";
import { Wrapper, Button, Name } from "./UserMenu.styled";

const UserMenu = () => {
  const name = useSelector(userName);
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <Name>Hi, {name}!</Name>
      <Button type="button" onClick={() => dispatch(logout())}>
        Logout
      </Button>
    </Wrapper>
  );
};

export default UserMenu;
