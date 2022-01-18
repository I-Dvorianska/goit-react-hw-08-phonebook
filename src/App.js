import { Switch } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import ContactsView from "./ContactsView/ContactsView";
import RegisterForm from "./RegisterForm/RegisterForm";
import LoginForm from "./LoginForm/LoginForm";
import AppBar from "./AppBar/AppBar";
import HomePage from "./HomePage/HomePage";
import PrivateRouter from "./Routers/PrivateRouter";
import PublicRouter from "./Routers/PublicRouter";
import { fetchCurrentUser } from "./redux/Users/usersOperation";
import { isUserFetching } from "./redux/Selectors/userSelectors";

function App() {
  const dispatch = useDispatch();
  const isUserFetched = useSelector(isUserFetching);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      {!isUserFetched && (
        <>
          <AppBar />

          <Switch>
            <PublicRouter path="/" exact>
              <HomePage />
            </PublicRouter>
            <PublicRouter path="/register" restricted>
              <RegisterForm />
            </PublicRouter>
            <PublicRouter path="/login" restricted>
              <LoginForm />
            </PublicRouter>
            <PrivateRouter path="/contacts">
              <ContactsView />
            </PrivateRouter>
          </Switch>
        </>
      )}
    </>
  );
}

export default App;
