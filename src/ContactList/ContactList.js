import { useSelector, useDispatch } from "react-redux";
import { IconContext } from "react-icons";
import { AiOutlineDelete } from "react-icons/ai";
import { useEffect, useState } from "react";
import {
  fetchContacts,
  deleteContact,
} from "../redux/Contacts/contactsOperation";
import { getPageNumber } from "../redux/Contacts/actions";

import {
  visibleContacts,
  getPage,
} from "../redux/Selectors/contactListSelectors";
import { TableHeader, TableRow, Button } from "./ContactList.styled";
import { createList } from "./createList";

const ContactsList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(visibleContacts);
  const listPage = useSelector(getPage);
  const [over, setOver] = useState(false);

  const sortedContacts =
    filteredContacts !== []
      ? filteredContacts.sort((a, b) => a.name.localeCompare(b.name))
      : [];

  const contactsArr = sortedContacts !== [] ? createList(sortedContacts) : [];

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const condition =
    contactsArr.length === 1 || contactsArr[listPage + 1] === undefined;

  return (
    <>
      <Button
        disabled={condition}
        onClick={() => {
          dispatch(getPageNumber(1));
        }}
      >
        Show next
      </Button>

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
            contactsArr[listPage].map((contact) => (
              <TableRow key={contact.id}>
                <td>{contact.name}</td>
                <td>{contact.number}</td>
                <td>
                  <IconContext.Provider
                    value={{
                      color: "#e36414",
                    }}
                  >
                    <div>
                      <AiOutlineDelete
                        onMouseOver={() => setOver(true)}
                        onMouseLeave={() => setOver(false)}
                        style={over ? { cursor: "pointer" } : {}}
                        onClick={() => dispatch(deleteContact(contact.id))}
                      />
                    </div>
                  </IconContext.Provider>
                </td>
              </TableRow>
            ))}
        </tbody>
      </table>
    </>
  );
};

export default ContactsList;
