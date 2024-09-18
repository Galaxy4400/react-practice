import { setPost } from "../api";
import { ROLE } from "../constants";
import { sessions } from "../sessions";

export const updatePost = async (hash, postId, newPostData) => {
	const accessRoles = [ROLE.ADMIN];

	const access = await sessions.access(hash, accessRoles);

	if (!access) {
		return {
			error: 'Доступ запрещен',
			res: null,
		}
	}

	await setPost(postId, newPostData);

	return {
		error: null,
		res: true,
	}
}