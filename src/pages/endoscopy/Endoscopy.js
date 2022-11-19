import { Card, CardContent } from '@mui/material';

import CreateEndoscopyForm from './CreateEndoscopy';
import React from "react";

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
