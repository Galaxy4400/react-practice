export const setPost = (postId, { title, imageUrl, content }) => fetch(`http://localhost:3005/posts/${postId}`, {
		method: 'PATCH',
		headers: {
			'Content-Type': 'application/json;charset=utf-8'
		},
		body: JSON.stringify({
			title,
			content,
			image_url: imageUrl,
		}),
	});