import { Switch } from "react-router";
import ContactsView from "./ContactsView/ContactsView";
import RegisterForm from "./RegisterForm/RegisterForm";
import LoginForm from "./LoginForm/LoginForm";
import AppBar from "./AppBar/AppBar";
import PrivateRouter from "./Routers/PrivateRouter";
import PublicRouter from "./Routers/PublicRouter";

function App() {
  return (
    <>
      <AppBar />
      <Switch>
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
  );
}

export default App;
