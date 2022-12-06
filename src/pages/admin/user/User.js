import * as React from "react";

import { Delete, Edit } from "@mui/icons-material";
import { Avatar, Button, Card, CardContent, CardHeader, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, Stack } from '@mui/material';
import CreateUserForm from "./CreateUser";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { blue } from "@mui/material/colors";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DataTable } from "../../../shared/Datatable";

export default function User() {

  const navigate = useNavigate();

  const columns = [
    {field: "username", headerName: "Username", type: "string", flex: 1},
    {field: "password", headerName: "Password", type: "string", flex: 1},
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
            navigate(`/admin/user/edit/${currentRow.id}`);
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
      deleteUser(selectedRow.id);
      setOpen(false);
    }
  }

  const getUsers = async () => {
    const response = await fetch("http://localhost:5000/user");
    const data = await response.json();
    setRows(formatRows(data));
  };


  const deleteUser = async (id) => {
    const response = await fetch(`http://localhost:5000/user/${id}`, {
      method: 'DELETE',
    });
    const data = await response.json();
    console.log(data);
    getUsers();
    handleClose();
  };

  const formatRows = (data) => {
    return data.map((user) => {
      return {
        id: user.id,
        username: user.username,
        password: user.password
      }
    })
  };

  useEffect(() => {
    getUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <div>
      <Card sx={{ minWidth: 275 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe">
              W
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title= "UHKDU Login Details-"
        />
        <CardContent>
          <CreateUserForm />
        </CardContent>
      </Card>
      {rows.length > 0 && (
        <DataTable rows={rows} columns={columns} title='ALL ACCOUNTS' />
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
