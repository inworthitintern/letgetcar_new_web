// hashitso_daya => DB
// hashitso_daya => USER
// 3p71f^Vlewbp => PASSWORD


import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import buyCarServices from "@/services/buycarService";


// interface User {
//   id: string;
//   name: string;
//   email: string;
//   phone_number: string;
//   is_old: boolean;
//   otp: string;
//   expire_otp_time: string;
//   created_at: string;
//   updated_at: string;
// }


interface homeState {
  loading: boolean;
  homeData: object[] | null;
}


export const initialState: homeState = {
  loading: true,
  homeData: [],
};

export const getHomePageData = createAsyncThunk(
  "home/allData",
  async (_, { dispatch, rejectWithValue }) => {
    
    try {
        const allDatas = Promise.all([buyCarServices.getBrands(), buyCarServices.getBodyTypes(), buyCarServices.getCategories(), buyCarServices.getBuyCars({is_recommended_car: 1}), buyCarServices.getBuyCars({is_letget_car_trusted: 1}), buyCarServices.getBuyCars({is_new_arrival: 1})]).then((values) => {
          return values
        });


        return allDatas

    //   const phoneNumberLogin = await authService.loginWithPhoneNumber(phone_number)

    //   if(phoneNumberLogin) {
    //     if(noRedirectEnable) {
    //       router.replace(`/otp-verification?phone_number=${phone_number}`)
    //    }

    //     return {phone_number, noRedirectEnable}
    //   }
      
    } catch (err:any) {
      return rejectWithValue(err.message || "Error");
    }
  }
);





export const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {

    // updateUserInfo: (state, action) => {
    //   state.user = { ...state.user, ...action.payload };
    // },
    // setToken: (state, action) => {
    //   state.token = action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getHomePageData.pending, (state) => {
        state.loading = true;
      })
      .addCase(getHomePageData.fulfilled, (state, action) => {
        state.loading = false;   
        state.homeData = action.payload
      })
      .addCase(getHomePageData.rejected, (state, action) => {
        state.loading = false;
      })
  },
});

// export const {
//   authenticated,
//   setToken,
// } = homeSlice.actions;

export default homeSlice.reducer;
