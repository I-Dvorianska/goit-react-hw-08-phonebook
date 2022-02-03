import { BackgroundIcons } from "../BackgroundsIcons/BackgroundsIcons";
import {
  PrimaryTitle,
  SecondaryTitle,
  ContactsWrapper,
} from "./ContactsView.styled";
import Filter from "../Filter/Filter";
import ContactForm from "../ContactForm/ContactForm";
import ContactsList from "../ContactList/ContactList";

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
