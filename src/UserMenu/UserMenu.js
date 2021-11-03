import { useSelector, useDispatch } from "react-redux";
import { userName } from "../redux/Selectors/userSelectors";
import { logout } from "../redux/usersOperation";
const UserMenu = () => {
  const name = useSelector(userName);
  const dispatch = useDispatch();
  return (
    <>
      <p>Hi, {name}!</p>
      <button type="button" onClick={() => dispatch(logout())}>
        Logout
      </button>
    </>
  );
};

export default UserMenu;
