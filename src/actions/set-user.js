import { ACTION_TYPE } from "./action-type";

export const setUser = (user) => {
	sessionStorage.setItem('userData', JSON.stringify(user));

	return { type: ACTION_TYPE.SET_USER, payload: user };
};