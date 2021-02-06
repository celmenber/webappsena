import React from 'react';

const ModernSearchPageConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/pages/menucontable',
			component: React.lazy(() => import('./MenuContablePage'))
		}
	]
};

export default ModernSearchPageConfig;
