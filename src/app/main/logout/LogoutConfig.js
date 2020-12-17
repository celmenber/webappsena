import { authRoles } from 'app/auth';
import store from 'app/store';
import { logoutUser } from 'app/auth/store/userSlice';

const LogoutConfig = {
	auth: authRoles.user,
	routes: [
		{
			path: '/logout',
			component: () => {
				store.dispatch(logoutUser());
				return 'Saliendo de tu cuenta...';
			}
		}
	]
};

export default LogoutConfig;
