import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getFlights } from "@/services/flightApi";
import { Flight } from "@/types/typesFlight";

export const fetchFlights = createAsyncThunk<Flight[], string>(
  "flights/fetchFlights",
  async (airport) => {
    const response = await getFlights(airport);
    return response;
  }
);

const flightSlice = createSlice({
  name: "flights",
  initialState: {
    results: [] as Flight[],
    loading: false,
    error: null as string | null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFlights.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFlights.fulfilled, (state, action) => {
        state.loading = false;
        state.results = action.payload;
      })
      .addCase(fetchFlights.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || null;
      });
  },
});

export default flightSlice.reducer;
