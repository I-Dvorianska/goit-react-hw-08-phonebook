import { useSelector, useDispatch } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import { addNewContact } from "../redux/Contacts/contactsOperation";
import { contacts } from "../redux/Selectors/contactFormSelectors";
import { StyledForm, Label, Input, Button, Error } from "./ContactForm.styled";
import { Formik, ErrorMessage } from "formik";

const validate = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = "Required!";
  } else if (values.name.length > 15) {
    errors.name = "Must be 15 characters or less";
  }

  if (!values.number) {
    errors.number = "Required!";
  } else if (
    !/(?:(?:\+?0\s*(?:[.-]\s*)?)?(?:(\s*([1-9]|[01-9]|[1-9][02-8]1|[2-9][02-8][02-9])\s*)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})$/i.test(
      values.number
    )
  ) {
    errors.number = "Invalid phone number";
  }

  return errors;
};

function ContactForm() {
  const dispatch = useDispatch();
  const notify = (name) => toast(`${name} is already in contacts`);
  const stateContacts = useSelector(contacts);

  return (
    <>
      <Formik
        initialValues={{
          name: "",
          number: "",
        }}
        validate={validate}
        onSubmit={({ name, number }, formikBag) => {
          const contactToAdd = {
            name,
            number,
          };
          stateContacts.some((contact) => contact.name === contactToAdd.name)
            ? notify(contactToAdd.name)
            : dispatch(addNewContact(contactToAdd));
          formikBag.resetForm();
        }}
      >
        <StyledForm>
          <Label htmlFor="name">Name</Label>
          <Input name="name" type="text" autoComplete="off" />
          <ErrorMessage name="name">
            {(msg) => <Error>{msg}</Error>}
          </ErrorMessage>

          <Label htmlFor="number">Number</Label>
          <Input name="number" type="text" autoComplete="off" />
          <ErrorMessage name="number">
            {(msg) => <Error>{msg}</Error>}
          </ErrorMessage>
          <Button type="submit">Add contact</Button>
        </StyledForm>
      </Formik>
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 3000,
          style: {
            background: "#fff",
            color: "#dc1c13",
          },
        }}
      />
    </>
  );
}
export default ContactForm;
