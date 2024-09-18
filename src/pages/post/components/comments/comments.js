import { useState } from "react";
import { Comment } from "./comment/comment";
import { useDispatch, useSelector } from "react-redux";
import { selectUserId } from "../../../../selectors";
import { addComment } from "../../../../actions";
import { useServerRequest } from "../../../../hooks";

export const Comments = ({ comments, postId }) => {
	const [newComment, setNewComment] = useState('');

	const requestServer = useServerRequest();

	const dispatch = useDispatch();

	const userId = useSelector(selectUserId);

	const onNewCommentAdd = (requestServer, postId, userId, comment) => {
		dispatch(addComment(requestServer, postId, userId, comment));
		setNewComment('');
	};

	return (
		<div>
			<div>
				<textarea value={newComment} placeholder="Комментарий" onChange={({ target }) => setNewComment(target.value)}></textarea>
				<button className="btn" type="button" onClick={() => onNewCommentAdd(requestServer, postId, userId, newComment)}>Отправить</button>
			</div>
			<div>
				{comments.map(({ id, author, content, publishedAt }) => (
					<Comment {...{ id, author, content, publishedAt, postId }} key={id} />
				))}
			</div>
		</div>
	)
};