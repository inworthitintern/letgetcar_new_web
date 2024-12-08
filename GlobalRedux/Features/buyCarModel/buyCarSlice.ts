// hashitso_daya => DB
// hashitso_daya => USER
// 3p71f^Vlewbp => PASSWORD

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import buyCarServices from "@/services/buycarService";

interface IBuyCarsState {
  loading: boolean;
  buyCarLists: object[] | null;
  buyCarDetails: object | null;
  currentPage: number;
  totalPages: number;
  totalCount: number;
}

export const initialState: IBuyCarsState = {
  loading: false,
  buyCarLists: [],
  buyCarDetails: null,
  currentPage: 1,
  totalPages: 1,
  totalCount: 0,
};

export const getBuyCarModels = createAsyncThunk(
  "buycarsmodel/allData",
  async (
    {
      filters,
      isLoggedIn,
      page,
    }: { filters: object | string; isLoggedIn: boolean; page: number },
    { rejectWithValue }
  ) => {
    try {
      // Ensure `filters` includes the `page` parameter
      if (typeof filters === "object") {
        filters = { ...filters, page };
      } else {
        filters = `${filters}&page=${page}`;
      }

      const response = isLoggedIn
        ? await buyCarServices.getBuyCarsLoggedInUser(filters)
        : await buyCarServices.getBuyCars(filters);

      return response;
    } catch (err: any) {
      return rejectWithValue(err.message || "Error");
    }
  }
);

export const getBuyCarDetailModels = createAsyncThunk(
  "buycarsmodel/getDetails",
  async ({ slug, isLoggedIn }, { dispatch, rejectWithValue }) => {
    try {
      const allDatas = isLoggedIn
        ? await buyCarServices.getBuyCarLoggedInUserDetails(slug)
        : await buyCarServices.getBuyCarDetails(slug);
      return allDatas;
    } catch (err: any) {
      return rejectWithValue(err.message || "Error");
    }
  }
);

export const buyCarModelSlice = createSlice({
  name: "buycarsmodel",
  initialState,
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
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

        const { data, total, last_page } = action.payload.data;
        console.log(total, last_page, "hellloo-iiiii");
        state.buyCarLists = data;
        state.totalCount = total;
        state.totalPages = last_page;
      })
      .addCase(getBuyCarModels.rejected, (state) => {
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
      });
  },
});

// export const {
//   authenticated,
//   setToken,
// } = buyCarModelSlice.actions;

export const { setCurrentPage } = buyCarModelSlice.actions;

export default buyCarModelSlice.reducer;
