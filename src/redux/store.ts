import { configureStore } from "@reduxjs/toolkit";
import { localReducer } from "../pages/hr/redux/localSlice";
import { userReducer } from "../pages/hr/redux/userSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    local: localReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
