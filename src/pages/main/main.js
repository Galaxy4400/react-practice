import { useEffect, useState } from "react";
import { useServerRequest } from "../../hooks";
import { Pagination, PostCard, Search } from "./components";
import { PAGINATION_LIMIT } from "../../constants";

export const Main = () => {
	const requestServer = useServerRequest();
	const [page, setPage] = useState(1);
	const [lastPage, setLastPage] = useState(1);
	const [posts, setPosts] = useState([]);
	const [searchTerm, setSearchTerm] = useState('');

	useEffect(() => {
		requestServer('fetchPosts', searchTerm, page, PAGINATION_LIMIT).then(({res}) => {
			console.log(res);
			setPosts(res.posts);
			setLastPage(res.last);

			if (page > lastPage) setPage(1);
		});
	}, [requestServer, page, searchTerm, lastPage]);

	return (
		<div style={{margin: '50px 0px'}}>
			<Search doSearch={setSearchTerm}/>
			<div style={{display: 'grid', gap: '20px', gridTemplateColumns: 'repeat(3, 1fr)', margin: '50px 0px'}}>
				{posts.map((post) => <PostCard {...post} key={post.id} />)}
			</div>
			<Pagination setPage={setPage} page={page} lastPage={lastPage} />
		</div>
	)
};