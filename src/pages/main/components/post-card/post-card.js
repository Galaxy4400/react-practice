import { Link } from "react-router-dom";

export const PostCard = ({ id, title, imageUrl, publishedAt, commentsCount }) => {
	return (
		<Link to={`/post/${id}`} style={{display: 'block'}}>
			<div>
				<img src={imageUrl} alt="post" />
				<h3>{title}</h3>
				<p>Дата публикации: {publishedAt}</p>
				<p>Количество комментариев: {commentsCount}</p>
			</div>
		</Link>
	)
};