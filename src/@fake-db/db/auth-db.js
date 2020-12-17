import FuseUtils from '@fuse/utils';
import _ from '@lodash';
import jwt from 'jsonwebtoken';
import mock from '../mock';
/* eslint-disable camelcase */

const jwtConfig = {
	secret: 'some-secret-code-goes-here',
	expiresIn: '2 days' // A numeric value is interpreted as a seconds count. If you use a string be sure you provide the time units (days, hours, etc)
};

const authDB = {
	users: [
		{
			uuid: '0123456789',
			from: 'custom-db',
			password: 'admin',
			role: 'admin',
			data: {
				displayName: 'celso Mendoza',
				photoURL: 'assets/images/avatars/user.jpg',
				email: 'admin',
				settings: {
					layout: {
						style: 'layout1',
						config: {
							scroll: 'content',
							navbar: {
								display: true,
								folded: true,
								position: 'left'
							},
							toolbar: {
								display: true,
								style: 'fixed',
								position: 'below'
							},
							footer: {
								display: false,
								style: 'fixed',
								position: 'below'
							},
							mode: 'fullwidth'
						}
					},
					customScrollbars: true,
				},
				shortcuts: ['applications', 'GestionGAES', 'crearempresa']
			}
		},
		{
			uuid: '0123456788',
			from: 'custom-db',
			password: 'admin1',
			role: 'dashboards',
			data: {
				displayName: 'Profe celso Mendoza',
				photoURL: 'assets/images/avatars/user.jpg',
				email: 'admin1',
				settings: {
					layout: {
						style: 'layout1',
						config: {
							scroll: 'content',
							navbar: {
								display: true,
								folded: true,
								position: 'left'
							},
							toolbar: {
								display: true,
								style: 'fixed',
								position: 'below'
							},
							footer: {
								display: false,
								style: 'fixed',
								position: 'below'
							},
							mode: 'fullwidth'
						}
					},
					customScrollbars: true,
				},
				shortcuts: ['applications', 'GestionGAES', 'crearempresa']
			}
		},
	]
};

mock.onGet('/api/auth').reply(config => {
	const data = JSON.parse(config.data);
	const { email, password } = data;

	const user = _.cloneDeep(authDB.users.find(_user => _user.data.email === email));

	const error = {
		email: user ? null : 'Verifica tu usuario o email',
		password: user && user.password === password ? null : 'Verifica tu contraseña'
	};

	if (!error.email && !error.password && !error.displayName) {
		delete user.password;

		const access_token = jwt.sign({ id: user.uuid }, jwtConfig.secret, { expiresIn: jwtConfig.expiresIn });

		const response = {
			user,
			access_token
		};

		return [200, response];
	}
	return [200, { error }];
});

mock.onGet('/api/auth/access-token').reply(config => {
	const data = JSON.parse(config.data);
	const { access_token } = data;

	try {
		const { id } = jwt.verify(access_token, jwtConfig.secret);

		const user = _.cloneDeep(authDB.users.find(_user => _user.uuid === id));
		delete user.password;

		const updatedAccessToken = jwt.sign({ id: user.uuid }, jwtConfig.secret, { expiresIn: jwtConfig.expiresIn });

		const response = {
			user,
			access_token: updatedAccessToken
		};

		return [200, response];
	} catch (e) {
		const error = 'Token de acceso no válido detectado';
		return [401, { error }];
	}
});

mock.onPost('/api/auth/register').reply(request => {
	const data = JSON.parse(request.data);
	const { displayName, password, email } = data;
	const isEmailExists = authDB.users.find(_user => _user.data.email === email);
	const error = {
		email: isEmailExists ? 'El correo electrónico ya está en uso' : null,
		displayName: displayName !== '' ? null : 'Ingrese el nombre para mostrar',
		password: null
	};
	if (!error.displayName && !error.password && !error.email) {
		const newUser = {
			uuid: FuseUtils.generateGUID(),
			from: 'custom-db',
			password,
			role: 'admin',
			data: {
				displayName,
				photoURL: 'assets/images/avatars/Abbott.jpg',
				email,
				settings: {},
				shortcuts: []
			}
		};

		authDB.users = [...authDB.users, newUser];

		const user = _.cloneDeep(newUser);
		delete user.password;

		const access_token = jwt.sign({ id: user.uuid }, jwtConfig.secret, { expiresIn: jwtConfig.expiresIn });

		const response = {
			user,
			access_token
		};

		return [200, response];
	}
	return [200, { error }];
});

mock.onPost('/api/auth/user/update').reply(config => {
	const data = JSON.parse(config.data);
	const { user } = data;

	authDB.users = authDB.users.map(_user => {
		if (user.uuid === user.id) {
			return _.merge(_user, user);
		}
		return _user;
	});

	return [200, user];
});
