// import { Box, Button, IconButton, Input, InputAdornment, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { login } from 'redux/auth/slice';
import { authSelector } from 'redux/selectors';
// import Visibility from '@mui/icons-material/Visibility';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';
const Login = () => {
    // const [showPassword, setShowPassword] = React.useState(false);
  
    // const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    // const handleMouseDownPassword = (event) => {
    //   event.preventDefault();
    // };
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

      const inputEmail = ({ target: { value } }) => {
    setEmail(value);
  };
  const inputPassword = ({ target: { value } }) => {
    setPassword(value);
  };

  const dispatch = useDispatch();

  const Log = data => {
    dispatch(login(data));
  };

  const formSubmit = e => {
    e.preventDefault();
    console.log(email);
    console.log(password);
    Log({ email, password });

    setPassword('');

  };
  const isAuth = useSelector(authSelector);

  useEffect(() => {
    if (isAuth) {

      navigate('/', { replace: true });

    }
  }, [isAuth, navigate]);
  return (
    <div>
      Login
      
      <form  onSubmit={formSubmit}>
        <input type="email" id="email"  value={email} onChange={inputEmail}  required/>
        <input type="password" id="password" value={password} onChange={inputPassword}  required/>
        <button type="submit">Login</button>
      </form>
      <p></p>
      <Link to="/register">Register</Link>
      <p></p>
      {/* <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
          display: 'flex',
          flexDirection: 'column',
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="email" label="Email" variant="standard" type="email" />
         <TextField
          id="password"
          label="Password"
          variant="standard"
          type="password"
        /> 
                  <Input
            id="password"
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
      </Box> */}
    </div>
  );
};

export default Login;
