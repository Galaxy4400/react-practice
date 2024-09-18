import { useRef } from "react";
import { useModal } from "../../../../providers";
import { useDispatch } from "react-redux";
import { useServerRequest } from "../../../../hooks";
import { createPost, removePost, savePost } from "../../../../actions";
import { useNavigate } from "react-router-dom";

export const PostForm = ({ post }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const requestServer = useServerRequest();
	
	const { closeModal } = useModal();

	const imageRef = useRef(null);
	const titleRef = useRef(null);
	const contentRef = useRef(null);

	const postSaveHandler = () => {
		const newPostData = {
			imageUrl: imageRef.current.value,
			title: titleRef.current.value,
			content: contentRef.current.innerHTML,
		};

		if (post) {
			dispatch(savePost(requestServer, post.id, newPostData))
				.then(() => closeModal());
		} else {
			dispatch(createPost(requestServer, newPostData))
				.then(({res}) => navigate(`/post/${res.id}`));
		}

	};

	const postRemoveHandler = () => {
		dispatch(removePost(requestServer, post.id))
			.then(() => {
				closeModal();
				navigate('/');
			});
	};

	return (
		<div>
			<div>
				<h2>{post ? 'Редактирование поста' : 'Созданите поста'}</h2>
				{post && <div>Дата публикации: {post?.publishedAt}</div>}
			</div>
			<div>
				<input ref={imageRef} defaultValue={post?.imageUrl} placeholder="Изображение..." />
				<input ref={titleRef} defaultValue={post?.title} placeholder="Заголовок..." />
				<div ref={contentRef} contentEditable={true} suppressContentEditableWarning={true}>{post?.content}</div>
			</div>
			<div>
				<button className="btn" onClick={() => postSaveHandler()}>Сохранить</button>
				{post && <button className="btn" onClick={() => postRemoveHandler()}>Удалить</button>}
			</div>
		</div>
	)
};