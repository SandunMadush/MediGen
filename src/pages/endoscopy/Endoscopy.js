import React from "react";
import { Card, CardContent } from '@mui/material';
import CreateEndoscopyForm from './CreateEndoscopy';

import { DataTable } from "../../shared/Datatableendo";

const columns = [
  { field: "date", headerName: "Date", type: "string", width: 100 },
  { field: "patientName", headerName: "Patient name", width: 130 },

  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 90,
  },
  
  {
    field: "bht",
    headerName: "BHT Number",
    type: "string",
    width: 200,
    sortable: false,
  },
  
  { field: "gender", headerName: "Gender", type: "string", width: 200 },
  { field: "surgeon", headerName: "Con Surgeon", type: "string", width: 200 },
];

const rows = [
  // {
  //   id: 1,
  //   lastName: "Snow",
  //   firstName: "Jon",
  //   age: 35,
  //   bht: "MC/FD/12/15",
  //   date: "12/05/2022",
  //   gender: "IOL",
  //   surgeon: "Dr. A Fernando",
  // },
  // {
  //   id: 2,
  //   lastName: "Lannister",
  //   firstName: "Cersei",
  //   age: 42,
  //   bht: "GF/JH/16/48",
  //   date: "14/03/2022",
  //   surgery: "PLI",
  //   surgeon: "Dr. KDW Wijenayake",
  // },
  // {
  //   id: 3,
  //   lastName: "Lannister",
  //   firstName: "Jaime",
  //   age: 45,
  //   bht: "HY/PO/14/47",
  //   date: "08/04/2022",
  //   surgery: "KJT",
  //   surgeon: "Dr. A Fernando",
  // },
  // {
  //   id: 4,
  //   lastName: "Stark",
  //   firstName: "Arya",
  //   age: 16,
  //   bht: "RE/16/GH/14",
  //   date: "01/01/2022",
  //   surgery: "IOL",
  //   surgeon: "Dr. KDW Wijenayake",
  // },
  // {
  //   id: 5,
  //   lastName: "Targaryen",
  //   firstName: "Daenerys",
  //   age: 34,
  //   bht: "GT/16/JU/14",
  //   date: "06/07/2022",
  //   surgery: "GBR",
  //   surgeon: "Dr. A Fernando",
  // },
  // {
  //   id: 6,
  //   lastName: "Melisandre",
  //   firstName: "Princess",
  //   age: 10,
  //   bht: "NU/LA/47/98",
  //   date: "11/06/2022",
  //   surgery: "IOL",
  //   surgeon: "Dr. A Fernando",
  // },
  // {
  //   id: 7,
  //   lastName: "Clifford",
  //   firstName: "Ferrara",
  //   age: 44,
  //   bht: "VC/JH/21/45",
  //   date: "09/03/2022",
  //   surgery: "KJT",
  //   surgeon: "Dr. A Fernando",
  // },
  // {
  //   id: 8,
  //   lastName: "Frances",
  //   firstName: "Rossini",
  //   age: 36,
  //   bht: "KI/MB/69/25",
  //   date: "13/02/2022",
  //   surgery: "PLI",
  //   surgeon: "Dr. KDW Wijenayake",
  // },
  // {
  //   id: 9,
  //   lastName: "Roxie",
  //   firstName: "Harvey",
  //   age: 65,
  //   bht: "SA/DE/16/32",
  //   date: "11/02/2022",
  //   surgery: "IOL",
  //   surgeon: "Dr. A Fernando",
  // },
  // {
  //   id: 10,
  //   lastName: "Lestrange",
  //   firstName: "Bellatrix",
  //   age: 56,
  //   bht: "BN/KJ/16/74",
  //   date: "14/05/2022",
  //   surgery: "PLI",
  //   surgeon: "Dr. KDW Wijenayake",
  // },
];

const Endoscopy = () => {
  return (
    <div>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <CreateEndoscopyForm />
        </CardContent>
      </Card>
      <DataTable rows={rows} columns={columns} />
    </div>
  
  );
};

export default Endoscopy;
