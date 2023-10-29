import { logout, signin, signup } from "api/auth";

const { createSlice, createAsyncThunk, isAnyOf } = require("@reduxjs/toolkit");
const { initialState } = require("./initialState");


// operations
export const signUpThunk = createAsyncThunk(
    'profile/signup', async (body, { rejectWithValue }) => {
        // console.log(data)
        //   return await signup(data)
        try {
          const data = await signup(body)
          return data
        } catch (error) {
          return rejectWithValue(error.response.data)
        }
      }
  );
  export const loginThunk = createAsyncThunk(
    'profile/login', async (body, { rejectWithValue }) => {
        // console.log(data)
        //   return await signin(data)
        try {
          const data = await signin(body)
          return data
        } catch (error) {
          return rejectWithValue(error.message)
        }
      }
  );
  export const logOutThunk = createAsyncThunk(
    'profile/logOut', async ({rejectWithValue}) => {
          // return await logout()
          try {
            const data = await logout()
            return data
          } catch (error) {
            return rejectWithValue(error.response.data)
          }
      }
  );

//   helpers
  export const authProfile = (state, {payload}) => {
    state.profile = payload.user;
    state.token = payload.token;
  }
  

  const arrThunk = [ signUpThunk, loginThunk, logOutThunk ];
  const arrTypeThunk = type => arrThunk.map(el => el[type]);

  const handleRejected = (state, { error }) => {
  };



const authSlice = createSlice({
    name: 'contacts',
    initialState: initialState,
    reducers: {
      logOut: (state) => {
        state.profile =  { name: null, email: null }
        state.token = ''
        logOutThunk()
      },
    },
    extraReducers: builder => {
      builder
        .addCase(signUpThunk.fulfilled, authProfile)
        .addCase(loginThunk.fulfilled, authProfile)

        .addMatcher(isAnyOf(...arrTypeThunk('rejected')), handleRejected)
         },
  });

  export const authReducer = authSlice.reducer;
  export const { logOut } = authSlice.actions
