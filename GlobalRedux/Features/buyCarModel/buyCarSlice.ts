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


interface IBuyCarsState {
  loading: boolean;
  buyCarLists: object[] | null;
  buyCarDetails: object | null
}


export const initialState: IBuyCarsState = {
  loading: false,
  buyCarLists: [],
  buyCarDetails: {},
};

export const getBuyCarModels = createAsyncThunk(
  "buycarsmodel/allData",
  async ({filters, isLoggedIn}, { dispatch, rejectWithValue }) => {
    
    try {
        const allDatas = isLoggedIn ? await buyCarServices.getBuyCarsLoggedInUser(filters):  await buyCarServices.getBuyCars(filters)
        return allDatas

    } catch (err:any) {
      return rejectWithValue(err.message || "Error");
    }
  }
);

export const getBuyCarDetailModels = createAsyncThunk(
  "buycarsmodel/getDetails",
  async ({slug, isLoggedIn}, { dispatch, rejectWithValue }) => {
    
    try {
        const allDatas = isLoggedIn ? await buyCarServices.getBuyCarLoggedInUserDetails(slug):  await buyCarServices.getBuyCarDetails(slug)
        return allDatas

    } catch (err:any) {
      return rejectWithValue(err.message || "Error");
    }
  }
);


export const buyCarModelSlice = createSlice({
  name: "buycarsmodel",
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
      .addCase(getBuyCarModels.pending, (state) => {
        state.loading = true;
      })
      .addCase(getBuyCarModels.fulfilled, (state, action) => {
        state.loading = false;   
        state.buyCarLists = action.payload.data;
      })
      .addCase(getBuyCarModels.rejected, (state, action) => {
        state.loading = false;
      })
      
      // get Details Model
      .addCase(getBuyCarDetailModels.pending, (state) => {
        state.loading = true;
      })
      .addCase(getBuyCarDetailModels.fulfilled, (state, action) => {
        state.loading = false;   
        state.buyCarDetails = action.payload;
      })
      .addCase(getBuyCarDetailModels.rejected, (state, action) => {
        state.loading = false;
      })
  },
});

// export const {
//   authenticated,
//   setToken,
// } = buyCarModelSlice.actions;

export default buyCarModelSlice.reducer;
