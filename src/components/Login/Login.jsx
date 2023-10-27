import {
  Box,
  Button,
  Container,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  TextField,
  Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { loginThunk } from 'redux/auth/slice';
import { authSelector } from 'redux/selectors';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
const Login = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword(show => !show);

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };
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
    dispatch(loginThunk(data));
  };

  const formSubmit = e => {
    e.preventDefault();
    Log({ email, password });

    setPassword('');
  };
  const isAuth = useSelector(authSelector);

  useEffect(() => {
    if (isAuth) {
      navigate('/', { replace: true });
    }
  }, [isAuth, navigate]);
  const navToRegPage = () => {
    navigate('/register', { replace: true });
  };
  return (
    <Container
      sx={{
        width: '300px',
        display: 'flex',
        flexDirection: 'column',
        padding: '24px 0',
      }}
    >
      {/* <h2>Sign in</h2> */}
      {/* <p>You need to sign in first</p> */}
      {/* <form  onSubmit={formSubmit}>
        <input type="email" id="email"  value={email} onChange={inputEmail}  required/>
        <input type="password" id="password" value={password} onChange={inputPassword}  required/>
        <button type="submit">Sign in</button>
      </form> */}

      <Typography variant="h4" gutterBottom>
        Sign in
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        You need to sign in first
      </Typography>
      <Box
        onSubmit={formSubmit}
        component="form"
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: '14px',
        }}
        noValidate
      >
        <TextField
          value={email}
          onChange={inputEmail}
          id="email"
          label="Email"
          variant="standard"
          type="email"
        />
        <FormControl variant="standard">
          <InputLabel htmlFor="password">Password</InputLabel>
          <Input
            value={password}
            onChange={inputPassword}
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
        </FormControl>

        <Button type="submit" variant="contained">
          Login
        </Button>
      </Box>
      <Button
        sx={{
          maxWidth: '180px',
          margin: '8px auto',
        }}
        onClick={navToRegPage}
        type="button"
        size="small"
      >
        Create an account
      </Button>
      {/* <Link to="/register">Create an account</Link> */}
    </Container>
  );
};

export default Login;
