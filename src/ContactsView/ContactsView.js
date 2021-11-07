import {
  PrimaryTitle,
  SecondaryTitle,
  ContactsWrapper,
  FormWrapper,
} from "./ContactsView.styled";
import Filter from "../Filter/Filter";
import ContactList from "../ContactList/ContactList";
import ContactForm from "../ContactForm/ContactForm";

export const ContactsView = () => {
  return (
    <ContactsWrapper>
      <FormWrapper>
        <PrimaryTitle>Phonebook</PrimaryTitle>
        <ContactForm />
      </FormWrapper>
      <div>
        <SecondaryTitle>Contacts</SecondaryTitle>
        <Filter />
        <ContactList />
      </div>
    </ContactsWrapper>
  );
};
export default ContactsView;
