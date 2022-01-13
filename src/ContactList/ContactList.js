import { useSelector, useDispatch } from "react-redux";
import { IconContext } from "react-icons";
import { AiOutlineDelete } from "react-icons/ai";
import { useEffect } from "react";
import {
  fetchContacts,
  deleteContact,
} from "../redux/Contacts/contactsOperation";
import { visibleContacts } from "../redux/Selectors/contactListSelectors";
import { TableHeader, TableRow } from "./ContactList.styled";

const ContactsList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(visibleContacts);
  const sortedContacts =
    filteredContacts !== []
      ? filteredContacts.sort((a, b) => a.name.localeCompare(b.name))
      : [];

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <table>
      <thead>
        <tr>
          <TableHeader>Name</TableHeader>
          <TableHeader>Number</TableHeader>
          <TableHeader>Delete</TableHeader>
        </tr>
      </thead>
      <tbody>
        {sortedContacts.length > 0 &&
          sortedContacts.map((contact) => (
            <TableRow key={contact.id}>
              <td>{contact.name}</td>
              <td>{contact.number}</td>
              <td>
                <IconContext.Provider value={{ color: "#dd571c" }}>
                  <AiOutlineDelete
                    onClick={() => dispatch(deleteContact(contact.id))}
                  />
                </IconContext.Provider>
              </td>
            </TableRow>
          ))}
      </tbody>
    </table>
  );
};

export default ContactsList;
