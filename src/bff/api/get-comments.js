import { transformComment } from "../transformers";

export const getComments = (postId) => {
	const requestParams = postId ? `?post_id=${postId}` : '';

	return fetch(`http://localhost:3005/comments${requestParams}`)
		.then(response => response.json())
		.then((comments) => {
			return comments && comments.map(transformComment)}
		);
}