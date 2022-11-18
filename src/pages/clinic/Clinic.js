import React from "react";
import { Card, CardContent } from '@mui/material';

import CreateClinicFVForm from './CreateClinicFV';

const Clinic = () => {
  return (
    <div>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          < CreateClinicFVForm />
        </CardContent>
      </Card>
    </div>
  );
};

export default Clinic;
