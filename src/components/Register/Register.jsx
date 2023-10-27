import { Visibility, VisibilityOff } from '@mui/icons-material';
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
import { useNavigate } from 'react-router-dom';
import { signUpThunk } from 'redux/auth/slice';
import { authSelector } from 'redux/selectors';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(show => !show);

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const Reg = data => {
    dispatch(signUpThunk(data));
  };

  const formSubmit = e => {
    e.preventDefault();
    console.log(name);
    console.log(email);
    console.log(password);
    Reg({ name, email, password });
    setPassword('');
  };
  const inputName = ({ target: { value } }) => {
    setName(value);
  };
  const inputEmail = ({ target: { value } }) => {
    setEmail(value);
  };
  const inputPassword = ({ target: { value } }) => {
    setPassword(value);
  };
  const navigate = useNavigate();

  const isAuth = useSelector(authSelector);

  useEffect(() => {
    if (isAuth) {
      navigate('/', { replace: true });
    }
  }, [isAuth, navigate]);
  const navToLogPage = () => {
    navigate('/login', { replace: true });
  };

  return (
    // <div>
    //   <h2>Register</h2>
    //   <p>You need to register or sign in first</p>
    //   <form onSubmit={formSubmit}>
    //     <input
    //       type="text"
    //       id="name"
    //       value={name}
    //       onChange={inputName}
    //       required
    //     />
    //     <input
    //       type="email"
    //       id="email"
    //       value={email}
    //       onChange={inputEmail}
    //       required
    //     />
    //     <input
    //       type="password"
    //       id="password"
    //       value={password}
    //       onChange={inputPassword}
    //       required
    //     />
    //     <button type="submit">Register</button>
    //   </form>
    //   <div>
    //     <p>Already have an account?</p>
    //     <Link to="/login">Sign in</Link>
    //   </div>

    <Container
      sx={{
        width: '300px',
        display: 'flex',
        flexDirection: 'column',
        padding: '24px 0',
      }}
    >
      <Typography variant="h4" gutterBottom>
        Sign up
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
      >
        <TextField
          value={name}
          onChange={inputName}
          id="name"
          label="Name"
          variant="standard"
          type="text"
          required
        />
        <TextField
          value={email}
          onChange={inputEmail}
          id="email"
          label="Email"
          variant="standard"
          type="email"
          required
        />
        <FormControl variant="standard">
          <InputLabel htmlFor="password">Password</InputLabel>
          <Input
            value={password}
            onChange={inputPassword}
            id="password"
            type={showPassword ? 'text' : 'password'}
            required
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
          Register
        </Button>
      </Box>
      <Typography
        variant="subtitle2"
        sx={{
          maxWidth: '180px',
          margin: '0 auto',
          marginTop: '16px'
        }}
      >
        Already have an account?
      </Typography>
      <Button
        sx={{
          maxWidth: '180px',
          margin: '0 auto',
        }}
        onClick={navToLogPage}
        type="button"
        size="small"
      >
        Sign in
      </Button>
    </Container>
    // </div>
  );
};

export default Register;
