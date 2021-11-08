import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router";
import { isUserLoggedIn } from "../redux/Selectors/userSelectors";

const PrivateRouter = ({ children, ...routerProps }) => {
  const isLoggedIn = useSelector(isUserLoggedIn);
  return (
    <Route {...routerProps}>
      {isLoggedIn ? children : <Redirect to="/login" />}
    </Route>
  );
};

export default PrivateRouter;
