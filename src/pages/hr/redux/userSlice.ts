import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../../redux/store";

export interface UserInfo {
  user_id: number;
  total_time: number;
  late_count: number;
  work_shift: WorkShift;
}

export interface WorkShift {
  user_id: number;
  shift: number;
  clock_in: number;
  clock_out: number;
  total_time: number;
  late: number;
}

const initialState: UserInfo = {
  user_id: 0,
  total_time: 0,
  late_count: 0,
  work_shift: {
    user_id: 0,
    shift: 0,
    clock_in: 0,
    clock_out: 0,
    total_time: 0,
    late: 0,
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUserInfo: (state, action) => {
      if (action.payload) {
        state.user_id = action.payload.user_id;
        state.total_time = action.payload.total_time;
        state.late_count = action.payload.late_count;
        state.work_shift = action.payload.work_shift;
      }
    },
  },
});

export const { updateUserInfo } = userSlice.actions;
export const selectUser = (state: RootState) => state.user;
export const userReducer = userSlice.reducer;
