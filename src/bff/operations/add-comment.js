import { createComment } from "../api";
import { ROLE } from "../constants";
import { sessions } from "../sessions";

export const addComment = async (hash, postId, userId, content) => {
	const accessRoles = [ROLE.ADMIN, ROLE.MODERATOR, ROLE.READER];

	const access = await sessions.access(hash, accessRoles);

	if (!access) {
		return {
			error: 'Доступ запрещен',
			res: null,
		}
	}

	const newComment = await createComment(postId, userId, content);

	return {
		error: null,
		res: newComment,
	};
};