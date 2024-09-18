import { sessions } from "../sessions";

export const logout = async (session) => {
	sessionStorage.removeItem('userData');

	sessions.remove(session);
};