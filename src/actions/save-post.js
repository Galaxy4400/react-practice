import { loadPost } from "./load-post";

export const savePost = (requestServer, postId, newPostData) => (dispatch) => 
	requestServer('updatePost', postId, newPostData).then(() => {
		dispatch(loadPost(postId, requestServer));
	});