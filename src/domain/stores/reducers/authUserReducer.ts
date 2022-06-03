import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  registerUserRepo,
  loginUserRepo,
} from '../../../data/repository/authRepository';

interface AuthState {
  isLoading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  isLoading: false,
  error: null,
};

export const reducerName = 'AuthReducer';

export const signUpUser = createAsyncThunk(
  'AuthReducer/SignUp',
  async (user: { username: string, email: string; password: string }, { rejectWithValue }) => {
    try {
      const response = await registerUserRepo(user);

      if (response.error) {
        throw new Error(response.error.message);
      }

      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const loginUser = createAsyncThunk(
  'AuthReducer/LoginUser',
  async (user: { username: string; password: string }, { rejectWithValue }) => {
    try {
      const response = await loginUserRepo(user);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const authUserReducer = createSlice({
  name: reducerName,
  initialState,
  reducers: {
    // signUpUser: (
    //   state,
    //   { payload }: PayloadAction<{ email: string; password: string }>,
    // ) => {
    //   const data = {
    //     email: payload.email,
    //     password: payload.password,
    //   };
    //
    //   console.log({ data });
    // },
  },
  extraReducers(builder) {
    builder
      .addCase(signUpUser.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(signUpUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.error;
      })
      .addCase(signUpUser.rejected, (state, action: PA) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(loginUser.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.error;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.error;
      });
  },
});

// export const { signUpUser } = authUserReducer.actions;

export const authReducer = authUserReducer.reducer;
