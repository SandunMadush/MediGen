import React from "react";
import { Card, CardContent } from '@mui/material';

import CreateClinicFVForm from './CreateClinicFV';
import CreateClinicSVForm from './CreateClinicSV';

const Clinic = () => {
  return (
    <div>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          < CreateClinicFVForm />
        </CardContent>
      </Card>
      <br />
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          < CreateClinicSVForm />
        </CardContent>
      </Card>
    </div>
  );
};

export default Clinic;
