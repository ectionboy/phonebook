import { Typography } from '@mui/material';
import React from 'react';

const EmptyContactsList = () => {
  return (
    <div>
      <Typography
        variant="subtitle2"
        sx={{
          maxWidth: '180px',
          marginTop: '16px',
        }}
      >
        You don't have any contacts
      </Typography>
    </div>
  );
};

export default EmptyContactsList;
