import { generateData } from "../utils";


export const createUser = (login, password) =>
	fetch('http://localhost:3005/users', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=utf-8'
		},
		body: JSON.stringify({
			login,
			password,
			registed_at: generateData(),
			role_id: 2
		}),
	})
	.then(createdUser => createdUser.json());