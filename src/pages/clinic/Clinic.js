import * as React from "react";

import { Avatar, Button, Card, CardContent, CardHeader, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, Stack } from '@mui/material';
import { Delete, Edit } from "@mui/icons-material";

import CreateClinicForm from "./CreateClinic";
import { DataTable } from "../../shared/Datatable";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { blue, red } from "@mui/material/colors";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Clinic() {

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
      field: "clinic_no",
      headerName: "Clinic Number",
      type: "string",
      flex: 1
    },
    { field: "phone_no", headerName: "Phone Number", type: "string", flex: 1 },
    { field: "visit_no", headerName: "Visit Number", type: "string", flex: 1 },
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
            navigate(`/user/clinic/edit/${currentRow.clinic_no}`);
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
      deleteClinic(selectedRow.clinic_no);
      setOpen(false);
    }
  }

  const getClinics = async () => {
    const response = await fetch("http://localhost:5000/clinics");
    const data = await response.json();
    setRows(formatRows(data));
  };


  const deleteClinic = async (id) => {
    const response = await fetch(`http://localhost:5000/clinics/${id}`, {
      method: 'DELETE',
    });
    const data = await response.json();
    console.log(data);
    getClinics();
    handleClose();
  };

  const formatRows = (data) => {
    return data.map((clinic) => {
      return {
        id: clinic.clinic_no,
        date: clinic.date,
        patient_name: clinic.patient_name,
        age: clinic.age,
        clinic_no: clinic.clinic_no,
        phone_no: clinic.phone_no,
        visit_no: clinic.visit_no,
      }
    })
  };

  useEffect(() => {
    getClinics();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <div>
      <Card sx={{ minWidth: 275 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe">
              C
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title= "UHKDU Clinic Details-"
        />
        <CardContent>
          <CreateClinicForm />
        </CardContent>
      </Card>
      {rows.length > 0 && (
        <DataTable rows={rows} columns={columns} title='9999' />
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