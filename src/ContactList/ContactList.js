// import { List, ListItem, Button } from "./ContactList.styled";
import { useSelector, useDispatch } from "react-redux";
import { IconContext } from "react-icons";
import { AiOutlineDelete } from "react-icons/ai";
import { useEffect } from "react";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./ContactList.styled";

import {
  fetchContacts,
  deleteContact,
} from "../redux/Contacts/contactsOperation";
import { visibleContacts } from "../redux/Selectors/contactListSelectors";

function DataTable() {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(visibleContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const columns = [
    { field: "name", headerName: "Name", type: "string", width: 150 },
    {
      field: "number",
      headerName: "Phone number",
      type: "number",
      headerAlign: "center",
      align: "center",
      width: 150,
    },
    {
      field: "actions",
      type: "actions",
      headerName: "Delete",
      width: 100,
      getActions: ({ id }) => {
        return [
          <GridActionsCellItem
            icon={
              <>
                <IconContext.Provider value={{ color: "#dd571c" }}>
                  <AiOutlineDelete />
                </IconContext.Provider>
              </>
            }
            label="Delete"
            onClick={() => dispatch(deleteContact(id))}
          />,
        ];
      },
    },
  ];

  return (
    <div style={{ height: 400, width: 550 }}>
      <ThemeProvider theme={theme}>
        <DataGrid
          disableColumnMenu
          rows={filteredContacts}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10, 20]}
          checkboxSelection
        />
      </ThemeProvider>
    </div>
  );
}

// const ContactList = () => {
//   const dispatch = useDispatch();
//   const filteredContacts = useSelector(visibleContacts);

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

//   return (
//     <div>
//       <List>
//         {filteredContacts.map((contact) => {
//           const { id, name, number } = contact;
//           return (
//             <ListItem key={id}>
//               {name} - {number}
//               <Button type="button" onClick={() => dispatch(deleteContact(id))}>
//                 Delete
//               </Button>
//             </ListItem>
//           );
//         })}
//       </List>
//     </div>
//   );
// };

export default DataTable;
