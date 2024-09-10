// hashitso_daya => DB
// hashitso_daya => USER
// 3p71f^Vlewbp => PASSWORD
"use client"

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AUTH_TOKEN } from "@/constants/variables";
import authService from "@/services/authService";
import { toast } from "react-toastify";


interface User {
  id: string;
  name: string;
  email: string;
  phone_number: string;
  is_old: boolean;
  otp: string;
  expire_otp_time: string;
  created_at: string;
  updated_at: string;
}


interface AuthState {
  user: User | null;
  loading: boolean;
  token: string | null;
  pageLoading: true;
}


export const initialState: AuthState = {
  loading: false,
  token: typeof window !== "undefined" ? window.localStorage.getItem(AUTH_TOKEN) : null, // Check if window is available
  user: null,
  pageLoading: true,
};

export const phoneNumberLogin = createAsyncThunk(
  "auth/phone_numberVerification",
  async ({sendingData, router}, { dispatch, rejectWithValue }) => {
    const { phone_number, noRedirectEnable = true } = sendingData;
    try {
      const phoneNumberLogin = await authService.loginWithPhoneNumber(phone_number)


      if(phoneNumberLogin) {
        if(noRedirectEnable) {
          router.replace(`/otp-verification?phone_number=${phone_number}`)
       }

        return {phone_number, noRedirectEnable}
      }
      
    } catch (err:any) {
      return rejectWithValue(err.message || "Error");
    }
  }
);


export const otpVerification = createAsyncThunk(
  "auth/otpVerification",
  async ({sendingData, router}:any, { dispatch, rejectWithValue }) => {
    const { phone_number, otp } = sendingData;
    try {
      const user = await authService.otpVerification(sendingData.phone_number, sendingData.otp)

      if(user) {
        if(user.name?.length) {
          router.replace('/')
        } else {
          router.replace('/auth-details')
        }
        return user
      }
      
    } catch (err:any) {
      return rejectWithValue(err.message || "Error");
    }
  }
);

export const getProfileDetails = createAsyncThunk(
  "auth/currentUser",
  async (_, { dispatch, rejectWithValue }) => {
    
    try {
      const userData = await authService.getProfileDetails()

      if(userData) {
        return userData
      }
    
    } catch(err:any) {
      return rejectWithValue(err.message || "Error");
    }
  }
);

export const updateProfileDetails = createAsyncThunk(
  "auth/updateuser",
  async ({sendingData, router}:any, { dispatch, rejectWithValue }) => {
    
    try {
      const userData = await authService.updateProfileDetails(sendingData)

      if(userData) {
        router.replace('/')

        return userData
      }
    
    } catch(err:any) {
      return rejectWithValue(err.message || "Error");
    }
  }
);


export const signOut = createAsyncThunk("auth/signOut", async () => {
//   const response = await FirebaseService.signOutRequest();
//   localStorage.removeItem(AUTH_TOKEN);
//   localStorage.removeItem("User");
//   return response.data;
});




export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authenticated: (state, action) => {
      console.log(state.loading, action.payload.token, "auteheh");
      state.loading = false;
      state.token = action?.payload?.token;
      state.user = action?.payload?.user;
    },
    // updateUserInfo: (state, action) => {
    //   state.user = { ...state.user, ...action.payload };
    // },
    setToken: (state, action) => {
      state.token = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(phoneNumberLogin.pending, (state) => {
        state.loading = true;
      })
      .addCase(phoneNumberLogin.fulfilled, (state, action) => {
        toast("OTP Sent Successful");
        state.loading = false;   
      })
      .addCase(phoneNumberLogin.rejected, (state, action) => {
        state.loading = false;
      })

      .addCase(otpVerification.pending, (state) => {
        state.loading = true;
      })
      .addCase(otpVerification.fulfilled, (state, action:any) => {
        console.log(action.payload, "THE-USER-DATA");
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;

        toast("Login Success!");

        window.localStorage.setItem(AUTH_TOKEN, action.payload.token)

      })
      .addCase(otpVerification.rejected, (state, action) => {
        state.loading = false;
      })

      // Get Profile Details
      .addCase(getProfileDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProfileDetails.fulfilled, (state, action:any) => {
        console.log(action.payload, "THE-USER-DATA");
        state.loading = false;
        state.user = action.payload.user;
      })
      .addCase(getProfileDetails.rejected, (state, action) => {
        state.loading = false;
      })

      .addCase(updateProfileDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateProfileDetails.fulfilled, (state, action:any) => {
        toast("Profile Updated Success");

        console.log(action.payload, "THE-USER-DATA");
        state.loading = false;
        state.user = action.payload.user;
        
      })
      .addCase(updateProfileDetails.rejected, (state, action) => {
        state.loading = false;
      })



      


     
    //   .addCase(getCurrentUser.pending, (state) => {
    //     state.pageLoading = true;
    //   })
    //   .addCase(getCurrentUser.fulfilled, (state, action) => {
    //     console.log(action.payload, "THE-USER-DATA");
    //     state.redirect = "/";
    //     // state.token = action.payload.token;
    //     state.user = action.payload;
    //     state.pageLoading = false;
    //   })
    //   .addCase(getCurrentUser.rejected, (state, action) => {
    //     state.message = action.payload;
    //     state.showMessage = true;
    //     state.pageLoading = false;
    //   });
  },
});

export const {
  authenticated,
  setToken,
} = authSlice.actions;

export default authSlice.reducer;
