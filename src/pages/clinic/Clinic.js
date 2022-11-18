import { Card, CardContent } from '@mui/material';

import CreateClinicForm from './CreateClinic';
import React from "react";

const Clinic = () => {
  return (
    <div>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          < CreateClinicForm />
        </CardContent>
      </Card>
    </div>
  );
};

export default Clinic;
