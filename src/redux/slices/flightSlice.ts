import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { searchFlights } from "@/services/flightApi";
import { Flight } from "@/types/typesFlight";

interface FlightState {
  outboundFlights: Flight[];
  returnFlights: Flight[];
  isLoading: boolean;
  error: string | null;
  searchHistory: string[];
}

const initialState: FlightState = {
  outboundFlights: [],
  returnFlights: [],
  isLoading: false,
  error: null,
  searchHistory: [],
};

const flightSlice = createSlice({
  name: "flights",
  initialState,
  reducers: {
    setSearchHistory(state, action: PayloadAction<string[]>) {
      state.searchHistory = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchFlights.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(searchFlights.fulfilled, (state, action) => {
        state.isLoading = false;
        state.outboundFlights = action.payload.outboundFlights;
        state.returnFlights = action.payload.returnFlights;
      })
      .addCase(searchFlights.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Error fetching flights";
      });
  },
});

export const { setSearchHistory } = flightSlice.actions;
export default flightSlice.reducer;
