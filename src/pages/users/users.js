import { UserRow } from "./components";
import { useServerRequest } from "../../hooks";
import { useEffect, useState } from "react";

export const Users = () => {
	const [roles, setRoles] = useState([]);
	const [users, setUsers] = useState([]);
	const [errorMessage, setErrorMessage] = useState(null);
	
	const requestServer = useServerRequest();

	useEffect(() => {
		Promise.all([
			requestServer('fetchUsers'),
			requestServer('fetchRoles'),
		]).then(([usersResponse, rolesResponse]) => {
			setErrorMessage(null);

			if (usersResponse.error || rolesResponse.error) {
				setErrorMessage(usersResponse.error || rolesResponse.error);
				return;
			}

			setUsers(usersResponse.res);
			setRoles(rolesResponse.res);
		});
	}, [requestServer]);

	const onUserRemove = (userId) => {
		requestServer('removeUser', userId)
			.then(({ error }) => {
				if (error) {
					setErrorMessage(error);
					return;
				}

				setUsers(users.filter(({id}) => id !== userId));
			});
	};

	if (errorMessage) {
		return (
			<div>
				<h2>Ошибка</h2>
				<div>{errorMessage}</div>
			</div>
		);
	}

	return (
		<div>
			<h2>Пользователи</h2>
			<table>
				<thead>
					<tr>
						<th>Логин</th>
						<th>Дата регистрации</th>
						<th>Роль</th>
						<th></th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{users.map(({ id, login, registeredAt, roleId }) => (
						<UserRow {...{ id, login, registeredAt, roleId, roles, onUserRemove }} key={id} />
					))}
				</tbody>
			</table>
		</div>
	)
}
