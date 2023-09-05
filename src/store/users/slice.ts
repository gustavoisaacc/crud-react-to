import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const DEFAULT_STATE = [
	{
		id: "1",
		name: "Peter Doe",
		email: "pepito@pepito.com",
		github: "pepito",
	},
	{
		id: "2",
		name: "Peter Doe",
		email: "pepito@pepito.com",
		github: "gustavoisaac",
	},
	{
		id: "3",
		name: "Peter Doe",
		email: "pepito@pepito.com",
		github: "aifos",
	},
];

export type UserId = string;

export interface User {
	name: string;
	email: string;
	github: string;
}

export interface UserWithId extends User {
	id: UserId;
}

const initialState: UserWithId[] = (() => {
	const persistetState = localStorage.getItem("USERS_V1");
	if (persistetState) {
		return JSON.parse(persistetState).users;
	}
	return DEFAULT_STATE;
})();

export const usersSlice = createSlice({
	name: "users",
	initialState,
	reducers: {
		addNewUser: (state, action: PayloadAction<User>) => {
			const id = crypto.randomUUID();
			return [...state, { id, ...action.payload }];
		},
		deleteUserById: (state, action: PayloadAction<UserId>) => {
			const id = action.payload;
			return state.filter((user) => user.id !== id);
		},
		editUserSlice: (state, action: PayloadAction<UserWithId>) => {
			const { id, name, email, github } = action.payload;
			const newUserEdit = state.find((user) => user.id === id);
			if (newUserEdit) {
				newUserEdit.name = name;
				newUserEdit.email = email;
				newUserEdit.github = github;
			}
		},
	},
});

export default usersSlice.reducer;
export const { addNewUser, deleteUserById, editUserSlice } = usersSlice.actions;
