import { BackgroundIcons } from "../../components/BackgroundsIcons/BackgroundsIcons";
import {
  PrimaryTitle,
  SecondaryTitle,
  ContactsWrapper,
} from "./ContactsPage.styled";
import Filter from "../../components/Filter/Filter";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactsList from "../../components/ContactList/ContactList";

export const ContactsView = () => {
  return (
    <ContactsWrapper>
      <BackgroundIcons />

      <div>
        <PrimaryTitle>Phonebook</PrimaryTitle>
        <ContactForm />
      </div>
      <div>
        <SecondaryTitle>Contacts</SecondaryTitle>
        <ContactsList />
      </div>
      <div>
        <Filter />
      </div>
    </ContactsWrapper>
  );
};
export default ContactsView;
