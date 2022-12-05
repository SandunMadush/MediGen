import * as React from "react";

import { Avatar, Button, Card, CardContent, CardHeader, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, Stack } from '@mui/material';
import { Delete, Edit } from "@mui/icons-material";

import CreateWardForm from "./CreateWard";
import { DataTable } from "../../../shared/Datatable";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { blue, red } from "@mui/material/colors";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Ward() {

  const navigate = useNavigate();

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
    {
      field: 'action',
      headerName: 'Action',
      flex: 1,
      disableClickEventBubbling: true,

      renderCell: (params) => {
        const onClick = (e, id) => {
          e.stopPropagation();
          const currentRow = params.row;
          if (id === 'edit') {
            navigate(`/user/ward/edit/${currentRow.bht_no}`);
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
      deleteWard(selectedRow.bht_no);
      setOpen(false);
    }
  }

  const getWards = async () => {
    const response = await fetch("http://localhost:5000/wards");
    const data = await response.json();
    setRows(formatRows(data));
  };


  const deleteWard = async (id) => {
    const response = await fetch(`http://localhost:5000/wards/${id}`, {
      method: 'DELETE',
    });
    const data = await response.json();
    console.log(data);
    getWards();
    handleClose();
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
            <Avatar sx={{ bgcolor: "#ed4b82" }} aria-label="recipe">
              W
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title= "Enter Ward Details-"
        />
        <CardContent>
          <CreateWardForm />
        </CardContent>
      </Card>
      {rows.length > 0 && (
        <DataTable rows={rows} columns={columns} title='Ward Patient Details-' />
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
