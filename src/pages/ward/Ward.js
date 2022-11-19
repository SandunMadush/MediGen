import * as React from "react";

import { Avatar, Card, CardContent, CardHeader, IconButton } from '@mui/material';

import CreateWardForm from "./CreateWard";
import { DataTable } from "../../shared/Datatable";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { red } from "@mui/material/colors";
import { useEffect } from "react";

export default function Ward() {

  const columns = [
    { field: "date", headerName: "Date", type: "string", flex: 1 },
    { field: "patient_name", headerName: "Patient Name", type: "string", flex: 1 },
    {
      field: "age",
      headerName: "Age",
      type: "string",
      flex: 1
    },
    {
      field: "bht_no",
      headerName: "BHT Number",
      type: "string",
      flex: 1
    },
    { field: "gender", headerName: "Gender", type: "string", flex: 1 },
    { field: "con_surgeon", headerName: "Surgeon", type: "string", flex: 1 },
  ];

  const [rows, setRows] = React.useState([]);


  const getWards = async () => {
    const response = await fetch("http://localhost:5000/wards");
    const data = await response.json();
    setRows(formatRows(data));
  };

  const formatRows = (data) => {
    return data.map((ward) => {
      return {
        id: ward.bht_no,
        date: ward.date,
        patient_name: ward.patient_name,
        age: ward.age,
        bht_no: ward.bht_no,
        gender: ward.gender,
        con_surgeon: ward.con_surgeon,
      }
    })
  };

  useEffect(() => {
    getWards();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <div>
      <Card sx={{ minWidth: 275 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              W
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="UHKDU Theatre"
          subheader="Create Theatre"
        />
        <CardContent>
          <CreateWardForm />
        </CardContent>
      </Card>
      {rows.length > 0 && (
        <DataTable rows={rows} columns={columns} />
      )}
    </div>
  );
}
