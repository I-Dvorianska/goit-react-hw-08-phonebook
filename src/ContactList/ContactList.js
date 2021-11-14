import { useSelector, useDispatch } from "react-redux";

import { IconContext } from "react-icons";
import { AiOutlineDelete } from "react-icons/ai";
import { useEffect } from "react";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";

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
    {
      field: "name",
      headerName: "Name",
      type: "string",
      headerAlign: "center",
      width: 200,
    },
    {
      field: "number",
      headerName: "Phone number",
      type: "number",
      headerAlign: "center",
      align: "center",
      flex: 1,
      minWidth: 100,
    },
    {
      field: "actions",
      type: "actions",
      headerName: "Delete",
      minWidth: 50,
      flex: 0.5,
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
    <div style={{ height: 500, width: 550 }}>
      <DataGrid
        disableColumnMenu
        rows={filteredContacts}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10, 20]}
      />
    </div>
  );
}

export default DataTable;
