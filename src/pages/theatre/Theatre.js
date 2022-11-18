import { Avatar, Card, CardContent, CardHeader, IconButton } from '@mui/material';

import CreateTheatreForm from './CreateTheatre';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import React from "react";
import { red } from "@mui/material/colors";

const Theatre = () => {
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
          <CreateTheatreForm />
        </CardContent>
      </Card>
    </div>
  );
};

export default Theatre;
