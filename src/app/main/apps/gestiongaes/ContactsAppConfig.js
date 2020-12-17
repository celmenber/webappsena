import React from 'react';
import { Redirect } from 'react-router-dom';

const ContactsAppConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/apps/gestiongaes/:id',
			component: React.lazy(() => import('./ContactsApp'))
		},
		{
			path: '/apps/gestiongaes',
			component: () => <Redirect to="/apps/gestiongaes/all" />
		}
	]
};

export default ContactsAppConfig;
