import { transformPost } from "../transformers";

export const getPosts = (searchTerm, page, limit) => {
	const searchParams = searchTerm ? `title_like=${searchTerm}` : '';
	const pagingParams = page ? `_page=${page}&_limit=${limit}` : '';

	const requestParams = [searchParams, pagingParams].join('&');

	return fetch(`http://localhost:3005/posts${requestParams ? `?${requestParams}` : ''}`)
		.then(response => response.json())
		.then(loadedPosts => loadedPosts && loadedPosts.map(transformPost));
	}