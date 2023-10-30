import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const setToken = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const deleteToken = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const signUpThunk = createAsyncThunk(
  'auth/register',
  async (newUser, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/signup', newUser);
      setToken(data.token);
      return data;
    } catch (error) {
      toast.failure(`We're sorry, something went wrong`);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginThunk = createAsyncThunk(
  'auth/login',
  async (logInUser, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/login', logInUser);
      setToken(data.token);
      return data;
    } catch (error) {
      toast.failure(`You entered an incorrect login or password`);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const logOutThunk = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    deleteToken();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUserThunk = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (persistedToken === null)
      return thunkAPI.rejectWithValue('Unable to fetch user');
    try {
      setToken(persistedToken);
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);



// import { createAsyncThunk } from "@reduxjs/toolkit";
// import { logout, signin, signup } from "api/auth";

// export const signUpThunk = createAsyncThunk(
//     'profile/signup', async (body, { rejectWithValue }) => {
//         // console.log(data)
//         //   return await signup(data)
//         try {
//           const data = await signup(body)
//           return data
//         } catch (error) {
//           return rejectWithValue(error.response.data)
//         }
//       }
//   );
//   export const loginThunk = createAsyncThunk(
//     'profile/login', async (body, { rejectWithValue }) => {
//         // console.log(data)
//         //   return await signin(data)
//         try {
//           const data = await signin(body)
//           return data
//         } catch (error) {
//           return rejectWithValue(error.message)
//         }
//       }
//   );
//   export const logOutThunk = createAsyncThunk(
//     'profile/logOut', async ({rejectWithValue}) => {
//           // return await logout()
//           try {
//             const data = await logout()
//             return data
//           } catch (error) {
//             return rejectWithValue(error.response.data)
//           }
//       }
//   );
