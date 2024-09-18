import { transformUser } from "../transformers";

export const getUser = async (userIdentifier, isId = false) => {
	const requestStr = isId ? `/${userIdentifier}` : `?login=${userIdentifier}`;

	return fetch(`http://localhost:3005/users${requestStr}`)
		.then(response => response.json())
		.then(loadedUser => {
			const user = Array.isArray(loadedUser) ? loadedUser[0] : loadedUser;

			return user && transformUser(user);
		});
}