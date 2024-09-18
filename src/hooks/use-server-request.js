import { useSelector } from "react-redux";
import { selecthash } from "../selectors";
import { server } from "../bff";
import { useCallback } from "react";

export const useServerRequest = () => {
	const session = useSelector(selecthash);

	return useCallback((operation, ...params) => {
		const request = ['register', 'authorize', 'fetchPost', 'fetchPosts'].includes(operation)
			? params
			: [session, ...params];

		return server[operation](...request);
	}, [session]);
}