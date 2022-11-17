import React from "react";
import { Card, CardContent } from '@mui/material';
import CreateTheatreForm from './CreateTheatre';

const Theatre = () => {
  return (
    <div>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <CreateTheatreForm />
        </CardContent>
      </Card>
    </div>
  );
};

export default Theatre;
