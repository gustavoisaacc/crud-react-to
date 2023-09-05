import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../store/users/slice";

const persisteLocalMiddleware = (store) => (next) => (action) => {
	next(action);
	localStorage.setItem("USERS_V1", JSON.stringify(store.getState()));
};

export const store = configureStore({
	reducer: {
		users: userReducer,
	},
	middleware: [persisteLocalMiddleware],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
