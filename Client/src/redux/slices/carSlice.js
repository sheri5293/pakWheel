import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCars = createAsyncThunk("cars/fetchCars", async (filters) => {
  const query = new URLSearchParams(filters).toString();
  const response = await axios.get(`http://localhost:5000/api/cars?${query}`);
  return response.data;
});

const carSlice = createSlice({
  name: "cars",
  initialState: {
    cars: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.cars = action.payload;
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default carSlice.reducer;
