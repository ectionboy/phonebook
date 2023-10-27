// import { Visibility, VisibilityOff } from '@mui/icons-material';
// import { Box, Button, FormControl, IconButton, Input, InputAdornment, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { signUpThunk } from 'redux/auth/slice';
import { authSelector } from 'redux/selectors';

const Register = () => {
  // const [showPassword, setShowPassword] = useState(false);

  // const handleClickShowPassword = () => setShowPassword((show) => !show);

  // const handleMouseDownPassword = (event) => {
  //   event.preventDefault();
  // };

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
  return (
    <div>
      <h2>Register</h2>
      <p>You need to register or sign in first</p>
      <form onSubmit={formSubmit}>
        <input
          type="text"
          id="name"
          value={name}
          onChange={inputName}
          required
        />
        <input
          type="email"
          id="email"
          value={email}
          onChange={inputEmail}
          required
        />
        <input
          type="password"
          id="password"
          value={password}
          onChange={inputPassword}
          required
        />
        <button type="submit">Register</button>
      </form>
<div>
        <p>Already have an account?</p>
        <Link to="/login">Sign in</Link>
</div>
      {/* <FormControl
      onSubmit={formSubmit}
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <TextField required id="name" label="Name" variant="standard" type="text" value={name} onChange={inputName} />
        <TextField required id="email" label="Email" variant="standard" type="email" value={email} onChange={inputEmail} />
        <Input
        required
            id="password"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={inputPassword} 
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
      </FormControl> */}
    </div>
  );
};

export default Register;
