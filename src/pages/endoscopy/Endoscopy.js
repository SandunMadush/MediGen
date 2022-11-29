import * as React from "react";

import { Avatar, Button, Card, CardContent, CardHeader, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, Stack } from '@mui/material';
import { Delete, Edit } from "@mui/icons-material";

import CreateEndoscopyForm from "./CreateEndoscopy";
import { DataTableEndoscopy } from "../../shared/DatatableEndoscopy";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { blue, red } from "@mui/material/colors";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Endoscopy() {

  const navigate = useNavigate();

  const columns = [
    { field: "date", headerName: "Date", type: "string", flex: 1 },
    {
      field: "bht_no",
      headerName: "BHT Number",
      type: "string",
      flex: 1
    },
    { field: "patient_name", headerName: "Patient Name", type: "string", flex: 1 },
    {
      field: "age",
      headerName: "Age",
      type: "string",
      flex: 1
    },
    
    { field: "endo_procedure", headerName: "Procedure", type: "string", flex: 1 },
    { field: "phone_no", headerName: "Phone Number", type: "string", flex: 1 },
    { field: "consultant", headerName: "Consultant", type: "string", flex: 1 },
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
            navigate(`/user/endoscopy/edit/${currentRow.bht_no}`);
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
      deleteEndoscopy(selectedRow.bht_no);
      setOpen(false);
    }
  }

  const getEndoscopy = async () => {
    const response = await fetch("http://localhost:5000/endoscopy");
    const data = await response.json();
    setRows(formatRows(data));
  };


  const deleteEndoscopy = async (id) => {
    const response = await fetch(`http://localhost:5000/endoscopy/${id}`, {
      method: 'DELETE',
    });
    const data = await response.json();
    console.log(data);
    getEndoscopy();
    handleClose();
  };

  const formatRows = (data) => {
    return data.map((endoscopy) => {
      return {
        id: endoscopy.bht_no,
        date: endoscopy.date,
        bht_no: endoscopy.bht_no,
        patient_name: endoscopy.patient_name,
        age: endoscopy.age,
        endo_procedure: endoscopy.endo_procedure,
        phone_no: endoscopy.phone_no,
        consultant: endoscopy.consultant,
      }
    })
  };

  useEffect(() => {
    getEndoscopy();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <div>
      <Card sx={{ minWidth: 275 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe">
              E
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="UHKDU Endoscopy Details-"
        />
        <CardContent>
          <CreateEndoscopyForm />
        </CardContent>
      </Card>
      {rows.length > 0 && (
        <DataTableEndoscopy rows={rows} columns={columns} />
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
  )
}
