import React from "react";
import { DataGrid } from "@mui/x-data-grid";
const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "Name", headerName: "Name", width: 200 },
  { field: "Role", headerName: "Role", width: 200 },
  {
    field: "PhoneNumber",
    headerName: "PhoneNumber",
    width: 200,
  },

  {
    field: "EmailAddress",
    headerName: "Email Address",
    description: "This column has a value getter and is not sortable.",
    width: 200,
  },
  {
    field: "action",
    headerName: "Action",
    type: "icon",
    width: 200,
  },
];
  
const rows = [
  {
    id: 1,
    Name: "Snow",
    Role: "Jon",
    PhoneNumber: 8700282172,
    EmailAddress: "ak7280032@gmail.com",
    action: "Edit",
  },
];

function UserTable() {
  return (
    <>
      <DataGrid
        className="bg-white"
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </>
  );
}

export default UserTable;
