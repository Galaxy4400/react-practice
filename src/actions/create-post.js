export const createPost = (requestServer, newPostData) => () => 
	requestServer('addPost', newPostData);