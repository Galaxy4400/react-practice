import { createSession, deleteSession, getSession, getUser } from "./api";

export const sessions = {
	create: (user) => {
		const hash = Math.random().toFixed(50);

		createSession(hash, user.id);

		return hash;
	},

	remove: async (hash) => {
		const session = await getSession(hash);

		if (!session) return;

		deleteSession(session.id);
	},

	access: async (hash, accessRoles) => {
		const session = await getSession(hash);

		if (!session) return;

		const user = await getUser(session.userId, true);

		return !!user && accessRoles.includes(user.roleId);
	}
};