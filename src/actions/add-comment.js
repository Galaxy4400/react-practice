import { loadPost } from "./load-post";

export const addComment = (requestServer, postId, userId, content) => (dispatch) => {
	requestServer('addComment', postId, userId, content).then(() => {
		dispatch(loadPost(postId, requestServer));
	});
};