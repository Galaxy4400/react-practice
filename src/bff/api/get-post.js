import { transformPost } from "../transformers";

export const getPost = (postId) =>
	fetch(`http://localhost:3005/posts/${postId}`)
		.then(response => {
			if (response.ok) return response;

			if (response.status === 404) { 
				return Promise.reject('Такая страница не существует');
			}
			
			return Promise.reject('Другая ошибка');
		})
		.then((response) => response.json())
		.then((loadedPost) => loadedPost && transformPost(loadedPost));