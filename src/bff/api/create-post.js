import { generateData } from "../utils";

export const createPost = ({ title, imageUrl, content }) =>
	fetch('http://localhost:3005/posts', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=utf-8'
		},
		body: JSON.stringify({
			title,
			content,
			image_url: imageUrl,
			published_at: generateData(),
		}),
	});