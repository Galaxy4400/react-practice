import { loadPost } from "./load-post";

export const removeComment = (requestServer, id, postId) => (dispatch) => {
	requestServer('removeComment', id).then(() => {
		dispatch(loadPost(postId, requestServer));
	});
};