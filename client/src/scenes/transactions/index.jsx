import React, { useState} from 'react';
import { DataGrid } from "@mui/x-data-grid";
import { useGetTransactionsQuery } from "state/api";
import { Box, useTheme } from "@mui/material";
import Header from "components/Header";
import DataGridCustomToolbar from "components/DataGridCustomToolbar";


// onChange=(e) => {setSearchInput(e.target.value)}
//         value={searchInput}
const Transactions = () => {
    const [page, setPage] = useState(0);
    const [pageSize, setPageSize] = useState(20);
    const [sort, setSort] = useState({});
    const [search, setSearch] = useState("");
    const theme = useTheme();
    const {searchInput, setSearchInput} = useState("");
    const { data, isLoading } = useGetTransactionsQuery({
        page,
        pageSize,
        sort: JSON.stringify(sort),
        search
    });
    const columns = [
        { field: "_id", headerName: "ID", flex: 1 },
        { field: "userId", headerName: "User ID", flex: 1 },
        { field: "createdAt", headerName: "Created At:", flex: 1 },
        // {
        //   field: "phoneNumber",
        //   headerName: "PhoneNumber",
        //   flex: 0.5,
        //   renderCell: (params) => {
        //     console.log(params,"params");
        //     return params.value.replace(/^(\d{3})(\d{3})(\d{4})/, "($1)$2-$3");
        //   },
        // },
        { field: "products", headerName: "# of Products", flex: 0.5, sortable: false, renderCell: (params) => params.value.length},
        { field: "cost", headerName: "Cost", flex: 1, renderCell: (params) => `$${Number(params.value).toFixed(2)}`,},
        { field: "Role", headerName: "Role", flex: 0.5 },
      ];
  return (
    <Box m="1.5rem 2.5rem">
    <Header title="Transactions" subtitle={"Here's a list of your Transactions"} />
    <Box height="80vh" 
    sx={{
      "& .MuiDataGrid-root": {
          border: "none",
      },
      "& .MuiDataGrid-cell": {
          borderBottom: "none",
      },
      "& .MuiDataGrid-columnHeaders": {
          backgroundColor: theme.palette.background.alt,
          color: theme.palette.secondary[100],
          borderBottom: "none",
      },
      "& .MuiDataGrid-footerContainer": {
          backgroundColor: theme.palette.background.alt,
          color: theme.palette.secondary[100],
          borderTop: "none",
      },
      "& .MuiDataGrid-virtualScroller": {
          backgroundColor: theme.palette.primary.light,
      }, 
      "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
          color: `${theme.palette.secondary[200]} !important`,
      },
    }}>
      <DataGrid
        loading={isLoading || !data}
        getRowId={(row) => row._id}
        rows={(data && data.transactions) || []}
        columns={columns}
        rowsPerPageOptions={[20,50,100]}
        rowcount={(data && data.local) || 0}
        pagination
        page={page}
        pageSize={pageSize}
        paginationMode="server"
        onPageChange={(newPageSize) => setPageSize(newPageSize)}
        onSortModelChange={(newSortModel) => setSort(...newSortModel)}
        components={{ Toolbar: DataGridCustomToolbar}}
        componentsProps={{
            toolbar: {searchInput, setSearchInput, setSearch}
        }}
      />
    </Box>
  </Box>
  )
}


export default Transactions