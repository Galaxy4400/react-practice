export const getCommentsCount = (postId, comments = []) => {
	const postComments = comments.filter((comment) => postId === comment.postId);

	return postComments.length;
};