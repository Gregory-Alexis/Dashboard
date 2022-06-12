import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { userColumns, userRows } from "../../datatablesource";

const Datatable = () => {
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: () => {
        return (
          <div className="flex items-center gap-4">
            <Link to="/users/test">
              <div className="py-1 px-2 rounded-md text-blue-800 border-blue-600 border cursor-pointer">
                View
              </div>
            </Link>
            <div className="py-1 px-2 rounded-md text-red-800 border-red-600 border cursor-pointer">
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div style={{ height: 400, width: "100%" }} className="p-4">
      <div className="w-full text-2xl text-gray-400 mb-4 flex items-center justify-between">
        Add New User
        <Link
          to="/users/new"
          className="text-green-500 text-base border border-green-500 p-2 rounded-md"
        >
          Add New
        </Link>
      </div>
      <DataGrid
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
