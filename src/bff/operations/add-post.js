import { createPost } from "../api";
import { ROLE } from "../constants";
import { sessions } from "../sessions";

export const addPost = async (hash, newPostData) => {
	const accessRoles = [ROLE.ADMIN];

	const access = await sessions.access(hash, accessRoles);

	if (!access) {
		return {
			error: 'Доступ запрещен',
			res: null,
		}
	}

	const newPost = await createPost(newPostData).then(response => response.json());

	return {
		error: null,
		res: newPost,
	};
};