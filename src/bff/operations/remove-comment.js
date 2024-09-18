import { deleteComment } from "../api";
import { ROLE } from "../constants";
import { sessions } from "../sessions";

export const removeComment = async (hash, commentId) => {
	const accessRoles = [ROLE.ADMIN, ROLE.MODERATOR];

	const access = await sessions.access(hash, accessRoles);

	if (!access) {
		return {
			error: 'Доступ запрещен',
			res: null,
		}
	}

	deleteComment(commentId);

	return {
		error: null,
		res: true,
	}
}