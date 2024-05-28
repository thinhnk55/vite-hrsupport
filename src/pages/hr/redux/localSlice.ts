import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../../redux/store";

export interface LocalData {
  ip: string;
}

const initialState: LocalData = {
  ip: "",
};

export const localSlice = createSlice({
  name: "local",
  initialState,
  reducers: {
    updateIp: (state, action) => {
      state.ip = action.payload;
      console.log("Update IP: " + state.ip);
    },
  },
});

export const { updateIp } = localSlice.actions;
export const selectLocal = (state: RootState) => state.local;
export const localReducer = localSlice.reducer;
