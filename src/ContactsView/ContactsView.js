import {
  PrimaryTitle,
  SecondaryTitle,
  ContactsWrapper,
} from "./ContactsView.styled";
import Filter from "../Filter/Filter";
import ContactsList from "../ContactList/ContactList";
import ContactForm from "../ContactForm/ContactForm";

export const ContactsView = () => {
  return (
    <ContactsWrapper>
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
