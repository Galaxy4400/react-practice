import { getComments, getPosts } from "../api";
import { getCommentsCount } from "../utils";

export const fetchPosts = async (searchTerm, page, limit = 10) => {
	const [posts, comments] = await Promise.all([getPosts(searchTerm, page, limit), getComments()]);

	const postsWithCommentsCount = posts.map(post => ({
		...post,
		commentsCount: getCommentsCount(post.id, comments),
	}));

	if (page) {
		const allPosts = await getPosts(searchTerm);
		const postsCount = allPosts.length;
		const lastPage = Math.floor(postsCount / limit);

		return {
			error: null,
			res: {
				posts: postsWithCommentsCount,
				all: postsCount,
				last: lastPage || 1,
				limit,
			}
		}
	}
	
	return {
		error: null,
		res: postsWithCommentsCount,
	}
};