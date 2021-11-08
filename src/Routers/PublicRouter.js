import { Route, Redirect } from "react-router";
import { useSelector } from "react-redux";
import { isUserLoggedIn } from "../redux/Selectors/userSelectors";

const PublicRouter = ({ children, restricted = false, ...routerProps }) => {
  const isLoggedIn = useSelector(isUserLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;

  return (
    <Route {...routerProps}>
      {shouldRedirect ? <Redirect to="/contacts" /> : children}
    </Route>
  );
};

export default PublicRouter;
