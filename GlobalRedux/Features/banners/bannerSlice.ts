// hashitso_daya => DB
// hashitso_daya => USER
// 3p71f^Vlewbp => PASSWORD


import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import bannerServices from "@/services/bannerService";



interface homeState {
  loading: boolean;
  banners: object[] | null;
}


export const initialState: homeState = {
  loading: true,
  banners: [],
};

export const getBanners = createAsyncThunk(
  "banner/allData",
  async (type, { dispatch, rejectWithValue }) => {
    
    try {
       const banners = await bannerServices.getBanners({type});

       if(banners) {
            return banners
       }

    
      
    } catch (err:any) {
      return rejectWithValue(err.message || "Error");
    }
  }
);





export const bannerSlice = createSlice({
  name: "banners",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBanners.pending, (state) => {
        state.loading = true;
      })
      .addCase(getBanners.fulfilled, (state, action) => {
        state.loading = false;   
        state.banners = action.payload
      })
      .addCase(getBanners.rejected, (state, action) => {
        state.loading = false;
      })
  },
});

// export const {
//   authenticated,
//   setToken,
// } = bannerSlice.actions;

export default bannerSlice.reducer;
