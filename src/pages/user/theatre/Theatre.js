import * as React from "react";

import { Avatar, Button, Card, CardContent, CardHeader, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, Stack } from '@mui/material';
import { Delete, Edit } from "@mui/icons-material";

import CreateTheatreForm from "./CreateTheatre";
import { DataTable } from "../../../shared/Datatable";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { blue } from "@mui/material/colors";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Theatre() {

  const navigate = useNavigate();

  const columns = [
    { field: "date", headerName: "Date", type: "string", flex: 1.5 },
    { field: "patient_name", headerName: "Patient Name", type: "string", flex: 2 },
    {
      field: "bht_no",
      headerName: "BHT Number",
      type: "string",
      flex: 2
    },
    // { field: "ward_no", headerName: "Ward Name", type: "string", flex: 1 },
    {
      field: "age",
      headerName: "Age",
      type: "string",
      flex: 0.5
    },
    
    // { field: "gender", headerName: "Gender", type: "string", flex: 1, show: false },
    // { field: "surgery", headerName: "Surgery", type: "string", flex: 1 },

    { field: "con_surgeon", headerName: "Con Surgeon", type: "string", flex: 2 },
    // { field: "con_anesthetic", headerName: "Con Anesthetic", type: "string", flex: 1 },
    { field: "theatre_no", headerName: "Theatre Number", type: "string", flex: 2.2 },
    // { field: "clinic_number", headerName: "Clinic Number", type: "string", flex: 1 },
    { field: "is_pcr", headerName: "PCR", type: "boolean", flex: 0.4 },
    { field: "is_rat", headerName: "RAT", type: "boolean", flex: 0.4 },
    { field: "is_fasting", headerName: "Fasting", type: "boolean", flex: 1.2 },
    { field: "is_echo", headerName: "Echo", type: "boolean", flex: 0.4 },
    { field: "is_ecg", headerName: "ECG", type: "boolean", flex: 0.4 },
    { field: "is_ct", headerName: "CT", type: "boolean", flex: 0.2 },
    {
      field: 'action',
      headerName: 'Action',
      flex: 2.5,
      disableClickEventBubbling: true,

      renderCell: (params) => {
        const onClick = (e, id) => {
          e.stopPropagation();
          const currentRow = params.row;
          if (id === 'edit') {
            navigate(`/user/theatre/edit/${currentRow.bht_no}`);
          } else if (id === 'delete') {
            setOpen(true);
            setSelectedRow(currentRow);
          }
        };

        return (
          <Stack direction="row" spacing={2}>
            <Button color="warning" size="small" onClick={(e) => onClick(e, 'edit')}>
              <Edit />
            </Button>
            <Button color="error" size="small" onClick={(e) => onClick(e, 'delete')}>
              <Delete />
            </Button>
          </Stack>
        );
      },
    }
  ];

  const [selectedRow, setSelectedRow] = React.useState(null);
  const [rows, setRows] = React.useState([]);
  const [open, setOpen] = React.useState(false);

  const handleClose = (action) => {
    if (action === 'cancel') {
      setOpen(false);
    } else {
      deleteTheatre(selectedRow.bht_no);
      setOpen(false);
    }
  }

  const getTheatres = async () => {
    const response = await fetch("http://localhost:5000/theatre");
    const data = await response.json();
    setRows(formatRows(data));
  };


  const deleteTheatre = async (id) => {
    const response = await fetch(`http://localhost:5000/theatre/${id}`, {
      method: 'DELETE',
    });
    const data = await response.json();
    console.log(data);
    getTheatres();
    handleClose();
  };

  const formatRows = (data) => {
    return data.map((theatre) => {
      return {
        id: theatre.bht_no,
        date: theatre.date,
        patient_name: theatre.patient_name,
        ward_no: theatre.ward_no,
        age: theatre.age,
        bht_no: theatre.bht_no,
        gender: theatre.gender,
        surgery: theatre.surgery,
        con_surgeon: theatre.con_surgeon,
        con_anesthetic: theatre.con_anesthetic,
        theatre_no: theatre.theatre_no,
        clinic_number: theatre.clinic_number,
        is_pcr: theatre.is_pcr,
        is_rat: theatre.is_rat,
        is_fasting: theatre.is_fasting,
        is_echo: theatre.is_echo,
        is_ecg: theatre.is_ecg,
        is_ct: theatre.is_ct
      }
    })
  };

  useEffect(() => {
    getTheatres();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <div>
      <Card sx={{ minWidth: 275 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "#ffee33"}} aria-label="recipe">
              T
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title= "Enter Theatre Details-"
        />
        <CardContent>
          <CreateTheatreForm />
        </CardContent>
      </Card>
      {rows.length > 0 && (
        <DataTable rows={rows} columns={columns} title='Theatre Patient Details-' />
      )}

      <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>
          {"Are you sure you want to delete this row?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please confirm if you want to delete this row.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleClose('cancel')}>Cancel</Button>
          <Button onClick={() => handleClose('ok')} autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
