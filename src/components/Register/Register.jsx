import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Box, Button, IconButton, Input, InputAdornment, TextField } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      Register
      <p></p>
      <Link to="/">Home</Link>
      <p></p>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
          display: 'flex',
          flexDirection: 'column',
        }}
        noValidate
        autoComplete="off"
      >
        <TextField required id="name" label="Name" variant="standard" type="text" />
        <TextField required id="email" label="Email" variant="standard" type="email" />
        <Input
            id="standard-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        <Button type="submit" variant="contained">
          Login
        </Button>
      </Box>
    </div>
  );
};

export default Register;
