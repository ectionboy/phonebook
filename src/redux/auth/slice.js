import { logout, signin, signup } from "api/auth";

const { createSlice, createAsyncThunk, isAnyOf } = require("@reduxjs/toolkit");
const { initialState } = require("./initialState");


// operations
export const signUpThunk = createAsyncThunk(
    'profile/signup', async (data) => {
        console.log(data)
          return await signup(data)
      }
  );
  export const loginThunk = createAsyncThunk(
    'profile/login', async (data) => {
        console.log(data)
          return await signin(data)
      }
  );
  export const logOutThunk = createAsyncThunk(
    'profile/logOut', async () => {
          return await logout()
      }
  );

//   helpers
  export const authProfile = (state, {payload}) => {
    state.profile = payload.user;
    state.token = payload.token;
  }
  export const logOutProfile = (state) => {
    // state.profile =  { name: null, email: null };
    // state.token = '';
    // console.log('===')
    handleLogOut()
  }

  const arrThunk = [ signUpThunk, loginThunk, logOutThunk ];
  const arrTypeThunk = type => arrThunk.map(el => el[type]);

  const handleRejected = (state, { error }) => {
    console.log(error.message)
  };
  export const handleLogOut = (state) => {
    console.log('---')
    state.token = '';
    state.profile =  { name: null, email: null };

  };


const authSlice = createSlice({
    name: 'contacts',
    initialState: initialState,
    reducers: {
      logOut: (state) => {
        state.profile = null
        state.token = ''
      },
    },
    extraReducers: builder => {
      builder
        .addCase(signUpThunk.fulfilled, authProfile)
        .addCase(loginThunk.fulfilled, authProfile)
        .addCase(logOutThunk.fulfilled, logOutProfile)
        .addCase(logOutThunk.rejected, logOutProfile)

        .addMatcher(isAnyOf(...arrTypeThunk('rejected')), handleRejected)
         },
  });

  export const authReducer = authSlice.reducer;
  export const { logOut } = authSlice.actions
