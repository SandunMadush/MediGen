import * as React from 'react';

import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
  { field: 'bht', headerName: 'BHT', type: 'string', width: 200, sortable: false },
  { field: 'date', headerName: 'Date', type: 'string', width: 100 },
  { field: 'surgery', headerName: 'Surgery', type: 'string', width: 200 },
  { field: 'surgeon', headerName: 'Con Surgeon', type: 'string', width: 200 }
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35, bht: '', date: '2022-05-12', surgery: '', surgeon: '' },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42, bht: '', surgery: '', surgeon: '' },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45, bht: '', surgery: '', surgeon: '' },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16, bht: '', surgery: '', surgeon: '' },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null, bht: '', surgery: '', surgeon: '' },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150, bht: '', surgery: '', surgeon: '' },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44, bht: '', surgery: '', surgeon: '' },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36, bht: '', surgery: '', surgeon: '' },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65, bht: '', surgery: '', surgeon: '' },
  { id: 10, lastName: 'Roxie', firstName: 'Harvey', age: 65, bht: '', surgery: '', surgeon: '' }
];

const DataTable = () => {
  return (
    <div style={{ height: 500, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={100}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}


export default function Ward() {
  return (
    <div>
      <DataTable />
    </div>
  );
}