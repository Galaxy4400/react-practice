import { generateData } from "../utils";

export const createComment = (postId, userId, content) =>
	fetch('http://localhost:3005/comments', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=utf-8'
		},
		body: JSON.stringify({
			post_id: postId,
			user_id: userId,
			published_at: generateData(),
			content,
		}),
	});