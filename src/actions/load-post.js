import { setPostData } from "./set-post-data";

export const loadPost = (postId, requestServer) => (dispatch) =>
	requestServer('fetchPost', postId).then((postData) => {
		if (postData.res) {
			dispatch(setPostData(postData.res));
		};

		return postData;
	});