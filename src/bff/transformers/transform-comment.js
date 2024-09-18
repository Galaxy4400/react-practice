export const transformComment = (dbComment) => ({
	id: dbComment.id,
	postId: dbComment.post_id,
	userId: dbComment.user_id,
	publishedAt: dbComment.published_at,
	content: dbComment.content,
});