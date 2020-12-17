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
			path: '/apps/gestiontercero/:id',
			component: React.lazy(() => import('./ContactsApp'))
		},
		{
			path: '/apps/gestiontercero',
			component: () => <Redirect to="/apps/gestiontercero/all" />
		}
	]
};

export default ContactsAppConfig;
