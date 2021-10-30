import { Route, Switch } from "react-router";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";
import RegisterForm from "./RegisterForm/RegisterForm";
import { PrimaryTitle, SecondaryTitle } from "./App.styled";
import LoginForm from "./LoginForm/LoginForm";
import AppBar from "./AppBar/AppBar";

function App() {
  return (
    <>
      <AppBar />
      <Switch>
        <Route path="/register">
          <RegisterForm />
        </Route>
        <Route path="/login">
          <LoginForm />
        </Route>
        <Route path="/contacts">
          <PrimaryTitle>Phonebook</PrimaryTitle>
          <ContactForm />
          <SecondaryTitle>Contacts</SecondaryTitle>
          <Filter />
          <ContactList />
        </Route>
      </Switch>
    </>
  );
}

export default App;
