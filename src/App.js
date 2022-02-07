import { Switch } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import ContactsPage from "./pages/ContactsPage/ContactsPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import AppBar from "./components/AppBar/AppBar";
import HomePage from "./pages/HomePage/HomePage";
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
              <RegisterPage />
            </PublicRouter>
            <PublicRouter path="/login" restricted>
              <LoginPage />
            </PublicRouter>
            <PrivateRouter path="/contacts">
              <ContactsPage />
            </PrivateRouter>
          </Switch>
        </>
      )}
    </>
  );
}

export default App;
