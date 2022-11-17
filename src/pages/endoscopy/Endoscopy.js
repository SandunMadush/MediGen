import React from "react";
import { Card, CardContent } from '@mui/material';
import CreateEndoscopyForm from './CreateEndoscopy';

const Endoscopy = () => {
  return (
    <div>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <CreateEndoscopyForm />
        </CardContent>
      </Card>
    </div>
  );
};

export default Endoscopy;
